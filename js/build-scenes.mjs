import { build } from 'esbuild';

await build({
  entryPoints: ['js/scene-3d.js'],
  outfile: 'js/lab/lab.bundle.js',
  bundle: true,
  minify: true,
  format: 'iife',
  globalName: 'HiWiLabBundle',
  target: 'es2020',
  legalComments: 'none',
  banner: { js: '/*! Lab and portrait — built from js/scene-3d.js; includes Three.js r170 (MIT, Copyright 2010-2024 Three.js authors). Do not edit: rebuild from source. */' },
});
