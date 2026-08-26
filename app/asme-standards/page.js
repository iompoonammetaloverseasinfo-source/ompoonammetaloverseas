import { AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import StandardCard from "@/components/StandardCard";
import SectionHeading from "@/components/SectionHeading";
import DimensionReference from "@/components/DimensionReference";
import DataTable from "@/components/DataTable";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import {
  pipeStandards,
  fittingFlangeStandards,
  materialSpecs,
} from "@/data/standards";
import { asmeB3619Tables } from "@/data/asmeB3619Tables";
import { catalog, groupDataTables } from "@/data/catalog";
import { siteUrl } from "@/data/siteConfig";

// Real icon type from the actual pipe-and-tube catalog node, not a
// guessed string — IconTile's valid type values aren't known here, so
// this reuses whatever icon that node already has assigned rather than
// risking an unrecognized value.
const pipeCategoryIcon = catalog.find((c) => c.slug === "pipe-and-tube")?.icon;

// Photos live in /public/images/ashtapad/ — filenames reused from the
// original scrape's own naming (just filenames, not copyrighted content)
// since they're already sensibly descriptive.
const b3619GalleryImages = [
  {
    url: "/images/ashtapad/asme-b36-19-stainless-steel-pipe.jpg",
    alt: "ASME B36.19 Stainless Steel Pipe",
  },
  {
    url: "/images/ashtapad/asme-b36-19-pipe.jpg",
    alt: "ASME B36.19 Pipe",
  },
  {
    url: "/images/ashtapad/astm-a312-asme-b36-19m.jpg",
    alt: "ASTM A312 ASME B36.19M",
  },
];

export const metadata = {
  title: "ASME Standards Reference — Pipe, Flange & Fitting Dimensions",
  description:
    "A quick reference to the ASME and ASTM standards behind our pipe, tube, fitting and flange stock — B36.10M, B36.19M, B16.5, B16.9, B16.11 and the material specifications they pair with.",
  alternates: { canonical: `${siteUrl}/asme-standards` },
};

const b3619Groups = groupDataTables(asmeB3619Tables);

export default function AsmeStandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference"
        title="ASME Standards We Supply Against"
        description="Every pipe, fitting and flange we stock is identified against a dimensional standard and a material specification. This page is a working reference — not a substitute for the official standard."
      />

      <Gallery images={b3619GalleryImages} nodeName="ASME B36.19 Pipe" icon={pipeCategoryIcon} />

      <section className="section bg-mist-50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Pipe Dimensions"
            title="B36.10M &amp; B36.19M"
            description="The two dimensional standards behind every pipe size we quote."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pipeStandards.map((s) => (
              <ScrollReveal key={s.code}>
                <StandardCard {...s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Fittings & Flanges"
            title="B16-series standards"
            description="Governing dimensions, ratings and gasket compatibility for fittings and flanges."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fittingFlangeStandards.map((s) => (
              <ScrollReveal key={s.code}>
                <StandardCard {...s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist-50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Material Specifications"
            title="Paired ASTM specs"
            description="Dimensional standards define shape; these ASTM specifications define the material each part is made of."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {materialSpecs.map((s) => (
              <ScrollReveal key={s.code}>
                <StandardCard {...s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Quick Reference"
            title="Dimensions &amp; pressure classes"
          />
          <div className="mt-10">
            <DimensionReference />
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 flex gap-3 border border-brass-300 bg-brass-50 p-5">
              <AlertTriangle className="h-5 w-5 shrink-0 text-brass-700 mt-0.5" />
              <p className="text-sm text-graphite-700 leading-relaxed">
                This page is a working reference for procurement
                conversations. It is not a substitute for the current,
                official ASME/ASTM standard — always verify wall thickness,
                pressure rating and material grade against the governing
                standard and your engineer&rsquo;s specification before
                ordering or fabrication.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full ASME B36.19 dimensional, weight and allowable-stress tables
          — grouped and collapsed by section using the same
          groupDataTables() pattern already used on individual product
          pages, since this is the same {title, columns, rows} shape. */}
      <section className="section bg-mist-50">
        <div className="wrap max-w-4xl">
          <SectionHeading
            eyebrow="Full Reference Tables"
            title="ASME B36.19 — Complete Dimensional & Weight Data"
            description="Specification summary, dimensions by NPS, allowable stress by temperature, and weight charts across the full size range."
          />

          <div className="mt-10 space-y-10">
            {b3619Groups.map(({ group, tables }, i) => {
              const sectionLabel = group || "Reference Tables";
              return (
                <details
                  key={sectionLabel}
                  open={i === 0}
                  className="group scroll-mt-24 border-t border-graphite-200 pt-6 first:border-t-0 first:pt-0"
                >
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-tight text-graphite-900">
                      <span className="inline-block text-brass-500 transition-transform group-open:rotate-90">
                        ›
                      </span>
                      {sectionLabel}
                    </span>
                  </summary>
                  <div className="mt-6 space-y-10 pl-5">
                    {tables.map((t) => (
                      <DataTable key={t.title} table={t} />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex gap-3 border border-brass-300 bg-brass-50 p-5">
              <AlertTriangle className="h-5 w-5 shrink-0 text-brass-700 mt-0.5" />
              <p className="text-sm text-graphite-700 leading-relaxed">
                Figures above are a working reference, not a substitute for
                the current, official ASME B36.19M standard. Always verify
                wall thickness, weight and allowable stress against the
                governing standard and your engineer&rsquo;s specification
                before ordering or fabrication.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}