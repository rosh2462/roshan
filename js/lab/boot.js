/* Entry point for the HiWi laboratory (a plain classic script, like every
 * other script on this site — so the page works opened straight from disk as
 * well as from a server).
 *
 * The lab itself is js/lab/lab.bundle.js: the ES modules in this folder plus
 * three.js, bundled into one classic script (see README.md for how to
 * rebuild it). Two things about how it loads:
 *
 *  - It waits. The lab sits well down a long page and the shared bundle is ~580 KB,
 *    so it is built during a pause after the opening (js/face/boot.js's
 *    SceneIdle), after the scenes before it — or, at the latest, when the
 *    visitor is within a couple of screens of the chapter.
 *
 *  - It fails soft. If WebGL is unavailable or the bundle can't load, the
 *    chapter carries on with its captions over the dark stage.
 */
(() => {
  const canvas = document.querySelector('.lab-canvas');
  const stage = document.querySelector('.labspace');
  const section = document.getElementById('chapter-beyond');
  if (!canvas || !stage || !section) return;

  const bundleUrl = new URL('lab.bundle.js?v=32', document.currentScript.src).href;
  const state = (window.HiWiLabState = window.HiWiLabState || { progress: 0 });
  state.noAdapt = true;

  function fail(err) {
    console.warn('HiWi lab: 3D scene unavailable —', err);
    stage.classList.remove('is-loading');
    stage.classList.add('is-failed');
  }

  let loading = null;
  let near = false;
  function load() {
    if (loading) return loading;
    let done;
    loading = new Promise((resolve) => { done = resolve; });
    performance.mark('hiwi:load-begin');
    stage.classList.add('is-loading'); // shows the spinner until the first frame
    try {
      // A cheap capability check before paying for the download.
      const probe = document.createElement('canvas');
      const gl = probe.getContext('webgl2');
      if (!gl) throw new Error('WebGL 2 unavailable');
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    } catch (err) {
      fail(err);
      done();
      return loading;
    }

    const start = async () => {
      performance.mark('hiwi:bundle-loaded');
      // The room is built in pieces, each in a pause — or at once when the
      // visitor is already in the chapter.
      const idle = window.SceneIdle;
      // Far from the chapter, work waits for real pauses; once the visitor is
      // near, the short gaps between scroll steps are used, so preparation
      // still finishes before the lab is on screen.
      const pause = (ms = 200, limit = 900) => (!idle || state.visible ? Promise.resolve()
        : near ? idle.quiet(Math.min(ms, 90), Math.min(limit, 250)) : idle.quiet(ms, limit));
      try {
        window.HiWiLab = await window.HiWiLabBundle.startLab({ canvas, stage, state, pause });
        // Hold the background queue until its shaders are prepared.
        await window.HiWiLab.warm;
      } catch (err) {
        fail(err);
      }
      done();
    };
    if (window.loadScene3D) {
      window.loadScene3D().then(start).catch((err) => { fail(err); done(); });
    } else {
      const script = document.createElement('script');
      script.src = bundleUrl;
      script.onload = start;
      script.onerror = () => { fail(new Error(`could not load ${bundleUrl}`)); done(); };
      document.head.appendChild(script);
    }
    return loading;
  }
  // Third in story order, after the BMW bridge and the portrait.
  window.SceneIdle?.prepare(3, load);

  if (!('IntersectionObserver' in window)) {
    load();
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      near = true;
      load();
    },
    { rootMargin: '200% 0px 200% 0px' },
  );
  io.observe(section);
})();
