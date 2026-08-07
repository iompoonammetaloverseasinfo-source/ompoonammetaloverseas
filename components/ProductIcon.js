"use client";

import { useId } from "react";

// Original line-art icon set for the product catalogue — simplified
// engineering/P&ID-style symbols (the same convention used on real
// piping drawings for valves and fittings), not photography. This keeps
// every icon copyright-safe and on-brand with the site's "spec sheet"
// visual language. Swap in a real product photo any time by setting an
// `image` field on a catalog node — see data/catalog.js.
//
// Rendered with a brushed-brass gradient stroke + soft shadow so it reads
// as a considered product graphic rather than a flat outline icon.

const paths = {
  pipe: (
    <>
      <rect x="6" y="18" width="36" height="12" rx="1" />
      <ellipse cx="6" cy="24" rx="2.2" ry="6" />
      <ellipse cx="42" cy="24" rx="2.2" ry="6" />
    </>
  ),
  "tube-square": (
    <>
      <rect x="8" y="14" width="32" height="20" rx="1" />
      <rect x="13" y="19" width="22" height="10" rx="0.5" />
    </>
  ),
  elbow: (
    <>
      <path d="M14 8v14a10 10 0 0 0 10 10h14" />
      <path d="M8 8h12v8" />
      <path d="M30 26v12h-8" />
    </>
  ),
  tee: (
    <>
      <path d="M8 18h32" />
      <path d="M24 18v20" />
      <rect x="6" y="14" width="8" height="8" />
      <rect x="34" y="14" width="8" height="8" />
      <rect x="20" y="34" width="8" height="8" />
    </>
  ),
  reducer: (
    <>
      <path d="M6 16h12l18 6v10l-18 6H6" />
      <path d="M18 16v22" />
    </>
  ),
  cap: (
    <>
      <path d="M8 10v28" />
      <path d="M8 10h14a14 14 0 0 1 14 14 14 14 0 0 1-14 14H8" />
    </>
  ),
  "stub-end": (
    <>
      <rect x="6" y="19" width="20" height="10" />
      <path d="M26 14v20l14-4V18Z" />
    </>
  ),
  coupling: (
    <>
      <rect x="4" y="19" width="12" height="10" />
      <rect x="16" y="15" width="16" height="18" rx="1" />
      <rect x="32" y="19" width="12" height="10" />
    </>
  ),
  flange: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="7" />
      <circle cx="24" cy="9" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="24" cy="39" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="9" cy="24" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="39" cy="24" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="13" cy="13" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="35" cy="35" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="35" cy="13" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="13" cy="35" r="1.8" fill="currentColor" stroke="none" />
    </>
  ),
  "ball-valve": (
    <>
      <path d="M6 24 20 14v20Z" />
      <path d="M42 24 28 14v20Z" />
      <circle cx="24" cy="24" r="6.5" />
      <path d="M24 6v6M24 36v6" />
    </>
  ),
  "gate-valve": (
    <>
      <path d="M6 24 20 14v20Z" />
      <path d="M42 24 28 14v20Z" />
      <rect x="19" y="18" width="10" height="12" />
      <path d="M24 18V6" />
      <rect x="19" y="2" width="10" height="5" />
    </>
  ),
  "globe-valve": (
    <>
      <path d="M6 24 20 17v14Z" />
      <path d="M42 24 28 17v14Z" />
      <circle cx="24" cy="21" r="9" />
      <path d="M24 12V5" />
      <rect x="19" y="1" width="10" height="5" />
    </>
  ),
  "check-valve": (
    <>
      <path d="M6 24 20 14v20Z" />
      <path d="M42 24 28 14v20Z" />
      <path d="M18 24h12M25 19l5 5-5 5" />
    </>
  ),
  "butterfly-valve": (
    <>
      <circle cx="24" cy="24" r="15" />
      <ellipse cx="24" cy="24" rx="4.5" ry="15" />
      <path d="M24 3v6M24 39v6" />
    </>
  ),
  "three-way-valve": (
    <>
      <path d="M8 24h11M29 24h11" />
      <path d="M24 24v13" />
      <circle cx="24" cy="24" r="7" />
      <path d="M24 31v8" />
    </>
  ),
  "needle-valve": (
    <>
      <path d="M6 24 20 17v14Z" />
      <path d="M42 24 28 17v14Z" />
      <path d="M24 24 30 6" />
      <path d="M18 24h6" />
    </>
  ),
  bolt: (
    <>
      <path d="M17 6h14l4 7-4 7H17l-4-7Z" />
      <path d="M24 20v22" />
      <path d="M20 26l4-3 4 3M20 32l4-3 4 3M20 38l4-3 4 3" />
    </>
  ),
  nut: (
    <>
      <path d="M17 6h14l4 7-4 7H17l-4-7Z" />
      <circle cx="24" cy="13" r="4.5" />
    </>
  ),
  washer: (
    <>
      <circle cx="24" cy="24" r="15" />
      <circle cx="24" cy="24" r="6.5" />
    </>
  ),
  stud: (
    <>
      <path d="M12 24h24" />
      <path d="M10 19l4 5-4 5M16 19l4 5-4 5M32 19l4 5-4 5M38 19l4 5-4 5" />
    </>
  ),
  screw: (
    <>
      <circle cx="24" cy="12" r="8" />
      <path d="M18 12h12" />
      <path d="M24 20v22" />
      <path d="M20 26l4-3 4 3M20 32l4-3 4 3M20 38l4-3 4 3" />
    </>
  ),
  "u-bolt": (
    <>
      <path d="M13 6v20a11 11 0 0 0 22 0V6" />
      <path d="M8 6h10M30 6h10" />
    </>
  ),
  sheet: (
    <>
      <rect x="6" y="20" width="30" height="20" />
      <path d="M6 20l6-8h30l-6 8" />
      <path d="M36 40l6-8V12" />
    </>
  ),
  strip: <rect x="5" y="19" width="38" height="10" rx="1" />,
  coil: (
    <>
      <path d="M8 24a16 9 0 1 0 32 0 16 9 0 1 0-32 0" />
      <path d="M14 24a10 5.5 0 1 0 20 0 10 5.5 0 1 0-20 0" />
      <path d="M20 24a4 2.2 0 1 0 8 0 4 2.2 0 1 0-8 0" />
    </>
  ),
  "circle-blank": <circle cx="24" cy="24" r="16" />,
  "round-bar": (
    <>
      <circle cx="24" cy="24" r="9" />
      <path d="M24 4v5M24 35v9M4 24h5M35 24h9" strokeDasharray="1 5" />
    </>
  ),
  flat: <rect x="4" y="20" width="40" height="8" rx="1" />,
  angle: <path d="M10 6v32h32M10 6h6v26h26v6" />,
  "i-beam": (
    <>
      <path d="M10 6h28M10 42h28M24 6v36" />
      <path d="M10 6v6M38 6v6M10 36v6M38 36v6" />
    </>
  ),
  hardware: (
    <>
      <path d="M31 8a9 9 0 0 0-11.5 11.5L8 31v6h6l1.5-1.5" />
      <path d="M17 20l2 2" />
      <circle cx="33" cy="15" r="1.8" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function ProductIcon({ type, className, tone = "brass" }) {
  const uid = useId();
  const gradId = `pi-grad-${uid}`;
  const path = paths[type] || paths["circle-blank"];

  const stops =
    tone === "brass"
      ? ["#EACF8C", "#B8872E", "#78561B"]
      : ["#8D94A1", "#4A505E", "#262A34"];

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={`url(#${gradId})`}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: stops[1] }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={stops[0]} />
          <stop offset="55%" stopColor={stops[1]} />
          <stop offset="100%" stopColor={stops[2]} />
        </linearGradient>
      </defs>
      {path}
    </svg>
  );
}
