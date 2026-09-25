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
   * Smoke is fed in low along the bottom of the frame and from the two
   * sides, moving in towards the middle; it rises a little, curls up into
   * wisps through vorticity confinement, and thins with height, so the
   * thick of it lies below the car and only faint veils reach the grille.
   * The cursor is just another thing that moves the air: it pushes the
   * velocity, so the smoke it meets is shoved aside and left swirling in
   * the wake, and it thins the dye a little where it passes.
   *
   * What the visitor's scroll controls is how much of that is shown, and
   * how it's being nudged — never the simulation itself, which runs on its
   * own clock and is never reset. Scrolling forwards or back just changes
   * the two numbers below, so there is nothing to restart or snap:
   *
   *   coverage  0..1, eased toward the scroll target every frame. Fades the
   *             smoke in and out, and decides how far in from the sides it
   *             may show.
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

  const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: false, antialias: false, depth: false, stencil: false });
  if (!gl) return;
  if (!gl.getExtension('EXT_color_buffer_float') && !gl.getExtension('EXT_color_buffer_half_float')) return;

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
    uniform float u_gain;

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
    // there is smoke to scatter it (see main).
    float beamScatter(vec2 p, vec2 lp, float t, vec2 w) {
      vec2 r = p - lp;
      float d = length(r);
      vec2 dir = r / max(d, 0.001);
      float streak = snoise(vec3(dir * 1.7 + w * 1.1, t * 0.05)) * 0.5 + 0.5;
      streak = mix(0.55, 1.0, smoothstep(0.25, 0.85, streak));
      float forward = 0.15 + 0.85 * smoothstep(-0.3, 0.8, -dir.y);
      float core = exp(-d * d * 90.0);
      float k = d / 0.18;
      float lobe = forward * streak / (1.0 + k * k) * smoothstep(0.0, 0.05, d);
      return core * 0.6 + lobe * 0.7;
    }

    void main() {
      vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
      vec2 p = (v_uv - 0.5) * aspect;

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
      float grain = snoise(vec3(p * 7.0 + vec2(0.0, -u_time * 0.02), u_time * 0.05)) * 0.6
                  + snoise(vec3(p * 19.0, u_time * 0.09 + 3.0)) * 0.4;
      float dens = max(d * (1.0 + 0.3 * grain), 0.0);

      // Beer-Lambert: thin smoke is nearly clear, thick smoke saturates,
      // and nothing has a hard edge.
      float a = 1.0 - exp(-dens * 2.2);

      // Where it may show. The scroll's coverage fades it in and out and
      // decides how far in from the sides it reaches; above the lamps
      // there's nothing, so the title and nav sit in clear dark.
      float reach = mix(0.58, -0.15, u_coverage);
      float horizontal = mix(0.3, 1.0, smoothstep(reach - 0.42, reach, abs(p.x)));
      float ceil = 1.0 - smoothstep(0.02, 0.26, p.y);
      float vis = a * horizontal * ceil * u_coverage;

      // Lit from above and to one side: the faces of a puff that look
      // toward the light are brighter than the ones that look away.
      float edge = clamp(length(grad) * 5.0, 0.0, 1.0);
      float facing = dot(-normalize(grad + vec2(1e-5)), normalize(vec2(-0.45, 0.9)));
      float shade = clamp(0.55 + 0.45 * facing * edge, 0.0, 1.0);

      // The headlamps light the smoke, in proportion to the smoke — plus a
      // little faint haze in the air between the wisps, since a beam needs
      // something to show in.
      vec2 la = (u_lampA - 0.5) * aspect;
      vec2 lb = (u_lampB - 0.5) * aspect;
      float haze = 0.12 * u_coverage * (1.0 - smoothstep(-0.28, 0.16, p.y));
      float medium = vis + haze;
      float scattered = clamp(
        u_lampI * (beamScatter(p, la, u_time, grad * 3.0) + beamScatter(p, lb, u_time, grad * 3.0)) * medium * 2.4,
        0.0, 1.0);

      // Before the lamps are on there's nothing lighting the smoke but the
      // dark itself, so it sits back; it comes forward as they do.
      float ambient = mix(0.5, 1.0, u_lampI);
      float alpha = vis * 0.5 * ambient + scattered * 0.26;
      alpha = clamp(alpha, 0.0, 0.62) * u_gain;

      vec3 smokeDark = vec3(0.05, 0.052, 0.058);
      vec3 smokeLit = vec3(0.6, 0.6, 0.61);
      vec3 lampColour = vec3(0.88, 0.92, 0.98);
      vec3 color = mix(smokeDark, smokeLit, clamp(0.18 + 0.7 * a, 0.0, 1.0) * (0.55 + 0.75 * shade));
      color = mix(color, lampColour, clamp(scattered * 0.9, 0.0, 0.7));

      gl_FragColor = vec4(color, alpha);
    }
  `;

  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.warn('bmw-smoke: shader failed to compile —', gl.getShaderInfoLog(sh));
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }
  const vs = compile(gl.VERTEX_SHADER, VERT);
  function program(fsSrc, names) {
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.bindAttribLocation(prog, 0, 'a_pos');
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('bmw-smoke: program failed to link —', gl.getProgramInfoLog(prog));
      return null;
    }
    const u = {};
    names.forEach((n) => { u[n] = gl.getUniformLocation(prog, 'u_' + n); });
    return { p: prog, u };
  }

  const progs = {
    advect: program(ADVECT, ['vel', 'src', 'velTexel', 'dt', 'rateLow', 'rateHigh', 'ceil']),
    divergence: program(DIVERGENCE, ['vel', 'texel']),
    curl: program(CURL, ['vel', 'texel']),
    vorticity: program(VORTICITY, ['vel', 'curl', 'texel', 'strength', 'dt']),
    pressure: program(PRESSURE, ['pressure', 'div', 'texel']),
    gradient: program(GRADIENT, ['pressure', 'vel', 'texel']),
    scale: program(SCALE, ['tex', 'value']),
    force: program(FORCE, ['vel', 'dye', 'dt', 'flow', 'buoy']),
    emitVel: program(EMIT_VEL, ['target', 'aspect', 'em', 'emv']),
    emitDye: program(EMIT_DYE, ['target', 'aspect', 'em', 'cap', 'add']),
    pointerVel: program(POINTER_VEL, ['target', 'aspect', 'm', 'mp', 'mv', 'rad2', 'str']),
    pointerDye: program(POINTER_DYE, ['target', 'aspect', 'm', 'mp', 'rad2', 'clear']),
    display: program(DISPLAY, ['dye', 'dyeTexel', 'resolution', 'time', 'coverage', 'lampA', 'lampB', 'lampI', 'gain']),
  };
  if (!vs || Object.values(progs).some((p) => !p)) return;

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
    if (!next.vel.ok || !next.dye.ok || !next.pressure.ok || !next.div.ok || !next.curl.ok) return false;
    sim = next;
    simAspect = aspect;
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

  // Emitters: x, y, size (a variance, in screen heights squared), strength.
  const em = new Float32Array(8 * 4);
  const emv = new Float32Array(8 * 2);
  function updateEmitters(t) {
    // Sideways speeds are set for a landscape screen. On a tall one the same
    // speed would carry the smoke across it in a moment and stack it in a
    // column down the middle, so they follow the width. Likewise the
    // sources: six full-size ones would run together into one flat slab, so
    // they shrink to stay distinct plumes.
    const w = Math.min(1, Math.max(0.3, simAspect / 1.6));
    const size = 0.0075 * (0.4 + 0.6 * w);
    for (let i = 0; i < 6; i++) {
      const x = (i + 0.5) / 6 + 0.05 * Math.sin(t * 0.27 + i * 1.9);
      const y = 0.05 + 0.035 * Math.sin(t * 0.41 + i * 2.3);
      const s = Math.sin(t * 0.33 + i * 1.1);
      em.set([x, y, size, 0.55 + 0.45 * s * s], i * 4);
      emv.set([((0.5 - x) * 30 + 8 * Math.sin(t * 0.6 + i * 2.1)) * w, 5 + 4 * Math.sin(t * 0.5 + i * 1.3)], i * 2);
    }
    em.set([0.0, 0.14 + 0.03 * Math.sin(t * 0.3), 0.01, 0.8], 24);
    emv.set([(18 + 4 * Math.sin(t * 0.5)) * w, 2], 12);
    em.set([1.0, 0.14 + 0.03 * Math.sin(t * 0.36 + 1), 0.01, 0.8], 28);
    emv.set([(-18 - 4 * Math.sin(t * 0.45)) * w, 2], 14);
  }

  // ---- Pointer -----------------------------------------------------------------
  // In uv (0..1, y up), which is also the simulation's space, because the
  // canvas is pinned to the viewport. s* is the eased position actually
  // used: a little lag makes a jittery hand read as a gentle one.
  const ptr = { x: 0.5, y: 0.5, seen: false, target: 0, active: 0, sx: 0.5, sy: 0.5, px: 0.5, py: 0.5 };
  function point(cx, cy) {
    ptr.x = cx / window.innerWidth;
    ptr.y = 1 - cy / window.innerHeight;
    if (!ptr.seen) {
      ptr.seen = true;
      ptr.sx = ptr.px = ptr.x;
      ptr.sy = ptr.py = ptr.y;
    }
    ptr.target = 1;
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
    gl.uniform1f(g.u.flow, flow * Math.min(1, Math.max(0.3, simAspect / 1.6)));
    gl.uniform1f(g.u.buoy, P.buoyancy);
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
    gl.uniform1f(g.u.cap, P.emitCap);
    gl.uniform1f(g.u.add, P.emitAdd * dt);
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
    gl.uniform1f(g.u.strength, P.curl);
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
    gl.uniform1f(g.u.rateLow, P.dyeRateLow);
    gl.uniform1f(g.u.rateHigh, P.dyeRateHigh);
    gl.uniform1f(g.u.ceil, 1);
    blit(dye.write);
    dye.swap();
  }

  // ---- Canvas size -----------------------------------------------------------------
  // Rendered under the canvas's own CSS size: smoke has no hard edges to
  // keep sharp. CSS stretches it back up.
  const RENDER_SCALE = 0.6;
  function resize() {
    const w = Math.max(1, Math.round(window.innerWidth * RENDER_SCALE));
    const h = Math.max(1, Math.round(window.innerHeight * RENDER_SCALE));
    if (w !== cw || h !== ch) {
      cw = w;
      ch = h;
      canvas.width = w;
      canvas.height = h;
    }
    // A different shape of screen (a phone turned over) needs a
    // differently-shaped grid.
    const aspect = window.innerWidth / window.innerHeight;
    if (!sim || Math.abs(aspect / simAspect - 1) > 0.12) initSim(aspect);
  }

  // ---- Scroll ----------------------------------------------------------------------
  // Smoothstep, hand-rolled. The smoke drifts in as the intro scrolls away
  // (0 -> 12% of #bmw-chapter's own progress), holds while the headlamps
  // switch on through it (BMW_SCENE.intro in js/chapters.js starts them at
  // 12%), then separates and thins from 24% to 42% as their light reaches
  // the car — all done before the render sweep at 44%. So the order is:
  // darkness, smoke, headlamps through the smoke, light on the car, smoke
  // clearing.
  const smooth = (a, b, x) => {
    const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
    return t * t * (3 - 2 * t);
  };
  function coverageAt(p) {
    if (p < 0.12) return smooth(0, 0.12, p);
    if (p < 0.24) return 1;
    if (p < 0.42) return 1 - smooth(0.24, 0.42, p);
    return 0;
  }
  // Negative while it gathers (rolling in from the sides), settling to
  // nothing as it holds, then positive as it parts.
  function flowAt(p) {
    if (p < 0.24) return -(1 - smooth(0.06, 0.24, p));
    return smooth(0.24, 0.3, p) * (1 - smooth(0.34, 0.44, p));
  }

  // The scroll target is recorded here, and again from the live scroll
  // position every frame in step() — a phone's momentum scroll can go a
  // long way between the trigger's callbacks, and the smoke must never be
  // left showing where the page no longer is. What the shader and the
  // simulation see eases toward it in step().
  let target = 0;
  let flowTarget = 0;
  let progress = 0;
  let coverage = 0;
  let snapped = false;
  const st = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      progress = self.progress;
      target = coverageAt(progress);
      flowTarget = flowAt(progress);
    },
    onRefresh: (self) => {
      progress = self.progress;
      target = coverageAt(progress);
      flowTarget = flowAt(progress);
      // Landing mid-chapter (reload, anchor link): start there rather than
      // easing in from nothing.
      if (!snapped) { coverage = target; flow = flowTarget; snapped = true; }
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
  const lamps = { ax: 0.3, ay: 0.44, bx: 0.7, by: 0.44, i: 0 };
  function readLamps() {
    if (!veilEl) return;
    const s = veilEl.style;
    const w = window.innerWidth;
    const h = window.innerHeight;
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
  }

  // Runs only while there's a reason to: the chapter is on screen and
  // we're in the stretch of it where the smoke lives.
  let visible = true;
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  }, { rootMargin: '20% 0px' }).observe(section);

  const narrowScreen = window.matchMedia('(max-width: 720px)');
  const clock = { t: 0, sim: 0 };
  let warm = 0;

  function render() {
    const d = progs.display;
    gl.useProgram(d.p);
    bind(0, sim.dye.read);
    gl.uniform1i(d.u.dye, 0);
    gl.uniform2f(d.u.dyeTexel, sim.dye.texel[0], sim.dye.texel[1]);
    gl.uniform2f(d.u.resolution, cw, ch);
    gl.uniform1f(d.u.time, clock.t);
    gl.uniform1f(d.u.coverage, coverage);
    readLamps();
    gl.uniform2f(d.u.lampA, lamps.ax, lamps.ay);
    gl.uniform2f(d.u.lampB, lamps.bx, lamps.by);
    gl.uniform1f(d.u.lampI, lamps.i);
    // A phone is a small, tall screen: the same smoke fills a larger share
    // of it and reads brighter, so it's held back a little.
    gl.uniform1f(d.u.gain, narrowScreen.matches ? 0.92 : 1);
    blit(null);
  }

  // Whether the canvas holds a picture, so it is cleared exactly once when
  // the smoke has gone, and never shows a stale frame.
  let drawn = false;

  function step(dt) {
    if (st.end > st.start) {
      progress = Math.min(Math.max((window.pageYOffset - st.start) / (st.end - st.start), 0), 1);
      target = coverageAt(progress);
      flowTarget = flowAt(progress);
    }
    // Ease toward the scroll target (about a sixth of a second to settle):
    // a wheel notch lands as a short glide, not a step.
    const k = 1 - Math.exp(-dt * 7);
    coverage += (target - coverage) * k;
    if (Math.abs(target - coverage) < 0.0005) coverage = target;
    flow += (flowTarget - flow) * k;
    clock.t += dt;

    // The pointer's history is consumed every frame, live or not, so
    // motion made while the smoke was offscreen doesn't arrive as one
    // enormous stroke when it comes back.
    ptr.px = ptr.sx;
    ptr.py = ptr.sy;
    const follow = 1 - Math.exp(-dt * 22);
    ptr.sx += (ptr.x - ptr.sx) * follow;
    ptr.sy += (ptr.y - ptr.sy) * follow;
    ptr.active += (ptr.target - ptr.active) * (1 - Math.exp(-dt * 8));

    resize();
    if (!sim) return;

    const live = visible && progress < 0.5;
    if (live) {
      // The air's speed under the pointer, in grid cells per second, with
      // only about a quarter of the pointer's own speed handed on.
      const cap = (v) => Math.max(-60, Math.min(60, v));
      const mvx = cap(((ptr.sx - ptr.px) / dt) * sim.vel.w * 0.24);
      const mvy = cap(((ptr.sy - ptr.py) / dt) * sim.vel.h * 0.24);
      const sdt = Math.min(dt, 1 / 30);
      clock.sim += sdt;
      simulate(sdt, clock.sim, mvx, mvy);
      // The first moments of the simulation are just smoke being poured
      // in; it's brought up to speed a few frames at a time, behind the
      // intro, so the smoke is already a settled thing when it's needed.
      for (let i = 0; i < 8 && warm > 0; i++, warm--) {
        clock.sim += 1 / 30;
        simulate(1 / 30, clock.sim, 0, 0);
      }
    }
    if (coverage > 0.002) {
      render();
      drawn = true;
    } else if (drawn) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, cw, ch);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      drawn = false;
    }
  }

  let last = 0;
  function frame(now) {
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
    last = now;
    step(dt);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
