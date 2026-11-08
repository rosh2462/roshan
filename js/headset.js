/* Chapter 03's headset: between the portrait and the HiWi lab, the camera
 * pushes into a VR headset and through its lens into a dark field of light,
 * and the lab comes up out of that field. The visitor puts the headset on.
 *
 * The clip is scrubbed by the scroll, so scrolling back takes the headset
 * off again. js/story.js holds chapter 03's timeline on its dark beat for
 * the clip's stretch of scroll and publishes how far through the clip we
 * are (section._headsetProgress, 0..1); this file only draws that.
 *
 * Two cuts of the same 4.4 s clip (assets/headset/): a 16:9 one for
 * landscape screens, whose framing tilts down from the headset to the
 * field's horizon, and the full 9:16 one for portrait phones. Both are
 * encoded with a keyframe every 5 frames, so a seek in either direction
 * decodes at most four frames. Each is about 1.2 MB, fetched only when the
 * chapter is a few screens away, and released again once it is far behind.
 *
 * The stretch also buys the lab time: while the clip plays the lab
 * finishes building and compiles its shaders at full speed (it is
 * "visible"), draws its first frame behind the clip, then sleeps until the
 * clip is nearly over.
 */
(() => {
  const root = document.documentElement;
  const section = document.getElementById('chapter-beyond');
  const host = section?.querySelector('.headset');
  const rig = host?.querySelector('.headset__rig');
  const video = host?.querySelector('.headset__clip');
  const feather = host?.querySelector('.headset__feather');
  const labspace = section?.querySelector('.labspace');
  if (!root.classList.contains('has-headset') || !section || !host || !rig || !video) return;

  const DURATION = 4.4;
  const FRAME = 1 / 30;
  const HOLD_AT = 0.446;
  const wide = matchMedia('(min-aspect-ratio: 9/10)');
  const clamp = (v) => Math.max(0, Math.min(1, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };

  /* ---------- loading ---------- */
  let wanted = false;
  let primed = false;
  const source = () => (wide.matches ? video.dataset.wide : video.dataset.tall);
  // The element stays rendered (visibility) for as long as it holds the clip;
  // drawing it in and out is done with opacity alone. iPhone Safari stops
  // repainting a paused video that was hidden outright, so on the way back
  // up from the lab the clip stayed frozen on its last frame.
  function attach() {
    const src = source();
    host.style.visibility = 'visible';
    if (video.getAttribute('src') === src) return;
    primed = false;
    video.src = src;
    video.load();
  }
  function release() {
    host.style.visibility = 'hidden';
    if (!video.getAttribute('src')) return;
    video.removeAttribute('src');
    video.load(); // frees the decoder and its buffers (iPhone memory)
    primed = false;
  }
  // iOS shows no frame of a video, and seeks nothing, until it has played;
  // a muted inline play (allowed without a gesture) that pauses at once.
  const wake = () => {
    if (primed) return;
    primed = true;
    const played = video.play();
    if (played && played.then) played.then(() => { video.pause(); seek(); }).catch(() => seek());
    else { video.pause(); seek(); }
  };
  // Metadata is enough to start; some engines hold the first data until then.
  video.addEventListener('loadedmetadata', wake);
  video.addEventListener('loadeddata', wake);
  wide.addEventListener('change', () => { if (wanted) attach(); });
  if ('IntersectionObserver' in window) {
    // Near: fetch. Far behind or far ahead: let it go.
    new IntersectionObserver((entries) => {
      const near = entries.some((e) => e.isIntersecting);
      if (near === wanted) return;
      wanted = near;
      if (near) attach(); else release();
    }, { rootMargin: '250% 0px 250% 0px' }).observe(section);
  } else {
    wanted = true;
    attach();
  }

  /* ---------- scrubbing ---------- */
  // One seek at a time; while one is decoding, only the latest target waits.
  // A seek that never reports back (Safari drops some) is given up on after
  // a moment, so the clip can't freeze. `fresh` asks for a new frame even at
  // the same time, for when the clip comes back into view. Each time is
  // asked for once: a browser may land a frame short of it (the last frame),
  // and asking again would only loop.
  let target = 0;
  let seekAt = 0;
  let asked = -1;
  function seek(fresh = false) {
    if (!video.getAttribute('src') || video.readyState < 1) return;
    if (video.seeking && performance.now() - seekAt < 1500) return;
    const near = Math.abs(video.currentTime - target) < FRAME * 0.5;
    if (!fresh && (near || target === asked)) return;
    asked = near ? Math.max(0, target - FRAME) : target;
    seekAt = performance.now();
    video.currentTime = asked;
  }
  video.addEventListener('seeked', () => seek());
  video.addEventListener('emptied', () => { asked = -1; });

  /* ---------- drawing ---------- */
  let shown = false;
  let last = -1;
  let lastWide = null;
  const lab = () => window.HiWiLabState;
  function draw() {
    const v = section._headsetProgress || 0;
    const p = section._sceneProgress || 0;
    const live = !!labspace?.classList.contains('is-live');
    // Off before the clip; and once the lab is up over its last frame, off
    // again (the lab's canvas is opaque) unless the lab never came.
    const show = v > 0 && (v < 1 || !live);
    let back = false;
    if (show !== shown) {
      shown = show;
      back = show;
      if (!show) host.style.opacity = '0';
      last = -1;
    }

    // The lab: build and compile now, draw one frame behind the clip, then
    // sleep until the clip is nearly over. story.js owns it outside the hold.
    const state = lab();
    if (state && p > 0.435 && p <= HOLD_AT + 1e-4 && v < 1) {
      const want = !live || v > 0.82;
      if (state.visible !== want) {
        state.visible = want;
        section.dispatchEvent(new Event('sceneprogress'));
      }
    }

    if (!show || (v === last && wide.matches === lastWide)) return;
    last = v;
    lastWide = wide.matches;

    // Light comes up out of the portrait's darkness, and the clip runs over
    // the middle of the stretch: its head and tail are holds.
    host.style.opacity = smooth(0, 0.1, v).toFixed(3);
    target = Math.min(DURATION - 2 * FRAME, Math.max(0, (v - 0.05) / 0.8) * DURATION);
    seek(back);

    // On a landscape screen the headset starts as an object in the dark —
    // smaller than the frame, its cut edges feathered away — and the push
    // carries it out to fill the frame before the lens is reached; then a
    // last slow drift on into the field. A phone shows the clip full frame.
    const push = smooth(0.12, 0.6, v);
    const scale = wide.matches ? 0.72 + 0.28 * push + 0.05 * smooth(0.6, 1, v)
      : 0.94 + 0.06 * push + 0.04 * smooth(0.6, 1, v);
    rig.style.transform = `scale(${scale.toFixed(4)})`;
    if (feather) feather.style.opacity = (1 - smooth(0.3, 0.58, v)).toFixed(3);
  }
  window.addEventListener('sceneclock', draw);
  section.addEventListener('sceneprogress', draw);
  if (!wanted) host.style.visibility = 'hidden';
})();
