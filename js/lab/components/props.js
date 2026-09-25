import * as THREE from 'three';
import { SCHEDULE } from '../config.js';
import { seg } from '../timeline.js';
import { solid, staggered } from '../kit.js';
import { place, box, cyl, plant, merge } from '../shapes.js';

/* The last small things that make the room lived in: pot plants on the sill
 * and in the corner, a bin and a fire extinguisher by the door, archive boxes
 * stacked against the wall. Each drops in like everything else. */
export function createProps({ materials }) {
  const group = new THREE.Group();
  const items = [];
  const I = (p) => {
    group.add(p.root);
    items.push(p);
    return p;
  };

  // plants: two on the window sill, one tall one in the front-left corner
  [[-2.0, 0.7], [0.9, 0.62]].forEach(([z, s]) => {
    const pl = plant(s);
    I(solid(place(pl.pot, -4.85, 1.08, z), materials.pot));
    I(solid(place(pl.leaves, -4.85, 1.08, z), materials.vertex));
  });
  const big = plant(1.7);
  I(solid(place(big.pot, -4.2, 0, 3.9), materials.pot, { drop: 3 }));
  I(solid(place(big.leaves, -4.2, 0, 3.9), materials.vertex, { drop: 3 }));

  // by the door
  I(solid(cyl(0.17, 0.15, 0.4, [2.75, 0, -4.6], 18), materials.steelDark, { drop: 3 }));
  I(solid(merge([cyl(0.075, 0.075, 0.42, [3.02, 0.35, -4.72], 14), cyl(0.03, 0.03, 0.08, [3.02, 0.77, -4.72], 10)]), materials.tape, { drop: 3 }));
  I(solid(place(box(0.55, 0.42, 0.5, [0, 0, 0], 0.01), 4.6, 0, -4.45, 0.1), materials.cardboard, { drop: 3 }));
  I(solid(place(box(0.42, 0.3, 0.4, [0, 0, 0], 0.01), 4.62, 0.42, -4.42, -0.15), materials.cardboard, { drop: 3 }));

  return {
    group,
    update(L) {
      const u = seg(L, ...SCHEDULE.props);
      items.forEach((p, i) => p.set(staggered(u, i, items.length, 0.62)));
    },
  };
}
