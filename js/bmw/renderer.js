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
    dpr: memory <= 2 ? 1 : low ? 1.25 : 1.5,
    pointSize: low ? 1.9 : 1.8,
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

// The paired photo samples are immutable. The shuffled cache makes each quality
// prefix representative; no image readback, texture or 3D model is needed here.
function makeGeometry(data, count) {
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
    const targetU = data.target[index * 2];
    const targetV = data.target[index * 2 + 1];
    if (![sourceU, sourceV, targetU, targetV].every(Number.isFinite)) {
      throw new Error('BMW bridge has an invalid photo sample');
    }
    positions.set([sourceU, sourceV, 0], index * 3);
    targets.set([targetU, targetV], index * 2);
    const offset = index * 3;
    const source = data.sourceColors;
    const target = data.targetColors;
    if (![source[offset], source[offset + 1], source[offset + 2],
      target[offset], target[offset + 1], target[offset + 2]].every(Number.isFinite)) {
      throw new Error('BMW bridge has an invalid sample color');
    }
    color.setRGB(source[offset], source[offset + 1], source[offset + 2], THREE.SRGBColorSpace);
    sourceColors.set([color.r, color.g, color.b], offset);
    color.setRGB(target[offset], target[offset + 1], target[offset + 2], THREE.SRGBColorSpace);
    targetColors.set([color.r, color.g, color.b], offset);
    const luminance = target[offset] * 0.2126 + target[offset + 1] * 0.7152 + target[offset + 2] * 0.0722;
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
    // Points lift away in the same wave that releases them: the car comes
    // apart outward from its headlamps, keeping its shape a moment longer
    // where the light has not reached yet.
    float detachAt = 0.155 + metric * 0.32 + aSeed.x * 0.03;
    float detach = ease(clamp((uProgress - detachAt) / 0.20, 0.0, 1.0));
    float journey = ease(clamp((uProgress - 0.32) / 0.30, 0.0, 1.0));
    float lane = floor(aSeed.x * 3.0) - 1.0;
    float along = aSeed.y - 0.5;
    float depth = aSeed.z - 0.5;
    float extent = min(uViewport.x, uViewport.y);
    // Fixed, incomplete arcs form folded canyon walls around an off-center
    // opening. Angles never spin, repeat or wrap; every ID keeps its wall.
    float angle = -2.90 + aSeed.y * 5.24;
    float fold = sin(angle * 1.65 + lane * 0.55) * 0.15
      + sin(angle * 2.65 + lane * 0.90) * 0.075;
    float radius = 0.80 + lane * 0.10 + fold;
    vec2 wall = vec2(
      uViewport.x * (cos(angle) * 0.39 * radius
        + sin(angle * 1.40 + lane * 0.50) * 0.065 + lane * 0.015),
      uViewport.y * (sin(angle) * 0.43 * radius
        + cos(angle * 2.00 + lane * 0.70) * 0.045)
    );
    // Advancing the camera decreases positive world depth monotonically.
    // Perspective division pushes nearby folds out faster than distant folds,
    // while their unbroken interior preserves a readable route through space.
    float worldZ = 1.25 + aSeed.z * 3.20 + (lane + 1.0) * 0.16 - journey * 0.90;
    float perspective = 1.55 / (worldZ + 0.38);
    vec2 opening = vec2(uViewport.x * (0.07 + journey * 0.07),
      uViewport.y * (0.015 + journey * 0.035));
    vec2 ribbon = opening + wall * perspective;
    vec2 normal = vec2(-sin(angle), cos(angle));
    vec2 formed = mix(source, ribbon, detach);
    formed += normal * sin(detach * 3.14159265) * extent * depth * 0.10;
    // The original night photograph is dark: a low classification threshold
    // recognizes its cockpit edges/strips rather than delaying almost all of it.
    float structure = smoothstep(0.035, 0.20, aSeed.w);
    float targetStart = 0.55 + (1.0 - structure) * 0.035;
    float targetEnd = 0.76 + (1.0 - structure) * 0.09;
    float gathering = uProgress >= 0.85 ? 1.0
      : ease(clamp((uProgress - targetStart) / (targetEnd - targetStart), 0.0, 1.0));
    formed = mix(formed, target, gathering);
    formed += vec2((aSeed.x - 0.5) * extent * 0.075, depth * extent * 0.055)
      * sin(gathering * 3.14159265);
    float motion = uMotionStrength * (1.0 - gathering);
    float phase = along * 6.2 + depth * 2.5 + lane * 0.7;
    formed += vec2(sin(uTime * 0.31 + phase), cos(uTime * 0.26 + phase * 1.15))
      * clamp(extent * 0.006, 2.0, 4.0) * motion;
    vec2 delta = formed - uPointer;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, clamp(extent * 0.18, 80.0, 160.0), distance);
    vec2 outward = delta / max(1.0, distance);
    formed += (outward * 0.78 + vec2(-outward.y, outward.x) * 0.36)
      * 12.0 * influence * influence * uPointerStrength * motion;
    float z = (2.0 - worldZ) * extent * 0.14 * detach * (1.0 - gathering);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(formed, z, 1.0);
    float foreground = clamp(perspective * 0.90, 0.55, 1.65);
    float variation = 0.70 + pow(aSeed.y, 6.0) * 0.70;
    float size = mix(uPointSize, uPointSize * variation * foreground, detach);
    size = mix(size, uPointSize, gathering);
    // Subpixel sprites shimmer as the camera advances. Keep a small stable
    // raster footprint, with depth still carried by size, opacity and travel.
    gl_PointSize = min(uPointLimit, max(1.45, size) * uPixelRatio);
    vec3 coolWhite = vec3(0.66, 0.78, 0.92);
    vec3 quietRed = vec3(0.38, 0.016, 0.024);
    vec3 streamColor = mix(coolWhite, quietRed, step(0.95, aSeed.z));
    float energyFront = sin(release * 3.14159265) * (1.0 - detach);
    vec3 energizedSource = mix(aSourceColor, coolWhite, energyFront * 0.16);
    vColor = mix(energizedSource, streamColor, detach);
    // A restrained temporary tint keeps the early settled structure visible;
    // it returns to exact photograph RGB before the native image handoff.
    vec3 readableTarget = max(aTargetColor, vec3(0.030, 0.035, 0.042));
    readableTarget = mix(readableTarget, aTargetColor, smoothstep(0.76, 0.85, uProgress));
    vColor = mix(vColor, readableTarget, smoothstep(0.55, 0.98, gathering));
    vAlpha = release * (1.0 - smoothstep(0.85, 0.95, uProgress));
    // Match the native photograph's scaled frame and exact edge feathering,
    // particularly where the portrait viewport crops the steering wheel.
    vAlpha *= mix(frameAlpha(source, uSourceFrame), 1.0, detach);
    vAlpha *= mix(1.0, frameAlpha(target, uTargetFrame), gathering);
    vAlpha *= mix(1.0, 0.55 + clamp(perspective * 0.62, 0.0, 1.0) * 0.45, detach * (1.0 - gathering));
    // A tiny viewport-edge fade avoids hard sprite clipping on tall phones.
    // Points outside the native crop remain outside rather than being clamped.
    vec2 edge = uViewport * 0.5 - abs(formed);
    vAlpha *= smoothstep(0.0, extent * 0.03, min(edge.x, edge.y));
    vSettled = mix(1.0, 0.0, detach) * (1.0 - gathering) + gathering;
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
    float core = 1.0 - smoothstep(0.08, 0.34, radius);
    float softEdge = (1.0 - smoothstep(0.20, 0.50, radius)) * 0.09;
    float sprite = mix(core + softEdge, crisp, vSettled);
    float alpha = min(1.0, sprite) * vAlpha * uOpacity;
    if (alpha < 0.008) discard;
    gl_FragColor = vec4(vColor, alpha);
    #include <colorspace_fragment>
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
    uPointerStrength: { value: 0 }, uPixelRatio: { value: dpr },
    uPointSize: { value: quality.pointSize }, uPointLimit: { value: pointLimit },
    uViewport: { value: new THREE.Vector2(1, 1) }, uPointer: { value: new THREE.Vector2() },
    uSource: { value: new THREE.Vector4() }, uTarget: { value: new THREE.Vector4() },
    uSourceFrame: { value: new THREE.Vector4() }, uTargetFrame: { value: new THREE.Vector4() },
    uOpacity: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader,
    transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
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
  function resetClock() { lastTick = 0; previousTick = 0; nextAmbientTick = 0; }

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
      : p < 0.40 ? 'bmw-release' : p < 0.55 ? 'ribbon-journey'
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
