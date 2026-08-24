import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ImageWithFallback from "./ImageWithFallback";
import IconTile from "./IconTile";
import { company } from "@/data/company";
import { catalog } from "@/data/catalog";

const pipeCategory = catalog.find((c) => c.slug === "pipe-and-tube");

// PLACEHOLDER IMAGES — different in kind from the hero slider's product
// shots: these are facility/process photography, not product photos.
// Drop real images into /public/images/about/ with these exact filenames
// and they swap in automatically:
//   facility-and-stockyard.jpg  — wide shot of the stockyard/warehouse
//   quality-verification.jpg    — close-up of material being checked
//                                  against a gauge/mic/mill certificate
// Both fall back to the pipe-and-tube category's own icon if missing.

// Homepage "About Us" block, structured as two alternating text/image
// rows (heading + intro paired with a wide facility shot, then a
// close-up quality-check photo paired with the rest of the copy) rather
// than a single side-by-side block. Copy is written fresh — see the
// PipeEducationSection delivery notes for why it isn't adapted from any
// competitor's text.
export default function PipeEducationSection() {
  return (
    <section className="section bg-mist-50">
      <div className="wrap space-y-14">
        {/* Row 1 — heading + intro (left) / wide facility shot (right) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal className="lg:col-span-5">
            <p className="eyebrow text-brass-600">{`About ${company.legalTradeName}`}</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-graphite-900 sm:text-4xl">
              Pipe & tube, stocked in both seamless and welded construction
            </h2>
            <p className="mt-6 text-base leading-relaxed text-graphite-600 sm:text-lg">
              A steel pipe is a round, hollow section used wherever a fluid,
              gas or structural load needs to be contained and carried in a
              straight run — water and gas lines, process piping,
              structural columns, and equipment fabrication all rely on it.
              What separates one pipe from another isn't just the grade,
              but how it was actually made: seamless or welded construction
              changes what the pipe is suited for, and buyers who know the
              difference tend to spec the right one the first time.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-graphite-200 bg-graphite-900">
              <ImageWithFallback
                src="/images/facility-and-stockyard.jpg"
                alt={`${company.legalTradeName} stockyard and warehouse`}
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 90vw"
                fallback={
                  <div className="flex h-full w-full items-center justify-center">
                    <IconTile type={pipeCategory?.icon} size="lg" />
                  </div>
                }
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2 — close-up quality-check shot (left) / remaining copy (right) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-graphite-200 bg-graphite-900">
              <ImageWithFallback
                src="/images/quality-verification.jpg"
                alt="Material being checked against grade and dimension at Om Poonam Metal Overseas"
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 90vw"
                fallback={
                  <div className="flex h-full w-full items-center justify-center">
                    <IconTile type={pipeCategory?.icon} size="lg" />
                  </div>
                }
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="order-1 lg:order-2 lg:col-span-6">
            <div className="space-y-4 text-graphite-600 leading-relaxed">
              <p>
                A seamless pipe starts as a solid round billet, which is
                heated and pierced through its centre to form a hollow
                shell, then drawn or rolled down to final wall thickness
                and diameter. Because there's no weld seam anywhere along
                its length, a seamless pipe has no directional weak point —
                it's the standard choice for higher-pressure and
                higher-temperature service, where a consistent wall all the
                way around actually matters.
              </p>
              <p>
                A welded pipe — commonly ERW, electric resistance welded —
                is formed the other way round: a flat steel coil is
                roll-formed into a cylindrical shape, and the long edge is
                fused shut along a single seam, typically ground flush so
                it isn't visibly raised. Welded pipe production is faster
                and more material-efficient than seamless, which usually
                makes it the more economical option for larger diameters
                and general structural or lower-pressure use.
              </p>
              <p>
                {company.legalTradeName} stocks and trades both
                constructions across stainless, alloy, duplex and
                high-nickel grades, dimensioned to ASME B36.19M and
                B36.10M, under an {company.certification.standard} quality
                management system — so whichever construction your
                application calls for, the wall thickness and grade on the
                mill certificate is what actually leaves the yard.
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 bg-brass-500 hover:bg-brass-600 text-paper font-semibold px-6 py-3.5 transition-colors"
            >
              Discuss Your Pipe Requirement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}