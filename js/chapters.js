(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Page scroll progress rail ---------- */
  const progressFill = document.getElementById('pageProgress');
  if (progressFill) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      progressFill.style.width = `${Math.min(Math.max(pct, 0), 100)}%`;
    };
    document.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  if (reduceMotion || typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Photographic chapter scenes ----------
   * Every career chapter is one scene built on a real photograph, and the
   * work is shown on the photograph rather than captioned above it. Each
   * opens the same way — the subject emerges from darkness, its lights
   * wake, and a slate names the company and the role before docking into
   * the corner — and then shows the job in the medium it was done in:
   *
   *   BMW (VR Developer): a render sweep turns the real car into its
   *   virtual prototype inside a VR viewport, and each contribution is
   *   pinned to the part of that scene it shaped.
   *   Bosch (UI/UX Developer): the camera leans into the car's own display,
   *   which pages through the work as interface screens, while the cabin's
   *   light strips carry data between the screen and the car.
   *
   * One scrubbed timeline per scene, so scrolling back up reverses the
   * exact same sequence.
   *
   * The two chapters are joined by one continuous camera move: a crane.
   * BMW ends with the camera rising up and away over the car — the car
   * drops out of frame, gathering speed until its lamps streak into light
   * trails, and the stage light falls away with it. Bosch picks up mid-move:
   * the camera is still rising, now inside a car, up past the seats and the
   * console, slowing, until it settles on the dashboard as the motion blur
   * clears. The motion never stops and never changes direction across the
   * cut — that's what makes two photographs read as one shot. Bosch, the
   * last scene, closes back to darkness, which hands off to the rest of the
   * page without a visible break.
   *
   * This engine owns what the scenes share — placing things on a photo,
   * knowing where any point of it is on screen, the default entrance (the
   * spotlight descending onto the subject, then a moderate approach) and
   * the default exit (the darkness closing). Each scene supplies where its
   * features are and what happens when (`beats`), can bring its own
   * `intro` / `outro` to carry the camera across a cut, and can `render`
   * screen-space overlays that must track the photo as the camera moves.
   *
   * Composition: the open, spacious framing comes from pulling the whole
   * image back below full size (BASE_SCALE); the approach only pushes up
   * to a moderate APPROACH_SCALE — never an extreme close-up. (The one
   * exception is Bosch leaning into its display, where the display itself
   * is the subject.)
   */
  const BASE_SCALE = 0.7;
  const APPROACH_SCALE = 0.84;

  // The veil's hole is a radial gradient: fully transparent out to --rr,
  // then fading to opaque over a further 42%. Those percentages are of the
  // distance to the farthest corner, so --rr of 58% leaves only a soft
  // vignette in the corners (open), and -42% pulls the hole to nothing
  // (fully closed) — wherever it happens to be centred.
  const VEIL_OPEN = '58%';
  const VEIL_CLOSED = '-42%';

  // The crane between the chapters, in frame heights of travel: how far
  // the car drops as the camera rises away from it, and how far below its
  // resting framing the cabin comes in. The two are balanced so the motion
  // arrives in the cabin at about the speed it left the car.
  const CRANE_OUT = 0.7;
  const CRANE_IN = 0.75;

  // Narrow screens swap layouts that can't fit around the subject (BMW's
  // labels move into a list beneath the car). Kept in step with the CSS.
  const narrow = window.matchMedia('(max-width: 720px)');

  // The page's stage light (the persistent beam), which the crane leaves
  // behind outside the car. See .ps-rig.
  const stageRig = () => document.querySelector('#persistentSpotlight .ps-rig');

  // Scenes currently mid-transition (per their `transitions` windows). While
  // any is, the page is marked so the cursor glow can sit it out.
  const transitioning = new Set();
  function trackTransitions(scene, self) {
    const inside = self.isActive
      && scene.transitions.some(([from, to]) => self.progress >= from && self.progress <= to);
    if (inside) transitioning.add(scene.id);
    else transitioning.delete(scene.id);
    document.documentElement.classList.toggle('is-scene-transition', transitioning.size > 0);
  }

  // The scale a scene's photo is laid out at in a cw × ch viewport. Fitted by
  // width — on a landscape desktop the photo then runs far past the frame
  // top and bottom, so the camera can crane through it without ever
  // showing its edge. A portrait phone is the opposite: the same fit leaves
  // a photo that ends inside the frame, a small picture floating in black,
  // with the crane sliding it past bare darkness. A scene that sets
  // `coverNarrow` (a factor, ≥ 1) is fitted to fill the frame's height
  // instead on a phone, times that factor, so it fills the screen the way
  // it does on a desktop (the sides, which are only cabin, crop).
  function fitScale(scene, cw, ch) {
    const byWidth = cw / scene.image.w;
    return scene.coverNarrow && narrow.matches
      ? Math.max(byWidth, (ch / scene.image.h) * scene.coverNarrow)
      : byWidth;
  }

  // Where a point on a scene's photo lands in a cw × ch viewport, before
  // any zoom. The photo is fitted (see fitScale) and centred across, but
  // placed vertically by the scene's focus, so a feature lands at a
  // different percentage on a wide desktop than on a tall phone — hence
  // measuring in pixels, per layout. Coordinates are in the pixel space of
  // the image they were measured on (scene.image), so a higher-resolution
  // re-export with the same framing needs no changes.
  function photoPoint(scene, x, y, cw, ch) {
    const scale = fitScale(scene, cw, ch);
    const offsetX = (cw - scene.image.w * scale) / 2;
    const offsetY = (ch - scene.image.h * scale) * scene.focusY;
    return [offsetX + x * scale, offsetY + y * scale];
  }

  // The CSS matrix3d that maps a w × h box (transform-origin 0 0) onto an
  // arbitrary quadrilateral — top-left, top-right, bottom-right,
  // bottom-left — i.e. lays flat content onto a surface seen in
  // perspective. The standard square-to-quad projective mapping, scaled
  // from the unit square to the box.
  function quadMatrix(w, h, [[x0, y0], [x1, y1], [x2, y2], [x3, y3]]) {
    const dx1 = x1 - x2;
    const dx2 = x3 - x2;
    const dx3 = x0 - x1 + x2 - x3;
    const dy1 = y1 - y2;
    const dy2 = y3 - y2;
    const dy3 = y0 - y1 + y2 - y3;
    const det = dx1 * dy2 - dx2 * dy1;
    const g = (dx3 * dy2 - dx2 * dy3) / det;
    const k = (dx1 * dy3 - dx3 * dy1) / det;
    const a = x1 - x0 + g * x1;
    const b = x3 - x0 + k * x3;
    const d = y1 - y0 + g * y1;
    const e = y3 - y0 + k * y3;
    return `matrix3d(${a / w},${d / w},0,${g / w},${b / h},${e / h},0,${k / h},0,0,1,0,${x0},${y0},0,1)`;
  }

  function setupPhotoScene(scene) {
    const section = document.getElementById(scene.id);
    const bg = section && section.querySelector('.chapter-zoom-bg');
    // The camera's frame. Zooms target it (never .chapter-zoom-bg itself):
    // a transform on the sticky element breaks its native sticky pinning in
    // Chromium.
    const img = bg && bg.querySelector('.zoom-bg-image');
    // The photograph and everything attached to it, which cranes move
    // behind the frame.
    const plane = img && img.querySelector('.photo-plane');
    if (!section || !bg || !img || !plane) return;

    // The veil is a sibling of the frame (fixed to the full viewport, not
    // zoomed with the photo).
    const veil = bg.querySelector('.reveal-veil');
    const $ = (sel) => section.querySelector(sel);
    const $$ = (sel) => section.querySelectorAll(sel);

    // Live layout, read by function-based tween values on every refresh.
    // Reads clientWidth/Height (layout size) rather than a bounding rect,
    // so the zoom transform never contaminates the maths. (ox, oy) is the
    // point the frame zooms about.
    const geo = { cw: 0, ch: 0, ox: 0, oy: 0, scale: 1 };
    let focusX = 50;
    let focusY = 46;
    const layout = () => {
      const cw = bg.clientWidth;
      const ch = bg.clientHeight;
      if (!cw || !ch) return;
      geo.cw = cw;
      geo.ch = ch;

      // The plane is the whole photo, fitted by width and placed where the
      // scene's focus puts it; the frame crops it.
      const scale = fitScale(scene, cw, ch);
      geo.scale = scale;
      const [planeLeft, planeTop] = photoPoint(scene, 0, 0, cw, ch);
      plane.style.left = `${planeLeft}px`;
      plane.style.right = 'auto';
      plane.style.width = `${scene.image.w * scale}px`;
      plane.style.top = `${planeTop}px`;
      plane.style.bottom = 'auto';
      plane.style.height = `${scene.image.h * scale}px`;

      // Positions on the plane — in the photo's own layout, so anything
      // placed there travels with the photo.
      const on = (x, y) => [x * scale, y * scale];

      // `grow` pads a box out past its feature, so the element's own
      // feathering mask fades out clear of it rather than cutting off
      // mid-feature with a visible edge.
      const put = (el, a, grow = 1) => {
        if (!el) return;
        const w = a.w * scale * grow;
        const h = a.h * scale * grow;
        const [x, y] = on(a.x, a.y);
        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
        el.style.left = `${x - w / 2}px`;
        el.style.top = `${y - h / 2}px`;
      };

      scene.place({ $, put, on, scale });

      // A scene can zoom about its own focal point rather than the frame's
      // centre, which pins that point in place on screen as the camera
      // moves in.
      if (scene.origin) {
        [geo.ox, geo.oy] = photoPoint(scene, scene.origin.x, scene.origin.y, cw, ch);
        img.style.transformOrigin = `${geo.ox}px ${geo.oy}px`;
      } else {
        geo.ox = cw / 2;
        geo.oy = ch / 2;
      }

      // Where the light comes to rest, so it genuinely lands on the subject
      // rather than on a hardcoded guess.
      const [sx, sy] = photoPoint(scene, scene.spot.x, scene.spot.y, cw, ch);
      focusX = (sx / cw) * 100;
      focusY = (sy / ch) * 100;
    };

    layout();
    ScrollTrigger.addEventListener('refreshInit', layout);

    // Where a point of the photo is on screen right now: through the
    // plane's crane offset, then the frame's zoom and pan.
    const screenPoint = (x, y) => {
      const [wx, wy] = photoPoint(scene, x, y, geo.cw, geo.ch);
      const s = gsap.getProperty(img, 'scale');
      const py = gsap.getProperty(plane, 'y');
      return [
        geo.ox + s * (wx - geo.ox) + gsap.getProperty(img, 'x'),
        geo.oy + s * (wy + py - geo.oy) + gsap.getProperty(img, 'y'),
      ];
    };

    gsap.set(img, { scale: BASE_SCALE });
    // Starts fully closed and only opens as the light arrives. Starting at
    // 0% left a soft, partly-see-through falloff several hundred pixels deep
    // around the top of the frame — empty black in the BMW photo, but in the
    // cockpit it let the dashboard show before the light had arrived.
    if (veil) gsap.set(veil, { '--rx': `${focusX}%`, '--ry': '8%', '--rr': VEIL_CLOSED });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        // A full second of smoothing: the camera has weight, easing into
        // and out of every move rather than jumping with each scroll tick.
        scrub: 1,
        // Targets that depend on layout (where the light rests, how far a
        // crane travels) are functions, so the tweens have to re-read them
        // whenever the layout is remeasured.
        invalidateOnRefresh: true,
        onUpdate: (self) => trackTransitions(scene, self),
        onToggle: (self) => trackTransitions(scene, self),
        onRefresh: (self) => trackTransitions(scene, self),
      },
    });

    // A scene that carries straight on from the one before it overlaps it
    // by a screen (.chapter-container--continues), so that one's last frame
    // and this one's first are the same scroll position. Its frame spends
    // that screen sliding up over the previous scene's exit, so it's hidden
    // until then, and fades up in the first moments of its own.
    if (scene.continues) {
      gsap.set(bg, { autoAlpha: 0 });
      tl.to(bg, { autoAlpha: 1, duration: 0.04, ease: 'power1.out' }, 0);
    }

    const ctx = {
      $, $$, img, plane, veil, geo, screenPoint,
      focus: () => [focusX, focusY],
    };

    if (scene.intro) {
      scene.intro(tl, ctx);
    } else {
      // The spotlight descends onto the subject and widens, sweeping the
      // darkness open — slow to start, never a hard cut — then a moderate,
      // controlled approach toward the viewer. Timed against `revealEnd`,
      // where the scene is fully lit, so a longer chapter needn't mean a
      // slower reveal.
      const k = (scene.revealEnd || 0.32) / 0.32;
      if (veil) {
        tl.to(veil, {
          '--rx': () => `${focusX}%`,
          '--ry': () => `${focusY}%`,
          '--rr': '22%',
          duration: 0.2 * k,
          ease: 'power1.in',
        }, 0)
          .to(veil, { '--rr': VEIL_OPEN, duration: 0.12 * k, ease: 'power2.out' }, 0.2 * k);
      }
      tl.to(img, { scale: APPROACH_SCALE, duration: 0.26 * k, ease: 'power2.out' }, 0.36 * k);
    }

    // Everything specific to this scene: its lights, slate and story.
    scene.beats(tl, ctx);

    if (scene.outro) {
      scene.outro(tl, ctx);
    } else if (veil) {
      // The darkness closes back over the subject, its centre the last
      // thing to disappear. Ending here, fully dark, is what makes the
      // hand-off to the rest of the page seamless. Beats must be done with
      // any text by 0.9.
      tl.to(veil, { '--rr': VEIL_CLOSED, duration: 0.1, ease: 'power1.in' }, 0.9);
    }

    // Screen-space overlays follow the photo on every frame the timeline
    // renders, and whenever the layout changes under them.
    if (scene.render) {
      const render = () => scene.render(ctx);
      tl.eventCallback('onUpdate', render);
      ScrollTrigger.addEventListener('refresh', render);
      narrow.addEventListener('change', render);
      render();
    }
  }

  // The slate: the chapter's title card, which then docks into the corner
  // so the company and role stay on screen for the rest of the chapter.
  // Shared by every chapter, so each is introduced the same way.
  function slateBeats(tl, $, { at, dockAt }) {
    const lines = [$('.slate-index'), $('.slate-org'), $('.slate-role'), $('.slate-lede')];
    const dock = $('.slate-dock');
    gsap.set(lines, { opacity: 0, y: 16 });
    gsap.set(dock, { opacity: 0, x: -8 });
    tl.to(lines, { opacity: 1, y: 0, duration: 0.05, stagger: 0.018, ease: 'power2.out' }, at)
      .to(lines, { opacity: 0, y: -10, duration: 0.03, ease: 'power1.in' }, dockAt - 0.02)
      .to(dock, { opacity: 1, x: 0, duration: 0.03, ease: 'power2.out' }, dockAt);
    return dock;
  }

  /* ---------- Chapter 01 · BMW — VR Developer ----------
   * The real car, revealed in darkness; the slate; then a render sweep
   * turns it into its virtual prototype — the vehicle before it exists —
   * inside a VR viewport, and each contribution is pinned to the part of
   * the scene it shaped: shaders on the lamps' light, Blender assets on the
   * body's surface mesh, acoustics as sound spreading from the front of the
   * car, rendering performance as the viewport's own frame-time trace. The
   * sweep returns the real car, and the camera cranes away into the next
   * chapter.
   */
  const BMW_SCENE = {
    id: 'bmw-chapter',
    // Measured directly off assets/bmw.jpg, in its own pixel space: the
    // centre and size of each lit feature.
    image: { w: 2160, h: 3840 },
    focusY: 0.45,
    lampL: { x: 327, y: 1973, w: 313, h: 160 },
    lampR: { x: 1768, y: 1978, w: 343, h: 163 },
    badge: { x: 1027, y: 1902, w: 53.5, h: 32.5 },
    // Midway between the lamps: the front of the car.
    spot: { x: (327 + 1768) / 2, y: (1973 + 1978) / 2 },
    // Where each contribution is pinned on the photo, and where its label
    // sits relative to that pin, as a fraction of the frame.
    pins: {
      lamp: { x: 327, y: 1973, elbow: [-0.02, -0.21] },
      body: { x: 1450, y: 1840, elbow: [0.1, -0.14] },
      intake: { x: 1027, y: 2230, elbow: [0.19, 0.035] },
    },
    // Fully lit by here; the rest of the chapter is the story.
    revealEnd: 0.22,
    // The light arriving, and the crane out into the next chapter.
    transitions: [[0, 0.22], [0.86, 1]],

    place({ $, put, on }) {
      put($('.lamp-lit--left'), this.lampL, 1.3);
      put($('.lamp-lit--right'), this.lampR, 1.3);
      put($('.badge-lit'), this.badge, 1.5);
      put($('.lamp-spill--left'), this.lampL, 2.6);
      put($('.lamp-spill--right'), this.lampR, 2.6);
      // Wide, flat rings centred under the grille, on the ground.
      put($('.ripples'), { x: 1027, y: 2230, w: 1150, h: 380 });
      // The sweep spans the car from above the bonnet to the ground
      // beneath it; its horizontal position is the --scan property.
      const scan = $('.scan-line');
      if (scan) {
        const [, top] = on(0, 1560);
        const [, bottom] = on(0, 2420);
        scan.style.top = `${top}px`;
        scan.style.height = `${bottom - top}px`;
      }
    },

    // The reveal is the car's own light, not a beam from above: the veil
    // (see .reveal-veil--lamps) is a pair of light sources at the lamps.
    // --li is how brightly they're on — the LED outlines come up first,
    // through the smoke — and --lr is how far the light carries, which
    // trails behind it, so the grille and bonnet are found by the light
    // rather than simply uncovered. They overlap the lamps' own wake-up
    // below (0.14–0.31) and the smoke thinning out (js/bmw-smoke.js), and
    // are done before the render sweep at 0.44. The push-in is the
    // default entrance's, unchanged.
    intro(tl, { img, veil }) {
      const k = this.revealEnd / 0.32;
      if (veil) {
        gsap.set(veil, { '--li': 0, '--lr': 9 });
        tl.to(veil, { '--li': 1, duration: 0.2, ease: 'power1.inOut' }, 0.12)
          .to(veil, { '--lr': 140, duration: 0.28, ease: 'power1.inOut' }, 0.14);
      }
      tl.to(img, { scale: APPROACH_SCALE, duration: 0.26 * k, ease: 'power2.out' }, 0.36 * k);
    },

    beats(tl, ctx) {
      const { $, $$, plane } = ctx;
      const spillL = $('.lamp-spill--left');
      const spillR = $('.lamp-spill--right');
      const lampL = $('.lamp-lit--left');
      const lampR = $('.lamp-lit--right');
      const badge = $('.badge-lit');
      const scan = $('.scan-line');
      const rings = $$('.ripples i');
      const corners = $$('.hud-corner');
      const caption = $('.hud-caption');
      const perf = $('.callout--perf');
      const perfLine = $('.perf-line');

      // Kept for render(), which positions the pins and labels per frame.
      this.refs = {
        dots: Object.fromEntries([...$$('.callout-dots i')].map((el) => [el.dataset.pin, el])),
        labels: Object.fromEntries([...$$('.callout[data-pin]')].map((el) => [el.dataset.pin, el])),
        leaders: Object.fromEntries([...$$('.callout-leaders path')].map((el) => [el.dataset.pin, el])),
      };
      const { dots, labels, leaders } = this.refs;

      gsap.set([spillL, spillR], { opacity: 0, scale: 0.8 });
      gsap.set([lampL, lampR, badge, scan, caption, perf, ...Object.values(labels)], { opacity: 0 });
      gsap.set(Object.values(dots), { opacity: 0, scale: 0 });
      gsap.set(corners, { opacity: 0, scale: 0.4 });

      // The lamps come up as the beam reaches them, left a beat before the
      // right. These only amplify the corona rings the photo already has,
      // so they stay crisp; the faint spill lights the bodywork.
      tl.to(spillL, { opacity: 1, scale: 1, duration: 0.11, ease: 'power2.out' }, 0.14)
        .to(lampL, { opacity: 1, duration: 0.09, ease: 'power2.out' }, 0.16)
        .to(spillR, { opacity: 1, scale: 1, duration: 0.11, ease: 'power2.out' }, 0.17)
        .to(lampR, { opacity: 1, duration: 0.09, ease: 'power2.out' }, 0.19)
        .to([spillL, spillR], { opacity: 0.75, duration: 0.1, ease: 'power1.out' }, 0.29);

      // The emblem lights from within — the photograph's own blue and
      // white panels brightening in place, the last detail to wake.
      tl.to(badge, { opacity: 1, duration: 0.1, ease: 'power2.out' }, 0.21);

      // The slate over the establishing shot, held, then docked. It waits
      // for the car: the lamps are already on and the light is reaching the
      // bodywork by 0.24, so the title arrives as the BMW emerges rather
      // than over the top of the darkness and the smoke it's emerging from.
      const dock = slateBeats(tl, $, { at: 0.24, dockAt: 0.42 });

      // The render sweep: the real car becomes its virtual prototype, and
      // the VR viewport draws in around it.
      tl.to(scan, { opacity: 1, duration: 0.01 }, 0.44)
        .to(plane, { '--scan': '102%', duration: 0.08, ease: 'power1.inOut' }, 0.44)
        .to(scan, { opacity: 0, duration: 0.01 }, 0.515)
        .to(corners, { opacity: 1, scale: 1, duration: 0.03, stagger: 0.005, ease: 'power2.out' }, 0.47)
        .to(caption, { opacity: 1, duration: 0.03, ease: 'power1.out' }, 0.49);

      // The contributions, one at a time: the pin lands, the leader draws
      // out to the label, the label arrives.
      const pinIn = (name, at) => {
        tl.to(dots[name], { opacity: 1, scale: 1, duration: 0.015, ease: 'back.out(3)' }, at)
          .to(leaders[name], { attr: { 'stroke-dashoffset': 0 }, duration: 0.03, ease: 'power1.inOut' }, at + 0.008)
          .fromTo(labels[name], { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.03, ease: 'power2.out' }, at + 0.022);
      };
      pinIn('lamp', 0.52);
      pinIn('body', 0.56);
      pinIn('intake', 0.6);
      // Sound spreading from the car, in waves, for as long as the
      // annotation is up.
      tl.fromTo(rings, { '--r': 0 }, {
        '--r': 1,
        duration: 0.05,
        stagger: 0.017,
        repeat: 2,
        ease: 'power1.out',
      }, 0.6);
      tl.fromTo(perf, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.03, ease: 'power2.out' }, 0.64)
        .to(perfLine, { attr: { 'stroke-dashoffset': 0 }, duration: 0.06, ease: 'none' }, 0.645);

      // (0.7 → 0.79: everything holds, to be read.) Then the annotations
      // clear and the sweep runs back, returning the real car.
      tl.to([...Object.values(labels), ...Object.values(dots), perf, caption, ...corners],
        { opacity: 0, duration: 0.025, ease: 'power1.in' }, 0.79)
        .to(Object.values(leaders), { attr: { 'stroke-dashoffset': 1 }, duration: 0.025, ease: 'power1.in' }, 0.79)
        .to(scan, { opacity: 1, duration: 0.01 }, 0.8)
        .to(plane, { '--scan': '-2%', duration: 0.055, ease: 'power1.inOut' }, 0.8)
        .to(scan, { opacity: 0, duration: 0.01 }, 0.85)
        .to(dock, { opacity: 0, duration: 0.02, ease: 'power1.in' }, 0.845);
    },

    // Pins track the car on screen as the camera moves; labels sit at a
    // fixed offset from their pins, with a leader from the pin out to an
    // underline beneath the label. On narrow screens the labels are a list
    // (CSS), so only the numbered pins are placed.
    render({ geo, screenPoint, veil }) {
      if (!this.refs || !geo.cw) return;

      // The lamps are the light sources, so the veil's holes and the
      // smoke's scattering both follow them as the camera pushes in and
      // later cranes away. Written here, once per frame, and read by
      // js/bmw-smoke.js from the same properties, so the two can never
      // disagree about where the light is.
      if (veil) {
        const [ax, ay] = screenPoint(this.lampL.x, this.lampL.y);
        const [bx, by] = screenPoint(this.lampR.x, this.lampR.y);
        veil.style.setProperty('--l1x', `${ax}px`);
        veil.style.setProperty('--l1y', `${ay}px`);
        veil.style.setProperty('--l2x', `${bx}px`);
        veil.style.setProperty('--l2y', `${by}px`);
      }

      const { dots, labels, leaders } = this.refs;
      const compact = narrow.matches;
      // Measure every label before moving any, so a frame costs one layout.
      const sizes = compact ? null : Object.fromEntries(Object.keys(this.pins)
        .map((name) => [name, [labels[name].offsetWidth, labels[name].offsetHeight]]));
      Object.entries(this.pins).forEach(([name, pin]) => {
        const [ax, ay] = screenPoint(pin.x, pin.y);
        dots[name].style.left = `${ax}px`;
        dots[name].style.top = `${ay}px`;
        if (compact) return;

        const label = labels[name];
        const [w, h] = sizes[name];
        const below = label.classList.contains('callout--below');
        const ex = Math.min(Math.max(ax + pin.elbow[0] * geo.cw, geo.cw * 0.05), geo.cw * 0.95 - w);
        const ey = ay + pin.elbow[1] * geo.ch;
        label.style.left = `${ex}px`;
        label.style.top = `${below ? ey + 10 : ey - h - 10}px`;
        leaders[name].setAttribute('d', `M${ax} ${ay}L${ex} ${ey}L${ex + w} ${ey}`);
      });
    },

    // The crane out. The camera rises up and away over the car, starting
    // gently and gathering speed, so the car sinks out through the bottom
    // of the frame into the dark above its bonnet. As it speeds up, motion
    // blur takes over and the lit lamps and emblem smear into light
    // trails. The stage light goes as the camera lifts off, sinking a
    // little and fading. It exits at full speed — the next scene picks the
    // move up from there.
    outro(tl, { $, img, plane, geo }) {
      const AT = 0.87;
      const DUR = 0.13;
      const EASE = 'power1.in';
      tl.to(plane, { y: () => CRANE_OUT * geo.ch, duration: DUR, ease: EASE }, AT)
        .to(img, { scale: 1, duration: DUR, ease: EASE }, AT)
        .to($('.zoom-bg-blur'), { opacity: 1, duration: 0.06, ease: 'power1.in' }, 0.92)
        .to(stageRig(), { '--ps-leave': 1, duration: 0.09, ease: EASE }, AT);
    },
  };

  /* ---------- Chapter 02 · Bosch — UI/UX Developer ----------
   * Inside a car, at night — arriving mid-crane from the BMW chapter. The
   * camera rises up through the cabin and settles on the dashboard; the
   * display boots to the Bosch mark and the slate names the role. Then the
   * camera leans into the display, which pages through the work as the
   * interfaces it was — frontend, APIs, integration — while data pulses run
   * along the cabin's red light strips between the screen and the car. The
   * camera eases back, the display powers down, and the darkness closes.
   */
  const BOSCH_SCENE = {
    id: 'chapter-bosch',
    continues: true,
    // Measured directly off assets/bosch-cockpit-*.png, in their own pixel
    // space. The page shows the @2x.webp upscales of them — exactly twice
    // the size, so the same coordinates hold (only the ratio matters).
    image: { w: 941, h: 1672 },
    // On a phone, fill the frame's height rather than fitting its width
    // (see fitScale): the cabin is what the crane passes through.
    coverNarrow: 1.3,
    // Lower than BMW's 45%: the dashboard sits higher in this frame, and
    // this keeps it clear of the slate above it on laptop-height screens.
    focusY: 0.42,
    // The display's glass, a slight trapezoid (it tilts back, so its bottom
    // edge is wider), inset a few pixels inside the bezel: top-left,
    // top-right, bottom-right, bottom-left. The two frames were rendered
    // separately and don't line up across the whole cabin — only the
    // display is taken from the "on" frame, and its outer few pixels are
    // black glass in both, so the swap has no visible edge.
    glass: [[371, 722], [668, 722], [683, 889], [359, 889]],
    screen: { x: 522, y: 806, w: 322, h: 179 },
    // The display's centre: where the light gathers, and what the camera
    // settles toward.
    spot: { x: 522, y: 806 },
    origin: { x: 522, y: 806 },
    // The cabin's red ambient strips, measured on the photo: the long one
    // from the display's right edge out to the door, and the short one
    // between the wheel and the display.
    strips: {
      out: [[684, 790], [941, 799]],
      back: [[941, 799], [684, 790]],
      in: [[312, 788], [364, 788]],
    },
    // The crane arriving and settling, and the darkness closing at the end.
    transitions: [[0, 0.24], [0.88, 1]],

    place({ $, put, on, scale }) {
      const screenOn = $('.screen-on');
      if (screenOn) {
        screenOn.style.clipPath = `polygon(${this.glass.map(([x, y]) => {
          const [px, py] = on(x, y);
          return `${px}px ${py}px`;
        }).join(', ')})`;
      }
      put($('.screen-spill'), this.screen, 2.2);

      Object.entries(this.strips).forEach(([name, [from, to]]) => {
        const el = $(`.strip--${name}`);
        if (!el) return;
        const [x0, y0] = on(...from);
        const [x1, y1] = on(...to);
        el.style.left = `${x0}px`;
        el.style.top = `${y0}px`;
        el.style.width = `${Math.hypot(x1 - x0, y1 - y0)}px`;
        el.style.transform = `rotate(${Math.atan2(y1 - y0, x1 - x0)}rad)`;
        el.style.setProperty('--pulse-w', `${46 * scale}px`);
        el.style.setProperty('--pulse-h', `${8 * scale}px`);
      });
    },

    // The crane in. No spotlight here — inside the car there's only the
    // car's own light. The camera enters still rising at the speed the BMW
    // crane left at, from low in the cabin, and decelerates in one long
    // move up past the seats and console to the dashboard, easing in a
    // little closer as it settles. The motion blur it arrives with clears
    // as it slows.
    intro(tl, { $, img, plane, veil, geo, focus }) {
      if (veil) {
        const open = {
          '--rx': () => `${focus()[0]}%`,
          '--ry': () => `${focus()[1]}%`,
          '--rr': VEIL_OPEN,
        };
        gsap.set(veil, open);
        tl.set(veil, open, 0);
      }
      tl.fromTo(plane, { y: () => -CRANE_IN * geo.ch }, { y: 0, duration: 0.22, ease: 'power2.out' }, 0)
        .fromTo(img, { scale: 0.78 }, { scale: APPROACH_SCALE, duration: 0.22, ease: 'power2.out' }, 0)
        .fromTo($('.zoom-bg-blur'), { opacity: 1 }, { opacity: 0, duration: 0.09, ease: 'power1.out' }, 0);
    },

    beats(tl, ctx) {
      const { $, $$, img, geo } = ctx;
      const screenOn = $('.screen-on');
      const spill = $('.screen-spill');
      const ui = $('.screen-ui');
      const pages = [1, 2, 3].map((n) => ui.querySelector(`.sui-page--${n}`));
      const pageDots = ui.querySelectorAll('.sui-dots i');
      const strips = $$('.strip');
      this.refs = { ui };

      gsap.set([screenOn, spill], { opacity: 0 });
      gsap.set(ui, { autoAlpha: 0 });
      gsap.set(pages, { opacity: 0, x: 24 });
      gsap.set(strips, { opacity: 0 });

      // The display's backlight catches as the camera slows toward it,
      // then, once the camera has settled, the display boots fully — the
      // Bosch mark resolves, with a restrained glow on the dashboard.
      tl.to(screenOn, { opacity: 0.35, duration: 0.06, ease: 'power1.out' }, 0.07)
        .to(screenOn, { opacity: 1, duration: 0.09, ease: 'power2.inOut' }, 0.17)
        .to(spill, { opacity: 1, duration: 0.1, ease: 'power2.out' }, 0.17);

      // The slate, over the booted display. It docks as the camera leans in.
      const dock = slateBeats(tl, $, { at: 0.23, dockAt: 0.4 });

      // Lean in: the display comes to the middle of the frame, large
      // enough to read — about 60% of a desktop's width, nearly all of a
      // phone's. Then the Bosch screen hands over to the work.
      const glassW = (this.glass[1][0] + this.glass[2][0] - this.glass[0][0] - this.glass[3][0]) / 2;
      const pushScale = () => {
        const target = geo.cw < 720 ? 0.9 * geo.cw : Math.min(0.58 * geo.cw, 860);
        return target / (glassW * geo.scale);
      };
      tl.to(img, {
        scale: pushScale,
        x: () => geo.cw / 2 - geo.ox,
        y: () => geo.ch * 0.54 - geo.oy,
        duration: 0.1,
        ease: 'power2.inOut',
      }, 0.4)
        .to(ui, { autoAlpha: 1, duration: 0.04, ease: 'power1.out' }, 0.48);

      // The pages. Each slides in like an interface would, its dot lights
      // in the status bar, and its content plays through.
      const page = (i, inAt, outAt) => {
        tl.to(pages[i], { opacity: 1, x: 0, duration: 0.02, ease: 'power2.out' }, inAt)
          .to(pageDots[i], { backgroundColor: '#ff5a4e', duration: 0.01 }, inAt);
        if (outAt) {
          tl.to(pages[i], { opacity: 0, x: -24, duration: 0.015, ease: 'power1.in' }, outAt)
            .to(pageDots[i], { backgroundColor: 'rgba(255,255,255,0.2)', duration: 0.01 }, outAt);
        }
      };

      // 1 · Frontend: an interface assembling itself.
      page(0, 0.515, 0.605);
      const tiles = ui.querySelectorAll('.sui-mock-bar, .sui-tile');
      tl.fromTo(tiles, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.012, stagger: 0.006, ease: 'power2.out' }, 0.53)
        .fromTo(ui.querySelector('.sui-slider b'), { scaleX: 0 }, { scaleX: 0.68, duration: 0.03, ease: 'power2.inOut' }, 0.555)
        .fromTo(ui.querySelector('.sui-toggle b'), { x: 0 }, { x: 20, duration: 0.01, ease: 'power2.inOut' }, 0.575)
        .fromTo(ui.querySelector('.sui-toggle'), { backgroundColor: 'rgba(255,255,255,0.12)' }, { backgroundColor: '#ff5a4e', duration: 0.01 }, 0.575);

      // 2 · APIs: configure, test, validate — each ticked off in turn.
      page(1, 0.62, 0.7);
      const steps = ui.querySelectorAll('.sui-steps li');
      const stepsLine = ui.querySelector('.sui-steps');
      // (The request log beneath them, on a desktop, fills in as each step
      // completes.)
      const logRows = ui.querySelectorAll('.sui-page--2 .sui-log li');
      gsap.set(logRows, { opacity: 0.22 });
      tl.to(logRows[0], { opacity: 1, duration: 0.01 }, 0.635)
        .to(logRows[1], { opacity: 1, duration: 0.01 }, 0.655)
        .to(logRows[2], { opacity: 1, duration: 0.01 }, 0.675);
      tl.to(steps[0], { '--done': 1, duration: 0.01 }, 0.635)
        .to(stepsLine, { '--progress': 0.5, duration: 0.02, ease: 'power1.inOut' }, 0.645)
        .to(steps[1], { '--done': 1, duration: 0.01 }, 0.655)
        .to(stepsLine, { '--progress': 1, duration: 0.02, ease: 'power1.inOut' }, 0.665)
        .to(steps[2], { '--done': 1, duration: 0.01 }, 0.675);

      // 3 · Integration: the two sides joined, traffic both ways.
      page(2, 0.715, null);
      const wire = ui.querySelectorAll('.sui-wire b');
      tl.fromTo([wire[0], wire[2]], { '--t': 0 }, { '--t': 1, duration: 0.025, stagger: 0.012, repeat: 2, ease: 'none' }, 0.725)
        .fromTo(wire[1], { '--t': 1 }, { '--t': 0, duration: 0.025, repeat: 2, ease: 'none' }, 0.735);

      // Meanwhile the car carries the data: pulses along its own light
      // strips — out from the display, back to it, and in from the
      // driver's side — for as long as the display shows the work.
      tl.to(strips, { opacity: 1, duration: 0.02 }, 0.52)
        .fromTo($$('.strip--out .pulse'), { '--t': 0 }, { '--t': 1, duration: 0.05, stagger: 0.025, repeat: 4, ease: 'none' }, 0.53)
        .fromTo($$('.strip--back .pulse'), { '--t': 0 }, { '--t': 1, duration: 0.05, stagger: 0.025, repeat: 4, ease: 'none' }, 0.545)
        .fromTo($$('.strip--in .pulse'), { '--t': 0 }, { '--t': 1, duration: 0.03, repeat: 7, ease: 'none' }, 0.535)
        .to(strips, { opacity: 0, duration: 0.02 }, 0.8);

      // (to 0.8: the last page holds.) The work gives way to the Bosch
      // screen, the camera eases back to the dashboard, the display powers
      // down, and then the darkness closes.
      tl.to(ui, { autoAlpha: 0, duration: 0.03, ease: 'power1.in' }, 0.8)
        .to(img, { scale: APPROACH_SCALE, x: 0, y: 0, duration: 0.07, ease: 'power2.inOut' }, 0.8)
        .to(dock, { opacity: 0, duration: 0.02, ease: 'power1.in' }, 0.86)
        .to([screenOn, spill], { opacity: 0, duration: 0.04, ease: 'power1.in' }, 0.87);
    },

    // The interface is drawn in screen space and laid onto the display's
    // glass wherever the camera has put it, so it's always exactly on the
    // screen — in perspective, through the lean-in and back.
    render({ screenPoint }) {
      const ui = this.refs && this.refs.ui;
      if (!ui || gsap.getProperty(ui, 'opacity') === 0) return;
      const corners = this.glass.map(([x, y]) => screenPoint(x, y));
      ui.style.transform = quadMatrix(ui.offsetWidth, ui.offsetHeight, corners);
    },
  };

  // Shared with js/story.js, so chapters 03–06 open with the same slate and
  // dock, and sit the cursor glow out of their transitions the same way.
  window.SceneKit = { slateBeats, trackTransitions };

  /* ---------- The hero lifting away ----------
   * The hero is a curtain over the BMW scene, which starts a screen early,
   * pinned underneath it. As the hero lifts, what belongs to its stage — the
   * haze, the dust, the pool of light on its floor — fades with it, so none
   * of it is left floating in the beam when the car arrives. The scroll
   * hint, its job done, goes first. (The beam itself stays: it's the one
   * stage light, struck on by js/hero-intro.js.)
   */
  function setupHeroExit() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const light = hero.querySelector('.stage-light');
    const hint = hero.querySelector('.hint-fade');
    if (light) {
      gsap.to(light, {
        opacity: 0,
        ease: 'power1.in',
        scrollTrigger: { trigger: hero, start: 'top top', end: '60% top', scrub: true },
      });
    }
    if (hint) {
      gsap.to(hint, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: '15% top', scrub: true },
      });
    }
    // The beam belongs to the landing page. It lifts away with the hero,
    // so the BMW chapter beneath is lit by the car's own headlamps and
    // never by a light from above. (Scrubbed, so it comes back on the way
    // up.) The rig's --ps-leave is the crane's, further down the page.
    const rig = stageRig();
    if (rig) {
      gsap.to(rig, {
        '--ps-hero': 0,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: '65% top', scrub: true },
      });
    }
  }

  // Everything here reads real layout (vh units, pin measurements). Running it
  // before the window has fully loaded and painted at least once can capture a
  // collapsed 0-size viewport on some setups, wedging the pin permanently.
  // Deferring to `load` (with an immediate fallback if we're already past it)
  // guarantees fonts, images and layout are settled first.
  function init() {
    setupHeroExit();
    setupPhotoScene(BMW_SCENE);
    setupPhotoScene(BOSCH_SCENE);
    ScrollTrigger.refresh();
  }

  // Guard against initializing while the viewport is momentarily 0×0 (a
  // backgrounded/prerendered/not-yet-laid-out tab) — vh-based sizing and
  // ScrollTrigger's pin measurements would lock in at 0 and never recover
  // on their own. Wait for a real, non-zero viewport before setting up.
  function whenViewportReady(cb, attempts = 0) {
    if (window.innerHeight > 0 || attempts > 120) {
      cb();
    } else {
      requestAnimationFrame(() => whenViewportReady(cb, attempts + 1));
    }
  }

  function start() {
    whenViewportReady(init);
  }

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start, { once: true });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') ScrollTrigger.refresh();
  });
})();
