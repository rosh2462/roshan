/* Palette, layout and the build schedule for the HiWi laboratory.
 *
 * All windows below are in lab progress L (0 → 1). The captions that name
 * each stage live in js/story.js (BEATS) and must stay in step with the
 * STAGE windows here.
 *
 * The story has three stages:
 *   1 · Blender   the lab is modelled and assembled (L 0 → 0.5)
 *   2 · Unity     the same room is brought into the engine (0.53 → 0.68):
 *                 the viewport lighting gives way to a lit scene
 *   3 · XR        the camera walks into the lab, and an object is selected
 *                 (0.72 → 1)
 */

export const PALETTE = {
  bg: 0x08090f,
  amber: 0xe8b566,
  champagne: 0xf4cf8e,
  ember: 0xc9713f,
  ice: 0x8fb8ff,
  iceHi: 0xdcebff,
};

// The room is a square cutaway diorama: floor tiles' top surface is y = 0,
// two walls stand at the back (x = -5 and z = -5), the front two sides are
// open so the camera can look in from the +x / +z corner. Units are metres,
// give or take: a desk is 0.75 high, a door 2.1.
export const ROOM = { half: 5, wallH: 3.4, wallT: 0.3 };

// Where things stand. Shared so the components and the camera agree without
// reaching into each other.
export const LAYOUT = {
  // The hero workstation: a table with two monitors, a keyboard, a headset
  // resting on it and two chairs. Its main monitor is what gets selected.
  workstation: [0.9, 0, 0.7],
  tableTop: 0.76,
  // main monitor, relative to the table's centre (x, z)
  monitorRel: [0.35, -0.38],
  // the second table, towards the back wall
  island: [0.9, 0, -2.7],
  // the run of desks along the window wall
  deskX: -4.5,
  deskStations: [-2.7, -0.55, 1.6],
};

// Construction windows are unchanged from the original build. The final four
// are the story after it.
export const SCHEDULE = {
  grid: [0.0, 0.1],
  slab: [0.03, 0.12],
  trim: [0.1, 0.16],
  tiles: [0.08, 0.22],
  rug: [0.2, 0.27],
  wallA: [0.15, 0.25],
  wallB: [0.19, 0.29],
  corner: [0.24, 0.3],
  glazing: [0.27, 0.34],
  desks: [0.24, 0.37],
  storage: [0.28, 0.39],
  island: [0.3, 0.4],
  workstation: [0.33, 0.43],
  props: [0.36, 0.5],

  // stage 2: Blender's viewport becomes a lit Unity scene
  unity: [0.53, 0.67],
  screens: [0.57, 0.63], // the workstation's screen swaps Blender → Unity

  // stage 3: walk in, then select
  approach: [0.72, 0.9],
  hover: [0.89, 0.93],
  select: [0.93, 0.97],
  preview: [0.935, 0.975], // the selected monitor powers on into NeuroMaze
};

// The camera: a narrow lens far away, so parallel edges stay near-parallel
// (the isometric look) while still keeping a little real depth. Distances are
// multiples of the distance that frames the whole room, and are blended in
// log space so an approach feels evenly paced. Up to L = 0.5 these are the
// original construction keys; after that the camera holds the overview
// through the Unity switch, then walks into the room and widens its lens —
// the miniature becomes an environment you are standing in.
export const CAMERA = {
  // [L, value] keyframes — see track() in timeline.js.
  fov: [[0, 22], [0.5, 22], [0.7, 22], [0.9, 40], [1, 42]],
  az: [[0, 64], [0.22, 55], [0.5, 45], [0.7, 47], [0.82, 28], [0.9, 12], [1, 8]],
  el: [[0, 46], [0.25, 38], [0.5, 33], [0.7, 31], [0.82, 24], [0.9, 15], [1, 13]],
  dist: [[0, 1.22], [0.25, 1.1], [0.5, 1.0], [0.7, 0.97], [0.82, 0.33], [0.9, 0.085], [1, 0.075]],
  tx: [[0, 0], [0.5, 0], [0.7, 0], [0.82, 0.8], [0.9, 1.15], [1, 1.2]],
  ty: [[0, 0.4], [0.3, 1.1], [0.5, 1.3], [0.7, 1.3], [0.9, 1.3], [1, 1.3]],
  tz: [[0, 0], [0.5, 0], [0.7, 0], [0.82, 0.4], [0.9, 0.35], [1, 0.35]],
};
