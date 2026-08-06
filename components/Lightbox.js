"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-graphite-950/90 p-4 pt-20 sm:p-8 sm:pt-24"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-4 top-4 z-[101] flex h-11 w-11 items-center justify-center bg-graphite-800 text-paper sm:right-6 sm:top-6"
      >
        <X className="h-6 w-6" />
      </button>
      <div
        className="relative w-full max-w-2xl bg-paper p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="no-save relative"
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
            sizes="(min-width: 640px) 640px, 100vw"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
          {/* Transparent hit-layer above the image: catches right-click,
              long-press and drag attempts without depending on the <img>
              itself receiving the event (see .no-save in globals.css). */}
          <div className="absolute inset-0" aria-hidden="true" />
        </div>
        <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-wider text-graphite-400">
          For verification only — contact us for an official copy
        </p>
      </div>
    </div>
  );
}
