# BMW → Bosch photographic particle bridge

The enhancement covers only BMW `.87` through Bosch `.22`. Both chapters
use the existing shared, smoothed absolute scroll clock. `sceneclock` fires
after all native timelines have rendered; `boot.js` normalizes that position
to `[0,1]`. No second scrub, velocity simulation, or independent progress tween
can overtake the photographic scenes during a reversal.

## Files and rebuilding

- `boot.js`: near-range loading, decoded paired samples, native image clones,
  localized headlamp release masks, projection, visibility and fallback.
- `renderer.js`: one Three.js Points draw, immutable source/target UV/RGB
  attributes, GPU release/flight/assembly and passive pointer/touch response.
- `build-points.py`: deterministic, importance-weighted sampling of the two
  existing photographs. Requires Python with Pillow and NumPy for rebuilding
  only. Run `python js/bmw/build-points.py` from the repository root.
- `assets/bmw-bridge/points.js`: 16,000 packed pairs, 14 bytes each before base64.
  Classic script delivery supports the existing `file://` preview without
  image readback, fetch permissions or a new image/model asset.
- `css/bmw-bridge.css`: isolated, pointer-transparent overlay and scoped gate.

Run `node js/build-scenes.mjs` after changing the renderer. It is included in
the existing shared Three.js bundle, not a second copy. Bump the bundle URL in
both existing loaders when deploying a changed build. The only edits to the
portrait/lab loaders for this feature are their cache-version literals.

## Sequence

| Progress | Presentation |
| --- | --- |
| 0–.10 | Original car, restrained headlight lift |
| .10–.40 | Distance-delayed release from both headlamps through the body; points lift away in the same wave, so the car comes apart outward from its lamps |
| .40–.55 | Unequal curved depth folds and forward perspective travel |
| .55–.70 | Trajectories decelerate toward cockpit targets |
| .70–.85 | Bright dashboard structure settles first, then dark surfaces |
| .85–.95 | Settled dots resolve into the unchanged sharp photo |
| .95–1 | Native dashboard presentation, no particle draws |

Photo points use the native scene's settled projection and scaled frame masks,
including mobile height-fit and frame-edge feathering. Bosch's existing screen
boot opacity is copied during the handoff. Its later slate, UI, dashboard zoom,
portrait transition and all subsequent chapters retain their existing logic.

Source pixels disappear through two advancing radial masks, matching the
shader's distance-based release. Particle identity never changes. Flight uses
continuous perspective division with no wrapped coordinates or spinning angles.
Ambient drift and input displacement are bounded and vanish before assembly
completes. The original photos, not particle sampling, determine endpoint
image resolution.

## Budgets and fallbacks

- 16,000 desktop / 7,000 compact / 4,000 low-memory points; capped DPR.
- One geometry and draw, no particle textures or post-processing passes.
- Ambient frames capped at 45/30; scroll and input updates take priority.
- Two sustained-slow-frame quality reductions; idle endpoints/offscreen/hidden
  documents do not run the particle loop.
- Native image animation remains available until initialization succeeds.
- Slow loading during an already-started handoff defers the enhancement until
  the next entry instead of replacing a half-played fallback.
- Initial/runtime rendering errors and context loss retire the overlay and
  restore the native scenes. Reduced motion skips the enhancement entirely.

## Validation

Checkpoint captures and machine-readable reports are saved outside the site
in the task's `bmw-particle-validation` and `bmw-particle-regression` folders.
The browser checks cover 0/10/25/40/55/70/85/95/100%, reverse/rapid/repeated
scrolling, paused motion, pointer/touch input, resizing, direct-file preview,
reduced motion, unavailable/lost WebGL and later chapter regressions.
Emulated phone viewports do not substitute for physical Safari/iOS testing.
