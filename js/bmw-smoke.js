(() => {
  /* ---------- BMW smoke: a real fluid simulation ----------
   * The earlier smoke was thresholded noise. However it was tuned it read
   * as cloud or marble, because noise has no motion behind it: nothing
   * carries it, nothing swirls, nothing curls into a wisp. This is smoke
   * the way smoke actually works — a GPU fluid simulation (Stam's "stable
   * fluids", with vorticity confinement) on a small grid:
   *
   *   velocity   how the air is moving
   *   pressure   what keeps that air from bunching up (solved each frame,
   *              which is what makes it swirl round obstacles and itself
   *              instead of just sliding)
   *   dye        how much smoke is where, carried along by the velocity
   *
   * Smoke is fed in beneath the car's actual bumper and at its sides,
   * moving in towards the middle; it rises a little, curls up into
   * wisps through vorticity confinement, and thins with height, so the
   * thick of it lies below the car and only faint veils reach the grille.
   * The cursor is just another thing that moves the air: it pushes the
   * velocity, so the smoke it meets is shoved aside and left swirling in
   * the wake, and it thins the dye a little where it passes.
   *
   * What the visitor's scroll controls is how much of that is shown, and
   * how it's being nudged — never the simulation itself, which runs on its
   * own clock while visible. Scrolling forwards or back just changes the
   * two numbers below, so there is nothing to restart or snap. The one
   * event is the reveal's gush: as the headlamps ignite, the sources blow
   * hard for a moment and settle (see "The reveal's gush"); it plays on its
   * own clock, once per reveal, and only a return to the dark re-arms it.
   *
   *   coverage  0..1, from the car's eased timeline progress. Nothing before
   *             the ignition (the LED outline forms in clean air); the gush
   *             and a quiet layer after it; the original wisps rise to full
   *             once the car is revealed, and clear before the render sweep.
   *   flow      -1..1. Negative rolls the smoke in toward the middle as it
   *             gathers; positive parts it sideways as it clears.
   *
   * The BMW's headlamps light it: BMW_SCENE (js/chapters.js) writes where
   * they are and how bright they are onto the veil each frame, this reads
   * them back, and the smoke scatters that light in proportion to how much
   * smoke there is at each point — none where it's been cleared.
   *
   * Touches nothing else in the scene. Needs WebGL2 with float render
   * targets; without them it simply isn't there and the reveal plays
   * without it.
   */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.querySelector('.bmw-smoke-canvas');
  const section = document.getElementById('bmw-chapter');
  if (reduceMotion || !canvas || !section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // The display shader writes associated (premultiplied) colour. Transparent
  // pixels therefore contain no latent grey RGB for a mobile compositor.
  // The context is created with the programs, after the opening: creating
  // a WebGL 2 context is itself a noticeable pause while the page loads.
  let gl = null;
  let parallelCompile = null;
  function createContext() {
    // preserveDrawingBuffer: the veil is redrawn only when it changes, so its
    // last frame must stay on screen in every engine (WebKit otherwise drops
    // an undrawn WebGL canvas). Each draw covers every pixel of this small,
    // 0.6-scale canvas, so keeping the buffer costs next to nothing.
    const context = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: true });
    if (!context) return false;
    if (!context.getExtension('EXT_color_buffer_float') && !context.getExtension('EXT_color_buffer_half_float')) return false;
    gl = context;
    parallelCompile = gl.getExtension('KHR_parallel_shader_compile');
    // A lost context hands the veil straight back to CSS; the smoke stops.
    canvas.addEventListener('webglcontextlost', () => {
      ready = false;
      glVeil = false;
      section.classList.remove('has-gl-veil');
      stop();
    }, { once: true });
    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    // One oversized triangle covering the whole clip-space square — cheaper
    // than a quad (no diagonal seam, one fewer vertex) and clipped for free.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    // Blending is deliberately off, everywhere: every draw replaces its
    // target. (With it on, repeated draws to the visible canvas stacked and
    // the smoke's density pulsed frame to frame while scrolling.)
    gl.disable(gl.BLEND);
    smokeState.premultipliedAlpha = gl.getContextAttributes()?.premultipliedAlpha === true;
    return true;
  }

  // ---- Shaders ---------------------------------------------------------------
  const VERT = `
    attribute vec2 a_pos;
    varying vec2 v_uv;
    void main() {
      v_uv = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;
  const HEAD = 'precision highp float; varying vec2 v_uv;\n';

  // Carries a quantity along the velocity field (semi-Lagrangian: look
  // upstream and copy what's there), and lets it fade. The fade can vary
  // with height, which is how the smoke thins out as it climbs.
  const ADVECT = HEAD + `
    uniform sampler2D u_vel;
    uniform sampler2D u_src;
    uniform vec2 u_velTexel;
    uniform float u_dt;
    uniform float u_rateLow;
    uniform float u_rateHigh;
    uniform float u_ceil;
    void main() {
      vec2 vel = texture2D(u_vel, v_uv).xy;
      vec2 coord = v_uv - u_dt * vel * u_velTexel;
      vec4 s = texture2D(u_src, coord);
      float h = smoothstep(0.22, 0.62, v_uv.y);
      float rate = mix(u_rateLow, mix(u_rateLow, u_rateHigh, h), u_ceil);
      gl_FragColor = s * exp(-rate * u_dt);
    }
  `;

  const DIVERGENCE = HEAD + `
    uniform sampler2D u_vel;
    uniform vec2 u_texel;
    void main() {
      float L = texture2D(u_vel, v_uv - vec2(u_texel.x, 0.0)).x;
      float R = texture2D(u_vel, v_uv + vec2(u_texel.x, 0.0)).x;
      float B = texture2D(u_vel, v_uv - vec2(0.0, u_texel.y)).y;
      float T = texture2D(u_vel, v_uv + vec2(0.0, u_texel.y)).y;
      gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
    }
  `;

  const CURL = HEAD + `
    uniform sampler2D u_vel;
    uniform vec2 u_texel;
    void main() {
      float L = texture2D(u_vel, v_uv - vec2(u_texel.x, 0.0)).y;
      float R = texture2D(u_vel, v_uv + vec2(u_texel.x, 0.0)).y;
      float B = texture2D(u_vel, v_uv - vec2(0.0, u_texel.y)).x;
      float T = texture2D(u_vel, v_uv + vec2(0.0, u_texel.y)).x;
      gl_FragColor = vec4(R - L - T + B, 0.0, 0.0, 1.0);
    }
  `;

  // Vorticity confinement: puts back the small swirls that a coarse grid
  // smooths away, which is most of what makes it look like smoke rather
  // than slow ink.
  const VORTICITY = HEAD + `
    uniform sampler2D u_vel;
    uniform sampler2D u_curl;
    uniform vec2 u_texel;
    uniform float u_strength;
    uniform float u_dt;
    void main() {
      float L = texture2D(u_curl, v_uv - vec2(u_texel.x, 0.0)).x;
      float R = texture2D(u_curl, v_uv + vec2(u_texel.x, 0.0)).x;
      float B = texture2D(u_curl, v_uv - vec2(0.0, u_texel.y)).x;
      float T = texture2D(u_curl, v_uv + vec2(0.0, u_texel.y)).x;
      float C = texture2D(u_curl, v_uv).x;
      vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
      force /= length(force) + 0.0001;
      force *= u_strength * C;
      force.y *= -1.0;
      vec2 vel = texture2D(u_vel, v_uv).xy + force * u_dt;
      gl_FragColor = vec4(clamp(vel, -400.0, 400.0), 0.0, 1.0);
    }
  `;

  const PRESSURE = HEAD + `
    uniform sampler2D u_pressure;
    uniform sampler2D u_div;
    uniform vec2 u_texel;
    void main() {
      float L = texture2D(u_pressure, v_uv - vec2(u_texel.x, 0.0)).x;
      float R = texture2D(u_pressure, v_uv + vec2(u_texel.x, 0.0)).x;
      float B = texture2D(u_pressure, v_uv - vec2(0.0, u_texel.y)).x;
      float T = texture2D(u_pressure, v_uv + vec2(0.0, u_texel.y)).x;
      float div = texture2D(u_div, v_uv).x;
      gl_FragColor = vec4((L + R + B + T - div) * 0.25, 0.0, 0.0, 1.0);
    }
  `;

  const GRADIENT = HEAD + `
    uniform sampler2D u_pressure;
    uniform sampler2D u_vel;
    uniform vec2 u_texel;
    void main() {
      float L = texture2D(u_pressure, v_uv - vec2(u_texel.x, 0.0)).x;
      float R = texture2D(u_pressure, v_uv + vec2(u_texel.x, 0.0)).x;
      float B = texture2D(u_pressure, v_uv - vec2(0.0, u_texel.y)).x;
      float T = texture2D(u_pressure, v_uv + vec2(0.0, u_texel.y)).x;
      vec2 vel = texture2D(u_vel, v_uv).xy - vec2(R - L, T - B);
      gl_FragColor = vec4(vel, 0.0, 1.0);
    }
  `;

  const SCALE = HEAD + `
    uniform sampler2D u_tex;
    uniform float u_value;
    void main() {
      gl_FragColor = u_value * texture2D(u_tex, v_uv);
    }
  `;

  // Two gentle body forces: smoke rises a little in proportion to how
  // thick it is, and the scroll's "flow" pulls the low smoke toward the
  // middle (negative, as it gathers) or pushes it apart (positive, as it
  // clears).
  const FORCE = HEAD + `
    uniform sampler2D u_vel;
    uniform sampler2D u_dye;
    uniform float u_dt;
    uniform float u_flow;
    uniform float u_buoy;
    void main() {
      vec2 v = texture2D(u_vel, v_uv).xy;
      float d = texture2D(u_dye, v_uv).x;
      float band = 1.0 - smoothstep(0.18, 0.42, v_uv.y);
      float side = v_uv.x - 0.5;
      v.x += side * u_flow * 46.0 * band * (0.3 + d) * u_dt;
      v.y += d * u_buoy * u_dt;
      gl_FragColor = vec4(v, 0.0, 1.0);
    }
  `;

  // The sources: eight soft blobs, six low along the bottom and one at each
  // side, each blowing smoke in (dye) and moving the air (velocity).
  const EMIT_VEL = HEAD + `
    uniform sampler2D u_target;
    uniform float u_aspect;
    uniform vec4 u_em[8];
    uniform vec2 u_emv[8];
    void main() {
      vec2 v = texture2D(u_target, v_uv).xy;
      for (int i = 0; i < 8; i++) {
        vec2 p = v_uv - u_em[i].xy;
        p.x *= u_aspect;
        float g = exp(-dot(p, p) / u_em[i].z) * u_em[i].w;
        v = mix(v, u_emv[i], clamp(g, 0.0, 1.0));
      }
      gl_FragColor = vec4(v, 0.0, 1.0);
    }
  `;
  const EMIT_DYE = HEAD + `
    uniform sampler2D u_target;
    uniform float u_aspect;
    uniform vec4 u_em[8];
    uniform float u_cap;
    uniform float u_add;
    void main() {
      float d = texture2D(u_target, v_uv).x;
      for (int i = 0; i < 8; i++) {
        vec2 p = v_uv - u_em[i].xy;
        p.x *= u_aspect;
        float g = exp(-dot(p, p) / u_em[i].z) * u_em[i].w;
        d += (u_cap - d) * clamp(g * u_add, 0.0, 1.0);
      }
      gl_FragColor = vec4(d, 0.0, 0.0, 1.0);
    }
  `;

  // The pointer, as a capsule from where it was to where it is (so a fast
  // sweep is a continuous push, not a row of dots).
  const POINTER_VEL = HEAD + `
    uniform sampler2D u_target;
    uniform float u_aspect;
    uniform vec2 u_m;
    uniform vec2 u_mp;
    uniform vec2 u_mv;
    uniform float u_rad2;
    uniform float u_str;
    void main() {
      vec2 asp = vec2(u_aspect, 1.0);
      vec2 pa = (v_uv - u_mp) * asp;
      vec2 ba = (u_m - u_mp) * asp;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-8), 0.0, 1.0);
      vec2 d = pa - ba * h;
      float g = exp(-dot(d, d) / u_rad2);
      vec2 v = texture2D(u_target, v_uv).xy;
      v = mix(v, u_mv, clamp(g * u_str, 0.0, 1.0));
      gl_FragColor = vec4(v, 0.0, 1.0);
    }
  `;
  const POINTER_DYE = HEAD + `
    uniform sampler2D u_target;
    uniform float u_aspect;
    uniform vec2 u_m;
    uniform vec2 u_mp;
    uniform float u_rad2;
    uniform float u_clear;
    void main() {
      vec2 asp = vec2(u_aspect, 1.0);
      vec2 pa = (v_uv - u_mp) * asp;
      vec2 ba = (u_m - u_mp) * asp;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-8), 0.0, 1.0);
      vec2 d = pa - ba * h;
      float g = exp(-dot(d, d) / u_rad2);
      float dye = texture2D(u_target, v_uv).x;
      dye *= 1.0 - clamp(g * u_clear, 0.0, 0.95);
      gl_FragColor = vec4(dye, 0.0, 0.0, 1.0);
    }
  `;

  // What's drawn. Ashima Arts' widely-reused webgl-noise snoise() (MIT-
  // style) is here only for fine breakup and for bending the light; the
  // smoke itself is the simulation.
  const DISPLAY = HEAD + `
    uniform sampler2D u_dye;
    uniform vec2 u_dyeTexel;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_coverage;
    uniform vec2 u_lampA;
    uniform vec2 u_lampB;
    uniform float u_lampI;
    // How brightly the smoke is lit: the lamps' own glow as they ignite, which
    // leads the veil (--li) opening onto the rest of the car.
    uniform float u_light;
    // The gush (js: burst): x = glow, y = spread past the resting region.
    uniform vec2 u_burst;
    uniform float u_gain;
    uniform vec4 u_photo;
    // The lamp-lit veil (.reveal-veil--lamps), drawn under the smoke:
    // x = --li, y = --lr, z = 1 when on; u_lpx = both lamps in CSS px.
    uniform vec4 u_veil;
    uniform vec4 u_lpx;
    uniform vec2 u_css;

    vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    // How much of one headlamp's light arrives at p, as seen in smoke:
    // a tight bloom on the LED itself, and a soft lobe thrown forward and
    // down that falls off with the square of distance. Only lightly
    // patterned, and bent by w (the smoke's own density gradient) so the
    // light wanders with the smoke it passes through rather than ruling
    // straight lines across it. Just light on its own; it only shows where
    // there is smoke to scatter it (see main). Distances are in the car's
    // own scale (s: 1 at the desktop framing): on a portrait phone the car
    // is a third the size, and viewport-sized beams flooded its smoke white.
    float beamScatter(vec2 p, vec2 lp, float t, vec2 w, float s) {
      vec2 r = p - lp;
      float d = length(r) / s;
      vec2 dir = r / max(length(r), 0.001);
      float streak = snoise(vec3(dir * 1.7 + w * 1.1, t * 0.05)) * 0.5 + 0.5;
      streak = mix(0.55, 1.0, smoothstep(0.25, 0.85, streak));
      float forward = 0.15 + 0.85 * smoothstep(-0.3, 0.8, -dir.y);
      float core = exp(-d * d * 90.0);
      float k = d / 0.18;
      float lobe = forward * streak / (1.0 + k * k) * smoothstep(0.0, 0.05, d);
      return core * 0.6 + lobe * 0.7;
    }

    // One lamp's radial-gradient(circle at c, ...) exactly as the CSS veil
    // defines it: stops at lr*0.22%, lr*0.55% and lr*1% of the distance to
    // the farthest corner, alpha 1-li, 1-.82li, 1-.42li and 1.
    float lampVeil(vec2 p, vec2 c, float li, float lr) {
      float radius = length(max(abs(c), abs(u_css - c)));
      float d = length(p - c) / max(radius, 1.0) * 100.0;
      float s1 = lr * 0.22;
      float s2 = lr * 0.55;
      float s3 = lr;
      float a0 = 1.0 - li;
      float a1 = 1.0 - li * 0.82;
      float a2 = 1.0 - li * 0.42;
      if (d < s1) return mix(a0, a1, d / max(s1, 1e-4));
      if (d < s2) return mix(a1, a2, (d - s1) / max(s2 - s1, 1e-4));
      if (d < s3) return mix(a2, 1.0, (d - s2) / max(s3 - s2, 1e-4));
      return 1.0;
    }

    void main() {
      vec2 css = vec2(v_uv.x, 1.0 - v_uv.y) * u_css;
      float veilAlpha = u_veil.z * lampVeil(css, u_lpx.xy, u_veil.x, u_veil.y)
        * lampVeil(css, u_lpx.zw, u_veil.x, u_veil.y);
      // Premultiplied, in the page's own --bg (#08090f).
      vec4 veil = vec4(vec3(8.0, 9.0, 15.0) / 255.0 * veilAlpha, veilAlpha);
      vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
      vec2 p = (v_uv - 0.5) * aspect;
      // Source-photo coordinates follow the car's actual camera pose. This
      // bounds the smoke around its bumper and sides on a portrait phone,
      // where the car is much smaller than the full viewport.
      vec2 photo = vec2((v_uv.x - u_photo.x) / u_photo.z,
        1.0 - (v_uv.y - u_photo.y) / u_photo.w);
      if (u_coverage <= 0.0 || photo.x < -0.20 || photo.x > 1.20
          || photo.y < 0.48 || photo.y > 0.99) {
        gl_FragColor = veil;
        return;
      }

      // The simulated smoke, and its gradient (for shading).
      float d = texture2D(u_dye, v_uv).x;
      vec2 t = u_dyeTexel * 2.0;
      float dl = texture2D(u_dye, v_uv - vec2(t.x, 0.0)).x;
      float dr = texture2D(u_dye, v_uv + vec2(t.x, 0.0)).x;
      float db = texture2D(u_dye, v_uv - vec2(0.0, t.y)).x;
      float du = texture2D(u_dye, v_uv + vec2(0.0, t.y)).x;
      vec2 grad = vec2(dr - dl, du - db);

      // The grid is coarse next to the screen; fine grain, scaled by how
      // much smoke there is, gives it the tattered edges of the real thing.
      // Breakup scales with the photographed car, not the viewport. A
      // portrait phone therefore sees the same soft wisps as a wide screen.
      vec2 detail = photo * vec2(28.0, 50.0);
      float grain = snoise(vec3(detail + vec2(0.0, -u_time * 0.14), u_time * 0.08)) * 0.65
                  + snoise(vec3(detail * 2.3, u_time * 0.12 + 3.0)) * 0.35;
      float dens = max(d - 0.035, 0.0) * max(0.25, 1.0 + 0.55 * grain);

      // Beer-Lambert: thin smoke is nearly clear, thick smoke saturates,
      // and nothing has a hard edge.
      float a = 1.0 - exp(-dens * 1.9);

      // One broad, softly feathered ground region lets the fluid roll into
      // connected wisps. It follows the bumper instead of shaping the dye
      // into separate puffs or filling the entire screen with floor fog.
      // Its opacity is already zero well before the coarse outer guard.
      // While the gush spreads, its outer edge is broken up more strongly
      // and feathered further, so it thins into wisps rather than a shape.
      float contour = grain * mix(0.035, 0.085, u_burst.y);
      // The gush may roll further out along the floor and toward the camera
      // (wider, and lower on screen) before the region draws back in.
      vec2 reach = vec2(0.51, 0.105) * (1.0 + u_burst.y * vec2(0.42, 0.75));
      vec2 ground = (photo - vec2(0.48, 0.671 + 0.03 * u_burst.y)) / reach;
      float envelope = 1.0 - smoothstep(mix(0.48, 0.32, u_burst.y), 1.0, length(ground) + contour);
      // Wisps emerge at the bumper and sides; the bonnet and LED contours
      // stay in clean air, and so does everything above the car, whatever
      // the gush does. This suppression is feathered, not a crop edge, and
      // while the gush lasts its line drifts slowly so the rolling top of
      // the smoke never meets a straight edge.
      float drift = u_burst.x > 0.001
        ? snoise(vec3(photo.x * 5.0 + u_time * 0.07, u_time * 0.11, 3.7)) * u_burst.x : 0.0;
      envelope *= smoothstep(mix(0.588, 0.578, u_burst.x) + 0.012 * drift,
        mix(0.625, 0.655, u_burst.x) + 0.016 * drift, photo.y);
      float edges = smoothstep(0.0, 0.055, v_uv.y)
        * (1.0 - smoothstep(0.955, 1.0, v_uv.y))
        * smoothstep(0.0, 0.025, v_uv.x)
        * (1.0 - smoothstep(0.975, 1.0, v_uv.x));
      float vis = a * envelope * edges * u_coverage;

      // Lit from above and to one side: the faces of a puff that look
      // toward the light are brighter than the ones that look away.
      float edge = clamp(length(grad) / (0.055 + d * 0.08), 0.0, 1.0);
      float facing = dot(-normalize(grad + vec2(1e-5)), normalize(vec2(-0.45, 0.9)));
      float shade = clamp(0.55 + 0.45 * facing * edge, 0.0, 1.0);

      // The headlamps scatter only in real, visible dye. Empty air stays
      // transparent instead of receiving an independent gray haze.
      vec2 la = (u_lampA - 0.5) * aspect;
      vec2 lb = (u_lampB - 0.5) * aspect;
      float light = max(u_lampI, u_light);
      float carScale = clamp(u_photo.w / 1.89, 0.3, 1.25);
      float scattered = clamp(
        light * (beamScatter(p, la, u_time, grad * 3.0, carScale) + beamScatter(p, lb, u_time, grad * 3.0, carScale)) * vis * 2.0,
        0.0, 1.0);

      // Before the lamps are on there's nothing lighting the smoke but the
      // dark itself, so it sits back; it comes forward as they do. The gush
      // reads stronger while it lasts, still well short of hiding the car.
      float ambient = mix(0.5, 1.0, light);
      float alpha = vis * mix(0.32, 0.50, u_burst.x) * ambient + scattered * mix(0.13, 0.21, u_burst.x);
      alpha = clamp(alpha, 0.0, mix(0.38, 0.60, u_burst.x)) * u_gain;
      if (alpha <= 0.00001) {
        gl_FragColor = veil;
        return;
      }

      vec3 smokeDark = vec3(0.035, 0.038, 0.044);
      vec3 smokeLit = vec3(0.40, 0.44, 0.49);
      vec3 lampColour = vec3(0.80, 0.87, 0.96);
      vec3 color = mix(smokeDark, smokeLit, clamp(0.20 + 0.60 * a + edge * 0.18, 0.0, 1.0)
        * (0.50 + 0.75 * shade));
      color = mix(color, lampColour, clamp(scattered * mix(0.6, 0.72, u_burst.x), 0.0, mix(0.42, 0.48, u_burst.x)));
      // A little light catches moving wisp edges; the broad body stays dark.
      color *= 1.0 + 0.14 * edge * shade;

      gl_FragColor = vec4(color * alpha, alpha) + veil * (1.0 - alpha);
    }
  `;

  // Every program is compiled and linked before any of them is checked: a
  // status query waits for the driver, and checking each in turn used to
  // serialise all thirteen compiles into one long freeze while the page was
  // opening. They are started once the opening has its own shader (or as soon
  // as the car is approached), polled without blocking where the browser
  // compiles in parallel, and checked in a pause.
  const PROGRAMS = {
    advect: [ADVECT, ['vel', 'src', 'velTexel', 'dt', 'rateLow', 'rateHigh', 'ceil']],
    divergence: [DIVERGENCE, ['vel', 'texel']],
    curl: [CURL, ['vel', 'texel']],
    vorticity: [VORTICITY, ['vel', 'curl', 'texel', 'strength', 'dt']],
    pressure: [PRESSURE, ['pressure', 'div', 'texel']],
    gradient: [GRADIENT, ['pressure', 'vel', 'texel']],
    scale: [SCALE, ['tex', 'value']],
    force: [FORCE, ['vel', 'dye', 'dt', 'flow', 'buoy']],
    emitVel: [EMIT_VEL, ['target', 'aspect', 'em', 'emv']],
    emitDye: [EMIT_DYE, ['target', 'aspect', 'em', 'cap', 'add']],
    pointerVel: [POINTER_VEL, ['target', 'aspect', 'm', 'mp', 'mv', 'rad2', 'str']],
    pointerDye: [POINTER_DYE, ['target', 'aspect', 'm', 'mp', 'rad2', 'clear']],
    display: [DISPLAY, ['dye', 'dyeTexel', 'resolution', 'time', 'coverage', 'lampA', 'lampB', 'lampI', 'light', 'burst', 'gain', 'photo', 'veil', 'lpx', 'css']],
  };
  let progs = null;
  let building = null;
  function shader(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return sh;
  }
  function buildPrograms() {
    if (building) return building;
    if (!createContext()) return (building = Promise.resolve(null));
    const vs = shader(gl.VERTEX_SHADER, VERT);
    const pending = Object.entries(PROGRAMS).map(([name, [src, names]]) => {
      const fs = shader(gl.FRAGMENT_SHADER, src);
      const prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.bindAttribLocation(prog, 0, 'a_pos');
      gl.linkProgram(prog);
      return { name, names, prog, fs };
    });
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    building = (async () => {
      if (parallelCompile) {
        await wait(120);
        while (!pending.every(({ prog }) => gl.getProgramParameter(prog, parallelCompile.COMPLETION_STATUS_KHR))) await wait(100);
      } else {
        // The driver links in its own time; check once it has had a pause.
        await (window.SceneIdle ? window.SceneIdle.quiet(300, 2500) : wait(400));
      }
      const built = {};
      for (const { name, names, prog, fs } of pending) {
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
          console.warn('bmw-smoke: program failed to link —', gl.getProgramInfoLog(prog) || gl.getShaderInfoLog(fs) || gl.getShaderInfoLog(vs));
          return null;
        }
        const u = {};
        names.forEach((n) => { u[n] = gl.getUniformLocation(prog, 'u_' + n); });
        built[name] = { p: prog, u };
      }
      return built;
    })();
    return building;
  }


  // ---- Simulation grids ----------------------------------------------------
  function makeTarget(w, h) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    return { tex, fbo, w, h, ok, texel: [1 / w, 1 / h] };
  }
  function makeDouble(w, h) {
    let a = makeTarget(w, h);
    let b = makeTarget(w, h);
    return {
      w, h, texel: a.texel, ok: a.ok && b.ok,
      get read() { return a; },
      get write() { return b; },
      swap() { const t = a; a = b; b = t; },
    };
  }
  function disposeSim(value) {
    if (!value) return;
    const targets = [value.vel.read, value.vel.write, value.dye.read,
      value.dye.write, value.pressure.read, value.pressure.write,
      value.div, value.curl];
    for (const target of targets) {
      gl.deleteFramebuffer(target.fbo);
      gl.deleteTexture(target.tex);
    }
  }
  const dims = (max, aspect) => (aspect >= 1
    ? [max, Math.max(16, Math.round(max / aspect))]
    : [Math.max(16, Math.round(max * aspect)), max]);

  // Sized to the screen's own aspect so cells are square (a stretched grid
  // stretches the swirls), and smaller on phones.
  let sim = null;
  let simAspect = 0;
  function initSim(aspect) {
    const lite = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 720;
    const [sw, sh] = dims(lite ? 112 : 160, aspect);
    const [dw, dh] = dims(lite ? 352 : 512, aspect);
    const next = {
      vel: makeDouble(sw, sh),
      dye: makeDouble(dw, dh),
      pressure: makeDouble(sw, sh),
      div: makeTarget(sw, sh),
      curl: makeTarget(sw, sh),
    };
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    if (!next.vel.ok || !next.dye.ok || !next.pressure.ok || !next.div.ok || !next.curl.ok) {
      disposeSim(next);
      return false;
    }
    const previous = sim;
    sim = next;
    simAspect = aspect;
    // A resize replaces the air grid. Release its old GPU targets only
    // after the replacement is complete; the new field is unchanged.
    disposeSim(previous);
    warm = 260;
    return true;
  }

  // ---- Tunables ----------------------------------------------------------------
  const P = {
    velRate: 1.1,        // how fast the air's own motion dies away, 1/s
    dyeRateLow: 0.28,    // how fast smoke fades near the ground, 1/s
    dyeRateHigh: 1.9,    // ...and higher up, so it thins as it climbs
    curl: 14,            // vorticity confinement
    iterations: 16,      // pressure solve
    pressureKeep: 0.8,
    buoyancy: 7,
    emitCap: 1.0,
    emitAdd: 2.4,
  };

  // ---- Drawing helpers ------------------------------------------------------
  let cw = 0;
  let ch = 0;
  let cssWidth = 1;
  let cssHeight = 1;
  const photoPlane = section.querySelector('.photo-plane');
  const sceneFrame = section.querySelector('.chapter-zoom-bg');
  const photo = { x: 0, y: 0, width: 1, height: 1 };
  const photoUV = new Float32Array(4);
  let geometryDirty = true;
  let geometryProgress = NaN;
  const smokeState = window.BMWSmokeState = {
    ready: true, progress: 0, coverage: 0, flow: 0, running: false,
    drawn: false, frames: 0, time: 0, simulationTime: 0, gain: 0, layoutRefreshes: 0,
    photoRect: null, region: null, viewport: [1, 1],
    lampCoordinates: [[0, 0], [0, 0]], lampIntensity: 0,
    compositing: 'premultiplied', premultipliedAlpha: false,
    revealStart: 0.32, revealFull: 0.37, clearStart: 0.395, clearEnd: 0.44,
  };
  function readGeometry() {
    if (!photoPlane || (!geometryDirty && geometryProgress === progress)) return;
    // The chapter publishes the photo's on-screen rectangle from its camera
    // pose (relative to the sticky frame this canvas fills); measuring the
    // DOM instead forced a style and layout flush on every frame.
    const known = section._photoRect;
    let plane = known && known.width > 0 ? { left: known.x, top: known.y, width: known.width, height: known.height } : null;
    let frame = { left: 0, top: 0 };
    if (!plane) {
      frame = canvas.getBoundingClientRect();
      plane = photoPlane.getBoundingClientRect();
    }
    if (!(plane.width > 0 && plane.height > 0)) return;
    photo.x = plane.left - frame.left;
    photo.y = plane.top - frame.top;
    photo.width = plane.width;
    photo.height = plane.height;
    photoUV.set([photo.x / cssWidth, 1 - (photo.y + photo.height) / cssHeight,
      photo.width / cssWidth, photo.height / cssHeight]);
    smokeState.photoRect = { x: plane.left, y: plane.top, width: plane.width, height: plane.height };
    smokeState.region = { x: plane.left - plane.width * 0.04,
      y: plane.top + plane.height * 0.56,
      width: plane.width * 1.08, height: plane.height * 0.23 };
    smokeState.viewport[0] = cssWidth;
    smokeState.viewport[1] = cssHeight;
    geometryProgress = progress;
    geometryDirty = false;
  }
  function blit(target) {
    if (target) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      gl.viewport(0, 0, target.w, target.h);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, cw, ch);
    }
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  function bind(unit, target) {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, target.tex);
  }

  // ---- The reveal's gush -------------------------------------------------------
  // When the headlamps ignite, the same eight sources blow hard for a moment:
  // low ground jets from under the bumper and the wheel arches, thrown out
  // and toward the camera, heavy (little buoyancy) so they roll along the
  // floor, then easing back into the calm breathing sources while the extra
  // smoke thins away to a quiet layer. It runs on its own clock, so it plays
  // out the same whether the visitor stops at the lamps or keeps scrolling.
  // It fires once per reveal: scrolling back into the dark re-arms it, and
  // the next ignition starts from fresh air rather than stacking smoke.
  const BURST_AT = 0.27;   // both lamps are igniting (BMW_SCENE, js/chapters.js)
  const BURST_REARM = 0.20;
  const BURST_LENGTH = 5.5;
  const burst = { t: Infinity, armed: null, seed: 0, count: 0, jet: 0, glow: 0, spread: 0, settle: 0, cover: 0 };
  smokeState.burst = burst;
  function armBurst() {
    // Every progress read, even while the loop sleeps above the chapter.
    if (burst.armed === null) burst.armed = progress < BURST_AT; // landing mid-chapter: no replay
    if (progress < BURST_REARM) burst.armed = true;
  }
  // The push itself: full by .12 s, fading from .25 s (the outer sources
  // follow it a little later; burst.jet is the middle's).
  const burstJet = (t) => (t > 0 && t < BURST_LENGTH ? smooth(0, 0.12, t) * Math.exp(-Math.max(0, t - 0.25) / 0.55) : 0);
  function burstPhase(dt) {
    armBurst();
    if (burst.armed && progress >= BURST_AT && progress < 0.54 && sim) {
      burst.armed = false; burst.t = 0; burst.count++; burst.seed = Math.random() * 6.283;
      freshAir();
    } else if (burst.t < BURST_LENGTH) burst.t += dt;
    else burst.t = Infinity;
    const t = burst.t;
    const active = t < BURST_LENGTH;
    // jet: the push; glow: how much brighter the gush reads; spread: how far it may roll out past
    // the resting ground region; settle: extra thinning once it has.
    burst.jet = active ? burstJet(t) : 0;
    burst.glow = active ? smooth(0, 0.15, t) * (1 - smooth(0.9, 3.2, t)) : 0;
    burst.spread = active ? smooth(0, 0.6, t) * (1 - smooth(1.8, 3.8, t)) : 0;
    burst.settle = active ? smooth(0.8, 1.6, t) * (1 - smooth(3.5, 5.5, t)) : 0;
    burst.cover = active ? 1 - smooth(3.0, 4.5, t) : 0;
  }
  // The gush starts from clear air: the resting field is faded right down
  // (not wiped, so nothing pops), and the air's old motion mostly stilled.
  function freshAir() {
    const g = progs.scale;
    gl.useProgram(g.p);
    gl.uniform1i(g.u.tex, 0);
    bind(0, sim.dye.read);
    gl.uniform1f(g.u.value, 0.12);
    blit(sim.dye.write);
    sim.dye.swap();
    bind(0, sim.vel.read);
    gl.uniform1f(g.u.value, 0.35);
    blit(sim.vel.write);
    sim.vel.swap();
  }

  // Emitters: x, y, size (a variance, in screen heights squared), strength.
  const em = new Float32Array(8 * 4);
  const emv = new Float32Array(8 * 2);
  function updateEmitters(t) {
    // Overlapping continuous sources made a flat fog band, and on desktop
    // they sat below the visible frame. Staggered breaths now originate at
    // the lower bumper, with narrow gaps for the moving air to curl through.
    const w = Math.min(1, Math.max(0.3, simAspect / 1.6));
    const radius = photo.height * 0.023 / cssHeight;
    const size = Math.max(0.000035, radius * radius);
    const speed = Math.min(1, Math.max(0.60, photo.height / cssHeight * 0.65));
    const onPhoto = (x, y) => [(photo.x + photo.width * x) / cssWidth,
      1 - (photo.y + photo.height * y) / cssHeight];
    for (let i = 0; i < 6; i++) {
      const u = 0.12 + (i + 0.5) / 6 * 0.76 + 0.018 * Math.sin(t * 0.31 + i * 1.9);
      const [x, y] = onPhoto(u, 0.661 + 0.008 * Math.sin(t * 0.43 + i * 2.3));
      const breath = 0.5 + 0.5 * Math.sin(t * 0.82 + i * 2.1);
      em.set([x, y, size, 0.20 + 0.65 * breath * breath], i * 4);
      emv.set([((0.48 - u) * 24 + 11 * Math.sin(t * 0.63 + i * 2.1)) * w * speed,
        (4 + 3 * Math.sin(t * 0.55 + i * 1.3)) * speed], i * 2);
    }
    const [lx, ly] = onPhoto(0.12, 0.641 + 0.009 * Math.sin(t * 0.35));
    const [rx, ry] = onPhoto(0.86, 0.641 + 0.009 * Math.sin(t * 0.39 + 1));
    em.set([lx, ly, size * 1.2, 0.32 + 0.22 * Math.sin(t * 0.72) ** 2], 24);
    emv.set([(16 + 6 * Math.sin(t * 0.5)) * w * speed, 3 * speed], 12);
    em.set([rx, ry, size * 1.2, 0.32 + 0.22 * Math.sin(t * 0.68 + 1.4) ** 2], 28);
    emv.set([(-16 - 6 * Math.sin(t * 0.45)) * w * speed, 3 * speed], 14);
    if (!(burst.t < BURST_LENGTH)) return;
    // The gush: the same sources, wider and far stronger, blowing outward
    // from beneath the car. The middle pair drives down toward the camera,
    // the rest fan out along the ground and lift as they go; the arches
    // throw it sideways round the wheels. Each reveal varies a little.
    const s = burst.seed;
    // It blooms from the middle: the outer sources join a beat later.
    const at = (delay) => burstJet(burst.t - delay);
    for (let i = 0; i < 6; i++) {
      const o = i * 4, v = i * 2;
      const u = 0.12 + (i + 0.5) / 6 * 0.76;
      const out = (u - 0.5) * 2;
      const middle = i === 2 || i === 3;
      const jet = at(Math.abs(out) * 0.2);
      if (jet <= 0.001) continue;
      const bx = out * (middle ? 38 : 92) + 9 * Math.sin(s + i * 1.7);
      const by = middle ? -30 + 6 * Math.sin(s * 1.3 + i) : 3 + 6 * Math.sin(s + i * 2.3);
      em[o + 1] += (onPhoto(u, 0.674)[1] - em[o + 1]) * jet;
      em[o + 2] = size * (1 + 1.6 * jet);
      em[o + 3] += (0.95 - em[o + 3]) * jet;
      emv[v] += (bx * w * speed - emv[v]) * jet;
      emv[v + 1] += (by * speed - emv[v + 1]) * jet;
    }
    for (const [o, v, dir] of [[24, 12, -1], [28, 14, 1]]) {
      const jet = at(0.22);
      if (jet <= 0.001) continue;
      em[o + 2] = size * 1.2 * (1 + 1.4 * jet);
      em[o + 3] += (0.9 - em[o + 3]) * jet;
      emv[v] += ((dir * 105 + 10 * Math.sin(s * 0.7 + dir)) * w * speed - emv[v]) * jet;
      emv[v + 1] += (7 * speed - emv[v + 1]) * jet;
    }
  }

  // ---- Pointer -----------------------------------------------------------------
  // In canvas uv (0..1, y up), which is also the simulation's space. The
  // canvas can be shorter than the viewport when mobile chrome retracts.
  // s* is the eased position actually
  // used: a little lag makes a jittery hand read as a gentle one.
  const ptr = { x: 0.5, y: 0.5, cx: 0, cy: 0, seen: false, target: 0, active: 0, sx: 0.5, sy: 0.5, px: 0.5, py: 0.5 };
  function projectPointer() {
    const bounds = canvas.getBoundingClientRect();
    ptr.x = (ptr.cx - bounds.left) / (bounds.width || cssWidth);
    ptr.y = 1 - (ptr.cy - bounds.top) / (bounds.height || cssHeight);
  }
  function point(cx, cy) {
    ptr.cx = cx;
    ptr.cy = cy;
    ptr.target = 1;
    // Keep the latest client position while asleep. wake/resetPointer
    // projects it once against the current canvas and clears its history,
    // rather than measuring an offscreen canvas twice per pointer event.
    if (!frameId) { ptr.seen = true; return; }
    projectPointer();
    if (!ptr.seen) {
      ptr.seen = true;
      ptr.sx = ptr.px = ptr.x;
      ptr.sy = ptr.py = ptr.y;
    }
  }
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    point(e.clientX, e.clientY);
  }, { passive: true });
  // A finger dragging to scroll moves the smoke too — touchmove keeps firing
  // through a scroll, where pointermove stops as the browser takes over.
  window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) point(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  const gone = () => { ptr.target = 0; };
  document.documentElement.addEventListener('pointerleave', gone);
  window.addEventListener('touchend', gone, { passive: true });
  window.addEventListener('touchcancel', gone, { passive: true });
  window.addEventListener('blur', gone);

  // ---- One step of the simulation -----------------------------------------
  let flow = 0;
  function simulate(dt, t, mvx, mvy) {
    const { vel, dye, pressure, div, curl } = sim;
    const aspect = simAspect;

    // Body forces: rising, and the scroll's rolling-in / parting.
    let g = progs.force;
    gl.useProgram(g.p);
    bind(0, vel.read);
    bind(1, dye.read);
    gl.uniform1i(g.u.vel, 0);
    gl.uniform1i(g.u.dye, 1);
    gl.uniform1f(g.u.dt, dt);
    // While the gush rolls out, the scroll's gentle gathering waits; it then
    // draws the settling smoke back in beneath the car.
    gl.uniform1f(g.u.flow, flow * (1 - burst.spread) * Math.min(1, Math.max(0.3, simAspect / 1.6)));
    gl.uniform1f(g.u.buoy, P.buoyancy * (1 - 0.6 * burst.jet));
    blit(vel.write);
    vel.swap();

    // Sources.
    updateEmitters(t);
    g = progs.emitVel;
    gl.useProgram(g.p);
    bind(0, vel.read);
    gl.uniform1i(g.u.target, 0);
    gl.uniform1f(g.u.aspect, aspect);
    gl.uniform4fv(g.u.em, em);
    gl.uniform2fv(g.u.emv, emv);
    blit(vel.write);
    vel.swap();

    g = progs.emitDye;
    gl.useProgram(g.p);
    bind(0, dye.read);
    gl.uniform1i(g.u.target, 0);
    gl.uniform1f(g.u.aspect, aspect);
    gl.uniform4fv(g.u.em, em);
    gl.uniform1f(g.u.cap, P.emitCap * (1 + 0.25 * burst.jet));
    gl.uniform1f(g.u.add, P.emitAdd * dt * (1 + 5 * burst.jet));
    blit(dye.write);
    dye.swap();

    // The pointer moves the air, and thins the smoke it passes through.
    if (ptr.active > 0.02) {
      g = progs.pointerVel;
      gl.useProgram(g.p);
      bind(0, vel.read);
      gl.uniform1i(g.u.target, 0);
      gl.uniform1f(g.u.aspect, aspect);
      gl.uniform2f(g.u.m, ptr.sx, ptr.sy);
      gl.uniform2f(g.u.mp, ptr.px, ptr.py);
      gl.uniform2f(g.u.mv, mvx, mvy);
      gl.uniform1f(g.u.rad2, 0.0045);
      gl.uniform1f(g.u.str, 0.5 * ptr.active);
      blit(vel.write);
      vel.swap();

      const moved = Math.hypot((ptr.sx - ptr.px) * aspect, ptr.sy - ptr.py);
      g = progs.pointerDye;
      gl.useProgram(g.p);
      bind(0, dye.read);
      gl.uniform1i(g.u.target, 0);
      gl.uniform1f(g.u.aspect, aspect);
      gl.uniform2f(g.u.m, ptr.sx, ptr.sy);
      gl.uniform2f(g.u.mp, ptr.px, ptr.py);
      gl.uniform1f(g.u.rad2, 0.006);
      gl.uniform1f(g.u.clear, (0.006 * dt * 60 + Math.min(moved, 0.06) * 8) * ptr.active);
      blit(dye.write);
      dye.swap();
    }

    // Swirl.
    g = progs.curl;
    gl.useProgram(g.p);
    bind(0, vel.read);
    gl.uniform1i(g.u.vel, 0);
    gl.uniform2f(g.u.texel, vel.texel[0], vel.texel[1]);
    blit(curl);

    g = progs.vorticity;
    gl.useProgram(g.p);
    bind(0, vel.read);
    bind(1, curl);
    gl.uniform1i(g.u.vel, 0);
    gl.uniform1i(g.u.curl, 1);
    gl.uniform2f(g.u.texel, vel.texel[0], vel.texel[1]);
    gl.uniform1f(g.u.strength, P.curl * (1 + 0.6 * burst.jet));
    gl.uniform1f(g.u.dt, dt);
    blit(vel.write);
    vel.swap();

    // Make the air incompressible: solve for the pressure that would stop
    // it bunching up, and take that pressure's gradient out of the motion.
    g = progs.divergence;
    gl.useProgram(g.p);
    bind(0, vel.read);
    gl.uniform1i(g.u.vel, 0);
    gl.uniform2f(g.u.texel, vel.texel[0], vel.texel[1]);
    blit(div);

    g = progs.scale;
    gl.useProgram(g.p);
    bind(0, pressure.read);
    gl.uniform1i(g.u.tex, 0);
    gl.uniform1f(g.u.value, P.pressureKeep);
    blit(pressure.write);
    pressure.swap();

    g = progs.pressure;
    gl.useProgram(g.p);
    bind(1, div);
    gl.uniform1i(g.u.pressure, 0);
    gl.uniform1i(g.u.div, 1);
    gl.uniform2f(g.u.texel, vel.texel[0], vel.texel[1]);
    for (let i = 0; i < P.iterations; i++) {
      bind(0, pressure.read);
      blit(pressure.write);
      pressure.swap();
    }

    g = progs.gradient;
    gl.useProgram(g.p);
    bind(0, pressure.read);
    bind(1, vel.read);
    gl.uniform1i(g.u.pressure, 0);
    gl.uniform1i(g.u.vel, 1);
    gl.uniform2f(g.u.texel, vel.texel[0], vel.texel[1]);
    blit(vel.write);
    vel.swap();

    // Carry the air's own motion, then the smoke, along it.
    g = progs.advect;
    gl.useProgram(g.p);
    bind(0, vel.read);
    bind(1, vel.read);
    gl.uniform1i(g.u.vel, 0);
    gl.uniform1i(g.u.src, 1);
    gl.uniform2f(g.u.velTexel, vel.texel[0], vel.texel[1]);
    gl.uniform1f(g.u.dt, dt);
    gl.uniform1f(g.u.rateLow, P.velRate);
    gl.uniform1f(g.u.rateHigh, P.velRate);
    gl.uniform1f(g.u.ceil, 0);
    blit(vel.write);
    vel.swap();

    bind(0, vel.read);
    bind(1, dye.read);
    gl.uniform1f(g.u.rateLow, P.dyeRateLow + 0.5 * burst.settle);
    gl.uniform1f(g.u.rateHigh, P.dyeRateHigh + 0.4 * burst.settle);
    gl.uniform1f(g.u.ceil, 1);
    blit(dye.write);
    dye.swap();
  }

  // ---- Canvas size -----------------------------------------------------------------
  // Rendered under the canvas's own CSS size: smoke has no hard edges to
  // keep sharp. CSS stretches it back up.
  const RENDER_SCALE = 0.6;
  function resize() {
    cssWidth = Math.max(1, canvas.clientWidth || window.innerWidth);
    cssHeight = Math.max(1, canvas.clientHeight || window.innerHeight);
    const w = Math.max(1, Math.round(cssWidth * RENDER_SCALE));
    const h = Math.max(1, Math.round(cssHeight * RENDER_SCALE));
    if (w !== cw || h !== ch) {
      cw = w;
      ch = h;
      canvas.width = w;
      canvas.height = h;
      geometryDirty = true;
    }
    // A different shape of screen (a phone turned over) needs a
    // differently-shaped grid.
    const aspect = cssWidth / cssHeight;
    if (!sim || Math.abs(aspect / simAspect - 1) > 0.12) initSim(aspect);
  }

  // ---- Scroll ----------------------------------------------------------------------
  // The headlamps ignite at 24.5–27% and the car is revealed by 40.5%. The
  // gush (above) plays out from the ignition; after it, a quiet layer of
  // smoke stays under the car, and from 40.5% the original wisps rise to
  // full, breathe under the bumper, and part. Nothing shows before the
  // ignition, so the forming LED outline is always drawn in clean air. The
  // same camera progress controls the envelope in both scroll directions.
  const smooth = (a, b, x) => {
    const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
    return t * t * (3 - 2 * t);
  };
  const SMOKE_FROM = 0.245;
  // The simulation resumes a little before the ignition, so the air is moving.
  const SIM_FROM = 0.22;
  function coverageAt(p) {
    if (p <= SMOKE_FROM || p >= 0.62) return 0;
    const atmosphere = 0.62 * smooth(SMOKE_FROM, 0.30, p);
    const rise = p < 0.405 ? 0 : smooth(0.405, 0.46, p);
    return Math.max(atmosphere, rise) * (1 - smooth(0.54, 0.62, p));
  }
  // The gush is shown in full while it lasts, inside the same bounds.
  const burstGate = (p) => smooth(SMOKE_FROM, 0.26, p) * (1 - smooth(0.54, 0.62, p));
  function flowAt(p) {
    if (p < 0.54) return -0.45 * (1 - smooth(0.405, 0.47, p));
    return smooth(0.54, 0.58, p) * (1 - smooth(0.60, 0.62, p));
  }
  // The BMW timeline publishes its rendered progress, so the smoke, car
  // and headlamps all use the same scrub. Until that timeline is ready,
  // the local trigger also supports restored scroll positions.
  let target = 0;
  let flowTarget = 0;
  let progress = 0;
  let coverage = 0;
  let snapped = false;
  let ready = false;
  let st = null;
  function readProgress(fallback) {
    const shared = Number.isFinite(section._sceneProgress);
    if (shared) progress = section._sceneProgress;
    else if (Number.isFinite(fallback)) progress = fallback;
    else if (st && st.end > st.start) {
      progress = Math.min(Math.max((window.pageYOffset - st.start) / (st.end - st.start), 0), 1);
    }
    target = Math.max(coverageAt(progress), burst.cover * burstGate(progress));
    flowTarget = flowAt(progress);
    if (shared) {
      coverage = target;
      flow = flowTarget;
    }
    armBurst();
    smokeState.progress = progress;
    smokeState.coverage = coverage;
    smokeState.flow = flow;
    return shared;
  }
  st = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      readProgress(self.progress);
      wake();
    },
    onRefresh: (self) => {
      readProgress(self.progress);
      // Landing mid-chapter (reload, anchor link): start there rather than
      // easing in from nothing.
      if (!snapped) { coverage = target; flow = flowTarget; snapped = true; }
      wake();
    },
  });

  // ---- The headlamps -----------------------------------------------------------
  // BMW_SCENE (js/chapters.js) is the one place that knows where the lamps
  // are and how bright they are, and writes both onto the veil every frame
  // (--l1x/--l1y/--l2x/--l2y in px, --li 0..1). Reading them back here,
  // rather than working them out again, means the smoke's light and the
  // veil's light can't drift apart. Until the timeline has written them
  // the lamps are simply off.
  const veilEl = section.querySelector('.reveal-veil');
  const lamps = { ax: 0.3, ay: 0.44, bx: 0.7, by: 0.44, i: 0, r: 9, glow: 0 };
  const lampGlows = [section.querySelector('.lamp-lit--left'), section.querySelector('.lamp-lit--right')];
  function readLamps() {
    if (!veilEl) return;
    const s = veilEl.style;
    const w = cssWidth;
    const h = cssHeight;
    const px = (name, fallback) => {
      const v = s.getPropertyValue(name);
      return v.endsWith('px') ? parseFloat(v) : fallback;
    };
    lamps.ax = px('--l1x', w * 0.3) / w;
    lamps.ay = 1 - px('--l1y', h * 0.56) / h;
    lamps.bx = px('--l2x', w * 0.7) / w;
    lamps.by = 1 - px('--l2y', h * 0.56) / h;
    const i = parseFloat(s.getPropertyValue('--li'));
    lamps.i = Number.isFinite(i) ? Math.min(Math.max(i, 0), 1) : 0;
    const r = parseFloat(s.getPropertyValue('--lr'));
    lamps.r = Number.isFinite(r) ? Math.max(r, 0) : 9;
    // The timeline's inline opacity on each lamp's glow (no layout read).
    let glow = 0;
    for (const el of lampGlows) glow += Math.min(Math.max(parseFloat(el?.style.opacity) || 0, 0), 1) * 0.5;
    lamps.glow = glow * 0.85;
  }

  // An observer wakes the simulation before the chapter arrives. Hidden
  // sections retain their fluid state without scheduling more frames.
  let visible = false;

  const narrowScreen = window.matchMedia('(max-width: 720px)');
  const clock = { t: 0, sim: 0 };
  let warm = 0;
  let sizeDirty = true;

  function render() {
    const d = progs.display;
    gl.useProgram(d.p);
    bind(0, sim.dye.read);
    gl.uniform1i(d.u.dye, 0);
    gl.uniform2f(d.u.dyeTexel, sim.dye.texel[0], sim.dye.texel[1]);
    gl.uniform2f(d.u.resolution, cw, ch);
    gl.uniform1f(d.u.time, clock.t);
    gl.uniform1f(d.u.coverage, coverage);
    gl.uniform4fv(d.u.photo, photoUV);
    readLamps();
    gl.uniform2f(d.u.lampA, lamps.ax, lamps.ay);
    gl.uniform2f(d.u.lampB, lamps.bx, lamps.by);
    gl.uniform1f(d.u.lampI, lamps.i);
    gl.uniform1f(d.u.light, lamps.glow);
    gl.uniform2f(d.u.burst, burst.glow, burst.spread);
    gl.uniform4f(d.u.veil, lamps.i, lamps.r, glVeil ? 1 : 0, 0);
    gl.uniform4f(d.u.lpx, lamps.ax * cssWidth, (1 - lamps.ay) * cssHeight, lamps.bx * cssWidth, (1 - lamps.by) * cssHeight);
    gl.uniform2f(d.u.css, cssWidth, cssHeight);
    // A small phone needs a much quieter foreground, not just a slight
    // reduction of the landscape smoke's opacity (its gush is let up a little).
    smokeState.gain = narrowScreen.matches ? 0.44 * (1 + 0.25 * burst.glow) : 0.68;
    gl.uniform1f(d.u.gain, smokeState.gain);
    smokeState.lampCoordinates[0][0] = lamps.ax * cssWidth;
    smokeState.lampCoordinates[0][1] = (1 - lamps.ay) * cssHeight;
    smokeState.lampCoordinates[1][0] = lamps.bx * cssWidth;
    smokeState.lampCoordinates[1][1] = (1 - lamps.by) * cssHeight;
    smokeState.lampIntensity = lamps.i;
    blit(null);
  }

  // Whether the canvas holds a picture, so it is cleared exactly once when
  // the smoke has gone, and never shows a stale frame.
  let drawn = false;

  // The lamp-lit veil is drawn here too, beneath the smoke, from the very
  // same properties the CSS veil reads (the chapter writes them each frame).
  // A viewport-sized gradient mask re-parameterised on every frame of the
  // reveal is costly to composite — in Firefox it halved the frame rate —
  // while one shader pass is not. It redraws only when its values change;
  // the CSS veil stays underneath as the fallback, hidden once this draws.
  let glVeil = false;
  let veilKey = '';
  function present() {
    if (!ready || !gl) return;
    if (sizeDirty || !sim) {
      resize();
      sizeDirty = false;
    }
    if (!sim) return;
    readLamps();
    const smoke = coverage > 0.002;
    glVeil = visible && !document.hidden;
    const key = glVeil ? [lamps.ax, lamps.ay, lamps.bx, lamps.by, lamps.i, lamps.r, cw, ch, smoke].join() : '';
    if (smoke || (glVeil && (key !== veilKey || !drawn))) {
      render();
      drawn = true;
      smokeState.drawn = smoke;
      veilKey = key;
      if (glVeil && !section.classList.contains('has-gl-veil')) section.classList.add('has-gl-veil');
    } else if (!glVeil) {
      clearCanvas();
      veilKey = '';
    }
  }

  function clearCanvas() {
    if (!drawn) return;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cw, ch);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    drawn = false;
    smokeState.drawn = false;
  }

  function step(dt) {
    const shared = readProgress();
    // Only the startup fallback needs easing; the car timeline is already
    // eased and must not acquire a second delay here.
    if (!shared) {
      const k = 1 - Math.exp(-dt * 7);
      coverage += (target - coverage) * k;
      if (Math.abs(target - coverage) < 0.0005) coverage = target;
      flow += (flowTarget - flow) * k;
    }
    // Even the pre-initialization fallback must respect both hard sequence
    // boundaries; no easing tail may leave smoke over the forming LEDs.
    if (progress <= SMOKE_FROM || progress >= 0.62) coverage = 0;
    clock.t += dt;

    // The history is reset on resume; only visible motion moves the air.
    ptr.px = ptr.sx;
    ptr.py = ptr.sy;
    const follow = 1 - Math.exp(-dt * 22);
    ptr.sx += (ptr.x - ptr.sx) * follow;
    ptr.sy += (ptr.y - ptr.sy) * follow;
    ptr.active += (ptr.target - ptr.active) * (1 - Math.exp(-dt * 8));

    if (sizeDirty || !sim) {
      resize();
      sizeDirty = false;
    }
    if (!sim) return;
    readGeometry();

    // The air only needs to move once the smoke is close to showing; during
    // the headlight formation before it, the settled field simply waits.
    const near = progress > SIM_FROM && progress < 0.70;
    // Leaving the chapter ends a gush in progress rather than freezing it.
    if (!near && burst.t < BURST_LENGTH) burst.t = BURST_LENGTH;
    if (visible) {
      // On the fluid's own (capped) step, so a slow device sees the whole
      // gush in step with the smoke it pours, rather than its jets ending
      // before the air has carried them anywhere.
      burstPhase(Math.min(dt, 1 / 30));
      if (shared) readProgress();
      else target = Math.max(coverageAt(progress), burst.cover * burstGate(progress));
      if (progress <= SMOKE_FROM || progress >= 0.62) coverage = 0;
    }
    if (visible && (near || warm > 0)) {
      if (near) {
        // The air's speed under the pointer, in grid cells per second, with
        // only about a quarter of the pointer's own speed handed on.
        const cap = (v) => Math.max(-60, Math.min(60, v));
        const mvx = cap(((ptr.sx - ptr.px) / dt) * sim.vel.w * 0.24);
        const mvy = cap(((ptr.sy - ptr.py) / dt) * sim.vel.h * 0.24);
        const sdt = Math.min(dt, 1 / 30);
        clock.sim += sdt;
        simulate(sdt, clock.sim, mvx, mvy);
      }
      // The first moments of the simulation are just smoke being poured
      // in; it's brought up to speed a few frames at a time, behind the
      // intro, so the smoke is already a settled thing when it's needed.
      for (let i = 0; i < 8 && warm > 0; i++, warm--) {
        clock.sim += 1 / 30;
        simulate(1 / 30, clock.sim, 0, 0);
      }
    }
    present();
    smokeState.frames++;
    smokeState.progress = progress;
    smokeState.coverage = coverage;
    smokeState.flow = flow;
    smokeState.time = clock.t;
    smokeState.simulationTime = clock.sim;
  }

  let frameId = 0;
  let last = 0;
  function resetPointer() {
    // A paused canvas may have moved under a stationary pointer.
    if (ptr.seen) projectPointer();
    ptr.sx = ptr.px = ptr.x;
    ptr.sy = ptr.py = ptr.y;
    ptr.active = 0;
  }
  function shouldRun() {
    if (!visible || document.hidden) return false;
    // Smoke on the canvas keeps the loop alive until it is cleared; the veil
    // alone does not (it is redrawn on change, from the scene clock).
    return (progress > SIM_FROM && progress < 0.62) || coverage > 0.002 || smokeState.drawn
      || (progress < 0.62 && (!sim || warm > 0));
  }
  function stop() {
    if (!frameId && !last && !smokeState.running && ptr.active === 0) return;
    cancelAnimationFrame(frameId);
    frameId = 0;
    last = 0;
    smokeState.running = false;
    resetPointer();
  }
  function wake() {
    // ScrollTrigger may refresh synchronously during its own creation.
    if (!ready) return;
    readProgress();
    // A reversal can close the smoke gate before its next fluid frame:
    // redraw (the veil alone) with the native scene clock straight away.
    // This also draws the veil on each camera move while the fluid sleeps.
    if (coverage <= 0.002 || !frameId) present();
    if (!shouldRun()) {
      stop();
      if (!visible || document.hidden) present();
      return;
    }
    if (!frameId) {
      resetPointer();
      last = 0;
      frameId = requestAnimationFrame(frame);
      smokeState.running = true;
    }
  }
  function frame(now) {
    frameId = 0;
    if (!shouldRun()) { stop(); present(); return; }
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
    last = now;
    step(dt);
    if (sim && shouldRun()) frameId = requestAnimationFrame(frame);
    else stop();
  }
  // Programs are built after the opening, or as soon as the car is near.
  const begin = () => buildPrograms().then((built) => {
    if (!built || ready) return;
    progs = built;
    ready = true;
    wake();
  });
  window.SceneIdle?.prepare(0, begin, 150, 1200);
  if (!window.SceneIdle) begin();
  section.addEventListener('sceneprogress', () => { geometryDirty = true; if (!ready && progress > 0) begin(); wake(); });
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (!ready && visible && window.scrollY > 0) begin();
    wake();
  }, { rootMargin: '20% 0px' }).observe(section);
  document.addEventListener('visibilitychange', wake);
  let layoutRefreshTimer = 0;
  window.addEventListener('resize', () => {
    sizeDirty = true;
    geometryDirty = true;
    resetPointer();
    wake();
    clearTimeout(layoutRefreshTimer);
    layoutRefreshTimer = setTimeout(() => {
      layoutRefreshTimer = 0;
      const measured = section._photoBridgeLayout?.().viewport;
      if (!measured || !sceneFrame) return;
      // Mobile resize can suppress the native debounce when returning to a
      // previous width. Reuse its refresh only if its measured stage is stale;
      // browser chrome changing without a stage-size change needs no work.
      if (Math.abs(measured.width - sceneFrame.clientWidth) <= 0.5
        && Math.abs(measured.height - sceneFrame.clientHeight) <= 0.5) return;
      ScrollTrigger.refresh();
      smokeState.layoutRefreshes++;
      sizeDirty = true;
      geometryDirty = true;
      wake();
    }, 220);
  }, { passive: true });
  window.addEventListener('pageshow', wake);
})();
