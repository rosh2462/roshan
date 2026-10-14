(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Page scroll progress rail ---------- */
  const progressFill = document.getElementById('pageProgress');
  if (progressFill) {
    let ticking = false, heightDirty = true;
    let railHeight = 1, railScroll = window.scrollY;
    const update = () => {
      ticking = false;
      if (heightDirty) {
        railHeight = document.documentElement.scrollHeight - window.innerHeight;
        heightDirty = false;
      }
      const pct = railHeight > 0 ? railScroll / railHeight : 0;
      progressFill.style.transform = `scaleX(${Math.min(Math.max(pct, 0), 1)})`;
    };
    const queue = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    const invalidate = () => { heightDirty = true; railScroll = window.scrollY; queue(); };
    // Sample native input before timeline writes. The rail's RAF never reads
    // scroll/layout after the particle and chapter renderers have changed CSS.
    window.addEventListener('scroll', () => { railScroll = window.scrollY; queue(); },
      { passive: true, capture: true });
    window.addEventListener('resize', invalidate, { passive: true });
    window.addEventListener('load', invalidate, { once: true });
    window.addEventListener('pageshow', invalidate);
    window.visualViewport?.addEventListener('resize', invalidate, { passive: true });
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(invalidate).observe(document.body);
    document.fonts?.addEventListener('loadingdone', invalidate);
    document.fonts?.ready.then(invalidate);
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.addEventListener('refresh', invalidate);
    update();
  }

  // The head hides the chapters' words until their scenes exist (see
  // .scenes-pending); without GSAP the static page shows at once instead.
  if (reduceMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    document.documentElement.classList.remove('scenes-pending');
    return;
  }

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
  // Positions that follow the camera use the independent `translate`
  // property where supported (it composes with GSAP's own transforms).
  const moveByTranslate = typeof CSS !== 'undefined' && CSS.supports?.('translate', '1px 1px');
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
  const desktopFraming = window.matchMedia('(min-width: 721px) and (pointer: fine)');

  // Move through the display itself. Its glass becomes the particle portal;
  // the surrounding cockpit leaves the frame through camera travel alone.
  const BOSCH_HANDOFF = { zoomStart: 0.78, zoomEnd: 0.99, portalStart: 0.855, portalReady: 0.885 };

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

  // Bosch, Beyond, the monitor handoff and Works share an absolute scroll clock. Separate scrub tweens
  // clamp at their chapter ends, so a fast flick used to finish the camera
  // and unlock an already-completed portrait in a single frame.
  const sharedScenes = new Set();
  const sharedScroll = { y: window.scrollY };
  const compactClock = matchMedia('(max-width: 720px), (max-height: 600px)');
  let sharedScrollTrigger;
  function renderSharedScenes() {
    for (const { timeline, range } of sharedScenes) {
      const span = range.end - range.start;
      if (span > 0) timeline.progress(Math.max(0, Math.min(1, (sharedScroll.y - range.start) / span)));
    }
    // Cross-chapter overlays read one completed pose, after both photo scenes.
    window.dispatchEvent(new Event('sceneclock'));
  }
  function driveSharedScene(section, timeline, range) {
    const entry = { timeline, range };
    sharedScenes.add(entry);
    // Keep the scene's own range inspectable without giving it a second scrub.
    range._sceneTimeline = timeline;
    if (section) {
      section._sceneTimeline = timeline;
      section._sceneRange = range;
    }
    const invalidate = () => {
      // BMW must refresh from its dark entry, not capture the current lit
      // pose as a new tween start. The shared clock restores the pose after
      // measurement, preserving particle-before-headlight order on resize.
      // Rewind every paused timeline before invalidating its captured starts.
      // Resizing mid-scene otherwise captures visible pages as their hidden start.
      timeline.progress(0, true);
      timeline.invalidate();
    };
    ScrollTrigger.addEventListener('refreshInit', invalidate);
    if (!sharedScrollTrigger) {
      const clock = gsap.fromTo(sharedScroll, { y: 0 }, {
        y: () => ScrollTrigger.maxScroll(window),
        duration: 1, ease: 'none', immediateRender: false,
        onUpdate: renderSharedScenes,
        scrollTrigger: {
          start: 0,
          end: () => ScrollTrigger.maxScroll(window),
          scrub: compactClock.matches ? 0.20 : 0.28,
          invalidateOnRefresh: true,
          // Measure both chapter ranges before restoring their shared pose.
          refreshPriority: -10,
          onRefresh: renderSharedScenes,
        },
      });
      sharedScrollTrigger = clock.scrollTrigger;
      compactClock.addEventListener('change', () => {
        sharedScrollTrigger.scrubDuration(compactClock.matches ? 0.20 : 0.28);
      });
      ScrollTrigger.addEventListener('refresh', renderSharedScenes);
    }
    renderSharedScenes();
    return () => {
      sharedScenes.delete(entry);
      ScrollTrigger.removeEventListener('refreshInit', invalidate);
      range.kill();
    };
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
    // A portrait photograph must also respect the available desktop height:
    // fitting by width alone crops the front on short or very wide screens.
    if (scene.desktopFitHeight && desktopFraming.matches)
      return Math.min(byWidth, ch / scene.desktopFitHeight);
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

    // The particle handoff uses the same photographic projection at its two
    // resting endpoints. It never measures a moving/sticky bounding box.
    section._photoBridgeLayout = () => {
      const [left, top] = photoPoint(scene, 0, 0, geo.cw, geo.ch);
      return {
        viewport: { width: geo.cw, height: geo.ch },
        origin: `${geo.ox}px ${geo.oy}px`,
        frame: { x: geo.ox * (1 - APPROACH_SCALE), y: geo.oy * (1 - APPROACH_SCALE),
          width: geo.cw * APPROACH_SCALE, height: geo.ch * APPROACH_SCALE },
        rect: {
          x: geo.ox + (left - geo.ox) * APPROACH_SCALE,
          y: geo.oy + (top - geo.oy) * APPROACH_SCALE,
          width: scene.image.w * geo.scale * APPROACH_SCALE,
          height: scene.image.h * geo.scale * APPROACH_SCALE,
        },
      };
    };

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

    const shared = scene.id === 'chapter-bosch' || scene.id === 'bmw-chapter';
    const scrollConfig = {
        trigger: section,
        start: 'top top',
        end: () => `bottom ${bg.clientHeight}px`,
        // Short catch-up keeps the camera weighted without trailing a reversal.
        scrub: shared ? false : narrow.matches ? 0.28 : 0.45,
        // Targets that depend on layout (where the light rests, how far a
        // crane travels) are functions, so the tweens have to re-read them
        // whenever the layout is remeasured.
        invalidateOnRefresh: true,
        onUpdate: (self) => trackTransitions(scene, self),
        onToggle: (self) => trackTransitions(scene, self),
        onRefresh: (self) => trackTransitions(scene, self),
    };
    const tl = gsap.timeline(shared ? { paused: true } : { scrollTrigger: scrollConfig });
    const range = shared ? ScrollTrigger.create(scrollConfig) : tl.scrollTrigger;

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
    const render = () => {
      if (scene.render) scene.render(ctx);
      // Smoke reads the very same eased pose as the car and its lamps.
      section._sceneProgress = tl.progress();
      // Where the whole photograph is on screen (relative to the sticky
      // frame), worked out from the camera pose rather than measured, so
      // the particles and smoke that follow it never force a layout.
      if (geo.cw) {
        const [x0, y0] = screenPoint(0, 0);
        const [x1, y1] = screenPoint(scene.image.w, scene.image.h);
        const rect = section._photoRect || (section._photoRect = {});
        rect.x = x0; rect.y = y0; rect.width = x1 - x0; rect.height = y1 - y0;
        // Close in, the frame's feathered edges (6% / 14%, see
        // .zoom-bg-image) all lie outside the view, so its mask changes no
        // pixel; dropping it then spares the browser re-masking a magnified
        // frame every frame (a large cost in Firefox).
        const s = gsap.getProperty(img, 'scale');
        const tx = gsap.getProperty(img, 'x');
        const ty = gsap.getProperty(img, 'y');
        const fx = (x) => geo.ox + s * (x - geo.ox) + tx;
        const fy = (y) => geo.oy + s * (y - geo.oy) + ty;
        const filled = fx(geo.cw * 0.06) <= -1 && fx(geo.cw * 0.94) >= geo.cw + 1
          && fy(geo.ch * 0.14) <= -1 && fy(geo.ch * 0.86) >= geo.ch + 1;
        if (filled !== img._filled) {
          img._filled = filled;
          img.classList.toggle('is-frame-filled', filled);
        }
      }
      if (scene.id === 'chapter-bosch') {
        // Retire the old surfaces using the rendered camera clock. CSS gates
        // cannot be undone by an opacity tween or ScrollTrigger refresh; they
        // lift only when the camera actually travels back into this chapter.
        section.classList.toggle('has-particle-portal', section._sceneProgress >= BOSCH_HANDOFF.portalReady);
        section.classList.toggle('has-left-dashboard', section._sceneProgress >= BOSCH_HANDOFF.zoomEnd);
      }
      section.dispatchEvent(new Event('sceneprogress'));
    };
    tl.eventCallback('onUpdate', render);
    ScrollTrigger.addEventListener('refresh', render);
    narrow.addEventListener('change', render);
    render();
    if (shared) driveSharedScene(section, tl, range);
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
    // Keep the bonnet, grille and lower bumper inside the camera's feathered
    // frame. Coarse-pointer/mobile layouts retain the original width fit.
    desktopFitHeight: 1700,
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
    revealEnd: 0.405,
    // The light arriving, and the crane out into the next chapter.
    transitions: [[0, 0.405], [0.86, 1]],

    place({ $, put, on }) {
      this.labelSizesDirty = true;
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
    // below. The name's points finish tracing the LEDs by 0.215 and hold
    // there, charging, until native light begins at 0.245. Its reach then
    // finds the full front by 0.405, before the render sweep at 0.44.
    intro(tl, { img, veil }) {
      if (veil) {
        gsap.set(veil, { '--li': 0, '--lr': 9 });
        tl.to(veil, { '--li': 1, duration: 0.15, ease: 'power1.inOut' }, 0.245)
          .to(veil, { '--lr': 140, duration: 0.14, ease: 'power1.inOut' }, 0.265);
      }
      tl.to(img, { scale: APPROACH_SCALE, duration: 0.16, ease: 'power2.out' }, 0.265);
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
      const invalidateLabelSizes = () => { this.labelSizesDirty = true; };
      this.labelSizesObserver?.disconnect();
      if (typeof ResizeObserver !== 'undefined') {
        this.labelSizesObserver = new ResizeObserver(invalidateLabelSizes);
        Object.values(this.refs.labels).forEach((label) => this.labelSizesObserver.observe(label));
      }
      document.fonts?.addEventListener('loadingdone', invalidateLabelSizes);
      document.fonts?.ready.then(invalidateLabelSizes);
      const { dots, labels, leaders } = this.refs;

      gsap.set([spillL, spillR], { opacity: 0, scale: 0.8 });
      gsap.set([lampL, lampR, badge, scan, caption, perf, ...Object.values(labels)], { opacity: 0 });
      gsap.set(Object.values(dots), { opacity: 0, scale: 0 });
      gsap.set(corners, { opacity: 0, scale: 0.4 });

      // The lamps come up as the beam reaches them, left a beat before the
      // right. These only amplify the corona rings the photo already has,
      // so they stay crisp; the faint spill lights the bodywork.
      tl.to(spillL, { opacity: 1, scale: 1, duration: 0.1, ease: 'power2.out' }, 0.248)
        .to(lampL, { opacity: 1, duration: 0.08, ease: 'power2.out' }, 0.252)
        .to(spillR, { opacity: 1, scale: 1, duration: 0.1, ease: 'power2.out' }, 0.262)
        .to(lampR, { opacity: 1, duration: 0.08, ease: 'power2.out' }, 0.268)
        .to([spillL, spillR], { opacity: 0.75, duration: 0.1, ease: 'power1.out' }, 0.36);

      // The emblem lights from within — the photograph's own blue and
      // white panels brightening in place, the last detail to wake.
      tl.to(badge, { opacity: 1, duration: 0.09, ease: 'power2.out' }, 0.292);

      // The slate over the establishing shot, held, then docked. It waits
      // for the car: the lamps are already on and the light is reaching the
      // bodywork by 0.30, so the title arrives as the BMW emerges rather
      // than over the top of the darkness and the smoke it's emerging from.
      const dock = slateBeats(tl, $, { at: 0.30, dockAt: 0.44 });

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
      // Only changed values are written: an unchanged write still restyles
      // (and repaints) the whole viewport-sized layer they belong to.
      const write = (el, name, value) => {
        if (el._written?.[name] === value) return;
        (el._written ||= {})[name] = value;
        if (name === 'd') el.setAttribute('d', value);
        else if (name.startsWith('--')) el.style.setProperty(name, value);
        else el.style[name] = value;
      };
      if (veil) {
        const [ax, ay] = screenPoint(this.lampL.x, this.lampL.y);
        const [bx, by] = screenPoint(this.lampR.x, this.lampR.y);
        write(veil, '--l1x', `${ax.toFixed(2)}px`);
        write(veil, '--l1y', `${ay.toFixed(2)}px`);
        write(veil, '--l2x', `${bx.toFixed(2)}px`);
        write(veil, '--l2y', `${by.toFixed(2)}px`);
      }

      const { dots, labels, leaders } = this.refs;
      const compact = narrow.matches;
      // The labels move each camera frame, but their layout dimensions do
      // not. Font, viewport and wrapping changes invalidate this cache.
      if (!compact && (this.labelSizesDirty || !this.labelSizes)) {
        this.labelSizes = Object.fromEntries(Object.keys(this.pins)
          .map((name) => [name, [labels[name].offsetWidth, labels[name].offsetHeight]]));
        this.labelSizesDirty = false;
      }
      const sizes = compact ? null : this.labelSizes;
      // Pins and labels move by the compositor's `translate`, not left/top,
      // so following the camera needs no layout.
      const move = (el, x, y) => (moveByTranslate
        ? write(el, 'translate', x === null ? '' : `${x.toFixed(1)}px ${y.toFixed(1)}px`)
        : (write(el, 'left', x === null ? '' : `${x.toFixed(1)}px`), write(el, 'top', y === null ? '' : `${y.toFixed(1)}px`)));
      Object.entries(this.pins).forEach(([name, pin]) => {
        const dot = dots[name];
        const label = labels[name];
        // A pin that is not on screen yet keeps its last position.
        if (!(gsap.getProperty(dot, 'opacity') > 0 || gsap.getProperty(label, 'opacity') > 0)) return;
        const [ax, ay] = screenPoint(pin.x, pin.y);
        move(dot, ax, ay);
        if (compact) { move(label, null, null); return; }

        const [w, h] = sizes[name];
        const below = label.classList.contains('callout--below');
        const ex = Math.min(Math.max(ax + pin.elbow[0] * geo.cw, geo.cw * 0.05), geo.cw * 0.95 - w);
        const ey = ay + pin.elbow[1] * geo.ch;
        move(label, ex, below ? ey + 10 : ey - h - 10);
        write(leaders[name], 'd', `M${ax.toFixed(1)} ${ay.toFixed(1)}L${ex.toFixed(1)} ${ey.toFixed(1)}L${(ex + w).toFixed(1)} ${ey.toFixed(1)}`);
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
      tl.to(plane, { y: () => CRANE_OUT * geo.ch * (narrow.matches ? 0.75 : 1), duration: DUR, ease: EASE }, AT)
        .to(img, { scale: 1, duration: DUR, ease: EASE }, AT)
        .to($('.zoom-bg-blur'), { autoAlpha: 1, duration: 0.06, ease: 'power1.in' }, 0.92)
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
   * camera moves through the dashboard display into the particle field
   * that assembles the portrait opening Chapter 03.
   */
  const BOSCH_SCENE = {
    id: 'chapter-bosch',
    continues: true,
    // Measured directly off assets/bosch-cockpit-*.png, in their own pixel
    // space. The page shows the @2x.webp upscales of them — exactly twice
    // the size, so the same coordinates hold (only the ratio matters).
    image: { w: 941, h: 1672 },
    // Fitted by width on a phone too (no coverNarrow): the photo runs the
    // full dashboard edge to edge, and covering the height cropped the wheel
    // and the passenger side off a portrait screen.
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
    transitions: [[0, 0.24], [BOSCH_HANDOFF.zoomStart, 1]],

    place({ $, put, on, scale }) {
      this.uiSizeDirty = true;
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
      tl.fromTo(plane, { y: () => -CRANE_IN * geo.ch * (narrow.matches ? 0.75 : 1) }, { y: 0, duration: 0.22, ease: 'power2.out' }, 0)
        .fromTo(img, { scale: 0.78 }, { scale: APPROACH_SCALE, duration: 0.22, ease: 'power2.out' }, 0)
        .fromTo($('.zoom-bg-blur'), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.09, ease: 'power1.out' }, 0);
    },

    beats(tl, ctx) {
      const { $, $$, img, geo } = ctx;
      const screenOn = $('.screen-on');
      const spill = $('.screen-spill');
      const ui = $('.screen-ui');
      const pages = [1, 2, 3].map((n) => ui.querySelector(`.sui-page--${n}`));
      const pageDots = ui.querySelectorAll('.sui-dots i');
      const strips = $$('.strip');
      const uiBar = $('.sui-bar');
      this.refs = { ui };
      const invalidateUISize = () => { this.uiSizeDirty = true; };
      this.uiSizeObserver?.disconnect();
      if (typeof ResizeObserver !== 'undefined') {
        this.uiSizeObserver = new ResizeObserver(invalidateUISize);
        this.uiSizeObserver.observe(ui);
      }
      window.addEventListener('resize', invalidateUISize, { passive: true });
      document.fonts?.addEventListener('loadingdone', invalidateUISize);
      document.fonts?.ready.then(invalidateUISize);

      // autoAlpha: once faded out they leave rendering entirely (Firefox keeps
      // invisible will-change layers otherwise, inside the zooming frame).
      gsap.set([screenOn, spill], { autoAlpha: 0 });
      gsap.set(ui, { autoAlpha: 0 });
      gsap.set(pages, { opacity: 0, x: 24 });
      gsap.set(strips, { autoAlpha: 0 });

      // The display's backlight catches as the camera slows toward it,
      // then, once the camera has settled, the display boots fully — the
      // Bosch mark resolves, with a restrained glow on the dashboard.
      tl.to(screenOn, { autoAlpha: 0.35, duration: 0.06, ease: 'power1.out' }, 0.07)
        .to(screenOn, { autoAlpha: 1, duration: 0.09, ease: 'power2.inOut' }, 0.17)
        .to(spill, { autoAlpha: 1, duration: 0.1, ease: 'power2.out' }, 0.17);

      // The slate, over the booted display. It docks as the camera leans in.
      const dock = slateBeats(tl, $, { at: 0.23, dockAt: 0.4 });

      // Lean in: the display comes to the middle of the frame, large
      // enough to read — about 60% of a desktop's width, nearly all of a
      // phone's. Then the Bosch screen hands over to the work.
      const glassW = (this.glass[1][0] + this.glass[2][0] - this.glass[0][0] - this.glass[3][0]) / 2;
      const pushScale = () => {
        const target = Math.min(geo.cw * (geo.ch > geo.cw ? 0.84 : 0.58), geo.ch * 0.58 * glassW / 167);
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

      // The opaque work interface has replaced the boot logo. Clear that
      // underlying image now, so fading the interface later cannot expose it.
      tl.fromTo(screenOn, { autoAlpha: 1 }, {
        autoAlpha: 0, duration: 0.02, ease: 'none', immediateRender: false,
      }, 0.52);

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
      tl.to(strips, { autoAlpha: 1, duration: 0.02 }, 0.52)
        .fromTo($$('.strip--out .pulse'), { '--t': 0 }, { '--t': 1, duration: 0.05, stagger: 0.025, repeat: 4, ease: 'none' }, 0.53)
        .fromTo($$('.strip--back .pulse'), { '--t': 0 }, { '--t': 1, duration: 0.05, stagger: 0.025, repeat: 4, ease: 'none' }, 0.545)
        .fromTo($$('.strip--in .pulse'), { '--t': 0 }, { '--t': 1, duration: 0.03, repeat: 7, ease: 'none' }, 0.535)
        .to(strips, { autoAlpha: 0, duration: 0.02 }, 0.8);

      // Fill both viewport axes with the glass, including portrait phones.
      // The extra inset takes the bezel beyond every corner before handoff.
      // A bounded image layer is reused; only its compositor transform moves.
      const nearScale = () => {
        return Math.max(geo.cw / (297 * geo.scale), geo.ch / (167 * geo.scale)) * 1.16;
      };
      tl.to(img, {
        scale: nearScale,
        x: () => geo.cw / 2 - geo.ox,
        y: () => geo.ch * 0.5 - geo.oy,
        duration: BOSCH_HANDOFF.zoomEnd - BOSCH_HANDOFF.zoomStart,
        ease: 'sine.inOut',
      }, BOSCH_HANDOFF.zoomStart)
        .to(pages[2], { opacity: 0, x: -18, duration: 0.05, ease: 'sine.inOut' }, 0.825)
        .to(uiBar, { opacity: 0, duration: 0.04, ease: 'sine.inOut' }, 0.835)
        .to(strips, { autoAlpha: 0.85, duration: 0.02 }, 0.82)
        .fromTo($('.strip--out .pulse'), { '--t': 0 }, { '--t': 1, duration: 0.09, ease: 'power1.inOut' }, 0.82)
        .to(strips, { autoAlpha: 0, duration: 0.035 }, 0.84)
        .to(dock, { opacity: 0, duration: 0.035, ease: 'sine.inOut' }, 0.84)
        .to(spill, { autoAlpha: 0, duration: 0.035, ease: 'sine.inOut' }, 0.84)
        .to(ui, { autoAlpha: 0, duration: 0.035, ease: 'sine.inOut' }, 0.84);
    },

    // Replace only the display surface as its UI clears. Its measured polygon
    // follows the camera all the way offscreen, without fading the cockpit.
    outro(tl, { $ }) {
      const next = document.getElementById('chapter-beyond');
      const stage = next?.querySelector('.story-stage');
      tl.to({}, { duration: 1 }, 0);
      if (stage && document.documentElement.classList.contains('has-story')) {
        const layer = document.createElement('div');
        const portrait = document.createElement('div');
        const matte = document.createElement('div');
        const cover = document.createElement('div');
        layer.className = 'scene-bridge scene-bridge--portrait';
        portrait.className = 'scene-bridge__portrait';
        matte.className = 'scene-bridge__matte';
        cover.className = 'scene-bridge__cover';
        layer.setAttribute('aria-hidden', 'true');
        portrait.append(matte, cover);
        layer.appendChild(portrait);
        document.body.appendChild(layer);
        gsap.set(portrait, { autoAlpha: 0 });
        gsap.set(stage, { opacity: 0 });
        gsap.set(layer, { autoAlpha: 1 });
        window.SceneKit.boschPortrait = { layer, stage, portal: portrait };
        tl.to(portrait, {
          autoAlpha: 1,
          duration: BOSCH_HANDOFF.portalReady - BOSCH_HANDOFF.portalStart,
          ease: 'sine.inOut',
        }, BOSCH_HANDOFF.portalStart)
          .set(stage, { opacity: 1 }, BOSCH_HANDOFF.zoomEnd);
      }
    },

    // The interface is drawn in screen space and laid onto the display's
    // glass wherever the camera has put it, so it's always exactly on the
    // screen — in perspective, through the lean-in and back.
    render({ screenPoint }) {
      const ui = this.refs && this.refs.ui;
      if (!ui) return;
      // The camera changes the projected quad, not this untransformed box.
      // Layout, fonts and ResizeObserver invalidate its dimensions.
      if (this.uiSizeDirty || !this.uiSize) {
        this.uiSize = [ui.offsetWidth, ui.offsetHeight];
        this.uiSizeDirty = false;
      }
      const corners = this.glass.map(([x, y]) => screenPoint(x, y));
      ui.style.transform = quadMatrix(this.uiSize[0], this.uiSize[1], corners);
      const clip = `polygon(${corners.map(([x, y]) => `${x.toFixed(2)}px ${y.toFixed(2)}px`).join(',')})`;
      const bridge = window.SceneKit.boschPortrait;
      if (bridge?.portal) bridge.portal.style.clipPath = clip;
      if (window.PortraitState) {
        const xs = corners.map(([x]) => x);
        const ys = corners.map(([, y]) => y);
        window.PortraitState.dashboardRect = {
          x: Math.min(...xs), y: Math.min(...ys),
          width: Math.max(...xs) - Math.min(...xs), height: Math.max(...ys) - Math.min(...ys),
        };
        window.PortraitState.dashboardClip = clip;
      }
    },
  };

  // Shared with js/story.js, so chapters 03–06 open with the same slate and
  // dock, and sit the cursor glow out of their transitions the same way.
  window.SceneKit = { slateBeats, trackTransitions, driveSharedScene, scrollPosition: () => sharedScroll.y };

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

  // Everything here reads real layout (vh units, pin measurements), so it waits
  // for a painted, non-zero viewport (a collapsed 0-size one would wedge the
  // pins). It no longer waits for window `load`, which also waits for every
  // image and web font: anyone who scrolled in during a slow load saw the
  // chapters' raw markup (titles and callouts over a dark car) until it fired.
  // Layout is remeasured on every refresh, and ScrollTrigger refreshes itself
  // once fonts and images have arrived (`load`).
  function init() {
    setupHeroExit();
    setupPhotoScene(BMW_SCENE);
    setupPhotoScene(BOSCH_SCENE);
    ScrollTrigger.refresh();
    document.documentElement.classList.remove('scenes-pending');
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
    // Deferred scripts run once the document is parsed; two frames later
    // its layout has been painted at least once.
    requestAnimationFrame(() => requestAnimationFrame(() => whenViewportReady(init)));
  }

  start();

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') ScrollTrigger.refresh();
  });
})();
