"use client";

import { useState } from "react";
import Image from "next/image";

// Wraps next/image with a runtime fallback for when `src` 404s or fails
// to load — not just when it's missing entirely. This matters while
// product photos are being swapped in incrementally: a catalog.js entry
// can point at a real filename that simply isn't in
// /public/images/products/ yet, and a plain <Image> would just render a
// broken-image icon in that case. This catches that and swaps to
// `fallback` (typically an IconTile) instead, same as if no src had
// been set at all.
export default function ImageWithFallback({ src, alt, fallback, className, sizes, fill = true }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return fallback;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}