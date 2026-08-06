"use client";

import Image from "next/image";

// Wraps next/image with the save-deterrents used for certificate images
// site-wide: no right-click / long-press save menu, no drag-to-save, and a
// transparent hit-layer so those attempts land on this wrapper rather than
// the <img> itself. This is a deterrent for casual saving, not a security
// boundary — anyone can still screenshot a page they can see. Needs
// "use client" because event handlers can't be passed as props from a
// Server Component, which is why this is split out rather than added
// directly in CertificateShowcase.js (a Server Component).
export default function ProtectedImage({ wrapperClassName, ...imageProps }) {
  return (
    <div
      className={`no-save relative ${wrapperClassName || ""}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Image {...imageProps} draggable={false} onDragStart={(e) => e.preventDefault()} />
      <div className="absolute inset-0" aria-hidden="true" />
    </div>
  );
}
