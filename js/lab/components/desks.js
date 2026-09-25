import * as THREE from 'three';
import { SCHEDULE, LAYOUT } from '../config.js';
import { seg } from '../timeline.js';
import { part, solid, staggered } from '../kit.js';
import { place, screenPlane, officeChair, monitor, keyboard, mouse, lamp, mug, box } from '../shapes.js';
import { pictureMaterial, mappedMaterial } from '../materials.js';
import { blenderScreen, unityScreen, codeScreen, drawerFront, keyboardTexture } from '../screens.js';

/* The run of desks down the window wall: end panels and drawer pedestals drop
 * in from the front of the room to the back, the beech worktop lays itself
 * across them, and then each of the three workstations is set up — monitor,
 * keyboard, mouse, PC under the desk, and an office chair pulled out at a
 * slightly different angle, the way people leave them. */
export function createDesks({ materials }) {
  const group = new THREE.Group();
  const X = LAYOUT.deskX;
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

  // ---- structure (front of the room first) ------------------------------
  const panel = (z) =>
    S(part({ size: [0.76, 0.72, 0.04], at: [X, 0, z], material: materials.laminate, radius: 0.008, fx: 'drop', drop: 3.2 }));
  const drawers = mappedMaterial(drawerFront(), 0.6);
  const pedestal = (z) =>
    S(part({ size: [0.5, 0.68, 0.7], at: [X - 0.15, 0, z], material: drawers, radius: 0.012, fx: 'drop', drop: 3.2 }));
  panel(2.67);
  pedestal(1.9);
  panel(0.55);
  panel(-1.65);
  pedestal(-3.45);
  panel(-3.97);
  S(part({ size: [0.84, 0.04, 6.7], at: [X, 0.72, -0.65], material: materials.wood, radius: 0.012, fx: 'drop', drop: 2.4, keepWire: 0.1 }));

  // ---- the three workstations ------------------------------------------
  const screens = [
    { tex: blenderScreen(), gain: 0.85 },
    { tex: codeScreen(1), gain: 0.85 },
    { tex: unityScreen(), gain: 0.85 },
  ];
  const chairJitter = [-0.12, 0.28, -0.3];
  const towerZ = [-2.3, -0.55, 0.95];
  const kb = keyboardTexture();
  const bulbs = [];
  const lampPositions = [];

  LAYOUT.deskStations.forEach((z, i) => {
    const m = monitor(0.86, 0.52);
    I(solid(place(m.body, X - 0.05, 0.76, z, Math.PI / 2), materials.plastic, { shadow: true }));
    I(solid(screenPlane(m, X - 0.05, 0.76, z, Math.PI / 2), pictureMaterial(screens[i].tex, screens[i].gain), { shadow: false }));
    I(solid(place(keyboard(), X + 0.3, 0.76, z, Math.PI / 2), mappedMaterial(kb, 0.5)));
    I(solid(place(mouse(), X + 0.3, 0.76, z + 0.36), materials.plastic));
    I(solid(place(box(0.22, 0.48, 0.46, [0, 0, 0], 0.02), X - 0.05, 0, towerZ[i], Math.PI / 2), materials.plastic, { drop: 3 }));

    const c = officeChair();
    const rot = -Math.PI / 2 + chairJitter[i];
    I(solid(place(c.base, X + 1.15, 0, z + 0.1, rot), materials.steelDark, { drop: 3.4, shadow: true }));
    I(solid(place(c.fabric, X + 1.15, 0, z + 0.1, rot), i === 1 ? materials.fabricBlue : materials.fabric, { drop: 3.4, shadow: true }));
  });

  // small things that make a desk somebody's desk
  const l = lamp();
  I(solid(place(l.body, X - 0.22, 0.76, LAYOUT.deskStations[0] - 0.62, Math.PI / 2), materials.steelDark));
  const bulb = I(solid(place(l.bulb, X - 0.22, 0.76, LAYOUT.deskStations[0] - 0.62, Math.PI / 2), materials.lampBulb.clone(), { shadow: false }));
  bulbs.push(bulb);
  lampPositions.push(new THREE.Vector3(X - 0.02, 1.35, LAYOUT.deskStations[0] - 0.5));
  I(solid(place(mug(), X + 0.28, 0.76, LAYOUT.deskStations[1] - 0.5), materials.plasticWhite));
  I(solid(place(box(0.22, 0.03, 0.3, [0, 0, 0], 0.004), X + 0.3, 0.76, LAYOUT.deskStations[1] + 0.55, 0.3), materials.paper));
  I(solid(place(mug(), X + 0.25, 0.76, LAYOUT.deskStations[2] - 0.5, 1.2), materials.pot));

  return {
    group,
    lampPositions,
    bulbs,
    update(L) {
      const d = seg(L, ...SCHEDULE.desks);
      structure.forEach((p, i) => p.set(staggered(d, i, structure.length, 0.6)));
      const t = seg(L, ...SCHEDULE.props);
      items.forEach((p, i) => p.set(staggered(t, i, items.length, 0.62)));
    },
  };
}
