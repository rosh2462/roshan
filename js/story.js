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

    const shared = scene.id === 'chapter-beyond';
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
   * the lab apart again. The lab's end is a gate (js/works.js): the selected
   * monitor previews NeuroMaze, and scrolling waits until it is tapped,
   * which opens chapter 04's player. Past it, the stage dims to black and
   * hands straight to the game library.
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

      // (to 0.92: held on the finished lab, with the gate at .905.) The stage
      // dims — straight into the game library.
      const consoleAll = [consoleRoot, kicker, role, $('.console-beats'), stepRail];
      if (compact) {
        // Clear the labels before the stage starts travelling past the nav.
        tl.to([kicker, role, $('.console-beats'), stepRail], { opacity: 0, duration: 0.08, ease: 'sine.inOut' }, 0.91);
      } else {
        tl.to(consoleAll, { opacity: 0, duration: 0.055, ease: 'power1.in' }, 0.945);
      }
      if (prevDock) tl.set(prevDock, { display: 'none' }, 0.92);
    },
  };

  /* ---------- Chapter 04 · Creative works ----------
   * A game library, like a console's. After the slate, the featured game's
   * art comes up behind the stage, its details rise into place and the
   * covers slide in along the foot of the frame. While the library holds,
   * the camera keeps pushing slowly into the art and the covers drift a
   * little at their own depths, until the chapter dims. Featuring and
   * opening games, and the full-screen player, belong to js/works.js. Coming
   * from the lab's monitor, works.js lands at .42 (its LANDING), once the
   * library has settled.
   */
  const WORKS = {
    id: 'chapter-work',
    transitions: [[0, 0.16], [0.9, 1]],
    build(tl, { $, $$, geo }) {
      const library = $('.library');
      const backdrop = $('.library-backdrop');
      const feature = $$('.library-label, .library-entries, .library-actions');
      const cards = $$('.game-card');
      const hint = $('.shelf-hint');
      const drift = [0.012, 0.02, 0.016];

      gsap.set(backdrop, { opacity: 0, scale: 1.08 });
      gsap.set(feature, { opacity: 0, y: 24 });
      gsap.set(cards, { opacity: 0, x: () => geo.cw * 0.06, y: 20 });
      gsap.set(hint, { opacity: 0 });

      const dock = slateBeats(tl, $, { at: 0.02, dockAt: 0.16 });
      tl.to(backdrop, { opacity: 1, duration: 0.12, ease: 'power1.out' }, 0.12)
        .to(backdrop, { scale: 1, duration: 0.8, ease: 'none' }, 0.12)
        .to(feature, { opacity: 1, y: 0, duration: 0.08, stagger: 0.02, ease: 'power3.out' }, 0.17)
        .to(cards, { opacity: 1, x: 0, y: 0, duration: 0.09, stagger: 0.025, ease: 'power3.out' }, 0.2)
        .to(hint, { opacity: 1, duration: 0.04 }, 0.31)
        .to(cards, { y: (i) => -geo.ch * drift[i], duration: 0.5, ease: 'none' }, 0.4)
        .to([library, dock], { opacity: 0, duration: 0.06, ease: 'power1.in' }, 0.92);
    },
  };

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

  // The dawn's light survives the cut into the closing chapter. The layer is
  // fixed only during its short handoff; it never receives input, and
  // reverses with the rest of the scene.
  function setupHandoffs(compact) {
    const target = document.getElementById('chapter-contact');
    if (compact || !target) return () => {};
    const layer = document.createElement('div');
    layer.className = 'scene-bridge scene-bridge--dawn';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
    const stageHeight = () => document.querySelector('.chapter-zoom-bg').clientHeight;
    const boundary = () => target.getBoundingClientRect().top + window.scrollY;
    const tl = gsap.timeline({ scrollTrigger: {
      trigger: target,
      start: () => boundary() - stageHeight() * 0.48,
      end: () => boundary() + stageHeight() * 0.68,
      scrub: 0.45,
      invalidateOnRefresh: true,
    } });
    gsap.set(layer, { autoAlpha: 0 });
    tl.to(layer, { autoAlpha: 0.6, duration: 0.22, ease: 'sine.out' }, 0)
      .to(layer, { autoAlpha: 0, duration: 0.3, ease: 'sine.inOut' }, 0.7)
      .fromTo(layer, { yPercent: 12, scale: 0.8 },
        { yPercent: 0, scale: 1.25, duration: 1, ease: 'sine.inOut' }, 0);
    return () => layer.remove();
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
