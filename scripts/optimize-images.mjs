// One-off pass to shrink public/images and public/slides in place.
//
// next.config.mjs sets images.unoptimized: true (required for static
// export), so Next never resizes or recompresses these at build time —
// whatever ships in public/ is exactly what browsers download. Several
// source photos were multi-megabyte camera/export originals, which hurts
// LCP and page weight sitewide.
//
// Every file is re-encoded to the SAME path and extension (only the bytes
// change), so no reference in data/catalog.js or elsewhere needs updating.
// Run with: node scripts/optimize-images.mjs
import { readdir, stat, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOTS = ["public/images", "public/slides"];
const MAX_DIMENSION = 1920; // px, longest side — plenty for any on-site display context
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

// A subset-of-files list from a previous run's failures, one relative path
// per line (see FAILED lines in that run's output). When set via
// --retry-list=<path>, only those files are processed instead of walking
// ROOTS fresh.
const retryListArg = process.argv.find((a) => a.startsWith("--retry-list="));

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Windows Defender's ransomware heuristics flag the classic "write a .tmp,
// then rename over the original" pattern when it happens across hundreds of
// files in a row, and holds an EPERM lock on the rename for minutes at a
// time. Writing the re-encoded bytes straight into the original path (no
// second filename, no rename) avoids that pattern; a short retry still
// covers plain AV/indexer scans of the write itself.
async function writeWithRetry(file, buffer, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      await writeFile(file, buffer);
      return;
    } catch (err) {
      if (err.code !== "EPERM" && err.code !== "EBUSY") throw err;
      if (i === attempts - 1) throw err;
      await sleep(500 * (i + 1));
    }
  }
}

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && /\.(jpe?g|png)$/i.test(e.name))
    .map((e) => path.join(e.parentPath ?? e.path, e.name));
}

async function optimizeOne(file) {
  const before = (await stat(file)).size;
  const ext = path.extname(file).toLowerCase();

  let img = sharp(file, { failOn: "none" }).rotate(); // .rotate() with no args bakes in EXIF orientation
  const meta = await img.metadata();

  if (meta.width && meta.height && Math.max(meta.width, meta.height) > MAX_DIMENSION) {
    img = img.resize({
      width: meta.width >= meta.height ? MAX_DIMENSION : undefined,
      height: meta.height > meta.width ? MAX_DIMENSION : undefined,
      withoutEnlargement: true,
    });
  }

  if (ext === ".png") {
    img = img.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true });
  } else {
    img = img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const buffer = await img.toBuffer();

  if (buffer.length < before) {
    await writeWithRetry(file, buffer);
    return { before, after: buffer.length };
  }
  // Re-encode came out bigger (rare, e.g. already-tiny or already-optimized
  // files) — leave the original untouched.
  return { before, after: before };
}

async function main() {
  let files = [];
  if (retryListArg) {
    const listPath = retryListArg.slice("--retry-list=".length);
    const content = await readFile(listPath, "utf8");
    files = content.split("\n").map((l) => l.trim()).filter(Boolean);
  } else {
    for (const root of ROOTS) {
      try {
        files = files.concat(await collectFiles(root));
      } catch (err) {
        if (err.code !== "ENOENT") throw err;
      }
    }
  }

  console.log(`Found ${files.length} images to process.`);
  let totalBefore = 0;
  let totalAfter = 0;
  let done = 0;

  for (const file of files) {
    try {
      const { before, after } = await optimizeOne(file);
      totalBefore += before;
      totalAfter += after;
    } catch (err) {
      console.error(`FAILED: ${file}: ${err.message}`);
    }
    done += 1;
    if (done % 200 === 0 || done === files.length) {
      console.log(`  ${done}/${files.length} processed...`);
    }
  }

  const mb = (n) => (n / 1024 / 1024).toFixed(1);
  console.log(
    `Done. ${mb(totalBefore)} MB -> ${mb(totalAfter)} MB (saved ${mb(totalBefore - totalAfter)} MB, ${(
      (1 - totalAfter / totalBefore) *
      100
    ).toFixed(1)}%)`
  );
}

main();
