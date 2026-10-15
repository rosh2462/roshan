import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { SCHEDULE } from '../config.js';
import { seg, smooth, easeOutCubic } from '../timeline.js';

/* Object selection, shown on a real object.
 *
 * As the camera settles in front of the workstation, the viewer's hand is
 * there too — a thin ray from the lower right of the frame reaches the main
 * monitor (hover: a fine outline appears), then the monitor is picked
 * (select: the outline firms up, the monitor lifts a hair and its screen
 * powers on into a NeuroMaze preview, everything else falls slightly back,
 * and a small label names it). The same three things an XR ray interactor
 * does — point, highlight, select.
 *
 * The visitor can then use it: hovering lifts the preview's play button, and
 * a click/tap on the monitor (or its label, also a keyboard button) presses
 * it — a flash — and `onOpen` pops NeuroMaze out into chapter 04's player.
 *
 * Every value is a function of L, so scrolling back un-selects it. */
export function createInteraction({ workstation, stage, onChange = () => {}, onOpen = () => {}, isAvailable = () => true }) {
  const t = workstation.target;
  const b = t.bezel;
  const group = new THREE.Group();

  // ---- the outline: an inflated back-face shell around the monitor ---------
  const hullMat = new THREE.MeshBasicMaterial({
    color: 0xffc06a,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    toneMapped: false,
  });
  const hull = new THREE.Mesh(new RoundedBoxGeometry(b.w, b.h, b.d, 2, 0.02), hullMat);
  hull.position.set(t.x, b.cy, b.z);
  hull.visible = false;
  t.group.add(hull); // moves with the monitor when it lifts

  // ---- the ray, from the viewer's hand ------------------------------------
  const UP = new THREE.Vector3(0, 1, 0);
  const rayMat = new THREE.MeshBasicMaterial({ color: 0xfff1d6, transparent: true, opacity: 0, depthWrite: false, toneMapped: false });
  const ray = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 1, 6).translate(0, 0.5, 0), rayMat);
  ray.visible = false;
  ray.frustumCulled = false;
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, toneMapped: false });
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.02, 12, 12), dotMat);
  dot.visible = false;
  group.add(ray, dot);

  // ---- the label: DOM, in the site's own type ----------------------------
  const tag = document.createElement('button');
  tag.className = 'lab-tag';
  tag.type = 'button';
  tag.disabled = true;
  tag.tabIndex = -1;
  tag.setAttribute('aria-label', 'Open NeuroMaze in chapter 04, Creative works');
  const verb = matchMedia('(pointer: coarse)').matches ? 'Tap' : 'Click';
  tag.innerHTML =
    `<span class="lab-tag__box"><i class="lab-tag__dot"></i><span class="lab-tag__name">NeuroMaze</span><span class="lab-tag__state">${verb} to open</span></span>`;
  // Keep the keyboard control outside the decorative aria-hidden canvas.
  stage.parentElement.appendChild(tag);
  const box = tag.firstElementChild;
  let disposed = false;
  let labelWidth = box.offsetWidth || 190;
  const measureLabel = () => {
    if (disposed) return;
    const width = box.offsetWidth || 190;
    if (width !== labelWidth) { labelWidth = width; onChange(); }
  };
  const labelObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measureLabel) : null;
  labelObserver?.observe(box);
  if (!labelObserver) window.addEventListener('resize', measureLabel, { passive: true });
  document.fonts?.ready.then(measureLabel);
  document.fonts?.addEventListener('loadingdone', measureLabel);

  const origin = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const anchor = new THREE.Vector3();
  const right = new THREE.Vector3();
  const upv = new THREE.Vector3();
  const fwd = new THREE.Vector3();
  let lastFocus = -1;
  let labelVisible = false;
  let lastProgress = NaN;
  let realProgress = NaN;
  let lastWidth = -1;
  let lastHeight = -1;
  let lastLabelWidth = -1;
  let lastAvailable = false;
  let inputRevision = 0;
  let posedInputRevision = -1;
  let manualHover = null;
  let pointerDown = null;
  let labelClickAllowed = false;
  let pointerFrame = 0;
  let pointer = null;
  let currentCamera = null;
  // Decorative layers can receive the hit above the pointer-transparent
  // canvas/console. Delegate within this chapter so the monitor still responds.
  const surface = stage.closest?.('.story') || stage.parentElement;
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();

  const available = () => !disposed && currentCamera && isAvailable() && realProgress >= SCHEDULE.hover[0];
  const changeInput = () => { inputRevision++; onChange(); };
  // A short press first, so the flash reads before the page starts to move.
  let openTimer = 0;
  const open = () => {
    if (!available() || openTimer) return;
    t.preview.press();
    tag.classList.add('is-opening');
    onChange();
    openTimer = setTimeout(() => {
      openTimer = 0;
      tag.classList.remove('is-opening');
      if (!disposed) onOpen();
    }, 220);
  };
  const setHover = (value) => {
    if (value === manualHover) return;
    manualHover = value;
    t.preview.setHover(value === true);
    surface.style.cursor = value ? 'pointer' : '';
    changeInput();
  };
  function hitTest(event) {
    if (!available()) return false;
    const bounds = stage.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return false;
    pointerNdc.set((event.clientX - bounds.left) / bounds.width * 2 - 1,
      -(event.clientY - bounds.top) / bounds.height * 2 + 1);
    if (Math.abs(pointerNdc.x) > 1 || Math.abs(pointerNdc.y) > 1) return false;
    raycaster.setFromCamera(pointerNdc, currentCamera);
    return raycaster.intersectObject(t.group, true).some((hit) => hit.object.visible && hit.object !== hull);
  }
  function movePointer(event) {
    if (pointerDown && Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y) > 8) {
      pointerDown = null;
    }
    // A touch gesture scrolls the page normally. Hover is only meaningful for
    // a mouse/pen, and its hit test runs at most once per animation frame.
    if (event.pointerType === 'touch' || !available()) return;
    pointer = { clientX: event.clientX, clientY: event.clientY };
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      if (!pointer || !available()) return;
      setHover(hitTest(pointer));
    });
  }
  function leavePointer() {
    pointer = null;
    setHover(null);
  }
  function beginPointer(event) {
    labelClickAllowed = false;
    const label = tag.contains(event.target);
    if (event.isPrimary === false || (event.pointerType !== 'touch' && event.button !== 0) ||
        !available() || (!label && !hitTest(event))) return;
    pointerDown = { id: event.pointerId, x: event.clientX, y: event.clientY,
      at: performance.now(), progress: realProgress, label };
  }
  function endPointer(event) {
    const down = pointerDown;
    pointerDown = null;
    if (!down || event.pointerId !== down.id || realProgress !== down.progress ||
        performance.now() - down.at > 500 || Math.hypot(event.clientX - down.x, event.clientY - down.y) > 8 ||
        !(down.label ? tag.contains(event.target) : hitTest(event))) return;
    if (down.label) { labelClickAllowed = true; return; }
    open();
  }
  const cancelPointer = () => { pointerDown = null; labelClickAllowed = false; };
  const clickLabel = (event) => {
    if (event.detail > 0 && 'PointerEvent' in window && !labelClickAllowed) return;
    labelClickAllowed = false;
    open();
  };
  const delegate = (handler) => (event) => { if (!tag.contains(event.target)) handler(event); };
  const delegatedMove = delegate(movePointer);
  const delegatedDown = delegate(beginPointer);
  const delegatedUp = delegate(endPointer);
  const delegatedCancel = delegate(cancelPointer);
  tag.addEventListener('click', clickLabel);
  if ('PointerEvent' in window) {
    surface.addEventListener('pointermove', delegatedMove, { passive: true });
    surface.addEventListener('pointerleave', leavePointer, { passive: true });
    surface.addEventListener('pointerdown', delegatedDown, { passive: true });
    surface.addEventListener('pointerup', delegatedUp, { passive: true });
    surface.addEventListener('pointercancel', delegatedCancel, { passive: true });
    tag.addEventListener('pointermove', movePointer, { passive: true });
    tag.addEventListener('pointerdown', beginPointer, { passive: true });
    tag.addEventListener('pointerup', endPointer, { passive: true });
    tag.addEventListener('pointercancel', cancelPointer, { passive: true });
  }

  function update(L, camera, size, preview = false) {
    currentCamera = camera;
    const inputAvailable = isAvailable();
    if (!preview && L !== realProgress) {
      realProgress = L;
      pointerDown = null;
      labelClickAllowed = false;
      // Scroll is the author of the story. A forward/reverse gesture clears
      // visitor hover so the original construction/selection stays reversible.
      if (manualHover !== null) {
        manualHover = null;
        t.preview.setHover(false);
        surface.style.cursor = '';
        inputRevision++;
      }
    }
    if (L === lastProgress && size.w === lastWidth && size.h === lastHeight &&
        labelWidth === lastLabelWidth && inputAvailable === lastAvailable && inputRevision === posedInputRevision) return false;
    lastProgress = L;
    lastWidth = size.w;
    lastHeight = size.h;
    lastLabelWidth = labelWidth;
    lastAvailable = inputAvailable;
    posedInputRevision = inputRevision;
    const activeInput = L >= SCHEDULE.hover[0];
    const select = smooth(seg(L, ...SCHEDULE.select));
    const hover = Math.max(select, activeInput && manualHover !== null ? Number(manualHover) : smooth(seg(L, ...SCHEDULE.hover)));

    // outline: fine on hover, firm on select
    const th = 0.005 + 0.009 * select;
    hull.visible = hover > 0.001;
    hull.scale.set(1 + (2 * th) / b.w, 1 + (2 * th) / b.h, 1 + 5 * select);
    hullMat.opacity = 0.5 * hover + 0.4 * select;

    // the monitor is picked up a hair, and its screen answers
    t.group.position.y = 0.045 * select;
    t.unityMat.color.setScalar(1 + 0.16 * select);

    // ray: from a hand at the lower right of the frame to the monitor
    camera.matrixWorld.extractBasis(right, upv, fwd);
    origin.copy(camera.position).addScaledVector(right, 0.8).addScaledVector(upv, -0.55).addScaledVector(fwd, -0.7);
    anchor.copy(t.center).setY(t.center.y + t.group.position.y);
    dir.subVectors(anchor, origin);
    const full = dir.length();
    dir.divideScalar(full);
    const reach = easeOutCubic(hover);
    ray.visible = hover > 0.001;
    ray.position.copy(origin);
    ray.quaternion.setFromUnitVectors(UP, dir);
    ray.scale.set(1, full * reach, 1);
    rayMat.opacity = 0.34 * hover * (1 - 0.6 * select);
    dot.visible = reach > 0.98;
    dot.position.copy(anchor);
    dotMat.opacity = 0.9 * hover;
    dot.scale.setScalar(1 - 0.35 * select);

    // label, pinned beside the monitor's upper-right corner
    const labelOpacity = select;
    tag.style.opacity = String(labelOpacity);
    const controlAvailable = inputAvailable && activeInput && labelOpacity > 0.001;
    tag.disabled = !controlAvailable;
    tag.tabIndex = controlAvailable ? 0 : -1;
    tag.classList.toggle('is-interactive', controlAvailable);
    if (labelOpacity > 0.001) {
      if (!labelVisible) measureLabel();
      anchor.set(t.x + b.w / 2, b.cy + b.h / 2 + t.group.position.y, b.z).project(camera);
      const x = (anchor.x * 0.5 + 0.5) * size.w;
      const y = Math.max(96, (-anchor.y * 0.5 + 0.5) * size.h);
      // On a narrow screen there may be no room to the right of the monitor:
      // then the label sits to its left instead.
      const room = size.w - x - 30 - labelWidth - 12;
      tag.classList.toggle('is-left', room < 0 && x > size.w / 2);
      tag.style.transform = `translate(${(x + (size.x || 0)).toFixed(1)}px, ${(y + (size.y || 0)).toFixed(1)}px)`;
    }
    labelVisible = labelOpacity > 0.001;

    // the rest of the frame falls back a little (a CSS vignette in the stage)
    const focus = Math.round(select * 100) / 100;
    if (focus !== lastFocus) {
      lastFocus = focus;
      stage.style.setProperty('--lab-focus', String(focus));
    }
    return true;
  }

  return {
    group, update,
    stats: () => ({ manualHover }),
    dispose() {
      disposed = true;
      clearTimeout(openTimer);
      surface.style.cursor = '';
      labelObserver?.disconnect();
      window.removeEventListener('resize', measureLabel);
      document.fonts?.removeEventListener('loadingdone', measureLabel);
      cancelAnimationFrame(pointerFrame);
      surface.removeEventListener('pointermove', delegatedMove);
      surface.removeEventListener('pointerleave', leavePointer);
      surface.removeEventListener('pointerdown', delegatedDown);
      surface.removeEventListener('pointerup', delegatedUp);
      surface.removeEventListener('pointercancel', delegatedCancel);
      tag.removeEventListener('pointermove', movePointer);
      tag.removeEventListener('pointerdown', beginPointer);
      tag.removeEventListener('pointerup', endPointer);
      tag.removeEventListener('pointercancel', cancelPointer);
      tag.removeEventListener('click', clickLabel);
      tag.remove();
      stage.style.removeProperty('--lab-focus');
    },
  };
}
