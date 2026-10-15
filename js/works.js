(() => {
  /* ---------- Chapter 04 · Creative works: the library and the player ----------
   * The chapter is a game library, like a console's: the featured game fills
   * the stage (its art behind, its details and an Open button in front) and
   * the collection is a row of covers beneath. Pointing at or focusing a
   * cover features it; on a phone, the cover swiped to the middle is
   * featured. Opening a game pops its cover out into a full-screen player —
   * the cover's own rounded frame growing until it meets the edges of the
   * screen — where the work plays as a full-bleed poster.
   * The tabs, arrows, arrow keys or a swipe move between games; Esc, the
   * close button or a swipe down sends the player back into its card.
   *
   * The lab's monitor (chapter 03) opens the same player. The end of the lab
   * is a gate: scrolling waits there, with a hint, until the visitor taps or
   * clicks the monitor, which pops NeuroMaze out of the screen at full size.
   * Underneath, the page moves on to the library, so closing the player lands
   * NeuroMaze in its cover and the gate stays open from then on.
   *
   * Without this file the cards are plain links to the posters, which read
   * as an ordinary page below the covers.
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
  // A title may be a logo (Escape Quest's is hand-drawn): then its alt text.
  const titles = posters.map((poster) => {
    const title = poster.querySelector('.poster-title');
    return title?.textContent.trim() || title?.querySelector('img')?.alt || '';
  });
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
  posters.forEach((poster) => {
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
  let openedFromLab = false;
  let slide = null;

  function lockPage(on) {
    root.classList.toggle('is-player-open', on);
  }
  player.tabIndex = -1;
  // Whether the visitor is using the keyboard, for where focus goes on open.
  let keyboardOpen = false;
  document.addEventListener('keydown', () => { keyboardOpen = true; }, true);
  document.addEventListener('pointerdown', () => { keyboardOpen = false; }, true);

  function open(i, { rect = null, radius = 18, art = '', fromLab = false } = {}) {
    if (state !== 'closed') return false;
    state = 'opening';
    openedFromLab = fromLab;
    returnFocus = document.activeElement;
    index = Math.max(0, Math.min(count - 1, i));
    select(index);
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
    const card = fromLab ? null : cards[index];
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
      // Keyboard users land on Close; a click or tap just moves focus into
      // the dialog, without a focus ring appearing on the button.
      (keyboardOpen ? closeButton : player)?.focus({ preventScroll: true });
      if (fromLab) landOnShelf();
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
    ui.classList.remove('is-visible');
    present(index, false);
    settleScroll();
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
    select(index);
    const focusTarget = openedFromLab ? card : (returnFocus && document.contains(returnFocus) ? returnFocus : card);
    focusTarget?.focus?.({ preventScroll: true });
    returnFocus = null;
  }

  // On a phone the covers are a swipeable row: bring the one being returned
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
      select(next);
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
      if (drag.axis === 'y') { ui.classList.remove('is-visible'); player.classList.add('is-animating'); }
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

  /* ---- the library ----------------------------------------------------------- */
  const backdrops = [...section.querySelectorAll('.library-backdrop__img')];
  const entries = [...section.querySelectorAll('.library-entry')];
  const openButton = section.querySelector('.library-open');
  const openName = section.querySelector('.library-open__name');
  const itchLink = section.querySelector('.library-link');
  const links = posters.map((poster) => poster.querySelector('.poster-cta')?.href || '');
  let selected = -1;
  // Feature a game: its art behind, its details in front, its cover lit.
  function select(i) {
    i = Math.max(0, Math.min(count - 1, i));
    if (i === selected) return;
    selected = i;
    cards.forEach((card, j) => {
      card.classList.toggle('is-selected', j === i);
      if (j === i) card.setAttribute('aria-current', 'true');
      else card.removeAttribute('aria-current');
    });
    backdrops.forEach((img) => img.classList.toggle('is-current', Number(img.dataset.work) === i));
    entries.forEach((entry) => entry.classList.toggle('is-current', Number(entry.dataset.work) === i));
    const glow = cards[i]?.style.getPropertyValue('--card-glow').trim();
    if (glow) section.style.setProperty('--entry-glow', glow);
    if (openName) openName.textContent = titles[i];
    if (itchLink) {
      itchLink.hidden = !links[i];
      if (links[i]) {
        itchLink.href = links[i];
        itchLink.setAttribute('aria-label', `${titles[i]} on itch.io`);
      }
    }
  }
  function openCard(i) {
    select(i);
    const target = cardFrame(i);
    open(i, { rect: target?.rect, radius: target?.radius, art: artOf(i) });
  }
  openButton?.addEventListener('click', () => openCard(Math.max(0, selected)));
  cards.forEach((card, i) => {
    card.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
      event.preventDefault();
      openCard(i);
    });
    card.addEventListener('focus', () => select(i));
    // Left and right walk the row, as on a console.
    card.addEventListener('keydown', (event) => {
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
      if (!step || !cards[i + step]) return;
      event.preventDefault();
      cards[i + step].focus();
    });
    card.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse' || !finePointer.matches) return;
      select(i);
      card.classList.add('is-hover');
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
  // On a phone the covers are a row to swipe: the one nearest the middle is
  // the featured game.
  let rowFrame = 0;
  shelfList?.addEventListener('scroll', () => {
    if (rowFrame) return;
    rowFrame = requestAnimationFrame(() => {
      rowFrame = 0;
      if (shelfList.scrollWidth <= shelfList.clientWidth + 2) return;
      const middle = shelfList.getBoundingClientRect().left + shelfList.clientWidth / 2;
      let nearest = 0;
      let distance = Infinity;
      cards.forEach((card, j) => {
        const box = card.getBoundingClientRect();
        const d = Math.abs(box.left + box.width / 2 - middle);
        if (d < distance) { distance = d; nearest = j; }
      });
      select(nearest);
    });
  }, { passive: true });
  select(0);

  /* ---- after opening from the lab: land on the library -------------------- */
  const LANDING = 0.42; // chapter progress at which the library has settled (js/story.js)
  function shelfY() {
    const stage = section.querySelector('.story-stage');
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (root.classList.contains('has-story') && !compact.matches && stage) {
      return top + LANDING * Math.max(0, section.offsetHeight - stage.clientHeight);
    }
    // In page flow: the chapter's heading just under the nav, the cards below.
    const heading = section.querySelector('.slate') || shelf;
    return window.scrollY + heading.getBoundingClientRect().top - 96;
  }
  function settleScroll() {
    if (typeof ScrollTrigger === 'undefined') return;
    ScrollTrigger.update();
    // Finish every scrubbed scene at once, rather than easing through the
    // chapters in between underneath the player.
    ScrollTrigger.getAll().forEach((trigger) => {
      const scrub = trigger.getTween?.();
      if (scrub && typeof scrub.progress === 'function') scrub.progress(1);
    });
  }
  function landOnShelf() {
    unlock();
    window.scrollTo({ top: Math.max(0, shelfY()), behavior: 'instant' });
    settleScroll();
  }

  /* ---- the gate at the end of the lab ------------------------------------- */
  const labSection = document.getElementById('chapter-beyond');
  const labScene = labSection?.querySelector('.lab-scene');
  const hint = document.querySelector('.gate-hint');
  hint?.querySelectorAll('.gate-hint__verb').forEach((node) => { node.textContent = verb; });
  // Just after the monitor has been selected and its label invites a tap
  // (js/story.js runs the lab from .46 to .9 of chapter 03).
  const GATE_AT = 0.905;
  let unlocked = reduceMotion;

  const labReady = () => {
    const stats = window.HiWiLab?.stats?.();
    return !!stats && stats.drawn > 0 && stats.contextAvailable !== false;
  };
  function gateY() {
    const range = labSection?._sceneRange;
    return range && range.end > range.start ? range.start + GATE_AT * (range.end - range.start) : Infinity;
  }
  const gateActive = () => !unlocked && state === 'closed' && root.classList.contains('has-story') && labReady();

  function unlock() {
    if (unlocked) return;
    unlocked = true;
    showHint(false);
    guard(false);
  }

  let hintShown = false;
  function showHint(on) {
    if (!hint || on === hintShown) return;
    hintShown = on;
    if (on) hint.hidden = false;
    hint.classList.toggle('is-visible', on);
    root.classList.toggle('is-lab-gated', on);
  }

  let lastNudge = 0;
  const restart = (node, name) => {
    if (!node) return;
    node.classList.remove(name);
    void node.offsetWidth;
    node.classList.add(name);
  };
  function nudge() {
    showHint(true);
    const now = performance.now();
    if (now - lastNudge < 700) return;
    lastNudge = now;
    restart(hint, 'is-nudge');
    restart(document.querySelector('.lab-tag'), 'is-calling');
    // A soft wall: the scene gives a little and springs back.
    if (!reduceMotion) {
      labScene?.animate?.([
        { transform: 'translate3d(0, 0, 0)' },
        { transform: 'translate3d(0, -14px, 0)', offset: 0.28 },
        { transform: 'translate3d(0, 0, 0)' },
      ], { duration: 680, easing: 'cubic-bezier(0.3, 0.7, 0.3, 1)' });
    }
  }
  const holdAt = (y) => window.scrollTo({ top: y, behavior: 'instant' });

  function onWheel(event) {
    if (event.ctrlKey || !gateActive()) return;
    const dy = event.deltaY * (event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? innerHeight : 1);
    const gate = gateY();
    if (dy <= 0 || window.scrollY + dy <= gate) return;
    event.preventDefault();
    if (window.scrollY < gate - 0.5) holdAt(gate);
    nudge();
  }
  let touchY = null;
  function onTouchStart(event) { touchY = event.touches[0]?.clientY ?? null; }
  function onTouchMove(event) {
    if (touchY === null || !gateActive()) return;
    const y = event.touches[0]?.clientY ?? touchY;
    if (touchY - y > 0 && window.scrollY >= gateY() - 2) {
      if (event.cancelable) event.preventDefault();
      nudge();
    }
  }
  // The non-passive listeners hold up native scrolling, so they are only
  // attached while the visitor is near the gate.
  let guarded = false;
  function guard(on) {
    if (on === guarded) return;
    guarded = on;
    const method = on ? 'addEventListener' : 'removeEventListener';
    window[method]('wheel', onWheel, { passive: false });
    window[method]('touchstart', onTouchStart, { passive: true });
    window[method]('touchmove', onTouchMove, { passive: false });
  }

  function onScroll() {
    if (unlocked) return;
    const gate = gateY();
    if (!Number.isFinite(gate)) return;
    const y = window.scrollY;
    if (!gateActive()) {
      // Already past it some other way (a link, a restored position) before
      // the lab ever drew: then it was never in the way, and isn't now.
      if (y > gate + innerHeight) unlock();
      guard(false);
      showHint(false);
      return;
    }
    guard(y > gate - innerHeight * 2.5);
    if (y > gate + 1) {
      // A jump far past the lab (the scrollbar thumb, find in page) is the
      // visitor choosing to leave; anything nearer is held at the gate.
      if (y > gate + innerHeight * 1.5) { unlock(); return; }
      holdAt(gate);
      nudge();
      return;
    }
    showHint(y >= gate - innerHeight * 0.05);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.addEventListener('refresh', onScroll);

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || !gateActive()) return;
    const space = event.key === ' ' && !event.shiftKey;
    if (space && event.target.closest?.('button, a, input, textarea, select, [contenteditable]')) return;
    const step = { ArrowDown: 40, PageDown: innerHeight * 0.9, End: Infinity }[event.key] ?? (space ? innerHeight * 0.9 : 0);
    if (!step || event.target.closest?.('input, textarea, select, [contenteditable]')) return;
    const gate = gateY();
    if (window.scrollY + step <= gate) return;
    event.preventDefault();
    if (window.scrollY < gate - 0.5) holdAt(gate);
    nudge();
  });
  // A link elsewhere on the page (the nav) is the visitor's own choice.
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href^="#"]');
    if (link && !link.hasAttribute('aria-haspopup') && !link.closest('.player')) unlock();
  }, true);
  hint?.addEventListener('click', () => openFromLab());

  function openFromLab() {
    let rect = null;
    try { rect = window.HiWiLab?.screenRect?.() || null; } catch (error) { rect = null; }
    showHint(false);
    unlock();
    return open(0, { rect, radius: 6, fromLab: true });
  }

  window.WorksPlayer = { open: (i = 0) => open(i), openFromLab, close, go: (i) => go(i), get state() { return state; } };

  /* ---- each poster's scene, looping while it is on screen ----------------- */
  const drawn = (v) => ({ attr: { 'stroke-dashoffset': v } });

  function buildLoop(poster) {
    if (poster.classList.contains('poster--escape')) return escapeQuest(poster);
    if (poster.classList.contains('poster--loopshoot')) return loopShoot(poster);
    return null; // NeuroMaze moves in CSS: the capture drifts, the pulse beats.
  }

  // 02 · Escape Quest: its rooms play on the screen (the living room, then
  // the library and its key) until somebody touches the wrong thing: GAME
  // OVER, a shake, and the run starts again. The cast looks on, nervously.
  function escapeQuest(poster) {
    const $ = (sel) => poster.querySelector(sel);
    const screen = $('.eq-screen');
    const room = $('.eq-shot--room');
    const library = $('.eq-shot--library');
    const over = $('.eq-shot--over');
    const retry = $('.eq-retry');
    const faces = [...poster.querySelectorAll('.eq-face')];
    const tl = gsap.timeline({ paused: true });
    // Each room drifts on its own, so no cut ever shows a jump.
    tl.fromTo(room, { scale: 1 }, { scale: 1.06, duration: 6.6, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0)
      .fromTo(library, { scale: 1.06 }, { scale: 1, duration: 5.2, repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);
    faces.forEach((face, i) => {
      tl.fromTo(face, { y: 0 }, { y: -6 - i * 2, duration: 1.7 + i * 0.4, repeat: -1, yoyo: true, ease: 'sine.inOut' }, i * 0.35);
    });
    const run = gsap.timeline({ repeat: -1 });
    run.set([library, over, retry], { opacity: 0 }, 0)
      .to(library, { opacity: 1, duration: 0.8, ease: 'power1.inOut' }, 4.8)
      .set(over, { opacity: 1, scale: 1.3 }, 10)
      .to(over, { scale: 1, duration: 0.5, ease: 'back.out(2.2)' }, 10)
      .fromTo(screen, { x: 0 }, { x: 6, duration: 0.05, repeat: 7, yoyo: true, ease: 'none', immediateRender: false }, 10)
      .set(screen, { x: 0 }, 10.45)
      .to(faces, { scale: 1.16, duration: 0.18, repeat: 1, yoyo: true, ease: 'power2.out', stagger: 0.06 }, 10.02)
      .fromTo(retry, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 10.8)
      .to([over, retry, library], { opacity: 0, duration: 0.7, ease: 'power1.inOut' }, 12.8)
      .to({}, { duration: 0.2 }, 13.5);
    tl.add(run, 0);
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
