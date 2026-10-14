# Living galaxy and original portrait

The renderer draws **particles only**. A curved Milky Way of white and subtle
Bosch-red stars appears inside the dashboard glass, grows into the viewport,
gathers into the photographed face in natural colors, then dissolves into the
original sharp 2D photo. It has no portrait mesh, model rotation, texture fetch,
extra glow layer, bloom, shadows, or post-processing.

The dashboard camera and face formation remain scroll-controlled. Slow ambient
flow and subdued twinkling keep the incomplete field alive when scrolling stops.
Mouse or touch movement gently stirs nearby points; they return to formation
after input ends. All decorative offsets vanish exactly by progress 0.90.

## Integration

```js
const state = {
  progress: 0,       // 0–.58: stars; .58–.90: assemble; .90–.94: settled dots; .94–1: photo
  visible: false,
  interactive: false,
  photoOpacity: 0,   // root sets the original DOM image to the same opacity
  frame: { x: 0, y: 84, width: innerWidth, height: innerHeight - 100 },
  portal: null,     // or { x, y, width, height, mix: 0 }
  viewport: { width: innerWidth, height: innerHeight }, // optional
};

const portrait = startPortrait({
  canvas,                          // fixed transparent canvas; pointer-events:none
  container: canvas.parentElement, // full viewport container
  state,
  portraitData: loadPortraitAsset({ signal }),
  onError: showOriginalPhoto,
});
await portrait.ready;
```

The root timeline opens the portal after Bosch details clear, while the dashboard
camera continues moving. During Bosch progress .885–.99 the stars advance from
0 to .22. Beyond progress 0–.235 then advances them from .22 to 1. The boot layer
clips the canvas to the measured dashboard glass during the approach, then lets
the field occupy the whole viewport. There is no whole-scene fade or black hold.

Both chapters now seek their existing timelines from one GSAP-smoothed absolute
scroll position. Their individual ScrollTriggers measure ranges but do not run
separate scrub tweens, so a fast forward or reverse flick cannot unlock an
already-advanced portrait at the dashboard boundary. Scene geometry is
invalidated and remeasured on refresh; responsive rebuilds unregister old scenes.
The boot logo is cleared beneath the opaque work interface, and rendered-camera
visibility gates retire the Bosch surfaces until scrolling back into Chapter 2.

Call `portrait.update()` after changing the state. When `portal` is present,
stars use its pixel dimensions and center; optional `mix` blends that rectangle
toward the full viewport. Passing null restores full-viewport framing. A sparse
18% of stars fades in inside the lower glass before the main 82% Milky Way rises
from below it. All seeds persist through the reveal; stars are never reseeded.

The final face area comes from `frame`, in CSS pixels relative to the canvas.
The point shader and the original photo use the same frontal fit:

```js
const halfHeight = Math.max(bounds.size.y, bounds.size.x / (frame.width / frame.height)) * 0.55;
const scale = frame.height / (2 * halfHeight);
const center = { x: frame.x + frame.width / 2, y: frame.y + frame.height / 2 };
```

Validated asset bounds take precedence over measured vertex bounds, keeping this
fit stable as the foreground contour is refined. The asset also supplies the
original-photo source crop and presentation metadata for the DOM image.
The starfield stays fully scattered until progress 0.58. Gathering then uses a
0.265 progress span with no more than 0.055 of seeded stagger. Natural photo
colors appear only after an individual point is more than 65% assembled,
keeping early gathering abstract instead of revealing facial features at once.
The portal already hands over at progress 0.22, so this leaves a much longer
living-field phase without lengthening the chapter or changing the lab pacing.

At progress 0.90 every target is exactly flat and settled. Hold these colored
dots through 0.94, then start `photoOpacity` over the remaining 0.06. Dots fade by
`1 - photoOpacity`. At opacity 1 the renderer clears once and sleeps while the
native-resolution photo remains visible and sharp. Motion and interaction still
end at 0.90, so the settled-dot hold and image dissolve never disturb the face.

## Motion and interaction

- Ambient motion is a coherent, restrained shader curl of at most 6 CSS pixels,
  plus subtle twinkling. It fades as features assemble and is zero at .90.
- Passive window PointerEvents respond to mouse/pen/touch. Passive TouchEvents
  retain the response after browsers cancel PointerEvents for native panning.
  There is no pointer capture, scroll prevention, touch-action override, model
  rotation, keyboard handler, or extra interaction layer.
- Navigation, links, buttons, inputs, editable content, and other controls are
  ignored. Set `state.interactive=false` to disable stirring.
- Nearby points move outward with a small tangential flow. Total local movement
  stays gentle, with roughly .2 seconds of follow and .7 seconds of release.
  Stationary mouse input also releases automatically.
- The scroll formation uses fixed seeds. Ambient motion runs on a separate
  active-time clock, which freezes when hidden. Reversing scroll restores the
  formation continuously; final targets and the original photo remain exact.
- Reduced-motion preferences disable ambient movement and interaction. The
  root boot layer also retains its static-photo reduced-motion path.

## Performance and lifecycle

- 12,000 desktop points, 5,500 on phones/coarse pointers, 3,500 on devices
  reporting 2 GB of memory or less. The original immutable portrait geometry and optional static text geometry
  use at most two draw calls; the renderer has zero textures.
- Ambient rendering is capped at 30 FPS on phones and 45 FPS on stronger desktop
  devices. Scroll/input invalidations take priority and render their latest
  state on the next browser frame.
- Pixel ratio is capped at 1.5 desktop and 1.25 mobile. Sustained slow frames can
  reduce point count and resolution twice per session. Intended ambient frame
  throttling does not count as dropped frames.
- Shaders and static buffers are warmed once at zero opacity before `ready`.
  No asset or geometry is generated in the render loop; CPU work per frame is
  limited to a few scalar/vector uniforms and at most two draws.
- Hidden/offscreen scenes and hidden documents cancel pending frames. Completed
  photos have no animation loop. A ResizeObserver adapts framing without adding
  a WebGL context.
- `resize()` refits the canvas. `stats()` reports phase, motion time/activity,
  pointer strength, frame budget, progress, point count, draw calls, and memory.
- `dispose()` releases GPU buffers/context, observers, and every input/media
  listener. Asset validation or WebGL errors reject `ready` for the sharp-photo
  fallback.

## Asset contract

`loadPortraitAsset()` returns positions, original sRGB colors, triangle indices,
and declared bounds. The renderer samples the photographed foreground once,
converts colors to linear working space, and flattens the final positions to Z=0.
UVs and texture URLs in the shared asset are ignored. The final section displays
the unchanged 2D photograph rather than a generated or rotatable model.


## Text assembly and chapter follow-through

`sampleTextTargets([headline, support, current, next], { maxPoints })` waits for
fonts and samples DOM glyphs once after layout. It uses character Ranges for
native line wrapping, kerning and letter spacing, preserves inline strong colors
and weights, and ignores decoration elements without visible text. Timeline
visibility/opacity does not prevent sampling. The sampler uploads no canvas or
texture; its result is a static position/color/group buffer, capped at 4,000
points on desktop and 1,800 on compact or low-quality devices. `stats().textBudget`
provides the renderer's current device cap.

```js
const targets = await sampleTextTargets([headline, support, current, next], {
  maxPoints: portrait.stats().textBudget,
});
await portrait.setTextTargets(targets);
state.textEnabled = true;
state.textProgress = [0, 0, 0]; // each group's own normalized formation
state.textOpacity = [0, 0, 0];  // identical native DOM handoff alpha
state.textOffsets = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}];
state.exitProgress = 0;
state.exitTarget = {x: innerWidth / 2, y: innerHeight * .61};
state.workActive = false;
state.workProgress = 0;
state.workOpacity = 0;
state.workOrigin = {x: 0, y: 0, width: 300, height: 180};
state.workOffset = {x: 0, y: 0};
portrait.update();
```

Offsets are each element's current top-left viewport coordinates. Positions and
release normalization use its entire element box, not a tight glyph outline.
Root layout removes intro transforms before sampling. Re-sample only after a
font/layout/media change; `setTextTargets` compiles separately from the live scene
and disposes replaced buffers. Its generation guard prevents late resize work
from replacing newer targets. Set `textEnabled=false` if sampling fails or while
native text fallback is restored; stale text buffers then never draw.

The root gives the intro headline, support and current copy their individual
formation ranges (.12–.235, .14–.255 and .16–.275 of Beyond), fading to the original
sharp DOM glyphs near each endpoint. Their scroll paths and seeds are fixed.
Decorative flow and stirring fade to zero on each assembled glyph endpoint.
The original DOM remains selectable and accessible throughout.

The departure into the university lab is a scene change, not a particle
release: js/face/boot.js keeps `exitProgress=0`. From Beyond .405 the three copy
lines leave in turn (each rises 14px as it fades, via `--portrait-line-alpha`
and `--portrait-line-lift`), then from .41 to .445 the portrait's light goes
down as it recedes to 96.5% scale. After a short beat of darkness the lab fades
up from .44 (js/story.js). The renderer still supports `exitProgress` (a
right-to-left release toward `exitTarget`) but the site no longer uses it.

Root `visible=false` hides and sleeps the canvas during the middle university
lab. At the existing monitor zoom, `workActive=true` reuses only 280–480 original
portrait points as a subtle white stream; the text buffer's group 3 assembles
from `workOrigin` into the next heading. Desktop samples the first NeuroMaze
project title; compact screens sample the existing Creative works heading.
`workProgress` and `workOpacity` drive formation and native sharp-text handoff;
`workOffset` tracks that heading without generating new glyphs. Completed native
photo/copy, the hidden middle lab, and completed Works heading all clear once and
sleep. Forward/reverse scrolling uses the same immutable points and paths.
