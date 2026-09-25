import * as THREE from 'three';
import { PALETTE, SCHEDULE } from '../config.js';
import { seg, smooth, lerp } from '../timeline.js';

/* The empty stage before there is a lab: an infinite-feeling ground grid
 * with the two world axes picked out, the way a Blender or Unity viewport
 * greets you. It draws outward from the origin, then recedes to a quiet
 * backdrop once there is a floor to stand on. */
export function createGrid() {
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uOpacity: { value: 0 },
      uReveal: { value: 0 },
      uColor: { value: new THREE.Color(PALETTE.amber) },
    },
    vertexShader: /* glsl */ `
      varying vec2 vXZ;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vXZ = w.xz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      varying vec2 vXZ;
      uniform float uOpacity;
      uniform float uReveal;
      uniform vec3 uColor;

      // 1 on a grid line of the given spacing, antialiased by screen-space
      // derivative so the lines stay a crisp pixel wide at any distance.
      float lines(vec2 p, float spacing) {
        vec2 q = p / spacing;
        vec2 g = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec2(1e-4));
        return 1.0 - min(min(g.x, g.y), 1.0);
      }

      void main() {
        float d = length(vXZ);
        float minor = lines(vXZ, 1.0);
        float major = lines(vXZ, 5.0);
        float axX = 1.0 - min(abs(vXZ.y) / max(fwidth(vXZ.y), 1e-4), 1.0);
        float axZ = 1.0 - min(abs(vXZ.x) / max(fwidth(vXZ.x), 1e-4), 1.0);

        float fade = 1.0 - smoothstep(4.0, 34.0, d);
        float reveal = 1.0 - smoothstep(uReveal - 5.0, uReveal, d);

        vec3 col = uColor;
        col = mix(col, vec3(0.86, 0.34, 0.24), axX);
        col = mix(col, vec3(0.42, 0.62, 1.0), axZ);
        float a = max(max(minor * 0.09, major * 0.24), max(axX, axZ) * 0.55);
        gl_FragColor = vec4(col, a * fade * reveal * uOpacity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = -0.62;
  mesh.renderOrder = -1;
  mesh.frustumCulled = false;

  return {
    group: mesh,
    update(L) {
      material.uniforms.uReveal.value = lerp(0, 60, smooth(seg(L, ...SCHEDULE.grid)));
      // Bright while it's all there is, quieter once there is a floor, and
      // gone when the scene becomes a lit Unity one — the modelling viewport's
      // grid has no place in the engine.
      const quiet = lerp(1, 0.22, smooth(seg(L, 0.14, 0.3)));
      material.uniforms.uOpacity.value = quiet * (1 - smooth(seg(L, ...SCHEDULE.unity)));
    },
  };
}
