import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

/* Post-processing, built for integrated GPUs.
 *
 * The lit parts of the lab (amber trims, LEDs, screens, the ray) are
 * emissive values above 1, and a soft bloom on them is most of what makes
 * the scene feel lit rather than coloured. But the stock bloom pass and a
 * multisampled half-float target together cost more than the whole scene on
 * a laptop's integrated graphics. So:
 *
 *   - the scene renders once to a plain half-float target (no MSAA);
 *   - LiteBloomPass blurs only a small copy of its bright parts — a quarter
 *     and a sixteenth of the size — and adds it back: a handful of passes,
 *     nearly all of them tiny;
 *   - FXAA smooths the edges at the end, where the resolution is too low
 *     for the eye to do it on its own.
 */

const BRIGHT = /* glsl */ `
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  uniform float uThreshold;
  uniform float uKnee;
  varying vec2 vUv;
  vec3 prefilter(vec3 c) {
    float br = max(c.r, max(c.g, c.b));
    float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
    soft = soft * soft / (4.0 * uKnee + 1e-4);
    float w = max(soft, br - uThreshold) / max(br, 1e-4);
    return c * w;
  }
  void main() {
    // Four bilinear taps average a 4x4 block: a clean quarter-size copy.
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(prefilter(min(c * 0.25, vec3(24.0))), 1.0);
  }`;

const DOWN = /* glsl */ `
  uniform sampler2D tDiffuse;
  uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0, -1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2(-1.0,  1.0)).rgb
           + texture2D(tDiffuse, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`;

// A 9-tap gaussian in five bilinear taps.
const BLUR = /* glsl */ `
  uniform sampler2D tDiffuse;
  uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270270;
    c += texture2D(tDiffuse, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tDiffuse, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
    c += texture2D(tDiffuse, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
    c += texture2D(tDiffuse, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
    gl_FragColor = vec4(c, 1.0);
  }`;

// The composite also does what three's OutputPass did as a separate
// full-screen pass — the renderer's tone mapping, then the sRGB encode — with
// the same functions in the same order, so the image is unchanged and one
// full-resolution pass (a large share of the lab's fill on integrated GPUs)
// is gone.
const COMPOSITE = /* glsl */ `
  #include <tonemapping_pars_fragment>
  uniform sampler2D tDiffuse;
  uniform sampler2D tNear;
  uniform sampler2D tFar;
  uniform float uStrength;
  uniform float uGrade;
  varying vec2 vUv;
  vec3 outputToneMap(vec3 c) {
    #if defined(LINEAR_TONE_MAPPING)
      return LinearToneMapping(c);
    #elif defined(REINHARD_TONE_MAPPING)
      return ReinhardToneMapping(c);
    #elif defined(CINEON_TONE_MAPPING)
      return CineonToneMapping(c);
    #elif defined(ACES_FILMIC_TONE_MAPPING)
      return ACESFilmicToneMapping(c);
    #elif defined(AGX_TONE_MAPPING)
      return AgXToneMapping(c);
    #elif defined(NEUTRAL_TONE_MAPPING)
      return NeutralToneMapping(c);
    #else
      return c;
    #endif
  }
  void main() {
    vec4 base = texture2D(tDiffuse, vUv);
    vec3 glow = texture2D(tNear, vUv).rgb * 0.75 + texture2D(tFar, vUv).rgb * 1.1;
    vec3 c = base.rgb + glow * uStrength;
    // The grade: a modelling viewport is a little flat and cool (uGrade 0); the
    // lit engine scene is richer and warmer (uGrade 1).
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(vec3(l), c, mix(0.74, 1.1, uGrade));
    c *= mix(vec3(0.97, 1.0, 1.03), vec3(1.04, 1.0, 0.95), uGrade);
    c = max((c - 0.18) * mix(0.94, 1.05, uGrade) + 0.18, 0.0);
    vec4 graded = vec4(outputToneMap(c), base.a);
    #ifdef SRGB_TRANSFER
      graded = sRGBTransferOETF(graded);
    #endif
    gl_FragColor = graded;
  }`;

/* The classic single-pass FXAA (luma edge direction, two-tap blend along it).
 * three's own FXAAShader is the heavier 3.11 variant, whose search loop
 * trips a compiler warning on some Windows (D3D) drivers; this one has no
 * loops and is all a small scene needs. Input is the tone-mapped image. */
const FXAA = {
  uniforms: { tDiffuse: { value: null }, resolution: { value: new THREE.Vector2(1 / 1024, 1 / 512) } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;
    void main() {
      vec3 luma = vec3(0.299, 0.587, 0.114);
      vec3 rgbNW = texture2D(tDiffuse, vUv + vec2(-1.0, -1.0) * resolution).rgb;
      vec3 rgbNE = texture2D(tDiffuse, vUv + vec2( 1.0, -1.0) * resolution).rgb;
      vec3 rgbSW = texture2D(tDiffuse, vUv + vec2(-1.0,  1.0) * resolution).rgb;
      vec3 rgbSE = texture2D(tDiffuse, vUv + vec2( 1.0,  1.0) * resolution).rgb;
      vec4 texM = texture2D(tDiffuse, vUv);
      vec3 rgbM = texM.rgb;
      float lNW = dot(rgbNW, luma);
      float lNE = dot(rgbNE, luma);
      float lSW = dot(rgbSW, luma);
      float lSE = dot(rgbSE, luma);
      float lM = dot(rgbM, luma);
      float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
      float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));

      vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
      float reduce = max((lNW + lNE + lSW + lSE) * 0.25 * (1.0 / 8.0), 1.0 / 128.0);
      float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
      dir = clamp(dir * rcp, vec2(-8.0), vec2(8.0)) * resolution;

      vec3 a = 0.5 * (texture2D(tDiffuse, vUv + dir * (1.0 / 3.0 - 0.5)).rgb
                    + texture2D(tDiffuse, vUv + dir * (2.0 / 3.0 - 0.5)).rgb);
      vec3 b = a * 0.5 + 0.25 * (texture2D(tDiffuse, vUv + dir * -0.5).rgb
                               + texture2D(tDiffuse, vUv + dir * 0.5).rgb);
      float lB = dot(b, luma);
      gl_FragColor = vec4((lB < lMin || lB > lMax) ? a : b, texM.a);
    }`,
};

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

const material = (fragmentShader, uniforms) =>
  new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader, uniforms, depthTest: false, depthWrite: false });

class LiteBloomPass extends Pass {
  constructor({ strength = 0.32, threshold = 1.0, knee = 0.5 } = {}) {
    super();
    const rt = () => new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false });
    this.near = [rt(), rt()]; // 1/4 size (ping-pong)
    this.far = [rt(), rt()]; // 1/16 size (ping-pong)

    this.bright = material(BRIGHT, { tDiffuse: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: threshold }, uKnee: { value: knee } });
    this.down = material(DOWN, { tDiffuse: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.blur = material(BLUR, { tDiffuse: { value: null }, uDir: { value: new THREE.Vector2() } });
    this.composite = material(COMPOSITE, { tDiffuse: { value: null }, tNear: { value: null }, tFar: { value: null }, uStrength: { value: strength }, uGrade: { value: 0 } });
    // Tone mapping and the sRGB encode are its own (see COMPOSITE), never
    // three's automatic ones.
    this.composite.toneMapped = false;
    this.quad = new FullScreenQuad(this.bright);
  }

  setSize(w, h) {
    const nw = Math.max(2, Math.round(w / 4));
    const nh = Math.max(2, Math.round(h / 4));
    const fw = Math.max(2, Math.round(w / 16));
    const fh = Math.max(2, Math.round(h / 16));
    this.near.forEach((t) => t.setSize(nw, nh));
    this.far.forEach((t) => t.setSize(fw, fh));
    this.srcSize = [w, h];
  }

  _run(renderer, mat, target) {
    this.quad.material = mat;
    renderer.setRenderTarget(target);
    this.quad.render(renderer);
  }

  _blur(renderer, pair, w, h) {
    const [a, b] = pair;
    this.blur.uniforms.uDir.value.set(1 / w, 0);
    this.blur.uniforms.tDiffuse.value = a.texture;
    this._run(renderer, this.blur, b);
    this.blur.uniforms.uDir.value.set(0, 1 / h);
    this.blur.uniforms.tDiffuse.value = b.texture;
    this._run(renderer, this.blur, a);
  }

  render(renderer, writeBuffer, readBuffer) {
    const [sw, sh] = this.srcSize;
    const [nw, nh] = [this.near[0].width, this.near[0].height];
    const [fw, fh] = [this.far[0].width, this.far[0].height];

    this.bright.uniforms.tDiffuse.value = readBuffer.texture;
    this.bright.uniforms.uTexel.value.set(1 / sw, 1 / sh);
    this._run(renderer, this.bright, this.near[0]);
    this._blur(renderer, this.near, nw, nh);

    this.down.uniforms.tDiffuse.value = this.near[0].texture;
    this.down.uniforms.uTexel.value.set(1 / nw, 1 / nh);
    this._run(renderer, this.down, this.far[0]);
    this._blur(renderer, this.far, fw, fh);
    this._blur(renderer, this.far, fw, fh);

    const u = this.composite.uniforms;
    u.tDiffuse.value = readBuffer.texture;
    u.tNear.value = this.near[0].texture;
    u.tFar.value = this.far[0].texture;
    this._run(renderer, this.composite, this.renderToScreen ? null : writeBuffer);
  }

  dispose() {
    [...this.near, ...this.far].forEach((t) => t.dispose());
    [this.bright, this.down, this.blur, this.composite].forEach((m) => m.dispose());
    this.quad.dispose();
  }
}

// Tone mapping defines, as OutputPass names them.
const TONE_DEFINES = {
  [THREE.LinearToneMapping]: 'LINEAR_TONE_MAPPING',
  [THREE.ReinhardToneMapping]: 'REINHARD_TONE_MAPPING',
  [THREE.CineonToneMapping]: 'CINEON_TONE_MAPPING',
  [THREE.ACESFilmicToneMapping]: 'ACES_FILMIC_TONE_MAPPING',
  [THREE.AgXToneMapping]: 'AGX_TONE_MAPPING',
  [THREE.NeutralToneMapping]: 'NEUTRAL_TONE_MAPPING',
};
// The composite's output defines, chosen exactly as three's OutputPass
// chooses its own (from the renderer's tone mapping and output colour space).
function outputDefines(material, renderer) {
  const key = `${renderer.toneMapping}|${renderer.outputColorSpace}`;
  if (material.userData.outputKey === key) return;
  material.userData.outputKey = key;
  material.defines = {};
  if (THREE.ColorManagement.getTransfer(renderer.outputColorSpace) === THREE.SRGBTransfer) material.defines.SRGB_TRANSFER = '';
  if (TONE_DEFINES[renderer.toneMapping]) material.defines[TONE_DEFINES[renderer.toneMapping]] = '';
  material.needsUpdate = true;
}

export function createPost(renderer, scene, camera) {
  const target = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 0 });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new LiteBloomPass();
  composer.addPass(bloom);
  outputDefines(bloom.composite, renderer);
  const fxaa = new ShaderPass(FXAA);
  composer.addPass(fxaa);

  return {
    render: () => composer.render(),
    // The scene draws into this target, never the screen; its programs are
    // keyed for an offscreen target (linear, untoned), like everything here.
    sceneTarget: target,
    // Every pass material, with whether it draws to the screen, so the lab
    // can compile them ahead of the first frame.
    programs() {
      outputDefines(bloom.composite, renderer);
      return [
        [bloom.bright, false], [bloom.down, false], [bloom.blur, false],
        [bloom.composite, !fxaa.enabled], [fxaa.material, true],
      ];
    },
    setSize(w, h, dpr) {
      composer.setPixelRatio(dpr);
      composer.setSize(w, h);
      // FXAA's whole job is to stand in for resolution; above ~1.75 device
      // pixels per CSS pixel the eye does it already.
      fxaa.enabled = dpr < 1.75;
      fxaa.material.uniforms.resolution.value.set(1 / (w * dpr), 1 / (h * dpr));
    },
    setBloom: (on) => (bloom.enabled = on),
    setGrade: (g) => (bloom.composite.uniforms.uGrade.value = g),
    dispose: () => composer.dispose(),
  };
}
