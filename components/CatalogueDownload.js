"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

// PLACEHOLDER PAGE IMAGES — pre-rendered catalogue pages, not a runtime
// PDF viewer. The catalogue is a 20-page, ~40MB flattened-image PDF (no
// text layer — every page is one raster image), so parsing it client-side
// with a PDF.js-style library would mean shipping a real dependency and
// runtime cost just to redraw JPEGs you already have. Export each page
// once (e.g. `pdftoppm -jpeg -r 150 catalogue.pdf page`) and drop the
// files into /public/images/catalogue-pages/ using these exact filenames
// — each swaps in automatically. Falls back to a plain document icon per
// page if a specific file isn't there yet.
const TOTAL_PAGES = 20;
const catalogPages = Array.from(
  { length: TOTAL_PAGES },
  (_, i) => `/images/catalogue-pages/page-${String(i + 1).padStart(2, "0")}.jpg`
);

const SWIPE_THRESHOLD = 50;

export default function CatalogueDownload() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);

  const goTo = (newIndex, dir) => {
    setDirection(dir);
    setIndex((newIndex + TOTAL_PAGES) % TOTAL_PAGES);
  };
  const showPrev = () => goTo(index - 1, -1);
  const showNext = () => goTo(index + 1, 1);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) showPrev();
    else if (delta < -SWIPE_THRESHOLD) showNext();
    touchStartX.current = null;
  };

  return (
    <section className="section !py-12 border-y border-graphite-100 bg-mist-50">
      <div className="wrap">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 shrink-0 text-brass-500" strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight text-graphite-900 sm:text-xl">
                Our Full Product Catalogue
              </p>
              <p className="text-sm text-graphite-500">
                Browse all {TOTAL_PAGES} pages below, or download the full PDF.
              </p>
            </div>
          </div>
          <a
            href="/catalogue.pdf"
            download
            className="group inline-flex shrink-0 items-center gap-2 bg-brass-500 px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-brass-600"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download PDF
          </a>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto mt-8 max-w-md sm:max-w-xl lg:max-w-2xl">
          <div
            className="relative aspect-[3/4] overflow-hidden border border-graphite-200 bg-graphite-900 shadow-lg"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={catalogPages[index]}
                  alt={`Catalogue page ${index + 1} of ${TOTAL_PAGES}`}
                  className="object-contain"
                  sizes="(min-width: 1024px) 672px, (min-width: 640px) 576px, 90vw"
                  fallback={
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-graphite-500">
                      <FileText className="h-14 w-14" strokeWidth={1} />
                      <p className="font-mono text-xs uppercase tracking-wide">
                        Page {index + 1}
                      </p>
                    </div>
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous page"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-graphite-200 bg-paper text-graphite-700 shadow-md transition-colors hover:border-brass-400 hover:text-brass-600 sm:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next page"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-graphite-200 bg-paper text-graphite-700 shadow-md transition-colors hover:border-brass-400 hover:text-brass-600 sm:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-center font-mono text-sm text-graphite-500">
          Page {index + 1} of {TOTAL_PAGES}
        </p>
      </div>
    </section>
  );
}