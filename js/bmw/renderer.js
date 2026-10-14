import * as THREE from 'three';

const clamp01 = (value) => THREE.MathUtils.clamp(Number(value) || 0, 0, 1);
const smooth = (start, end, value) => {
  const t = clamp01((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

function chooseQuality() {
  const memory = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const mobile = matchMedia('(pointer: coarse)').matches || Math.min(innerWidth, innerHeight) < 721;
  const low = mobile || memory <= 4 || cores <= 4;
  return {
    low,
    count: memory <= 2 ? 4000 : low ? 7000 : 16000,
    // Phones are viewed at 3x: a 1.25x canvas upscaled into visible blocks.
    dpr: memory <= 2 ? 1 : mobile ? 2 : low ? 1.25 : 1.5,
    pointSize: mobile ? 1.6 : low ? 1.8 : 1.7,
    ambientFps: low ? 30 : 45,
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

// Pairs car and cockpit samples by timing. Car points leave in the headlamp
// wave (nearest a lamp first); cockpit points are filled from the Bosch display
// outward. Matching the two orders rank for rank makes the headlamps' light
// become the display, then the cabin around it. Each lamp keeps to its own
// side of the display where the two orders allow it, so the streams stay as
// two clean wings instead of crossing.
const LAMPS = [[0.1514, 0.5138], [0.8185, 0.5151]];
const DISPLAY = [0.553, 0.482];
function pairByLight(data, count) {
  const sourceKey = new Float32Array(count);
  const sourceLeft = new Uint8Array(count);
  const targetKey = new Float32Array(count);
  const targetLeft = new Uint8Array(count);
  for (let i = 0; i < count; i++) {
    const u = data.source[i * 2];
    const v = data.source[i * 2 + 1];
    // Same aspect-corrected distance as the shader's release metric.
    const [left, right] = LAMPS.map(([x, y]) => Math.hypot(u - x, (v - y) * 1.77777778));
    sourceKey[i] = Math.min(left, right);
    sourceLeft[i] = left <= right ? 1 : 0;
    const tu = data.target[i * 2];
    const tv = data.target[i * 2 + 1];
    targetKey[i] = Math.hypot(tu - DISPLAY[0], (tv - DISPLAY[1]) * 1.7768);
    targetLeft[i] = tu < DISPLAY[0] ? 1 : 0;
  }
  const byKey = (key) => Array.from({ length: count }, (_, i) => i).sort((a, b) => key[a] - key[b]);
  const sources = byKey(sourceKey);
  const targets = byKey(targetKey);
  const rank = new Uint32Array(count);
  targets.forEach((t, k) => { rank[t] = k; });
  const queues = [targets.filter((t) => !targetLeft[t]), targets.filter((t) => targetLeft[t])];
  const heads = [0, 0];
  const slack = Math.max(16, Math.round(count * 0.04));
  const pair = new Uint32Array(count);
  sources.forEach((source, k) => {
    const own = sourceLeft[source];
    const other = 1 - own;
    const mine = queues[own][heads[own]];
    const take = mine !== undefined && (rank[mine] <= k + slack || heads[other] >= queues[other].length)
      ? own : other;
    pair[source] = queues[take][heads[take]++];
  });
  return pair;
}

// The paired photo samples are immutable. The shuffled cache makes each quality
// prefix representative; no image readback, texture or 3D model is needed here.
function makeGeometry(data, count) {
  const pair = pairByLight(data, count);
  const positions = new Float32Array(count * 3);
  const targets = new Float32Array(count * 2);
  const sourceColors = new Float32Array(count * 3);
  const targetColors = new Float32Array(count * 3);
  const seeds = new Float32Array(count * 4);
  const color = new THREE.Color();
  const random = seededRandom(0xB1B05C4);
  for (let index = 0; index < count; index++) {
    const sourceU = data.source[index * 2];
    const sourceV = data.source[index * 2 + 1];
    const partner = pair[index];
    const targetU = data.target[partner * 2];
    const targetV = data.target[partner * 2 + 1];
    if (![sourceU, sourceV, targetU, targetV].every(Number.isFinite)) {
      throw new Error('BMW bridge has an invalid photo sample');
    }
    positions.set([sourceU, sourceV, 0], index * 3);
    targets.set([targetU, targetV], index * 2);
    const offset = index * 3;
    const at = partner * 3;
    const source = data.sourceColors;
    const target = data.targetColors;
    if (![source[offset], source[offset + 1], source[offset + 2],
      target[at], target[at + 1], target[at + 2]].every(Number.isFinite)) {
      throw new Error('BMW bridge has an invalid sample color');
    }
    color.setRGB(source[offset], source[offset + 1], source[offset + 2], THREE.SRGBColorSpace);
    sourceColors.set([color.r, color.g, color.b], offset);
    color.setRGB(target[at], target[at + 1], target[at + 2], THREE.SRGBColorSpace);
    targetColors.set([color.r, color.g, color.b], offset);
    const luminance = target[at] * 0.2126 + target[at + 1] * 0.7152 + target[at + 2] * 0.0722;
    seeds.set([random(), random(), random(), luminance], index * 4);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aTarget', new THREE.BufferAttribute(targets, 2));
  geometry.setAttribute('aSourceColor', new THREE.BufferAttribute(sourceColors, 3));
  geometry.setAttribute('aTargetColor', new THREE.BufferAttribute(targetColors, 3));
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 4));
  geometry.setDrawRange(0, count);
  return geometry;
}

const vertexShader = /* glsl */ `
  attribute vec2 aTarget;
  attribute vec3 aSourceColor;
  attribute vec3 aTargetColor;
  attribute vec4 aSeed;
  uniform float uProgress;
  uniform float uTime;
  uniform float uMotionStrength;
  uniform float uPointerStrength;
  uniform float uVelocity;
  uniform float uPixelRatio;
  uniform float uPointSize;
  uniform float uPointLimit;
  uniform vec2 uViewport;
  uniform vec2 uPointer;
  uniform vec4 uSource;
  uniform vec4 uTarget;
  uniform vec4 uSourceFrame;
  uniform vec4 uTargetFrame;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSettled;
  float ease(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  }
  vec2 photoPoint(vec2 uv, vec4 rect) {
    return vec2(rect.x + uv.x * rect.z - uViewport.x * 0.5,
      uViewport.y * 0.5 - rect.y - uv.y * rect.w);
  }
  float frameAlpha(vec2 point, vec4 frame) {
    vec2 pixel = vec2(point.x + uViewport.x * 0.5, uViewport.y * 0.5 - point.y);
    vec2 uv = (pixel - frame.xy) / frame.zw;
    return clamp(uv.x / 0.06, 0.0, 1.0) * clamp((1.0 - uv.x) / 0.06, 0.0, 1.0)
      * clamp(uv.y / 0.14, 0.0, 1.0) * clamp((1.0 - uv.y) / 0.14, 0.0, 1.0);
  }
  void main() {
    vec2 source = photoPoint(position.xy, uSource);
    vec2 target = photoPoint(aTarget, uTarget);
    vec2 lampLeft = (position.xy - vec2(0.1514, 0.5138)) * vec2(1.0, 1.77777778);
    vec2 lampRight = (position.xy - vec2(0.8185, 0.5151)) * vec2(1.0, 1.77777778);
    float metric = min(min(length(lampLeft), length(lampRight)), 0.56);
    // Exactly matches the owner's native BMW image release mask.
    float release = smoothstep(0.10 + metric * 0.30, 0.155 + metric * 0.30, uProgress);
    float extent = min(uViewport.x, uViewport.y);
    float along = aSeed.y - 0.5;
    float depth = aSeed.z - 0.5;
    // The camera cranes up between the shots, as the photographs do: the car
    // sinks out of the frame while the cockpit settles in from above.
    float sink = smoothstep(0.33, 0.72, uProgress);
    float settle = clamp((uProgress - 0.30) / 0.54, 0.0, 1.0);
    settle = 1.0 - (1.0 - settle) * (1.0 - settle) * (1.0 - settle);
    vec2 from = source - vec2(0.0, uViewport.y * 0.32 * sink);
    vec2 to = target + vec2(0.0, uViewport.y * 0.28 * (1.0 - settle));
    // Points leave in the headlamp wave, so the car still comes apart outward
    // from its lamps; they were paired to land from the display outward.
    float leave = 0.155 + metric * 0.50 + aSeed.x * 0.03;
    float m = clamp((uProgress - leave) / 0.20, 0.0, 1.0);
    float travel = ease(m);
    float arc = sin(m * 3.14159265);
    // Two wings of light: each lamp's stream swings out to its own side and
    // up before folding into the dashboard.
    float side = sign(position.x - 0.485);
    vec2 path = mix(from, to, travel)
      + vec2(side * extent * 0.10, extent * 0.08) * arc * (0.8 + aSeed.y * 0.4);
    vec2 field = mix(from, to, 0.5) / extent;
    path += vec2(sin(field.y * 4.1 + 1.3), sin(field.x * 3.3 - 0.7)) * extent * 0.018 * arc;
    // The streams have a little weight: scrolling quickly stretches them out
    // behind their heads, and they catch up and settle when scrolling stops.
    vec2 heading = normalize(to - from + vec2(0.0, 0.001));
    path -= heading * clamp(uVelocity, -3.0, 3.0) * extent * 0.03 * arc;
    // Mid-flight the points swoop gently toward the viewer.
    float swoop = 1.0 + arc * (0.06 + aSeed.z * 0.10);
    vec2 formed = path * swoop;
    float gathering = smoothstep(0.75, 1.0, m);
    float motion = uMotionStrength * (1.0 - gathering);
    float phase = along * 6.2 + depth * 2.5;
    formed += vec2(sin(uTime * 0.31 + phase), cos(uTime * 0.26 + phase * 1.15))
      * clamp(extent * 0.004, 1.5, 3.0) * motion;
    // The cursor (or a finger) gently parts the points and lights them.
    vec2 delta = formed - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 170.0), distance);
    float touch = influence * influence * uPointerStrength * motion;
    vec2 outward = delta / max(1.0, distance);
    formed += (outward * 0.8 + vec2(-outward.y, outward.x) * 0.35) * 14.0 * touch;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(formed, 0.0, 1.0);

    float size = uPointSize * swoop * (1.0 + 0.25 * arc);
    gl_PointSize = min(uPointLimit, max(1.2, size) * uPixelRatio);

    vec3 coolWhite = vec3(0.72, 0.84, 1.0);
    float energyFront = sin(release * 3.14159265) * (1.0 - smoothstep(0.0, 0.15, m));
    vec3 energizedSource = mix(aSourceColor, coolWhite, energyFront * 0.16);
    // A restrained temporary tint keeps the early settled structure visible;
    // it returns to exact photograph RGB before the native image handoff.
    vec3 readableTarget = max(aTargetColor, vec3(0.030, 0.035, 0.042));
    readableTarget = mix(readableTarget, aTargetColor, smoothstep(0.76, 0.85, uProgress));
    // In flight every point carries a little of the headlamps' cool light.
    vec3 light = mix(aSourceColor, coolWhite, 0.55) * 1.1 + 0.03;
    vColor = mix(energizedSource, light, smoothstep(0.0, 0.3, m));
    vColor = mix(vColor, readableTarget, smoothstep(0.7, 1.0, m));
    // Each point glints as it lands, so the cockpit twinkles on from the
    // display outward; it is back to its photo colour once at rest.
    float glint = smoothstep(0.75, 0.92, m) * (1.0 - smoothstep(0.92, 1.0, m));
    vColor *= 1.0 + glint * 0.9 + touch * 0.5;

    vAlpha = release * (1.0 - smoothstep(0.85, 0.95, uProgress));
    // Match the native photographs' scaled frames and exact edge feathering,
    // particularly where the portrait viewport crops the steering wheel.
    vAlpha *= mix(frameAlpha(from, uSourceFrame), 1.0, smoothstep(0.0, 0.2, m));
    vAlpha *= mix(1.0, frameAlpha(to, uTargetFrame), smoothstep(0.8, 1.0, m));
    // A tiny viewport-edge fade avoids hard sprite clipping on tall phones.
    vec2 edge = uViewport * 0.5 - abs(formed);
    vAlpha *= smoothstep(0.0, extent * 0.03, min(edge.x, edge.y));
    // Settled points cover like the photographs; in flight they partly add up as light.
    vSettled = 1.0 - arc * 0.7;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vSettled;
  void main() {
    float radius = length(gl_PointCoord - vec2(0.5));
    float crisp = 1.0 - smoothstep(0.37, 0.50, radius);
    float core = 1.0 - smoothstep(0.0, 0.22, radius);
    float halo = exp(-radius * radius * 18.0) * 0.55;
    float sprite = mix(core + halo, crisp, vSettled);
    float alpha = min(1.0, sprite) * vAlpha * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(vColor, 1.0);
    #include <colorspace_fragment>
    // Premultiplied output: settled points cover like the photograph, while
    // points in flight write no coverage and so add up as light.
    gl_FragColor = vec4(gl_FragColor.rgb * alpha, alpha * vSettled);
  }
`;

/**
 * Paired, flat photo samples: BMW release → living ribbons → Bosch assembly.
 * The owner supplies current FULL image rectangles and matching native masks.
 * This component never fetches assets, modifies DOM images or shares portrait state.
 */
export function startBMWBridge({ canvas, state, data, onError, settle }) {
  const count = Math.floor(Number(data?.count) || 0);
  if (!canvas || !state || count < 1 || data.source?.length !== count * 2
    || data.target?.length !== count * 2 || data.sourceColors?.length !== count * 3
    || data.targetColors?.length !== count * 3) {
    throw new Error('BMW bridge requires a canvas, state and matching paired photo samples');
  }
  const quality = chooseQuality();
  const initialCount = Math.min(count, quality.count);
  let pointCount = initialCount;
  let dpr = Math.min(devicePixelRatio || 1, quality.dpr);
  const geometry = makeGeometry(data, pointCount);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false,
      depth: false, stencil: false, powerPreference: 'low-power' });
  } catch (error) {
    geometry.dispose();
    throw error;
  }
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;
  renderer.debug.onShaderError = (gl, program, vertex, fragment) => {
    throw new Error(`BMW bridge shader failed: ${gl.getProgramInfoLog(program)
      || gl.getShaderInfoLog(vertex) || gl.getShaderInfoLog(fragment) || 'unknown driver error'}`);
  };
  const context = renderer.getContext();
  const pointLimit = context.getParameter(context.ALIASED_POINT_SIZE_RANGE)[1];
  const uniforms = {
    uProgress: { value: 0 }, uTime: { value: 0 }, uMotionStrength: { value: 0 },
    uPointerStrength: { value: 0 }, uVelocity: { value: 0 }, uPixelRatio: { value: dpr },
    uPointSize: { value: quality.pointSize }, uPointLimit: { value: pointLimit },
    uViewport: { value: new THREE.Vector2(1, 1) }, uPointer: { value: new THREE.Vector2() },
    uSource: { value: new THREE.Vector4() }, uTarget: { value: new THREE.Vector4() },
    uSourceFrame: { value: new THREE.Vector4() }, uTargetFrame: { value: new THREE.Vector4() },
    uOpacity: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader,
    transparent: true, depthTest: false, depthWrite: false, toneMapped: false,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(points);
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 2000);
  camera.position.z = 1000;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let motionEnabled = !preference.matches;
  let enabled = false;
  let disposed = false;
  let prepared = false;
  let contextLost = false;
  let onScreen = true;
  let width = 1;
  let height = 1;
  let raf = 0;
  let dirty = true;
  let needsClear = false;
  let hadPixels = false;
  let previousState = [];
  let lastTick = 0;
  let previousTick = 0;
  let nextAmbientTick = 0;
  let motionTime = 0;
  let renderedFrames = 0;
  let drawCalls = 0;
  let slowFrames = 0;
  let qualityReductions = 0;
  let lastError = null;
  let velocity = 0;
  let velocityProgress = null;
  const ambientInterval = 1000 / quality.ambientFps;
  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  let pointerKnown = false;
  let pointerStrength = 0;
  let pointerActive = false;
  let pointerExpires = 0;

  function available() { return prepared && !disposed && !contextLost && onScreen && !document.hidden; }
  function progress() { return clamp01(state.progress); }
  function active() { return available() && enabled && state.visible && progress() > 0.10 && progress() < 0.95; }
  function animated() { return active() && motionEnabled && progress() > 0.11 && progress() < 0.85; }
  function releasePointer() { pointerActive = false; pointerExpires = 0; }
  function resetClock() {
    lastTick = 0; previousTick = 0; nextAmbientTick = 0;
    velocity = 0; velocityProgress = null;
  }

  function requestFrame() {
    if (!raf && available() && (needsClear || (dirty && active()) || animated())) raf = requestAnimationFrame(draw);
  }
  function clearCanvas() {
    renderer.setViewport(0, 0, width, height);
    renderer.clear(true, false, false);
    hadPixels = false;
    needsClear = false;
    drawCalls = 0;
  }
  function resize() {
    if (disposed) return;
    const rect = canvas.getBoundingClientRect();
    const nextWidth = Math.max(1, Math.round(state.viewport?.width || rect.width || innerWidth));
    const nextHeight = Math.max(1, Math.round(state.viewport?.height || rect.height || innerHeight));
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
      uniforms.uViewport.value.set(width, height);
      dirty = true;
    }
    requestFrame();
  }
  function sync(force = false) {
    if (disposed) return;
    const source = state.source;
    const target = state.target;
    const next = [enabled, state.visible, state.progress, state.interactive,
      state.viewport?.width, state.viewport?.height,
      source?.x, source?.y, source?.width, source?.height,
      target?.x, target?.y, target?.width, target?.height];
    if (force || next.some((value, index) => value !== previousState[index])) dirty = true;
    previousState = next;
    if (!active()) {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      needsClear = hadPixels;
      pointerStrength = 0;
      releasePointer();
      resetClock();
    }
    if (state.interactive === false) releasePointer();
    if (state.viewport && (state.viewport.width !== width || state.viewport.height !== height)) resize();
    requestFrame();
  }
  function setActive(value) {
    enabled = Boolean(value);
    sync();
  }
  function setRect(uniform, value) {
    const valid = value && [value.x, value.y, value.width, value.height].every(Number.isFinite)
      && value.width > 0 && value.height > 0;
    if (valid) uniform.value.set(value.x, value.y, value.width, value.height);
    return Boolean(valid);
  }
  function reduceQuality() {
    if (state.noAdapt) return;
    if (qualityReductions >= 2) return;
    pointCount = Math.max(Math.min(initialCount, 2400), Math.floor(pointCount * 0.75));
    geometry.setDrawRange(0, pointCount);
    dpr = Math.max(0.85, dpr - 0.15);
    qualityReductions++;
    slowFrames = 0;
    resize();
  }
  function draw(time) {
    raf = 0;
    if (!available()) { resetClock(); return; }
    if (!active()) {
      if (needsClear) clearCanvas();
      dirty = false;
      resetClock();
      return;
    }
    const animate = animated();
    const priority = dirty;
    if (!priority && (!animate || time < nextAmbientTick - 0.5)) {
      if (animate) requestFrame();
      return;
    }
    const dt = lastTick ? Math.min(0.06, Math.max(0, (time - lastTick) / 1000)) : 0;
    lastTick = time;
    if (animate) motionTime += dt;
    if (pointerActive && time >= pointerExpires) pointerActive = false;
    pointer.lerp(pointerTarget, 1 - Math.exp(-dt * 14));
    const pointerGoal = animate && pointerActive && state.interactive !== false ? 1 : 0;
    pointerStrength += (pointerGoal - pointerStrength) * (1 - Math.exp(-dt * (pointerGoal ? 14 : 4.3)));
    if (!pointerGoal && pointerStrength < 0.001) pointerStrength = 0;
    const p = progress();
    // Progress per second, eased, so the streams lag a fast scroll and then
    // settle; ambient frames keep running while it decays.
    if (velocityProgress !== null && dt > 0) {
      velocity += ((p - velocityProgress) / dt - velocity) * (1 - Math.exp(-dt * 5));
      if (Math.abs(velocity) < 0.002) velocity = 0;
    }
    velocityProgress = p;
    uniforms.uVelocity.value = motionEnabled ? velocity : 0;
    uniforms.uProgress.value = p;
    uniforms.uTime.value = motionTime;
    uniforms.uPixelRatio.value = dpr;
    uniforms.uOpacity.value = 1;
    uniforms.uMotionStrength.value = motionEnabled ? smooth(0.11, 0.35, p) * (1 - smooth(0.72, 0.85, p)) : 0;
    uniforms.uPointer.value.copy(pointer);
    uniforms.uPointerStrength.value = pointerStrength;
    const validSource = setRect(uniforms.uSource, state.source);
    const validTarget = setRect(uniforms.uTarget, state.target);
    setRect(uniforms.uSourceFrame, state.sourceFrame || { x: 0, y: 0, width, height });
    setRect(uniforms.uTargetFrame, state.targetFrame || { x: 0, y: 0, width, height });
    const start = performance.now();
    clearCanvas();
    if (!validSource || !validTarget) { dirty = false; return; }
    try { renderer.render(scene, camera); }
    catch (error) {
      lastError = String(error);
      enabled = false;
      clearCanvas();
      resetClock();
      // Let the owner remove the native-photo visibility gate on runtime
      // driver failure as well as on initial compilation/context failure.
      queueMicrotask(() => onError?.(error));
      return;
    }
    drawCalls = renderer.info.render.calls;
    hadPixels = true;
    renderedFrames++;
    dirty = false;
    const tickDelta = time - previousTick;
    const drawMs = performance.now() - start;
    const expectedInterval = priority ? 1000 / 60 : ambientInterval;
    if (previousTick && tickDelta < 150) {
      slowFrames = tickDelta > expectedInterval * 1.8 || drawMs > 20
        ? slowFrames + 1 : Math.max(0, slowFrames - 2);
      if (slowFrames >= 18) reduceQuality();
    }
    previousTick = time;
    nextAmbientTick = priority || !nextAmbientTick ? time + ambientInterval
      : Math.max(nextAmbientTick + ambientInterval, time + 1);
    if (dirty || animate) requestFrame();
  }

  function ignoresInput(target) {
    return Boolean(target?.closest?.('nav, .nav-wrap, a, button, input, select, textarea, summary, [role="button"], [role="link"], [contenteditable], [data-no-particles]'));
  }
  function samplePointer(event, x, y, touch = false) {
    if (!animated() || state.interactive === false || ignoresInput(event.target)) { releasePointer(); return; }
    pointerTarget.set(x - width / 2, height / 2 - y);
    if (!pointerKnown || pointerStrength < 0.001) pointer.copy(pointerTarget);
    pointerKnown = true;
    pointerActive = true;
    pointerExpires = touch ? Infinity : performance.now() + 700;
    dirty = true;
    requestFrame();
  }
  function pointerEvent(event) {
    if (event.isPrimary === false || (event.pointerType === 'mouse' && event.buttons > 1)) { releasePointer(); return; }
    samplePointer(event, event.clientX, event.clientY, event.pointerType === 'touch');
  }
  function pointerOut(event) { if (!event.relatedTarget && event.pointerType !== 'touch') releasePointer(); }
  function touchEvent(event) {
    if (event.touches.length !== 1) { releasePointer(); return; }
    const touch = event.touches[0];
    samplePointer(event, touch.clientX, touch.clientY, true);
  }
  function preferenceChanged() {
    motionEnabled = !preference.matches;
    pointerStrength = 0;
    releasePointer();
    resetClock();
    sync(true);
  }
  function visibilityChanged() { resetClock(); sync(true); }
  function contextFailed(event) {
    event.preventDefault();
    contextLost = true;
    lastError = 'BMW bridge WebGL context lost';
    sync(true);
  }
  function contextRestored() { contextLost = false; lastError = null; sync(true); }

  // Compile off the main thread where the browser allows it, let the driver
  // finish (settle), then upload with one cleared draw before `ready`.
  // Preparation never changes the photographs or shows an unfilled buffer.
  resize();
  const compiled = renderer.extensions.has('KHR_parallel_shader_compile')
    ? renderer.compileAsync(scene, camera) : Promise.resolve(renderer.compile(scene, camera));
  const ready = compiled
    .then(() => settle?.())
    .then(() => {
      if (disposed) throw new Error('BMW bridge was disposed during preparation');
      clearCanvas();
      renderer.render(scene, camera);
      clearCanvas();
      prepared = true;
      sync(true);
      return api;
    })
    .catch((error) => {
      dispose();
      throw error;
    });
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
  if (preference.addEventListener) preference.addEventListener('change', preferenceChanged);
  else preference.addListener(preferenceChanged);
  document.addEventListener('visibilitychange', visibilityChanged);
  canvas.addEventListener('webglcontextlost', contextFailed);
  canvas.addEventListener('webglcontextrestored', contextRestored);
  const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  resizeObserver?.observe(canvas);
  if (!resizeObserver) window.addEventListener('resize', resize, { passive: true });
  const intersectionObserver = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver((entries) => {
    onScreen = entries.some((entry) => entry.isIntersecting);
    sync(true);
  }) : null;
  intersectionObserver?.observe(canvas);

  function stats() {
    const p = progress();
    const phase = !enabled || !state.visible ? 'hidden' : p <= 0.10 ? 'waiting'
      : p < 0.40 ? 'bmw-release' : p < 0.55 ? 'light-streams'
      : p < 0.85 ? 'cockpit-assembly' : p < 0.95 ? 'native-crossfade' : 'cockpit';
    return {
      ready: prepared && !disposed && !contextLost,
      active: active(), visible: Boolean(enabled && state.visible),
      running: Boolean(raf), renderedFrames, frameCount: renderedFrames,
      drawCalls, drawn: hadPixels, particles: pointCount, initialParticles: initialCount,
      geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures,
      dpr, qualityReductions, ambientFps: quality.ambientFps,
      motionEnabled, motionActive: animated(), motionTime,
      pointerActive, pointerStrength, progress: p, phase, error: lastError,
      kind: 'photo-particle-bridge',
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
    if (preference.removeEventListener) preference.removeEventListener('change', preferenceChanged);
    else preference.removeListener(preferenceChanged);
    document.removeEventListener('visibilitychange', visibilityChanged);
    canvas.removeEventListener('webglcontextlost', contextFailed);
    canvas.removeEventListener('webglcontextrestored', contextRestored);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  }
  const api = { ready, setActive, resize, stats, dispose };
  return api;
}
