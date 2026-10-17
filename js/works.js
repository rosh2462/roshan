(() => {
  /* ---------- Chapter 04 · Creative works: the shelf and the player ----------
   * The chapter is a shelf of three games. Each card leans toward the cursor
   * and glows in its game's colour; opening one pops it out into a
   * full-screen player — the card's own rounded frame growing until it meets
   * the edges of the screen — where the work plays as a full-bleed poster.
   * The tabs, arrows, arrow keys or a swipe move between games; Esc, the
   * close button or a swipe down sends the player back into its card.
   *
   * The shelf is the one place the games open from. The lab's monitor
   * (chapter 03) is a signpost to it: tapping it glides down to the shelf
   * with NeuroMaze in front. Scrolling is never held back.
   *
   * The player is built to fit a phone's memory: only the game on screen is
   * rendered (its neighbour joins only while a swipe shows it), and once the
   * player covers the screen the page underneath is hidden, so the browser
   * can drop that page's layers until the player closes.
   *
   * Without this file the cards are plain links to the posters, which read
   * as an ordinary page below the shelf.
   */
  const section = document.getElementById('chapter-work');
  const player = document.getElementById('worksPlayer');
  if (!section || !player) return;

  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const compact = matchMedia('(max-width: 720px), (max-height: 600px)');

  root.classList.add('has-works');
  // Fixed to the viewport, above the nav: out of the chapter's sticky stage.
  document.body.appendChild(player);
  player.setAttribute('role', 'dialog');
  player.setAttribute('aria-modal', 'true');
  player.setAttribute('aria-hidden', 'true');
  player.inert = true;

  const win = player.querySelector('.player__window');
  const track = player.querySelector('.player__track');
  const posters = [...track.querySelectorAll('.poster')];
  const backdrop = player.querySelector('.player__backdrop');
  const ui = player.querySelector('.player__ui');
  const closeButton = player.querySelector('.player__close');
  const prevButton = player.querySelector('.player__arrow--prev');
  const nextButton = player.querySelector('.player__arrow--next');
  const tabs = [...player.querySelectorAll('.player__dot')];
  const swipeHint = player.querySelector('.player__swipe');
  const status = player.querySelector('.player__status');
  const shelf = section.querySelector('.shelf');
  const shelfList = section.querySelector('.shelf-cards');
  const cards = [...section.querySelectorAll('.game-card')];
  const titles = posters.map((poster) => poster.querySelector('.poster-title')?.textContent.trim() || '');
  const backgrounds = posters.map((poster) => poster.querySelector('.poster-bg'));
  const count = posters.length;

  const verb = coarse ? 'Tap' : 'Click';
  section.querySelectorAll('.shelf-hint__verb').forEach((node) => { node.textContent = verb; });
  if (swipeHint) swipeHint.textContent = coarse ? 'Swipe for more games · down to close' : '← → to browse · Esc to close';

  // The card art, shown over the window while it leaves or returns to a card.
  const ghost = document.createElement('div');
  ghost.className = 'player__ghost';
  ghost.setAttribute('aria-hidden', 'true');
  win.insertBefore(ghost, ui);

  // Each poster's copy arrives line by line once the player has opened.
  posters.forEach((poster, k) => {
    poster.style.setProperty('--k', k);
    [...poster.querySelectorAll('.poster-content > *')].forEach((node, i) => node.style.setProperty('--i', i));
  });

  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const smooth = (v) => { const t = clamp01(v); return t * t * (3 - 2 * t); };
  const lerp = (a, b, t) => a + (b - a) * t;
  // A softly damped spring: it overshoots the screen by about one percent,
  // which is what makes the frame feel popped rather than resized.
  const spring = (t) => {
    if (t >= 1) return 1;
    const zeta = 0.8;
    const omega = 12.5;
    const damped = omega * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * omega * t) * (Math.cos(damped * t) + (zeta * omega / damped) * Math.sin(damped * t));
  };
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = (t) => 1 - Math.pow(1 - t, 4);

  function tween(duration, step) {
    return new Promise((resolve) => {
      if (reduceMotion || duration <= 0) { step(1); resolve(); return; }
      const start = performance.now();
      step(0);
      const frame = (now) => {
        const t = clamp01((now - start) / duration);
        step(t);
        if (t < 1) requestAnimationFrame(frame);
        else resolve();
      };
      requestAnimationFrame(frame);
    });
  }

  /* ---- the window's frame ------------------------------------------------
   * The poster is always laid out at full-screen size. To show it inside any
   * smaller rectangle (a card, the monitor), it is scaled to cover that
   * rectangle and clipped to it, with the corner radius divided by the scale
   * so the corners stay truly round on screen at every size. */
  const viewport = () => ({ x: 0, y: 0, width: win.clientWidth || innerWidth, height: win.clientHeight || innerHeight });
  const mix = (a, b, t) => ({
    x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t),
    width: lerp(a.width, b.width, t), height: lerp(a.height, b.height, t),
  });
  let current = null;
  function frame(rect, radius, ghostOpacity = 0) {
    const { width: W, height: H } = viewport();
    const s = Math.max(rect.width / W, rect.height / H, 0.001);
    const tx = rect.x + rect.width / 2 - (s * W) / 2;
    const ty = rect.y + rect.height / 2 - (s * H) / 2;
    const left = (rect.x - tx) / s;
    const top = (rect.y - ty) / s;
    const width = rect.width / s;
    const height = rect.height / s;
    const r = Math.max(0, radius) / s;
    win.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${s.toFixed(5)})`;
    win.style.clipPath = `inset(${top.toFixed(2)}px ${(W - left - width).toFixed(2)}px ${(H - top - height).toFixed(2)}px ${left.toFixed(2)}px round ${r.toFixed(2)}px)`;
    ghost.style.opacity = ghostOpacity.toFixed(3);
    if (ghostOpacity > 0) {
      ghost.style.transform = `translate3d(${left.toFixed(2)}px, ${top.toFixed(2)}px, 0)`;
      ghost.style.width = `${width.toFixed(2)}px`;
      ghost.style.height = `${height.toFixed(2)}px`;
      ghost.style.borderRadius = `${r.toFixed(2)}px`;
    }
    current = { rect, radius };
  }
  function clearFrame() {
    win.style.transform = '';
    win.style.clipPath = '';
    ghost.style.opacity = '0';
    current = null;
  }
  // Rounded the whole way: the corners open up as the frame grows and only
  // square off in the last moment, as the frame meets the screen's edges.
  const cornerRadius = (start, e) => {
    const peak = compact.matches ? 20 : 26;
    return lerp(start, peak, smooth(e / 0.45)) * (1 - smooth((e - 0.84) / 0.16));
  };

  /* ---- the posters: position, parallax and their scenes ------------------ */
  let index = 0;
  let pos = 0;
  function render(p) {
    pos = p;
    const W = viewport().width;
    track.style.transform = `translate3d(${(-p * W).toFixed(2)}px, 0, 0)`;
    posters.forEach((poster, i) => {
      const d = i - p;
      // Only a poster that is actually on screen is rendered at all.
      poster.classList.toggle('is-shown', Math.abs(d) < 0.999);
      const near = Math.abs(d) < 1.2;
      // The scene behind lags the frame, so a change of game has depth.
      backgrounds[i].style.transform = near && d ? `translate3d(${(-d * W * 0.34).toFixed(2)}px, 0, 0)` : '';
      poster.style.setProperty('--shade', near ? Math.min(1, Math.abs(d)).toFixed(3) : '1');
    });
  }

  const loops = [];
  function activate(i) {
    posters.forEach((poster, j) => {
      poster.classList.toggle('is-active', j === i);
      poster.inert = j !== i;
      poster.setAttribute('aria-hidden', String(j !== i));
    });
    if (reduceMotion || typeof gsap === 'undefined') return;
    if (!loops[i]) loops[i] = buildLoop(posters[i]);
    loops.forEach((loop, j) => { if (loop && j !== i) loop.pause(); });
    loops[i]?.play();
  }
  function pauseLoops() { loops.forEach((loop) => loop?.pause()); }
  function present(i, on = true) { posters[i].classList.toggle('is-presented', on); }

  function updateNav() {
    tabs.forEach((tab, i) => {
      if (i === index) tab.setAttribute('aria-current', 'true');
      else tab.removeAttribute('aria-current');
    });
    if (prevButton) prevButton.disabled = index === 0;
    if (nextButton) nextButton.disabled = index === count - 1;
    if (status) status.textContent = `${titles[index]}, ${index + 1} of ${count}`;
    player.setAttribute('aria-label', `Creative works: ${titles[index]}`);
    player.style.setProperty('--glow', cards[index]?.style.getPropertyValue('--card-glow') || '244, 207, 142');
  }

  /* ---- open / close -------------------------------------------------------- */
  let state = 'closed'; // closed · opening · open · closing
  let returnFocus = null;
  let slide = null;

  function lockPage(on) {
    root.classList.toggle('is-player-open', on);
    if (!on) cover(false);
    window.dispatchEvent(new CustomEvent('worksplayer', { detail: { open: on } }));
  }
  // While the player fills the screen nothing of the page shows, so it is
  // hidden outright: the browser stops painting it and can free its layers.
  function cover(on) { root.classList.toggle('is-player-covered', on); }
  player.tabIndex = -1;
  // Whether the visitor is using the keyboard, for where focus goes on open.
  let keyboardOpen = false;
  document.addEventListener('keydown', () => { keyboardOpen = true; }, true);
  document.addEventListener('pointerdown', () => { keyboardOpen = false; }, true);

  function open(i, { rect = null, radius = 18, art = '' } = {}) {
    if (state !== 'closed') return false;
    state = 'opening';
    returnFocus = document.activeElement;
    index = Math.max(0, Math.min(count - 1, i));
    lockPage(true);
    player.inert = false;
    player.removeAttribute('aria-hidden');
    player.classList.add('is-open', 'is-animating');
    ui.classList.remove('is-visible');
    posters.forEach((_, j) => present(j, false));
    render(index);
    updateNav();
    activate(index);
    ghost.style.backgroundImage = art || 'none';
    const card = cards[index];
    card?.classList.add('is-lifted');
    const W = viewport().width;
    const H = viewport().height;
    const start = rect && rect.width > 4 && rect.height > 4 ? rect
      : { x: W * 0.3, y: H * 0.3, width: W * 0.4, height: H * 0.4 };
    let presented = false;
    tween(860, (t) => {
      const e = spring(t);
      frame(mix(start, viewport(), e), cornerRadius(radius, e), art ? 1 - smooth(t / 0.13) : 0);
      backdrop.style.opacity = clamp01(t * 2.4).toFixed(3);
      if (!presented && t > 0.36) { presented = true; present(index); }
    }).then(() => {
      clearFrame();
      player.classList.remove('is-animating');
      present(index);
      ui.classList.add('is-visible');
      state = 'open';
      cover(true);
      // Keyboard users land on Close; a click or tap just moves focus into
      // the dialog, without a focus ring appearing on the button.
      (keyboardOpen ? closeButton : player)?.focus({ preventScroll: true });
    });
    return true;
  }

  function cardFrame(i) {
    const card = cards[i];
    const face = card?.querySelector('.game-card__tilt');
    if (!face) return null;
    const rect = face.getBoundingClientRect();
    const { width: W, height: H } = viewport();
    if (rect.width < 4 || rect.bottom < 0 || rect.top > H || rect.right < 0 || rect.left > W) return null;
    const radius = parseFloat(getComputedStyle(face).borderTopLeftRadius) || 18;
    return { rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height }, radius };
  }
  const artOf = (i) => {
    const art = cards[i]?.querySelector('.game-card__art');
    return art ? getComputedStyle(art).backgroundImage : '';
  };

  async function close() {
    if (state !== 'open') return;
    state = 'closing';
    stopSlide();
    cover(false);
    ui.classList.remove('is-visible');
    present(index, false);
    revealCard(index);
    const target = cardFrame(index);
    const from = current ? current.rect : viewport();
    const fromRadius = current ? current.radius : 0;
    player.classList.add('is-animating');
    const card = cards[index];
    if (target) {
      card.classList.add('is-lifted');
      ghost.style.backgroundImage = artOf(index) || 'none';
      await tween(620, (t) => {
        const e = easeInOut(t);
        const radius = lerp(fromRadius, target.radius, smooth(t / 0.5));
        frame(mix(from, target.rect, e), Math.max(radius, cornerRadius(target.radius, 1 - e)), smooth((t - 0.72) / 0.24));
        backdrop.style.opacity = (1 - easeOut(t)).toFixed(3);
      });
    } else {
      await tween(360, (t) => {
        const e = easeOut(t);
        frame(mix(from, inset(viewport(), 0.08), e), lerp(fromRadius, 24, e));
        win.style.opacity = (1 - e).toFixed(3);
        backdrop.style.opacity = (1 - e).toFixed(3);
      });
    }
    finishClose(card);
  }
  const inset = (r, k) => ({ x: r.x + r.width * k, y: r.y + r.height * k, width: r.width * (1 - 2 * k), height: r.height * (1 - 2 * k) });

  function finishClose(card) {
    clearFrame();
    win.style.opacity = '';
    backdrop.style.opacity = '0';
    player.classList.remove('is-open', 'is-animating');
    player.inert = true;
    player.setAttribute('aria-hidden', 'true');
    pauseLoops();
    lockPage(false);
    if (card) {
      card.classList.remove('is-lifted');
      card.classList.add('is-landing');
      setTimeout(() => card.classList.remove('is-landing'), 700);
    }
    state = 'closed';
    const focusTarget = returnFocus && document.contains(returnFocus) ? returnFocus : card;
    focusTarget?.focus?.({ preventScroll: true });
    returnFocus = null;
  }

  // On a phone the shelf is a swipeable row: bring the card being returned
  // to into view first, so the player has somewhere to land.
  function revealCard(i) {
    const card = cards[i];
    if (!card || !shelfList || shelfList.scrollWidth <= shelfList.clientWidth + 2) return;
    const item = card.parentElement;
    const left = item.offsetLeft - (shelfList.clientWidth - item.offsetWidth) / 2;
    shelfList.scrollTo({ left, behavior: 'instant' });
  }

  /* ---- changing game ------------------------------------------------------ */
  function stopSlide() {
    if (slide) { slide.cancelled = true; slide = null; }
  }
  function go(next, { duration = 640 } = {}) {
    if (state !== 'open') return;
    next = Math.max(0, Math.min(count - 1, next));
    const from = pos;
    if (next !== index) {
      present(index, false);
      index = next;
      updateNav();
      activate(next);
    }
    if (Math.abs(from - next) < 0.001) { render(next); present(next); return; }
    stopSlide();
    const run = (slide = { cancelled: false });
    let presented = false;
    const length = Math.min(duration, 260 + 520 * Math.abs(from - next));
    tween(length, (t) => {
      if (run.cancelled) return;
      render(lerp(from, next, easeOut(t)));
      if (!presented && t > 0.3) { presented = true; present(next); }
    }).then(() => { if (slide === run) slide = null; });
  }

  /* ---- gestures: swipe across to change game, down to close --------------- */
  let drag = null;
  win.addEventListener('pointerdown', (event) => {
    if (state !== 'open' || !event.isPrimary || event.pointerType === 'mouse') return;
    if (event.target.closest('button')) return;
    drag = { id: event.pointerId, x0: event.clientX, y0: event.clientY, axis: '', pos0: pos,
      x: event.clientX, y: event.clientY, t: performance.now(), vx: 0, vy: 0 };
  });
  win.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x0;
    const dy = event.clientY - drag.y0;
    if (!drag.axis) {
      if (Math.hypot(dx, dy) < 10) return;
      drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : dy > 0 ? 'y' : 'none';
      if (drag.axis === 'none') { drag = null; return; }
      stopSlide();
      win.setPointerCapture?.(event.pointerId);
      if (drag.axis === 'y') { cover(false); ui.classList.remove('is-visible'); player.classList.add('is-animating'); }
    }
    const now = performance.now();
    const dt = now - drag.t;
    if (dt > 0) {
      drag.vx = drag.vx * 0.4 + 0.6 * (event.clientX - drag.x) / dt;
      drag.vy = drag.vy * 0.4 + 0.6 * (event.clientY - drag.y) / dt;
    }
    drag.x = event.clientX;
    drag.y = event.clientY;
    drag.t = now;
    const { width: W, height: H } = viewport();
    if (drag.axis === 'x') {
      let p = drag.pos0 - dx / W;
      if (p < 0) p *= 0.3;
      if (p > count - 1) p = count - 1 + (p - count + 1) * 0.3;
      render(p);
    } else {
      // Pulled down, the player shrinks toward the finger like a photo
      // being put back, its corners rounding as it goes.
      const k = clamp01(dy / H);
      const width = W * (1 - 0.42 * k);
      const height = H * (1 - 0.42 * k);
      frame({ x: (W - width) / 2 + dx * 0.45, y: (H - height) / 2 + Math.max(0, dy) * 0.6, width, height }, 30 * Math.min(1, k * 6));
      backdrop.style.opacity = (1 - k * 1.3).toFixed(3);
    }
  });
  const endDrag = (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const { axis, vx, vy, x0, y0 } = drag;
    drag = null;
    const { width: W, height: H } = viewport();
    const dx = event.clientX - x0;
    const dy = event.clientY - y0;
    if (axis === 'x') {
      let next = index;
      if (dx < -W * 0.16 || vx < -0.45) next = index + 1;
      else if (dx > W * 0.16 || vx > 0.45) next = index - 1;
      go(next);
    } else if (axis === 'y') {
      if (event.type !== 'pointercancel' && (dy > H * 0.16 || vy > 0.6)) {
        close();
      } else {
        const from = current ? current.rect : viewport();
        const fromRadius = current ? current.radius : 0;
        tween(380, (t) => {
          const e = easeOut(t);
          frame(mix(from, viewport(), e), lerp(fromRadius, 0, e));
          backdrop.style.opacity = lerp(parseFloat(backdrop.style.opacity) || 0, 1, e).toFixed(3);
        }).then(() => {
          if (state !== 'open') return;
          clearFrame();
          player.classList.remove('is-animating');
          ui.classList.add('is-visible');
          cover(true);
        });
      }
    }
  };
  win.addEventListener('pointerup', endDrag);
  win.addEventListener('pointercancel', endDrag);

  // A sideways trackpad swipe changes game too.
  let wheelSum = 0;
  let wheelQuiet = 0;
  let wheelTimer = 0;
  player.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (state !== 'open' || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => { wheelSum = 0; }, 180);
    if (performance.now() < wheelQuiet) return;
    wheelSum += event.deltaX;
    if (Math.abs(wheelSum) > 70) {
      go(index + Math.sign(wheelSum));
      wheelSum = 0;
      wheelQuiet = performance.now() + 650;
    }
  }, { passive: false });

  closeButton?.addEventListener('click', close);
  prevButton?.addEventListener('click', () => go(index - 1));
  nextButton?.addEventListener('click', () => go(index + 1));
  tabs.forEach((tab, i) => tab.addEventListener('click', () => go(i)));

  document.addEventListener('keydown', (event) => {
    if (state === 'closed') return;
    if (event.key === 'Escape') { event.preventDefault(); close(); return; }
    if (state !== 'open') return;
    if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1); return; }
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1); return; }
    if (event.key === 'Tab') {
      // Keep focus inside the dialog.
      const focusable = [...player.querySelectorAll('button:not([disabled]), a[href]')]
        .filter((node) => !node.closest('[inert]') && node.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !player.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !player.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* ---- the shelf ----------------------------------------------------------- */
  const setAmbient = (i) => {
    const glow = cards[i]?.style.getPropertyValue('--card-glow').trim();
    if (glow) section.style.setProperty('--amb', `rgba(${glow}, 0.2)`);
  };
  cards.forEach((card, i) => {
    card.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
      event.preventDefault();
      const target = cardFrame(i);
      open(i, { rect: target?.rect, radius: target?.radius, art: artOf(i) });
    });
    card.addEventListener('focus', () => setAmbient(i));
    card.addEventListener('pointerenter', (event) => {
      setAmbient(i);
      if (event.pointerType === 'mouse' && finePointer.matches) card.classList.add('is-hover');
    });
    let tiltFrame = 0;
    let px = 0.5;
    let py = 0.5;
    card.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' || !finePointer.matches) return;
      const bounds = card.getBoundingClientRect();
      px = clamp01((event.clientX - bounds.left) / bounds.width);
      py = clamp01((event.clientY - bounds.top) / bounds.height);
      if (tiltFrame) return;
      tiltFrame = requestAnimationFrame(() => {
        tiltFrame = 0;
        card.style.setProperty('--px', px.toFixed(3));
        card.style.setProperty('--py', py.toFixed(3));
      });
    });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(tiltFrame);
      tiltFrame = 0;
      card.classList.remove('is-hover');
      card.style.removeProperty('--px');
      card.style.removeProperty('--py');
    });
  });

  /* ---- from the lab's monitor: down to the shelf -------------------------- */
  // The monitor is a signpost, not a second way in: it takes the visitor to
  // the shelf, where the game it was showing waits in front and glows once.
  const SHELF_AT = 0.42; // chapter progress at which the shelf is settled (js/story.js)
  let calling = null;
  function showShelf(i = 0) {
    if (state !== 'closed') return false;
    const card = cards[i];
    revealCard(i);
    calling?.disconnect();
    calling = null;
    if (card && typeof IntersectionObserver !== 'undefined') {
      calling = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        calling.disconnect();
        calling = null;
        setAmbient(i);
        card.classList.remove('is-called');
        void card.offsetWidth;
        card.classList.add('is-called');
        setTimeout(() => card.classList.remove('is-called'), 1600);
      }, { threshold: 0.75 });
      calling.observe(card);
    }
    // Large screens stage the chapter: the title arrives first, then the
    // shelf settles (js/story.js), so the glide goes on to the shelf itself.
    const stage = section.querySelector('.story-stage');
    if (root.classList.contains('has-story') && !compact.matches && stage) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + SHELF_AT * Math.max(0, section.offsetHeight - stage.clientHeight), behavior: reduceMotion ? 'auto' : 'smooth' });
    } else if (window.SiteDial?.go) {
      window.SiteDial.go(4, { source: 'pointer' });
    } else {
      document.getElementById('work')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
    return true;
  }

  window.WorksPlayer = {
    open: (i = 0) => open(i), close, go: (i) => go(i), showShelf, get state() { return state; },
  };

  /* ---- each poster's scene, looping while it is on screen ----------------- */
  const seeded = (seed) => () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const drawn = (v) => ({ attr: { 'stroke-dashoffset': v } });

  function buildLoop(poster) {
    if (poster.classList.contains('poster--apocalypse')) return apocalypse(poster);
    if (poster.classList.contains('poster--loopshoot')) return loopShoot(poster);
    return null; // NeuroMaze moves in CSS: the capture drifts, the pulse beats.
  }

  // 02 · The Apocalypse: the astronaut runs on while the horizon drifts at
  // three depths and the oxygen drains, warns, and is topped up again.
  function apocalypse(poster) {
    const $ = (sel) => poster.querySelector(sel);
    const stars = $('.apoc-stars');
    if (stars && !stars.childElementCount) {
      const rand = seeded(1969);
      const ns = 'http://www.w3.org/2000/svg';
      for (let i = 0; i < 60; i += 1) {
        const star = document.createElementNS(ns, 'circle');
        star.setAttribute('cx', (rand() * 1600).toFixed(1));
        star.setAttribute('cy', (rand() * 380).toFixed(1));
        star.setAttribute('r', (0.7 + rand() * 1.3).toFixed(2));
        star.setAttribute('opacity', (0.25 + rand() * 0.6).toFixed(2));
        stars.appendChild(star);
      }
    }
    const pct = $('.apoc-hud-pct');
    const level = $('.apoc-hud-level');
    const tank = $('.apoc-tank-level');
    const warning = $('.apoc-warning');
    const tl = gsap.timeline({ paused: true });
    const stride = { duration: 0.42, repeat: -1, yoyo: true, ease: 'sine.inOut' };
    tl.fromTo([$('.apoc-leg--back'), $('.apoc-arm--back')], { rotation: -10 }, { rotation: 25, svgOrigin: '46 210', ...stride }, 0)
      .fromTo([$('.apoc-leg--front'), $('.apoc-arm--front')], { rotation: 10 }, { rotation: -21, svgOrigin: '78 214', ...stride }, 0)
      .fromTo(poster.querySelectorAll('.apoc-motion-line'), { opacity: 0.1, x: 10 }, { opacity: 0.55, x: -8, duration: 0.42, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
      .fromTo($('.apoc-ridge--back'), { x: 0 }, { x: -16, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
      .fromTo($('.apoc-ridge--mid'), { x: 0 }, { x: -34, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
      .fromTo($('.apoc-ground'), { x: 0 }, { x: -58, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);
    const oxygen = { v: 100 };
    const show = () => {
      pct.textContent = `${Math.round(oxygen.v)}%`;
      level.setAttribute('stroke-dashoffset', ((100 - oxygen.v) / 100).toFixed(3));
      gsap.set(tank, { scaleY: Math.max(0.04, oxygen.v / 100) });
    };
    const cycle = gsap.timeline({ repeat: -1 });
    cycle.set(warning, { opacity: 0 }, 0)
      .set(level, { stroke: '' }, 0)
      .fromTo(oxygen, { v: 100 }, { v: 14, duration: 7, ease: 'power1.in', onUpdate: show }, 0)
      .set(level, { stroke: '#ff5a4e' }, 5.6)
      .fromTo(warning, { opacity: 0 }, { opacity: 1, duration: 0.25, repeat: 5, yoyo: true, ease: 'none' }, 5.6)
      .to(oxygen, { v: 100, duration: 0.9, ease: 'power2.out', onUpdate: show }, 7.6)
      .set(level, { stroke: '' }, 7.9)
      .to(warning, { opacity: 0, duration: 0.2 }, 7.6)
      .to({}, { duration: 0.6 }, 8.5);
    tl.add(cycle, 0);
    return tl;
  }

  // 03 · LoopShoot VR: release, arc, swish, the combo climbing — and the
  // second player across the court kept in sync the whole time.
  function loopShoot(poster) {
    const $ = (sel) => poster.querySelector(sel);
    const ball = $('.loop-ball');
    const arc = $('.loop-arc');
    const ray = $('.loop-ray');
    const net = $('.loop-net');
    const swish = $('.loop-hud-swish');
    const comboN = $('.loop-combo-n');
    const trailDots = [...poster.querySelectorAll('.loop-trail-dot')];
    const from = { x: 915, y: 600, s: 1.3 };
    const to = { x: 932, y: 229, s: 0.5 };
    const bow = 340;
    const at = (t) => ({
      x: from.x + (to.x - from.x) * t,
      y: from.y + (to.y - from.y) * t - bow * 4 * t * (1 - t),
      s: from.s + (to.s - from.s) * t,
    });
    const place = (t, trail = true) => {
      const p = at(t);
      ball.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${p.s.toFixed(2)})`);
      trailDots.forEach((dot, i) => {
        const tt = Math.max(0, t - (i + 1) * 0.045);
        const q = at(tt);
        dot.setAttribute('cx', q.x.toFixed(1));
        dot.setAttribute('cy', q.y.toFixed(1));
        dot.setAttribute('r', (10 * q.s).toFixed(1));
        dot.style.opacity = !trail || tt <= 0 ? '0' : (0.4 * (1 - i / trailDots.length)).toFixed(2);
      });
    };
    let combo = Number(comboN?.textContent) || 2;
    const shot = { t: 0 };
    const tl = gsap.timeline({ paused: true });
    tl.to($('.loop-sync'), { attr: { 'stroke-dashoffset': -0.6 }, duration: 1.2, ease: 'none', repeat: -1 }, 0)
      .fromTo($('.loop-remote'), { opacity: 0.6 }, { opacity: 0.3, duration: 1.4, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);
    const cycle = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    cycle.call(() => { shot.t = 0; place(0, false); }, null, 0)
      .set(ball, { opacity: 1 }, 0)
      .set(arc, { opacity: 0, ...drawn(1) }, 0)
      .fromTo(ray, { opacity: 0, ...drawn(1) }, { opacity: 1, ...drawn(0), duration: 0.18, ease: 'power2.out' }, 0.35)
      .to(ray, { opacity: 0, duration: 0.2 }, 0.55)
      .set(arc, { opacity: 1 }, 0.5)
      .to(arc, { ...drawn(0), duration: 0.95, ease: 'power1.out' }, 0.5)
      .fromTo(shot, { t: 0 }, { t: 1, duration: 0.95, ease: 'power1.out', onUpdate: () => place(shot.t) }, 0.5)
      .to(net, { scaleY: 1.18, svgOrigin: '100 132', duration: 0.12, ease: 'power2.out' }, 1.4)
      .to(net, { scaleY: 1, svgOrigin: '100 132', duration: 0.6, ease: 'elastic.out(1, 0.5)' }, 1.52)
      .call(() => {
        combo = combo >= 12 ? 1 : combo + 1;
        if (comboN) comboN.textContent = String(combo);
      }, null, 1.45)
      .fromTo(comboN, { scale: 1.5 }, { scale: 1, duration: 0.4, ease: 'back.out(3)' }, 1.45)
      .fromTo(swish, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(3)', transformOrigin: '50% 50%' }, 1.45)
      .to(swish, { opacity: 0, duration: 0.35, ease: 'power1.in' }, 2.15)
      .to([arc, ball], { opacity: 0, duration: 0.3 }, 1.9)
      .call(() => place(1, false), null, 2.2)
      .to({}, { duration: 0.2 }, 2.4);
    tl.add(cycle, 0);
    return tl;
  }

  window.addEventListener('resize', () => { if (state !== 'closed') render(pos); }, { passive: true });
  updateNav();
  render(0);
})();
