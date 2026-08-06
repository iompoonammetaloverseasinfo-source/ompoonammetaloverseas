import { AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import StandardCard from "@/components/StandardCard";
import SectionHeading from "@/components/SectionHeading";
import DimensionReference from "@/components/DimensionReference";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import {
  pipeStandards,
  fittingFlangeStandards,
  materialSpecs,
} from "@/data/standards";
import { siteUrl } from "@/data/siteConfig";

export const metadata = {
  title: "ASME Standards Reference — Pipe, Flange & Fitting Dimensions",
  description:
    "A quick reference to the ASME and ASTM standards behind our pipe, tube, fitting and flange stock — B36.10M, B36.19M, B16.5, B16.9, B16.11 and the material specifications they pair with.",
  alternates: { canonical: `${siteUrl}/asme-standards` },
};

export default function AsmeStandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference"
        title="ASME Standards We Supply Against"
        description="Every pipe, fitting and flange we stock is identified against a dimensional standard and a material specification. This page is a working reference — not a substitute for the official standard."
      />

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

      <CTASection />
    </>
  );
}
