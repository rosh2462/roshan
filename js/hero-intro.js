/* One owner for the time-based opening and scroll-based BMW entrance.
 * The native BMW clock coordinates the points, lighting and smoke. */
(() => {
  const root = document.documentElement;
  const hero = document.getElementById('hero');
  const bmw = document.getElementById('bmw-chapter');
  if (!hero || !bmw) { root.classList.remove('hero-vortex-pending'); return; }
  const title = hero.querySelector('.hero-title');
  const stage = hero.querySelector('.hero-stage');
  const inner = hero.querySelector('.hero-inner');
  const sceneFrame = bmw.querySelector('.chapter-zoom-bg');
  const photoPlane = bmw.querySelector('.photo-plane');
  const veil = bmw.querySelector('.reveal-veil');
  const lampLeft = bmw.querySelector('.lamp-lit--left');
  const lampRight = bmw.querySelector('.lamp-lit--right');
  const fontLink = document.getElementById('portfolioFonts');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = x => Math.max(0, Math.min(1, x));
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const state = window.HeroIntroState = {
    phase: 'preparing', progress: 0, transition: 0, handoff: 0, bmwProgress: 0,
    completed: false, running: false, frames: 0, elapsed: 0,
    duration: innerWidth <= 720 ? 2.50 : 2.40, ready: false, fallback: null, noAdapt: true,
    startupDelayed: false, flow: 0, flowFar: 0,
  };
  // The released points glide after the scroll instead of stepping with each
  // wheel notch: two followers of BMW progress (the scroll, through the
  // scene's own smoothing, stays the authority). The quicker one releases
  // the name and drives the DOM wipe; deeper points trail on the slower one.
  // First order, so a follower never overshoots and turns the moment the
  // scroll does, with no momentum to unwind. The further behind it is, the
  // faster it closes (cubically), so slow scrolling keeps a soft trail of
  // about 1% while a hard flick stays within ~6%, without a spring's sudden
  // pull. Both meet the scroll at rest; a jump (restore, link) is taken whole.
  const glide = { near: 0, far: 0, seeded: false };
  function follow(value, target, tau, dt, limit) {
    const gap = target - value, behind = gap / .02;
    let next = value + gap * (1 - Math.exp(-dt * (1 + behind * behind) / tau));
    if (Math.abs(target - next) > limit) next = target - Math.sign(gap) * limit;
    return Math.abs(target - next) < 1e-5 ? target : next;
  }
  function snapFlow() {
    glide.near = glide.far = state.bmwProgress; glide.seeded = true;
    state.flow = state.flowFar = state.bmwProgress;
  }
  function updateFlow(dt) {
    const target = state.bmwProgress;
    if (!glide.seeded || !inView || Math.abs(target - glide.near) > .2) snapFlow();
    else if (dt > 0) {
      glide.near = follow(glide.near, target, .15, dt, .07);
      glide.far = follow(glide.far, target, .28, dt, .09);
    }
    state.flow = clamp(glide.near); state.flowFar = clamp(glide.far);
  }
  let renderer, layer, canvas, darkness, frame = 0, timer = 0, resizeTimer = 0, observer;
  let failed = false, inView = true, lastPaint = 0, time = 0, fontsRequested = false, refreshing = false;
  let layoutDirty = true, geometryDirty = true;
  let heroHeight = 0;
  let rawScrollY = window.scrollY;
  let measuredScroll = NaN, measuredBMW = NaN, measuredWidth = 0, measuredHeight = 0, measuredParent;
  let copyIntro = NaN, copyTransition = NaN, copyFlow = NaN;
  let nativeLight = [0, 0, 0];
  let inputActive = 0, targetInputActive = 0;
  let sourceRect = { x: 0, y: 0, width: 1, height: 1 };
  let targetRect = { x: 0, y: 0, width: 1, height: 1 };
  let copyRect = { x: 0, y: 0, width: 1, height: 1 };
  const styleValues = new WeakMap();
  const coarsePointer = matchMedia('(pointer: coarse)');
  const pointer = [0, 0], targetPointer = [0, 0];

  function writeStyle(element, name, value) {
    if (!element) return;
    let values = styleValues.get(element);
    if (!values) { values = new Map(); styleValues.set(element, values); }
    if (values.get(name) === value) return;
    values.set(name, value);
    element.style.setProperty(name, value);
  }

  function activateFonts() {
    if (fontsRequested || !document.fonts || fontLink?.media !== 'all') return;
    fontsRequested = true;
    Promise.all(['700 16px "Space Grotesk"', '500 16px "Space Grotesk"',
      '400 16px Inter', '500 16px Inter', '600 16px Inter']
      .map(font => document.fonts.load(font))).then(faces => {
      if (faces.every(face => face.length)) {
        root.classList.add('identity-fonts-ready'); resize();
      }
    }).catch(() => {});
  }
  fontLink?.addEventListener('load', activateFonts, { once: true });
  activateFonts();

  function stop() {
    // A field that stops drawing cannot finish a glide, so its clocks take
    // the scroll's own value (the wipe follows on the next copy update).
    if (!failed && (state.flow !== state.bmwProgress || state.flowFar !== state.bmwProgress)) snapFlow();
    if (!frame && !timer && !state.running && !lastPaint) return;
    cancelAnimationFrame(frame); clearTimeout(timer);
    frame = 0; timer = 0; lastPaint = 0; state.running = false;
  }
  function settle() {
    state.progress = 1; state.elapsed = state.duration; state.completed = true;
  }
  function revealNativeStartup() {
    if (failed || root.classList.contains('hero-vortex-active')) return;
    // The head's loading guard has already exposed the readable native name,
    // and it is never hidden again. WebGL keeps preparing in the background:
    // if it is ready soon, with the visitor still at the top, the particles
    // play their opening over that name (and fade into it); otherwise the
    // late field simply joins the settled pose. (A slow connection used to
    // lose the whole particle opening here.)
    state.startupDelayed = true;
    state.lateIntro = true;
    state.phase = 'preparing-native';
    root.classList.remove('hero-vortex-pending');
    wake();
  }
  function fallback(reason, error) {
    if (failed) return;
    failed = true; settle(); stop();
    state.fallback = reason; state.phase = 'static';
    if (error) state.error = String(error.message || error);
    root.classList.remove('hero-vortex-active', 'hero-vortex-pending');
    hero.style.removeProperty('--hero-scroll-lift'); hero.classList.remove('is-text-pinned');
    observer?.disconnect(); clearTimeout(resizeTimer);
    renderer?.dispose(); renderer = null; layer?.remove(); darkness?.remove();
    state.ready = false; state.particles = 0; state.drawCalls = 0; state.buffers = 0;
  }
  // A lost GPU context (a driver reset, a phone reclaiming memory in the
  // background) hands the name back to its native glyphs, then rebuilds the
  // field when the browser restores the context, instead of giving the
  // particles up for the rest of the visit. (The renderer prevents the
  // loss's default, which is what asks the browser to restore it.)
  let suspended = false;
  function rendererError(error) {
    if (error?.contextLost) suspend(error); else fallback('rendering-unavailable', error);
  }
  function suspend(error) {
    if (failed || suspended) return;
    suspended = true; stop();
    state.error = String(error?.message || error); state.phase = 'context-lost'; state.ready = false;
    try { renderer?.dispose(); } catch (_) { /* already lost */ }
    renderer = null;
    root.classList.remove('hero-vortex-active');
    if (layer) writeStyle(layer, 'visibility', 'hidden');
    canvas.addEventListener('webglcontextrestored', () => {
      suspended = false;
      if (failed) return;
      try {
        renderer = window.createHeroFlow({ canvas, hero, title, onError: rendererError });
        Object.assign(state, renderer.stats());
        state.contextRestores = (state.contextRestores || 0) + 1;
        layoutDirty = true; geometryDirty = true; snapFlow(); onScroll();
      } catch (problem) { fallback('webgl-unavailable', problem); }
    }, { once: true });
  }
  let surfaceRect = { x: 0, y: 0, width: 0, height: 0 };
  function measure() {
    const parent = layer?.parentElement;
    if (!geometryDirty && measuredScroll === rawScrollY && measuredBMW === state.bmwProgress
      && measuredWidth === innerWidth && measuredHeight === innerHeight && measuredParent === parent) return;
    // The name and copy are pinned (lifted by exactly the scroll), and the
    // layer sits at the pinned stage's origin, so their rectangles only
    // change with layout. Measuring them every frame forced a style and
    // layout flush per frame; now they are read once per layout change.
    const layoutChanged = geometryDirty || measuredWidth !== innerWidth || measuredHeight !== innerHeight || measuredParent !== parent;
    geometryDirty = false;
    measuredScroll = rawScrollY; measuredBMW = state.bmwProgress;
    measuredWidth = innerWidth; measuredHeight = innerHeight; measuredParent = parent;
    if (layoutChanged) {
      const surface = layer?.getBoundingClientRect() || { x: 0, y: 0, width: innerWidth, height: innerHeight };
      surfaceRect = { x: surface.x, y: surface.y, width: surface.width, height: surface.height };
      const box = title.getBoundingClientRect();
      sourceRect = { x: box.x - surface.x, y: box.y + rawScrollY - Math.min(rawScrollY, heroHeight) - surface.y,
        width: box.width, height: box.height };
      const copy = inner.getBoundingClientRect();
      copyRect = { x: copy.x - surface.x, y: copy.y - surface.y + rawScrollY - Math.min(rawScrollY, heroHeight),
        width: copy.width, height: copy.height };
    }
    const surface = surfaceRect;
    // The car's rectangle follows its camera; the chapter publishes it from
    // that pose (relative to the pinned stage), with no layout read.
    const known = bmw._photoRect;
    const plane = known && known.width > 0 && sceneFrame
      ? { x: known.x, y: known.y, width: known.width, height: known.height }
      : photoPlane.getBoundingClientRect();
    targetRect = { x: plane.x - (known ? 0 : surface.x), y: plane.y - (known ? 0 : surface.y), width: plane.width, height: plane.height };
    nativeLight = [Number(veil?.style.getPropertyValue('--li')) || 0,
      Number(lampLeft?.style.opacity) || 0, Number(lampRight?.style.opacity) || 0];
    state.canvasRect = [surface.x, surface.y, surface.width || innerWidth, surface.height || innerHeight];
    state.bmwScreenRect = [plane.x, plane.y, plane.width, plane.height];
    if (darkness) {
      // End the upper shield above the bonnet; the original car and ground
      // smoke remain below it. Coordinates follow the rendered photo pose.
      const lampY = plane.y + plane.height * (1973 / 3840);
      const lampHeight = plane.height * (160 / 3840);
      const end = Math.max(innerHeight * .25, Math.min(innerHeight * .58, lampY - lampHeight * 1.7));
      writeStyle(darkness, '--energy-dark-end', `${end}px`);
      writeStyle(darkness, '--energy-dark-solid', `${Math.max(0, end - innerHeight * .13)}px`);
    }
  }
  function nameMask(intro, bmwProgress) {
    // These are the same per-glyph arrival/release bands as the point shader:
    // a glyph at x (0..1) is released around BMW progress .028 + .07x.
    const left = clamp((bmwProgress - .026) / .072) * 100;
    const right = clamp((intro - .76) / .20) * 100;
    if (bmwProgress <= .012 && intro >= 1) return 'none';
    if (right <= left) return 'linear-gradient(transparent, transparent)';
    return `linear-gradient(to right, transparent ${Math.max(0, left - 3)}%, #000 ${left + 2}%, #000 ${Math.max(left + 2, right - 2)}%, transparent ${Math.min(102, right + 3)}%)`;
  }
  // The native copy follows the opening, except in a late opening, where
  // it is already readable and stays so while the particles play.
  function copyPose(intro = Math.max(state.progress, smooth(0, .15, state.transition))) {
    return state.lateIntro ? 1 : intro;
  }
  function updateCopy(intro) {
    if (copyIntro === intro && copyTransition === state.bmwProgress && copyFlow === state.flow) return;
    copyIntro = intro; copyTransition = state.bmwProgress; copyFlow = state.flow;
    // Forward, the wipe runs on the points' release clock, so glyphs and
    // points part together. Backward it follows the scroll itself: a glyph
    // returns as soon as the scroll does, with its points arriving over it,
    // rather than leaving a gap while they travel back (most of the name's
    // points are faded embers by then, so the gap read as missing letters).
    writeStyle(hero, '--hero-name-mask', nameMask(intro, Math.min(state.flow, state.bmwProgress)));
    // The role and line fade while the name begins to evaporate.
    const copy = smooth(.78, .99, intro) * (1 - smooth(.006, .06, state.bmwProgress));
    writeStyle(hero, '--hero-copy-alpha', copy.toFixed(4));
    writeStyle(hero, '--hero-copy-offset', `${((1 - smooth(.78, .99, intro)) * 8).toFixed(2)}px`);
    writeStyle(hero, '--hero-cat-alpha', (smooth(.93, 1, intro) * (1 - smooth(0, .13, state.transition))).toFixed(4));
    writeStyle(hero, '--hero-cover', (1 - smooth(.10, .78, state.transition)).toFixed(4));
  }
  function measurePin() {
    // The pinned copy keeps its in-flow box: read that box unpinned (and
    // untransformed), then hold the hero's height so nothing below moves.
    const pinned = hero.classList.contains('is-text-pinned');
    if (pinned) hero.classList.remove('is-text-pinned');
    inner.style.transform = 'none';
    heroHeight = hero.offsetHeight;
    const box = inner.getBoundingClientRect();
    const top = box.top + window.scrollY;
    inner.style.removeProperty('transform');
    writeStyle(hero, '--hero-pin-top', `${top}px`);
    writeStyle(hero, '--hero-pin-left', `${box.left}px`);
    writeStyle(hero, '--hero-pin-width', `${box.width}px`);
    writeStyle(hero, '--hero-pin-height', `${heroHeight}px`);
    if (pinned) hero.classList.add('is-text-pinned');
  }
  function readScroll(geometry = false) {
    // Height changes only with layout/font/viewport invalidation. Reading it
    // after every timeline style write forces synchronous layout on scroll.
    if (layoutDirty || !heroHeight) measurePin();
    const wasInView = inView;
    const scene = bmw._sceneProgress;
    const range = bmw._sceneRange;
    // iOS reports a negative position while the page rubber-bands past its
    // top. That is still the opening, not somewhere it can be retired.
    const scrollY = Math.max(0, rawScrollY);
    const estimated = range && range.end > range.start
      ? (scrollY - range.start) / (range.end - range.start) : scrollY / Math.max(1, heroHeight * 4);
    state.bmwProgress = clamp(Number.isFinite(scene) ? scene : estimated);
    state.transition = clamp(state.bmwProgress / .20);
    state.handoff = smooth(.30, .405, state.bmwProgress);
    // Once the user leaves the opening, return to its settled composition.
    if (state.transition >= .22) settle();
    const farBeyondEntry = range && scrollY > range.start + (range.end - range.start) * .42;
    inView = state.bmwProgress < .405 && !farBeyondEntry;
    // Leaving, the glide clocks and the DOM wipe take the scroll's own value,
    // so no partly-wiped name can outlive the points that complete it.
    if (wasInView && !inView) {
      snapFlow();
      if (state.ready) updateCopy(copyPose());
    }
    const entering = state.transition >= .78;
    // Later chapter clocks still publish progress, but a retired opening
    // has no layout, style or motion work until it re-enters or is resized.
    if (!inView && !wasInView && !layoutDirty && state.surface === (entering ? 'bmw-stage' : 'homepage')) return;
    layoutDirty = false;
    // During the entrance the points share the car's sticky stage. Mobile
    // browser chrome can move a viewport-fixed canvas independently of it.
    if (layer) {
      // Keep released name particles above the hero until its curtain is
      // clear; then share the car's compositor for the headlight formation.
      const parent = entering ? sceneFrame : document.body;
      if (parent && layer.parentElement !== parent) parent.append(layer);
      layer.classList.toggle('is-bmw-entry', entering);
      state.surface = entering ? 'bmw-stage' : 'homepage';
    }
    if (!inView) settle();
    if (!inView && layer) writeStyle(layer, 'visibility', 'hidden');
    if (darkness) {
      const energy = inView ? smooth(.05, .30, state.transition) * (1 - smooth(.245, .38, state.bmwProgress)) : 0;
      writeStyle(darkness, 'opacity', energy.toFixed(4));
      writeStyle(darkness, 'visibility', energy > 0 ? 'visible' : 'hidden');
    }
    if (Number.isFinite(scene)) hero.classList.add('has-ready-underlay');
    // While the curtain lifts, the copy is held by position: fixed, which the
    // compositor keeps exact during asynchronous scrolling. (A transform
    // synced from scroll events trailed the page by a frame: shaking text.)
    // Past the hero it rests where the old lift left it, clipped away.
    const pinned = rawScrollY < heroHeight;
    if (pinned !== hero.classList.contains('is-text-pinned')) hero.classList.toggle('is-text-pinned', pinned);
    writeStyle(hero, '--hero-scroll-lift', `${pinned ? 0 : heroHeight}px`);
    // Coordinates are needed for a visible draw, not for every raw scroll
    // event or the completed clocks of the later chapters. A reverse entry
    // measures its current native camera pose before the first new draw.
    if (geometry && inView) measure();
  }
  function paint(now) {
    frame = 0;
    if (motion.matches) { fallback('reduced-motion'); return; }
    if (refreshing) { stop(); return; }
    // Progress, projection and native light are read together in this draw,
    // rather than combining cached geometry with a newer lamp brightness.
    readScroll(true);
    if (failed || !renderer || !inView || document.hidden) { stop(); return; }
    // A scene-clock draw and a frame callback can share a frame (their
    // timestamps differ in origin), so the step is never negative.
    const elapsed = lastPaint ? Math.max(0, (now - lastPaint) / 1000) : 0;
    const dt = Math.min(elapsed, .08);
    lastPaint = now; time += dt;
    // The followers are integrated exactly, so they take the real elapsed
    // time: on a slow device the glide keeps its pace instead of dragging.
    updateFlow(Math.min(elapsed, .5));
    // A late opening plays only while it can still be seen from the start.
    if (state.ready && !state.completed && state.lateIntro && state.elapsed === 0
      && (performance.now() > 6500 || rawScrollY > 2)) settle();
    if (state.ready && !state.completed) {
      state.elapsed = Math.min(state.duration, state.elapsed + dt);
      state.progress = state.elapsed / state.duration;
      if (state.progress >= 1) settle();
    }
    const intro = Math.max(state.progress, smooth(0, .15, state.transition));
    const follow = 1 - Math.exp(-dt * 7);
    pointer[0] += (targetPointer[0] - pointer[0]) * follow;
    pointer[1] += (targetPointer[1] - pointer[1]) * follow;
    inputActive += (targetInputActive - inputActive) * follow;
    state.interaction = coarsePointer.matches ? 'autonomous' : 'cursor-flow';
    try {
      renderer.render({ time, progress: intro, transition: state.transition,
        handoff: state.handoff, pointer, inputActive, titleRect: sourceRect, copyRect, bmwRect: targetRect,
        bmwProgress: state.bmwProgress, flow: [state.flow, state.flowFar],
        nativeLight,
        scrollOffset: 0 });
    } catch (error) { fallback('rendering-unavailable', error); return; }
    if (failed || !renderer) return;
    writeStyle(layer, 'visibility', 'visible');
    state.frames++; state.running = true;
    Object.assign(state, renderer.stats());
    if (state.ready) {
      root.classList.add('hero-vortex-active'); root.classList.remove('hero-vortex-pending');
      updateCopy(copyPose(intro));
    }
    state.phase = !state.ready ? (state.startupDelayed ? 'preparing-native' : 'preparing') : state.transition > 0
      ? state.transition >= 1 ? 'headlight-ignition' : 'headlight-energy'
      : state.completed ? 'settled' : intro < .25 ? 'emission' : intro < .65 ? 'vortex' : 'name-formation';
    const quiet = state.completed && state.transition === 0 && state.flow === 0 && state.flowFar === 0;
    if (quiet) timer = setTimeout(() => { timer = 0; frame = requestAnimationFrame(paint); }, 24);
    else frame = requestAnimationFrame(paint);
  }
  function wake() {
    if (failed || !renderer || !inView || document.hidden) { stop(); return; }
    if (!frame && !timer) frame = requestAnimationFrame(paint);
  }
  function onScroll(event) {
    // Native input is sampled before drawing; sceneclock uses the cached raw
    // position alongside the authoritative smoothed camera pose. Re-reading
    // scrollY after timeline writes forces style/layout on every clock tick.
    if (!event || event.type === 'scroll' || event.type === 'pageshow') rawScrollY = window.scrollY;
    if (refreshing || failed) return;
    if (event?.type === 'sceneclock' && bmw._sceneProgress > 0 && bmw._sceneProgress < .405 && renderer && !failed && !document.hidden) {
      // Render the completed camera pose in the same frame as GSAP. This
      // also cancels an older queued draw after a rapid direction change.
      cancelAnimationFrame(frame); clearTimeout(timer); frame = 0; timer = 0;
      paint(performance.now());
      return;
    }
    readScroll();
    if (state.ready) updateCopy(copyPose());
    wake();
  }
  function resize() {
    rawScrollY = window.scrollY;
    layoutDirty = true; geometryDirty = true;
    // The pinned copy takes its new place at once (a turned phone would
    // otherwise show it at the old width and position until the debounce).
    if (!failed) measurePin();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (failed) return;
      readScroll();
      if (renderer) {
        try { renderer.resize(); Object.assign(state, renderer.stats()); }
        catch (error) { fallback('resize-unavailable', error); return; }
      }
      wake();
    }, 80);
  }

  if (motion.matches || !window.createHeroFlow || !window.HeroBMWPoints) {
    fallback(motion.matches ? 'reduced-motion' : 'renderer-unavailable'); return;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('sceneclock', onScroll);
  window.addEventListener('resize', resize, { passive: true });
  window.visualViewport?.addEventListener('resize', resize, { passive: true });
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.addEventListener('refreshInit', () => { refreshing = true; });
    ScrollTrigger.addEventListener('refresh', () => {
      refreshing = false; layoutDirty = true; geometryDirty = true; onScroll();
    });
  }
  window.addEventListener('pointermove', event => {
    if (!inView || event.pointerType === 'touch' || coarsePointer.matches) return;
    targetInputActive = 1;
    targetPointer[0] = clamp(event.clientX / innerWidth) * 2 - 1;
    targetPointer[1] = clamp(event.clientY / innerHeight) * 2 - 1;
  }, { passive: true });
  const release = () => { targetPointer[0] = 0; targetPointer[1] = 0; targetInputActive = 0; };
  window.addEventListener('pointerup', release, { passive: true });
  document.addEventListener('pointerleave', release, { passive: true });
  window.addEventListener('blur', release);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { release(); stop(); }
    else onScroll();
  });
  motion.addEventListener('change', () => { if (motion.matches) fallback('reduced-motion'); });
  window.addEventListener('herointrotimeout', revealNativeStartup, { once: true });
  // A slow script download can finish after the head's one-time event. The
  // visible DOM is already the settled composition in that case as well.
  if (window.HeroStartupExpired || !root.classList.contains('hero-vortex-pending')) revealNativeStartup();
  window.addEventListener('pagehide', stop); window.addEventListener('pageshow', onScroll);
  function start() {
    rawScrollY = window.scrollY;
    readScroll();
    // A restored position can be beyond BMW. Keep the field dormant there
    // so reverse scrolling still restores the entrance without a reload.
    if (!inView) { settle(); root.classList.remove('hero-vortex-pending'); }
    try {
      layer = document.createElement('div'); layer.className = 'hero-particle-journey';
      layer.setAttribute('aria-hidden', 'true'); canvas = document.createElement('canvas');
      canvas.className = 'hero-particles'; layer.append(canvas); document.body.append(layer);
      darkness = document.createElement('div'); darkness.className = 'hero-energy-darkness';
      darkness.setAttribute('aria-hidden', 'true'); document.body.append(darkness);
      layoutDirty = true; geometryDirty = true;
      renderer = window.createHeroFlow({ canvas, hero, title, onError: rendererError });
      if (!renderer) throw new Error('No particle renderer');
      Object.assign(state, renderer.stats());
      if (window.ResizeObserver) {
        observer = new ResizeObserver(resize); observer.observe(hero); observer.observe(inner);
        observer.observe(layer);
      }
      document.fonts?.addEventListener('loadingdone', resize);
      document.fonts?.ready.then(resize);
      onScroll();
    } catch (error) { fallback('webgl-unavailable', error); }
  }
  requestAnimationFrame(() => requestAnimationFrame(start));
})();
