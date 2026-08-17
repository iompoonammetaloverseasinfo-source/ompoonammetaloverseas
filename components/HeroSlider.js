"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Images live in /public/slides/ — Next.js serves everything in /public
// from the site root, so the src path is /slides/filename.jpg, never
// /public/slides/filename.jpg (that "/public" segment doesn't exist on
// the served URL, only in the filesystem before build).
const slides = [
  {
    src: "/slides/seamless-steel-pipe.jpg",
    alt: "Stainless and alloy steel pipes and tubes stocked at Om Poonam Metal Overseas",
    label: "Pipe & Tube",
    caption: "Seamless & welded, in stainless, alloy and duplex grades",
    href: "/products/pipe-and-tube",
  },
  {
    src: "/slides/pipe-fittings.jpg",
    alt: "Forged and butt-weld pipe fittings in stock",
    label: "Pipe Fittings",
    caption: "Elbows, tees, reducers, unions and forged fittings",
    href: "/products/pipe-fittings",
  },
  {
    src: "/slides/flanges.jpg",
    alt: "Stainless and alloy steel flanges in stock",
    label: "Flanges",
    caption: "Weld neck, slip-on, blind and specialty types",
    href: "/products/flanges",
  },
  {
    src: "/slides/sheet-plate.jpg",
    alt: "Stainless steel sheet, plate and coil stock",
    label: "Sheet, Plate & Coil",
    caption: "Mill finish through to chequered and patterned stock",
    href: "/products/sheet-and-plate",
  },
  {
    src: "/slides/cold-drawn-welded-tubes.jpg",
    alt: "Cold drawn welded stainless and alloy steel tubing",
    label: "Pipe & Tube",
    caption: "Cold drawn welded (CDW) tubing to precision OD & wall thickness",
    href: "/products/pipe-and-tube",
  },
];

const SLIDE_DURATION = 5200;
const KEN_BURNS_DURATION = SLIDE_DURATION / 1000 + 0.6;

// Four distinct transition styles, rotated per slide via index % 4 so the
// same effect never plays twice in a row. Every one of them reveals the
// actual photo — no solid-color overlay panels — per the brief that the
// reveal mechanism itself should be image-driven, not brand-colored
// blocks.
const GRID_COLS = 8;
const GRID_ROWS = 5;
const TILE_STAGGER = 0.02;
const TILE_DURATION = 0.5;

const mosaicTileVariants = {
  hidden: { scale: 0 },
  visible: (wave) => ({
    scale: 1,
    transition: { delay: wave * TILE_STAGGER, duration: TILE_DURATION, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Mosaic assembly: the frame is sliced into a grid, each tile shows the
// matching crop of THIS slide's own photo (via background-position on a
// scaled-up background-image — the standard CSS trick for slicing one
// image across a grid), and grows in from nothing on a diagonal-wave
// stagger. No next/image here since tiling requires raw CSS
// background-image slicing, which next/image's component API doesn't
// support.
function MosaicReveal({ slide }) {
  const tiles = useMemo(
    () =>
      Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => {
        const row = Math.floor(i / GRID_COLS);
        const col = i % GRID_COLS;
        return { row, col, wave: row + col };
      }),
    []
  );

  return (
    <div
      className="absolute inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
      }}
    >
      {tiles.map((t) => (
        <motion.div
          key={`${t.row}-${t.col}`}
          custom={t.wave}
          variants={mosaicTileVariants}
          initial="hidden"
          animate="visible"
          style={{
            backgroundImage: `url(${slide.src})`,
            backgroundSize: `${GRID_COLS * 100}% ${GRID_ROWS * 100}%`,
            backgroundPosition: `${(t.col / (GRID_COLS - 1)) * 100}% ${(t.row / (GRID_ROWS - 1)) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

// Iris: opens from a soft-focus circle at center, sharpening as it grows.
function IrisReveal({ slide, isFirst }) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)", filter: "blur(16px)" }}
      animate={{ clipPath: "circle(75% at 50% 50%)", filter: "blur(0px)" }}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
      className="absolute inset-0"
    >
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.28 }}
        transition={{ duration: KEN_BURNS_DURATION, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image src={slide.src} alt={slide.alt} fill priority={isFirst} className="object-cover" sizes="100vw" />
      </motion.div>
    </motion.div>
  );
}

// Wipe: a slanted edge sweeps in from the left, revealing the photo
// behind it — via an animated clip-path polygon, not a colored panel.
function WipeReveal({ slide, isFirst }) {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 0% 0, -25% 100%, 0 100%)" }}
      animate={{ clipPath: "polygon(0 0, 140% 0, 115% 100%, 0 100%)" }}
      transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
      className="absolute inset-0"
    >
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.24 }}
        transition={{ duration: KEN_BURNS_DURATION, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image src={slide.src} alt={slide.alt} fill priority={isFirst} className="object-cover" sizes="100vw" />
      </motion.div>
    </motion.div>
  );
}

// Slide: drifts in horizontally while fading up, simplest of the four.
function SlideReveal({ slide, isFirst }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 64 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.22 }}
        transition={{ duration: KEN_BURNS_DURATION, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image src={slide.src} alt={slide.alt} fill priority={isFirst} className="object-cover" sizes="100vw" />
      </motion.div>
    </motion.div>
  );
}

const TRANSITIONS = [MosaicReveal, IrisReveal, WipeReveal, SlideReveal];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [paused]);

  const slide = slides[index];
  const Transition = TRANSITIONS[index % TRANSITIONS.length];

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[16/9] lg:aspect-[21/9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div key={slide.src} className="absolute inset-0">
        <Transition slide={slide} isFirst={index === 0} />

        {/* Neutral dark scrim for caption legibility — not part of the
            reveal animation itself, just contrast underneath the text. */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="wrap absolute inset-x-0 bottom-0 pb-8 sm:pb-10 lg:pb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.caption}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          >
            <Link href={slide.href} className="group inline-block">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-brass-300 sm:text-sm">
                {slide.label}
              </p>
              <p className="mt-2 font-display text-2xl font-bold uppercase leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                {slide.caption}
              </p>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="absolute right-5 top-5 flex gap-1.5 sm:right-8 sm:top-8"
        role="tablist"
        aria-label="Product highlights"
      >
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${s.label}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-paper" : "w-1.5 bg-paper/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}