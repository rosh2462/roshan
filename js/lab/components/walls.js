import * as THREE from 'three';
import { SCHEDULE, ROOM } from '../config.js';
import { seg, smooth, lerp } from '../timeline.js';
import { part, staggered } from '../kit.js';
import { box } from '../shapes.js';
import { pictureMaterial } from '../materials.js';
import { windowSky, whiteboard, clockFace, blindTexture } from '../screens.js';

/* The two back walls: each is extruded up from the floor, then dressed the
 * way a real room is — a painted dado with a brass rail, skirting, a brass
 * cap along the cut edge. The left wall gets a long window with a blind and
 * a sill; the back wall a whiteboard, a clock and a door standing slightly
 * open onto a dark corridor. */
export function createWalls({ materials }) {
  const group = new THREE.Group();
  const H = ROOM.wallH;
  const add = (p) => {
    group.add(p.root);
    return p;
  };

  // ---- structure ---------------------------------------------------------
  const wallA = add(part({ size: [0.3, H, 10.3], at: [-5.15, 0, -0.15], material: materials.paint, radius: 0.02, fx: 'rise' }));
  const wallB = add(part({ size: [10.0, H, 0.3], at: [0, 0, -5.15], material: materials.paint, radius: 0.02, fx: 'rise' }));

  // ---- dressing (staggers in after its wall) ----------------------------
  const dress = [];
  const dressed = (p, wallKey, order) => {
    add(p);
    dress.push({ p, wallKey, order });
  };
  const slideX = new THREE.Vector3(0.6, 0, 0);
  const slideZ = new THREE.Vector3(0, 0, 0.6);

  // dado paint, its brass rail, and skirting
  dressed(part({ size: [0.06, 1.05, 10.0], at: [-4.97, 0, 0], material: materials.wainscot, radius: 0.015, fx: 'slide', dir: slideX, wire: false }), 'wallA', 0);
  dressed(part({ size: [9.94, 1.05, 0.06], at: [0.03, 0, -4.97], material: materials.wainscot, radius: 0.015, fx: 'slide', dir: slideZ, wire: false }), 'wallB', 0);
  dressed(part({ size: [0.09, 0.03, 10.0], at: [-4.955, 1.05, 0], material: materials.brass, radius: 0.01, fx: 'slide', dir: slideX, wire: false, shadow: false }), 'wallA', 1);
  dressed(part({ size: [9.94, 0.03, 0.09], at: [0.03, 1.05, -4.955], material: materials.brass, radius: 0.01, fx: 'slide', dir: slideZ, wire: false, shadow: false }), 'wallB', 1);
  dressed(part({ size: [0.04, 0.12, 10.0], at: [-4.93, 0, 0], material: materials.baseboard, radius: 0.01, fx: 'slide', dir: slideX, wire: false }), 'wallA', 1);
  dressed(part({ size: [9.94, 0.12, 0.04], at: [0.03, 0, -4.93], material: materials.baseboard, radius: 0.01, fx: 'slide', dir: slideZ, wire: false }), 'wallB', 1);
  // a brass cap along each wall's cut top edge — the one warm accent
  dressed(part({ size: [0.36, 0.05, 10.36], at: [-5.15, H, -0.15], material: materials.brass, radius: 0.012, fx: 'drop', drop: 1.5, wire: false }), 'wallA', 2);
  dressed(part({ size: [10.06, 0.05, 0.36], at: [0, H, -5.15], material: materials.brass, radius: 0.012, fx: 'drop', drop: 1.5, wire: false }), 'wallB', 2);

  // ---- corner post -------------------------------------------------------
  const corner = add(part({ size: [0.4, H + 0.06, 0.4], at: [-4.8, 0, -4.8], material: materials.paint, radius: 0.03, fx: 'rise' }));

  // ---- window down the left wall ----------------------------------------
  const sky = pictureMaterial(windowSky(), 0.9);
  const glazing = [];
  const glaze = (p) => {
    glazing.push(add(p));
    return p;
  };
  const skyPane = glaze(part({ size: [0.02, 1.62, 6.0], at: [-4.985, 1.1, -0.7], material: sky, radius: 0.004, fx: 'slide', dir: new THREE.Vector3(0.4, 0, 0), wire: false, shadow: false }));
  const drop = (size, at, mat = materials.plasticWhite) => glaze(part({ size, at, material: mat, radius: 0.01, fx: 'drop', drop: 1.2, wire: false }));
  drop([0.1, 0.06, 6.2], [-4.95, 2.72, -0.7]); // head
  drop([0.1, 0.05, 6.2], [-4.95, 1.08, -0.7]); // bottom rail
  [-3.7, -1.7, 0.3, 2.3].forEach((z) => drop([0.1, 1.66, 0.07], [-4.95, 1.08, z])); // mullions
  drop([0.26, 0.04, 6.4], [-4.88, 1.04, -0.7], materials.laminate); // sill
  // a lowered Venetian blind over the window, and its cassette
  glaze(part({ size: [0.03, 0.62, 6.0], at: [-4.93, 2.1, -0.7], material: pictureMaterial(blindTexture(), 0.95), radius: 0.004, fx: 'drop', drop: 1.0, wire: false, shadow: false }));
  drop([0.1, 0.08, 6.1], [-4.93, 2.72, -0.7], materials.plasticWhite);

  // ---- whiteboard, clock ---------------------------------------------------
  glaze(part({ size: [3.0, 1.4, 0.03], at: [1.1, 0.95, -4.97], material: pictureMaterial(whiteboard(), 1), radius: 0.008, fx: 'slide', dir: new THREE.Vector3(0, 0, 0.5), wire: false, shadow: false }));
  drop([3.1, 1.5, 0.02], [1.1, 0.9, -4.99], materials.steel);
  drop([3.0, 0.04, 0.09], [1.1, 0.9, -4.93], materials.steel);
  glaze(part({ size: [0.6, 0.6, 0.01], at: [3.95, 2.72, -4.985], geometry: new THREE.CircleGeometry(0.3, 40), material: pictureMaterial(clockFace(), 1), fx: 'drop', drop: 1.0, wire: false, shadow: false }));
  glaze(part({ size: [0.66, 0.66, 0.05], at: [3.95, 2.72, -4.975], geometry: new THREE.TorusGeometry(0.31, 0.03, 8, 40), material: materials.brass, fx: 'drop', drop: 1.0, wire: false, shadow: false }));

  // ---- door, slightly ajar onto a dark corridor ------------------------
  glaze(part({ size: [1.3, 2.2, 0.04], at: [3.85, 0, -4.98], material: materials.slab, radius: 0.006, fx: 'slide', dir: new THREE.Vector3(0, 0, 0.5), wire: false, shadow: false }));
  drop([0.09, 2.24, 0.14], [3.2, 0, -4.93], materials.woodDark); // jambs + head
  drop([0.09, 2.24, 0.14], [4.5, 0, -4.93], materials.woodDark);
  drop([1.4, 0.09, 0.14], [3.85, 2.2, -4.93], materials.woodDark);
  const leaf = glaze(part({ size: [1.02, 2.1, 0.05], at: [4.42, 0, -4.86], geometry: box(1.02, 2.1, 0.05, [-0.51, 0, 0], 0.012), material: materials.wood, radius: 0.012, fx: 'drop', drop: 1.4, wire: false }));
  leaf.root.rotation.y = 0.62; // pivots on its hinge
  const handle = glaze(part({ size: [0.12, 0.04, 0.09], at: [4.42, 1.0, -4.86], geometry: box(0.12, 0.04, 0.09, [-0.9, 0, 0.0], 0.01), material: materials.brass, radius: 0.01, fx: 'drop', drop: 1.4, wire: false, shadow: false }));
  handle.root.rotation.y = 0.62;

  const wins = { wallA: SCHEDULE.wallA, wallB: SCHEDULE.wallB, corner: SCHEDULE.corner };

  return {
    group,
    update(L) {
      const u = (k) => seg(L, ...wins[k]);
      wallA.set(u('wallA'));
      wallB.set(u('wallB'));
      corner.set(u('corner'));

      // Dressing follows its own wall.
      for (const { p, wallKey, order } of dress) {
        p.set(seg(u(wallKey), 0.35 + order * 0.12, 0.85 + order * 0.08));
      }

      // Window, whiteboard, door and clock arrive one after another.
      const g = seg(L, ...SCHEDULE.glazing);
      glazing.forEach((p, i) => p.set(staggered(g, i, glazing.length, 0.7)));

      // Daylight brightens a little as the scene goes from viewport to engine.
      const unity = smooth(seg(L, ...SCHEDULE.unity));
      skyPane.mat.color.setScalar(lerp(0.8, 1.15, unity));
    },
  };
}
