(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stageTextEls = document.querySelectorAll('#hero .stage-text');
  const hero = document.getElementById('hero');

  // Dust motes are built here (not hardcoded in HTML) so each load gets a
  // fresh, randomised scatter. They animate purely via the CSS "dust-drift"
  // keyframes (transform/opacity only) once visible, independent of GSAP.
  let dustField = null;
  if (!reduceMotion && hero) {
    dustField = document.createElement('div');
    dustField.className = 'dust-field';
    dustField.setAttribute('aria-hidden', 'true');

    const MOTE_COUNT = 18;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < MOTE_COUNT; i += 1) {
      const mote = document.createElement('span');
      mote.className = 'dust-mote';
      const duration = Math.random() * 6 + 7; // 7s - 13s
      mote.style.setProperty('--size', `${(Math.random() * 1.6 + 1).toFixed(1)}px`);
      mote.style.setProperty('--x', `${(Math.random() * 90 + 5).toFixed(1)}%`);
      mote.style.setProperty('--y', `${(Math.random() * 90 + 5).toFixed(1)}%`);
      mote.style.setProperty('--duration', `${duration.toFixed(1)}s`);
      // Negative delay starts each mote already mid-cycle so they don't all
      // pulse in sync the moment the field fades in.
      mote.style.setProperty('--delay', `${(-Math.random() * duration).toFixed(1)}s`);
      mote.style.setProperty('--dx', `${(Math.random() * 24 - 12).toFixed(1)}px`);
      mote.style.setProperty('--dy', `${-(Math.random() * 30 + 16).toFixed(1)}px`);
      mote.style.setProperty('--peak', (Math.random() * 0.35 + 0.35).toFixed(2));
      frag.appendChild(mote);
    }
    dustField.appendChild(frag);
    hero.querySelector('.stage-light').appendChild(dustField);
  }

  // No motion, or GSAP failed to load: skip straight to the lit, final state
  // rather than leaving the name permanently hidden.
  if (reduceMotion || typeof gsap === 'undefined') {
    stageTextEls.forEach((el) => { el.style.opacity = '1'; });
    if (dustField) dustField.style.opacity = '1';
    return;
  }

  // The beam is the page's one stage light, not a copy inside the hero.
  const cone = document.getElementById('persistentSpotlight');
  const haze = document.querySelector('.spotlight-haze');
  const pool = document.querySelector('.spotlight-pool');
  const eyebrow = document.querySelector('#hero .eyebrow');
  const title = document.querySelector('#hero .hero-title');
  const role = document.querySelector('#hero .hero-role');
  const sub = document.querySelector('#hero .hero-sub');
  const hint = document.querySelector('#hero .scroll-hint');
  const nav = document.getElementById('navWrap');

  gsap.set(stageTextEls, { y: 14 });
  if (nav) gsap.set(nav, { opacity: 0, y: -12 });

  // A single autoplay sequence — no scroll involved. The beam, haze and dust
  // bloom in first, then the name catches the light, then the nav fades in.
  // The beam is struck on here and nowhere else: this timeline is the only
  // thing that ever sets its opacity.
  //
  // Every element below is placed at an absolute time on this timeline
  // (rather than chained relative offsets) so the tube-light flicker can
  // replace the cone's old single fade without reshuffling everything that
  // follows it.
  const tl = gsap.timeline({ delay: 0.3 });

  // --- The beam striking like an old tube light: a few quick, irregular
  // flashes as it strikes, gaining ground each time, before the gas fully
  // ionises and it settles into a steady glow. Snap cuts (no ease) for the
  // flickers themselves; only the final settle eases smoothly. ---
  const flicker = [
    [0.00, 0], [0.04, 0.22], [0.08, 0.03], [0.16, 0.4],
    [0.21, 0.06], [0.32, 0.52], [0.38, 0.1], [0.52, 0.68], [0.6, 0.28],
  ];
  flicker.forEach(([t, o], i) => {
    if (i === 0) tl.set(cone, { opacity: o }, t);
    else tl.to(cone, { opacity: o, duration: 0.02, ease: 'none' }, t);
  });
  tl.to(cone, { opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.6);

  tl.to(haze, { opacity: 1, duration: 1.2, ease: 'power1.out' }, 0.2);
  if (dustField) tl.to(dustField, { opacity: 1, duration: 1.8, ease: 'power1.out' }, 0.3);
  tl.to(pool, { opacity: 1, duration: 1, ease: 'power2.out' }, 0.6)
    .to(eyebrow, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.8)
    .to(title, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 0.95)
    .to(role, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 1.3)
    .to(sub, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 1.5)
    .to(hint, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 1.7);

  if (nav) tl.to(nav, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 1.9);

  // --- The sleeping cat drops in once the spotlight has caught the name,
  // so there's an "n" for it to land on: a quick fall, a squash on impact,
  // a little bounce-hop, then it settles in with a soft overshoot. A tiny
  // poof marks the landing. Kept on its own .cat-rig element (rather than
  // animating .sleeping-cat directly) so this transform never fights the
  // plain CSS transform that centres/tilts the cat over the letter. ---
  const catRig = document.querySelector('.cat-rig');
  const catPoof = document.querySelector('.cat-poof');
  if (catRig) {
    gsap.set(catRig, { opacity: 0, y: '-1.6em', scaleX: 1, scaleY: 1 });
    if (catPoof) gsap.set(catPoof, { opacity: 0, scale: 0.3 });

    const T = 1.4; // once the name is substantially lit
    tl.set(catRig, { opacity: 1 }, T)
      .to(catRig, { y: '0.1em', duration: 0.32, ease: 'power2.in' }, T)
      .to(catRig, { scaleY: 0.62, scaleX: 1.3, duration: 0.07, ease: 'power1.out' }, T + 0.32);

    if (catPoof) {
      tl.to(catPoof, { opacity: 1, scale: 1.2, duration: 0.1, ease: 'power2.out' }, T + 0.32)
        .to(catPoof, { opacity: 0, duration: 0.3, ease: 'power1.out' }, T + 0.42);
    }

    tl.to(catRig, { y: '-0.36em', scaleY: 1.12, scaleX: 0.9, duration: 0.15, ease: 'power2.out' }, T + 0.39)
      .to(catRig, { y: '0em', scaleY: 1, scaleX: 1, duration: 0.32, ease: 'back.out(2.4)' }, T + 0.54);
  }
})();
