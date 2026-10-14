import * as THREE from 'three';

const clamp = THREE.MathUtils.clamp;
const smooth = (a, b, value) => {
  const t = clamp((value - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

function chooseQuality() {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const compact = Math.min(window.innerWidth, window.innerHeight) < 721;
  const memory = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const low = coarse || compact || memory <= 4 || cores <= 4;
  return {
    low,
    count: memory <= 2 ? 3500 : low ? 5500 : 12000,
    maxDpr: memory <= 2 ? 1 : low ? 1.25 : 1.5,
    pointSize: low ? 1.80 : 1.70,
  };
}

function seededRandom(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function readBounds(data) {
  const declared = data.bounds;
  const valid = declared?.min?.length === 3 && declared?.max?.length === 3
    && declared.min.every((value, axis) => Number.isFinite(value) && Number.isFinite(declared.max[axis])
      && (axis === 2 ? declared.max[axis] >= value : declared.max[axis] > value));
  // Declared bounds preserve the original photo crop when the contour is inset.
  const box = valid ? new THREE.Box3(
    new THREE.Vector3().fromArray(declared.min), new THREE.Vector3().fromArray(declared.max),
  ) : new THREE.Box3().setFromBufferAttribute(new THREE.BufferAttribute(data.positions, 3));
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  if (box.isEmpty() || !Number.isFinite(size.x + size.y) || size.x <= 0 || size.y <= 0) {
    throw new Error('Portrait geometry has no visible surface');
  }
  return { center, size };
}

// One-time sampling of the photographed foreground. Targets are flattened so
// the final dot positions align exactly with the original, frontal DOM image.
function makeParticles(data, bounds, count) {
  const random = seededRandom(0x5FACED);
  const source = data.positions;
  const indices = data.indices;
  const triangleCount = Math.floor(indices.length / 3);
  const cumulative = new Float64Array(triangleCount);
  let totalArea = 0;
  for (let triangle = 0; triangle < triangleCount; triangle++) {
    const a = indices[triangle * 3] * 3;
    const b = indices[triangle * 3 + 1] * 3;
    const c = indices[triangle * 3 + 2] * 3;
    const height = ((source[a + 1] + source[b + 1] + source[c + 1]) / 3 - bounds.center.y) / bounds.size.y + 0.5;
    const faceDensity = 1 + 2.5 * smooth(0.45, 0.82, height);
    const area = Math.abs(
      (source[b] - source[a]) * (source[c + 1] - source[a + 1])
      - (source[b + 1] - source[a + 1]) * (source[c] - source[a]),
    );
    totalArea += area * faceDensity;
    cumulative[triangle] = totalArea;
  }
  if (!Number.isFinite(totalArea) || totalArea <= 0) throw new Error('Portrait geometry has no triangles');

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const cloud = new Float32Array(count * 3);
  const seeds = new Float32Array(count * 4);
  const color = new THREE.Color();
  for (let particle = 0; particle < count; particle++) {
    const area = random() * totalArea;
    let low = 0;
    let high = triangleCount - 1;
    while (low < high) {
      const middle = (low + high) >>> 1;
      if (cumulative[middle] < area) low = middle + 1;
      else high = middle;
    }
    const ids = [indices[low * 3], indices[low * 3 + 1], indices[low * 3 + 2]];
    const root = Math.sqrt(random());
    const second = random();
    const weights = [1 - root, root * (1 - second), root * second];
    let x = 0;
    let y = 0;
    let r = 0;
    let g = 0;
    let blue = 0;
    for (let vertex = 0; vertex < 3; vertex++) {
      const offset = ids[vertex] * 3;
      const weight = weights[vertex];
      x += source[offset] * weight;
      y += source[offset + 1] * weight;
      r += data.colors[offset] * weight;
      g += data.colors[offset + 1] * weight;
      blue += data.colors[offset + 2] * weight;
    }
    positions.set([x - bounds.center.x, y - bounds.center.y, 0], particle * 3);
    color.setRGB(r, g, blue, THREE.SRGBColorSpace);
    colors.set([color.r, color.g, color.b], particle * 3);
    cloud.set([(random() - 0.5) * 1.7, random(), random() - 0.5], particle * 3);
    const lower = 1 - clamp((y - bounds.center.y) / bounds.size.y + 0.5, 0, 1);
    seeds.set([
      random(),
      0.55 + Math.pow(random(), 5) * 1.4,
      random() < 0.045 ? 1 : 0,
      lower,
    ], particle * 4);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aCloud', new THREE.BufferAttribute(cloud, 3));
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 4));
  geometry.setDrawRange(0, count);
  return geometry;
}

const vertexShader = /* glsl */ `
  attribute vec3 color;
  attribute vec3 aCloud;
  attribute vec4 aSeed;
  uniform float uProgress;
  uniform float uTime;
  uniform float uMotionStrength;
  uniform float uPointerStrength;
  uniform float uPointSize;
  uniform float uPixelRatio;
  uniform float uPointLimit;
  uniform float uTargetScale;
  uniform float uBottomY;
  uniform float uPortraitHeight;
  uniform float uPortraitWidth;
  uniform float uExitProgress;
  uniform float uWorkProgress;
  uniform float uWorkMode;
  uniform vec2 uExitTarget;
  uniform vec2 uWorkTarget;
  uniform vec4 uWorkOrigin;
  uniform vec2 uTargetCenter;
  uniform vec2 uViewport;
  uniform vec2 uFieldCenter;
  uniform vec2 uPointer;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vAssembly;
  float ease(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  }
  vec2 stir(vec2 point, float amount, vec4 seed, float extent) {
    float motion = amount * uMotionStrength;
    point += vec2(sin(uTime * 0.32 + seed.y * 6.1), cos(uTime * 0.27 + seed.z * 7.4))
      * clamp(extent * 0.006, 2.0, 4.0) * motion;
    vec2 delta = point - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    vec2 outward = delta / max(1.0, distance);
    point += (outward * 0.78 + vec2(-outward.y, outward.x) * 0.36)
      * 12.0 * influence * influence * uPointerStrength * motion;
    return point;
  }
  void main() {
    float rise = ease(clamp((uProgress - aSeed.x * 0.045) / 0.35, 0.0, 1.0));
    float delay = aSeed.x * 0.025 + aSeed.w * 0.030;
    float assembly = uProgress >= 0.90 ? 1.0 : ease(clamp((uProgress - 0.58 - delay) / 0.265, 0.0, 1.0));
    float depth = aCloud.z + 0.5;
    float extent = min(uViewport.x, uViewport.y);
    float along = 0.5 - aCloud.y;
    float across = aCloud.x / 0.85;
    across *= 0.35 + 0.65 * across * across;
    float curve = sin(aCloud.y * 5.4 + uProgress * 0.7 + aCloud.z * 0.22) * extent * 0.05;
    vec2 normal = normalize(vec2(-uViewport.y * 0.82, uViewport.x * 0.92));
    // Most stars share one gently curved diagonal: a dense spine with dusty
    // outer wings. A smaller field remains scattered around that Milky Way.
    vec2 band = vec2(along * uViewport.x * 0.92 + curve, along * uViewport.y * 0.82)
      + normal * (across * extent * 0.115 + aCloud.z * extent * 0.008);
    vec2 field = vec2(aCloud.x * uViewport.x * 0.58, along * uViewport.y * 0.97);
    float surroundingField = step(0.82, aSeed.x);
    vec2 destination = mix(band, field, surroundingField);
    // A few persistent surrounding stars begin inside the lower glass and
    // fade in softly; the main Milky Way still rises from below its edge.
    float firstY = mix(-uViewport.y * (0.52 + aCloud.y * 0.45),
      uViewport.y * (-0.50 + aCloud.y * 0.34
        + sin(aCloud.x * 4.0 + aCloud.z * 3.0) * 0.06), surroundingField);
    vec3 galaxy = vec3(
      destination.x + uFieldCenter.x,
      mix(firstY, destination.y, rise) + uFieldCenter.y,
      aCloud.z * uViewport.y * 0.15
    );
    vec3 target = vec3(uTargetCenter + position.xy * uTargetScale, 0.0);
    vec3 assembled = mix(galaxy, target, assembly);
    // A restrained curl connects rising ribbons to photographed features.
    // It is driven only by scroll and vanishes exactly at both endpoints.
    assembled.xy += vec2(aCloud.y - 0.5, -aCloud.x)
      * assembly * (1.0 - assembly) * min(uViewport.x, uViewport.y) * 0.48;
    // Ambient flow and pointer influence are decorative offsets, independent
    // of the scroll formation. They become exactly zero at the photo endpoint.
    float motion = uMotionStrength * (1.0 - assembly);
    float flowPhase = aCloud.y * 6.1 + aCloud.z * 2.4;
    vec2 flow = vec2(sin(uTime * 0.32 + flowPhase), cos(uTime * 0.27 + flowPhase * 1.17));
    assembled.xy += flow * clamp(extent * 0.009, 2.5, 6.0) * motion;
    vec2 delta = assembled.xy - uPointer;
    float distance = length(delta);
    float reach = clamp(extent * 0.18, 80.0, 170.0);
    float influence = 1.0 - smoothstep(0.0, reach, distance);
    vec2 outward = delta / max(1.0, distance);
    vec2 tangent = vec2(-outward.y, outward.x);
    assembled.xy += (outward * 0.78 + tangent * 0.36)
      * clamp(extent * 0.025, 10.0, 16.0) * influence * influence * uPointerStrength * motion;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(assembled, 1.0);
    float starSize = uPointSize * aSeed.y * (0.55 + depth * 0.65);
    gl_PointSize = min(uPointLimit, mix(starSize, uPointSize, assembly) * uPixelRatio);
    vec3 white = vec3(0.74, 0.82, 0.90);
    vec3 boschRed = vec3(0.42, 0.017, 0.026);
    vec3 starColor = mix(white, boschRed, aSeed.z);
    vColor = mix(starColor, color, smoothstep(0.65, 0.98, assembly));
    float bottomFade = smoothstep(uBottomY, uBottomY + uPortraitHeight * 0.085, position.y);
    vAlpha = smoothstep(0.0, 0.065, uProgress)
      * mix(0.55 + depth * 0.35, bottomFade, assembly);
    vAlpha *= mix(1.0, 0.94 + 0.06 * sin(uTime * 0.70 + flowPhase), motion);
    vAssembly = assembly;
    if (uExitProgress > 0.0 && uWorkMode < 0.5) {
      float normalizedX = clamp(position.x / uPortraitWidth + 0.5, 0.0, 1.0);
      float release = smoothstep(0.0, 1.0, (uExitProgress - (1.0 - normalizedX) * 0.35) / 0.65);
      float travel = ease(clamp((release - 0.12) / 0.88, 0.0, 1.0));
      vec2 destination = uExitTarget + vec2(aCloud.x, aCloud.y - 0.5) * extent * 0.08;
      vec2 departure = mix(target.xy, destination, travel);
      departure += vec2(aCloud.x * extent * 0.12, sin(aCloud.y * 6.0) * extent * 0.08)
        * sin(travel * 3.14159265);
      departure = stir(departure, sin(travel * 3.14159265) * 0.65, aSeed, extent);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(departure, 0.0, 1.0);
      gl_PointSize = min(uPointLimit, uPointSize * mix(1.0, 0.8, travel) * uPixelRatio);
      vColor = mix(color, white, travel * 0.8);
      vAlpha = bottomFade * release * (1.0 - smoothstep(0.60, 1.0, release));
      vAssembly = 1.0;
    }
    if (uWorkMode > 0.5) {
      float travel = ease(clamp((uWorkProgress - aSeed.x * 0.05) / 0.85, 0.0, 1.0));
      vec2 origin = uWorkOrigin.xy + vec2(aCloud.x * uWorkOrigin.z * 0.40,
        (aCloud.y - 0.5) * uWorkOrigin.w * 0.75);
      vec2 destination = uWorkTarget + vec2(aCloud.x, aCloud.y - 0.5) * extent * 0.05;
      vec2 stream = mix(origin, destination, travel)
        + vec2(aCloud.x * extent * 0.08, extent * 0.12) * sin(travel * 3.14159265);
      stream = stir(stream, sin(travel * 3.14159265) * 0.65, aSeed, extent);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(stream, 0.0, 1.0);
      gl_PointSize = min(uPointLimit, uPointSize * 0.75 * aSeed.y * uPixelRatio);
      vColor = starColor;
      vAlpha = smoothstep(0.0, 0.08, uWorkProgress) * (1.0 - smoothstep(0.55, 0.85, uWorkProgress));
      vAssembly = 0.7;
    }
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vAssembly;
  void main() {
    float radius = length(gl_PointCoord - vec2(0.5));
    float core = 1.0 - smoothstep(0.08, 0.31, radius);
    float halo = (1.0 - smoothstep(0.15, 0.5, radius)) * 0.13 * (1.0 - vAssembly);
    float sharpDot = 1.0 - smoothstep(0.37, 0.5, radius);
    float sprite = mix(core + halo, sharpDot, vAssembly);
    float alpha = min(1.0, sprite) * vAlpha * uOpacity;
    if (alpha < 0.008) discard;
    gl_FragColor = vec4(vColor, alpha);
    #include <colorspace_fragment>
  }
`;




function makeTextParticles(data) {
  const count = data.groupIds.length;
  const colors = new Float32Array(data.colors.length);
  const seeds = new Float32Array(count * 4);
  const color = new THREE.Color();
  const random = seededRandom(0x7E57C10D);
  for (let index = 0; index < count; index++) {
    color.setRGB(data.colors[index * 3], data.colors[index * 3 + 1], data.colors[index * 3 + 2], THREE.SRGBColorSpace);
    colors.set([color.r, color.g, color.b], index * 3);
    seeds.set([random(), random(), random(), random()], index * 4);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aGroup', new THREE.BufferAttribute(data.groupIds, 1));
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 4));
  return geometry;
}

const textVertexShader = /* glsl */ `
  attribute vec3 color;
  attribute float aGroup;
  attribute vec4 aSeed;
  uniform vec4 uTextProgress;
  uniform vec4 uTextOpacity;
  uniform vec2 uTextOffsets[4];
  uniform vec2 uTextBounds[4];
  uniform vec2 uCanvas;
  uniform vec2 uFieldCenter;
  uniform vec2 uFieldSize;
  uniform vec2 uExitTarget;
  uniform vec4 uWorkOrigin;
  uniform vec2 uPointer;
  uniform float uExitProgress;
  uniform float uWorkMode;
  uniform float uTime;
  uniform float uMotionStrength;
  uniform float uPointerStrength;
  uniform float uPointSize;
  uniform float uPixelRatio;
  uniform float uPointLimit;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vAssembly;
  float ease(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  }
  vec2 stir(vec2 point, float amount, vec4 seed, float extent) {
    float motion = amount * uMotionStrength;
    point += vec2(sin(uTime * 0.32 + seed.y * 6.1), cos(uTime * 0.27 + seed.z * 7.4))
      * clamp(extent * 0.006, 2.0, 4.0) * motion;
    vec2 delta = point - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    vec2 outward = delta / max(1.0, distance);
    point += (outward * 0.78 + vec2(-outward.y, outward.x) * 0.36)
      * 12.0 * influence * influence * uPointerStrength * motion;
    return point;
  }
  void main() {
    // Constant array indices also work on older WebGL mobile drivers.
    vec2 offset = uTextOffsets[0];
    vec2 bounds = uTextBounds[0];
    float progress = uTextProgress.x;
    float opacity = uTextOpacity.x;
    if (aGroup > 0.5) { offset = uTextOffsets[1]; bounds = uTextBounds[1]; progress = uTextProgress.y; opacity = uTextOpacity.y; }
    if (aGroup > 1.5) { offset = uTextOffsets[2]; bounds = uTextBounds[2]; progress = uTextProgress.z; opacity = uTextOpacity.z; }
    if (aGroup > 2.5) { offset = uTextOffsets[3]; bounds = uTextBounds[3]; progress = uTextProgress.w; opacity = uTextOpacity.w; }
    float isWork = step(2.5, aGroup);
    float enabled = mix(1.0 - uWorkMode, uWorkMode, isWork);
    float assembly = progress >= 1.0 ? 1.0 : ease(clamp((progress - aSeed.x * 0.07) / 0.90, 0.0, 1.0));
    float extent = min(uCanvas.x, uCanvas.y);
    vec2 target = vec2(offset.x + position.x - uCanvas.x * 0.5,
      uCanvas.y * 0.5 - offset.y - position.y);
    float along = aSeed.y - 0.5;
    vec2 normal = normalize(vec2(-uFieldSize.y * 0.82, uFieldSize.x * 0.92));
    vec2 origin = uFieldCenter + vec2(along * uFieldSize.x * 0.92, along * uFieldSize.y * 0.82)
      + normal * (aSeed.z - 0.5) * extent * 0.20;
    origin = mix(origin, uWorkOrigin.xy + vec2((aSeed.y - 0.5) * uWorkOrigin.z * 0.80,
      (aSeed.z - 0.5) * uWorkOrigin.w * 0.75), isWork);
    vec2 formed = mix(origin, target, assembly);
    formed += vec2(aSeed.y - 0.5, aSeed.z - 0.5) * sin(assembly * 3.14159265) * extent * 0.25;
    float motion = uMotionStrength * (1.0 - assembly);
    formed += vec2(sin(uTime * 0.32 + aSeed.w * 6.2), cos(uTime * 0.27 + aSeed.w * 7.4))
      * clamp(extent * 0.009, 2.5, 6.0) * motion;
    vec2 delta = formed - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    vec2 outward = delta / max(1.0, distance);
    formed += (outward * 0.78 + vec2(-outward.y, outward.x) * 0.36)
      * 16.0 * influence * influence * uPointerStrength * motion;
    vec3 white = vec3(0.74, 0.82, 0.90);
    vColor = mix(white, color, smoothstep(0.60, 0.98, assembly));
    vAlpha = smoothstep(0.0, 0.08, progress) * (1.0 - opacity) * enabled;
    if (uExitProgress > 0.0 && isWork < 0.5) {
      float normalizedX = clamp(position.x / max(1.0, bounds.x), 0.0, 1.0);
      float release = smoothstep(0.0, 1.0, (uExitProgress - (1.0 - normalizedX) * 0.35) / 0.65);
      float travel = ease(clamp((release - 0.12) / 0.88, 0.0, 1.0));
      vec2 destination = uExitTarget + vec2(aSeed.y - 0.5, aSeed.z - 0.5) * extent * 0.08;
      formed = mix(target, destination, travel)
        + vec2((aSeed.y - 0.5) * extent * 0.12, sin(aSeed.z * 6.0) * extent * 0.08)
        * sin(travel * 3.14159265);
      formed = stir(formed, sin(travel * 3.14159265) * 0.65, aSeed, extent);
      vColor = mix(color, white, travel * 0.8);
      vAlpha = release * (1.0 - smoothstep(0.60, 1.0, release)) * enabled;
      assembly = 1.0;
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(formed, 0.0, 1.0);
    gl_PointSize = min(uPointLimit, uPointSize * mix(0.75 + aSeed.w * 0.4, 1.0, assembly) * uPixelRatio);
    vAssembly = assembly;
  }
`;
/**
 * Living stars, face and copy share a demand-rendered canvas (at most two draws); the
 * owner crossfades the exact original DOM photo with state.photoOpacity.
 */
export function startPortrait({
  canvas,
  container = canvas?.parentElement,
  state,
  portraitData,
  assetUrl,
  loadPortraitData,
  onError,
  settle,
}) {
  if (!canvas || !container || !state) throw new Error('Portrait requires canvas, container, and state');
  const quality = chooseQuality();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;
  renderer.debug.onShaderError = (gl, program, vertex, fragment) => {
    const detail = gl.getProgramInfoLog(program) || gl.getShaderInfoLog(vertex) || gl.getShaderInfoLog(fragment);
    throw new Error(`Portrait shader compilation failed: ${detail || 'unknown driver error'}`);
  };
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 2000);
  camera.position.z = 1000;
  // compileAsync where the browser compiles in parallel; elsewhere a plain
  // compile (and `settle`) does the same without three's console warning.
  const compileScene = (target) => (renderer.extensions.has('KHR_parallel_shader_compile')
    ? renderer.compileAsync(target, camera) : Promise.resolve(renderer.compile(target, camera)));
  let dpr = Math.min(window.devicePixelRatio || 1, quality.maxDpr);
  let pointCount = quality.count;
  let bounds;
  let points;
  let textPoints;
  let textData;
  let pointLimit = 64;
  let textPointCount = 0;
  let textGeneration = 0;
  let sourceTriangles = 0;
  let loaded = false;
  let disposed = false;
  let contextLost = false;
  let onScreen = true;
  let raf = 0;
  let dirty = true;
  let needsClear = false;
  let hadPixels = false;
  let width = 0;
  let height = 0;
  let previousTick = 0;
  let slowFrames = 0;
  let renderedFrames = 0;
  let qualityReductions = 0;
  let drawCalls = 0;
  let lastProgress = 0;
  let lastRequestedState = [];
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let motionEnabled = !motionPreference.matches;
  const ambientInterval = 1000 / (quality.low ? 30 : 45);
  let nextAmbientFrame = 0;
  let lastClockTick = 0;
  let motionTime = 0;
  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  let pointerKnown = false;
  let pointerStrength = 0;
  let pointerActive = false;
  let pointerExpires = 0;

  function available() {
    return !disposed && !contextLost && loaded && onScreen && !document.hidden;
  }

  function exitValue() { return clamp(Number(state.exitProgress) || 0, 0, 1); }
  function workValue() { return clamp(Number(state.workProgress) || 0, 0, 1); }
  function textIsVisible(group) {
    return state.textEnabled !== false && textData && (Number(state.textProgress?.[group]) || 0) > 0
      && (Number(state.textOpacity?.[group]) || 0) < 1;
  }
  function faceIsVisible() {
    if (state.workActive) return workValue() > 0 && workValue() < 0.85;
    const exit = exitValue();
    return exit > 0 ? exit < 1 : (Number(state.progress) || 0) > 0 && (Number(state.photoOpacity) || 0) < 1;
  }
  function textIsActive() {
    if (!textPoints || state.textEnabled === false) return false;
    if (state.workActive) return workValue() > 0 && (Number(state.workOpacity) || 0) < 1;
    const exit = exitValue();
    return exit > 0 ? exit < 1 : [0, 1, 2].some(textIsVisible);
  }
  function active() {
    return available() && state.visible && (faceIsVisible() || textIsActive());
  }

  function canAnimate() {
    if (!active() || !motionEnabled) return false;
    const progress = Number(state.progress) || 0;
    if (state.workActive) return workValue() > 0 && workValue() < 0.98;
    if (exitValue() > 0) return exitValue() < 0.99;
    return (progress > 0.035 && progress < 0.90)
      || [0, 1, 2].some((group) => textIsVisible(group) && (Number(state.textProgress[group]) || 0) < 0.98);
  }

  function requestFrame() {
    if (!raf && available() && ((dirty && active()) || needsClear || canAnimate())) {
      raf = requestAnimationFrame(draw);
    }
  }

  function update(force = false) {
    if (disposed) return;
    const frame = state.frame;
    const viewport = state.viewport;
    const portal = state.portal;
    const values = [state.progress, state.visible, state.photoOpacity, state.interactive,
      frame?.x, frame?.y, frame?.width, frame?.height, viewport?.width, viewport?.height,
      portal?.x, portal?.y, portal?.width, portal?.height, portal?.mix,
      state.exitProgress, state.exitTarget?.x, state.exitTarget?.y, state.workActive, state.textEnabled,
      state.workProgress, state.workOpacity, state.workOrigin?.x, state.workOrigin?.y,
      state.workOrigin?.width, state.workOrigin?.height, state.workOffset?.x, state.workOffset?.y,
      ...[0, 1, 2].flatMap((group) => [state.textProgress?.[group], state.textOpacity?.[group],
        state.textOffsets?.[group]?.x, state.textOffsets?.[group]?.y])];
    if (force || values.some((value, index) => value !== lastRequestedState[index])) dirty = true;
    lastRequestedState = values;
    if (!active()) {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      previousTick = 0;
      lastClockTick = 0;
      nextAmbientFrame = 0;
      needsClear = hadPixels;
      pointerStrength = 0;
      releasePointer();
    }
    if (state.interactive === false) releasePointer();
    if (viewport && (viewport.width !== width || viewport.height !== height)) resize();
    requestFrame();
  }

  function resize() {
    if (disposed) return;
    const rect = container.getBoundingClientRect();
    const viewport = state.viewport;
    const nextWidth = Math.max(1, Math.round(viewport?.width || rect.width || window.innerWidth));
    const nextHeight = Math.max(1, Math.round(viewport?.height || rect.height || window.innerHeight));
    if (nextWidth !== width || nextHeight !== height || renderer.getPixelRatio() !== dpr) {
      width = nextWidth;
      height = nextHeight;
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();
      dirty = true;
    }
    requestFrame();
  }

  function updateTarget() {
    const frame = state.frame || { x: 0, y: 0, width, height };
    const x = Number.isFinite(frame.x) ? frame.x : 0;
    const y = Number.isFinite(frame.y) ? frame.y : 0;
    const frameWidth = Math.max(1, Number.isFinite(frame.width) ? frame.width : width);
    const frameHeight = Math.max(1, Number.isFinite(frame.height) ? frame.height : height);
    const halfHeight = Math.max(bounds.size.y, bounds.size.x / (frameWidth / frameHeight)) * 0.55;
    const uniforms = points.material.uniforms;
    uniforms.uTargetScale.value = frameHeight / (2 * halfHeight);
    uniforms.uTargetCenter.value.set(x + frameWidth / 2 - width / 2, height / 2 - y - frameHeight / 2);
    const portal = state.portal;
    const validPortal = portal && [portal.x, portal.y, portal.width, portal.height].every(Number.isFinite)
      && portal.width > 0 && portal.height > 0;
    const mix = validPortal ? clamp(Number(portal.mix) || 0, 0, 1) : 1;
    const fieldWidth = validPortal ? THREE.MathUtils.lerp(portal.width, width, mix) : width;
    const fieldHeight = validPortal ? THREE.MathUtils.lerp(portal.height, height, mix) : height;
    const fieldX = validPortal ? portal.x * (1 - mix) : 0;
    const fieldY = validPortal ? portal.y * (1 - mix) : 0;
    uniforms.uViewport.value.set(fieldWidth, fieldHeight);
    uniforms.uFieldCenter.value.set(fieldX + fieldWidth / 2 - width / 2,
      height / 2 - fieldY - fieldHeight / 2);
    const exitTarget = state.exitTarget || { x: width / 2, y: height / 2 };
    uniforms.uExitTarget.value.set(exitTarget.x - width / 2, height / 2 - exitTarget.y);
    const workOrigin = state.workOrigin || { x: width / 2, y: height / 2, width: width * 0.4, height: height * 0.3 };
    uniforms.uWorkOrigin.value.set(workOrigin.x + workOrigin.width / 2 - width / 2,
      height / 2 - workOrigin.y - workOrigin.height / 2, workOrigin.width, workOrigin.height);
    const workOffset = state.workOffset || { x: width / 2, y: height / 2 };
    const workBounds = textData?.groupBounds?.[3] || { width: 1, height: 1 };
    uniforms.uWorkTarget.value.set(workOffset.x + workBounds.width / 2 - width / 2,
      height / 2 - workOffset.y - workBounds.height / 2);
    if (textPoints) {
      const text = textPoints.material.uniforms;
      text.uCanvas.value.set(width, height);
      text.uFieldCenter.value.copy(uniforms.uFieldCenter.value);
      text.uFieldSize.value.copy(uniforms.uViewport.value);
      text.uExitTarget.value.copy(uniforms.uExitTarget.value);
      text.uWorkOrigin.value.copy(uniforms.uWorkOrigin.value);
      text.uTextProgress.value.set(...[0, 1, 2].map((group) => clamp(Number(state.textProgress?.[group]) || 0, 0, 1)), workValue());
      text.uTextOpacity.value.set(...[0, 1, 2].map((group) => clamp(Number(state.textOpacity?.[group]) || 0, 0, 1)), clamp(Number(state.workOpacity) || 0, 0, 1));
      text.uTextOffsets.value.forEach((offset, group) => {
        const position = group === 3 ? workOffset : state.textOffsets?.[group];
        offset.set(Number(position?.x) || 0, Number(position?.y) || 0);
      });
    }
  }

  function clearCanvas() {
    renderer.setViewport(0, 0, width, height);
    renderer.clear(true, false, false);
    hadPixels = false;
    needsClear = false;
    drawCalls = 0;
  }

  function reduceQuality() {
    if (state.noAdapt) return;
    if (qualityReductions >= 2) return;
    pointCount = Math.max(2400, Math.floor(pointCount * 0.72));
    points.geometry.setDrawRange(0, pointCount);
    dpr = Math.max(0.8, dpr - 0.2);
    qualityReductions++;
    resize();
    slowFrames = 0;
  }

  function draw(time) {
    raf = 0;
    if (!available()) {
      previousTick = 0;
      lastClockTick = 0;
      nextAmbientFrame = 0;
      return;
    }
    if (!active()) {
      if (needsClear) clearCanvas();
      dirty = false;
      previousTick = 0;
      lastClockTick = 0;
      nextAmbientFrame = 0;
      return;
    }
    const animate = canAnimate();
    const priority = dirty;
    // Ambient motion has a modest frame budget; scroll/input invalidations
    // bypass it so their latest state reaches the very next browser frame.
    if (!priority && (!animate || time < nextAmbientFrame - 0.5)) {
      if (animate) requestFrame();
      return;
    }
    const deltaTime = lastClockTick ? Math.min(0.06, Math.max(0, (time - lastClockTick) / 1000)) : 0;
    lastClockTick = time;
    if (animate) motionTime += deltaTime;
    if (pointerActive && time >= pointerExpires) pointerActive = false;
    pointer.lerp(pointerTarget, 1 - Math.exp(-deltaTime * 14));
    const pointerGoal = pointerActive && animate && state.interactive !== false ? 1 : 0;
    pointerStrength += (pointerGoal - pointerStrength)
      * (1 - Math.exp(-deltaTime * (pointerGoal ? 14 : 4.3)));
    if (pointerStrength < 0.001 && !pointerGoal) pointerStrength = 0;
    const progress = clamp(Number(state.progress) || 0, 0, 1);
    const opacity = state.workActive || exitValue() > 0 ? 1 : 1 - clamp(Number(state.photoOpacity) || 0, 0, 1);
    const uniforms = points.material.uniforms;
    uniforms.uProgress.value = progress;
    uniforms.uPixelRatio.value = dpr;
    uniforms.uOpacity.value = opacity;
    uniforms.uTime.value = motionTime;
    uniforms.uMotionStrength.value = motionEnabled
      ? state.workActive || exitValue() > 0 ? 1
        : smooth(0.035, 0.12, progress) * (1 - smooth(0.74, 0.90, progress)) : 0;
    uniforms.uPointer.value.copy(pointer);
    uniforms.uPointerStrength.value = pointerStrength;
    uniforms.uExitProgress.value = exitValue();
    uniforms.uWorkProgress.value = workValue();
    uniforms.uWorkMode.value = state.workActive ? 1 : 0;
    points.visible = faceIsVisible();
    points.geometry.setDrawRange(0, state.workActive ? Math.min(pointCount, quality.low ? 280 : 480) : pointCount);
    if (textPoints) {
      const text = textPoints.material.uniforms;
      text.uTime.value = motionTime;
      text.uPixelRatio.value = dpr;
      text.uMotionStrength.value = motionEnabled ? 1 : 0;
      text.uPointerStrength.value = pointerStrength;
      text.uPointer.value.copy(pointer);
      text.uExitProgress.value = exitValue();
      text.uWorkMode.value = state.workActive ? 1 : 0;
      textPoints.visible = textIsActive();
    }
    updateTarget();
    const drawStart = performance.now();
    clearCanvas();
    try {
      renderer.render(scene, camera);
    } catch (error) {
      dispose();
      onError?.(error);
      return;
    }
    drawCalls = renderer.info.render.calls;
    hadPixels = points.visible || Boolean(textPoints?.visible);
    renderedFrames++;
    dirty = false;
    // Frame-rate throttling is intentional, so compare against its own budget
    // rather than treating the 30 FPS mobile ambient loop as dropped frames.
    const tickDelta = time - previousTick;
    const drawMs = performance.now() - drawStart;
    const expectedInterval = priority ? 1000 / 60 : ambientInterval;
    if (previousTick && tickDelta < 150 && (animate || Math.abs(progress - lastProgress) > 0.0005)) {
      slowFrames = tickDelta > expectedInterval * 1.8 || drawMs > 20
        ? slowFrames + 1 : Math.max(0, slowFrames - 2);
      if (slowFrames >= 18) reduceQuality();
    }
    previousTick = time;
    lastProgress = progress;
    nextAmbientFrame = priority || !nextAmbientFrame
      ? time + ambientInterval : Math.max(nextAmbientFrame + ambientInterval, time + 1);
    if (dirty || animate) requestFrame();
  }



  function ignoresInput(target) {
    return Boolean(target?.closest?.(
      'nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]',
    ));
  }

  function releasePointer() {
    pointerActive = false;
    pointerExpires = 0;
  }

  function samplePointer(event, x, y, touch = false) {
    if (!canAnimate() || state.interactive === false || ignoresInput(event.target)) {
      releasePointer();
      return;
    }
    pointerTarget.set(x - width / 2, height / 2 - y);
    if (!pointerKnown || pointerStrength < 0.001) pointer.copy(pointerTarget);
    pointerKnown = true;
    pointerActive = true;
    pointerExpires = touch ? Infinity : performance.now() + 700;
    dirty = true;
    requestFrame();
  }

  function pointerEvent(event) {
    if (event.isPrimary === false || (event.pointerType === 'mouse' && event.buttons > 1)) {
      releasePointer();
      return;
    }
    samplePointer(event, event.clientX, event.clientY, event.pointerType === 'touch');
  }

  function pointerOut(event) {
    if (!event.relatedTarget && event.pointerType !== 'touch') releasePointer();
  }

  function touchEvent(event) {
    // Browsers may cancel PointerEvents once a native pan begins. Passive
    // TouchEvents keep the decorative response following that same scroll.
    if (event.touches.length !== 1) {
      releasePointer();
      return;
    }
    const touch = event.touches[0];
    samplePointer(event, touch.clientX, touch.clientY, true);
  }

  function preferenceChanged() {
    motionEnabled = !motionPreference.matches;
    releasePointer();
    pointerStrength = 0;
    lastClockTick = 0;
    nextAmbientFrame = 0;
    update(true);
  }

  function visibilityChanged() {
    previousTick = 0;
    update(true);
  }

  function contextFailed(event) {
    event.preventDefault();
    contextLost = true;
    update();
    onError?.(new Error('Portrait WebGL context was lost'));
  }

  function contextRestored() {
    contextLost = false;
    update(true);
  }

  // These listeners never capture a pointer, prevent defaults, alter touch
  // action, or consume events. Links, navigation and native scrolling work as usual.
  window.addEventListener('pointermove', pointerEvent, { passive: true });
  window.addEventListener('pointerdown', pointerEvent, { passive: true });
  window.addEventListener('pointerup', releasePointer, { passive: true });
  window.addEventListener('pointercancel', releasePointer, { passive: true });
  window.addEventListener('pointerout', pointerOut, { passive: true });
  window.addEventListener('touchstart', touchEvent, { passive: true });
  window.addEventListener('touchmove', touchEvent, { passive: true });
  window.addEventListener('touchend', releasePointer, { passive: true });
  window.addEventListener('touchcancel', releasePointer, { passive: true });
  window.addEventListener('blur', releasePointer);
  if (motionPreference.addEventListener) motionPreference.addEventListener('change', preferenceChanged);
  else motionPreference.addListener(preferenceChanged);
  document.addEventListener('visibilitychange', visibilityChanged);
  canvas.addEventListener('webglcontextlost', contextFailed);
  canvas.addEventListener('webglcontextrestored', contextRestored);
  const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  resizeObserver?.observe(container);
  if (!resizeObserver) window.addEventListener('resize', resize);
  const intersectionObserver = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver((entries) => {
    onScreen = entries.some((entry) => entry.isIntersecting);
    update(true);
  }) : null;
  intersectionObserver?.observe(canvas);
  resize();

  const ready = Promise.resolve().then(() => portraitData ?? loadPortraitData?.(assetUrl)).then(async (data) => {
    if (disposed) throw new Error('Portrait was disposed before loading finished');
    if (!data?.positions?.length || data.positions.length % 3 || !data.indices?.length
      || data.indices.length % 3 || data.colors?.length !== data.positions.length) {
      throw new Error('Portrait asset must include matching positions/colors and triangle indices');
    }
    bounds = readBounds(data);
    sourceTriangles = data.indices.length / 3;
    const geometry = makeParticles(data, bounds, quality.count);
    const context = renderer.getContext();
    pointLimit = context.getParameter(context.ALIASED_POINT_SIZE_RANGE)[1];
    points = new THREE.Points(geometry, new THREE.ShaderMaterial({
      uniforms: {
        uProgress: { value: 0 },
        uTime: { value: 0 },
        uMotionStrength: { value: 0 },
        uPointerStrength: { value: 0 },
        uOpacity: { value: 0 },
        uPointSize: { value: quality.pointSize },
        uPixelRatio: { value: dpr },
        uPointLimit: { value: pointLimit },
        uTargetScale: { value: 1 },
        uBottomY: { value: -bounds.size.y * 0.5 },
        uPortraitHeight: { value: bounds.size.y },
        uPortraitWidth: { value: bounds.size.x },
        uExitProgress: { value: 0 },
        uWorkProgress: { value: 0 },
        uWorkMode: { value: 0 },
        uExitTarget: { value: new THREE.Vector2() },
        uWorkTarget: { value: new THREE.Vector2() },
        uWorkOrigin: { value: new THREE.Vector4() },
        uTargetCenter: { value: new THREE.Vector2() },
        uViewport: { value: new THREE.Vector2(width, height) },
        uFieldCenter: { value: new THREE.Vector2() },
        uPointer: { value: new THREE.Vector2() },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    }));
    points.frustumCulled = false;
    scene.add(points);
    resize();
    updateTarget();
    // One transparent prewarm compiles the shader and uploads static buffers.
    // No portrait texture is ever requested or uploaded by this renderer.
    await compileScene(scene);
    // Without parallel compilation, linking finishes while the page idles.
    await settle?.();
    if (disposed) throw new Error('Portrait was disposed before shader preparation finished');
    clearCanvas();
    renderer.render(scene, camera);
    loaded = true;
    update(true);
    return api;
  }).catch((error) => {
    if (!disposed) {
      dispose();
      onError?.(error);
    }
    throw error;
  });

  async function setTextTargets(data) {
    await ready;
    if (disposed) throw new Error('Portrait has been disposed');
    if (!data?.positions?.length || data.positions.length % 3 || data.colors?.length !== data.positions.length
      || data.groupIds?.length !== data.positions.length / 3 || data.groupBounds?.length !== 4) {
      throw new Error('Text targets require matching positions/colors/groups and four group bounds');
    }
    const generation = ++textGeneration;
    const cap = quality.low ? 1800 : 4000;
    if (data.groupIds.length > cap) throw new Error(`Text targets exceed the ${cap}-point device budget`);
    const geometry = makeTextParticles(data);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTextProgress: { value: new THREE.Vector4() },
        uTextOpacity: { value: new THREE.Vector4(1, 1, 1, 1) },
        uTextOffsets: { value: Array.from({ length: 4 }, () => new THREE.Vector2()) },
        uTextBounds: { value: data.groupBounds.map((box) => new THREE.Vector2(box.width, box.height)) },
        uCanvas: { value: new THREE.Vector2(width, height) },
        uFieldCenter: { value: new THREE.Vector2() },
        uFieldSize: { value: new THREE.Vector2(width, height) },
        uExitTarget: { value: new THREE.Vector2() },
        uWorkOrigin: { value: new THREE.Vector4() },
        uPointer: { value: new THREE.Vector2() },
        uExitProgress: { value: 0 },
        uWorkMode: { value: 0 },
        uTime: { value: 0 },
        uMotionStrength: { value: 0 },
        uPointerStrength: { value: 0 },
        uPointSize: { value: quality.low ? 1.65 : 1.60 },
        uPixelRatio: { value: dpr },
        uPointLimit: { value: pointLimit },
        uOpacity: { value: 1 },
      },
      vertexShader: textVertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
    const next = new THREE.Points(geometry, material);
    next.frustumCulled = false;
    next.visible = false;
    const preparation = new THREE.Scene();
    preparation.add(next);
    try {
      // Compile separately so an active scene never draws the new and old
      // buffers together while responsive text targets are being prepared.
      next.visible = true;
      await compileScene(preparation);
      next.visible = false;
      await settle?.();
      if (disposed) throw new Error('Portrait disposed while preparing text');
    } catch (error) {
      preparation.remove(next);
      geometry.dispose();
      material.dispose();
      throw error;
    }
    preparation.remove(next);
    if (generation !== textGeneration) {
      geometry.dispose();
      material.dispose();
      return data.groupBounds;
    }
    scene.add(next);
    if (textPoints) {
      scene.remove(textPoints);
      textPoints.geometry.dispose();
      textPoints.material.dispose();
    }
    textPoints = next;
    textData = data;
    textPointCount = data.groupIds.length;
    updateTarget();
    update(true);
    return data.groupBounds;
  }

  function stats() {
    const progress = clamp(Number(state.progress) || 0, 0, 1);
    const photoOpacity = clamp(Number(state.photoOpacity) || 0, 0, 1);
    const phase = !state.visible ? 'hidden' : state.workActive ? 'work-title'
      : exitValue() > 0 && exitValue() < 1 ? 'intro-disintegration'
      : textIsActive() && photoOpacity === 1 ? 'text-assembly' : photoOpacity === 1 ? 'photo'
      : progress <= 0.005 ? 'waiting' : progress < 0.58 ? 'rising-stars'
      : progress < 0.90 ? 'face-assembly' : progress < 0.94 ? 'settled-dots' : 'photo-crossfade';
    return {
      ready: loaded,
      visible: Boolean(state.visible),
      running: Boolean(raf),
      particles: pointCount,
      textParticles: textPointCount,
      textBudget: quality.low ? 1800 : 4000,
      textEnabled: state.textEnabled !== false,
      textGroups: textData?.groupBounds.map((group) => group.count) || [],
      textProgress: [0, 1, 2].map((group) => Number(state.textProgress?.[group]) || 0),
      textOpacity: [0, 1, 2].map((group) => Number(state.textOpacity?.[group]) || 0),
      exitProgress: exitValue(),
      workActive: Boolean(state.workActive),
      workProgress: workValue(),
      workOpacity: clamp(Number(state.workOpacity) || 0, 0, 1),
      dpr,
      drawCalls,
      renderedFrames,
      qualityReductions,
      sourceTriangles,
      geometries: renderer.info.memory.geometries,
      textures: renderer.info.memory.textures,
      kind: 'photographic-particles',
      interactive: canAnimate() && state.interactive !== false,
      motionActive: canAnimate(),
      motionEnabled,
      ambientFps: quality.low ? 30 : 45,
      motionTime,
      pointerStrength,
      pointerActive,
      portalFramed: Boolean(state.portal),
      progress,
      photoOpacity,
      phase,
    };
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', pointerEvent);
    window.removeEventListener('pointerdown', pointerEvent);
    window.removeEventListener('pointerup', releasePointer);
    window.removeEventListener('pointercancel', releasePointer);
    window.removeEventListener('pointerout', pointerOut);
    window.removeEventListener('touchstart', touchEvent);
    window.removeEventListener('touchmove', touchEvent);
    window.removeEventListener('touchend', releasePointer);
    window.removeEventListener('touchcancel', releasePointer);
    window.removeEventListener('blur', releasePointer);
    if (motionPreference.removeEventListener) motionPreference.removeEventListener('change', preferenceChanged);
    else motionPreference.removeListener(preferenceChanged);
    document.removeEventListener('visibilitychange', visibilityChanged);
    canvas.removeEventListener('webglcontextlost', contextFailed);
    canvas.removeEventListener('webglcontextrestored', contextRestored);
    points?.geometry.dispose();
    points?.material.dispose();
    textPoints?.geometry.dispose();
    textPoints?.material.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  }

  const api = { ready, update, resize, setTextTargets, stats, dispose };
  return api;
}
