// Manually-curated representative photos for each top-level catalog
// category. Top-level nodes are organisational groupings (Pipe & Tube,
// Flanges, etc.) rather than individual products, so they don't have
// their own hero_image/image the way a leaf product does — these stand
// in for them. Shared by the homepage's ProductShowcase and the About
// page's catalogue showcase so both stay in sync from one source.
export const categoryImages = {
  "pipe-and-tube": "/images/ashtapad/ss-310-seamless-pipe.jpg",
  "pipe-fittings": "/images/ashtapad/1-1-4-stainless-steel-pipe-fittings.jpg",
  flanges: "/images/ashtapad/304-stainless-steel-flange.jpg",
  "sheet-and-plate": "/images/ashtapad/0.5-mm-stainless-steel-sheet.jpg",
  "round-bars": "/images/ashtapad/825-inconel-round-bar.jpg",
};

// Single shared fallback photo shown when a specific image is missing or
// hasn't been uploaded yet, before finally dropping to the icon tile.
export const GENERIC_FALLBACK_IMAGE = "/images/fall-back.png";