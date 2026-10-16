(() => {
  /* ---------- The chapter dial ----------
   * Navigation is a machined rotary knob in the bottom-right corner, in the
   * spirit of a car's iDrive controller. At rest its knurled rotor turns with
   * the page (45° per chapter) and the cap shows the chapter number.
   *
   * Touched, hovered or focused, it opens into a large corner wheel whose hub
   * sits just past the corner of the screen, so a thumb lands on the grip band
   * rather than on the hub. The chapters are printed around the wheel and roll
   * past a fixed index. Turning it travels through the site: slow turns scrub
   * the scenes live, each chapter's landing pose is a detent the wheel clicks
   * into, a flick coasts on and settles, and long jumps cut through black
   * while the lit dial lands in the dark.
   *
   * The labels are real links (keyboard, screen readers, no-script visits).
   * Nothing here measures layout per frame: geometry is read once per open,
   * pointer-down or refresh, and the page position comes from the scene
   * clock (js/chapters.js) rather than from scrollY.
   */
  const dial = document.getElementById('siteDial');
  if (!dial) return;

  const root = document.documentElement;
  const knob = dial.querySelector('.dial-knob');
  const knobRotor = dial.querySelector('.dial-knob__rotor');
  const odo = dial.querySelector('.dial-knob__odo');
  const bezelTicks = [...dial.querySelectorAll('.dial-knob__bezel i')];
  const wheel = dial.querySelector('.dial-wheel');
  const wheelRotor = dial.querySelector('.dial-wheel__rotor');
  const wheelTicks = [...dial.querySelectorAll('.dial-wheel__tick')];
  const indexMark = dial.querySelector('.dial-wheel__index');
  const scrim = dial.querySelector('.dial-scrim');
  const labels = [...dial.querySelectorAll('.dial-label')];
  const readout = dial.querySelector('.dial-readout');
  const roles = readout ? [...readout.children] : [];
  const preview = dial.querySelector('.dial-preview');
  const coach = dial.querySelector('.dial-coach');
  const live = document.getElementById('dialLive');
  const nowText = document.getElementById('dialNow');
  const veil = document.querySelector('.dial-veil');
  const mark = document.querySelector('.site-mark');

  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const compact = matchMedia('(max-width: 720px), (max-height: 600px)');
  const landscapePhone = matchMedia('(max-height: 500px) and (pointer: coarse)');

  /* ---- the chapters ---- */
  const HASHES = ['top', 'journey', 'bosch', 'beyond', 'work', 'education', 'contact'];
  const NAMES = ['Intro', 'BMW', 'Bosch', 'Beyond', 'Creative works', 'Education', 'Contact'];
  const ROLES = ['Roshan M', 'VR Developer', 'UI/UX Developer', 'The person & the lab', "Things I've built", 'The foundation', "Let's build together"];
  const SECTIONS = [null, 'bmw-chapter', 'chapter-bosch', 'chapter-beyond', 'chapter-work', 'chapter-education', 'chapter-contact'];
  const HEADINGS = ['#hero .hero-title', '#bmw-chapter .slate-org', '#chapter-bosch .slate-org', '#chapter-beyond .slate-org',
    '#chapter-work .slate-org', '#chapter-education .slate-org', '#chapter-contact .finale-title'];
  // Where each chapter is best seen, as progress through its own scroll range:
  // BMW lit with its slate in, Bosch's display booted under its slate, the
  // introduction beside the portrait, the shelf settled, the credential in.
  const LAND_P = [0, 0.41, 0.35, 0.34, 0.42, 0.5, 1];
  const ACCENT = ['#e2a24e', '#6db2ff', '#ff5a4e', '#e8b566', '#f4cf8e', '#e8b566', '#f4cf8e'];

  /* ---- the dial's constants ---- */
  const STEP = 15;          // degrees between detents on the wheel
  const LAST = 6;
  const MAX = STEP * LAST;  // 90°
  const IDX = 50;           // the fixed index, in degrees from 9 o'clock towards 12
  const K_ALPHA = 60;       // where the knob sits on the open wheel's grip band
  const R = { grip: 132, rim: 182, label: 216, readout: 282, tick: 173, index: 191, scrim: 470 };
  const MOUSE_PIVOT = 46;
  const NOTCH_A = 0.55;
  const RUBBER_MAX = 10, RUBBER_SOFT = 16;
  const SLOP_TOUCH = 6, SLOP_OPEN = 4, SLOP_MOUSE = 3, TAP_MS = 320, HOLD_MS = 280;
  const VEL_WINDOW = 100, VEL_STALE = 60, VEL_CAP = 720, FLING_MIN = 120, FLING_LAMBDA = 8;
  const COAST_MIN = 4, COAST_MAX = 16;
  const SEAT_ZETA = 0.7, SEAT_WN = 14, SEAT_OVERSHOOT = 2.5;
  const FOLLOW_WN = 16, GLIDE_WN = 6.5, VMAX_STAGE = 4.5, GLIDE_MAX_DETENTS = 1.5;
  const FLY_ON = 18.75, FLY_OFF = 11.25, DWELL_MS = 350, DWELL_SPEED = 20;
  const VEIL_IN = 180, VEIL_OUT = 380, VEIL_CAP = 900, CALM_FRAME = 34;
  const HOVER_INTENT = 120, LEAVE_COLLAPSE = 600, TOUCH_IDLE = 2200, SCROLL_COLLAPSE = 600, ARRIVE_COLLAPSE = 700;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rad = (d) => d * Math.PI / 180;
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (error) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (error) { /* private mode */ } },
  };

  /* ---- landings: page position of each chapter's detent ---- */
  let L = [0, 1, 2, 3, 4, 5, 6];
  let landDirty = true;
  let gateY = Infinity;
  let stageH = innerHeight;
  const maxScroll = () => (typeof ScrollTrigger !== 'undefined'
    ? ScrollTrigger.maxScroll(window)
    : Math.max(0, root.scrollHeight - innerHeight));
  function anchorY(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    return el.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(el).scrollMarginTop) || 0);
  }
  function rangeY(sectionId, p) {
    const range = document.getElementById(sectionId)?._sceneRange;
    if (!range || !Number.isFinite(range.start) || !Number.isFinite(range.end) || range.end <= range.start) return null;
    return range.start + p * (range.end - range.start);
  }
  function landings() {
    if (!landDirty) return L;
    landDirty = false;
    const max = maxScroll();
    const out = [0];
    for (let k = 1; k <= LAST; k += 1) {
      let y;
      if (k === LAST) y = rangeY(SECTIONS[k], 0) !== null ? max : anchorY(HASHES[k]);
      else y = reduce.matches ? anchorY(HASHES[k]) : (rangeY(SECTIONS[k], LAND_P[k]) ?? anchorY(HASHES[k]));
      out.push(clamp(y ?? max, 0, max));
    }
    for (let k = 1; k <= LAST; k += 1) out[k] = Math.max(out[k], out[k - 1] + 1);
    L = out;
    gateY = window.WorksPlayer?.gateY?.() ?? Infinity;
    stageH = innerHeight;
    return L;
  }
  // Page position for a wheel angle, and the angle for a page position:
  // straight lines between the detents.
  function Y(theta) {
    const l = landings();
    const u = clamp(theta, 0, MAX) / STEP;
    const k = Math.min(LAST - 1, Math.floor(u));
    return l[k] + (l[k + 1] - l[k]) * (u - k);
  }
  function Theta(y) {
    const l = landings();
    if (y <= l[0]) return 0;
    for (let k = 0; k < LAST; k += 1) {
      if (y < l[k + 1]) return STEP * (k + (y - l[k]) / (l[k + 1] - l[k]));
    }
    return MAX;
  }

  // Whether the scene between two chapters is ready to be scrubbed through
  // (its shaders compiled, its assets in). Unready spans are cut through.
  function spanReady(k) {
    if (k === 0) { const h = window.HeroIntroState; return !h || h.completed || !!h.fallback; }
    if (k === 1) { const b = window.BMWBridgeState; return !b || b.ready; }
    if (k === 2) return !root.classList.contains('has-story') || !!window.PortraitState?.ready || !window.PortraitState;
    if (k === 3) return !root.classList.contains('has-story') || window.HiWiLabState?.warmed === true;
    return true;
  }
  function pathReady(a, b) {
    const lo = Math.floor(Math.min(a, b) / STEP + 1e-6);
    const hi = Math.ceil(Math.max(a, b) / STEP - 1e-6);
    for (let k = lo; k < hi; k += 1) if (!spanReady(k)) return false;
    return true;
  }

  /* ---- geometry: one read per open / pointer-down / refresh ---- */
  let s = 1;
  const K = { x: 0, y: 0 };
  const P = { x: 0, y: 0 };
  function scale() {
    if (landscapePhone.matches) return clamp(innerHeight / 440, 0.76, 0.92);
    if (innerWidth <= 720) return clamp(innerWidth / 390, 0.9, 1.08);
    return innerWidth >= 1440 ? 1.2 : 1.12;
  }
  function measure() {
    s = scale();
    const r = knob.getBoundingClientRect();
    K.x = r.left + r.width / 2;
    K.y = r.top + r.height / 2;
    // Under a thumb the hub sits past the corner, so the thumb is on the grip
    // band; with a mouse it comes on screen, and the wheel shows more of itself.
    const reach = finePointer.matches && innerWidth > 720 ? MOUSE_PIVOT : R.grip;
    P.x = K.x + reach * s * Math.cos(rad(K_ALPHA));
    P.y = K.y + reach * s * Math.sin(rad(K_ALPHA));
    dial.style.setProperty('--s', s.toFixed(3));
    dial.style.setProperty('--px', `${P.x.toFixed(1)}px`);
    dial.style.setProperty('--py', `${P.y.toFixed(1)}px`);
    const box = Math.min(innerWidth, 640 * s);
    const boxH = Math.min(innerHeight, 640 * s);
    dial.style.setProperty('--scrim-w', `${box.toFixed(0)}px`);
    dial.style.setProperty('--scrim-h', `${boxH.toFixed(0)}px`);
    dial.style.setProperty('--scrim-x', `${(P.x - (innerWidth - box)).toFixed(1)}px`);
    dial.style.setProperty('--scrim-y', `${(P.y - (innerHeight - boxH)).toFixed(1)}px`);
    const a = rad(IDX);
    if (readout) readout.style.transform = `translate3d(${(P.x - R.readout * s * Math.cos(a)).toFixed(1)}px, ${(P.y - R.readout * s * Math.sin(a)).toFixed(1)}px, 0) translate(-100%, -100%)`;
  }

  /* ---- state ---- */
  let shown = false;
  let open = false;
  let pinned = false;
  let theta = 0;          // the wheel's angle, degrees (0 = Intro, 90 = Contact)
  let omega = 0;          // its angular velocity, degrees per second
  let target = null;      // the detent it is seating into, in degrees
  let motion = 'idle';    // idle · drag · coast · seat · sweep
  let owner = 'page';     // page: the dial follows the page; dial: the page follows the dial
  let thetaPage = 0;
  let current = -1;       // chapter shown on the knob
  let detent = -1;        // detent under the index while turning
  let page = 'none';      // none · follow · glide · cut · arrive
  let yw = window.scrollY, vy = 0, yGoal = 0, goalK = 0, goalSource = 'pointer', lastWritten = -1;
  let flying = false, dwellSince = 0, arriveAt = 0, unlockedGate = false;
  let gesture = null;
  let suppressClick = false;
  let previewing = false;
  let wheelPending = null, wheelTimer = 0, wheelAcc = 0, wheelLastStep = 0, wheelLastEvent = 0;
  let hoverTimer = 0, leaveTimer = 0, idleTimer = 0, arriveTimer = 0, scrollTimer = 0;
  let lastHaptic = 0, hapticsThisGesture = 0, endBuzzed = false;
  let rotorShown = NaN;
  let pendingAfterRefresh = null;
  let userScrolled = false;
  const loadedAt = performance.now();

  const usable = () => shown && !root.classList.contains('is-player-open');
  const travelling = () => page === 'glide' || page === 'cut';

  /* ---- haptics (Android; iOS has none, so every detent is also visual) ---- */
  function buzz(pattern, pointerType) {
    if (pointerType !== 'touch' || !('vibrate' in navigator)) return;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;
    const now = performance.now();
    if (now - lastHaptic < 45 || hapticsThisGesture >= 10) return;
    lastHaptic = now;
    hapticsThisGesture += 1;
    try { navigator.vibrate(pattern); } catch (error) { /* not allowed */ }
  }

  /* ---- writing the dial: transforms and opacity only ---- */
  function setCurrent(k, fromDial) {
    if (k === current) return;
    current = k;
    dial.style.setProperty('--dial-accent', ACCENT[k]);
    mark?.style.setProperty('--mark-accent', ACCENT[k]);
    odo.style.setProperty('--k', k);
    bezelTicks.forEach((tick, i) => tick.classList.toggle('is-on', i === k));
    labels.forEach((link, i) => {
      if (i === k) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (nowText) nowText.textContent = `0${k} ${NAMES[k]}`;
    if (!fromDial) maybeCoach(k);
  }
  function setDetent(k, pointerType) {
    if (k === detent) return;
    const first = detent < 0;
    detent = k;
    labels.forEach((link, i) => link.classList.toggle('is-current', i === k));
    wheelTicks.forEach((tick, i) => tick.classList.toggle('is-on', i === k));
    roles.forEach((role, i) => role.classList.toggle('is-on', i === k));
    if (first || !open) return;
    indexMark?.classList.remove('is-kick');
    void indexMark?.offsetWidth;
    indexMark?.classList.add('is-kick');
    buzz(8, pointerType);
    if (preview && !preview.hidden && previewOn()) fillPreview(k);
  }
  function writeRotor(angle) {
    const rho = -135 + 3 * clamp(angle, -12, MAX + 12);
    if (Math.abs(rho - rotorShown) < 0.1) return;
    rotorShown = rho;
    knobRotor.style.transform = `rotate(${rho.toFixed(2)}deg)`;
  }
  function writeWheel() {
    if (!open) return;
    wheelRotor.style.transform = `rotate(${theta.toFixed(2)}deg)`;
    const settled = motion === 'idle';
    labels.forEach((link, k) => {
      const alpha = IDX + theta - STEP * k;
      const off = Math.abs(alpha - IDX);
      const opacity = off <= 4 ? 1 : Math.max(0, 1 - (off - 4) / 38);
      if (opacity <= 0.001) {
        if (link._o !== 0) { link._o = 0; link.style.opacity = '0'; link.style.visibility = 'hidden'; }
        return;
      }
      const a = rad(alpha);
      let x = P.x - R.label * s * Math.cos(a);
      let y = P.y - R.label * s * Math.sin(a);
      if (settled) { x = Math.round(x); y = Math.round(y); }
      const tx = -50 - 50 * Math.cos(a);
      const ty = -50 - 50 * Math.sin(a);
      // The chapter at the index grows a little as it arrives.
      const grow = 1 + 0.1 * Math.max(0, 1 - off / 10);
      link.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(${tx.toFixed(1)}%, ${ty.toFixed(1)}%) scale(${grow.toFixed(3)})`;
      if (link._o === 0) link.style.visibility = '';
      link._o = opacity;
      link.style.opacity = opacity.toFixed(3);
      const reachable = opacity >= 0.25;
      if (reachable !== link._reach) { link._reach = reachable; link.classList.toggle('is-reachable', reachable); }
    });
  }
  function render() {
    const angle = owner === 'dial' || motion !== 'idle' ? theta : thetaPage;
    if (motion !== 'sweep') writeRotor(angle);
    const k = clamp(Math.round(angle / STEP), 0, LAST);
    if (owner === 'dial') { setCurrent(k, true); setDetent(k, gesture?.type); }
    if (open) writeWheel();
  }

  /* ---- following the page ---- */
  function chapterFor(t) {
    // Hysteresis: the number changes three quarters of the way to the next
    // chapter, and back again only below seventy percent.
    const u = t / STEP;
    let k = current < 0 ? clamp(Math.floor(u + 0.25), 0, LAST) : current;
    if (u - k >= 0.75) k = clamp(Math.floor(u + 0.25), 0, LAST);
    else if (u < k - 0.3) k = clamp(Math.floor(u + 0.3), 0, LAST);
    return k;
  }
  function syncFromPage(y) {
    thetaPage = Theta(y);
    if (owner !== 'page') return;
    if (motion === 'idle') theta = thetaPage;
    const k = chapterFor(thetaPage);
    setCurrent(k, false);
    if (open && motion === 'idle') setDetent(clamp(Math.round(thetaPage / STEP), 0, LAST));
    render();
  }
  const pageY = () => (window.SceneKit?.scrollPosition ? window.SceneKit.scrollPosition() : window.scrollY);
  window.addEventListener('sceneclock', () => { if (shown) syncFromPage(pageY()); });
  // Without the scene clock (reduced motion, or GSAP unavailable) the dial
  // reads the scroll position sampled before any scene writes.
  let rawY = window.scrollY, rawFrame = 0;
  window.addEventListener('scroll', () => {
    rawY = window.scrollY;
    if (travelling() && page === 'glide' && Math.abs(rawY - lastWritten) > 2) takeOver();
    if (open && !gesture && !travelling() && owner === 'page') {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => collapse(), SCROLL_COLLAPSE);
    }
    if (window.SceneKit?.scrollPosition || rawFrame) return;
    rawFrame = requestAnimationFrame(() => { rawFrame = 0; if (shown) syncFromPage(rawY); });
  }, { passive: true, capture: true });
  ['wheel', 'touchstart', 'keydown'].forEach((type) => window.addEventListener(type, (event) => {
    if (event.target?.closest?.('.dial')) return;
    userScrolled = true;
    if (travelling() && !gesture) takeOver();
  }, { passive: true, capture: true }));

  /* ---- the frame loop: runs only while something moves ---- */
  let running = false, lastT = 0, rafId = 0;
  const useTicker = () => typeof gsap !== 'undefined' && gsap.ticker;
  function wake() {
    if (running) return;
    running = true;
    lastT = performance.now();
    if (useTicker()) gsap.ticker.add(frame, false, true);
    else rafId = requestAnimationFrame(rafFrame);
  }
  function sleep() {
    if (!running) return;
    running = false;
    if (useTicker()) gsap.ticker.remove(frame);
    else cancelAnimationFrame(rafId);
  }
  function rafFrame() { frame(); if (running && !useTicker()) rafId = requestAnimationFrame(rafFrame); }
  function frame() {
    const now = performance.now();
    const dt = clamp((now - lastT) / 1000, 0, 0.032);
    lastT = now;
    stepWheel(dt);
    stepPage(dt, now);
    render();
    if (owner === 'dial') window.SceneIdle?.note?.();
    if (motion === 'idle' && page === 'none' && !gesture) {
      if (owner === 'dial' && !previewing && wheelPending === null) owner = 'page';
      sleep();
    }
  }

  function stepWheel(dt) {
    if (motion === 'coast') {
      const gap = target - theta;
      if (Math.abs(gap) < 1.5 || Math.abs(omega) < 40 || Math.sign(gap) !== Math.sign(omega)) { motion = 'seat'; }
      else {
        const lambda = clamp(Math.abs(omega) / Math.abs(gap), COAST_MIN, COAST_MAX);
        omega *= Math.exp(-lambda * dt);
        theta += omega * dt;
      }
    }
    if (motion === 'seat') {
      if (reduce.matches) { theta = target; omega = 0; motion = 'idle'; return; }
      const sub = 1 / 240;
      let left = dt;
      while (left > 0) {
        const h = Math.min(sub, left);
        const a = -SEAT_WN * SEAT_WN * (theta - target) - 2 * SEAT_ZETA * SEAT_WN * omega;
        omega += a * h;
        theta += omega * h;
        left -= h;
      }
      // A ball detent clicks in: a little overshoot, never a wobble.
      if (Math.abs(theta - target) > SEAT_OVERSHOOT && Math.sign(theta - target) === Math.sign(omega)) {
        theta = target + Math.sign(theta - target) * SEAT_OVERSHOOT;
        omega *= -0.3;
      }
      if (Math.abs(theta - target) < 0.05 && Math.abs(omega) < 2) {
        theta = target; omega = 0; motion = 'idle';
      }
    }
  }

  function writeScroll(y) {
    const max = maxScroll();
    const v = Math.round(clamp(y, 0, max));
    if (v === lastWritten && Math.abs(window.scrollY - v) < 1) return;
    // The dial is navigation: travelling past the lab's gate opens it, just
    // as a chapter link does (js/works.js).
    if (!unlockedGate && window.WorksPlayer && v > (window.WorksPlayer.gateY?.() ?? Infinity) - 2) {
      unlockedGate = true;
      if (window.WorksPlayer.isGated?.()) buzz([8, 40, 8], gesture?.type);
      window.WorksPlayer.unlock?.();
    }
    lastWritten = v;
    window.scrollTo(0, v);
  }
  function spring(goal, dt, wn) {
    const vmax = VMAX_STAGE * stageH;
    let left = dt;
    while (left > 0) {
      const h = Math.min(1 / 120, left);
      const a = wn * wn * (goal - yw) - 2 * wn * vy;
      vy = clamp(vy + a * h, -vmax, vmax);
      yw += vy * h;
      left -= h;
    }
  }
  function stepPage(dt, now) {
    if (page === 'follow') {
      if (!gesture) return;
      const want = clamp(theta, 0, MAX);
      const gap = Math.abs(want - Theta(yw));
      const ready = pathReady(Theta(yw), want);
      if (!flying && (gap > FLY_ON || !ready)) { flying = true; dwellSince = now; showPreview(true); }
      else if (flying && gap < FLY_OFF && ready) { flying = false; showPreview(false); }
      if (flying) {
        // Holding still on a chapter while the page waits: go there now.
        if (Math.abs(gesture.speed || 0) < DWELL_SPEED) {
          if (now - dwellSince > DWELL_MS) { dwellSince = now; cutTo(Y(want), { live: true }); }
        } else dwellSince = now;
        return;
      }
      spring(Y(want), dt, FOLLOW_WN);
      writeScroll(yw);
      return;
    }
    if (page === 'glide') {
      spring(yGoal, dt, GLIDE_WN);
      if (Math.abs(yw - yGoal) < 0.6 && Math.abs(vy) < 6) { yw = yGoal; vy = 0; writeScroll(yw); arrive(); return; }
      writeScroll(yw);
      return;
    }
    if (page === 'arrive') {
      const caught = Math.abs(pageY() - yGoal) < 1 || now - arriveAt > 1200;
      if (caught && motion === 'idle') { page = 'none'; owner = 'page'; syncFromPage(pageY()); }
    }
  }

  /* ---- committing a move: glide to a neighbour, cut through black for more ---- */
  function commit(k, { source = 'pointer', cut = false } = {}) {
    k = clamp(k, 0, LAST);
    landings();
    owner = 'dial';
    goalK = k;
    goalSource = source;
    yGoal = L[k];
    unlockedGate = false;
    const from = window.scrollY;
    yw = page === 'glide' || page === 'follow' ? yw : from;
    if (page !== 'glide' && page !== 'follow') vy = 0;
    const distance = Math.abs(k - Theta(from) / STEP);
    showPreview(false);
    flying = false;
    if (reduce.matches) {
      writeScroll(yGoal);
      yw = yGoal;
      window.SceneKit?.settle?.();
      arrive();
      return;
    }
    if (!cut && distance <= GLIDE_MAX_DETENTS && pathReady(Theta(from), k * STEP)) {
      page = 'glide';
      wake();
      return;
    }
    cutTo(yGoal, { live: false });
  }
  let cutToken = 0;
  // An interrupted cut never leaves the screen black.
  function cancelCut() {
    cutToken += 1;
    if (!veil.classList.contains('is-on')) return;
    const fade = veil.animate([{ opacity: Number(getComputedStyle(veil).opacity) || 1 }, { opacity: 0 }], { duration: VEIL_OUT, easing: 'cubic-bezier(0,0,.2,1)', fill: 'forwards' });
    const token = cutToken;
    fade.finished.catch(() => {}).then(() => { if (token === cutToken) veil.classList.remove('is-on'); });
  }
  function cutTo(y, { live }) {
    const token = ++cutToken;
    const previous = page;
    page = live ? previous : 'cut';
    if (!live) wake();
    const fadeIn = veil.animate([{ opacity: 0 }, { opacity: 1 }], { duration: reduce.matches ? 0 : VEIL_IN, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
    veil.classList.add('is-on');
    fadeIn.finished.catch(() => {}).then(() => {
      if (token !== cutToken) return;
      writeScroll(y);
      yw = y; vy = 0;
      window.SceneKit?.settle?.();
      // First draws and shader work happen under the veil: wait for two calm frames.
      const t0 = performance.now();
      let calm = 0, last = t0;
      const watch = (t) => {
        if (token !== cutToken) return;
        calm = t - last < CALM_FRAME ? calm + 1 : 0;
        last = t;
        if (calm >= 2 || t - t0 > VEIL_CAP) {
          const fadeOut = veil.animate([{ opacity: 1 }, { opacity: 0 }], { duration: VEIL_OUT, easing: 'cubic-bezier(0,0,.2,1)', fill: 'forwards' });
          fadeOut.finished.catch(() => {}).then(() => { if (token === cutToken) veil.classList.remove('is-on'); });
          if (!live && page === 'cut') arrive();
          return;
        }
        requestAnimationFrame(watch);
      };
      requestAnimationFrame(watch);
    });
  }
  function arrive() {
    page = 'arrive';
    arriveAt = performance.now();
    wake();
    try { history.replaceState(null, '', goalK === 0 ? location.pathname + location.search : `#${HASHES[goalK]}`); } catch (error) { /* file:// may refuse */ }
    if (goalSource === 'keyboard') {
      const heading = document.querySelector(HEADINGS[goalK]);
      heading?.focus({ preventScroll: true });
    } else if (live) {
      live.textContent = `Now at 0${goalK} ${NAMES[goalK]}`;
    }
    clearTimeout(arriveTimer);
    arriveTimer = setTimeout(() => { if (!gesture && !pinned) collapse(); }, ARRIVE_COLLAPSE);
  }
  function takeOver() {
    cancelCut();
    page = 'none';
    vy = 0;
    flying = false;
    showPreview(false);
    if (motion === 'coast' || motion === 'seat') { motion = 'idle'; omega = 0; }
    owner = 'page';
    syncFromPage(pageY());
  }

  /* ---- turning the wheel to a chapter ---- */
  function seatTo(k, velocity = 0) {
    target = clamp(k, 0, LAST) * STEP;
    omega = velocity;
    motion = reduce.matches ? 'idle' : (Math.abs(velocity) >= FLING_MIN ? 'coast' : 'seat');
    if (reduce.matches) theta = target;
    owner = 'dial';
    wake();
  }
  function go(k, { source = 'pointer', cut = false } = {}) {
    if (!usable() && source !== 'hash') return;
    k = clamp(k, 0, LAST);
    if (owner === 'page') theta = thetaPage;
    seatTo(k);
    commit(k, { source, cut });
    markUsed();
  }

  /* ---- opening and closing the wheel ---- */
  const parts = [wheel, scrim, readout].filter(Boolean);
  let hideTimer = 0;
  function bloom(reason) {
    if (!usable()) return;
    clearTimeout(idleTimer);
    clearTimeout(leaveTimer);
    if (open) return;
    open = true;
    clearTimeout(hideTimer);
    measure();
    if (owner === 'page' && motion === 'idle') theta = thetaPage;
    parts.forEach((el) => { el.hidden = false; });
    detent = -1;
    setDetent(clamp(Math.round(theta / STEP), 0, LAST));
    writeWheel();
    knob.setAttribute('aria-expanded', 'true');
    labels.forEach((link) => { link.tabIndex = 0; });
    void dial.offsetWidth;
    dial.classList.add('is-open', 'is-blooming');
    setTimeout(() => dial.classList.remove('is-blooming'), 320);
    document.addEventListener('pointerdown', outside, { capture: true, passive: true });
    if (reason === 'tap') touchIdle();
    hideCoach();
  }
  function collapse(force = false) {
    if (!open) return;
    if (!force && (gesture || travelling() || keyboardFocusInside())) return;
    open = false;
    pinned = false;
    previewing = false;
    clearTimeout(idleTimer);
    clearTimeout(leaveTimer);
    dial.classList.remove('is-open', 'is-pinned');
    knob.setAttribute('aria-expanded', 'false');
    labels.forEach((link) => { link.tabIndex = -1; });
    document.removeEventListener('pointerdown', outside, { capture: true });
    showPreview(false);
    hideTimer = setTimeout(() => { if (!open) parts.forEach((el) => { el.hidden = true; }); }, 300);
    if (owner === 'dial' && page === 'none' && wheelPending === null && motion !== 'drag') {
      owner = 'page';
      motion = 'idle';
      theta = thetaPage;
      render();
    }
  }
  // Keyboard focus inside the dial keeps it open; a click's focus does not.
  function keyboardFocusInside() {
    const el = document.activeElement;
    return !!(el && el !== knob && dial.contains(el) && el.matches?.(':focus-visible'));
  }
  function outside(event) {
    if (!dial.contains(event.target)) collapse();
  }
  function touchIdle() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { if (!pinned) collapse(); }, TOUCH_IDLE);
  }

  /* ---- preview card (desktop) ---- */
  const previewOn = () => finePointer.matches && innerWidth >= 900;
  function fillPreview(k) {
    if (!preview) return;
    const img = preview.querySelector('img');
    const src = `assets/dial/0${k}.webp`;
    if (!img.getAttribute('src')?.endsWith(src)) img.src = src;
    preview.querySelector('b').textContent = `0${k}`;
    preview.querySelector('strong').textContent = NAMES[k];
    preview.querySelector('span').textContent = ROLES[k];
  }
  function showPreview(on) {
    if (!preview) return;
    if (on && !previewOn()) return;
    if (on) {
      fillPreview(clamp(Math.round(theta / STEP), 0, LAST));
      preview.hidden = false;
      void preview.offsetWidth;
      preview.classList.add('is-on');
    } else if (preview.classList.contains('is-on')) {
      preview.classList.remove('is-on');
      setTimeout(() => { if (!preview.classList.contains('is-on')) preview.hidden = true; }, 220);
    }
  }

  /* ---- pointer input ---- */
  function tangentDelta(x0, y0, x1, y1) {
    const vx = x1 - P.x, vyv = y1 - P.y;
    const len = Math.hypot(vx, vyv) || 1;
    const r = Math.max(len, 90 * s);
    // The clockwise tangent: forward is a thumb pushing up or to the right.
    const tx = -vyv / len, ty = vx / len;
    return ((x1 - x0) * tx + (y1 - y0) * ty) / r * 180 / Math.PI;
  }
  function shape(phi) {
    if (phi < 0) return -RUBBER_MAX * Math.tanh(-phi / RUBBER_SOFT);
    if (phi > MAX) return MAX + RUBBER_MAX * Math.tanh((phi - MAX) / RUBBER_SOFT);
    // The notch: the wheel lags the finger near a detent and falls into the
    // next one between them, so each chapter is felt as a click.
    const u = phi / STEP, n = Math.round(u), f = u - n;
    return STEP * (n + f - (NOTCH_A / (2 * Math.PI)) * Math.sin(2 * Math.PI * f));
  }
  function velocity(samples, now) {
    const recent = samples.filter(([t]) => now - t <= VEL_WINDOW);
    if (recent.length < 3 || now - recent[recent.length - 1][0] > VEL_STALE) return 0;
    const n = recent.length;
    const mt = recent.reduce((a, [t]) => a + t, 0) / n;
    const mp = recent.reduce((a, [, p]) => a + p, 0) / n;
    let num = 0, den = 0;
    recent.forEach(([t, p]) => { num += (t - mt) * (p - mp); den += (t - mt) * (t - mt); });
    return den > 0 ? clamp(num / den * 1000, -VEL_CAP, VEL_CAP) : 0;
  }

  function onDown(event) {
    if (!event.isPrimary || event.button > 0 || !usable()) return;
    const onKnob = event.target.closest('.dial-knob');
    const onLabel = event.target.closest('.dial-label');
    const onWheel = event.target.closest('.dial-wheel');
    if (!onKnob && !onLabel && !onWheel) return;
    if (!open && !onKnob) return;
    event.stopPropagation();
    measure();
    hapticsThisGesture = 0;
    endBuzzed = false;
    // Catch the dial mid-spin or mid-glide: it stops where it is.
    if (motion === 'coast' || motion === 'seat' || motion === 'sweep') { motion = 'idle'; omega = 0; }
    if (travelling()) { cancelCut(); page = 'none'; vy = 0; }
    if (owner === 'page') theta = thetaPage;
    clearTimeout(idleTimer);
    gesture = {
      id: event.pointerId, type: event.pointerType || 'mouse', x0: event.clientX, y0: event.clientY,
      x: event.clientX, y: event.clientY, t0: performance.now(), engaged: false, grabbed: false,
      onKnob: !!onKnob, onLabel: onLabel ? Number(onLabel.dataset.k) : -1, phi: theta,
      samples: [[performance.now(), theta]], speed: 0, hold: 0,
    };
    if (onKnob && !open) {
      dial.classList.add('is-pressed');
      if (gesture.type !== 'mouse') {
        gesture.hold = setTimeout(() => {
          if (!gesture || gesture.engaged) return;
          gesture.grabbed = true;
          suppressClick = true;
          bloom('hold');
          buzz(6, gesture.type);
        }, HOLD_MS);
      }
    }
  }
  function engage() {
    const g = gesture;
    g.engaged = true;
    clearTimeout(g.hold);
    if (!open) bloom('drag');
    try { wheel.setPointerCapture(g.id); } catch (error) { /* already released */ }
    dial.classList.add('is-dragging');
    dial.classList.remove('is-pressed');
    unlockedGate = false;
    motion = 'drag';
    owner = 'dial';
    page = 'follow';
    flying = false;
    yw = window.scrollY;
    vy = 0;
    markUsed();
    wake();
  }
  function onMove(event) {
    const g = gesture;
    if (!g || event.pointerId !== g.id) return;
    event.stopPropagation();
    const list = event.getCoalescedEvents ? event.getCoalescedEvents() : null;
    const points = list && list.length ? list : [event];
    for (const p of points) {
      if (!g.engaged) {
        const dx = p.clientX - g.x0, dy = p.clientY - g.y0;
        const slop = g.type === 'mouse' ? SLOP_MOUSE : (open || g.grabbed ? SLOP_OPEN : SLOP_TOUCH);
        if (Math.hypot(dx, dy) < slop) continue;
        // A vertical swipe that starts on the closed knob is a page scroll.
        if (!open && !g.grabbed && g.type !== 'mouse' && Math.abs(dy) > Math.abs(dx)) {
          abandon();
          return;
        }
        engage();
        g.x = g.x0; g.y = g.y0;
      }
      const d = tangentDelta(g.x, g.y, p.clientX, p.clientY);
      g.x = p.clientX; g.y = p.clientY;
      g.phi += d;
      const t = p.timeStamp || performance.now();
      g.samples.push([t, g.phi]);
      while (g.samples.length > 2 && t - g.samples[0][0] > 160) g.samples.shift();
    }
    if (!g.engaged) return;
    const now = performance.now();
    g.speed = velocity(g.samples, now);
    if ((g.phi < -2 || g.phi > MAX + 2) && !endBuzzed) { endBuzzed = true; buzz(14, g.type); }
    theta = shape(g.phi);
    wake();
  }
  function abandon() {
    if (!gesture) return;
    clearTimeout(gesture.hold);
    gesture = null;
    dial.classList.remove('is-pressed', 'is-dragging');
  }
  function onUp(event) {
    const g = gesture;
    if (!g || event.pointerId !== g.id) return;
    clearTimeout(g.hold);
    gesture = null;
    dial.classList.remove('is-pressed', 'is-dragging');
    try { wheel.releasePointerCapture?.(g.id); } catch (error) { /* fine */ }
    if (!g.engaged) {
      if (g.grabbed) touchIdle();
      else if (!g.onKnob && g.onLabel < 0 && g.type !== 'mouse') touchIdle();
      return; // a tap: the click that follows opens, toggles or travels
    }
    suppressClick = true;
    setTimeout(() => { suppressClick = false; }, 400);
    if (event.type === 'pointercancel') {
      seatTo(Math.round(clamp(theta, 0, MAX) / STEP));
      page = 'none';
      flying = false;
      showPreview(false);
      if (g.type !== 'mouse') touchIdle();
      return;
    }
    release(velocity(g.samples, performance.now()), g.type);
    if (g.type !== 'mouse') touchIdle();
  }
  function release(w, type) {
    const u = clamp(theta, 0, MAX) / STEP;
    let k;
    if (Math.abs(w) < FLING_MIN) {
      k = Math.round(u);
      const n = Math.floor(u), frac = u - n;
      if (Math.abs(w) >= 15) {
        if (w > 0 && frac > 0.3) k = n + 1;
        if (w < 0 && frac < 0.7) k = n;
      }
    } else {
      k = Math.round((clamp(theta, 0, MAX) + w / FLING_LAMBDA) / STEP);
      k = w > 0 ? Math.max(k, Math.floor(u) + 1) : Math.min(k, Math.ceil(u) - 1);
    }
    k = clamp(k, 0, LAST);
    flying = false;
    showPreview(false);
    seatTo(k, Math.abs(w) >= FLING_MIN ? w : 0);
    commit(k, { source: 'pointer' });
    hapticsThisGesture = 0;
    void type;
  }

  dial.addEventListener('pointerdown', onDown);
  dial.addEventListener('pointermove', onMove);
  dial.addEventListener('pointerup', onUp);
  dial.addEventListener('pointercancel', onUp);
  dial.addEventListener('contextmenu', (event) => event.preventDefault());
  // Scene listeners on window (smoke, stars, the hero's tilt) never see a turn.
  ['pointermove', 'touchstart', 'touchmove'].forEach((type) => dial.addEventListener(type, (event) => event.stopPropagation(), { passive: true }));
  // Once a thumb has grabbed the dial, the page must not pan underneath it.
  [knob, wheel].forEach((el) => el.addEventListener('touchmove', (event) => {
    if (gesture && (gesture.engaged || gesture.grabbed) && event.cancelable) event.preventDefault();
  }, { passive: false }));

  /* ---- clicks: the knob, and the chapter links ---- */
  knob.addEventListener('click', (event) => {
    if (suppressClick) { suppressClick = false; return; }
    if (!usable()) return;
    if (event.detail === 0) {
      // Keyboard: open and put focus on the current chapter.
      bloom('key');
      labels[clamp(current, 0, LAST)]?.focus({ preventScroll: true });
      return;
    }
    if (finePointer.matches) {
      if (open && pinned) { collapse(true); return; }
      bloom('click');
      pinned = true;
      dial.classList.add('is-pinned');
      return;
    }
    if (open) collapse(true);
    else bloom('tap');
  });
  labels.forEach((link, k) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (suppressClick) { suppressClick = false; return; }
      previewing = false;
      const source = event.detail === 0 ? 'keyboard' : 'pointer';
      go(k, { source });
      if (source === 'pointer') link.blur();
      if (!finePointer.matches) touchIdle();
    });
    link.addEventListener('focus', () => {
      // Only keyboard focus previews; a click or tap goes straight there.
      if (!usable() || !link.matches(':focus-visible')) return;
      if (!open) bloom('focus');
      if (gesture) return;
      // Keyboard preview: the wheel turns to the focused chapter; the page stays.
      if (owner === 'page') theta = thetaPage;
      previewing = true;
      seatTo(k);
      if (previewOn()) { fillPreview(k); showPreview(true); }
    });
  });
  // Arrow keys walk the list; Esc closes.
  dial.addEventListener('keydown', (event) => {
    const onKnobKey = event.target === knob;
    const k = onKnobKey ? clamp(current, 0, LAST) : Number(event.target.dataset?.k ?? current);
    let next = null;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = k + 1;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = k - 1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = LAST;
    else if (event.key === 'Escape' && open) {
      event.preventDefault();
      collapse(true);
      knob.focus({ preventScroll: true });
      return;
    }
    if (next === null) return;
    event.preventDefault();
    event.stopPropagation();
    if (onKnobKey && !open) bloom('key');
    labels[clamp(next, 0, LAST)].focus({ preventScroll: true });
  });
  dial.addEventListener('focusout', (event) => {
    if (dial.contains(event.relatedTarget)) return;
    previewing = false;
    showPreview(false);
    setTimeout(() => { if (!dial.contains(document.activeElement)) collapse(); }, 0);
  });

  /* ---- hover (mouse) ---- */
  const inside = (el) => !!(el && dial.contains(el) && el.closest('.dial-knob, .dial-wheel, .dial-label'));
  dial.addEventListener('pointerover', (event) => {
    if (event.pointerType !== 'mouse' || !inside(event.target)) return;
    clearTimeout(leaveTimer);
    if (!open && !hoverTimer) hoverTimer = setTimeout(() => { hoverTimer = 0; bloom('hover'); }, HOVER_INTENT);
  });
  dial.addEventListener('pointerout', (event) => {
    if (event.pointerType !== 'mouse' || inside(event.relatedTarget)) return;
    clearTimeout(hoverTimer);
    hoverTimer = 0;
    if (open && !pinned) leaveTimer = setTimeout(() => collapse(), LEAVE_COLLAPSE);
  });

  /* ---- the mouse wheel, over the open dial ---- */
  function wheelStep(dir) {
    const base = wheelPending ?? (owner === 'page' ? Math.round(thetaPage / STEP) : Math.round(clamp(theta, 0, MAX) / STEP));
    wheelPending = clamp(base + dir, 0, LAST);
    if (owner === 'page') theta = thetaPage;
    seatTo(wheelPending);
    if (previewOn()) { fillPreview(wheelPending); showPreview(true); }
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => {
      const k = wheelPending;
      wheelPending = null;
      showPreview(false);
      if (k !== null) commit(k, { source: 'pointer' });
    }, 160);
    markUsed();
  }
  dial.addEventListener('wheel', (event) => {
    if (!open || event.ctrlKey || !usable()) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    event.preventDefault();
    event.stopPropagation();
    const dy = event.deltaY * (event.deltaMode === 1 ? 33 : event.deltaMode === 2 ? innerHeight : 1);
    const now = performance.now();
    clearTimeout(leaveTimer);
    if (event.deltaMode !== 0 || Math.abs(dy) >= 50) {
      if (now - wheelLastStep < 70) return;
      wheelLastStep = now;
      wheelStep(Math.sign(dy));
      return;
    }
    if (now - wheelLastEvent > 220) wheelAcc = 0;
    wheelLastEvent = now;
    wheelAcc += dy;
    if (Math.abs(wheelAcc) >= 80 && now - wheelLastStep >= 180) {
      wheelLastStep = now;
      wheelStep(Math.sign(wheelAcc));
      wheelAcc = 0;
    }
  }, { passive: false });

  /* ---- arrival, first visit, and the coach ---- */
  function markUsed() {
    store.set('rm.dial.v1.used', '1');
    hideCoach();
  }
  let coachTimer = 0, coachShown = false;
  function maybeCoach(k) {
    if (k < 1 || coachShown || !coach || reduce.matches || store.get('rm.dial.v1.coached') || store.get('rm.dial.v1.used')) return;
    coachShown = true;
    const wait = () => {
      const idle = window.SceneIdle?.idleFor?.() ?? 2000;
      if (idle < 1200) { coachTimer = setTimeout(wait, 400); return; }
      if (open || !usable()) return;
      store.set('rm.dial.v1.coached', '1');
      coach.hidden = false;
      void coach.offsetWidth;
      coach.classList.add('is-on');
      coachTimer = setTimeout(hideCoach, 5000);
    };
    coachTimer = setTimeout(wait, 1200);
  }
  function hideCoach() {
    clearTimeout(coachTimer);
    if (!coach || coach.hidden) return;
    coach.classList.remove('is-on');
    setTimeout(() => { coach.hidden = true; }, 300);
  }
  // The ignition sweep: once ever, the needle sweeps the whole scale and
  // returns, like a gauge at start-up, so the knob reads as something that turns.
  function ignition() {
    if (reduce.matches || store.get('rm.dial.v1.swept') || window.scrollY > 0) return;
    if ((window.SceneIdle?.idleFor?.() ?? 1000) < 400) return;
    store.set('rm.dial.v1.swept', '1');
    motion = 'sweep';
    const t0 = performance.now();
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const back = MAX + 12;
    const step = (now) => {
      if (motion !== 'sweep') return;
      const t = now - t0;
      let a;
      if (t < 650) a = -12 + (back + 12) * ease(t / 650);
      else if (t < 730) a = back;
      else if (t < 1250) a = back + (thetaPage - back) * ease((t - 730) / 520);
      else { motion = 'idle'; rotorShown = NaN; render(); return; }
      rotorShown = NaN;
      knobRotor.style.transform = `rotate(${(-135 + 3 * a).toFixed(2)}deg)`;
      bezelTicks.forEach((tick, i) => tick.classList.toggle('is-lit', t < 1250 && a >= i * STEP - 2));
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    setTimeout(() => bezelTicks.forEach((tick) => tick.classList.remove('is-lit')), 1400);
  }

  /* ---- showing the dial once the opening has played ---- */
  function show() {
    if (shown) return;
    shown = true;
    landDirty = true;
    syncFromPage(pageY());
    dial.classList.add('is-shown');
    setTimeout(ignition, 560);
  }
  const t0 = performance.now();
  (function waitForIntro() {
    const intro = window.HeroIntroState;
    if (reduce.matches || !intro || intro.completed || intro.fallback || window.HeroStartupExpired || performance.now() - t0 > 4000) { show(); return; }
    setTimeout(waitForIntro, 150);
  })();
  window.addEventListener('herointrotimeout', show, { once: true });

  /* ---- the works player, refreshes, resizes, and hashes ---- */
  window.addEventListener('worksplayer', (event) => {
    const isOpen = !!event.detail?.open;
    dial.inert = isOpen;
    if (isOpen) {
      abandon();
      collapse(true);
      cancelCut();
      page = 'none';
      motion = 'idle';
      owner = 'page';
    } else {
      landDirty = true;
      syncFromPage(pageY());
    }
  });
  function invalidate() {
    landDirty = true;
    rotorShown = NaN;
    if (open) collapse(true);
  }
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.addEventListener('refreshInit', () => {
      if (travelling()) { pendingAfterRefresh = goalK; cancelCut(); page = 'none'; }
      invalidate();
    });
    ScrollTrigger.addEventListener('refresh', () => {
      landDirty = true;
      if (pendingAfterRefresh !== null) {
        const k = pendingAfterRefresh;
        pendingAfterRefresh = null;
        commit(k, { source: 'pointer', cut: true });
      } else if (shown && owner === 'page') syncFromPage(pageY());
      correctInitialHash();
    });
  }
  window.addEventListener('resize', () => { invalidate(); if (shown && owner === 'page') syncFromPage(pageY()); }, { passive: true });
  window.addEventListener('load', () => { landDirty = true; correctInitialHash(); }, { once: true });
  document.fonts?.ready.then(() => { landDirty = true; });

  // Arriving on index.html#bosch: once the scenes have measured themselves,
  // move from the anchor to the chapter's landing pose, without a veil.
  let hashCorrected = false;
  function correctInitialHash() {
    if (hashCorrected) return;
    const k = HASHES.indexOf(location.hash.slice(1));
    if (k <= 0) { hashCorrected = true; return; }
    if (typeof ScrollTrigger !== 'undefined' && !document.getElementById(SECTIONS[k])?._sceneRange && k < 4 && root.classList.contains('has-story')) return;
    hashCorrected = true;
    if (userScrolled || performance.now() - loadedAt > 4000) return;
    landDirty = true;
    window.scrollTo(0, landings()[k]);
    window.SceneKit?.settle?.();
    if (window.WorksPlayer?.isGated?.() && L[k] > gateY) window.WorksPlayer.unlock?.();
  }
  window.addEventListener('hashchange', () => {
    const k = HASHES.indexOf(location.hash.slice(1));
    if (k >= 0) go(k, { source: 'hash', cut: true });
  });

  // Headings receive focus after a keyboard journey.
  HEADINGS.forEach((selector) => {
    const heading = document.querySelector(selector);
    if (heading && !heading.hasAttribute('tabindex')) heading.tabIndex = -1;
  });

  labels.forEach((link) => { link.tabIndex = -1; });
  dial.classList.add('is-ready');
  if (reduce.matches) dial.classList.add('is-still');

  window.SiteDial = {
    go: (k, opts) => go(k, opts),
    goToHash(hash, opts = {}) {
      const k = HASHES.indexOf(String(hash).replace(/^#/, ''));
      if (k < 0) return false;
      if (!usable()) {
        landDirty = true;
        window.scrollTo(0, landings()[k]);
        return true;
      }
      go(k, opts);
      return true;
    },
    landingY: (k) => landings()[clamp(k, 0, LAST)],
    open: () => bloom('api'),
    close: () => collapse(true),
    get index() { return current; },
    get state() { return { open, motion, owner, page, theta, thetaPage, current, flying }; },
  };
})();
