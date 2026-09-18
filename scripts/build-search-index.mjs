// Generates public/search-index.json at build time — a small, client-safe
// slice of data/catalog.js (name/path/description/grades only) for the
// on-site product search. Runs via the "prebuild"/"predev" npm hooks so it
// always exists before Next.js starts, and stays in sync with catalog.js
// automatically on every build.
//
// This has to be a build-time artifact, not something the browser derives
// from catalog.js directly: catalog.js is ~12MB of scraped spec data, and
// importing it from a "use client" component would ship that whole file
// to every visitor just to power a search box.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { catalog, flattenCatalog } = await import("../data/catalog.js");

const index = flattenCatalog(catalog).map(({ node, path: p }) => ({
  n: node.name,
  p: p.join("/"),
  d: node.description ? node.description.slice(0, 160) : "",
  g: node.grades || [],
}));

const outPath = path.join(__dirname, "..", "public", "search-index.json");
fs.writeFileSync(outPath, JSON.stringify(index));
console.log(
  `search-index.json: ${index.length} entries, ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`
);
