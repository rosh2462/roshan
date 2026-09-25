import * as THREE from 'three';
import { SCHEDULE } from '../config.js';
import { seg, hash } from '../timeline.js';
import { part, staggered } from '../kit.js';
import { box, tint, merge } from '../shapes.js';
import { mappedMaterial } from '../materials.js';
import { lockerFront } from '../screens.js';

/* Storage against the back wall: two steel lockers and an open shelving unit
 * of binders, archive boxes and plastic bins. The units are extruded up from
 * the floor (the same move the equipment racks used to make); what they hold
 * drops onto the shelves afterwards. */
export function createStorage({ materials }) {
  const group = new THREE.Group();
  const units = [];
  const contents = [];

  // ---- lockers -----------------------------------------------------------
  [
    [-4.4, '#8593a6'],
    [-3.55, '#7c8f9c'],
  ].forEach(([x, col]) => {
    const p = part({
      size: [0.8, 2.0, 0.55],
      at: [x, 0, -4.68],
      material: mappedMaterial(lockerFront(col), 0.5, 0.25),
      radius: 0.015,
      fx: 'rise',
    });
    group.add(p.root);
    units.push(p);
  });

  // ---- open shelving -----------------------------------------------------
  const SX = -2.05;
  const SZ = -4.76;
  const boards = [0.02, 0.55, 1.05, 1.55, 2.03];
  const frame = merge([
    box(0.04, 2.06, 0.38, [-0.83, 0, 0], 0.006),
    box(0.04, 2.06, 0.38, [0.83, 0, 0], 0.006),
    ...boards.map((y) => box(1.66, 0.03, 0.38, [0, y, 0], 0.006)),
  ]);
  const shelf = part({ size: [1.7, 2.06, 0.38], at: [SX, 0, SZ], geometry: frame, material: materials.steel, fx: 'rise' });
  group.add(shelf.root);
  units.push(shelf);

  // what's on the shelves, one merged mesh with a colour per item
  const binder = [0x8c2f39, 0x2f5a8c, 0x2e6b4f, 0x7b7b82, 0xd0a13a, 0x33363f, 0xc9c3b4];
  const cardboard = [0xb18e62, 0xa5825a, 0xbb9a70];
  const bin = [0x556a8a, 0x6f7480, 0x4b6b63];
  const items = [];
  let n = 0;
  const r = () => hash(n++ * 1.37 + 3.1);
  boards.slice(0, 4).forEach((y, level) => {
    let x = -0.78;
    const top = y + 0.03;
    while (x < 0.7) {
      let w;
      let h;
      let d;
      let col;
      if (level === 0) {
        w = 0.28 + r() * 0.12;
        h = 0.26 + r() * 0.1;
        d = 0.3;
        col = bin[Math.floor(r() * bin.length)];
      } else if (level === 2 && r() > 0.4) {
        w = 0.28 + r() * 0.14;
        h = 0.3 + r() * 0.12;
        d = 0.32;
        col = cardboard[Math.floor(r() * cardboard.length)];
      } else {
        w = 0.05 + r() * 0.04;
        h = 0.3 + r() * 0.12;
        d = 0.27;
        col = binder[Math.floor(r() * binder.length)];
      }
      if (x + w > 0.8) break;
      items.push(tint(box(w, h, d, [x + w / 2, top, 0.0], 0.004), col));
      x += w + (level === 0 || level === 2 ? 0.04 : 0.005);
      if (level >= 1 && r() > 0.9) x += 0.16; // a gap, as real shelves have
    }
  });
  const stuff = part({ size: [1.7, 1.7, 0.38], at: [SX, 0, SZ], geometry: merge(items), material: materials.vertex, radius: 0.01, fx: 'drop', drop: 2.6, wire: false });
  group.add(stuff.root);
  contents.push(stuff);

  return {
    group,
    update(L) {
      const u = seg(L, ...SCHEDULE.storage);
      units.forEach((p, i) => p.set(staggered(u, i, units.length, 0.5)));
      contents.forEach((p) => p.set(seg(u, 0.55, 1)));
    },
  };
}
