import * as THREE from 'three';
import { SCHEDULE, LAYOUT, ROOM } from '../config.js';
import { seg, smooth, easeOutCubic, easeOutBack, hash } from '../timeline.js';
import { part } from '../kit.js';
import { tapeMarks } from '../screens.js';

/* The floor: a graphite slab lifts out of the void, its brass edge catches
 * the light, then a hundred vinyl tiles ripple outward from the middle of
 * the room and settle into it. A rug drops in under the workstation, and the
 * corners of a VR play area are taped out at the front of the room. */
export function createFloor({ materials }) {
  const group = new THREE.Group();
  const span = ROOM.half * 2;

  const slab = part({
    size: [span + 0.4, 0.5, span + 0.4],
    at: [0, -0.6, 0],
    material: materials.slab,
    radius: 0.08,
    fx: 'slide',
    dir: new THREE.Vector3(0, -6, 0),
    shadow: false,
  });
  const trim = part({
    size: [span + 0.46, 0.05, span + 0.46],
    at: [0, -0.42, 0],
    material: materials.brass,
    radius: 0.012,
    fx: 'slide',
    dir: new THREE.Vector3(0, 0, 0),
    wire: false,
    shadow: false,
  });
  group.add(slab.root, trim.root);

  // ---- tiles -------------------------------------------------------------
  const N = span;
  const count = N * N;
  const tileGeo = new THREE.BoxGeometry(0.985, 0.06, 0.985).translate(0, 0.03, 0);
  const tiles = new THREE.InstancedMesh(tileGeo, materials.tile, count);
  tiles.receiveShadow = true;
  tiles.frustumCulled = false;

  const delays = new Float32Array(count);
  const cells = [];
  const c0 = new THREE.Color(0x565b68);
  const c1 = new THREE.Color(0x646a78);
  const tmp = new THREE.Color();
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const k = i * N + j;
      const x = i - N / 2 + 0.5;
      const z = j - N / 2 + 0.5;
      cells.push([x, z]);
      // ripples out from the middle of the room, as before
      delays[k] = (Math.hypot(x - LAYOUT.workstation[0], z - LAYOUT.workstation[2]) / 9) * 0.6 + hash(k) * 0.06;
      tmp.copy(c0).lerp(c1, ((i + j) % 2 ? 0.5 : 0.1) + hash(k + 9) * 0.35);
      tiles.setColorAt(k, tmp);
    }
  }
  group.add(tiles);

  const dummy = new THREE.Object3D();
  let lastU = -1;
  function poseTiles(u) {
    if (u === lastU) return;
    lastU = u;
    for (let k = 0; k < count; k++) {
      const t = seg(u, delays[k], delays[k] + 0.4);
      const [x, z] = cells[k];
      const s = t <= 0 ? 0.0001 : Math.max(0.0001, easeOutBack(t, 1.1));
      dummy.position.set(x, -0.06 - 1.3 * (1 - easeOutCubic(t)), z);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      tiles.setMatrixAt(k, dummy.matrix);
    }
    tiles.instanceMatrix.needsUpdate = true;
  }

  // ---- rug under the workstation ----------------------------------------
  const rug = part({
    size: [3.9, 0.02, 3.3],
    at: [LAYOUT.workstation[0], 0, LAYOUT.workstation[2] + 0.55],
    material: materials.rug,
    radius: 0.008,
    fx: 'drop',
    drop: 2.2,
    wire: false,
    shadow: false,
  });
  group.add(rug.root);

  // ---- taped-out VR play area, front right ------------------------------
  const tapeMat = new THREE.MeshBasicMaterial({
    map: tapeMarks(),
    transparent: true,
    opacity: 0,
    depthWrite: false,
    color: 0xbfbfbf,
  });
  const tape = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 2.9), tapeMat);
  tape.rotation.x = -Math.PI / 2;
  tape.position.set(3.4, 0.004, 3.0);
  tape.renderOrder = 1;
  group.add(tape);

  return {
    group,
    update(L) {
      slab.set(seg(L, ...SCHEDULE.slab));
      trim.set(seg(L, ...SCHEDULE.trim));
      poseTiles(seg(L, ...SCHEDULE.tiles));
      const r = seg(L, ...SCHEDULE.rug);
      rug.set(r);
      tapeMat.opacity = smooth(seg(r, 0.4, 1)) * 0.85;
    },
  };
}
