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

export async function startLab({ canvas, stage, state, pause: yieldToPage = null }) {
  performance.mark('hiwi:start');
  const quality = pickQuality();
  const driven = document.documentElement.classList.contains('has-story');
  let disposed = false;
  let contextAvailable = true;
  let contextGeneration = 0;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    // The post pipeline smooths its own edges (FXAA); the direct path used
    // on phones has no post, so it takes the hardware's multisampling.
    antialias: !quality.bloom,
    powerPreference: 'high-performance',
    alpha: false,
    stencil: false,
    // A still (reduced-motion) lab is drawn once; keep that frame on screen
    // in engines that drop an undrawn WebGL canvas. Driven mode redraws.
    preserveDrawingBuffer: !driven,
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // The shadow texture is full resolution. Rebuild it when a caster changes,
  // rather than drawing the stationary room again for every dust frame.
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = true;
  renderer.setClearColor(PALETTE.bg, 1);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(PALETTE.bg);
  // Only pose() changes object transforms; drifting dust changes a vertex
  // buffer. Refresh matrices there once instead of once per render pass.
  scene.matrixWorldAutoUpdate = false;
  // Building the room is a few hundred milliseconds of work in all. It is
  // done in pieces, each started in a pause (the caller's `pause`, which
  // knows how close the visitor is), so no single piece holds up the page.
  const idle = window.SceneIdle;
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  if (!yieldToPage) yieldToPage = (ms = 200, limit = 900) => (idle ? idle.quiet(ms, limit) : wait(ms));
  await yieldToPage();
  const materials = createMaterials(createEnvironment(renderer));
  await yieldToPage();
  const cameraRig = createCameraRig();
  const { camera } = cameraRig;
  const lighting = createLighting(scene, quality);
  const shadowLight = lighting.group.children.find((light) => light.castShadow && light.shadow);
  const shadowInputs = new Float64Array(48).fill(NaN);
  const shadowInputMatrices = shadowLight ? [shadowLight.matrixWorld.elements,
    shadowLight.target.matrixWorld.elements, shadowLight.shadow.camera.projectionMatrix.elements] : [];

  const grid = createGrid();
  const floor = createFloor({ materials });
  const walls = createWalls({ materials });
  await yieldToPage();
  const desks = createDesks({ materials });
  const storage = createStorage({ materials });
  const island = createIsland({ materials });
  await yieldToPage();
  const workstation = createWorkstation({ materials });
  const props = createProps({ materials });
  const atmosphere = createAtmosphere({ quality });
  await yieldToPage();
  let requestInteractionFrame = () => {};
  const interaction = createInteraction({ workstation, stage,
    onChange: () => requestInteractionFrame(),
    // The NeuroMaze preview opens chapter 04: js/works.js pops the game out of
    // this screen into its full-screen player; without it the page goes there.
    onOpen: () => {
      if (window.WorksPlayer?.openFromLab?.()) return;
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById('chapter-work')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    },
    isAvailable: () => !disposed && contextAvailable && !document.hidden && (!driven || shouldRun()),
  });

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
  const size = { w: 0, h: 0, x: 0, y: 0 };
  let poseRevision = 0;
  function resize() {
    if (disposed) return;
    const w = Math.max(1, stage.clientWidth);
    const h = Math.max(1, stage.clientHeight);
    const ratioChanged = renderer.getPixelRatio() !== dpr;
    if (w === size.w && h === size.h && !ratioChanged) return;
    size.w = w;
    size.h = h;
    size.x = stage.offsetLeft;
    size.y = stage.offsetTop;
    // setPixelRatio() also resizes the bitmap. Update both together once.
    if (ratioChanged) renderer.setDrawingBufferSize(w, h, dpr);
    else renderer.setSize(w, h, false);
    post?.setSize(w, h, dpr);
    cameraRig.resize(w, h);
    poseRevision++;
    renderer.shadowMap.needsUpdate = true;
    // Keep a still frame correct across resizes. (Driven mode has nothing to
    // keep until it has drawn once: its first draw waits for the visitor.)
    if (!running && (!driven || drawn > 0)) drawFrame();
    return true;
  }
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  ro?.observe(stage);
  if (!ro) window.addEventListener('resize', resize, { passive: true });

  // ---- drawing -----------------------------------------------------------
  let L = 0;
  let time = 0;
  let posedProgress = NaN;
  let posedRevision = -1;
  let shadowBuild = NaN;
  let shadowSelect = NaN;
  let shadowUpdates = 0;
  let matrixUpdates = 0;

  function pose(progress, t, preview = false) {
    const changed = progress !== posedProgress || posedRevision !== poseRevision;
    // 0 while the lab is being modelled; 1 once it is a lit Unity scene.
    const unity = smooth(seg(progress, ...SCHEDULE.unity));
    if (changed) grid.update(progress);
    atmosphere.update(progress, t);
    workstation.animate(t);
    if (changed) {
      floor.update(progress);
      walls.update(progress, t);
      desks.update(progress);
      storage.update(progress);
      island.update(progress);
      workstation.update(progress);
      props.update(progress);
      // These poses, materials and lights depend only on progress/size.
      bulbs.forEach((b) => (b.mat.emissiveIntensity = 0.2 + 2.4 * unity));
      cameraRig.update(progress);
    }
    const interactionChanged = interaction.update(progress, camera, size, preview);
    if (changed) {
      lighting.update({ unity });
      post?.setGrade(unity);
      posedProgress = progress;
      posedRevision = poseRevision;
    }
    if (changed || interactionChanged) {
      scene.updateMatrixWorld();
      matrixUpdates++;
      const build = Math.min(progress, SCHEDULE.props[1]);
      const select = workstation.target.group.position.y;
      if (build !== shadowBuild || select !== shadowSelect) {
        renderer.shadowMap.needsUpdate = true;
        shadowBuild = build;
        shadowSelect = select;
      }
    }
  }

  // Draw whatever pose the scene is currently in. The canvas stays hidden
  // (and a spinner shows) until the first frame exists.
  let live = false;
  function checkShadowInputs() {
    if (!shadowLight) return;
    shadowLight.updateWorldMatrix(true, false);
    shadowLight.target.updateWorldMatrix(true, false);
    // These are stable in the original scene. Keep the cache correct if a
    // light/target or the shadow camera is moved by a future interaction.
    let index = 0;
    for (const values of shadowInputMatrices) {
      for (const value of values) {
        if (value !== shadowInputs[index]) {
          shadowInputs[index] = value;
          renderer.shadowMap.needsUpdate = true;
        }
        index++;
      }
    }
    if (shadowLight.shadow.needsUpdate) renderer.shadowMap.needsUpdate = true;
  }
  function render(reveal = true) {
    if (disposed || !contextAvailable) return;
    checkShadowInputs();
    const updateShadow = renderer.shadowMap.enabled && renderer.shadowMap.needsUpdate;
    if (post) post.render();
    else renderer.render(scene, camera);
    if (updateShadow) shadowUpdates++;
    if (reveal && !live) {
      performance.mark('hiwi:live');
      live = true;
      stage.classList.add('is-live');
    }
  }
  function drawFrame() {
    if (disposed) return;
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
  let io = null;
  let pollTimer = 0;
  let poll = () => {};
  let layoutFrame = 0;
  let fontFrame = 0;

  // The timeline hides the console (visibility) before it arrives and fades
  // it (opacity) after; either way there is nothing to draw.
  const host = stage.parentElement;
  const chapter = stage.closest('.story');
  const cssVisible = () =>
    getComputedStyle(canvas).visibility !== 'hidden' && parseFloat(getComputedStyle(host).opacity) > 0.01;
  const visible = () => typeof state.visible === 'boolean' ? state.visible : cssVisible();
  const shouldRun = () => !disposed && contextAvailable && inView && !document.hidden && visible();

  function target() {
    return typeof state.override === 'number' ? state.override : state.progress;
  }
  requestInteractionFrame = () => {
    if (disposed || !contextAvailable) return;
    // The active loop consumes input on its next frame. A reduced-motion
    // still responds to a tap/keyboard activation with one new still frame.
    if (!running && (!driven || shouldRun())) {
      L = target();
      drawFrame();
    }
  };

  function frame(now) {
    if (disposed || !running) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    time += dt;

    // Leaving the stage is a boolean; whether the timeline has hidden the
    // console is a style read, so that one is only checked now and then.
    if (!contextAvailable || !inView || document.hidden ||
        (typeof state.visible === 'boolean' ? !state.visible : frames++ % 10 === 0 && !cssVisible())) {
      stop();
      return;
    }

    // The chapter timeline already smooths wheel input. Read that pose
    // directly so the geometry, camera and DOM captions remain in sync.
    L = target();

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
    if (disposed || !contextAvailable || running) return;
    // First arrival: a draw would compile every shader this pose needs on the
    // main thread, and the page would freeze for seconds. Compile them off the
    // main thread first (where the browser allows), then start drawing.
    if (!primed) {
      if (priming) return;
      priming = true;
      // The visitor is here: finish preparing without waiting for a pause.
      urgent = true;
      hurry();
      const generation = contextGeneration;
      pose(target(), time);
      prepare().then(() => {
        if (disposed || !contextAvailable || generation !== contextGeneration) return;
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
    raf = 0;
  }

  if (driven) {
    // Wake when the stage is on screen; sleep when it isn't. The scene is
    // hidden by the timeline (visibility) outside its own stretch of the
    // chapter, so poll gently for that while the stage is in view.
    const origStop = stop;
    poll = () => {
      clearTimeout(pollTimer);
      pollTimer = 0;
      if (disposed || !contextAvailable || !inView || document.hidden) { origStop(); return; }
      if (shouldRun()) start();
      else {
        origStop();
        // Older scroll drivers have no explicit visibility clock. They keep
        // the former gentle poll; the shared driver wakes on the same frame.
        if (typeof state.visible !== 'boolean') pollTimer = setTimeout(poll, 200);
      }
    };
    document.addEventListener('visibilitychange', poll);
    wake = poll;
    // When the loop stops itself because the scene went hidden, resume
    // polling so it wakes again on the way back.
    stop = () => {
      origStop();
      if (!disposed) poll();
    };
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([e]) => {
        if (disposed) return;
        inView = e.isIntersecting;
        if (inView) poll();
        else stop();
      });
      io.observe(stage);
    } else {
      inView = true;
      poll();
    }
    chapter?.addEventListener('sceneprogress', poll);
  } else {
    // Still: draw the finished lab once the layout is real.
    L = 1;
    state.progress = 1;
    layoutFrame = requestAnimationFrame(() => { layoutFrame = 0; resize(); });
    document.fonts?.ready.then(() => {
      if (!disposed) fontFrame = requestAnimationFrame(() => { fontFrame = 0; drawFrame(); });
    });
  }

  function contextLost(e) {
    if (disposed) return;
    e.preventDefault();
    contextAvailable = false;
    contextGeneration++;
    primed = false;
    priming = false;
    preparation = null;
    standIns.length = 0;
    stop();
  }
  function contextRestored() {
    if (disposed) return;
    contextAvailable = true;
    poseRevision++;
    shadowBuild = shadowSelect = NaN;
    renderer.shadowMap.needsUpdate = true;
    if (driven) wake();
    else drawFrame();
  }
  canvas.addEventListener('webglcontextlost', contextLost);
  canvas.addEventListener('webglcontextrestored', contextRestored);

  resize();

  /* Compile every shader ahead of the visitor. A material's program is
   * compiled the first time it is drawn — on some drivers a 100–400 ms stall,
   * right as the lab builds — and three.js keys a program by what it draws
   * into. So the room is compiled against the offscreen target it really
   * renders to (not the screen), the shadow pass's depth variants through
   * stand-in meshes, and the post passes on their own; then the painted
   * textures are uploaded. compile() visits every object whether or not it is
   * built yet, so one pass covers every stage of the story.
   *
   * It never gets in the visitor's way: each step waits for a pause in the
   * scrolling, and someone landing straight in the chapter (urgent) has it
   * all compiled at once, before the first frame is drawn. */
  const keyTarget = new THREE.WebGLRenderTarget(1, 1);
  const standIns = [];
  const prepareLog = (state.prepareLog = []); // per-step timings, for tuning
  let urgent = false;
  let hurry = () => {};
  const hurried = new Promise((resolve) => { hurry = resolve; });
  const pause = (ms, limit = 4000) => (urgent ? Promise.resolve()
    : Promise.race([hurried, yieldToPage(ms, limit)]));

  function compileFor(objects, toScreen, lightsFrom = null) {
    const previous = renderer.getRenderTarget();
    renderer.setRenderTarget(toScreen ? null : keyTarget);
    try {
      if (parallel) return renderer.compileAsync(objects, camera, lightsFrom);
      renderer.compile(objects, camera, lightsFrom);
      return Promise.resolve();
    } finally {
      renderer.setRenderTarget(previous);
    }
  }
  // The shadow pass draws every caster with one depth material per facing
  // (and per map/instancing); compile those same variants with the room's
  // lights. The stand-ins stay referenced so the programs are kept.
  function shadowStandIns() {
    const flip = { [THREE.FrontSide]: THREE.BackSide, [THREE.BackSide]: THREE.FrontSide, [THREE.DoubleSide]: THREE.DoubleSide };
    const group = new THREE.Group();
    const seen = new Set();
    scene.traverse((o) => {
      if (!o.isMesh || !(o.castShadow || o.userData.shadowCaster) || !o.material || Array.isArray(o.material)) return;
      const m = o.material;
      const side = m.shadowSide ?? flip[m.side];
      const key = [side, !!m.map, !!o.isInstancedMesh, !!o.instanceColor].join();
      if (seen.has(key)) return;
      seen.add(key);
      const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, side, map: m.map || null });
      const proxy = o.isInstancedMesh ? new THREE.InstancedMesh(o.geometry, depth, 1) : new THREE.Mesh(o.geometry, depth);
      if (o.instanceColor) proxy.instanceColor = o.instanceColor;
      group.add(proxy);
    });
    standIns.push(group);
    return group;
  }
  let quad = null;
  function postStandIns(toScreen) {
    const group = new THREE.Group();
    quad ||= new THREE.PlaneGeometry(2, 2);
    for (const [material, screen] of post.programs()) if (screen === toScreen) group.add(new THREE.Mesh(quad, material));
    standIns.push(group);
    return group;
  }
  // three reads a program's logs and uniforms on its first use; do that in a
  // pause too, rather than inside the first frame that needs it.
  function firstUse(objects) {
    objects.traverse((o) => {
      const list = !o.material ? [] : Array.isArray(o.material) ? o.material : [o.material];
      for (const m of list) renderer.properties.get(m).currentProgram?.getUniforms();
    });
  }
  function sceneTextures() {
    const textures = new Set();
    scene.traverse((o) => {
      const list = !o.material ? [] : Array.isArray(o.material) ? o.material : [o.material];
      for (const m of list) {
        for (const value of Object.values(m)) if (value?.isTexture && !value.isRenderTargetTexture) textures.add(value);
      }
    });
    return [...textures];
  }
  let preparation = null;
  function prepare() {
    if (preparation) return preparation;
    const generation = contextGeneration;
    preparation = (async () => {
      const steps = [
        ['room', () => compileFor(scene, !post)],
        ['shadows', () => compileFor(shadowStandIns(), false, scene)],
        post && ['post', () => compileFor(postStandIns(false), false).then(() => compileFor(postStandIns(true), true))],
      ].filter(Boolean);
      for (const [name, step] of steps) {
        await pause(300);
        if (disposed || generation !== contextGeneration) return false;
        const t0 = performance.now();
        await step();
        prepareLog.push({ step: name, ms: Math.round(performance.now() - t0), programs: renderer.info.programs?.length });
      }
      // Without parallel compilation the driver links in its own time; give
      // it a pause before anything needs the result.
      if (!parallel) await pause(400, 1500);
      for (const objects of [scene, ...standIns]) {
        await pause(150, 1500);
        if (disposed || generation !== contextGeneration) return false;
        firstUse(objects);
      }
      for (const texture of sceneTextures()) {
        await pause(150, 1500);
        if (disposed || generation !== contextGeneration) return false;
        renderer.initTexture(texture);
      }
      prepareLog.push({ step: 'textures', programs: renderer.info.programs?.length });
      return true;
    })().catch((err) => {
      if (!disposed) console.warn('HiWi lab: shader preparation skipped —', err);
      return false;
    });
    return preparation;
  }
  const warm = driven ? prepare() : Promise.resolve(false);

  return {
    warm,
    renderer,
    scene,
    camera,
    quality,
    workstation,
    // Project the selected monitor's lit picture into the page, where
    // js/works.js pops NeuroMaze out of it. Only read when it is pressed,
    // never in the render loop.
    screenRect() {
      const mesh = workstation.target.preview.mesh;
      const bounds = stage.getBoundingClientRect();
      if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
      const box = mesh.geometry.boundingBox;
      mesh.updateWorldMatrix(true, false);
      const corners = [box.min.x, box.max.x].flatMap((x) => [box.min.y, box.max.y].map((y) =>
        new THREE.Vector3(x, y, (box.min.z + box.max.z) / 2).applyMatrix4(mesh.matrixWorld).project(camera),
      ));
      const xs = corners.map((v) => bounds.left + (v.x * 0.5 + 0.5) * bounds.width);
      const ys = corners.map((v) => bounds.top + (-v.y * 0.5 + 0.5) * bounds.height);
      return { x: Math.min(...xs), y: Math.min(...ys), width: Math.max(...xs) - Math.min(...xs), height: Math.max(...ys) - Math.min(...ys) };
    },
    // Diagnostics (used when tuning performance; harmless in production).
    stats: () => ({ running, inView, drawn, dpr, bloom: bloomOn, L, shadowUpdates, matrixUpdates,
      contextAvailable, manualInput: interaction.stats() }),
    tune: ({ dpr: d, bloom: b, shadows: s } = {}) => {
      if (disposed) return;
      if (typeof d === 'number') dpr = d;
      if (typeof b === 'boolean' && post) {
        bloomOn = b;
        post.setBloom(b);
      }
      if (typeof s === 'boolean') {
        renderer.shadowMap.enabled = s;
        renderer.shadowMap.needsUpdate = true;
        scene.traverse((o) => o.material && (o.material.needsUpdate = true));
      }
      if (!resize() && !running && (!driven || drawn > 0)) drawFrame();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      stop();
      clearTimeout(pollTimer);
      hurry();
      keyTarget.dispose();
      cancelAnimationFrame(layoutFrame);
      cancelAnimationFrame(fontFrame);
      ro?.disconnect();
      window.removeEventListener('resize', resize);
      io?.disconnect();
      chapter?.removeEventListener('sceneprogress', poll);
      document.removeEventListener('visibilitychange', poll);
      canvas.removeEventListener('webglcontextlost', contextLost);
      canvas.removeEventListener('webglcontextrestored', contextRestored);
      interaction.dispose();
      post?.dispose();
      renderer.dispose();
    },
  };
}
