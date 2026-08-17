"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// PLACEHOLDER IMAGES — drop real photography into /public/images/hero/
// using these exact filenames and it swaps in automatically, no code
// changes needed. Suggested shot: material stacked/racked in the yard,
// shot wide, consistent lighting across all five so the slider doesn't
// visually jump between slides.
const slides = [
    {
        src: "https://www.ashtapad.co.in/images/slides/seamless-steel-pipe.jpg",
        alt: "Stainless and alloy steel pipes and tubes stocked at Om Poonam Metal Overseas",
        label: "Pipe & Tube",
        caption: "Seamless & welded, in stainless, alloy and duplex grades",
        href: "/products/pipe-and-tube",
    },
    {
        src: "https://www.ashtapad.co.in/images/slides/pipe-fittings.jpg",
        alt: "Forged and butt-weld pipe fittings in stock",
        label: "Pipe Fittings",
        caption: "Elbows, tees, reducers, unions and forged fittings",
        href: "/products/pipe-fittings",
    },
    {
        src: "https://www.ashtapad.co.in/images/slides/flanges.jpg",
        alt: "Stainless and alloy steel flanges in stock",
        label: "Flanges",
        caption: "Weld neck, slip-on, blind and specialty types",
        href: "/products/flanges",
    },
    {
        src: "https://www.ashtapad.co.in/images/slides/sheet-plate.jpg",
        alt: "Stainless steel sheet, plate and coil stock",
        label: "Sheet, Plate & Coil",
        caption: "Mill finish through to chequered and patterned stock",
        href: "/products/sheet-and-plate",
    },
    {
        src: "https://www.ashtapad.co.in/images/slides/cold-drawn-welded-tubes.jpg",
        alt: "Cold drawn welded stainless and alloy steel tubing",
        label: "Pipe & Tube",
        caption: "Cold drawn welded (CDW) tubing to precision OD & wall thickness",
        href: "/products/pipe-and-tube",
    },
];

// Full-bleed, auto-advancing hero banner — in the spirit of ashtapad's
// homepage slider, built fresh: framer-motion crossfade, a caption
// overlay per slide that links straight into that category, and tappable
// dots. Pauses on hover/focus so it doesn't fight someone trying to read
// or click through.
export default function HeroSlider() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
        return () => clearInterval(id);
    }, [paused]);

    const slide = slides[index];

    return (
        <div
            className="relative aspect-[4/5] w-full overflow-hidden bg-graphite-900 sm:aspect-[16/9] lg:aspect-[21/9]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.src}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-graphite-900/90 via-graphite-900/20 to-transparent"
                        aria-hidden="true"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="wrap absolute inset-x-0 bottom-0 pb-8 sm:pb-10 lg:pb-14">
                <Link href={slide.href} className="group inline-block">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-brass-300 sm:text-sm">
                        {slide.label}
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold uppercase leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                        {slide.caption}
                    </p>
                </Link>
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
                        className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-brass-400" : "w-1.5 bg-paper/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}