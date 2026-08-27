"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import ImageWithFallback from "./ImageWithFallback";
import IconTile from "./IconTile";

// Responsive thumbnail grid that opens into a full-screen lightbox on
// click, with carousel arrows/keyboard nav when there's more than one
// image. The lightbox uses a plain <img> rather than next/image, since
// its whole point is "as large as the viewport allows while keeping
// aspect ratio" for an image of unknown dimensions — next/image's `fill`
// mode needs a container with known dimensions ahead of time, which
// doesn't fit this case.
export default function Gallery({ images, nodeName, icon }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxError, setLightboxError] = useState(false);
  const isOpen = lightboxIndex !== null;

  const close = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setLightboxIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    setLightboxError(false);
  }, [lightboxIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && images.length > 1) showPrev();
      if (e.key === "ArrowRight" && images.length > 1) showNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length]);

  const active = isOpen ? images[lightboxIndex] : null;

  return (
    <section className="section bg-paper">
      <div className="wrap max-w-5xl">
        <SectionHeading eyebrow="Gallery" title={`${nodeName} in Detail`} />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.url || i} delay={Math.min(i, 6) * 0.03}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative block aspect-square w-full overflow-hidden border border-graphite-100 bg-mist-50"
                aria-label={`View ${img.alt || img.caption || nodeName} full size`}
              >
                <ImageWithFallback
                  src={img.url}
                  alt={img.alt || img.caption || nodeName}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center">
                      <IconTile type={icon} size="md" />
                    </div>
                  }
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-graphite-950/95 p-4 sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${nodeName} image ${lightboxIndex + 1} of ${images.length}`}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:right-6 sm:top-6"
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:left-6"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:right-6"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative flex max-h-full max-w-full flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {lightboxError ? (
                  <div className="flex h-64 w-64 flex-col items-center justify-center gap-3 border border-graphite-700 text-graphite-400">
                    <IconTile type={icon} size="md" />
                    <p className="text-sm">Image unavailable</p>
                  </div>
                ) : (
                  <img
                    src={active.url}
                    alt={active.alt || active.caption || nodeName}
                    onError={() => setLightboxError(true)}
                    className="max-h-[80vh] max-w-[90vw] object-contain"
                  />
                )}
                {(active.alt || active.caption) && !lightboxError && (
                  <p className="mt-4 text-center text-sm text-graphite-300">
                    {active.caption || active.alt}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-wide text-graphite-400 sm:bottom-6">
                {lightboxIndex + 1} / {images.length}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}