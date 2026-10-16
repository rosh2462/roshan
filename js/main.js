(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The chapters themselves are scrubbed GSAP timelines: the hero and the
  // two car chapters in js/chapters.js, chapters 03–06 in js/story.js.

  /* ---------- Magnetic buttons ---------- */
  if (!reduceMotion && matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });
  }

  /* ---------- In-page links ----------
   * Chapter links travel through the chapter dial (js/dial.js), which knows
   * each chapter's landing pose and glides or cuts there. Anything else falls
   * back to an instant jump. History is replaced, never pushed: Back should
   * leave the page, not replay a sweep through every chapter in between. */
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href^="#"]');
    if (!link || event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
    // The dial handles its own links; game cards open the works player.
    if (link.closest('.dial') || link.hasAttribute('aria-haspopup') || link.closest('.player')) return;
    const hash = link.getAttribute('href');
    const target = hash.length > 1 && document.getElementById(hash.slice(1));
    if (!target && hash !== '#top') return;
    event.preventDefault();
    if (window.SiteDial?.goToHash(hash, { source: event.detail === 0 ? 'keyboard' : 'pointer' })) return;
    (target || document.documentElement).scrollIntoView({ block: 'start' });
  });
})();
