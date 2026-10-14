/* Optional relative tilt for the opening particle field. No animation loop,
 * scroll interception, heading/compass use, or stored sensor readings. */
(() => {
  const hero = document.getElementById('hero');
  const inner = hero?.querySelector('.hero-inner');
  if (!inner) return;
  window.HeroMotion?.dispose?.();

  const mobile = matchMedia('(max-width: 1100px) and (pointer: coarse)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const Orientation = window.DeviceOrientationEvent;
  const supported = typeof Orientation === 'function';
  const secure = window.isSecureContext === true;
  const needsPermission = supported && typeof Orientation.requestPermission === 'function';
  const policy = document.permissionsPolicy || document.featurePolicy;
  let policyAllowed = true;
  try {
    policyAllowed = !policy?.allowsFeature ||
      (policy.allowsFeature('accelerometer') && policy.allowsFeature('gyroscope'));
  } catch (_) { /* Older engines do not expose these policy names. */ }

  const state = window.HeroMotionState = {
    x: 0, y: 0, active: false, source: 'autonomous', status: 'unavailable',
    supported, secure, permission: needsPermission ? 'prompt' : 'not-required',
    enabled: true, listening: false, calibrated: false, events: 0, angle: 0,
  };
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'hero-motion-toggle';
  button.textContent = 'Enable tilt'; button.hidden = true;
  button.setAttribute('aria-pressed', 'false');
  inner.append(button);

  let disposed = false, pageSuspended = false, userEnabled = !needsPermission;
  let base = null, lastSample = 0, received = false, sensorTimer = 0;
  let requestId = 0, pendingPermission = false;
  const bound = x => Math.max(-1, Math.min(1, x));
  const delta = (a, b) => ((a - b + 540) % 360) - 180;
  const screenAngle = () => {
    const angle = Number(window.screen?.orientation?.angle ?? window.orientation ?? 0);
    return Number.isFinite(angle) ? angle : 0;
  };
  const eligible = () => !disposed && supported && secure && policyAllowed &&
    mobile.matches && !reduced.matches;
  const canListen = () => eligible() && state.enabled && !document.hidden && !pageSuspended && userEnabled &&
    (!needsPermission || state.permission === 'granted');

  function reset() {
    state.x = state.y = 0; state.active = false; state.source = 'autonomous';
    state.calibrated = false; base = null; lastSample = 0;
  }
  function updateButton() {
    button.hidden = !eligible() || !state.enabled || state.permission === 'denied' ||
      state.status === 'no-sensor';
    button.disabled = pendingPermission;
    const on = state.active && userEnabled;
    button.textContent = pendingPermission ? 'Enabling tilt…' : on ? 'Tilt on' : 'Enable tilt';
    button.setAttribute('aria-pressed', String(on));
    button.setAttribute('aria-label', on ? 'Turn off particle tilt motion' : 'Enable particle tilt motion');
  }
  function onOrientation(event) {
    if (!canListen() || !Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
    const angle = screenAngle();
    if (!base || angle !== state.angle) {
      reset(); base = { beta: event.beta, gamma: event.gamma };
      state.angle = angle; state.calibrated = true;
    }
    const now = performance.now();
    const elapsed = lastSample ? Math.min((now - lastSample) / 1000, .12) : 1 / 60;
    lastSample = now;
    const beta = delta(event.beta, base.beta), gamma = delta(event.gamma, base.gamma);
    const radians = angle * Math.PI / 180;
    const c = Math.cos(radians), s = Math.sin(radians);
    // The sensor frame stays portrait when the browser rotates its screen.
    // Convert the small relative tilt into screen axes before smoothing it.
    const x = bound((gamma * c + beta * s) / 24);
    const y = bound((beta * c - gamma * s) / 22);
    const follow = 1 - Math.exp(-elapsed * 8);
    state.x += (x - state.x) * follow;
    state.y += (y - state.y) * follow;
    const becameActive = !state.active;
    state.active = true; state.source = 'tilt'; state.status = 'active'; state.events++;
    clearTimeout(sensorTimer); sensorTimer = 0;
    received = true;
    if (becameActive) updateButton();
  }
  function disconnect() {
    if (state.listening) window.removeEventListener('deviceorientation', onOrientation);
    state.listening = false;
    clearTimeout(sensorTimer); sensorTimer = 0; reset();
  }
  function refresh() {
    if (disposed) return;
    if (canListen()) {
      if (!state.listening) {
        reset(); window.addEventListener('deviceorientation', onOrientation, { passive: true });
        state.listening = true; state.status = 'waiting';
      } else if (screenAngle() !== state.angle && base) {
        reset(); state.status = 'waiting';
      }
    } else {
      disconnect();
      state.status = !supported ? 'unsupported' : !secure ? 'insecure-context' :
        !policyAllowed ? 'policy-blocked' : reduced.matches ? 'reduced-motion' :
        !mobile.matches ? 'desktop' : state.permission === 'denied' ? 'denied' :
        !state.enabled || document.hidden || pageSuspended ? 'paused' : needsPermission &&
        state.permission !== 'granted' ? 'permission-needed' : 'off';
    }
    updateButton();
  }
  function waitForSensor() {
    clearTimeout(sensorTimer);
    if (received || !canListen()) return;
    // Only a deliberate activation gets a no-sensor timeout. Automatic
    // passive listening never makes the optional control disappear.
    sensorTimer = setTimeout(() => {
      sensorTimer = 0;
      if (received || !canListen()) return;
      userEnabled = false; disconnect(); state.status = 'no-sensor'; updateButton();
    }, 4000);
  }
  function onToggle() {
    if (!eligible() || pendingPermission) return;
    if (state.active && userEnabled) { userEnabled = false; refresh(); return; }
    userEnabled = true;
    if (!needsPermission || state.permission === 'granted') {
      refresh(); waitForSensor(); return;
    }
    if (state.permission === 'denied') { refresh(); return; }
    // Invoke directly inside this click: WebKit requires transient user
    // activation. The intro always continues while this request is pending.
    const id = ++requestId;
    pendingPermission = true; state.status = 'requesting'; updateButton();
    let request;
    try { request = Orientation.requestPermission(); }
    catch (_) { request = Promise.reject(new Error('Orientation access unavailable')); }
    Promise.resolve(request).then(permission => {
      if (disposed || id !== requestId) return;
      pendingPermission = false;
      state.permission = permission === 'granted' ? 'granted' : 'denied';
      userEnabled = state.permission === 'granted';
      refresh(); waitForSensor();
    }).catch(() => {
      if (disposed || id !== requestId) return;
      pendingPermission = false; state.permission = 'denied'; userEnabled = false; refresh();
    });
  }
  function setEnabled(value) {
    const enabled = Boolean(value);
    if (state.enabled !== enabled) { state.enabled = enabled; refresh(); }
    return state;
  }
  function pageHide() { pageSuspended = true; disconnect(); state.status = 'paused'; updateButton(); }
  function pageShow() { pageSuspended = false; refresh(); }
  const subscriptions = [];
  function observeMedia(query) {
    if (query.addEventListener) {
      query.addEventListener('change', refresh);
      subscriptions.push(() => query.removeEventListener('change', refresh));
    } else {
      query.addListener(refresh); subscriptions.push(() => query.removeListener(refresh));
    }
  }
  function dispose() {
    if (disposed) return;
    disposed = true; requestId++; disconnect();
    state.status = 'disposed'; button.remove();
    button.removeEventListener('click', onToggle);
    window.removeEventListener('resize', refresh);
    window.removeEventListener('orientationchange', refresh);
    window.screen?.orientation?.removeEventListener?.('change', refresh);
    document.removeEventListener('visibilitychange', refresh);
    window.removeEventListener('pagehide', pageHide); window.removeEventListener('pageshow', pageShow);
    subscriptions.forEach(remove => remove());
  }
  button.addEventListener('click', onToggle);
  window.addEventListener('resize', refresh, { passive: true });
  window.addEventListener('orientationchange', refresh, { passive: true });
  window.screen?.orientation?.addEventListener?.('change', refresh);
  document.addEventListener('visibilitychange', refresh);
  window.addEventListener('pagehide', pageHide); window.addEventListener('pageshow', pageShow);
  observeMedia(mobile); observeMedia(reduced);
  window.HeroMotion = {
    current: () => state,
    setEnabled,
    start: () => setEnabled(true),
    stop: () => setEnabled(false),
    dispose,
  };
  refresh();
})();
