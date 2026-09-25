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
 * brightens, everything else falls slightly back, and a small label names
 * it). That is all: the same three things an XR ray interactor does —
 * point, highlight, select — and nothing decorative.
 *
 * Every value is a function of L, so scrolling back un-selects it. */
export function createInteraction({ workstation, stage }) {
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
  const tag = document.createElement('div');
  tag.className = 'lab-tag';
  tag.setAttribute('aria-hidden', 'true');
  tag.innerHTML =
    '<span class="lab-tag__box"><i class="lab-tag__dot"></i><span class="lab-tag__name">Monitor</span><span class="lab-tag__state">Selected</span></span>';
  stage.appendChild(tag);
  const box = tag.firstElementChild;

  const origin = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const anchor = new THREE.Vector3();
  const right = new THREE.Vector3();
  const upv = new THREE.Vector3();
  const fwd = new THREE.Vector3();
  let lastFocus = -1;

  function update(L, camera, size) {
    const hover = smooth(seg(L, ...SCHEDULE.hover));
    const select = smooth(seg(L, ...SCHEDULE.select));

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
    tag.style.opacity = String(select);
    if (select > 0.001) {
      anchor.set(t.x + b.w / 2, b.cy + b.h / 2 + t.group.position.y, b.z).project(camera);
      const x = (anchor.x * 0.5 + 0.5) * size.w;
      const y = Math.max(96, (-anchor.y * 0.5 + 0.5) * size.h);
      // On a narrow screen there may be no room to the right of the monitor:
      // then the label sits to its left instead.
      const room = size.w - x - 30 - (box.offsetWidth || 190) - 12;
      tag.classList.toggle('is-left', room < 0 && x > size.w / 2);
      tag.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    }

    // the rest of the frame falls back a little (a CSS vignette in the stage)
    const focus = Math.round(select * 100) / 100;
    if (focus !== lastFocus) {
      lastFocus = focus;
      stage.style.setProperty('--lab-focus', String(focus));
    }
  }

  return { group, update };
}
