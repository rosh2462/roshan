(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The chapters themselves are scrubbed GSAP timelines: the hero and the
  // two car chapters in js/chapters.js, chapters 03–06 in js/story.js.

  /* ---------- Cursor glow (eased follow) ---------- */
  const glow = document.querySelector('.cursor-glow');
  if (glow && !reduceMotion && matchMedia('(hover: hover)').matches) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    const tick = () => {
      curX += (targetX - curX) * 0.09;
      curY += (targetY - curY) * 0.09;
      glow.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

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

  /* ---------- Nav: smooth scroll, active link, mobile toggle ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute('href').slice(1);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', `#${targetId}`);
    });
  });

  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  // Page position, not offsetTop: nav targets are anchors placed inside
  // their chapters (see .scene-anchor), and offsetTop is only relative to
  // the chapter.
  const pageTop = (el) => el.getBoundingClientRect().top + window.scrollY;
  const setActive = () => {
    let current = sections[0];
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    sections.forEach((sec) => {
      if (pageTop(sec) <= scrollPos) current = sec;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`);
    });
  };
  document.addEventListener('scroll', setActive, { passive: true });
  setActive();

  const navToggle = document.getElementById('navToggle');
  const navLinksList = document.getElementById('navLinks');
  if (navToggle && navLinksList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinksList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinksList.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinksList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
