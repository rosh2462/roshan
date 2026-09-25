import * as THREE from 'three';

import { PALETTE, SCHEDULE } from './config.js';
import { seg, smooth } from './timeline.js';
import { createMaterials, createEnvironment } from './materials.js';
import { createLighting } from './lighting.js';
import { createCameraRig } from './camera-rig.js';
import { createPost } from './post.js';
import { createGrid } from './components/grid.js';
import { createFloor } from './components/floor.js';
import { createWalls } from './components/walls.js';
import { createDesks } from './components/desks.js';
import { createStorage } from './components/storage.js';
import { createIsland } from './components/island.js';
import { createWorkstation } from './components/workstation.js';
import { createProps } from './components/props.js';
import { createInteraction } from './components/interaction.js';
import { createAtmosphere } from './components/atmosphere.js';

/* The HiWi laboratory: a real-time three.js scene, drawn only while it is
 * on screen, whose entire state is a function of `state.progress` (0 → 1).
 * js/story.js owns that number — it is the scrubbed GSAP timeline — so
 * scrolling forward builds the lab and scrolling back takes it apart.
 *
 * With no scroll driver (reduced motion, or GSAP unavailable) the finished
 * lab is drawn once, still, at progress 1. */

function pickQuality() {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const small = Math.min(screen.width, screen.height) < 700;
  const low = coarse || small;
  return {
    low,
    maxDpr: low ? 1.5 : 2,
    shadowSize: low ? 1024 : 2048,
    bloom: !low,
  };
}

export function startLab({ canvas, stage, state }) {
  performance.mark('hiwi:start');
  const quality = pickQuality();
  const driven = document.documentElement.classList.contains('has-story');

  const renderer = new THREE.WebGLRenderer({
    canvas,
    // The post pipeline smooths its own edges (FXAA); the direct path used
    // on phones has no post, so it takes the hardware's multisampling.
    antialias: !quality.bloom,
    powerPreference: 'high-performance',
    alpha: false,
    stencil: false,
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(PALETTE.bg, 1);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(PALETTE.bg);
  const materials = createMaterials(createEnvironment(renderer));
  const cameraRig = createCameraRig();
  const { camera } = cameraRig;
  const lighting = createLighting(scene, quality);

  const grid = createGrid();
  const floor = createFloor({ materials });
  const walls = createWalls({ materials });
  const desks = createDesks({ materials });
  const storage = createStorage({ materials });
  const island = createIsland({ materials });
  const workstation = createWorkstation({ materials });
  const props = createProps({ materials });
  const atmosphere = createAtmosphere({ quality });
  const interaction = createInteraction({ workstation, stage });

  const components = [grid, atmosphere, floor, walls, desks, storage, island, workstation, props, interaction];
  components.forEach((c) => scene.add(c.group));

  // Where the lamps are, and the glow of the monitors, for the Unity lighting.
  lighting.setPractical(desks.lampPositions[0], workstation.lampPosition);
  const bulbs = [...desks.bulbs, workstation.bulb];
  // Post-processing (bloom on the lit parts, FXAA) on capable devices;
  // phones draw straight to the screen.
  const post = quality.bloom ? createPost(renderer, scene, camera) : null;
  let bloomOn = !!post;

  // ---- sizing ------------------------------------------------------------
  let dpr = Math.min(window.devicePixelRatio || 1, quality.maxDpr);
  const size = { w: 0, h: 0 };
  function resize() {
    const w = Math.max(1, stage.clientWidth);
    const h = Math.max(1, stage.clientHeight);
    size.w = w;
    size.h = h;
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    post?.setSize(w, h, dpr);
    cameraRig.resize(w, h);
    // Keep a still frame correct across resizes. (Driven mode has nothing to
    // keep until it has drawn once: its first draw waits for the visitor.)
    if (!running && (!driven || drawn > 0)) drawFrame();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(stage);

  // ---- drawing -----------------------------------------------------------
  let L = 0;
  let time = 0;

  function pose(progress, t) {
    // 0 while the lab is being modelled; 1 once it is a lit Unity scene.
    const unity = smooth(seg(progress, ...SCHEDULE.unity));
    grid.update(progress);
    atmosphere.update(progress, t);
    floor.update(progress);
    walls.update(progress, t);
    desks.update(progress);
    storage.update(progress);
    island.update(progress);
    workstation.update(progress);
    props.update(progress);
    // The lamps' bulbs light with the scene.
    bulbs.forEach((b) => (b.mat.emissiveIntensity = 0.2 + 2.4 * unity));
    cameraRig.update(progress);
    interaction.update(progress, camera, size);
    lighting.update({ unity });
    post?.setGrade(unity);
  }

  // Draw whatever pose the scene is currently in. The canvas stays hidden
  // (and a spinner shows) until the first frame exists.
  let live = false;
  function render() {
    if (post) post.render();
    else renderer.render(scene, camera);
    if (!live) {
      performance.mark('hiwi:live');
      live = true;
      stage.classList.add('is-live');
    }
  }
  function drawFrame() {
    pose(L, time);
    render();
  }

  // ---- run loop: only while the lab is actually visible ------------------
  let running = false;
  let raf = 0;
  let last = 0;
  let frames = 0;
  let slow = 0;
  let inView = false;
  let drawn = 0; // frames actually drawn (for diagnostics)
  const parallel = renderer.extensions.has('KHR_parallel_shader_compile');
  let primed = !driven; // has the pose the visitor arrived at been compiled?
  let priming = false;
  let wake = () => {}; // re-check whether the loop should run (set below)

  // The timeline hides the console (visibility) before it arrives and fades
  // it (opacity) after; either way there is nothing to draw.
  const host = stage.parentElement;
  const cssVisible = () =>
    getComputedStyle(canvas).visibility !== 'hidden' && parseFloat(getComputedStyle(host).opacity) > 0.01;
  const shouldRun = () => inView && !document.hidden && cssVisible();

  function target() {
    return typeof state.override === 'number' ? state.override : state.progress;
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    time += dt;

    // Leaving the stage is a boolean; whether the timeline has hidden the
    // console is a style read, so that one is only checked now and then.
    if (!inView || document.hidden || (frames++ % 10 === 0 && !cssVisible())) {
      stop();
      return;
    }

    // A touch of smoothing on top of the scrub, so a coarse mouse-wheel
    // step never makes the camera stutter.
    const goal = target();
    L += (goal - L) * (1 - Math.exp(-dt * 16));
    if (Math.abs(goal - L) < 0.0002) L = goal;

    drawFrame();
    drawn++;
    adapt(dt);
  }

  // If frames are consistently slow, trade resolution, then bloom, for
  // smoothness — never the scene itself.
  function adapt(dt) {
    if (state.noAdapt) return;
    slow = dt > 0.028 ? slow + 1 : Math.max(0, slow - 2);
    if (slow < 60) return;
    slow = 0;
    if (dpr > 1) {
      dpr = Math.max(1, dpr - 0.25);
      resize();
    } else if (post && bloomOn) {
      bloomOn = false;
      post.setBloom(false);
    }
  }

  function start() {
    if (running) return;
    // First arrival: a draw would compile every shader this pose needs on the
    // main thread, and the page would freeze for seconds. Compile them off the
    // main thread first (where the browser allows), then start drawing.
    if (!primed) {
      if (priming) return;
      priming = true;
      pose(target(), time);
      const compiled = parallel ? renderer.compileAsync(scene, camera) : Promise.resolve(renderer.compile(scene, camera));
      compiled.catch(() => {}).then(() => {
        performance.mark('hiwi:primed');
        primed = true;
        priming = false;
        wake();
      });
      return;
    }
    running = true;
    last = performance.now();
    L = target(); // resume where the scroll is, don't sweep there from a stale pose
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  if (driven) {
    // Wake when the stage is on screen; sleep when it isn't. The scene is
    // hidden by the timeline (visibility) outside its own stretch of the
    // chapter, so poll gently for that while the stage is in view.
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) poll();
    });
    io.observe(stage);
    let pollTimer = 0;
    function poll() {
      clearTimeout(pollTimer);
      if (!inView) return;
      if (shouldRun()) start();
      else pollTimer = setTimeout(poll, 200);
    }
    document.addEventListener('visibilitychange', poll);
    wake = poll;
    // When the loop stops itself because the scene went hidden, resume
    // polling so it wakes again on the way back.
    const origStop = stop;
    stop = () => {
      origStop();
      poll();
    };
  } else {
    // Still: draw the finished lab once the layout is real.
    L = 1;
    state.progress = 1;
    requestAnimationFrame(() => resize());
    document.fonts?.ready.then(() => requestAnimationFrame(drawFrame));
  }

  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    stop();
  });
  canvas.addEventListener('webglcontextrestored', () => {
    if (driven) start();
    else drawFrame();
  });

  resize();

  /* Compile every shader ahead of the visitor. Parts only become visible as
   * they scroll, and a material's shader is compiled the first time it is
   * drawn — on some drivers a 100–400 ms stall, right when the lab is
   * building. So, in the background, pose the lab at a handful of moments
   * that between them show every kind of material and compile those.
   *
   * It must never get in the visitor's way, so: the loop and the canvas do
   * not wait for it (someone landing straight in the chapter sees the lab at
   * once); compiling only needs the pose for the instant the scene is walked,
   * so the real pose is put straight back before anything can draw; and the
   * parts that do need a real draw (uploading geometry, shadow shaders) only
   * happen while the lab is not running. */
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const warmLog = (state.warmLog = []); // per-step timings, for tuning

  // Where a browser has no background compile (Firefox, for one), a shader is
  // compiled — on the main thread — the first time it is drawn, and waiting
  // does not help: it does not link in the meantime. So there the warm-up can
  // only choose *when* to freeze the page, and it picks the moments the
  // visitor has stopped scrolling.
  let lastScroll = 0;
  addEventListener('scroll', () => (lastScroll = performance.now()), { passive: true });
  const calm = async (ms) => {
    while (performance.now() - lastScroll < ms) await sleep(100);
  };

  const warm = (async () => {
    if (!driven) return;
    await new Promise((r) => (window.requestIdleCallback ? requestIdleCallback(r, { timeout: 2000 }) : setTimeout(r, 500)));
    try {
      // Many small steps rather than a few big ones: each shows only a few
      // materials it hasn't seen, so a step that has to block does so briefly.
      for (let i = 0; i <= 20; i++) {
        const p = i / 20;
        if (!parallel) await calm(700);
        pose(p, 1);
        let compiled = null;
        if (parallel) compiled = renderer.compileAsync(scene, camera); // off the main thread
        else renderer.compile(scene, camera);
        pose(L, time); // compiling only needs the pose for the instant the scene is walked
        if (compiled) await compiled;
        let drawMs = 0;
        if (!running) {
          pose(p, 1);
          const t0 = performance.now();
          render(); // uploads what this pose shows, compiles its shadow shaders
          drawMs = performance.now() - t0;
          pose(L, time);
          render(); // leave the canvas showing the real pose, not the warm-up's
        }
        warmLog.push({ p, drawMs: Math.round(drawMs) });
        await sleep(0); // let the page breathe between steps
      }
    } catch (err) {
      console.warn('HiWi lab: shader warm-up skipped —', err);
    }
  })();

  return {
    warm,
    renderer,
    scene,
    camera,
    quality,
    workstation,
    // Diagnostics (used when tuning performance; harmless in production).
    stats: () => ({ running, inView, drawn, dpr, bloom: bloomOn, L }),
    tune: ({ dpr: d, bloom: b, shadows: s } = {}) => {
      if (typeof d === 'number') dpr = d;
      if (typeof b === 'boolean' && post) {
        bloomOn = b;
        post.setBloom(b);
      }
      if (typeof s === 'boolean') {
        renderer.shadowMap.enabled = s;
        scene.traverse((o) => o.material && (o.material.needsUpdate = true));
      }
      resize();
    },
    dispose() {
      stop();
      ro.disconnect();
      post?.dispose();
      renderer.dispose();
    },
  };
}
