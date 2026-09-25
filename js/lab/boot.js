/* Entry point for the HiWi laboratory (a plain classic script, like every
 * other script on this site — so the page works opened straight from disk as
 * well as from a server).
 *
 * The lab itself is js/lab/lab.bundle.js: the ES modules in this folder plus
 * three.js, bundled into one classic script (see README.md for how to
 * rebuild it). Two things about how it loads:
 *
 *  - It waits. The lab sits well down a long page and the bundle is ~575 KB,
 *    so nothing is fetched until the visitor is within a couple of screens of
 *    the chapter — the portrait scene that opens it takes longer than that to
 *    scroll through, so the lab is ready before it's needed.
 *
 *  - It fails soft. If WebGL is unavailable or the bundle can't load, the
 *    chapter carries on with its captions over the dark stage.
 */
(() => {
  const canvas = document.querySelector('.lab-canvas');
  const stage = document.querySelector('.labspace');
  const section = document.getElementById('chapter-beyond');
  if (!canvas || !stage || !section) return;

  const bundleUrl = new URL('lab.bundle.js?v=8', document.currentScript.src).href;
  const state = (window.HiWiLabState = window.HiWiLabState || { progress: 0 });

  function fail(err) {
    console.warn('HiWi lab: 3D scene unavailable —', err);
    stage.classList.remove('is-loading');
    stage.classList.add('is-failed');
  }

  function load() {
    performance.mark('hiwi:load-begin');
    stage.classList.add('is-loading'); // shows the spinner until the first frame
    try {
      // A cheap capability check before paying for the download.
      const probe = document.createElement('canvas');
      if (!probe.getContext('webgl2')) throw new Error('WebGL 2 unavailable');
    } catch (err) {
      fail(err);
      return;
    }

    const script = document.createElement('script');
    script.src = bundleUrl;
    script.onload = () => {
      performance.mark('hiwi:bundle-loaded');
      try {
        window.HiWiLab = window.HiWiLabBundle.startLab({ canvas, stage, state });
      } catch (err) {
        fail(err);
      }
    };
    script.onerror = () => fail(new Error(`could not load ${bundleUrl}`));
    document.head.appendChild(script);
  }

  if (!('IntersectionObserver' in window)) {
    load();
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      load();
    },
    { rootMargin: '200% 0px 200% 0px' },
  );
  io.observe(section);
})();
