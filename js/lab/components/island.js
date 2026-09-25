import * as THREE from 'three';
import { SCHEDULE, LAYOUT } from '../config.js';
import { seg } from '../timeline.js';
import { part, solid, staggered } from '../kit.js';
import { place, officeChair, laptop, mug, box } from '../shapes.js';
import { pictureMaterial, mappedMaterial } from '../materials.js';
import { codeScreen, blenderScreen, floorPlanSheet } from '../screens.js';

/* The shared table towards the back wall: laptops, a printed floor plan of
 * the lab spread across it, mugs, and three chairs pulled up to it. A lab is
 * a place people work together, not only a row of desks. */
export function createIsland({ materials }) {
  const [ix, , iz] = LAYOUT.island;
  const group = new THREE.Group();
  const structure = [];
  const items = [];
  const S = (p) => {
    group.add(p.root);
    structure.push(p);
    return p;
  };
  const I = (p) => {
    group.add(p.root);
    items.push(p);
    return p;
  };

  // legs first, then the top
  [[-1.5, -0.45], [1.5, -0.45], [-1.5, 0.45], [1.5, 0.45]].forEach(([dx, dz]) =>
    S(part({ size: [0.07, 0.71, 0.07], at: [ix + dx, 0, iz + dz], material: materials.steelDark, radius: 0.012, fx: 'drop', drop: 3.2, wire: false })),
  );
  S(part({ size: [3.2, 0.05, 1.1], at: [ix, 0.71, iz], material: materials.wood, radius: 0.012, fx: 'drop', drop: 2.4, keepWire: 0.1 }));

  // a laptop's screen follows its lid, which is tilted back
  const lidScreen = (x, y, z, ry) => {
    const g = new THREE.PlaneGeometry(0.46, 0.3).translate(0, 0.165, 0.009).rotateX(-0.22).translate(0, 0.02, -0.16);
    return place(g, x, y, z, ry);
  };

  // on the table
  const top = 0.76;
  I(solid(place(box(1.5, 0.006, 0.95, [0, 0, 0], 0.002), ix - 0.25, top, iz, 0.12), mappedMaterial(floorPlanSheet(), 0.9, 0)));
  const a = laptop();
  const b = laptop();
  I(solid(place(a.base, ix - 1.1, top, iz + 0.28), materials.steel));
  I(solid(place(a.lid, ix - 1.1, top, iz + 0.28), materials.steel));
  I(solid(lidScreen(ix - 1.1, top, iz + 0.28, 0), pictureMaterial(codeScreen(3), 0.85), { shadow: false }));
  I(solid(place(b.base, ix + 1.15, top, iz - 0.22, Math.PI), materials.steel));
  I(solid(place(b.lid, ix + 1.15, top, iz - 0.22, Math.PI), materials.steel));
  I(solid(lidScreen(ix + 1.15, top, iz - 0.22, Math.PI), pictureMaterial(blenderScreen(), 0.85), { shadow: false }));
  I(solid(place(mug(), ix + 0.55, top, iz + 0.32, 0.8), materials.plasticWhite));
  I(solid(place(mug(), ix - 0.1, top, iz - 0.36, 2.1), materials.pot));

  // three chairs
  [
    [ix - 0.45, iz + 1.1, Math.PI - 0.2, materials.fabric],
    [ix + 0.75, iz + 1.0, Math.PI + 0.4, materials.fabricBlue],
    [ix + 0.2, iz - 1.05, 0.15, materials.fabric],
  ].forEach(([x, z, ry, fab]) => {
    const c = officeChair();
    I(solid(place(c.base, x, 0, z, ry), materials.steelDark, { drop: 3.4, shadow: true }));
    I(solid(place(c.fabric, x, 0, z, ry), fab, { drop: 3.4, shadow: true }));
  });

  return {
    group,
    update(L) {
      const u = seg(L, ...SCHEDULE.island);
      structure.forEach((p, i) => p.set(staggered(u, i, structure.length, 0.5)));
      const t = seg(L, ...SCHEDULE.props);
      items.forEach((p, i) => p.set(staggered(t, i, items.length, 0.62)));
    },
  };
}
