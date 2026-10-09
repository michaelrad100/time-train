// Builds trims.js from SponsorBlock (sponsor.ajay.app), the crowd-sourced list of sponsor reads, "subscribe" asks and outros on YouTube.
// Run from the repo root: node tools/make-trims.js   (about 2 minutes; one request per video, spaced out politely)
const fs = require("fs");
global.window = {};
require(process.cwd() + "/videos.js");

const CUT = ["sponsor", "selfpromo", "interaction", "outro"];   // never the content itself, so safe to stop before or jump over
const secs = (len) => len.split(":").reduce((t, n) => t * 60 + +n, 0);
const round = (t) => Math.round(t * 10) / 10;

function plan(segs, len) {
  // Skip-type segments in our categories that other users haven't voted down.
  segs = segs.filter(s => s.actionType === "skip" && CUT.includes(s.category) && (s.votes >= 0 || s.locked)).map(s => s.segment).sort((a, b) => a[0] - b[0]);
  const dur = len;
  // Walk back from the end through touching segments: the content ends where the first of them starts.
  let end = dur, moved = true;
  while (moved) {
    moved = false;
    for (const [a, b] of segs) if (b >= end - 3 && a < end - 0.5) { end = a; moved = true; }
  }
  const out = {};
  if (dur - end >= 3 && end >= dur * 0.5) out.end = round(end);
  const skip = segs.filter(([a, b]) => b < (out.end ?? dur) - 3 && b - a >= 2 && a > 1).map(([a, b]) => [round(a), round(b)]);
  if (skip.length) out.skip = skip;
  return out;
}

(async () => {
  const vids = [];
  for (const r of window.STOPS) for (const v of [r[3], r[4], r[6]]) if (v) vids.push(v);
  const cats = encodeURIComponent(JSON.stringify(CUT));
  const trims = {};
  for (const v of vids) {
    const r = await fetch(`https://sponsor.ajay.app/api/skipSegments?videoID=${v[0]}&categories=${cats}`);
    if (r.status === 200) { const t = plan(await r.json(), secs(v[3])); if (Object.keys(t).length) trims[v[0]] = t; }
    else if (r.status !== 404) console.error(v[0], r.status);
    await new Promise(res => setTimeout(res, 250));
  }
  const lines = Object.entries(trims).map(([id, t]) => `  "${id}": ${JSON.stringify(t)},`);
  fs.writeFileSync("trims.js",
    `// Where each video's real content ends (end) and stretches to jump over mid-video (skip), in seconds, so the train stops before\n` +
    `// "please subscribe" outros and skips sponsor reads. From SponsorBlock's crowd-sourced segments; rebuild with: node tools/make-trims.js\n` +
    `// Built ${new Date().toISOString().slice(0, 10)}. Videos with no entry play to the end.\n` +
    `window.TRIMS = {\n${lines.join("\n")}\n};\n`);
  console.log(`trims for ${lines.length} of ${vids.length} videos`);
})();
