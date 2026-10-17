(() => {
  /* ---------- The court: LoopShoot VR, made playable ----------
   * An optional game, never in the way: the page reads exactly as it does
   * without it. A small ball by the shelf's hint (and a "Play it here" ball in
   * LoopShoot VR's poster) opens it; the court irises open from the ball that
   * was tapped and fills the screen. The hoop is LoopShoot's own, seen
   * first-person in the poster's language: violet glass, an orange rim, a
   * perspective floor.
   *
   * The chapter dial deals the balls. A stream of light leaves the knob and
   * condenses into a ball in front of the visitor, who flicks it at the hoop:
   * the flick's speed is the power, its direction the aim, and a swipe that
   * hooks at the end puts sidespin on the ball, which bends in flight. The
   * flight is real physics at real scale (a 3.05 m rim, 0.229 m in radius, a
   * 0.12 m ball, released 2.8 m out): the ball can rattle in off the rim, bank
   * off the glass, or miss short, long or wide, and each shot says which.
   *
   * Three baskets finish the round: the third drops in slow motion, the
   * camera pushes into the rim, and the ring opens on to Education, the next
   * chapter, which is waiting behind it. The close button or Esc leaves at any
   * time, back to where the visitor was. The ball is a real button too (hold
   * Space or Enter to charge, arrows to aim).
   *
   * Difficulty: a perfect flick swishes, and errors grow from there; the game
   * slowly learns the visitor's own flick strength, and a run of misses widens
   * the window a little. Never guaranteed: a careless flick still misses.
   */
  const section = document.getElementById('chapter-court');
  const stage = section?.querySelector('.court__stage');
  const canvas = section?.querySelector('.court__canvas');
  const g = canvas?.getContext('2d');
  if (!section || !stage || !g) return;

  const root = document.documentElement;
  const ballButton = section.querySelector('.court__ball');
  const pips = [...section.querySelectorAll('.court__pip')];
  const count = section.querySelector('.court__count');
  const hintEl = section.querySelector('.court__hint');
  const closeButton = section.querySelector('.court__close');
  const live = section.querySelector('.court__live');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)');
  const feel = window.DialFeel || null;

  const NEED = 3;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const TAU = Math.PI * 2;

  /* ---- the world, in metres (x right, y up, z away from the visitor) ---- */
  const G = 9.81;
  const BALL_R = 0.12;
  const EYE = 1.6;
  const RIM = { x: 0, y: 3.05, z: 4.4, R: 0.229, tube: 0.011 };
  const BOARD = { z: 4.775, x0: -0.9, x1: 0.9, y0: 2.9, y1: 3.95 };
  const REST = { x: 0, y: 1.05, z: 1.6 };
  const ANGLE = 70 * Math.PI / 180;
  const RUN = RIM.z - REST.z;
  const RISE = RIM.y - REST.y;
  // The launch speed that drops a ball released at ANGLE through the rim's centre.
  const V_IDEAL = Math.sqrt(G * RUN * RUN / (2 * Math.cos(ANGLE) ** 2 * (RUN * Math.tan(ANGLE) - RISE)));
  const T_IDEAL = RUN / (V_IDEAL * Math.cos(ANGLE));
  const E_RIM = 0.52, MU_RIM = 0.1, E_BOARD = 0.6, E_FLOOR = 0.66;
  // From a flick to a launch: a perfect flick (power 1, straight at the rim)
  // is a swish; power errors grow the launch speed's error at `short` or
  // `long` per unit, and the aim's angle moves the shot `aim` m per radian.
  const TUNE = { centre: 1.005, short: 0.12, long: 0.2, aim: 0.42, curve: 1.1 };

  /* ---- layout and camera ------------------------------------------------- */
  let W = 0, H = 0, dpr = 1;
  const base = { f: 600, cx: 0, cy: 0 };
  const cam = { x: 0, y: EYE, z: 0, f: 600, cx: 0, cy: 0 };
  let vignette = null, glow = null;
  function layout() {
    W = stage.clientWidth || innerWidth;
    H = stage.clientHeight || innerHeight;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    const portrait = H > W * 1.1;
    const ballY = H * (portrait ? 0.79 : 0.8);
    const rimY = H * (portrait ? 0.38 : 0.36);
    const hb = EYE - REST.y, hr = RIM.y - EYE;
    base.f = Math.min((ballY - rimY) / (hb / REST.z + hr / RIM.z), W * 0.86 * BOARD.z / 1.8);
    base.cx = W / 2;
    base.cy = ballY - base.f * hb / REST.z;
    vignette = g.createRadialGradient(W / 2, H * 0.48, Math.min(W, H) * 0.3, W / 2, H * 0.5, Math.hypot(W, H) * 0.62);
    vignette.addColorStop(0, 'rgba(4, 4, 8, 0)');
    vignette.addColorStop(1, 'rgba(4, 4, 8, 0.82)');
    glow = null;
    placeButton();
  }
  function project(x, y, z) {
    const Z = Math.max(0.08, z - cam.z);
    const k = cam.f / Z;
    return [cam.cx + (x - cam.x) * k, cam.cy - (y - cam.y) * k, k];
  }

  /* ---- sound: the dial's switch and bus (js/dial-feel.js) ----------------- */
  let noise = null;
  function voice(pan) {
    const out = feel?.sound?.();
    if (!out) return null;
    const { ctx } = out;
    if (!noise || noise.sampleRate !== ctx.sampleRate) {
      noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = noise.getChannelData(0);
      let seed = 7;
      for (let i = 0; i < d.length; i += 1) { seed = (seed * 16807) % 2147483647; d[i] = seed / 1073741823.5 - 1; }
    }
    const gain = ctx.createGain();
    gain.gain.value = 0;
    if (ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = clamp(pan, -0.8, 0.8);
      gain.connect(p);
      p.connect(out.input);
    } else gain.connect(out.input);
    return { ctx, gain, t: ctx.currentTime };
  }
  function envelope(param, t, peak, attack, decay) {
    param.setValueAtTime(0, t);
    param.linearRampToValueAtTime(peak, t + attack);
    param.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }
  function burst(v, filterType, freq, q, peak, attack, decay, sweepTo) {
    const src = v.ctx.createBufferSource();
    src.buffer = noise;
    const filter = v.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(freq, v.t);
    if (sweepTo) filter.frequency.exponentialRampToValueAtTime(sweepTo, v.t + attack + decay);
    filter.Q.value = q;
    const amp = v.ctx.createGain();
    envelope(amp.gain, v.t, peak, attack, decay);
    src.connect(filter); filter.connect(amp); amp.connect(v.gain);
    v.gain.gain.value = 1;
    src.start(v.t, Math.random() * 0.5);
    src.stop(v.t + attack + decay + 0.05);
  }
  function tone(v, type, freq, peak, attack, decay, glideTo) {
    const osc = v.ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, v.t);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, v.t + attack + decay);
    const amp = v.ctx.createGain();
    envelope(amp.gain, v.t, peak, attack, decay);
    osc.connect(amp); amp.connect(v.gain);
    v.gain.gain.value = 1;
    osc.start(v.t);
    osc.stop(v.t + attack + decay + 0.05);
  }
  const panOf = (sx) => (sx / Math.max(1, W) - 0.5) * 1.2;
  const sfx = {
    release(power, sx) { const v = voice(panOf(sx)); if (v) burst(v, 'bandpass', 500, 1.1, 0.05 + 0.04 * power, 0.03, 0.22, 1500); },
    rim(hit, sx) {
      const v = voice(panOf(sx));
      if (!v) return;
      const a = clamp(hit / 4, 0.15, 1);
      tone(v, 'triangle', 612, 0.16 * a, 0.002, 0.32);
      tone(v, 'sine', 1478, 0.07 * a, 0.002, 0.2);
      burst(v, 'highpass', 2600, 0.7, 0.08 * a, 0.001, 0.03);
    },
    board(hit, sx) {
      const v = voice(panOf(sx));
      if (!v) return;
      const a = clamp(hit / 5, 0.2, 1);
      burst(v, 'lowpass', 900, 0.7, 0.2 * a, 0.002, 0.09);
      tone(v, 'sine', 128, 0.14 * a, 0.002, 0.14, 96);
    },
    floor(hit, sx) {
      const v = voice(panOf(sx));
      if (v) tone(v, 'sine', 150, 0.2 * clamp(hit / 5, 0.1, 1), 0.002, 0.16, 62);
    },
    swish(sx) {
      const v = voice(panOf(sx));
      if (!v) return;
      burst(v, 'bandpass', 2800, 0.9, 0.2, 0.02, 0.32, 1800);
      burst(v, 'highpass', 5200, 0.5, 0.05, 0.01, 0.18);
    },
    chime(n, final) {
      const v = voice(0);
      if (!v) return;
      const notes = final ? [659.3, 830.6, 987.8, 1318.5] : [[659.3, 987.8], [740, 1108.7], [830.6, 1244.5]][Math.min(2, n - 1)];
      notes.forEach((f, i) => {
        const w = voice(0);
        if (!w) return;
        w.t += i * (final ? 0.11 : 0.07);
        tone(w, 'sine', f, final ? 0.07 : 0.06, 0.01, final ? 1.6 : 0.9);
        tone(w, 'sine', f * 2.01, 0.012, 0.01, 0.5);
      });
    },
    deal() {
      const v = voice(0.4);
      if (!v) return;
      [880, 1318.5, 1760].forEach((f, i) => tone(v, 'sine', f * (1 + i * 0.003), 0.018, 0.18, 0.55));
    },
  };
  function buzz(ms) {
    if (typeof navigator.vibrate !== 'function' || document.hidden) return;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;
    try { navigator.vibrate(ms); } catch (error) { /* blocked */ }
  }

  /* ---- state --------------------------------------------------------------- */
  let state = 'empty';    // empty · dealing · ready · held · charging · flying · finale · leaving
  let made = 0;
  let ball = null;        // the ball in flight
  let deal = null;        // a ball being dealt by the dial
  let held = null;        // the finger or mouse on the ball
  let charge = null;      // a keyboard charge
  let aimKeys = 0;        // keyboard aim, radians
  let timeScale = 1, timeGoal = 1, slowUntil = 0;
  let clock = 0;          // scene time, seconds (slowed with the ball)
  let real = 0;           // wall time, seconds
  let nextDeal = 0;       // when the dial deals the next ball
  let misses = 0;         // in a row
  let nStar = { touch: 2.5, mouse: 1.7 };  // flick speed (screen heights per second) for a perfect shot
  let aimBias = 0;
  const trails = [];      // fading light left by earlier shots
  const sparks = [];
  const words = [];
  let rimFlash = 0, boardFlash = 0, netKick = 0, netKickAt = 0, netSide = 0;
  let ledOn = [false, false, false];
  let entry = 0;          // how far the court has opened, 0..1 (the camera arrives with it)
  let finale = null;
  let opened = false;
  let iris = null;        // the court opening from, or closing into, a ball on the page
  let opener = null, origin = null;

  function say(text) { if (live) live.textContent = text; }
  function updateHud(pop) {
    pips.forEach((pip, i) => {
      pip.classList.toggle('is-on', i < made);
      if (pop && i === made - 1) { pip.classList.remove('is-pop'); void pip.offsetWidth; pip.classList.add('is-pop'); }
    });
    if (count) count.textContent = `${made} / ${NEED}`;
    ledOn = [0, 1, 2].map((i) => i < made);
  }

  /* ---- the dial deals a ball ------------------------------------------------ */
  const dialEl = document.getElementById('siteDial');
  const knobEl = dialEl?.querySelector('.dial-knob');
  function knobPoint() {
    const sr = stage.getBoundingClientRect();
    const usable = knobEl && dialEl.classList.contains('is-shown');
    if (usable) {
      const r = knobEl.getBoundingClientRect();
      if (r.width > 0) return [r.left + r.width / 2 - sr.left, r.top + r.height / 2 - sr.top];
    }
    return [W + 40, H + 40];
  }
  function dealBall() {
    if (!opened || finale || state !== 'empty') return;
    const [fx, fy] = knobPoint();
    const parts = [];
    const n = reduce ? 0 : 54;
    for (let i = 0; i < n; i += 1) {
      parts.push({
        delay: Math.random() * 0.3,
        dur: 0.42 + Math.random() * 0.22,
        bend: (Math.random() - 0.5) * 0.5,
        lift: 0.2 + Math.random() * 0.35,
        ang: Math.random() * TAU,
        size: 0.8 + Math.random() * 1.8,
        hue: Math.random(),
      });
    }
    deal = { t: 0, dur: reduce ? 0.35 : 0.95, fx, fy, parts };
    state = 'dealing';
    ballButton.setAttribute('aria-disabled', 'true');
    if (!reduce && dialEl) {
      dialEl.classList.remove('is-dealing');
      void dialEl.offsetWidth;
      dialEl.classList.add('is-dealing');
      setTimeout(() => dialEl.classList.remove('is-dealing'), 900);
    }
    feel?.detent?.(4, 120, 'mouse', 0);
    sfx.deal();
    wake();
  }
  function dealt() {
    deal = null;
    state = 'ready';
    ballButton.setAttribute('aria-disabled', 'false');
  }

  /* ---- the flick -------------------------------------------------------- */
  function restScreen() {
    const [x, y, k] = project(REST.x, REST.y, REST.z);
    return { x, y, r: BALL_R * k };
  }
  function placeButton() {
    const saved = { x: cam.x, y: cam.y, z: cam.z, f: cam.f, cx: cam.cx, cy: cam.cy };
    Object.assign(cam, { x: 0, y: EYE, z: 0, f: base.f, cx: base.cx, cy: base.cy });
    const p = restScreen();
    Object.assign(cam, saved);
    const size = Math.max(88, p.r * 2.8);
    ballButton.style.width = ballButton.style.height = `${size.toFixed(0)}px`;
    ballButton.style.transform = `translate(${(p.x - size / 2).toFixed(1)}px, ${(p.y - size / 2).toFixed(1)}px)`;
  }
  ballButton.addEventListener('pointerdown', (event) => {
    if (state !== 'ready' || !event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    event.preventDefault();
    feel?.prime?.();
    try { ballButton.setPointerCapture(event.pointerId); } catch (error) { /* gone */ }
    const now = event.timeStamp || performance.now();
    held = { id: event.pointerId, type: event.pointerType === 'mouse' ? 'mouse' : 'touch', x0: event.clientX, y0: event.clientY,
      x: event.clientX, y: event.clientY, samples: [{ x: event.clientX, y: event.clientY, t: now }] };
    state = 'held';
    section.classList.add('is-holding');
    wake();
  });
  ballButton.addEventListener('pointermove', (event) => {
    if (!held || event.pointerId !== held.id) return;
    const now = event.timeStamp || performance.now();
    held.x = event.clientX;
    held.y = event.clientY;
    held.samples.push({ x: event.clientX, y: event.clientY, t: now });
    while (held.samples.length > 2 && now - held.samples[0].t > 300) held.samples.shift();
  });
  function endHold(event, cancelled) {
    if (!held || event.pointerId !== held.id) return;
    const h = held;
    held = null;
    section.classList.remove('is-holding');
    if (cancelled) { state = 'ready'; return; }
    const now = event.timeStamp || performance.now();
    h.samples.push({ x: event.clientX, y: event.clientY, t: now });
    flick(h, now);
  }
  ballButton.addEventListener('pointerup', (event) => endHold(event, false));
  ballButton.addEventListener('pointercancel', (event) => endHold(event, true));
  ballButton.addEventListener('lostpointercapture', (event) => { if (held && event.pointerId === held.id) endHold(event, true); });
  // Older iPhones scroll from a touch unless it is refused outright.
  ballButton.addEventListener('touchmove', (event) => { if (event.cancelable) event.preventDefault(); }, { passive: false });
  ballButton.addEventListener('click', (event) => event.preventDefault());

  function flick(h, now) {
    const s = h.samples;
    // The release velocity: the fastest 60 ms stretch of the last 150 ms, so
    // a finger that slows a touch before lifting still throws what it flicked.
    let vx = 0, vy = 0;
    for (let j = s.length - 1; j > 0 && now - s[j].t < 150; j -= 1) {
      let i = j;
      while (i > 0 && s[j].t - s[i - 1].t <= 60) i -= 1;
      if (i === j) i = j - 1;
      const dt = Math.max(0.008, (s[j].t - s[i].t) / 1000);
      const ux = (s[j].x - s[i].x) / dt / H, uy = -(s[j].y - s[i].y) / dt / H;
      if (uy > vy) { vx = ux; vy = uy; }
    }
    const chordX = (h.x - h.x0) / H, chordY = -(h.y - h.y0) / H;
    const travel = Math.hypot(chordX, chordY);
    if (chordY < 0.03 || vy < 0.25 || travel < 0.035) {
      state = 'ready';
      showWord(chordY < 0 ? 'Flick up' : 'Flick it', 'hint');
      return;
    }
    const chordA = Math.atan2(chordX, chordY);
    const endA = Math.atan2(vx, vy);
    // A swipe that hooks at its end spins the ball; a thumb's natural arc
    // (inside the dead zone) does not.
    const hook = endA - chordA;
    const spin = Math.sign(hook) * Math.max(0, Math.abs(hook) - 0.2);
    const power = vy / nStar[h.type];
    launch({ power, aim: chordA + clamp(hook, -0.2, 0.2) * 0.4, spin: clamp(spin, -0.5, 0.5), type: h.type });
  }

  function makeBall({ power, aim, spin, type, factor }) {
    const assist = clamp(1 - 0.12 * misses, 0.55, 1);
    const e = (power - 1) * assist;
    const err = clamp(e, -0.8, 1.2);
    const speed = V_IDEAL * (factor ?? TUNE.centre + err * (err < 0 ? TUNE.short : TUNE.long));
    const raw = RUN * Math.tan(clamp(aim - aimBias, -0.9, 0.9)) * TUNE.aim * assist;
    const across = 1.1 * Math.tanh(raw / 1.1);
    // The flick's line sets where the ball would cross the rim's depth; a
    // hooked swipe's spin then bends it off that line (about 0.4 m for a
    // clear hook), so a curve shot is aimed wide and bends back in.
    const curve = spin * TUNE.curve;
    const vxs = across / T_IDEAL;
    return {
      x: REST.x, y: REST.y, z: REST.z,
      vx: vxs, vy: speed * Math.sin(ANGLE), vz: speed * Math.cos(ANGLE),
      curve, spin: 14 + 10 * Math.abs(e), tilt: spin * 1.2, roll: 0,
      t: 0, touched: { rim: 0, board: 0 }, bounces: 0, scored: false, cross: null, peak: REST.y,
      power, aim, type, trail: [], predicted: null, lastSound: 0, fade: 1,
    };
  }
  function launch(opts) {
    ballButton.setAttribute('aria-disabled', 'true');
    ball = makeBall(opts);
    const { power } = opts;
    state = 'flying';
    section.classList.add('is-shot');
    const rest = restScreen();
    sfx.release(clamp(power, 0, 2), rest.x);
    buzz(6);
    wake();
  }

  /* ---- keyboard: charge, aim, release ------------------------------------- */
  ballButton.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      event.stopPropagation();
      aimKeys = clamp(aimKeys + (event.key === 'ArrowLeft' ? -1 : 1) * 0.035, -0.4, 0.4);
      wake();
      return;
    }
    if (event.key !== ' ' && event.key !== 'Enter') return;
    event.preventDefault();
    event.stopPropagation();
    if (event.repeat || state !== 'ready') return;
    feel?.prime?.();
    charge = { t0: performance.now() };
    state = 'charging';
    wake();
  });
  ballButton.addEventListener('keyup', (event) => {
    if ((event.key !== ' ' && event.key !== 'Enter') || !charge) return;
    event.preventDefault();
    const p = chargeLevel();
    charge = null;
    launch({ power: p, aim: aimKeys, spin: 0, type: 'key' });
  });
  ballButton.addEventListener('blur', () => { if (charge) { charge = null; state = 'ready'; } });
  // The meter swings 0 → 1.3 → 0 every 1.6 s; a perfect shot is at 1.
  function chargeLevel() {
    if (!charge) return 0;
    const u = ((performance.now() - charge.t0) / 1600) % 1;
    return 1.3 * (u < 0.5 ? u * 2 : 2 - u * 2);
  }

  /* ---- physics ------------------------------------------------------------- */
  function stepBall(b, h, quiet) {
    const prevY = b.y;
    b.vy -= G * h;
    // Sidespin: the ball bends sideways while it travels forward.
    b.vx += b.curve * Math.max(0, b.vz) / 2.3 * h;
    const drag = 1 - 0.012 * h;
    b.vx *= drag; b.vy *= drag; b.vz *= drag;
    b.x += b.vx * h; b.y += b.vy * h; b.z += b.vz * h;
    b.t += h;
    b.peak = Math.max(b.peak, b.y);
    // The rim: a ring the ball cannot pass through.
    const dx = b.x - RIM.x, dz = b.z - RIM.z;
    const d = Math.hypot(dx, dz) || 1e-6;
    const qx = RIM.x + RIM.R * dx / d, qz = RIM.z + RIM.R * dz / d;
    const nx = b.x - qx, ny = b.y - RIM.y, nz = b.z - qz;
    const dist = Math.hypot(nx, ny, nz);
    const reach = BALL_R + RIM.tube;
    if (dist < reach) {
      const ux = nx / dist, uy = ny / dist, uz = nz / dist;
      b.x += ux * (reach - dist); b.y += uy * (reach - dist); b.z += uz * (reach - dist);
      const vn = b.vx * ux + b.vy * uy + b.vz * uz;
      if (vn < 0) {
        const j = -(1 + E_RIM) * vn;
        b.vx += j * ux; b.vy += j * uy; b.vz += j * uz;
        const vn2 = b.vx * ux + b.vy * uy + b.vz * uz;
        b.vx = vn2 * ux + (b.vx - vn2 * ux) * (1 - MU_RIM);
        b.vy = vn2 * uy + (b.vy - vn2 * uy) * (1 - MU_RIM);
        b.vz = vn2 * uz + (b.vz - vn2 * uz) * (1 - MU_RIM);
        if (!b.scored) b.touched.rim += 1;
        if (!quiet) contact('rim', -vn, b);
      }
    }
    // The glass.
    if (b.vz > 0 && b.z + BALL_R > BOARD.z && b.z < BOARD.z + 0.04 &&
        b.x > BOARD.x0 - BALL_R * 0.5 && b.x < BOARD.x1 + BALL_R * 0.5 && b.y > BOARD.y0 - BALL_R * 0.5 && b.y < BOARD.y1 + BALL_R * 0.5) {
      const hit = b.vz;
      b.z = BOARD.z - BALL_R;
      b.vz = -b.vz * E_BOARD;
      b.vx *= 0.9; b.vy *= 0.92;
      if (!b.scored) b.touched.board += 1;
      if (!quiet) contact('board', hit, b);
    }
    // The net: it slows and gathers a ball falling through it.
    if (d < RIM.R && b.y < RIM.y && b.y > RIM.y - 0.45) {
      b.vx -= (dx * 7 + b.vx * 3.5) * h;
      b.vz -= (dz * 7 + b.vz * 3.5) * h;
      b.vy *= 1 - 1.4 * h;
      if (!quiet) { netKick = 1; netSide = Math.atan2(dz, dx); }
    }
    // Through the hoop: the centre crosses the rim's plane inside the ring, falling.
    if (!b.scored && prevY > RIM.y && b.y <= RIM.y) {
      if (d < RIM.R - 0.03 && b.vy < 0) { b.scored = true; if (!quiet) scored(b); }
      else if (!b.cross) b.cross = { dx, dz };
    }
    // The floor.
    if (b.y < BALL_R) {
      b.y = BALL_R;
      if (b.vy < 0) {
        const hit = -b.vy;
        b.vy = hit * E_FLOOR;
        b.vx *= 0.82; b.vz *= 0.82;
        b.bounces += 1;
        if (!quiet && hit > 0.7) contact('floor', hit, b);
      }
    }
  }
  function contact(kind, hit, b) {
    const now = performance.now();
    const [sx] = project(b.x, b.y, b.z);
    if (now - b.lastSound > 55) {
      b.lastSound = now;
      sfx[kind](hit, sx);
    }
    if (kind === 'rim' && hit > 0.5) { rimFlash = Math.max(rimFlash, 0.35); buzz(8); }
    if (kind === 'board') boardFlash = Math.max(boardFlash, clamp(hit / 6, 0.2, 0.6));
  }
  // The flight is deterministic, so whether a ball will drop is known in time
  // to slow the clock for it.
  function willScore(b) {
    const c = { ...b, touched: { ...b.touched }, trail: null };
    for (let i = 0; i < 480 && !c.scored && c.t < 5; i += 1) stepBall(c, 1 / 240, true);
    return c.scored;
  }
  function verdict(b) {
    if (b.scored) {
      if (!b.touched.rim && !b.touched.board) return 'Swish';
      if (b.touched.board && !b.touched.rim) return 'Off the glass';
      if (b.touched.board) return 'Banked in';
      return b.touched.rim > 2 ? 'Rattled in' : 'In off the rim';
    }
    if (b.peak < RIM.y - 0.1) return 'Too flat';
    if (b.touched.rim) return b.touched.rim > 2 ? 'Rattled out' : 'Off the rim';
    if (b.touched.board) return 'Off the glass';
    const c = b.cross || { dx: b.x - RIM.x, dz: b.z - RIM.z };
    if (Math.abs(c.dx) > Math.abs(c.dz) * 0.8) return c.dx < 0 ? 'Wide left' : 'Wide right';
    return c.dz < 0 ? 'Short' : 'Long';
  }

  /* ---- a basket --------------------------------------------------------- */
  function scored(b) {
    made += 1;
    misses = 0;
    const [sx, sy] = project(RIM.x, RIM.y, RIM.z);
    rimFlash = 1;
    netKick = 1;
    netKickAt = clock;
    sfx.swish(sx);
    const final = made >= NEED;
    sfx.chime(Math.min(made, 3), final);
    buzz(final ? [16, 60, 26] : 14);
    burstSparks(sx, sy, final ? 90 : 36);
    updateHud(true);
    say(final ? 'Third basket. On to Education.' : `Basket. ${made} of ${NEED}.`);
    if (final) beginFinale();
  }
  function burstSparks(x, y, n) {
    if (reduce) return;
    for (let i = 0; i < n; i += 1) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
      const v = 80 + Math.random() * 260;
      sparks.push({ x: x + (Math.random() - 0.5) * 40, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 0.6 + Math.random() * 0.7, t: 0, size: 0.8 + Math.random() * 1.8 });
    }
  }
  function showWord(text, kind) {
    const rest = restScreen();
    const [x, y] = kind === 'hint' ? [rest.x, rest.y - rest.r * 2.2] : project(RIM.x, RIM.y + 0.62, RIM.z);
    words.push({ text, kind, x, y, t: 0 });
    if (words.length > 3) words.shift();
  }
  function endShot() {
    const b = ball;
    ball = null;
    section.classList.remove('is-shot');
    if (!b) return;
    if (b.trail?.length > 1) trails.push({ pts: b.trail, made: b.scored, t: 0 });
    if (trails.length > 3) trails.shift();
    const word = verdict(b);
    showWord(word, b.scored ? 'made' : 'miss');
    if (!b.scored) {
      misses += 1;
      say(`${word}. ${made} of ${NEED}.`);
      learn(b, word);
    } else learn(b, word);
    if (state === 'flying') { state = 'empty'; nextDeal = real + (reduce ? 0.15 : 0.38); }
  }
  // The game learns the visitor's own flick: a habitually strong or weak
  // flick, or a pull to one side, is gently re-centred over a few shots.
  function learn(b, word) {
    if ((b.type === 'touch' || b.type === 'mouse') && b.power > 0.2) {
      const base = b.type === 'mouse' ? 1.7 : 2.5;
      const e = clamp(b.power - 1, -0.6, 0.6);
      const k = word === 'Short' || word === 'Long' || word === 'Too flat' || b.scored ? 0.3 : 0.15;
      nStar[b.type] = clamp(nStar[b.type] * (1 + k * e), base * 0.6, base * 1.6);
    }
    if ((b.type === 'touch' || b.type === 'mouse') && !b.scored && (word === 'Wide left' || word === 'Wide right')) aimBias = clamp(aimBias + 0.3 * (b.aim - aimBias), -0.12, 0.12);
  }

  /* ---- opening and closing ------------------------------------------------ */
  // The court irises open from the ball that was tapped, and closes back into it.
  function centreOf(el) {
    const r = el?.getBoundingClientRect?.();
    if (!r || !r.width) return [innerWidth / 2, innerHeight * 0.8, 24];
    return [r.left + r.width / 2, r.top + r.height / 2, Math.max(8, Math.min(r.width, r.height) / 2)];
  }
  function open(from) {
    if (opened) return;
    opened = true;
    // The iris grows from the ball that was tapped; focus returns to its button.
    origin = from || null;
    opener = from?.closest?.('button, a') || from || document.activeElement;
    section.hidden = false;
    root.classList.add('is-court-open');
    window.dispatchEvent(new CustomEvent('courtopen', { detail: { open: true } }));
    layout();
    resetCamera();
    made = 0; misses = 0; ball = null; deal = null; finale = null; held = null; charge = null; aimKeys = 0;
    trails.length = 0; sparks.length = 0; words.length = 0;
    section.classList.remove('is-finale', 'is-portal', 'is-shot');
    updateHud(false);
    entry = 0;
    state = 'empty';
    iris = { t: 0, dir: 1, at: centreOf(origin || opener) };
    ballButton.setAttribute('aria-disabled', 'true');
    say(`LoopShoot free throws. Make ${NEED} baskets. Press Escape to leave.`);
    // A keyboard visitor lands on the ball; a tap leaves focus on the dialog.
    (opener?.matches?.(':focus-visible') ? ballButton : section).focus({ preventScroll: true });
    feel?.prime?.();
    wake();
  }
  function close() {
    if (!opened || finale || (iris && iris.dir < 0)) return;
    held = null; charge = null;
    root.classList.remove('is-court-covered');
    const back = origin && document.contains(origin) && origin.getClientRects().length ? origin : opener;
    iris = { t: 0, dir: -1, at: back && document.contains(back) && back.getClientRects().length ? centreOf(back) : [innerWidth / 2, innerHeight / 2, 4] };
    wake();
  }
  function finish(focusTarget) {
    opened = false;
    iris = null;
    ball = null; deal = null; finale = null;
    state = 'empty';
    stage.style.clipPath = '';
    stage.style.opacity = '';
    section.classList.remove('is-finale', 'is-portal', 'is-shot', 'is-holding');
    section.hidden = true;
    root.classList.remove('is-court-open', 'is-court-covered');
    window.dispatchEvent(new CustomEvent('courtopen', { detail: { open: false } }));
    resetCamera();
    focusTarget?.focus?.({ preventScroll: true });
  }
  function stepIris(dtReal) {
    if (!iris) return;
    iris.t += dtReal;
    const dur = reduce ? 0.25 : iris.dir > 0 ? 0.75 : 0.5;
    const u = clamp(iris.t / dur, 0, 1);
    const p = iris.dir > 0 ? easeInOut(u) : 1 - easeInOut(u);
    const [x, y, r0] = iris.at;
    const far = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 2;
    if (reduce) { stage.style.opacity = p.toFixed(3); stage.style.clipPath = ''; }
    else stage.style.clipPath = `circle(${lerp(r0, far, p).toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px)`;
    iris.p = p;
    entry = iris.dir > 0 ? smooth(0, 1, iris.t / 1.1) : entry;
    if (u < 1) return;
    if (iris.dir > 0) {
      stage.style.clipPath = '';
      stage.style.opacity = '';
      // Nothing of the page shows now: let the browser stop painting it.
      root.classList.add('is-court-covered');
      iris = null;
    } else finish(opener && document.contains(opener) ? opener : null);
  }

  /* ---- the finale: through the hoop, on to Education ---------------------- */
  function beginFinale() {
    finale = { t: 0, jumped: false, simple: reduce };
    state = 'finale';
    section.classList.add('is-finale');
  }
  function educationY() {
    const y = window.SiteDial?.landingY?.(5);
    if (Number.isFinite(y) && y > 0) return y;
    const el = document.getElementById('education');
    return el ? el.getBoundingClientRect().top + window.scrollY : window.scrollY;
  }
  // Under the court the page moves on to Education (the works player, if the
  // game was opened from it, is put away), so that the ring opens on to it.
  function openPage() {
    section.classList.add('is-portal');
    root.classList.remove('is-court-covered');
    window.WorksPlayer?.dismiss?.();
    window.scrollTo({ top: educationY(), behavior: 'instant' });
    // After the jump every scrubbed scene takes the new position at once.
    window.SceneKit?.settle?.();
  }
  function resetCamera() {
    Object.assign(cam, { x: 0, y: EYE, z: 0, f: base.f, cx: base.cx, cy: base.cy });
  }
  closeButton?.addEventListener('click', close);
  // Esc leaves, and Tab stays within the court, before the player underneath
  // (js/works.js) sees either.
  document.addEventListener('keydown', (event) => {
    if (!opened) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); return; }
    if (event.key === 'Tab') {
      event.preventDefault();
      event.stopPropagation();
      const order = [ballButton, closeButton].filter(Boolean);
      const i = order.indexOf(document.activeElement);
      order[(i + (event.shiftKey ? order.length - 1 : 1) + order.length) % order.length].focus();
    }
  }, true);

  /* ---- the frame ------------------------------------------------------------ */
  function update(dtReal) {
    // Slow motion for a ball that is about to drop on the final basket.
    if (ball && !ball.scored && !finale && made === NEED - 1 && ball.vy < 0 && ball.y < RIM.y + 0.9 && ball.predicted === null) {
      ball.predicted = willScore(ball);
    }
    real += dtReal;
    stepIris(dtReal);
    if (state === 'empty' && opened && !iris && !finale && real >= nextDeal) dealBall();
    if (ball?.predicted && !reduce && ball.y < RIM.y + 0.5 && ball.y > RIM.y - 0.5) { timeGoal = 0.2; slowUntil = real + 0.25; }
    if (real > slowUntil) timeGoal = 1;
    timeScale += (timeGoal - timeScale) * clamp(dtReal * (timeGoal < timeScale ? 14 : 3.5), 0, 1);
    const dt = dtReal * timeScale;
    clock += dt;

    if (deal) {
      deal.t += dtReal;
      if (deal.t >= deal.dur) dealt();
    }
    if (ball) {
      const n = Math.ceil(dt * 240);
      for (let i = 0; i < n && ball; i += 1) stepBall(ball, dt / n, false);
      if (ball) {
        ball.roll += ball.spin * dt;
        ball.trail.push([ball.x, ball.y, ball.z]);
        if (ball.trail.length > 70) ball.trail.shift();
        const out = ball.t > 4.2 || ball.z > 8.5 || ball.z < 1.15 || Math.abs(ball.x) > 4.5 || (ball.bounces >= 2 && ball.vy < 0.6 && ball.y < 0.3);
        if (out) { ball.fade -= dtReal * 4; if (ball.fade <= 0) endShot(); }
      }
    }
    trails.forEach((tr) => { tr.t += dtReal; });
    while (trails.length && trails[0].t > 2.4) trails.shift();
    for (let i = sparks.length - 1; i >= 0; i -= 1) {
      const p = sparks[i];
      p.t += dt;
      p.vy += 420 * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vx *= 1 - 1.2 * dt;
      if (p.t > p.life) sparks.splice(i, 1);
    }
    words.forEach((w) => { w.t += dtReal; });
    while (words.length && words[0].t > 1.6) words.shift();
    rimFlash = Math.max(0, rimFlash - dtReal * 1.4);
    boardFlash = Math.max(0, boardFlash - dtReal * 2.5);
    netKick = Math.max(0, netKick - dt * 1.6);

    // The camera: arriving as the court opens, breathing a little, leaning into the aim.
    if (!finale) {
      const arrive = 1 - entry;
      const lean = held ? clamp((held.x - held.x0) / Math.max(1, W), -0.3, 0.3) * 0.12 : aimKeys * 0.3;
      cam.x += (lean - cam.x) * clamp(dtReal * 4, 0, 1);
      cam.y = EYE + Math.sin(clock * 0.55) * 0.006 - arrive * 0.25;
      cam.z = -arrive * arrive * 1.8;
      cam.f = base.f; cam.cx = base.cx; cam.cy = base.cy;
    } else updateFinale(dtReal);
  }

  function updateFinale(dtReal) {
    finale.t += dtReal;
    const t = finale.t;
    if (finale.simple) {
      // Reduced motion: a plain fade from the court to Education.
      if (!finale.jumped && t > 1.2) { finale.jumped = true; openPage(); }
      if (finale.jumped) stage.style.opacity = String(1 - smooth(1.2, 1.7, t));
      if (t > 1.75) finish(document.querySelector('#chapter-education .slate-org'));
      return;
    }
    // 0 – 1.05 s: the ball drops, the rim and the score light up.
    // 1.05 – 1.9 s: the camera pushes in on the ring, the court falls dark.
    // ~1.9 s: the page opens beneath; the ring opens into Education.
    const push = easeInOut(smooth(1.05, 2.2, t));
    const [rx, ry] = [RIM.x, RIM.y];
    cam.x = lerp(cam.x, rx, push * 0.2);
    cam.y = lerp(EYE, ry - 0.35, push);
    cam.z = lerp(0, RIM.z - 1.2, push);
    cam.f = base.f * (1 + 0.25 * push);
    cam.cx = lerp(base.cx, W / 2, push);
    cam.cy = lerp(base.cy, H * 0.5 + base.f * 0.07 * (1 - push), push);
    if (!finale.jumped && t > 1.9) { finale.jumped = true; openPage(); }
    // A keyboard visitor carries on from Education's heading.
    if (t > 3.6) finish(section.contains(document.activeElement) || document.activeElement === section ? document.querySelector('#chapter-education .slate-org') : null);
  }

  /* ---- drawing -------------------------------------------------------------- */
  function draw() {
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.globalCompositeOperation = 'source-over';
    g.globalAlpha = 1;
    g.fillStyle = '#07070c';
    g.fillRect(0, 0, W, H);
    const fin = finale && !finale.simple ? finale.t : 0;
    const dark = smooth(1.0, 1.8, fin);
    const world = (1 - dark) * (0.55 + 0.45 * smooth(0, 0.6, entry + (finale ? 1 : 0)));
    g.globalAlpha = world;
    drawRoom();
    drawFloor();
    const rk = project(RIM.x, RIM.y, RIM.z)[2];
    const zone = ball && Math.hypot(ball.x - RIM.x, ball.z - RIM.z) < RIM.R + BALL_R && ball.y < RIM.y + BALL_R * 1.2 && ball.y > RIM.y - 0.6;
    if (ball && ball.z > BOARD.z) drawBall(ball);
    drawBoard();
    drawRimHalf(true);
    drawNet(true);
    drawTrails();
    if (ball && zone && ball.z <= BOARD.z) drawBall(ball);
    drawNet(false);
    drawRimHalf(false);
    if (ball && !zone && ball.z <= BOARD.z) drawBall(ball);
    drawDeal();
    drawRest();
    g.globalAlpha = 1;
    drawSparks();
    drawWords();
    if (fin) drawPortal(fin, rk);
    if (iris && !reduce) drawIrisEdge();
    g.globalCompositeOperation = 'source-over';
    g.globalAlpha = 1 - smooth(1.9, 3.0, fin);
    g.fillStyle = vignette;
    g.fillRect(0, 0, W, H);
  }

  function drawRoom() {
    const [bx, by] = project(0, 3.3, BOARD.z);
    // The poster's violet air behind the glass, and a warm stage beam on the hoop.
    const halo = g.createRadialGradient(bx, by, 0, bx, by, Math.max(W, H) * 0.55);
    halo.addColorStop(0, 'rgba(164, 139, 255, 0.16)');
    halo.addColorStop(0.45, 'rgba(90, 70, 160, 0.06)');
    halo.addColorStop(1, 'rgba(10, 9, 18, 0)');
    g.fillStyle = halo;
    g.fillRect(0, 0, W, H);
    const [fx, fy, fk] = project(0, 0, RIM.z - 0.6);
    const top = Math.min(W, H) * 0.16;
    const beam = g.createLinearGradient(0, 0, 0, fy);
    beam.addColorStop(0, 'rgba(255, 214, 160, 0.075)');
    beam.addColorStop(1, 'rgba(255, 214, 160, 0.012)');
    g.fillStyle = beam;
    g.beginPath();
    g.moveTo(bx - top * 0.5, 0);
    g.lineTo(bx + top * 0.5, 0);
    g.lineTo(fx + 2.4 * fk, fy);
    g.lineTo(fx - 2.4 * fk, fy);
    g.closePath();
    g.fill();
    // Where the beam lands.
    g.save();
    g.translate(fx, fy);
    g.scale(1, 0.22);
    const pool = g.createRadialGradient(0, 0, 0, 0, 0, 2.6 * fk);
    pool.addColorStop(0, 'rgba(255, 200, 140, 0.12)');
    pool.addColorStop(1, 'rgba(255, 200, 140, 0)');
    g.fillStyle = pool;
    g.beginPath();
    g.arc(0, 0, 2.6 * fk, 0, TAU);
    g.fill();
    g.restore();
  }

  function drawFloor() {
    const horizon = cam.cy;
    const grid = g.createLinearGradient(0, horizon, 0, H);
    grid.addColorStop(0, 'rgba(164, 139, 255, 0)');
    grid.addColorStop(0.25, 'rgba(164, 139, 255, 0.18)');
    grid.addColorStop(1, 'rgba(164, 139, 255, 0.08)');
    g.strokeStyle = grid;
    g.lineWidth = 1;
    g.beginPath();
    const near = Math.max(cam.z + 0.3, 0.4);
    for (let x = -6; x <= 6.001; x += 0.8) {
      const [ax, ay] = project(x, 0, near);
      const [bx, by] = project(x, 0, 14);
      g.moveTo(ax, ay); g.lineTo(bx, by);
    }
    for (const z of [1.2, 2, 3, 4.2, 5.6, 7.2, 9, 11.2, 14]) {
      if (z <= near) continue;
      const [ax, ay] = project(-6, 0, z);
      const [bx, by] = project(6, 0, z);
      g.moveTo(ax, ay); g.lineTo(bx, by);
    }
    g.stroke();
    // The lane and the baseline, faint, in the site's champagne.
    g.strokeStyle = 'rgba(244, 207, 142, 0.16)';
    g.lineWidth = 1.5;
    const base = BOARD.z + 1.2;
    g.beginPath();
    for (const x of [-2.45, 2.45]) {
      const [ax, ay] = project(x, 0, near);
      const [bx, by] = project(x, 0, base);
      g.moveTo(ax, ay); g.lineTo(bx, by);
    }
    const [lx, ly] = project(-7, 0, base);
    const [mx, my] = project(7, 0, base);
    g.moveTo(lx, ly); g.lineTo(mx, my);
    g.stroke();
    // The restricted arc under the hoop.
    g.beginPath();
    for (let i = 0; i <= 24; i += 1) {
      const a = Math.PI + (i / 24) * Math.PI;
      const [px, py] = project(RIM.x + 1.25 * Math.cos(a), 0, RIM.z + 1.25 * Math.sin(a));
      if (i) g.lineTo(px, py); else g.moveTo(px, py);
    }
    g.stroke();
    // The stanchion behind the glass.
    const [sx0, sy0, sk] = project(0, BOARD.y0, BOARD.z + 0.12);
    const [sx1, sy1] = project(0, 0, BOARD.z + 1.3);
    g.strokeStyle = 'rgba(30, 27, 44, 0.95)';
    g.lineWidth = Math.max(2, 0.1 * sk);
    g.beginPath(); g.moveTo(sx0, sy0); g.lineTo(sx1, sy1); g.stroke();
  }

  function drawBoard() {
    const [x0, y0, k] = project(BOARD.x0, BOARD.y1, BOARD.z);
    const [x1, y1] = project(BOARD.x1, BOARD.y0, BOARD.z);
    g.fillStyle = 'rgba(28, 24, 48, 0.7)';
    g.fillRect(x0, y0, x1 - x0, y1 - y0);
    if (boardFlash > 0) {
      g.fillStyle = `rgba(200, 186, 255, ${(boardFlash * 0.22).toFixed(3)})`;
      g.fillRect(x0, y0, x1 - x0, y1 - y0);
    }
    // A sheen across the glass.
    const sheen = g.createLinearGradient(x0, y0, x1, y1);
    sheen.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
    sheen.addColorStop(0.4, 'rgba(255, 255, 255, 0)');
    g.fillStyle = sheen;
    g.fillRect(x0, y0, x1 - x0, y1 - y0);
    g.strokeStyle = 'rgba(164, 139, 255, 0.6)';
    g.lineWidth = Math.max(1.2, 0.014 * k);
    g.strokeRect(x0, y0, x1 - x0, y1 - y0);
    const [s0x, s0y] = project(-0.295, RIM.y + 0.45, BOARD.z);
    const [s1x, s1y] = project(0.295, RIM.y + 0.02, BOARD.z);
    g.strokeStyle = 'rgba(164, 139, 255, 0.75)';
    g.strokeRect(s0x, s0y, s1x - s0x, s1y - s0y);
    // Three lights on the glass: the baskets made.
    ledOn.forEach((on, i) => {
      const [lx, ly, lk] = project((i - 1) * 0.16, 3.78, BOARD.z);
      const r = Math.max(2.5, 0.036 * lk);
      if (on) {
        const halo = g.createRadialGradient(lx, ly, 0, lx, ly, r * 4);
        halo.addColorStop(0, 'rgba(255, 196, 120, 0.5)');
        halo.addColorStop(1, 'rgba(255, 196, 120, 0)');
        g.fillStyle = halo;
        g.beginPath(); g.arc(lx, ly, r * 4, 0, TAU); g.fill();
      }
      g.fillStyle = on ? '#ffd9a0' : 'rgba(255, 255, 255, 0.14)';
      g.beginPath(); g.arc(lx, ly, r, 0, TAU); g.fill();
    });
    // The bracket from the glass to the rim.
    const [ax, ay, ak] = project(0, RIM.y - 0.02, BOARD.z);
    const [cx, cy] = project(0, RIM.y - 0.02, RIM.z + RIM.R);
    g.strokeStyle = 'rgba(120, 60, 34, 0.9)';
    g.lineWidth = Math.max(1.5, 0.03 * ak);
    g.beginPath(); g.moveTo(ax, ay); g.lineTo(cx, cy); g.stroke();
  }

  const RIM_N = 48;
  function drawRimHalf(back) {
    const [, , k] = project(RIM.x, RIM.y, RIM.z);
    g.beginPath();
    for (let i = 0; i <= RIM_N / 2; i += 1) {
      const a = (back ? 0 : Math.PI) + (i / (RIM_N / 2)) * Math.PI;
      const [px, py] = project(RIM.x + RIM.R * Math.cos(a), RIM.y, RIM.z + RIM.R * Math.sin(a));
      if (i) g.lineTo(px, py); else g.moveTo(px, py);
    }
    const flash = rimFlash;
    const width = Math.max(2, RIM.tube * 2.6 * k);
    g.lineCap = 'round';
    g.strokeStyle = `rgba(255, ${Math.round(138 + 80 * flash)}, ${Math.round(76 + 70 * flash)}, ${(0.22 + 0.35 * flash).toFixed(3)})`;
    g.lineWidth = width * (3.2 + 2.5 * flash);
    g.stroke();
    g.strokeStyle = back ? `rgba(214, 112, 58, ${(0.85 + 0.15 * flash).toFixed(3)})` : flash > 0.05 ? `rgb(255, ${Math.round(138 + 90 * flash)}, ${Math.round(76 + 90 * flash)})` : '#ff8a4c';
    g.lineWidth = width;
    g.stroke();
  }

  const STRINGS = 12, KNOTS = 4;
  function netPoint(i, j) {
    const a = (i / STRINGS) * TAU + j * 0.13;
    const u = j / KNOTS;
    const kick = netKick * Math.sin((clock - netKickAt) * 26 + i * 0.9) * (0.5 + 0.5 * netKick);
    const r = lerp(RIM.R, 0.13, u) + kick * 0.03 * u + netKick * 0.025 * u * Math.cos(a - netSide);
    const y = RIM.y - 0.42 * u - netKick * 0.07 * u * u;
    return [RIM.x + r * Math.cos(a), y, RIM.z + r * Math.sin(a)];
  }
  function drawNet(back) {
    g.strokeStyle = back ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.5)';
    g.lineWidth = 1;
    g.beginPath();
    for (let i = 0; i < STRINGS; i += 1) {
      const a = (i / STRINGS) * TAU;
      if ((Math.sin(a) > 0) !== back) continue;
      for (let j = 0; j < KNOTS; j += 1) {
        const p = project(...netPoint(i, j));
        const q1 = project(...netPoint((i + 1) % STRINGS, j + 1));
        const q2 = project(...netPoint((i + STRINGS - 1) % STRINGS, j + 1));
        g.moveTo(p[0], p[1]); g.lineTo(q1[0], q1[1]);
        g.moveTo(p[0], p[1]); g.lineTo(q2[0], q2[1]);
      }
    }
    g.stroke();
  }

  function drawBallAt(x, y, r, roll, tilt, alpha) {
    if (r < 0.5 || alpha <= 0) return;
    g.save();
    g.globalAlpha *= alpha;
    const body = g.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.05, x, y, r);
    body.addColorStop(0, '#fff0da');
    body.addColorStop(0.5, '#e8934a');
    body.addColorStop(1, '#a4551f');
    g.fillStyle = body;
    g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill();
    // Seams that turn with the spin.
    g.clip();
    g.translate(x, y);
    g.rotate(tilt);
    g.strokeStyle = 'rgba(60, 30, 10, 0.55)';
    g.lineWidth = Math.max(1, r * 0.06);
    const c = Math.cos(roll), s = Math.sin(roll);
    g.beginPath();
    g.ellipse(0, 0, r, Math.abs(r * c), 0, 0, TAU);
    g.moveTo(-r, r * s * 0.15); g.lineTo(r, r * s * 0.15);
    g.ellipse(-r * 0.95, 0, r * 0.55, r, 0, -Math.PI / 2, Math.PI / 2);
    g.moveTo(r * 0.95, -r);
    g.ellipse(r * 0.95, 0, r * 0.55, r, 0, Math.PI * 1.5, Math.PI / 2, true);
    g.stroke();
    g.restore();
  }
  function drawBall(b) {
    const [x, y, k] = project(b.x, b.y, b.z);
    // Its shadow on the floor.
    const [fx, fy, fk] = project(b.x, 0, b.z);
    const lift = clamp(1 - b.y / 4, 0, 1);
    g.save();
    g.globalAlpha *= 0.4 * lift * b.fade;
    g.fillStyle = '#000';
    g.beginPath(); g.ellipse(fx, fy, BALL_R * fk * 1.1, BALL_R * fk * 0.32, 0, 0, TAU); g.fill();
    g.restore();
    drawBallAt(x, y, BALL_R * k, b.roll, b.tilt, b.fade);
  }
  function drawRest() {
    if (state !== 'ready' && state !== 'held' && state !== 'charging') return;
    const p = restScreen();
    let x = p.x, y = p.y, r = p.r;
    if (held) {
      const dx = clamp(held.x - held.x0, -60, 60) * 0.45;
      const dy = clamp(held.y - held.y0, -90, 40) * 0.4;
      x += dx; y += dy; r *= 1 - clamp(-dy / 400, -0.05, 0.08);
    } else {
      y += Math.sin(clock * 2.2) * r * 0.05;
    }
    // The grab ring under the ball, like a controller's.
    const ring = held ? 1 : 0.55 + 0.25 * Math.sin(clock * 2.2);
    g.save();
    g.strokeStyle = `rgba(244, 207, 142, ${(0.35 * ring).toFixed(3)})`;
    g.setLineDash([2, 7]);
    g.lineWidth = 1.5;
    g.beginPath(); g.ellipse(p.x, p.y + r * 0.95, r * 1.7, r * 0.42, 0, 0, TAU); g.stroke();
    g.restore();
    if (state === 'charging') drawMeter(p);
    if (aimKeys && !held) drawAim(p);
    drawBallAt(x, y, r, clock * 0.4, 0.3, 1);
  }
  function drawMeter(p) {
    const level = chargeLevel() / 1.3;
    const r = p.r * 1.9;
    g.save();
    g.lineCap = 'round';
    g.lineWidth = 4;
    g.strokeStyle = 'rgba(255, 255, 255, 0.14)';
    g.beginPath(); g.arc(p.x, p.y, r, Math.PI * 0.8, Math.PI * 2.2); g.stroke();
    const sweet = Math.PI * 0.8 + Math.PI * 1.4 * (1 / 1.3);
    g.strokeStyle = 'rgba(244, 207, 142, 0.5)';
    g.beginPath(); g.arc(p.x, p.y, r, sweet - 0.08, sweet + 0.08); g.stroke();
    g.strokeStyle = '#ffb877';
    g.beginPath(); g.arc(p.x, p.y, r, Math.PI * 0.8, Math.PI * 0.8 + Math.PI * 1.4 * level); g.stroke();
    g.restore();
  }
  function drawAim(p) {
    g.save();
    g.strokeStyle = 'rgba(244, 207, 142, 0.45)';
    g.setLineDash([3, 6]);
    g.lineWidth = 1.5;
    g.beginPath();
    g.moveTo(p.x, p.y - p.r * 1.3);
    g.lineTo(p.x + Math.sin(aimKeys) * H * 0.22, p.y - p.r * 1.3 - Math.cos(aimKeys) * H * 0.22);
    g.stroke();
    g.restore();
  }

  function drawDeal() {
    if (!deal) return;
    const p = restScreen();
    const t = deal.t;
    g.save();
    g.globalCompositeOperation = 'lighter';
    for (const q of deal.parts) {
      const u = clamp((t - q.delay) / q.dur, 0, 1);
      if (u <= 0 || u >= 1) continue;
      const e = easeInOut(u);
      const dx = p.x - deal.fx, dy = p.y - deal.fy;
      // A curving path from the knob, lifting over the floor, spiralling on to the ball.
      const mx = deal.fx + dx * 0.5 - dy * q.bend, my = deal.fy + dy * 0.5 - Math.abs(dx) * q.lift;
      const bx = (1 - e) * (1 - e) * deal.fx + 2 * (1 - e) * e * mx + e * e * p.x;
      const by = (1 - e) * (1 - e) * deal.fy + 2 * (1 - e) * e * my + e * e * p.y;
      const swirl = (1 - e) * p.r * 1.4;
      const x = bx + Math.cos(q.ang + e * 5) * swirl * e;
      const y = by + Math.sin(q.ang + e * 5) * swirl * e;
      const a = Math.sin(u * Math.PI);
      g.fillStyle = q.hue < 0.5 ? `rgba(255, 196, 128, ${(0.9 * a).toFixed(3)})` : `rgba(255, 138, 76, ${(0.8 * a).toFixed(3)})`;
      g.beginPath(); g.arc(x, y, q.size, 0, TAU); g.fill();
    }
    g.restore();
    const form = smooth(0.5, 0.92, t / deal.dur);
    drawBallAt(p.x, p.y, p.r * (0.7 + 0.3 * form), clock * 0.4, 0.3, form);
    // The glint as it becomes solid.
    const glintT = smooth(0.82, 1, t / deal.dur);
    if (glintT > 0 && glintT < 1) {
      g.save();
      g.globalCompositeOperation = 'lighter';
      g.strokeStyle = `rgba(255, 220, 170, ${(0.6 * (1 - glintT)).toFixed(3)})`;
      g.lineWidth = 2;
      g.beginPath(); g.arc(p.x, p.y, p.r * (1 + glintT * 0.8), 0, TAU); g.stroke();
      g.restore();
    }
  }

  function drawTrails() {
    const list = ball ? [...trails, { pts: ball.trail, made: false, t: 0, live: true }] : trails;
    g.save();
    g.globalCompositeOperation = 'lighter';
    g.lineCap = 'round';
    for (const tr of list) {
      const pts = tr.pts;
      if (!pts || pts.length < 2) continue;
      const fade = tr.live ? 1 : 1 - smooth(0.6, 2.4, tr.t);
      const col = tr.made ? '255, 214, 150' : '164, 139, 255';
      let prev = project(...pts[0]);
      for (let i = 1; i < pts.length; i += 1) {
        const cur = project(...pts[i]);
        const u = i / pts.length;
        g.strokeStyle = `rgba(${col}, ${(0.32 * u * fade).toFixed(3)})`;
        g.lineWidth = Math.max(1, BALL_R * cur[2] * 0.5 * u);
        g.beginPath(); g.moveTo(prev[0], prev[1]); g.lineTo(cur[0], cur[1]); g.stroke();
        prev = cur;
      }
    }
    g.restore();
  }
  function drawSparks() {
    if (!sparks.length) return;
    g.save();
    g.globalCompositeOperation = 'lighter';
    for (const p of sparks) {
      const a = 1 - p.t / p.life;
      g.fillStyle = `rgba(255, 210, 150, ${a.toFixed(3)})`;
      g.beginPath(); g.arc(p.x, p.y, p.size, 0, TAU); g.fill();
    }
    g.restore();
  }
  function drawWords() {
    if (!words.length) return;
    g.save();
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    const size = Math.round(clamp(Math.min(W, H) * 0.03, 12, 16));
    g.font = `600 ${size}px "Space Grotesk", Inter, system-ui, sans-serif`;
    if ('letterSpacing' in g) g.letterSpacing = '0.18em';
    for (const w of words) {
      const a = smooth(0, 0.15, w.t) * (1 - smooth(1.1, 1.6, w.t));
      const y = w.y - easeOut(clamp(w.t / 1.6, 0, 1)) * 26;
      g.fillStyle = w.kind === 'made' ? `rgba(255, 214, 150, ${a.toFixed(3)})` : w.kind === 'hint' ? `rgba(237, 241, 245, ${(a * 0.8).toFixed(3)})` : `rgba(196, 182, 255, ${(a * 0.85).toFixed(3)})`;
      g.fillText(w.text.toUpperCase(), w.x, y);
    }
    g.restore();
  }
  // The edge of the opening court: a thin gold light, like the ball's own rim.
  function drawIrisEdge() {
    const [x, y, r0] = iris.at;
    const far = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 2;
    const r = lerp(r0, far, iris.p ?? 0);
    const sr = stage.getBoundingClientRect();
    g.save();
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = `rgba(255, 200, 140, ${(0.55 * (1 - (iris.p ?? 0))).toFixed(3)})`;
    g.lineWidth = 3;
    g.beginPath(); g.arc(x - sr.left, y - sr.top, Math.max(1, r - 2), 0, TAU); g.stroke();
    g.restore();
  }
  // The ring opens: everything outside it is the dark court, everything
  // inside is cut away, and Education shows through.
  function drawPortal(t, rk) {
    const open = easeInOut(smooth(1.9, 3.3, t));
    // The rim as it is seen: an ellipse, rounding into a circle as it opens.
    const [rx] = project(RIM.x, RIM.y, RIM.z);
    const [, fy] = project(RIM.x, RIM.y, RIM.z - RIM.R);
    const [, by] = project(RIM.x, RIM.y, RIM.z + RIM.R);
    const ringR0 = RIM.R * rk;
    const ratio = clamp(Math.abs(fy - by) / 2 / Math.max(1, ringR0), 0.08, 1);
    const r = lerp(ringR0, Math.hypot(W, H) * 0.75, open);
    const ry2 = r * lerp(ratio, 1, open);
    const cx = lerp(rx, W / 2, open), cy = lerp((fy + by) / 2, H / 2, open);
    const dark = smooth(1.0, 1.8, t);
    g.save();
    g.globalAlpha = dark;
    g.fillStyle = '#05050a';
    g.beginPath();
    g.rect(0, 0, W, H);
    g.ellipse(cx, cy, r, ry2, 0, 0, TAU);
    g.fill('evenodd');
    g.restore();
    if (t > 1.9) {
      g.save();
      g.globalCompositeOperation = 'destination-out';
      g.beginPath(); g.ellipse(cx, cy, r, ry2, 0, 0, TAU); g.fill();
      g.restore();
    }
    // The ring itself, burning gold as it widens.
    const heat = smooth(0.2, 1.2, t) * (1 - smooth(2.8, 3.5, t));
    g.save();
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = `rgba(255, 196, 120, ${(0.28 * heat).toFixed(3)})`;
    g.lineWidth = 18 + 40 * open;
    g.beginPath(); g.ellipse(cx, cy, r, ry2, 0, 0, TAU); g.stroke();
    g.strokeStyle = `rgba(255, 228, 190, ${(0.9 * heat).toFixed(3)})`;
    g.lineWidth = 2.5 + 3 * open;
    g.beginPath(); g.ellipse(cx, cy, r, ry2, 0, 0, TAU); g.stroke();
    g.restore();
  }

  /* ---- running only while the court is open ---------------------------- */
  let raf = 0, last = 0;
  function frame(now) {
    raf = 0;
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 1 / 60);
    last = now;
    update(dt);
    if (!opened) { last = 0; return; }
    draw();
    if (!document.hidden) raf = requestAnimationFrame(frame);
    else last = 0;
  }
  function wake() {
    if (!raf && opened && !document.hidden) { last = 0; raf = requestAnimationFrame(frame); }
  }
  document.addEventListener('visibilitychange', wake);
  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (!opened) return; layout(); if (!finale) resetCamera(); wake(); }, 80);
  }, { passive: true });

  /* ---- the ways in: a ball by the shelf, and one in LoopShoot's poster ---- */
  const shelfBall = document.querySelector('.shelf-ball');
  if (shelfBall) {
    shelfBall.closest('.shelf-hint__or')?.removeAttribute('hidden');
    shelfBall.addEventListener('click', () => open(shelfBall.querySelector('.shelf-ball__ball') || shelfBall));
  }
  const poster = document.querySelector('.poster--loopshoot .poster-content');
  if (poster) {
    const cta = document.createElement('button');
    cta.type = 'button';
    cta.className = 'poster-cta court-cta';
    cta.innerHTML = '<i class="court-cta__ball" aria-hidden="true"></i>Play it here';
    poster.appendChild(cta);
    cta.addEventListener('click', () => open(cta.querySelector('.court-cta__ball')));
  }

  if (hintEl && coarse.matches) hintEl.querySelector('.court__verb')?.replaceChildren('Flick');
  window.CourtState = {
    get state() { return state; },
    get made() { return made; },
    get opened() { return opened; },
    get ball() { return ball && { x: ball.x, y: ball.y, z: ball.z, vx: ball.vx, vy: ball.vy, vz: ball.vz, scored: ball.scored }; },
    get tuning() { return { nStar: { ...nStar }, aimBias, misses, V_IDEAL, T_IDEAL }; },
    // For tests and the keyboard path alike: a shot by numbers.
    shoot: (opts) => { if (state === 'ready') launch({ power: 1, aim: 0, spin: 0, type: 'test', ...opts }); },
    open: () => open(shelfBall?.querySelector('.shelf-ball__ball') || shelfBall),
    close,
    // The same flight, run instantly and silently: for tuning the difficulty.
    simulate(opts) {
      const b = makeBall({ power: 1, aim: 0, spin: 0, type: 'test', ...opts });
      while (b.t < 4.2 && b.z < 8.5 && !(b.bounces >= 2 && b.y < 0.3)) stepBall(b, 1 / 240, true);
      return { scored: b.scored, verdict: verdict(b) };
    },
  };
})();
