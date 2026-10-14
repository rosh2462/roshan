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

  /* ---------- Navigation: one active marker and accessible disclosure ---------- */
  const nav = document.querySelector('.nav');
  const navToggle = document.getElementById('navToggle');
  const navLinksList = document.getElementById('navLinks');
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const mobileNav = matchMedia('(max-width: 860px)');
  const marker = document.createElement('span');
  marker.className = 'nav-marker'; marker.setAttribute('aria-hidden', 'true'); nav?.append(marker);
  let open = false, currentLink = null, navFrame = 0, markerDirty = true;
  let anchorsDirty = true, anchorTops = [];
  const pageTop = el => el.getBoundingClientRect().top + window.scrollY;

  function setMenu(next, restoreFocus = false) {
    if (!navToggle || !navLinksList) return;
    open = mobileNav.matches && next;
    navLinksList.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    // A disclosure, not a modal: the page can still scroll normally.
    const hidden = mobileNav.matches && !open;
    navLinksList.inert = hidden;
    if (hidden) navLinksList.setAttribute('aria-hidden', 'true');
    else navLinksList.removeAttribute('aria-hidden');
    navLinks.forEach(link => { if (hidden) link.setAttribute('tabindex', '-1'); else link.removeAttribute('tabindex'); });
    if (restoreFocus && mobileNav.matches) navToggle.focus({ preventScroll: true });
  }
  function placeMarker() {
    markerDirty = false;
    if (!nav || !currentLink || mobileNav.matches) { marker.classList.remove('ready'); return; }
    const frame = nav.getBoundingClientRect(), rect = currentLink.getBoundingClientRect();
    const style = getComputedStyle(currentLink);
    const left = parseFloat(style.paddingLeft) || 0, right = parseFloat(style.paddingRight) || 0;
    marker.style.width = Math.max(0, rect.width - left - right) + 'px';
    marker.style.transform = 'translateX(' + (rect.left - frame.left + left - nav.clientLeft) + 'px)';
    marker.classList.add('ready');
  }
  function setActive() {
    navFrame = 0;
    // Scene anchors stay in normal flow; transforms animate their inner stages.
    // Read their absolute positions only after a layout/font/ScrollTrigger refresh.
    if (anchorsDirty) { anchorTops = sections.map(pageTop); anchorsDirty = false; }
    let current = sections[0];
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    sections.forEach((section, index) => { if (anchorTops[index] <= scrollPos) current = section; });
    const next = navLinks.find(link => link.getAttribute('href') === '#' + current?.id);
    if (next !== currentLink) {
      currentLink = next; markerDirty = true;
      navLinks.forEach(link => {
        const active = link === currentLink;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    }
    if (markerDirty) placeMarker();
  }
  function queueActive() { if (!navFrame) navFrame = requestAnimationFrame(setActive); }
  function refreshNav() { markerDirty = true; anchorsDirty = true; queueActive(); }
  function syncBreakpoint() {
    const hadMenuFocus = navLinksList?.contains(document.activeElement);
    setMenu(false, mobileNav.matches && hadMenuFocus); refreshNav();
  }
  navToggle?.addEventListener('click', () => setMenu(!open));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && open) { event.preventDefault(); setMenu(false, true); }
  });
  document.addEventListener('pointerdown', event => {
    if (open && !nav?.contains(event.target)) setMenu(false, navLinksList?.contains(document.activeElement));
  }, { passive: true });
  mobileNav.addEventListener('change', syncBreakpoint);
  document.addEventListener('scroll', queueActive, { passive: true });
  window.addEventListener('resize', refreshNav, { passive: true });
  window.addEventListener('pageshow', refreshNav);
  window.visualViewport?.addEventListener('resize', refreshNav, { passive: true });
  const navLayoutObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(refreshNav) : null;
  sections.forEach(section => navLayoutObserver?.observe(section.parentElement));
  navLayoutObserver?.observe(document.body);
  document.fonts?.ready.then(refreshNav);
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.addEventListener('refresh', refreshNav);

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const targetId = link.getAttribute('href').slice(1);
    const target = targetId && document.getElementById(targetId);
    if (!target) return;
    link.addEventListener('click', event => {
      // Preserve modified clicks and native anchor behavior in other tabs.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
      event.preventDefault();
      if (open) setMenu(false, navLinksList.contains(document.activeElement));
      target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', '#' + targetId);
    });
  });
  syncBreakpoint(); setActive();
})();
