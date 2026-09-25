# HiWi lab — real-time 3D (chapter 03, scene B)

A miniature university computer lab that is built piece by piece as you scroll,
then switched from a modelling viewport into a lit scene, then walked into.
The whole scene is a pure function of one number, `HiWiLabState.progress`
(0 → 1), which `js/story.js` writes from the scrubbed GSAP timeline — so
scrolling back takes the lab apart again.

## The story it tells (L = lab progress, 0 → 1)

| Stage | L | What you see |
| --- | --- | --- |
| **1 · Blender** | 0 → 0.5 | The room is modelled and assembled: slab, tiles, walls, then furniture drops in. Each piece appears as an amber blocking cage, moves into place and dissolves into its solid form. The ground grid and flat, cool "viewport" lighting stay on; the workstation screen shows Blender. |
| **2 · Unity** | 0.53 → 0.67 | Same room, same objects — only the lighting changes: the grid recedes, a warm key light and real shadows come up, the desk lamps switch on, the colour grade goes from flat to rich, and the workstation screen cross-fades from Blender to the Unity editor. |
| **3 · XR** | 0.72 → 1 | The camera leaves the isometric miniature and walks into the lab, widening its lens as it goes so the model becomes a place. It settles on the central workstation; the viewer's ray reaches the monitor (hover: a fine outline), then picks it (select: the outline firms up, the monitor lifts a hair, the rest of the frame falls back, and a small label names it). |

The captions in `js/story.js` (`buildConsole`) are timed against these windows;
keep the two in step if you retime a stage. The Blender and Unity marks beside
the captions are in `index.html`; the same glyphs (`logos.js`) are painted onto
the monitor screens.

## What runs in the browser

`index.html` loads only `boot.js` (a tiny classic script). When the visitor gets
within a couple of screens of the chapter it injects **`lab.bundle.js`**: the
modules in this folder plus three.js r170, bundled into one classic script. A
classic script (not ES modules) is deliberate: modules cannot be loaded from
`file://`, and the site should work opened straight from disk.

`lab.bundle.js` is a **build artifact — don't edit it**. Edit the sources, then
rebuild.

## Rebuilding after editing the sources

Needs Node. From the site root:

```bash
npm install --no-save three@0.170.0 esbuild
npx esbuild js/lab/lab.js --bundle --minify --format=iife --global-name=HiWiLabBundle \
  --target=es2020 --legal-comments=none \
  --banner:js="/*! HiWi lab — built from js/lab/*.js with esbuild; includes three.js r170 (MIT, Copyright 2010-2024 three.js authors). Do not edit: rebuild from source. */" \
  --outfile=js/lab/lab.bundle.js
```

Then bump the `?v=` on `boot.js` in `index.html` and on `lab.bundle.js` inside
`boot.js`, so browsers fetch the new files.

## Where things are

| File | Job |
| --- | --- |
| `config.js` | palette, room and furniture layout, the **build schedule** (`SCHEDULE`) and the **camera keyframes** (`CAMERA`) — the knobs for timing and framing |
| `timeline.js` | easing and the smooth camera-track curve |
| `kit.js` | `part()`: the amber-cage → solid "modelling" effect every big piece shares; `solid()` for small props |
| `shapes.js` | geometry builders: chairs, monitors, keyboards, headset, plants… (each merged into one mesh) |
| `materials.js` | the material set (matte = cheap Lambert, glossy = PBR + reflections), reflection map, canvas-texture helpers |
| `screens.js`, `logos.js` | everything painted onto a canvas: Blender/Unity/code screens, whiteboard, clock, locker fronts… |
| `components/` | `floor`, `walls`, `desks`, `storage`, `island` (back table), `workstation` (the hero desk), `props`, `interaction` (ray, outline, label), `grid`, `atmosphere` |
| `camera-rig.js`, `lighting.js` | the camera path and lens; the two lightings (viewport → Unity) |
| `post.js` | light bloom, the colour grade, FXAA — built to be cheap on integrated GPUs |
| `lab.js` | renderer, run loop (draws only while on screen), quality tiers, shader warm-up |
