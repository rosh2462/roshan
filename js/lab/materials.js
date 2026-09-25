import * as THREE from 'three';
import { PALETTE } from './config.js';

/* The lab's material set: the things a real university lab is made of —
 * painted plaster, vinyl floor, beech desk-tops, laminate, powder-coated
 * steel, dark plastic, fabric. Colour comes from the materials; light comes
 * from the lamps and windows. The one warm accent the site is built on
 * survives as brass trim, not as glow. */
export function createMaterials(env) {
  // Matte things — plaster, fabric, wood, paper — have no highlights worth
  // paying a PBR shader for: they get the cheaper diffuse-only material. Only
  // the glossy ones (metal, plastic, brass, glass) are PBR, and only they carry
  // the reflection map. It is a lot of pixels shaded on a close-up.
  const lam = (color, extra = {}) => new THREE.MeshLambertMaterial({ color, ...extra });
  const std = (color, roughness = 0.6, metalness = 0.05, extra = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness, envMap: env, envMapIntensity: 0.55, ...extra });

  return {
    // architecture
    paint: lam(0xbdb8ae),
    wainscot: lam(0x65798a),
    baseboard: lam(0x2b2e36),
    slab: lam(0x101116),
    tile: lam(0xffffff), // tinted per instance
    brass: std(0xd9a651, 0.32, 0.85),
    rug: lam(0x343946),

    // furniture
    wood: lam(0xc79f6e),
    woodDark: lam(0x74513a),
    laminate: lam(0xe6e3dc),
    steel: std(0x9aa2ad, 0.42, 0.35),
    steelDark: std(0x2f333c, 0.5, 0.4),
    plastic: std(0x121318, 0.45, 0.05),
    plasticWhite: std(0xe2e3e7, 0.4),
    fabric: lam(0x2d3242),
    fabricBlue: lam(0x3d5f8f),

    // small things
    paper: lam(0xf0eee7),
    cardboard: lam(0xb18e62),
    pot: lam(0xb26a4b),
    tape: lam(0xe2b53f),
    // merged props coloured per vertex (binders, books, foliage…)
    vertex: lam(0xffffff, { vertexColors: true }),
    lampBulb: new THREE.MeshStandardMaterial({ color: 0x1a1408, emissive: 0xffc98a, emissiveIntensity: 2.2, roughness: 0.4 }),

    glass: new THREE.MeshStandardMaterial({
      color: 0xa9c6ee,
      roughness: 0.06,
      metalness: 0,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    }),
  };
}

/* A dark studio for reflections: a warm key softbox, a cool window strip and
 * a small overhead kicker, baked once into a PMREM environment so glass and
 * metal reflect the same light the room is lit by. */
export function createEnvironment(renderer) {
  const env = new THREE.Scene();
  env.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(60, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x07080d, side: THREE.BackSide }),
    ),
  );

  const box = (w, h, color, gain, pos) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(gain), side: THREE.DoubleSide }),
    );
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  box(30, 16, PALETTE.champagne, 4.5, [-24, 26, 18]);
  box(10, 26, PALETTE.ice, 2.6, [30, 10, -14]);
  box(14, 14, 0xffffff, 1.8, [0, 40, 2]);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(env, 0.04);
  pmrem.dispose();
  env.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) o.material.dispose();
  });
  return rt.texture;
}

/* Draw once into a canvas and use it as a texture. `redraw` re-runs the draw
 * once the site's fonts have loaded, so lettering lands in the right face. */
export function drawTexture(draw, w = 512, h = 512, { anisotropy = 4, redraw = false } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  if (redraw && document.fonts) {
    document.fonts.ready.then(() => {
      g.clearRect(0, 0, w, h);
      draw(g, w, h);
      tex.needsUpdate = true;
    });
  }
  return tex;
}

// A lit material carrying a painted texture (locker doors, drawer fronts…).
export function mappedMaterial(map, roughness = 0.55, metalness = 0.1) {
  if (metalness < 0.15) return new THREE.MeshLambertMaterial({ map });
  return new THREE.MeshStandardMaterial({ map, roughness, metalness });
}

// An unlit material for anything that emits its own picture (screens,
// whiteboard, window) — exactly as bright as it was painted.
export function pictureMaterial(tex, gain = 1) {
  return new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color().setScalar(gain) });
}
