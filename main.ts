// Entry for make.fun "Sum up 23 November's world news in one image" (Node 22, standard library only).
//
// The poster is drawn in poster/poster.html (inline SVG, no network) and rendered once to entry.png by
// poster/render.mjs. This program copies that PNG to the output directory.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing: run node poster/render.mjs and commit the result');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
