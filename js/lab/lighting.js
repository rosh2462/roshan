import * as THREE from 'three';
import { lerp } from './timeline.js';

/* Two lightings for one room — that is the Blender → Unity moment.
 *
 * While the lab is being modelled it is lit the way a modelling viewport lights
 * a scene: even, neutral, cool, with soft shadows and nothing switched on. When
 * the scene is brought into Unity (`unity` 0 → 1) it is lit like a place: a warm
 * key from the window side with real contrast and full shadows, the cool rim
 * from behind, and the practicals — desk lamps and the glow of the monitors —
 * coming on. Same room, same objects; only the light changes. */
export function createLighting(scene, quality) {
  const group = new THREE.Group();

  const hemi = new THREE.HemisphereLight(0xa9bcdc, 0x34302a, 1.5);
  group.add(hemi);

  const key = new THREE.DirectionalLight(0xf3f6ff, 1.5);
  key.position.set(-7, 15, 10);
  key.castShadow = true;
  const s = quality.shadowSize;
  key.shadow.mapSize.set(s, s);
  const cam = key.shadow.camera;
  cam.left = -9;
  cam.right = 9;
  cam.top = 9;
  cam.bottom = -9;
  cam.near = 2;
  cam.far = 42;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.035;
  group.add(key, key.target);

  const rim = new THREE.DirectionalLight(0x8fb0ea, 0.35);
  rim.position.set(11, 7, -5);
  group.add(rim);

  // Practicals — no shadows, they only warm the space around them.
  const lampA = new THREE.PointLight(0xffc98a, 0, 4, 2);
  const lampB = new THREE.PointLight(0xffc98a, 0, 3.5, 2);
  group.add(lampA, lampB);

  scene.add(group);

  const cool = new THREE.Color(0xf3f6ff);
  const warm = new THREE.Color(0xffd3a0);
  const hasShadowIntensity = 'intensity' in key.shadow;

  return {
    group,
    setPractical(a, b) {
      lampA.position.copy(a);
      lampB.position.copy(b);
    },
    // `unity` is how far the scene has gone from viewport to engine (0..1).
    update({ unity = 0 } = {}) {
      hemi.intensity = lerp(1.5, 0.62, unity);
      key.color.copy(cool).lerp(warm, unity);
      key.intensity = lerp(2.3, 3.4, unity);
      if (hasShadowIntensity) key.shadow.intensity = lerp(0.5, 1, unity);
      rim.intensity = lerp(0.35, 0.7, unity);
      lampA.intensity = 6 * unity;
      lampB.intensity = 5 * unity;
    },
  };
}
