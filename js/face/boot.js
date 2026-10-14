(() => {
  const bundleUrl = new URL('../lab/lab.bundle.js?v=37', document.currentScript.src).href;
  let bundlePromise;

  // Background preparation (downloads, GPU programs, texture uploads) waits
  // for the visitor to pause. Scroll, wheel and touch reset the quiet clock,
  // and one task runs at a time, so the work never lands mid-gesture.
  const SceneIdle = window.SceneIdle = window.SceneIdle || (() => {
    let lastInput = performance.now();
    const note = () => { lastInput = performance.now(); };
    for (const type of ['scroll', 'wheel', 'touchmove', 'keydown']) {
      window.addEventListener(type, note, { passive: true, capture: true });
    }
    const idle = (callback) => (window.requestIdleCallback
      ? requestIdleCallback(callback, { timeout: 600 }) : setTimeout(callback, 32));
    // Resolves after `ms` without input (inside an idle callback), or once
    // `limit` has passed so a visitor scrolling straight on is not starved.
    function quiet(ms = 400, limit = Infinity) {
      const deadline = performance.now() + limit;
      return new Promise((resolve) => {
        const check = () => {
          const wait = ms - (performance.now() - lastInput);
          if (performance.now() >= deadline) { resolve(); return; }
          if (document.hidden || wait > 0) { setTimeout(check, Math.max(40, Math.min(250, wait + 16))); return; }
          idle(() => (performance.now() - lastInput >= ms && !document.hidden ? resolve() : check()));
        };
        check();
      });
    }
    let chain = Promise.resolve();
    function run(task, ms = 400, limit = Infinity) {
      const result = chain.then(() => quiet(ms, limit)).then(task);
      chain = result.catch(() => {});
      return result;
    }
    // Scenes register their preparation in story order; it starts once the
    // opening has settled. Each scene's own approach trigger still applies.
    const pending = [];
    let started = false;
    // A visitor who scrolls straight on never pauses; then each task waits at
    // most a couple of seconds, so the scenes are ready before the reveals
    // that need them rather than built in the middle of one.
    function drain() {
      pending.sort((a, b) => a.order - b.order);
      while (pending.length) {
        const { task, ms, limit } = pending.shift();
        run(task, ms, limit);
      }
    }
    function prepare(order, task, ms = 300, limit = 2500) {
      pending.push({ order, task, ms, limit });
      if (started) drain();
    }
    function start() {
      if (started) return;
      started = true;
      drain();
    }
    return { quiet, run, prepare, start, idleFor: () => performance.now() - lastInput };
  })();
  const beginPreparation = () => {
    // The timed opening owns the first seconds; preparation follows it.
    const intro = window.HeroIntroState;
    const t0 = performance.now();
    const wait = () => {
      if (!intro || intro.completed || intro.fallback || performance.now() - t0 > 4000) SceneIdle.start();
      else setTimeout(wait, 150);
    };
    wait();
  };
  if (document.readyState === 'complete') beginPreparation();
  else window.addEventListener('load', beginPreparation, { once: true });
  window.loadScene3D = () => {
    if (window.HiWiLabBundle?.startPortrait) return Promise.resolve(window.HiWiLabBundle);
    if (bundlePromise) return bundlePromise;
    bundlePromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = bundleUrl;
      script.onload = () => resolve(window.HiWiLabBundle);
      script.onerror = () => { bundlePromise = null; reject(new Error('3D scenes could not load')); };
      document.head.appendChild(script);
    });
    return bundlePromise;
  };

  const state = window.PortraitState = {
    progress: 0, photoOpacity: 0, visible: false, ready: false,
    noAdapt: true,
    interactive: false, frame: null, portal: null,
    dashboardRect: null, dashboardClip: null, phase: 'dashboard',
    textProgress: [0, 0, 0], textOpacity: [0, 0, 0], textOffsets: [], textEnabled: false,
    exitProgress: 0, exitTarget: null, workProgress: 0, workOpacity: 0, workActive: false,
    workOrigin: null, workOffset: { x: 0, y: 0 },
  };
  const source = document.getElementById('chapter-bosch');
  const section = document.getElementById('chapter-beyond');
  const work = document.getElementById('chapter-work');
  if (!source || !section || !document.documentElement.classList.contains('has-story') ||
      matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const clamp = (v) => Math.max(0, Math.min(1, v));
  const smooth = (v) => { const t = clamp(v); return t * t * (3 - 2 * t); };
  let experience;
  let layer;
  let black;
  let canvas;
  let photo;
  let hint;
  let presentation;
  let bounds;
  let failed = false;
  let screenVisible = !document.hidden;
  let sampleTextTargets;
  let textReady = false;
  let workTarget;
  let layoutKey = '';
  let sampleTimer;
  let sampleGeneration = 0;
  let lastExit = -1;
  let textOffsetsKey = '';
  let wasVisible = false;
  const textNodes = [...section.querySelectorAll('.intro-pull, .intro-support, .intro-now')];
  const compact = matchMedia('(max-width: 720px), (max-height: 600px)');
  const root = document.documentElement;
  const style = (node, key, value) => {
    if (node && node.style[key] !== value) node.style[key] = value;
  };
  const cssVar = (node, key, value) => {
    const next = String(value);
    if (node.style.getPropertyValue(key) !== next) node.style.setProperty(key, next);
  };

  function selectWorkTarget() {
    const next = work.querySelector(compact.matches ? '.slate-org' : '.poster-title--neuromaze');
    if (next === workTarget) return;
    workTarget?.classList.remove('particle-work-target');
    workTarget = next;
  }

  async function sampleCopy() {
    if (!experience || !sampleTextTargets || failed) return;
    const generation = ++sampleGeneration;
    state.textEnabled = false;
    sync();
    try {
      selectWorkTarget();
      // Typography is sampled only after fonts/layout change. DOM text remains
      // selectable, accessible and the final sharp surface at every size.
      root.classList.add('has-particle-copy');
      const data = await sampleTextTargets([...textNodes, workTarget], {
        maxPoints: experience.stats().textBudget || (compact.matches ? 1800 : 4000),
      });
      if (failed || generation !== sampleGeneration) return;
      if (!data.count) throw new Error('Text targets are not measurable');
      await experience.setTextTargets(data);
      if (failed || generation !== sampleGeneration) return;
      textReady = true;
      state.textEnabled = true;
      sync();
    } catch (error) {
      if (failed || generation !== sampleGeneration) return;
      textReady = false;
      state.textEnabled = false;
      root.classList.remove('has-particle-copy');
      workTarget?.classList.remove('particle-work-target');
      console.warn('Portrait: retaining native text animation.', error);
      sync();
    }
  }

  function exitMask(progress) {
    // Match the shader's right-to-left release, with a smooth local band.
    // This changes alpha only; the original photograph is never rasterized.
    if (progress <= 0) return 'none';
    return `linear-gradient(to right, ${Array.from({ length: 13 }, (_, i) => {
      const x = i / 12;
      const alpha = 1 - smooth((progress - (1 - x) * 0.35) / 0.65);
      return `rgba(0,0,0,${alpha.toFixed(4)}) ${(x * 100).toFixed(2)}%`;
    }).join(', ')})`;
  }

  function layout() {
    const width = document.documentElement.clientWidth;
    const height = section.querySelector('.story-stage').clientHeight || window.innerHeight;
    const key = `${width}:${height}:${compact.matches}`;
    if (key === layoutKey) { sync(); return; }
    layoutKey = key;
    sampleGeneration += 1;
    state.textEnabled = false;
    state.viewport = { width, height };
    const portrait = width <= 720 && height > width;
    const introTop = parseFloat(getComputedStyle(section.querySelector('.reveal-copy')).top);
    state.frame = portrait
      ? { x: 0, y: 84, width, height: Math.max(130, Math.min(height * 0.5, (introTop || height * 0.52) - 104)) }
      : { x: width * 0.025, y: 80, width: width * 0.48, height: Math.max(150, height - 108) };

    if (photo && presentation && bounds) {
      // This is the same frontal fit used by the point shader. Use the native
      // image at full resolution, never a canvas screenshot or a 3D texture.
      const frame = state.frame;
      const sizeX = bounds.max[0] - bounds.min[0];
      const sizeY = bounds.max[1] - bounds.min[1];
      const halfHeight = Math.max(sizeY, sizeX / (frame.width / frame.height)) * 0.55;
      const scale = frame.height / (2 * halfHeight) * sizeY / presentation.sourceRect.height;
      const photoWidth = presentation.sourceRect.width * scale;
      const photoHeight = presentation.sourceRect.height * scale;
      photo.style.left = `${frame.x + (frame.width - photoWidth) / 2}px`;
      photo.style.top = `${frame.y + (frame.height - photoHeight) / 2}px`;
      photo.style.width = `${photoWidth}px`;
      photo.style.height = `${photoHeight}px`;
    }
    clearTimeout(sampleTimer);
    if (experience) sampleTimer = setTimeout(sampleCopy, 120);
    sync();
  }

  function sync() {
    const bosch = source._sceneProgress || 0;
    // Both sides use the rendered camera clock. During a fast reverse flick,
    // stars return inside the actual glass before the cockpit comes back.
    const intro = bosch >= 1 ? (section._sceneProgress || 0) : 0;
    const entered = bosch >= 0.885;
    const fullView = bosch >= 0.99;
    // The departure into the lab is a scene change, never a disintegration:
    // the copy leaves line by line (rising as it fades), then the portrait's
    // light goes down as it recedes a little, and only then — after a beat
    // of darkness — does the lab come up (js/story.js, from .44).
    state.exitProgress = 0;
    const lightsDown = smooth((intro - 0.41) / 0.035);
    state.introOpacity = 1 - lightsDown;
    cssVar(section, '--portrait-copy-alpha', 1 - smooth((intro - 0.43) / 0.015));
    textNodes.forEach((node, i) => {
      const out = smooth((intro - (0.405 + i * 0.005)) / 0.025);
      cssVar(node, '--portrait-line-alpha', (1 - out).toFixed(4));
      cssVar(node, '--portrait-line-lift', `${(-14 * out * out).toFixed(2)}px`);
    });
    const handoff = window.SceneKit?.workHandoff;
    const bridgeProgress = handoff?.progress || 0;
    // The monitor and the text follow the same smoothed absolute scroll clock.
    // On desktop the project title finishes with its existing .13–.17 entrance.
    const range = work?._sceneRange;
    const finish = range ? range.start + (range.end - range.start) * 0.175 : 0;
    const bridgeEnd = range ? range.start + state.viewport.height * 0.68 : 0;
    const tail = range ? clamp((window.SceneKit.scrollPosition() - bridgeEnd) / Math.max(1, finish - bridgeEnd)) : 1;
    state.workProgress = !handoff?.available || !textReady ? 0 : compact.matches
      ? clamp((bridgeProgress - 0.38) / 0.62)
      : bridgeProgress < 1 ? 0.88 * clamp((bridgeProgress - 0.38) / 0.62) : 0.88 + 0.12 * tail;
    state.workOpacity = smooth((state.workProgress - 0.88) / 0.12);
    state.workOrigin = handoff?.origin || {
      x: state.viewport.width * 0.4, y: state.viewport.height * 0.4,
      width: state.viewport.width * 0.2, height: state.viewport.height * 0.2,
    };
    state.exitTarget = { x: state.viewport.width * 0.5, y: state.viewport.height * 0.61 };
    state.progress = bosch < 1
      ? 0.22 * smooth((bosch - 0.885) / 0.105)
      : clamp(0.22 + 0.78 * intro / 0.235);
    // Let the fully assembled dots settle before the original photo arrives.
    state.photoOpacity = smooth((state.progress - 0.94) / 0.06);
    const inIntro = intro < 0.50;
    const inWork = state.workProgress > 0 && state.workProgress < 1;
    state.workActive = !!handoff?.available && textReady && intro > 0.8 && bridgeProgress >= 0.38;
    state.textProgress = [0.12, 0.14, 0.16].map((start) => textReady ? clamp((intro - start) / 0.115) : 0);
    state.textOpacity = state.textProgress.map((progress) => smooth((progress - 0.86) / 0.14));
    const introParticles = inIntro && (state.photoOpacity < 1 || state.textProgress.some((p, i) => p > 0 && state.textOpacity[i] < 1));
    state.visible = state.ready && entered && state.progress > 0 &&
      (introParticles || inWork) && screenVisible && !failed;
    state.interactive = state.visible && (state.progress < 0.9 ||
      state.textProgress.some((p) => p > 0 && p < 1) || state.exitProgress > 0 || inWork);
    state.phase = !entered ? 'dashboard' : !fullView ? 'dashboard-portal'
      : state.progress < 0.58 ? 'galaxy' : state.progress < 0.9 ? 'assembly'
      : state.progress < 0.94 ? 'settled-particles'
      : inWork ? 'work-formation' : intro >= 0.50 ? 'lab'
      : state.introOpacity < 1 ? 'lab-handoff'
      : state.photoOpacity < 1 ? 'photo-dissolve' : 'portrait';

    if (textReady) {
      workTarget.classList.toggle('particle-work-target', !!handoff?.available);
      // Read moving boxes before changing styles. No glyph sampling, particle
      // loops, or geometry uploads are performed during scrolling.
      // Hidden particles do not consume moving text coordinates. Measure in
      // this same sync before update() whenever they become visible again.
      // The intro copy is pinned while it forms, so its boxes are read once
      // per visible stretch (and after any layout change), not every frame;
      // only the project title, which travels into place, is followed live.
      if (state.visible) {
        if (textOffsetsKey !== layoutKey || !wasVisible) {
          textOffsetsKey = layoutKey;
          state.textOffsets = textNodes.map((node) => {
            const rect = node.getBoundingClientRect();
            return { x: rect.x, y: rect.y };
          });
        }
        if (state.workActive || !state.workOffset.x) {
          const rect = workTarget.getBoundingClientRect();
          state.workOffset = { x: rect.x, y: rect.y };
        }
      }
      wasVisible = state.visible;
      textNodes.forEach((node, i) => cssVar(node, '--particle-copy-alpha', state.textOpacity[i]));
      cssVar(workTarget, '--particle-copy-alpha', state.workOpacity);
    }
    if (state.exitProgress !== lastExit) {
      lastExit = state.exitProgress;
      const mask = exitMask(lastExit);
      style(photo, 'maskImage', mask);
      style(photo, 'webkitMaskImage', mask);
      textNodes.forEach((node) => cssVar(node, '--particle-exit-mask', mask));
    }
    const rect = state.dashboardRect;
    if (rect && !fullView) {
      const { width, height } = state.viewport;
      const x = Math.max(0, rect.x);
      const y = Math.max(0, rect.y);
      state.portal = {
        x, y, width: Math.max(1, Math.min(width, rect.x + rect.width) - x),
        height: Math.max(1, Math.min(height, rect.y + rect.height) - y), mix: 0,
      };
    } else state.portal = null;
    document.documentElement.classList.toggle('is-galaxy-reveal', bosch >= 0.855 && intro < 0.50);
    root.classList.toggle('is-portrait-intro', inIntro);
    if (layer) {
      style(layer, 'opacity', entered ? String(inIntro ? state.introOpacity : inWork ? 1 : 0) : '0');
      layer.style.clipPath = fullView ? 'none' : state.dashboardClip || 'inset(50%)';
    }
    if (black) black.style.opacity = inIntro ? String(1 - state.photoOpacity) : '0';
    if (canvas) canvas.style.opacity = state.visible ? '1' : '0';
    if (photo) {
      photo.style.opacity = inIntro ? String(state.photoOpacity) : '0';
      style(photo, 'transform', lightsDown > 0 && inIntro ? `scale(${(1 - 0.035 * lightsDown).toFixed(4)})` : '');
    }
    if (hint) hint.style.opacity = String(
      smooth((state.progress - 0.25) / 0.08) * (1 - smooth((state.progress - 0.58) / 0.1)),
    );
    experience?.update();
  }

  function fallback(error) {
    if (failed) return;
    failed = true;
    sampleGeneration += 1;
    state.ready = false;
    state.visible = false;
    document.documentElement.classList.remove('has-face-portrait');
    root.classList.remove('has-particle-copy');
    workTarget?.classList.remove('particle-work-target');
    clearTimeout(sampleTimer);
    experience?.dispose();
    layer?.remove();
    console.warn('Portrait: keeping the original photograph.', error);
  }

  let loadStarted = false;
  async function load() {
    if (loadStarted || failed) return;
    loadStarted = true;
    try {
      const probe = document.createElement('canvas');
      const gl = probe.getContext('webgl2');
      if (!gl) return;
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      const bundle = await window.loadScene3D();
      // Each heavy step waits for a pause (at most a second) of its own.
      await SceneIdle.quiet(300, 1000);
      layer = document.createElement('div');
      layer.className = 'face-portrait';
      layer.setAttribute('aria-hidden', 'true');
      black = document.createElement('div');
      black.className = 'face-portrait__black';
      canvas = document.createElement('canvas');
      canvas.className = 'face-portrait__canvas';
      photo = document.createElement('div');
      photo.className = 'face-portrait__photo';
      const crop = document.createElement('div');
      crop.className = 'face-portrait__crop';
      hint = document.createElement('p');
      hint.className = 'face-portrait__hint';
      hint.textContent = matchMedia('(pointer: coarse)').matches
        ? 'Touch to stir the stars · Scroll to reveal'
        : 'Move your cursor through the stars · Scroll to reveal';
      const image = document.createElement('img');
      image.className = 'face-portrait__image';
      image.alt = '';
      image.width = 1672;
      image.height = 941;
      image.decoding = 'async';
      image.draggable = false;
      image.src = section.querySelector('.reveal-photo--after').src;
      crop.appendChild(image);
      photo.appendChild(crop);
      layer.append(black, canvas, photo, hint);
      document.body.appendChild(layer);
      const portraitData = await bundle.loadPortraitAsset();
      presentation = portraitData.presentation || bundle.portraitPresentation;
      bounds = portraitData.bounds;
      // The detailed alpha mask follows individual edges. Applying a second
      // polygon clip would cut those antialiased curves into hard corners.
      photo.style.clipPath = presentation.maskImage ? 'none' : presentation.clipPath;
      Object.assign(image.style, presentation.imageCss);
      layoutKey = '';
      lastExit = -1;
      layout();
      await SceneIdle.quiet(300, 1000);
      if (failed) return;
      experience = bundle.startPortrait({ canvas, container: layer, state, portraitData, onError: fallback,
        settle: () => SceneIdle.quiet(400, 1500) });
      window.PortraitExperience = experience;
      await Promise.all([experience.ready, image.decode()]);
      if (failed) return;
      state.ready = true;
      document.documentElement.classList.add('has-face-portrait');
      sampleTextTargets = bundle.sampleTextTargets;
      await document.fonts.ready;
      await SceneIdle.quiet(300, 1000);
      if (failed) return;
      await sampleCopy();
      sync();
    } catch (error) { fallback(error); }
  }
  // After the BMW bridge (order 1): prepared during an early pause.
  SceneIdle.prepare(2, load);

  source.addEventListener('sceneprogress', sync);
  section.addEventListener('sceneprogress', sync);
  work?.addEventListener('sceneprogress', sync);
  // Compact Chapter 4 is ordinary document flow, so its target also moves
  // when the shared timeline has already reached its endpoint.
  let scrollFrame = 0;
  window.addEventListener('scroll', () => {
    if (!compact.matches || scrollFrame || !textReady || !state.workActive || state.workProgress >= 1) return;
    scrollFrame = requestAnimationFrame(() => { scrollFrame = 0; sync(); });
  }, { passive: true });
  window.addEventListener('resize', layout, { passive: true });
  window.visualViewport?.addEventListener('resize', layout, { passive: true });
  document.addEventListener('visibilitychange', () => { screenVisible = !document.hidden; sync(); });
  layout();
  if (!('IntersectionObserver' in window)) { load(); return; }
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    load();
  }, { rootMargin: '100% 0px' });
  observer.observe(source);
})();
