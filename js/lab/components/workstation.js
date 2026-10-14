import * as THREE from 'three';
import { SCHEDULE, LAYOUT } from '../config.js';
import { seg, smooth } from '../timeline.js';
import { part, solid, staggered } from '../kit.js';
import { place, screenPlane, officeChair, monitor, keyboard, mouse, lamp, mug, headset, controller, box } from '../shapes.js';
import { pictureMaterial, mappedMaterial } from '../materials.js';
import { blenderScreen, unityScreen, codeScreen, keyboardTexture } from '../screens.js';
import { neuroMazePreview } from '../preview.js';

/* The central workstation — where the glowing sphere used to be. A beech
 * table with two monitors, a keyboard and mouse, a lamp, a mug, and a VR
 * headset with its controllers resting on the desk like any other thing on
 * it. Two chairs, one pulled out.
 *
 * Its main monitor is the story's hinge: while the lab is being built it
 * shows Blender; when the scene goes to Unity the picture cross-fades to the
 * Unity editor; and in the last stage it is the object that gets selected —
 * and, selected, it powers on into a NeuroMaze preview that opens chapter 04. */
export function createWorkstation({ materials }) {
  const [tx, , tz] = LAYOUT.workstation;
  const top = LAYOUT.tableTop;
  const group = new THREE.Group();
  const items = [];
  const add = (p, parent = group) => {
    parent.add(p.root);
    items.push(p);
    return p;
  };

  // ---- the table ---------------------------------------------------------
  add(part({ size: [2.8, 0.05, 1.3], at: [tx, top - 0.05, tz], material: materials.wood, radius: 0.012, fx: 'drop', drop: 2.6, keepWire: 0.1 }));
  [-1.32, 1.32].forEach((dx) => add(part({ size: [0.05, top - 0.05, 1.1], at: [tx + dx, 0, tz], material: materials.laminate, radius: 0.01, fx: 'drop', drop: 3.2 })));
  add(part({ size: [2.56, 0.42, 0.03], at: [tx, 0.26, tz - 0.5], material: materials.laminate, radius: 0.008, fx: 'drop', drop: 3.2, wire: false }));

  // ---- the main monitor (a group, so it can be selected and lifted whole) ---
  const [mrx, mrz] = LAYOUT.monitorRel;
  const mx = tx + mrx;
  const mz = tz + mrz;
  const mon = monitor(1.0, 0.6);
  const monitorGroup = new THREE.Group();
  group.add(monitorGroup);
  add(solid(place(mon.body, mx, top, mz), materials.plastic, { shadow: true }), monitorGroup);
  add(solid(screenPlane(mon, mx, top, mz), pictureMaterial(blenderScreen(), 0.9), { shadow: false }), monitorGroup);
  // the Unity picture, laid over Blender's and faded in at the switch
  const unityMat = new THREE.MeshBasicMaterial({ map: unityScreen(), transparent: true, opacity: 0, depthWrite: false });
  const unityMesh = new THREE.Mesh(screenPlane(mon, mx, top, mz), unityMat);
  unityMesh.position.z = 0.0015;
  unityMesh.renderOrder = 2;
  unityMesh.visible = false;
  monitorGroup.add(unityMesh);
  // NeuroMaze, over both, from the moment the monitor is selected.
  const preview = neuroMazePreview(screenPlane(mon, mx, top, mz));
  preview.mesh.position.z = 0.003;
  monitorGroup.add(preview.mesh);

  // ---- the second monitor, keyboard, mouse ------------------------------
  const mon2 = monitor(0.86, 0.52);
  add(solid(place(mon2.body, tx - 0.8, top, tz - 0.38, 0.25), materials.plastic, { shadow: true }));
  add(solid(screenPlane(mon2, tx - 0.8, top, tz - 0.38, 0.25), pictureMaterial(codeScreen(2), 0.85), { shadow: false }));
  add(solid(place(keyboard(), tx - 0.15, top, tz + 0.12), mappedMaterial(keyboardTexture(), 0.5)));
  add(solid(place(mouse(), tx + 0.34, top, tz + 0.14, 0.1), materials.plastic));

  // ---- the headset and its controllers, resting on the desk ---------------
  const hs = headset();
  add(solid(place(hs.shell, tx + 1.02, top, tz + 0.1, -0.5), materials.plasticWhite));
  add(solid(place(hs.dark, tx + 1.02, top, tz + 0.1, -0.5), materials.plastic));
  add(solid(place(controller(), tx + 0.9, top, tz + 0.47, 0.6), materials.plasticWhite));
  add(solid(place(controller(), tx + 1.1, top, tz + 0.42, 1.05), materials.plasticWhite));

  // ---- lamp, mug, notebook, PC ------------------------------------------
  const l = lamp();
  add(solid(place(l.body, tx - 1.2, top, tz - 0.42, 0.5), materials.steelDark));
  const bulb = add(solid(place(l.bulb, tx - 1.2, top, tz - 0.42, 0.5), materials.lampBulb.clone(), { shadow: false }));
  add(solid(place(mug(), tx - 1.02, top, tz + 0.2, 0.4), materials.plasticWhite));
  add(solid(place(box(0.22, 0.025, 0.3, [0, 0, 0], 0.004), tx - 0.62, top, tz + 0.32, 0.25), materials.paper));
  add(solid(place(box(0.22, 0.48, 0.46, [0, 0, 0], 0.02), tx + 1.0, 0, tz - 0.22, -0.2), materials.plastic, { drop: 3 }));

  // ---- two chairs, one pulled out ----------------------------------------
  [
    [tx + 0.5, tz + 1.35, Math.PI + 0.3, materials.fabric],
    [tx - 0.85, tz + 1.7, Math.PI - 0.55, materials.fabricBlue],
  ].forEach(([x, z, ry, fab]) => {
    const c = officeChair();
    add(solid(place(c.base, x, 0, z, ry), materials.steelDark, { drop: 3.4, shadow: true }));
    add(solid(place(c.fabric, x, 0, z, ry), fab, { drop: 3.4, shadow: true }));
  });

  // What the interaction needs to know about the main monitor.
  const bezelH = mon.top - 0.15;
  const target = {
    group: monitorGroup,
    unityMat,
    preview,
    // centre of the screen (world) and the bezel it sits in
    center: new THREE.Vector3(mx, top + 0.15 + 0.03 + 0.3, mz + 0.03),
    bezel: { w: 1.06, h: bezelH, d: 0.045, cy: top + 0.15 + bezelH / 2, z: mz },
    x: mx,
  };

  return {
    group,
    target,
    lampPosition: new THREE.Vector3(tx - 1.1, top + 0.75, tz - 0.5),
    bulb,
    update(L) {
      const u = seg(L, ...SCHEDULE.workstation);
      items.forEach((p, i) => p.set(staggered(u, i, items.length, 0.68)));

      // Blender → Unity: the picture on the main monitor cross-fades.
      const s = smooth(seg(L, ...SCHEDULE.screens));
      unityMesh.visible = s > 0.001;
      unityMat.opacity = s;
      preview.setOn(smooth(seg(L, ...SCHEDULE.preview)));
    },
    animate(t) { preview.animate(t); },
  };
}
