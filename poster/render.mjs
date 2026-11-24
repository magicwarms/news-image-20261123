// Renders poster/poster.html to ../entry.png with headless Chrome, then checks the gate limits.
// Run once after editing the poster: node poster/render.mjs
// main.ts only copies the PNG this script writes, so the grader never needs a browser.

import { spawnSync } from 'node:child_process';
import { readFileSync, statSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const MAX_BYTES = 1_048_576;
const MAX_SIDE = 1024;

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const page = pathToFileURL(join(here, 'poster.html')).href;
const target = join(root, 'entry.png');

const chrome =
  process.env.CHROME_PATH ??
  ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', '/usr/bin/google-chrome', '/usr/bin/chromium'].find(existsSync);
if (!chrome) throw new Error('Chrome not found, set CHROME_PATH');

if (existsSync(target)) rmSync(target);

const run = spawnSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--force-color-profile=srgb',
    '--window-size=1024,1024',
    `--screenshot=${target}`,
    page,
  ],
  { stdio: 'inherit', timeout: 60_000 },
);
if (run.status !== 0 || !existsSync(target)) throw new Error(`Chrome failed (status ${run.status})`);

const png = readFileSync(target);
const signature = png.subarray(0, 8).toString('hex');
if (signature !== '89504e470d0a1a0a') throw new Error('entry.png is not a PNG');
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
const bytes = statSync(target).size;

console.log(`entry.png ${width}x${height}px, ${bytes} bytes`);
if (width > MAX_SIDE || height > MAX_SIDE) throw new Error('image is larger than 1024 px on a side');
if (bytes > MAX_BYTES) throw new Error('image is larger than 1,048,576 bytes');
