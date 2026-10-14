import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PALETTE } from './config.js';
import { seg, smooth, easeOutCubic, easeOutQuart, easeOutBack } from './timeline.js';

/* The one idea every physical object in the lab shares.
 *
 * A Part is modelled the way the story says it was: first it exists as an
 * amber blocking cage (the wireframe you'd see in a Blender viewport), then
 * it moves into place and its solid, lit form dissolves in over the cage.
 * `set(t)` takes that part's own 0 → 1 build progress and poses it — it is
 * a pure function of t, which is what lets scroll run it backwards.
 *
 *   fx 'drop'  — falls in from above and settles
 *   fx 'rise'  — extruded upward from its base
 *   fx 'slide' — arrives along `dir`
 *   fx 'pop'   — grows from its base with a slight overshoot
 *
 * Everything is built with its origin at the bottom centre, like an object
 * standing on the floor, so rise/pop grow from the ground.
 */

const wireMaterial = () =>
  new THREE.LineBasicMaterial({
    color: PALETTE.amber,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    toneMapped: false,
  });

export function part({
  size,
  at = [0, 0, 0],
  material,
  radius = 0.04,
  wire = true,
  keepWire = 0,
  fx = 'drop',
  drop = 3,
  dir = new THREE.Vector3(0, -3, 0),
  geometry = null,
  shadow = true,
}) {
  const [w, h, d] = size;
  let geo = geometry;
  if (!geo) {
    const r = Math.max(0.004, Math.min(radius, Math.min(w, h, d) / 2 - 0.002));
    geo = new RoundedBoxGeometry(w, h, d, r > 0.03 ? 3 : 2, r);
    geo.translate(0, h / 2, 0);
  }

  const mat = material.clone();
  // Alpha-hash gives a stochastic dissolve with no sorting problems — the
  // part reads as digital material resolving, and depth stays correct.
  mat.alphaHash = true;
  mat.transparent = false;
  mat.opacity = 0;

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  // Read by the lab's shader preparation, which compiles shadow programs
  // for every part that will cast one once it has been built.
  mesh.userData.shadowCaster = shadow;

  const root = new THREE.Group();
  root.add(mesh);
  root.position.set(at[0], at[1], at[2]);
  root.visible = false;

  // wire: true → a box cage around the part; 'edges' → the part's own hard
  // edges (for round things, where a box would be wrong); false → none.
  let cage = null;
  if (wire === 'edges') {
    cage = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), wireMaterial());
    root.add(cage);
  } else if (wire) {
    const box = new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0);
    cage = new THREE.LineSegments(new THREE.EdgesGeometry(box), wireMaterial());
    box.dispose();
    root.add(cage);
  }

  const rest = root.position.clone();

  function set(t) {
    const on = t > 0.0005;
    root.visible = on;
    if (!on) return;

    const settle = seg(t, 0.06, 0.8);
    switch (fx) {
      case 'drop': {
        root.position.y = rest.y + drop * (1 - easeOutQuart(settle));
        // A whisper of squash as it lands.
        const land = Math.sin(Math.PI * seg(t, 0.62, 0.9));
        root.scale.y = 1 - 0.035 * land;
        break;
      }
      case 'rise':
        root.scale.y = Math.max(0.001, easeOutCubic(seg(t, 0.04, 0.85)));
        break;
      case 'slide':
        root.position.copy(rest).addScaledVector(dir, 1 - easeOutQuart(settle));
        break;
      case 'pop':
        root.scale.setScalar(Math.max(0.001, easeOutBack(seg(t, 0.04, 0.8), 1.2)));
        break;
    }

    mat.opacity = smooth(seg(t, 0.34, 0.8));
    mesh.castShadow = shadow && t > 0.6;
    if (cage) {
      const fadeIn = smooth(seg(t, 0.02, 0.2));
      const fadeOut = smooth(seg(t, 0.68, 1));
      cage.material.opacity = fadeIn * (1 - (1 - keepWire) * fadeOut) * 0.9;
    }
  }

  return { root, mesh, mat, set, rest };
}

/* A prop built from a ready-made (usually merged) geometry: it drops in from
 * above like everything else, with no cage — the cage is for the big pieces
 * whose blocking-out the story is about. */
export function solid(geometry, material, opts = {}) {
  return part({ size: [1, 1, 1], geometry, material, wire: false, fx: 'drop', drop: 2.4, shadow: false, ...opts });
}

/* Merge several geometries into one draw call. RoundedBoxGeometry is
 * non-indexed while cylinders, tori and capsules are indexed, and
 * mergeGeometries refuses to mix the two — so flatten them all first. */
export function merge(geometries) {
  const merged = mergeGeometries(geometries.map((g) => (g.index ? g.toNonIndexed() : g)));
  geometries.forEach((g) => g.dispose());
  return merged;
}

// Stagger helper: item i of n, with each starting a little after the last
// but all finishing by the end of the window.
export function staggered(u, i, n, spread = 0.55) {
  const delay = n > 1 ? (i / (n - 1)) * spread : 0;
  return seg(u, delay, delay + 1 - spread);
}
