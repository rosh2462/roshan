(() => {
  /* ---------- Story chapters: 03 Beyond · 04 Works · 05 Education · 06 Contact ----------
   * Full-bleed scenes, built the way the car chapters are (see
   * js/chapters.js): one dominant surface fills the whole frame, the camera
   * moves through it, and the words arrive as title cards over it — never a
   * small illustration in a box. Each chapter opens with the shared slate
   * and hands off to the next with no visible gap (.has-story .story
   * overlaps the one before it by a screen).
   *
   * The markup and CSS describe each chapter's finished state as an
   * ordinary page. This file hides what's about to be revealed and plays it
   * in; without it (reduced motion, or GSAP failing to load) nothing is
   * hidden and nothing is pinned.
   */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || !window.SceneKit) return;

  gsap.registerPlugin(ScrollTrigger);
  const { slateBeats, trackTransitions, driveSharedScene } = window.SceneKit;

  document.documentElement.classList.add('has-story');

  // Line drawings are drawn on by their stroke-dashoffset attribute (paths
  // with pathLength 1 and a dasharray of 1): 1 is undrawn, 0 fully drawn.
  const drawn = (v) => ({ attr: { 'stroke-dashoffset': v } });

  const seeded = (seed) => () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  function setupStory(scene, compact = false) {
    const section = document.getElementById(scene.id);
    const stage = section && section.querySelector('.story-stage');
    if (!stage) return;
    const $ = (sel) => section.querySelector(sel);
    const $$ = (sel) => [...section.querySelectorAll(sel)];

    const geo = { cw: 0, ch: 0 };
    const measure = () => {
      geo.cw = stage.clientWidth;
      geo.ch = stage.clientHeight;
    };
    measure();
    ScrollTrigger.addEventListener('refreshInit', measure);

    const shared = scene.id === 'chapter-beyond' || scene.id === 'chapter-work';
    const scrollConfig = {
        trigger: section,
        start: 'top top',
        end: () => `bottom ${stage.clientHeight}px`,
        scrub: shared ? false : compact ? 0.28 : 0.45,
        invalidateOnRefresh: true,
        onUpdate: (self) => trackTransitions(scene, self),
        onToggle: (self) => trackTransitions(scene, self),
        onRefresh: (self) => trackTransitions(scene, self),
    };
    const tl = gsap.timeline(shared ? { paused: true } : { scrollTrigger: scrollConfig });
    const range = shared ? ScrollTrigger.create(scrollConfig) : tl.scrollTrigger;

    // All beat positions use the same 0..1 interval, including the final hold.
    tl.to({}, { duration: 1 }, 0);
    const portraitHandoff = scene.id === 'chapter-beyond' && window.SceneKit.boschPortrait;
    if (portraitHandoff) {
      // Keep opacity under the camera's clock, and only switch visibility
      // once the next stage reaches its resting position. Using the single
      // viewport stage also avoids compositing the whole long chapter.
      gsap.set(stage, { visibility: 'hidden' });
      tl.set(stage, { visibility: 'visible' }, 0.012);
      // The display now covers the viewport. The stage beneath it has the
      // same black surface, so release the bridge without another fade.
      tl.set(portraitHandoff.layer, { autoAlpha: 0 }, 0.016);
    } else {
      gsap.set(stage, { autoAlpha: 0 });
      tl.to(stage, { autoAlpha: 1, duration: 0.012, ease: 'none' }, 0);
    }

    scene.build(tl, { $, $$, geo, compact });
    const render = () => {
      if (!shared) return;
      section._sceneProgress = tl.progress();
      if (scene.id === 'chapter-beyond' && window.HiWiLabState) {
        const p = section._sceneProgress;
        // Drawing starts just before the lab fades up, so its first frame exists.
        HiWiLabState.visible = p > 0.435 && (compact || p < 1);
      }
      section.dispatchEvent(new Event('sceneprogress'));
    };
    tl.eventCallback('onUpdate', render);
    ScrollTrigger.addEventListener('refresh', render);
    render();
    const stopShared = shared ? driveSharedScene(section, tl, range) : null;
    // Keep refresh listeners from accumulating when responsive layouts change.
    return () => {
      stopShared?.();
      ScrollTrigger.removeEventListener('refreshInit', measure);
      ScrollTrigger.removeEventListener('refresh', render);
      trackTransitions(scene, { isActive: false, progress: 0 });
    };
  }

  /* ---------- Chapter 03 · Beyond ----------
   * Two full-bleed scenes on one chapter. First, a sharp still portrait on
   * the dark stage, with the introduction arriving as a pull-quote and toolkit
   * as a thin marquee at the edge. The stage dims, and a second scene wakes:
   * the HiWi laboratory, built in real-time 3D (js/lab/) as the visitor
   * scrolls — a university computer lab assembled piece by piece (Blender),
   * lit and switched on (Unity), then walked into and used: the camera moves
   * to a workstation and selects its monitor (XR interaction). Each contribution arrives as its own
   * oversized statement while the lab answers it, and scrolling back takes
   * the lab apart again. The stage dims to black, which hands straight to
   * the film reel.
   */
  const BEYOND = {
    id: 'chapter-beyond',
    transitions: [[0, 0.24], [0.40, 0.48], [0.88, 1]],
    build(tl, { $, $$, geo, compact }) {
      // Scene A holds a single, sharp portrait while the introduction
      // settles in. The particles arrive through the dashboard display;
      // this image never needs to be blurred or relit.
      const dock = $('.slate-dock');
      const pull = $('.intro-pull');
      const support = $('.intro-support');
      const now = $('.intro-now');
      const marquee = $('.toolkit-marquee');

      // This chapter skips the shared big title card entirely (never
      // animated in, so never visible) — only the small dock ever shows,
      // so nothing large ever sits over him. His name and role are the
      // hero's headline already; this chapter doesn't repeat them.
      gsap.set($$('.slate-index, .slate-org, .slate-role, .slate-lede'), { opacity: 0 });
      gsap.set(dock, { opacity: 0, x: -8 });
      gsap.set([pull, support, now], { opacity: 0, y: 16 });
      gsap.set(marquee, { opacity: 0 });
      gsap.set($('.reveal-photo--after'), { opacity: 0 });

      tl.to(dock, { opacity: 1, x: 0, duration: 0.035, ease: 'power2.out' }, 0.235);

      // The unchanged photograph remains the accessible fallback. Its gate
      // also prevents an early portrait if WebGL or a lazy asset is unavailable.
      // Match face/boot.js: particle progress .94 is the photo's first frame.
      const photoStart = (0.94 - 0.22) / 0.78 * 0.235;
      tl.fromTo($('.reveal-photo--after'), { opacity: 0 }, {
        opacity: 1, duration: 0.235 - photoStart, ease: 'sine.inOut', immediateRender: false,
      }, photoStart);

      // The introduction follows the quiet handoff, leaving the photograph
      // unobstructed when the chapter first arrives.
      tl.to(pull, { opacity: 1, y: 0, duration: 0.04, ease: 'power2.out' }, 0.245)
        .to(support, { opacity: 1, y: 0, duration: 0.035, ease: 'power2.out' }, 0.265)
        .to(now, { opacity: 1, y: 0, duration: 0.035, ease: 'power2.out' }, 0.285)
        .to(marquee, { opacity: 1, duration: 0.04, ease: 'power1.out' }, 0.28);

      // (to 0.405: held.) A scene change, not a crossfade: the lines leave
      // in turn, rising as they fade; then the portrait's light goes down as
      // it recedes a touch. The lab comes up after a beat of darkness (.44).
      // (With the particle portrait, js/face/boot.js plays the same beats.)
      tl.to([pull, support, now], { opacity: 0, y: -14, duration: 0.025, stagger: 0.005, ease: 'power1.in' }, 0.405)
        .to($('.reveal-frame'), { opacity: 0, scale: 0.965, duration: 0.035, ease: 'sine.inOut' }, 0.41)
        .to(marquee, { opacity: 0, duration: 0.03, ease: 'sine.inOut' }, 0.41)
        .to(dock, { opacity: 0, duration: 0.03, ease: 'power1.in' }, 0.41);

      this.buildConsole(tl, { $, $$, geo, compact }, dock);
    },

    buildConsole(tl, { $, $$, geo, compact }, prevDock) {
      const kicker = $('.console-kicker');
      const role = $('.console-role');
      const beats = $$('.console-beat');
      const steps = $$('.lab-steps li');
      const stepRail = $('.lab-steps');
      const consoleRoot = $('.console');

      // The lab is real-time 3D (js/lab/). All it reads is one number — how
      // far through its stretch of this timeline we are — and it is written
      // here, so scrolling forward builds the lab and scrolling back takes
      // it apart. LAB_FROM..LAB_TO is that stretch; at() places a moment of
      // the lab (0..1) on the timeline.
      //
      // The captions below are timed in the lab's own terms and must stay in
      // step with SCHEDULE in js/lab/config.js: the room is modelled and
      // built in Blender by 0.5; its lighting turns from a modelling viewport
      // into a lit Unity scene (0.53–0.67); then the camera walks in and picks
      // out an object (0.72 onward).
      const LAB_FROM = 0.46;
      const LAB_TO = 0.9;
      const at = (l) => LAB_FROM + l * (LAB_TO - LAB_FROM);
      const span = (a, b) => (b - a) * (LAB_TO - LAB_FROM);
      const lab = (window.HiWiLabState = window.HiWiLabState || { progress: 0 });
      lab.progress = 0;

      gsap.set([kicker, role], { opacity: 0, y: 12 });
      gsap.set(beats, { opacity: 0, y: 14 });
      gsap.set(stepRail, { opacity: 0 });
      gsap.set(steps, { '--f': 0 });

      // The console fills the same stage as Scene A underneath it; it stays
      // hidden until Scene A dims, and hidden also tells the 3D to stop drawing.
      gsap.set(consoleRoot, { autoAlpha: 0 });
      tl.to(consoleRoot, { autoAlpha: 1, duration: 0.04, ease: 'sine.inOut' }, 0.44);

      tl.fromTo(lab, { progress: 0 }, { progress: 1, duration: LAB_TO - LAB_FROM, ease: 'none', immediateRender: false }, LAB_FROM);

      tl.to([kicker, role], { opacity: 1, y: 0, duration: 0.04, stagger: 0.015, ease: 'power2.out' }, at(0.02))
        .to(stepRail, { opacity: 1, duration: 0.03, ease: 'power1.out' }, at(0.04));

      // One caption per stage: it arrives as the stage begins and leaves as
      // the next one does, while its segment of the rail fills.
      const stages = [
        [0.05, 0.5], // 01 — Blender: the lab is modelled and assembled
        [0.53, 0.7], // 02 — Unity: the same room, lit and running in the engine
        [0.73, 1], // 03 — XR: the camera walks in; the monitor is selected
      ];
      stages.forEach(([a, b], i) => {
        tl.to(beats[i], { opacity: 1, y: 0, duration: 0.03, ease: 'power2.out' }, at(a));
        if (i < stages.length - 1) {
          tl.to(beats[i], { opacity: 0, y: -10, duration: 0.02, ease: 'power1.in' }, at(b) - 0.005);
        }
        tl.to(steps[i], { '--f': 1, duration: span(a, b), ease: 'none' }, at(a));
      });

      // (to 0.92: held on the finished lab.) The stage dims — straight into
      // the film reel.
      const consoleAll = [consoleRoot, kicker, role, $('.console-beats'), stepRail];
      if (compact) {
        // The monitor begins growing while the lab is still held in view.
        // Clear its labels before the stage starts travelling past the nav.
        tl.to([kicker, role, $('.console-beats'), stepRail], { opacity: 0, duration: 0.08, ease: 'sine.inOut' }, 0.91);
      } else {
        tl.to(consoleAll, { opacity: 0, duration: 0.055, ease: 'power1.in' }, 0.945);
      }
      if (prevDock) tl.set(prevDock, { display: 'none' }, 0.92);
    },
  };

  /* ---------- Chapter 04 · Creative works ----------
   * The camera cuts sideways between three full-bleed posters, each filling
   * the whole frame the way BMW and Bosch do. NeuroMaze plays as a real
   * gameplay capture, tuning in like a monitor switching on. The Apocalypse
   * is a wide, cinematic alien horizon with the world drifting past as the
   * astronaut runs. LoopShoot VR is a live jump shot, the ball arcing to a
   * lit rim while a synced second player waits across the net. The strip
   * dims at the end, like a projector switching off.
   */
  const WORKS = {
    id: 'chapter-work',
    transitions: [[0, 0.12], [0.93, 1]],
    build(tl, { $, $$, geo }) {
      const rails = $$('.reel-rail');
      const track = $('.reel-track');
      const posters = $$('.poster');
      const copyOf = (p) => [...p.querySelectorAll('.poster-content > *')];

      gsap.set(rails, { opacity: 0 });
      posters.forEach((p) => gsap.set(copyOf(p), { opacity: 0, y: 24 }));

      const dock = slateBeats(tl, $, { at: 0.01, dockAt: 0.1 });
      tl.to(rails, { opacity: 1, duration: 0.04, ease: 'power1.out' }, 0.08);

      // The first frame is the lab monitor's match cut; subsequent works
      // continue sideways once the visitor has had time to read.
      gsap.set(track, { x: 0 });
      const advance = (frame, at) => {
        tl.to(track, { x: () => -frame * geo.cw, duration: 0.08, ease: 'power3.inOut' }, at)
          .to(rails, { backgroundPositionX: () => `${-frame * geo.cw}px`, duration: 0.08, ease: 'power3.inOut' }, at);
      };
      advance(1, 0.42);
      advance(2, 0.69);

      const arrive = (p, at) => {
        tl.to(copyOf(p), { opacity: 1, y: 0, duration: 0.035, stagger: 0.006, ease: 'power2.out' }, at);
      };
      arrive(posters[0], 0.13);
      arrive(posters[1], 0.47);
      arrive(posters[2], 0.74);

      buildNeuroMaze($, tl);
      buildApocalypse($, $$, tl);
      buildLoopShoot($, $$, tl);

      tl.to([track, ...rails, dock], { opacity: 0, duration: 0.06, ease: 'power1.in' }, 0.93)
        .to(track, { x: () => -2.12 * geo.cw, duration: 0.07, ease: 'power1.in' }, 0.93);
    },
  };

  // 01 · NeuroMaze: the real capture, full-bleed, tuning in like a monitor
  // switching on before it holds on the game's own red pulse.
  function buildNeuroMaze($, tl) {
    const poster = $('.poster--neuromaze');
    const bg = poster.querySelector('.poster-bg');
    const capture = $('.poster-capture');
    const scanlines = $('.poster-scanlines');
    const rec = $('.poster-rec');
    const tag = $('.poster-tag');
    const quote = $('.poster-quote');

    gsap.set(bg, { opacity: 0 });
    gsap.set(capture, { scale: 1.04 });
    gsap.set(scanlines, { opacity: 0 });
    gsap.set([rec, tag, quote], { opacity: 0 });

    tl.to(bg, { opacity: 1, duration: 0.1, ease: 'power2.out' }, 0.02)
      .to(capture, { scale: 1, duration: 0.1, ease: 'power2.out' }, 0.03)
      .to(scanlines, { opacity: 0.3, duration: 0.03 }, 0.12)
      .to([rec, tag], { opacity: 1, duration: 0.025 }, 0.14)
      .to(quote, { opacity: 1, duration: 0.03, ease: 'power1.out' }, 0.2);
  }

  // 02 · The Apocalypse: a wide alien horizon, drifting past at three
  // depths as the astronaut runs, the oxygen gauge counting down.
  function buildApocalypse($, $$, tl) {
    const poster = $('.poster--apocalypse');
    const stars = poster.querySelector('.apoc-stars');
    const nearMoon = $('.apoc-moon--near');
    const farMoon = $('.apoc-moon--far');
    const ridgeBack = $('.apoc-ridge--back');
    const ridgeMid = $('.apoc-ridge--mid');
    const ground = $('.apoc-ground');
    // .apoc-runner itself carries an SVG translate() attribute that places
    // the whole figure — it only ever fades. The stride and the tank drain
    // are animated on children that have no attribute of their own.
    const runner = $('.apoc-runner');
    const legBack = $('.apoc-leg--back');
    const legFront = $('.apoc-leg--front');
    const armBack = $('.apoc-arm--back');
    const armFront = $('.apoc-arm--front');
    const tankLevel = $('.apoc-tank-level');
    const motionLines = $$('.apoc-motion-line');
    const hud = $('.apoc-hud');
    const level = $('.apoc-hud-level');
    const pct = $('.apoc-hud-pct');
    const warning = $('.apoc-warning');

    buildStars(stars);

    gsap.set([nearMoon, farMoon], { opacity: 0 });
    gsap.set([ridgeBack, ridgeMid, ground], { opacity: 0 });
    gsap.set(runner, { opacity: 0 });
    gsap.set([legBack, armBack], { rotation: -10, svgOrigin: '46 210' });
    gsap.set([legFront, armFront], { rotation: 10, svgOrigin: '78 214' });
    gsap.set(motionLines, { opacity: 0 });
    gsap.set(hud, { opacity: 0, scale: 0.85, transformOrigin: '50% 50%' });
    gsap.set(warning, { opacity: 0 });

    tl.fromTo(stars, { opacity: 0 }, { opacity: 1, duration: 0.03 }, 0.43)
      .to([farMoon, nearMoon], { opacity: 1, duration: 0.05, stagger: 0.02, ease: 'power1.out' }, 0.44)
      .to(ridgeBack, { opacity: 1, duration: 0.04 }, 0.45)
      .to(ridgeMid, { opacity: 1, duration: 0.04 }, 0.46)
      .to(ground, { opacity: 1, duration: 0.04 }, 0.47)
      .to(runner, { opacity: 1, duration: 0.04, ease: 'power2.out' }, 0.48)
      // The stride: front and back leg/arm pairs swing in opposition, a
      // full running cycle for as long as the frame holds.
      .to(legBack, { rotation: 26, duration: 0.05, repeat: 5, yoyo: true, ease: 'sine.inOut', svgOrigin: '46 210' }, 0.5)
      .to(legFront, { rotation: -22, duration: 0.05, repeat: 5, yoyo: true, ease: 'sine.inOut', svgOrigin: '78 214' }, 0.5)
      .to(armBack, { rotation: 24, duration: 0.05, repeat: 5, yoyo: true, ease: 'sine.inOut', svgOrigin: '46 210' }, 0.5)
      .to(armFront, { rotation: -20, duration: 0.05, repeat: 5, yoyo: true, ease: 'sine.inOut', svgOrigin: '78 214' }, 0.5)
      .fromTo(motionLines, { opacity: 0, x: 10 }, { opacity: 0.55, x: -8, duration: 0.045, repeat: 5, yoyo: true, ease: 'sine.inOut' }, 0.52)
      .fromTo(ridgeBack, { x: 0 }, { x: -30, duration: 0.24, ease: 'none' }, 0.48)
      .fromTo(ridgeMid, { x: 0 }, { x: -64, duration: 0.24, ease: 'none' }, 0.48)
      .fromTo(ground, { x: 0 }, { x: -110, duration: 0.24, ease: 'none' }, 0.48)
      .to(hud, { opacity: 1, scale: 1, duration: 0.03, ease: 'back.out(2)' }, 0.49)
      .to({ v: 100 }, {
        v: 14,
        duration: 0.2,
        ease: 'power1.in',
        onUpdate() { pct.textContent = `${Math.round(this.targets()[0].v)}%`; },
      }, 0.49)
      .fromTo(level, { attr: { 'stroke-dashoffset': 0 } }, { attr: { 'stroke-dashoffset': 0.86 }, duration: 0.2, ease: 'power1.in' }, 0.49)
      // The tank on the pack drains with the corner gauge — the same
      // number, told twice: once as a HUD, once on the character itself.
      .to(tankLevel, { scaleY: 0.16, duration: 0.2, ease: 'power1.in' }, 0.49)
      .to(level, { stroke: '#ff5a4e', duration: 0.02 }, 0.65)
      .to(warning, { opacity: 1, duration: 0.02 }, 0.66)
      .to(warning, { opacity: 0.2, duration: 0.04, repeat: 3, yoyo: true, ease: 'none' }, 0.68);
  }

  // A sky for the poster: a seeded scatter of faint stars above the rim.
  function buildStars(group) {
    if (!group || group.childElementCount) return;
    const rand = seeded(1969);
    const ns = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < 60; i += 1) {
      const star = document.createElementNS(ns, 'circle');
      star.setAttribute('cx', (rand() * 1600).toFixed(1));
      star.setAttribute('cy', (rand() * 380).toFixed(1));
      star.setAttribute('r', (0.7 + rand() * 1.3).toFixed(2));
      star.setAttribute('opacity', (0.25 + rand() * 0.6).toFixed(2));
      group.appendChild(star);
    }
  }

  // 03 · LoopShoot VR: the release, the arc, the swish, the combo — and a
  // second player kept in sync across the net the whole time.
  function buildLoopShoot($, $$, tl) {
    const poster = $('.poster--loopshoot');
    const hoopParts = $$('.loop-rim, .loop-backboard, .loop-backboard-square, .loop-net');
    const floorGrid = poster.querySelector('.court-floor-grid');
    const glowL = poster.querySelector('.court-glow--l');
    const glowR = poster.querySelector('.court-glow--r');
    // .loop-hoop and .loop-remote each carry their own translate()+scale()
    // attribute — they only ever fade, never get a GSAP transform.
    const hoop = $('.loop-hoop');
    const remote = $('.loop-remote');
    const hands = $('.loop-hands');
    const glove = $('.loop-glove');
    const controllerRing = $('.loop-controller-ring');
    const sync = $('.loop-sync');
    const arc = $('.loop-arc');
    const ball = $('.loop-ball');
    const trailDots = $$('.loop-trail-dot');
    const releaseRay = $('.loop-ray');
    const net = $('.loop-net');
    const hud = $('.loop-hud');
    const comboN = $('.loop-combo-n');
    const swish = $('.loop-hud-swish');

    gsap.set([floorGrid, glowL, glowR], { opacity: 0 });
    gsap.set(hoopParts, { opacity: 0 });
    gsap.set(hoop, { opacity: 0 });
    gsap.set([hands, glove], { opacity: 0, y: 16 });
    gsap.set(controllerRing, { opacity: 0 });
    gsap.set(remote, { opacity: 0 });
    gsap.set(sync, { opacity: 0 });
    gsap.set([arc, releaseRay], { ...drawn(1), opacity: 0 });
    gsap.set(hud, { opacity: 0, y: -6 });
    gsap.set(swish, { opacity: 0, scale: 0.7, transformOrigin: '50% 50%' });

    // The shot: close and large at the hand, small and far at the rim —
    // forced perspective, not a flat 2D toss.
    const from = { x: 915, y: 600, s: 1.3 };
    const to = { x: 932, y: 229, s: 0.5 };
    const bow = 340;
    const at = (t) => {
      const x = from.x + (to.x - from.x) * t;
      const y = from.y + (to.y - from.y) * t - bow * 4 * t * (1 - t);
      const s = from.s + (to.s - from.s) * t;
      return { x, y, s };
    };
    const place = (t) => {
      const p = at(t);
      ball.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${p.s.toFixed(2)})`);
      trailDots.forEach((dot, i) => {
        const tt = Math.max(0, t - (i + 1) * 0.045);
        const p2 = at(tt);
        dot.setAttribute('cx', p2.x.toFixed(1));
        dot.setAttribute('cy', p2.y.toFixed(1));
        dot.setAttribute('r', (10 * p2.s).toFixed(1));
        dot.style.opacity = tt <= 0 ? 0 : (0.4 * (1 - i / trailDots.length)).toFixed(2);
      });
    };
    gsap.set(ball, { opacity: 0 });
    place(0);

    tl.to([floorGrid, glowL, glowR], { opacity: 1, duration: 0.04, ease: 'power1.out' }, 0.7)
      .to(hoopParts, { opacity: 1, duration: 0.03, stagger: 0.008 }, 0.72)
      .to(hoop, { opacity: 1, duration: 0.03 }, 0.72)
      .to([hands, glove], { opacity: 1, y: 0, duration: 0.04, stagger: 0.01, ease: 'power2.out' }, 0.73)
      .to(controllerRing, { opacity: 1, duration: 0.03 }, 0.75)
      .to(remote, { opacity: 0.6, duration: 0.03 }, 0.74)
      .to(sync, { opacity: 0.8, duration: 0.02 }, 0.74)
      .to(sync, { attr: { 'stroke-dashoffset': -0.6 }, duration: 0.03, ease: 'none', repeat: 5 }, 0.74)
      .to(remote, { opacity: 0.3, duration: 0.06, repeat: 3, yoyo: true, ease: 'sine.inOut' }, 0.76)
      // The release: a quick flash off the glove, then the ball leaves.
      .to(releaseRay, { opacity: 1, ...drawn(0), duration: 0.015, ease: 'power2.out' }, 0.78)
      .to(releaseRay, { opacity: 0, duration: 0.015 }, 0.796)
      .to(ball, { opacity: 1, duration: 0.01 }, 0.78)
      .to(arc, { opacity: 1, duration: 0.01 }, 0.78)
      .to(arc, { ...drawn(0), duration: 0.07, ease: 'power1.out' }, 0.78)
      .to({ t: 0 }, {
        t: 1,
        duration: 0.07,
        ease: 'power1.out',
        onUpdate() { place(this.targets()[0].t); },
      }, 0.78)
      .to(arc, { opacity: 0, duration: 0.02 }, 0.855)
      .to(trailDots, { opacity: 0, duration: 0.02 }, 0.855)
      .to(net, { scaleY: 1.18, svgOrigin: '100 132', duration: 0.02, ease: 'power2.out' }, 0.85)
      .to(net, { scaleY: 1, svgOrigin: '100 132', duration: 0.04, ease: 'elastic.out(1, 0.5)' }, 0.872)
      .to(hud, { opacity: 1, y: 0, duration: 0.02, ease: 'power2.out' }, 0.85)
      .to(swish, { opacity: 1, scale: 1, duration: 0.02, ease: 'back.out(3)' }, 0.855)
      .to(swish, { opacity: 0, duration: 0.03, ease: 'power1.in' }, 0.89)
      .to({ value: 2 }, { value: 3, duration: 0.001, onUpdate() { comboN.textContent = Math.round(this.targets()[0].value); } }, 0.855)
      .fromTo(comboN, { scale: 1.5 }, { scale: 1, duration: 0.03, ease: 'back.out(3)' }, 0.855);
  }

  /* ---------- Chapter 05 · Education ----------
   * The same stage the hero opened on: one beam, drifting dust. The degree
   * arrives as massive type, then a foil-stamp sweep catches the light
   * across it, the institution and focus settle in beneath, and a thin
   * credential strip holds the details and the one link out. The hall
   * dims at the end.
   */
  const EDUCATION = {
    id: 'chapter-education',
    transitions: [[0, 0.18], [0.88, 1]],
    build(tl, { $, $$ }) {
      const hall = $('.grad-hall');
      const seats = $('.grad-seats');
      const beam = $('.grad-beam');
      const dust = $('.grad-dust');
      const floorGlow = $('.grad-floor-glow');
      const block = $('.degree-block');
      const foil = $('.foil');
      const institution = $('.degree-institution');
      const focus = $('.degree-focus');
      const strip = $('.credential-strip');
      const cells = $$('.credential-strip > *');

      gsap.set([seats, floorGlow], { opacity: 0 });
      gsap.set(beam, { opacity: 0 });
      gsap.set(dust, { opacity: 0 });
      gsap.set(foil, { opacity: 0, y: 20 });
      gsap.set([institution, focus], { opacity: 0, y: 16 });
      gsap.set(strip, { opacity: 0, y: 16 });
      gsap.set(cells, { opacity: 0 });
      gsap.set(foil, { '--foil-x': '-40%' });

      tl.to(seats, { opacity: 1, duration: 0.1, ease: 'power1.out' }, 0.01)
        .to(beam, { opacity: 1, duration: 0.12, ease: 'power1.out' }, 0.02)
        .to(dust, { opacity: 1, duration: 0.18, ease: 'power1.out' }, 0.04)
        .to(floorGlow, { opacity: 1, duration: 0.12, ease: 'power1.out' }, 0.05);
      const dock = slateBeats(tl, $, { at: 0.03, dockAt: 0.18 });

      tl.to(foil, { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.18)
        .to(foil, { '--foil-x': '80%', duration: 0.16, ease: 'power1.inOut' }, 0.23)
        .to(institution, { opacity: 1, y: 0, duration: 0.04, ease: 'power2.out' }, 0.26)
        .to(focus, { opacity: 1, y: 0, duration: 0.04, ease: 'power2.out' }, 0.3)
        .to(strip, { opacity: 1, y: 0, duration: 0.04, ease: 'power2.out' }, 0.34)
        .to(cells, { opacity: 1, duration: 0.02, stagger: 0.01 }, 0.36);

      // The floor light opens into dawn as the text leaves the stage.
      tl.to(floorGlow, { scaleX: 1.7, opacity: 0.65, duration: 0.18, ease: 'sine.inOut' }, 0.78)
        .to([block, strip, dock], { opacity: 0, duration: 0.07, ease: 'power1.in' }, 0.9)
        .to([seats, beam, dust], { opacity: 0, duration: 0.1 }, 0.9);
    },
  };

  /* ---------- Chapter 06 · Contact ----------
   * Daybreak. A horizon draws across the dark from the centre out, and the
   * first natural light of the whole journey rises behind it while the
   * closing lines come up, set like end credits. It ends on the page's
   * last frame, everything in place.
   */
  const CONTACT = {
    id: 'chapter-contact',
    transitions: [[0, 0.3]],
    build(tl, { $, $$ }) {
      const horizon = $('.dawn-horizon');
      const sky = $('.dawn-sky');
      const sun = $('.dawn-sun');
      const index = $('.finale-index');
      const title = $('.finale-title');
      const lede = $('.finale-lede');
      const rows = $$('.credits li');
      const footer = $('.finale-footer');

      gsap.set(horizon, { scaleX: 0.3 });
      gsap.set(sky, { opacity: 0.12 });
      gsap.set(sun, { opacity: 0.2, yPercent: 12 });
      gsap.set([index, title, lede, ...rows, footer], { opacity: 0, y: 18 });

      tl.to(horizon, { scaleX: 1, duration: 0.16, ease: 'power2.inOut' }, 0.005)
        .to(sun, { opacity: 1, yPercent: 0, duration: 0.6, ease: 'power2.out' }, 0.08)
        .to(sky, { opacity: 1, duration: 0.4, ease: 'power1.inOut' }, 0.1)
        .to(index, { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.08)
        .to(title, { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.12)
        .to(lede, { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.2)
        .to(rows, { opacity: 1, y: 0, duration: 0.05, stagger: 0.025, ease: 'power2.out' }, 0.26)
        .to(footer, { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.4);
    },
  };

  // A portrait or an actual monitor frame survives the cut between chapters.
  // These layers are fixed only during their short handoff; they never
  // receive input, and reverse with the rest of the scene.
  function setupHandoffs(compact) {
    const layers = [];
    const cleanups = [];
    const add = (kind, targetId) => {
      const target = document.getElementById(targetId);
      const compactScreen = compact && kind === 'screen';
      const labStage = document.querySelector('#chapter-beyond .story-stage');
      const layer = document.createElement('div');
      layer.className = `scene-bridge scene-bridge--${kind}${compactScreen ? ' scene-bridge--screen-compact' : ''}`;
      layer.setAttribute('aria-hidden', 'true');
      document.body.appendChild(layer);
      layers.push(layer);
      let refreshFrame = () => {};
      const stageHeight = () => (compactScreen ? labStage : document.querySelector('.chapter-zoom-bg')).clientHeight;
      const boundary = () => target.getBoundingClientRect().top + window.scrollY;
      const scrollConfig = {
        trigger: target,
        // Compact projects use normal page flow. Start the monitor zoom
        // during the final lab hold, before its sticky stage scrolls away,
        // and finish before the next heading reaches the navigation.
        start: () => boundary() - stageHeight() * (compactScreen ? 1.35 : 0.48),
        end: () => boundary() + (compactScreen ? -Math.max(90, stageHeight() * 0.1) : stageHeight() * 0.68),
        scrub: kind === 'screen' ? false : compact ? 0.28 : 0.45,
        invalidateOnRefresh: true,
        onRefresh: () => refreshFrame(),
      };
      const tl = gsap.timeline(kind === 'screen' ? { paused: true } : { scrollTrigger: scrollConfig });
      const range = kind === 'screen' ? ScrollTrigger.create(scrollConfig) : tl.scrollTrigger;
      gsap.set(layer, { autoAlpha: 0 });
      if (kind === 'screen') {
        tl.to(layer, { autoAlpha: 1, duration: 0.22, ease: 'sine.out' }, 0)
          .to(layer, { autoAlpha: 0, duration: compactScreen ? 0.22 : 0.3, ease: 'sine.inOut' }, compactScreen ? 0.68 : 0.7);
        if (compactScreen) tl.to({}, { duration: 1 }, 0);
        const frame = document.createElement('div');
        frame.className = 'scene-bridge__screen';
        layer.appendChild(frame);
        const pose = { p: 0 };
        const handoff = window.SceneKit.workHandoff = { progress: 0, origin: null, compact, available: false };
        let rect = null;
        const render = () => {
          const lab = window.HiWiLab;
          handoff.progress = tl.progress();
          // WebGL failure simply leaves the ordinary project entrance intact.
          frame.hidden = !lab || !lab.stats().drawn;
          handoff.available = !frame.hidden;
          if (frame.hidden) {
            target.dispatchEvent(new Event('sceneprogress'));
            return;
          }
          if (!rect || pose.p < 0.02) rect = lab.screenRect();
          const w = layer.clientWidth;
          const h = layer.clientHeight;
          const p = pose.p;
          const x = rect.x * (1 - p);
          const y = rect.y * (1 - p);
          const width = rect.width + (w - rect.width) * p;
          const height = rect.height + (h - rect.height) * p;
          handoff.origin = { x, y, width, height };
          if (compactScreen) {
            // Let cover crop the image as the monitor becomes a portrait
            // viewport, rather than stretching the gameplay out of shape.
            frame.style.width = `${width}px`;
            frame.style.height = `${height}px`;
            frame.style.transform = `translate3d(${x}px,${y}px,0)`;
          } else {
            frame.style.transform = `translate3d(${x}px,${y}px,0) scale(${width / w},${height / h})`;
          }
          // Whole pixels: a radius change repaints the capture's whole layer.
          const radius = `${compactScreen ? 0 : Math.round(12 * (1 - p))}px`;
          if (frame.style.borderRadius !== radius) frame.style.borderRadius = radius;
          target.dispatchEvent(new Event('sceneprogress'));
        };
        tl.fromTo(pose, { p: 0 }, { p: 1, duration: 0.62, ease: 'power2.inOut' }, 0.06);
        tl.eventCallback('onUpdate', render);
        refreshFrame = () => { rect = null; render(); };
        cleanups.push(driveSharedScene(null, tl, range));
      } else {
        tl.to(layer, { autoAlpha: 0.6, duration: 0.22, ease: 'sine.out' }, 0)
          .to(layer, { autoAlpha: 0, duration: 0.3, ease: 'sine.inOut' }, 0.7)
          .fromTo(layer, { yPercent: 12, scale: 0.8 },
            { yPercent: 0, scale: 1.25, duration: 1, ease: 'sine.inOut' }, 0);
      }
    };
    add('screen', 'chapter-work');
    if (!compact) {
      add('dawn', 'chapter-contact');
    }
    return () => {
      cleanups.forEach((dispose) => dispose());
      layers.forEach((layer) => layer.remove());
      window.SceneKit.workHandoff = null;
    };
  }

  function setupCompactLabExit() {
    const section = document.getElementById('chapter-beyond');
    const next = document.getElementById('chapter-work');
    const stage = section?.querySelector('.story-stage');
    const lab = section?.querySelector('.lab-scene');
    const captions = section?.querySelector('.console-beats');
    const nav = document.querySelector('.nav');
    if (!stage || !lab || !captions || !next) return;
    const exitEnd = () => Math.max(
      stage.clientHeight * 0.3,
      stage.clientHeight - captions.offsetTop + (nav?.getBoundingClientRect().bottom ?? 90) + 24,
    );
    // Once the lab unpins, its final caption travels toward the fixed nav.
    // Clear the lab before that caption reaches the nav, while the next
    // chapter's heading enters in ordinary document flow.
    // Fade a separate wrapper so reversing scroll preserves the reveal
    // timeline's visibility settings for the lab and its labels.
    gsap.fromTo(lab,
      { opacity: 1 },
      { opacity: 0, ease: 'sine.inOut', immediateRender: false, scrollTrigger: {
        trigger: next,
        start: () => `top ${Math.max(stage.clientHeight * 0.45, exitEnd() + stage.clientHeight * 0.1)}px`,
        end: () => `top ${exitEnd()}px`,
        scrub: 0.16,
        invalidateOnRefresh: true,
      } });
  }

  function init() {
    const media = gsap.matchMedia();
    media.add({ compact: '(max-width: 720px), (max-height: 600px)', full: '(min-width: 721px) and (min-height: 601px)' }, (context) => {
      const compact = context.conditions.compact;
      if (compact) {
        // These SVG/text values are set directly by the desktop animation,
        // so restore their static reading state when a window becomes small.
        document.querySelector('.loop-ball').setAttribute('transform', 'translate(915 600) scale(1.3)');
        document.querySelector('.loop-combo-n').textContent = '2';
        document.querySelector('.apoc-hud-pct').textContent = '100%';
      }
      // Projects and closing chapters read naturally in the normal flow
      // on phones and short screens; the two signature 3D scenes remain.
      const scenes = compact ? [BEYOND] : [BEYOND, WORKS, EDUCATION, CONTACT];
      const cleanup = scenes.map((scene) => setupStory(scene, compact));
      cleanup.push(setupHandoffs(compact));
      if (compact) setupCompactLabExit();
      ScrollTrigger.refresh();
      return () => cleanup.forEach((dispose) => dispose?.());
    });
  }

  function whenViewportReady(cb, attempts = 0) {
    if (window.innerHeight > 0 || attempts > 120) cb();
    else requestAnimationFrame(() => whenViewportReady(cb, attempts + 1));
  }
  // As js/chapters.js: built after the first painted frame rather than at
  // window `load` (every image and font); ScrollTrigger re-measures at load.
  // Queued after the photo scenes, which register first.
  requestAnimationFrame(() => requestAnimationFrame(() => whenViewportReady(init)));
})();
