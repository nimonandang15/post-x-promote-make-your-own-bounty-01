// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
// (Node 22, standard library only). The entry is the post itself: one post of
// the entrant's own on X quoting make.fun's post
// (https://x.com/makefunai/status/2124915864336236646) or linking to it, with
// a photo of its own attached, make.fun or the @makefunai tag and the play
// code in its text. This program copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all it has to do:
// nothing this program writes about the post is scored; the house reads the
// post itself from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// POST.json must be a JSON object of at most 16384 bytes naming a real post:
// the placeholder address the repo ships with is refused, so a submission
// built before the post exists fails loudly here instead of silently.
const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
if (Buffer.byteLength(raw, 'utf8') > 16384) {
  console.error('POST.json is over the 16384-byte cap');
  process.exit(1);
}
const post = JSON.parse(raw) as { url?: unknown };
if (
  typeof post !== 'object' ||
  post === null ||
  typeof post.url !== 'string' ||
  !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(post.url)
) {
  console.error('POST.json does not name a real X post yet (placeholder?)');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
