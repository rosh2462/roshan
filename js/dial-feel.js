(() => {
  /* ---------- The dial's feel: clicks you hear and clicks you feel ----------
   * Sound: mechanical clicks synthesised once into tiny buffers (no files),
   * weighted and pitched by how fast the wheel turns, like a watch crown: a
   * fine ratchet between chapters, a heavier detent with a small chime that
   * rises a pentatonic step per chapter, a dull stop at either end.
   * Web Audio waits for the visitor's first tap or key (browsers require it)
   * and on iPhone runs as "ambient" audio: it mixes with music and respects
   * the silent switch.
   *
   * Haptics: Android vibrates. iOS has no vibration API; the only haptic a
   * page can raise there is the system tick of a real <input switch> under a
   * real finger, so the dial lays one under the thumb (js/dial.js) and this
   * module shuttles it: each tick moves the switch so the finger lands on its
   * other half, and WebKit plays the tick as if the thumb had flicked it.
   */
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (error) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (error) { /* private mode */ } },
  };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const SOUND_KEY = 'rm.dial.v1.sound';
  const PENTA = [0, 2, 4, 7, 9, 12, 14];

  const params = new URLSearchParams(location.search);
  const canVibrate = typeof navigator.vibrate === 'function';
  const coarse = matchMedia('(pointer: coarse)');
  // A page can only tick an iPhone's Taptic Engine through a switch control
  // (iPads have no Taptic Engine, so they keep their plain knob).
  const phoneSized = Math.min(screen.width, screen.height) <= 540;
  const switchHaptics = params.get('feel') === 'switch' ||
    (!canVibrate && 'switch' in HTMLInputElement.prototype && coarse.matches && phoneSized);

  let muted = store.get(SOUND_KEY) === 'off';
  let ctx = null, out = null, B = null;

  /* ---- sound ---- */
  function synth(rate) {
    let seed = 1;
    const noise = () => { seed = (seed * 16807) % 2147483647; return seed / 1073741823.5 - 1; };
    const make = (ms, fill) => {
      const n = Math.ceil(rate * ms / 1000);
      const buffer = ctx.createBuffer(1, n, rate);
      const d = buffer.getChannelData(0);
      fill(d, n);
      let peak = 0;
      for (let i = 0; i < n; i += 1) peak = Math.max(peak, Math.abs(d[i]));
      if (peak > 0) for (let i = 0; i < n; i += 1) d[i] *= 0.9 / peak;
      // A 1.5 ms fade-out so no buffer ends on a click of its own.
      const tail = Math.min(n, Math.round(rate * 0.0015));
      for (let i = 0; i < tail; i += 1) d[n - 1 - i] *= i / tail;
      return buffer;
    };
    const TAU = Math.PI * 2;
    // Fine ratchet: a spark of high-passed noise ringing two small metal modes.
    const ratchet = (m1, m2, decay, spark) => (d, n) => {
      let prev = 0;
      for (let i = 0; i < n; i += 1) {
        const t = i / rate;
        const x = noise(), hp = x - prev; prev = x;
        d[i] = hp * spark * Math.exp(-t / 0.0005) +
          (Math.sin(TAU * m1 * t) * 0.62 + Math.sin(TAU * m2 * t) * 0.3) * Math.exp(-t / decay);
      }
    };
    const fine = make(16, ratchet(3150, 5230, 0.0016, 0.55));
    const fineSoft = make(18, ratchet(2240, 3870, 0.0021, 0.35));
    // Detent: a ball dropping into its notch — a sharp click on a short body.
    const detent = make(70, (d, n) => {
      let prev = 0, phase = 0, lp = 0;
      for (let i = 0; i < n; i += 1) {
        const t = i / rate;
        const x = noise(), hp = x - prev; prev = x;
        lp += 0.18 * (x - lp);
        phase += TAU * (140 + 90 * Math.exp(-t / 0.006)) / rate;
        d[i] = hp * 0.9 * Math.exp(-t / 0.0008) +
          lp * 0.5 * Math.exp(-t / 0.003) +
          Math.sin(phase) * 0.85 * Math.exp(-t / 0.011) +
          Math.sin(TAU * 1180 * t) * 0.22 * Math.exp(-t / 0.005);
      }
    });
    // Chime: a soft glassy ping, pitched per chapter at play time.
    const chime = make(260, (d, n) => {
      for (let i = 0; i < n; i += 1) {
        const t = i / rate;
        const attack = Math.min(1, t / 0.002);
        d[i] = attack * (Math.sin(TAU * 1568 * t) * Math.exp(-t / 0.07) +
          Math.sin(TAU * 1568 * 2.76 * t) * 0.18 * Math.exp(-t / 0.025) +
          Math.sin(TAU * 1568 * 5.4 * t) * 0.06 * Math.exp(-t / 0.01));
      }
    });
    // End stop: the wheel meets its pin — dull, low, a little wooden.
    const stop = make(90, (d, n) => {
      let lp = 0;
      for (let i = 0; i < n; i += 1) {
        const t = i / rate;
        lp += 0.08 * (noise() - lp);
        d[i] = Math.sin(TAU * (92 + 40 * Math.exp(-t / 0.01)) * t) * Math.exp(-t / 0.022) +
          lp * 2.2 * Math.exp(-t / 0.004);
      }
    });
    // Grab: the thumb takes the grip — a soft, close tock.
    const grab = make(40, (d, n) => {
      let lp = 0;
      for (let i = 0; i < n; i += 1) {
        const t = i / rate;
        lp += 0.25 * (noise() - lp);
        d[i] = Math.sin(TAU * 520 * t) * 0.7 * Math.exp(-t / 0.006) + lp * 0.9 * Math.exp(-t / 0.0025);
      }
    });
    return { fine, fineSoft, detent, chime, stop, grab };
  }

  function audio() {
    if (ctx) {
      // Suspended before a first tap, or interrupted by a call or the app switcher.
      if (ctx.state !== 'running') ctx.resume().catch(() => {});
      return ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try { if (navigator.audioSession) navigator.audioSession.type = 'ambient'; } catch (error) { /* older Safari */ }
    try { ctx = new AC({ latencyHint: 'interactive' }); } catch (error) { return null; }
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 10;
    comp.ratio.value = 5;
    comp.attack.value = 0.001;
    comp.release.value = 0.09;
    out = ctx.createGain();
    out.gain.value = 0.5;
    // The dial lives in the bottom-right corner, and so does its sound.
    if (ctx.createStereoPanner) {
      const pan = ctx.createStereoPanner();
      pan.pan.value = 0.2;
      out.connect(pan);
      pan.connect(comp);
    } else out.connect(comp);
    comp.connect(ctx.destination);
    B = synth(ctx.sampleRate);
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }
  // Browsers only start audio inside a tap, click or key press. Any of them,
  // anywhere on the page, readies the dial's sound (silently), and wakes it
  // again after iOS has interrupted it.
  function unlock() {
    if (!muted && (!ctx || ctx.state !== 'running')) audio();
  }
  ['pointerup', 'touchend', 'click', 'keydown'].forEach((type) => document.addEventListener(type, unlock, { capture: true, passive: true }));

  function play(buffer, gain, rate) {
    if (muted || !ctx || ctx.state !== 'running' || !buffer) return;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = rate;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(out);
    src.onended = () => { src.disconnect(); g.disconnect(); };
    src.start();
  }
  const jitter = () => 1 + (Math.random() - 0.5) * 0.05;

  /* ---- haptics ---- */
  let lastPulse = 0;
  function vibrate(ms, gap) {
    if (!canVibrate || document.hidden) return false;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return false;
    const now = performance.now();
    if (now - lastPulse < gap) return false;
    lastPulse = now;
    try { navigator.vibrate(ms); } catch (error) { /* blocked */ }
    return true;
  }
  // iPhone: the switch under the thumb, moved so the finger is on its other half.
  let shuttle = null;
  function shuttleStart(input) {
    if (!switchHaptics || !input) return;
    input.style.translate = '';
    // Left where it is until the first tick: a tap must land on it, and lift
    // off it, exactly as the finger met it.
    shuttle = { input, tx: 0, on: input.checked, t0: performance.now(), last: 0 };
  }
  function place(x, on) {
    const s = shuttle;
    // Measured each time: the switch grows from the knob to the whole wheel
    // when a push on the knob opens it.
    const box = s.input.getBoundingClientRect();
    const left = box.left - s.tx, w = Math.max(80, box.width);
    // Far past either end, so a wandering thumb never flips it by itself.
    const local = on ? w * 2.5 : -w * 1.5;
    s.tx = x - left - local;
    s.input.style.translate = `${s.tx.toFixed(1)}px 0`;
    // Applied now, so the very next touchmove is judged against it.
    void s.input.offsetWidth;
  }
  function shuttleTick(x, gap) {
    const s = shuttle;
    if (!s) return false;
    const now = performance.now();
    // WebKit starts tracking a held switch 200 ms after the touch lands (later
    // on a busy main thread); a move before then would be misread for the
    // whole turn, so the first ~300 ms stay silent.
    if (now - s.t0 < 300 || now - s.last < gap) return false;
    s.last = now;
    s.on = !s.on;
    place(x, s.on);
    return true;
  }
  function shuttleEnd() {
    if (!shuttle) return;
    const { input } = shuttle;
    shuttle = null;
    requestAnimationFrame(() => { if (!shuttle) input.style.translate = ''; });
  }

  /* ---- the vocabulary ---- */
  let lastFine = 0, lastDetent = 0;
  const touchLike = (type) => type === 'touch' || type === 'pen';
  const feel = {
    switchHaptics,
    get muted() { return muted; },
    setMuted(value) {
      muted = !!value;
      store.set(SOUND_KEY, muted ? 'off' : 'on');
      if (!muted) audio();
    },
    // Called from inside a gesture, so audio can start on this very touch.
    prime() { if (!muted) audio(); },
    shuttleStart,
    shuttleEnd,
    // A fine ratchet tick between chapters. speed: degrees of wheel per second.
    fine(speed, type, x) {
      const v = Math.abs(speed);
      const now = performance.now();
      if (now - lastFine < (v > 500 ? 34 : 22)) return;
      lastFine = now;
      const e = smooth(30, 420, v);
      play(e < 0.45 ? B?.fineSoft : B?.fine, (0.2 + 0.32 * e) * (v > 650 ? 0.7 : 1), (0.92 + 0.3 * e) * jitter());
      if (!touchLike(type) || v > 420) return;
      if (!shuttleTick(x, 45)) vibrate(5, 34);
    },
    // A chapter detent: heavier, with the chapter's note.
    detent(k, speed, type, x) {
      const v = Math.abs(speed);
      const now = performance.now();
      const e = smooth(0, 520, v);
      if (now - lastDetent > 28) {
        lastDetent = now;
        play(B?.detent, 0.7 + 0.3 * e, (0.95 + 0.14 * e) * jitter());
        play(B?.chime, 0.13 + 0.12 * (1 - e), Math.pow(2, PENTA[clamp(k, 0, 6)] / 12));
      }
      if (!touchLike(type)) return;
      if (!shuttleTick(x, 30)) vibrate(13, 26);
    },
    stop(type, x) {
      play(B?.stop, 0.85, jitter());
      if (touchLike(type) && !shuttleTick(x, 0)) vibrate([22], 0);
    },
    grab(type) {
      play(B?.grab, 0.5, jitter());
      if (touchLike(type)) vibrate(8, 0);
    },
    select(k, type) {
      play(B?.detent, 0.8, jitter());
      play(B?.chime, 0.2, Math.pow(2, PENTA[clamp(k, 0, 6)] / 12));
      if (touchLike(type)) vibrate(12, 0);
    },
    // For tests: what the engine can do here.
    get state() { return { switchHaptics, canVibrate, muted, audio: ctx ? ctx.state : 'none' }; },
  };
  window.DialFeel = feel;
})();
