/* BMW -> Bosch: immutable photo samples, one shared scroll clock, native
 * sharp images at the endpoints. Classic scripts also support file://. */
(() => {
  const root = document.documentElement;
  const bmw = document.getElementById('bmw-chapter');
  const bosch = document.getElementById('chapter-bosch');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!bmw || !bosch || motion.matches) return;
  const pointsURL = new URL('../../assets/bmw-bridge/points.js?v=1', document.currentScript.src).href;
  const clamp = (x) => Math.min(1, Math.max(0, x));
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const state = window.BMWBridgeState = {
    progress: 0, visible: false, ready: false, phase: 'bmw', start: 0, end: 0,
    noAdapt: true,
    source: null, target: null, viewport: { width: innerWidth, height: innerHeight },
  };
  let experience, layer, source, target, canvas, loading = false, failed = false;
  let sourceFrame, targetFrame, sourceVeil, targetVeil;
  let targetScreen, targetSpill;
  let lastProgress = -1, layoutKey = '', deferEntry = false, fadeUntil = 0;
  let lastSourceMask = null;
  // A late entry crossfades over the native scenes instead of being skipped,
  // as long as the points have not yet scattered far from the car.
  const LATE_ENTRY_LIMIT = .45, LATE_FADE_MS = 350;
  // A quarter of the way into the BMW chapter, preparation stops waiting for
  // scroll pauses: a visitor scrolling straight through would arrive first.
  // (BMW's range begins at the opening, which owns the first seconds.)
  const near = () => {
    const a = bmw._sceneRange;
    return Boolean(a && state.end > 0 && window.SceneKit
      && window.SceneKit.scrollPosition() > a.start + (state.start - a.start) * .25);
  };
  const originalScreen = bosch.querySelector('.screen-on');
  const originalSpill = bosch.querySelector('.screen-spill');
  const style = (node, key, value) => {
    if (node.style[key] !== value) node.style[key] = value;
  };
  const cssVar = (node, key, value) => {
    if (node.style.getPropertyValue(key) !== value) node.style.setProperty(key, value);
  };

  function ranges() {
    const a = bmw._sceneRange, b = bosch._sceneRange;
    if (!a || !b) return false;
    state.start = a.start + (a.end - a.start) * 0.87;
    state.end = b.start + (b.end - b.start) * 0.22;
    return state.end > state.start;
  }

  function clear() {
    state.visible = false;
    fadeUntil = 0;
    root.classList.remove('is-bmw-particle-bridge');
    layer?.classList.remove('is-active', 'is-late');
    experience?.setActive(false);
  }

  function fallback(error) {
    if (failed) return;
    failed = true;
    state.ready = false;
    clear();
    experience?.dispose();
    experience = null;
    layer?.remove();
    console.warn('BMW particle handoff: retaining the original photo transition.', error);
  }

  function decode(cache) {
    const bytes = Uint8Array.from(atob(cache.packed), (char) => char.charCodeAt(0));
    if (bytes.length !== cache.count * 14) throw new Error('Invalid BMW particle sample cache');
    const view = new DataView(bytes.buffer), n = cache.count;
    const data = { count: n, source: new Float32Array(n * 2), target: new Float32Array(n * 2),
      sourceColors: new Float32Array(n * 3), targetColors: new Float32Array(n * 3) };
    for (let i = 0; i < n; i++) {
      for (const [name, color, offset] of [['source', 'sourceColors', 0], ['target', 'targetColors', 7]]) {
        const at = i * 14 + offset;
        data[name][i * 2] = view.getUint16(at, true) / 65535;
        data[name][i * 2 + 1] = view.getUint16(at + 2, true) / 65535;
        for (let c = 0; c < 3; c++) data[color][i * 3 + c] = bytes[at + 4 + c] / 255;
      }
    }
    return data;
  }

  function loadPoints() {
    if (window.BMWBridgePoints) return Promise.resolve(window.BMWBridgePoints);
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = pointsURL;
      script.onload = () => { resolve(window.BMWBridgePoints); script.remove(); };
      script.onerror = () => { reject(new Error('BMW particle samples could not load')); script.remove(); };
      document.head.append(script);
    });
  }

  function makeFrame(section, holder) {
    const frame = section.querySelector('.zoom-bg-image').cloneNode(true);
    frame.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
    const veil = section.querySelector('.reveal-veil').cloneNode(true);
    holder.replaceChildren(frame, veil);
    return [frame, veil];
  }

  function layout(force = false) {
    if (!layer || !bmw._photoBridgeLayout || !bosch._photoBridgeLayout) return;
    const a = bmw._photoBridgeLayout(), b = bosch._photoBridgeLayout();
    const key = JSON.stringify([a, b]);
    if (!force && key === layoutKey) return;
    layoutKey = key;
    state.source = a.rect;
    state.target = b.rect;
    state.sourceFrame = a.frame;
    state.targetFrame = b.frame;
    state.viewport = a.viewport;
    layer.style.width = `${a.viewport.width}px`;
    layer.style.height = `${a.viewport.height}px`;
    [sourceFrame, sourceVeil] = makeFrame(bmw, source);
    [targetFrame, targetVeil] = makeFrame(bosch, target);
    for (const [frame, pose] of [[sourceFrame, a], [targetFrame, b]]) {
      frame.style.transform = 'translate3d(0px, 0px, 0px) scale(0.84, 0.84)';
      frame.style.transformOrigin = pose.origin;
      frame.querySelector('.photo-plane').style.transform = 'translate3d(0px, 0px, 0px)';
    }
    // Always copy the settled endpoint, even when loading during a fast jump.
    sourceFrame.querySelectorAll('.lamp-lit,.badge-lit').forEach((el) => el.style.opacity = '1');
    sourceFrame.querySelectorAll('.lamp-spill').forEach((el) => { el.style.opacity = '.75'; el.style.transform = 'scale(1)'; });
    sourceVeil.style.setProperty('--li', '1');
    sourceVeil.style.setProperty('--lr', '140');
    for (const [i, uv] of [[1, [327 / 2160, 1973 / 3840]], [2, [1768 / 2160, 1978 / 3840]]]) {
      sourceVeil.style.setProperty(`--l${i}x`, `${a.rect.x + uv[0] * a.rect.width}px`);
      sourceVeil.style.setProperty(`--l${i}y`, `${a.rect.y + uv[1] * a.rect.height}px`);
    }
    targetVeil.style.setProperty('--rr', '58%');
    targetScreen = targetFrame.querySelector('.screen-on');
    targetSpill = targetFrame.querySelector('.screen-spill');
    lastProgress = -1;
    lastSourceMask = null;
    experience?.resize();
  }

  function sourceMask(p) {
    if (p <= .10) return 'none';
    const rect = state.source;
    // This is the same distance/release function as the point shader. Two
    // overlapping lamp-fronts progressively remove real image pixels.
    return [[.1514, .5138], [.8185, .5151]].map(([u, v]) => {
      const stops = Array.from({ length: 12 }, (_, i) => {
        const distance = Math.max(0, (p - .155 + i / 11 * .055) / .30);
        const alpha = 1 - smooth(.10 + distance * .30, .155 + distance * .30, p);
        return `rgba(0,0,0,${alpha.toFixed(4)}) ${(distance * rect.width).toFixed(2)}px`;
      });
      return `radial-gradient(circle at ${rect.x + u * rect.width}px ${rect.y + v * rect.height}px,${stops.join(',')},black)`;
    }).join(',');
  }

  function sync() {
    if (!ranges()) { clear(); return; }
    const y = window.SceneKit.scrollPosition();
    const p = clamp((y - state.start) / (state.end - state.start));
    state.progress = p;
    state.phase = p <= .1 ? 'headlights' : p < .4 ? 'fragmentation' : p < .55 ? 'spatial-flow'
      : p < .7 ? 'convergence' : p < .85 ? 'reconstruction' : p < .95 ? 'sharp-dashboard' : 'dashboard';
    if (!loading && !failed && !motion.matches && near() && y < state.end + state.viewport.height) load();
    if (deferEntry && (p === 0 || p === 1)) deferEntry = false;
    // Plays in both directions: scrolling back, the cockpit dissolves into
    // light that streams back into the car.
    const active = state.ready && !failed && !motion.matches && !deferEntry && y >= state.start && y <= state.end;
    if (!active) { clear(); return; }
    state.visible = !document.hidden;
    layer.classList.add('is-active');
    // During a late entry the native scenes stay visible underneath until
    // the overlay has faded in over them.
    const fading = fadeUntil > performance.now();
    if (!fading) layer.classList.remove('is-late');
    root.classList.toggle('is-bmw-particle-bridge', !fading);
    if (p !== lastProgress) {
      lastProgress = p;
      // The source contributes no pixels after .34. Keep its last mask
      // while hidden, then resolve the current mask before reverse exposure.
      if (p < .34) {
        const mask = sourceMask(p);
        if (mask !== lastSourceMask) {
          lastSourceMask = mask;
          source.style.maskImage = mask;
          source.style.webkitMaskImage = mask;
        }
      }
      // Follow the parent gate on both exits. Explicit `visible` can paint
      // through a hidden ancestor and leave this fixed clone over the page.
      style(source, 'visibility', p < .34 ? 'inherit' : 'hidden');
      cssVar(source, '--bridge-lamp', String(1.55 + .28 * smooth(0, .1, p)));
      // Geometry is already settled before the sharp photo arrives. This
      // final resolve replaces individual points with their original pixels.
      style(target, 'opacity', String(smooth(.85, .95, p)));
      // Preserve Bosch's existing boot exactly; only its presentation is
      // carried by the temporary frame until the original scene takes over.
      style(targetScreen, 'opacity', originalScreen.style.opacity);
      style(targetSpill, 'opacity', originalSpill.style.opacity);
      style(targetScreen, 'visibility', originalScreen.style.visibility);
      style(targetSpill, 'visibility', originalSpill.style.visibility);
    }
    experience.setActive(state.visible);
  }

  async function load() {
    if (loading || failed || motion.matches || !window.loadScene3D) return;
    loading = true;
    try {
      const probe = document.createElement('canvas').getContext('webgl2');
      if (!probe) throw new Error('WebGL 2 unavailable');
      probe.getExtension('WEBGL_lose_context')?.loseContext();
      const idle = window.SceneIdle;
      const pause = () => (near() ? null : idle?.quiet(300, 1000));
      const [bundle, cache] = await Promise.all([window.loadScene3D(), loadPoints()]);
      await pause();
      const data = decode(cache);
      delete window.BMWBridgePoints;
      await pause();
      layer = document.createElement('div'); layer.className = 'bmw-bridge';
      layer.setAttribute('aria-hidden', 'true');
      source = document.createElement('div'); source.className = 'bmw-bridge__source';
      target = document.createElement('div'); target.className = 'bmw-bridge__target';
      canvas = document.createElement('canvas'); canvas.className = 'bmw-bridge__canvas';
      layer.append(source, target, canvas); document.body.append(layer);
      layout(true);
      experience = bundle.startBMWBridge({ canvas, state, data, onError: fallback,
        // Without parallel compilation the driver links while the page idles.
        settle: () => (near() ? idle?.quiet(60, 250) : idle?.quiet(400, 1500)) });
      window.BMWBridgeExperience = experience;
      canvas.addEventListener('webglcontextlost', (event) => { event.preventDefault(); fallback('WebGL context lost'); }, { once: true });
      await experience.ready;
      if (failed) return;
      // Early in the pass, fade in over the native scenes. Past that, do not
      // replace a partially played fallback; the next entry gets the effect.
      const p = state.progress;
      if (p > .02 && p < LATE_ENTRY_LIMIT) {
        fadeUntil = performance.now() + LATE_FADE_MS;
        layer.classList.add('is-late');
        setTimeout(sync, LATE_FADE_MS + 20);
      }
      deferEntry = p >= LATE_ENTRY_LIMIT && p < .98;
      state.ready = true;
      sync();
    } catch (error) { fallback(error); }
  }

  // First in story order: prepared during the first pause after the opening.
  window.SceneIdle?.prepare(1, () => { if (!motion.matches) return load(); });
  window.addEventListener('sceneclock', sync);
  window.addEventListener('load', () => {
    state.viewport.height = bmw.querySelector('.chapter-zoom-bg').clientHeight || innerHeight;
    window.ScrollTrigger?.addEventListener('refresh', () => { layout(true); sync(); });
    sync();
  }, { once: true });
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', sync);
})();
