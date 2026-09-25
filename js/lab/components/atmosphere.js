import * as THREE from 'three';
import { PALETTE, SCHEDULE } from '../config.js';
import { seg, smooth, hash } from '../timeline.js';

/* What surrounds the diorama: a warm pool of light beneath the floating
 * slab, and a slow drift of dust in the air that catches the amber. Both
 * arrive with the floor, so the lab is never lit against nothing. */
export function createAtmosphere({ quality }) {
  const group = new THREE.Group();

  const glowTex = radial([
    [0, 'rgba(232,181,102,0.55)'],
    [0.45, 'rgba(201,113,63,0.18)'],
    [1, 'rgba(201,113,63,0)'],
  ]);
  const glowMat = new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(30, 30).rotateX(-Math.PI / 2), glowMat);
  glow.position.y = -0.72;
  glow.renderOrder = -2;
  group.add(glow);

  const N = quality.low ? 110 : 240;
  const base = new Float32Array(N * 3);
  const phase = new Float32Array(N);
  const rate = new Float32Array(N);
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    base[i * 3] = (hash(i * 3.1) - 0.5) * 20;
    base[i * 3 + 1] = -0.5;
    base[i * 3 + 2] = (hash(i * 5.7) - 0.5) * 20;
    phase[i] = hash(i * 7.3);
    rate[i] = 0.012 + hash(i * 11.9) * 0.02;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dustMat = new THREE.PointsMaterial({
    size: 0.09,
    map: radial([[0, 'rgba(255,240,215,1)'], [1, 'rgba(255,240,215,0)']]),
    color: PALETTE.champagne,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    sizeAttenuation: true,
  });
  const dust = new THREE.Points(geo, dustMat);
  dust.frustumCulled = false;
  group.add(dust);

  return {
    group,
    update(L, time) {
      const arrive = smooth(seg(L, ...SCHEDULE.slab));
      glowMat.opacity = arrive * 0.12;
      dustMat.opacity = arrive * 0.28;
      for (let i = 0; i < N; i++) {
        const t = (time * rate[i] + phase[i]) % 1;
        pos[i * 3] = base[i * 3] + Math.sin(time * 0.15 + phase[i] * 6.28) * 0.5;
        pos[i * 3 + 1] = base[i * 3 + 1] + t * 9;
        pos[i * 3 + 2] = base[i * 3 + 2] + Math.cos(time * 0.12 + phase[i] * 6.28) * 0.5;
      }
      geo.attributes.position.needsUpdate = true;
    },
  };
}

function radial(stops) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const rg = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  stops.forEach(([o, col]) => rg.addColorStop(o, col));
  g.fillStyle = rg;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
