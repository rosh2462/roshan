import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { merge } from './kit.js';

/* Small geometry builders for the lab's furniture and props. Everything is
 * built standing on the floor with its origin at the bottom centre, then
 * merged, so a chair or a monitor is one mesh (one draw call) that the build
 * animation can drop into place as a single object. */

// A rounded box, bottom-centre origin, moved to `at`.
export function box(w, h, d, at = [0, 0, 0], r = 0.012, rot = null) {
  const rr = Math.max(0.003, Math.min(r, Math.min(w, h, d) / 2 - 0.001));
  // Fewer bevel segments on small radii: it is a lot of small objects.
  const g = new RoundedBoxGeometry(w, h, d, rr > 0.03 ? 3 : rr > 0.012 ? 2 : 1, rr).translate(0, h / 2, 0);
  if (rot) {
    if (rot[0]) g.rotateX(rot[0]);
    if (rot[1]) g.rotateY(rot[1]);
    if (rot[2]) g.rotateZ(rot[2]);
  }
  return g.translate(at[0], at[1], at[2]);
}

export function cyl(rTop, rBottom, h, at = [0, 0, 0], segs = 20) {
  return new THREE.CylinderGeometry(rTop, rBottom, h, segs).translate(0, h / 2, 0).translate(at[0], at[1], at[2]);
}

export function ball(r, at = [0, 0, 0], segs = 10) {
  return new THREE.SphereGeometry(r, segs, Math.max(6, segs - 2)).translate(at[0], at[1], at[2]);
}

// Give a geometry a flat vertex colour (for merged props of several colours).
export function tint(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b], i * 3);
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return geo;
}

export { merge };

// Turn a geometry about the vertical axis, then move it into place.
export function place(g, x, y, z, ry = 0) {
  if (ry) g.rotateY(ry);
  return g.translate(x, y, z);
}

// The flat picture plane of a monitor, in the monitor's own placement.
export function screenPlane(info, x, y, z, ry = 0) {
  const g = new THREE.PlaneGeometry(info.screen.w, info.screen.h).translate(0, info.screen.y, info.screen.z);
  return place(g, x, y, z, ry);
}

/* ---- office chair (faces +z; seat top at 0.49) ------------------------- */
export function officeChair() {
  // The star base: five arms, each with a caster at its tip.
  const star = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const g = box(0.34, 0.03, 0.05, [0.17, 0.07, 0], 0.01);
    g.rotateY(a);
    star.push(g);
    const cx = Math.cos(a) * 0.34;
    const cz = -Math.sin(a) * 0.34;
    star.push(cyl(0.035, 0.035, 0.05, [cx, 0.0, cz], 10));
  }
  const base = merge([
    ...star,
    cyl(0.032, 0.032, 0.34, [0, 0.08, 0], 12),
    box(0.44, 0.03, 0.4, [0, 0.4, 0], 0.01), // seat plate
    box(0.04, 0.24, 0.05, [0, 0.4, -0.26], 0.01), // back support
    box(0.05, 0.04, 0.34, [-0.29, 0.62, -0.05], 0.015), // armrests
    box(0.05, 0.04, 0.34, [0.29, 0.62, -0.05], 0.015),
    box(0.03, 0.2, 0.03, [-0.29, 0.44, -0.05], 0.008),
    box(0.03, 0.2, 0.03, [0.29, 0.44, -0.05], 0.008),
  ]);
  const fabric = merge([
    box(0.5, 0.09, 0.48, [0, 0.42, 0.02], 0.04), // seat cushion
    box(0.46, 0.5, 0.07, [0, 0.66, -0.27], 0.04, [-0.12, 0, 0]), // backrest
  ]);
  return { base, fabric };
}

/* ---- monitor (faces +z). `w`/`h` are the screen's size -------------------
 * Bottom of the stand at y = 0. The screen plane sits on the bezel's front. */
export function monitor(w, h) {
  const stand = 0.15;
  const body = merge([
    box(w + 0.06, h + 0.06, 0.045, [0, stand, 0.0], 0.02),
    box(0.09, stand + 0.02, 0.05, [0, 0, -0.045], 0.01), // neck
    box(0.34, 0.02, 0.22, [0, 0, 0.0], 0.01), // foot
  ]);
  return {
    body,
    screen: { w, h, y: stand + 0.03 + h / 2, z: 0.0235 },
    top: stand + h + 0.06,
  };
}

/* ---- keyboard, mouse -------------------------------------------------- */
export const keyboard = () => box(0.46, 0.022, 0.16, [0, 0, 0], 0.008);
export const mouse = () => box(0.06, 0.028, 0.1, [0, 0, 0], 0.025);

/* ---- laptop (faces +z) -------------------------------------------------- */
export function laptop() {
  return {
    base: box(0.5, 0.02, 0.34, [0, 0, 0], 0.01),
    lid: box(0.5, 0.33, 0.015, [0, 0.02, -0.16], 0.008, [-0.22, 0, 0]),
  };
}

/* ---- mug ---------------------------------------------------------------- */
export const mug = () =>
  merge([cyl(0.045, 0.04, 0.1, [0, 0, 0], 14), box(0.02, 0.06, 0.03, [0.06, 0.02, 0], 0.008)]);

/* ---- desk lamp: arm, head, and the bulb (two geometries) --------------- */
export function lamp() {
  return {
    body: merge([
      cyl(0.09, 0.1, 0.02, [0, 0, 0], 16),
      box(0.025, 0.42, 0.025, [0, 0.02, 0], 0.008, [0.15, 0, 0]),
      box(0.025, 0.36, 0.025, [0.04, 0.4, 0.06], 0.008, [-0.75, 0, 0]),
      cyl(0.02, 0.11, 0.14, [0.04, 0.6, -0.16], 16).rotateX(0),
    ]),
    bulb: ball(0.035, [0.04, 0.6, -0.14], 10),
  };
}

/* ---- pot plant: pot + foliage (vertex-coloured) ------------------------ */
export function plant(scale = 1) {
  const s = scale;
  const foliage = [];
  const greens = [0x4e7f4b, 0x5c8f52, 0x416e42, 0x69a05a];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + i * 0.7;
    const r = (0.1 + (i % 3) * 0.05) * s;
    const g = ball(0.13 * s, [Math.cos(a) * r, (0.32 + (i % 4) * 0.08) * s, Math.sin(a) * r], 8);
    g.scale(1, 1.25, 1);
    foliage.push(tint(g, greens[i % greens.length]));
  }
  foliage.push(tint(ball(0.16 * s, [0, 0.5 * s, 0], 8), greens[1]));
  return {
    pot: merge([cyl(0.15 * s, 0.11 * s, 0.24 * s, [0, 0, 0], 16), cyl(0.155 * s, 0.155 * s, 0.03 * s, [0, 0.24 * s, 0], 16)]),
    leaves: merge(foliage),
  };
}

/* ---- VR headset resting on a desk (faces +z), and a hand controller ---- */
export function headset() {
  return {
    shell: merge([
      box(0.4, 0.22, 0.26, [0, 0.02, 0], 0.07),
      box(0.46, 0.05, 0.04, [0, 0.13, -0.12], 0.02), // strap tab
    ]),
    dark: merge([
      box(0.33, 0.14, 0.02, [0, 0.06, 0.135], 0.03), // visor face
      box(0.3, 0.13, 0.05, [0, 0.055, -0.15], 0.04), // face cushion (rear)
      new THREE.TorusGeometry(0.17, 0.018, 8, 24, Math.PI).rotateX(Math.PI / 2).translate(0, 0.14, -0.28),
    ]),
  };
}
export const controller = () =>
  merge([
    new THREE.TorusGeometry(0.05, 0.011, 8, 20).rotateX(-0.9).translate(0, 0.07, 0.03),
    new THREE.CapsuleGeometry(0.022, 0.09, 4, 10).rotateX(Math.PI / 2 - 0.25).translate(0, 0.03, -0.03),
  ]);
