import * as THREE from 'three';
import { CAMERA, SCHEDULE } from './config.js';
import { track, seg, smooth } from './timeline.js';

/* The camera is a pure function of L: it orbits, dollies, changes its lens
 * and re-aims along keyframed tracks, so it too runs backwards when the
 * visitor scrolls up.
 *
 * Up to the end of construction it is the original camera — a narrow lens far
 * away, the isometric miniature. In the last stage it walks into the room:
 * it drops toward eye level, swings round to face the workstation and widens
 * its lens from a long isometric one to a natural one, so the model you were
 * looking at becomes a place you are standing in. Distances are blended in
 * log space, so the approach feels evenly paced from far away to close up.
 *
 * Framing adapts to the viewport. A wide screen is limited by height (the
 * title above and caption below take their share); a portrait phone is
 * limited by width, so the diorama is cropped in a little instead of
 * shrinking to a postage stamp. */

const BASE_FOV = CAMERA.fov[0][1]; // the lens the room is framed with
const tracks = {
  fov: track(CAMERA.fov),
  az: track(CAMERA.az),
  el: track(CAMERA.el),
  logDist: track(CAMERA.dist.map(([l, v]) => [l, Math.log(v)])),
  tx: track(CAMERA.tx),
  ty: track(CAMERA.ty),
  tz: track(CAMERA.tz),
};

const RAD = Math.PI / 180;

export function createCameraRig() {
  const camera = new THREE.PerspectiveCamera(BASE_FOV, 1, 0.5, 160);
  let fitDistance = 40;
  let portrait = false;

  // The distance at which the whole room sits comfortably between the title
  // and the caption. `rv` / `rh` are the half-extents (in world units) that
  // must fit vertically / horizontally.
  function resize(width, height) {
    const aspect = width / Math.max(1, height);
    camera.aspect = aspect;
    portrait = aspect < 0.9;
    const t = Math.tan((BASE_FOV * RAD) / 2);
    const rv = portrait ? 8.8 : 9.25;
    const rh = portrait ? 7.5 : 9.2;
    fitDistance = Math.max(rv / t, rh / (t * aspect));
    // The title sits above the scene and the caption below it; the caption
    // is the lighter of the two, so the room rides a little low in frame.
    camera.setViewOffset(width, height, 0, -Math.round(height * (portrait ? 0.01 : 0.075)), width, height);
    camera.updateProjectionMatrix();
  }

  const target = new THREE.Vector3();
  let lastFov = -1;

  function update(L) {
    const az = tracks.az(L) * RAD;
    const el = tracks.el(L) * RAD;
    const dist = Math.exp(tracks.logDist(L)) * fitDistance;
    target.set(tracks.tx(L), tracks.ty(L), tracks.tz(L));
    camera.position.set(
      target.x + dist * Math.cos(el) * Math.sin(az),
      target.y + dist * Math.sin(el),
      target.z + dist * Math.cos(el) * Math.cos(az),
    );

    // While walking, a trace of the way a head moves — a fraction of a
    // hand-span, gone before the camera stops.
    const walk = smooth(seg(L, ...SCHEDULE.approach)) * (1 - smooth(seg(L, SCHEDULE.approach[1] - 0.03, SCHEDULE.approach[1] + 0.02)));
    camera.position.y += (portrait ? 0 : 0.015) * walk * Math.sin(L * 260);

    camera.lookAt(target);

    // Portrait screens are narrow; a wider lens keeps the workstation in frame.
    const fov = tracks.fov(L) * (portrait ? 1 + 0.25 * seg(L, ...SCHEDULE.approach) : 1);
    if (Math.abs(fov - lastFov) > 0.01) {
      lastFov = fov;
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
    camera.updateMatrixWorld();
  }

  return { camera, resize, update };
}
