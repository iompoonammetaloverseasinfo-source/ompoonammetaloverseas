import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FounderProfile from "@/components/FounderProfile";
import Timeline from "@/components/Timeline";
import CredentialsGrid from "@/components/CredentialsGrid";
import CertificatesGallery from "@/components/CertificatesGallery";
import CatalogCard from "@/components/CatalogCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Truck, ScanSearch, Settings2, PackageCheck } from "lucide-react";
import { company } from "@/data/company";
import { catalog } from "@/data/catalog";
import { categoryImages } from "@/data/categoryImages";
import { siteUrl } from "@/data/siteConfig";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Om Poonam Metal Overseas — an ISO 9001:2015 certified metal stockist and trader based in Ahmedabad, Gujarat, led by proprietor Harachndram V. Purohit.",
  alternates: { canonical: `${siteUrl}/about` },
};

function countProductPages(node) {
  const children = node.children || [];
  if (children.length === 0) return 1;
  return children.reduce((sum, c) => sum + countProductPages(c), 0);
}

function countByKeyword(node, pattern) {
  const children = node.children || [];
  if (children.length === 0) {
    return pattern.test(node.name) ? 1 : 0;
  }
  return children.reduce((sum, c) => sum + countByKeyword(c, pattern), 0);
}
function countMaterial(pattern) {
  return catalog.reduce((sum, node) => sum + countByKeyword(node, pattern), 0);
}

const showcaseSlugs = ["pipe-and-tube", "pipe-fittings", "flanges", "sheet-and-plate"];
const showcaseCategories = catalog
  .filter((node) => showcaseSlugs.includes(node.slug))
  .map((node) => ({
    ...node,
    // Same per-category photo the homepage's ProductShowcase uses (from
    // the shared data/categoryImages.js), since top-level nodes don't
    // have their own hero_image/image — CatalogCard's fallback chain
    // takes it from here if this is also missing.
    image: node.image || categoryImages[node.slug],
    description: `${countProductPages(node)} products stocked, across ${node.children.length} grades & types`,
  }));

const supplementaryCategories = catalog.filter((node) =>
  ["round-bars", "fittings-and-flanges"].includes(node.slug)
);

const totalProductPages = catalog.reduce((sum, node) => sum + countProductPages(node), 0);

// Computed live from catalog.js, then woven into a sentence below rather
// than displayed as a standalone tag grid — same underlying accuracy,
// told as part of the story instead of a data block.
const catalogueMaterials = [
  { name: "stainless steel", pattern: /stainless steel/i },
  { name: "duplex and super duplex", pattern: /duplex/i },
  { name: "Inconel", pattern: /inconel/i },
  { name: "Hastelloy", pattern: /hastelloy/i },
  { name: "Monel", pattern: /monel/i },
  { name: "titanium", pattern: /titanium/i },
]
  .map((m) => ({ name: m.name, count: countMaterial(m.pattern) }))
  .filter((m) => m.count > 0);

function materialsSentence() {
  const parts = catalogueMaterials.map((m) => `${m.count} in ${m.name}`);
  if (parts.length <= 1) return parts.join("");
  return parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
}

// PLACEHOLDER IMAGES — from the firm's print catalogue (pages 2 & 3).
// Drop real files into /public/images/about/ using these exact
// filenames and each swaps in automatically; falls back to a plain icon
// if the file isn't there yet.
const yardImages = [
  { url: "/images/about/raw-material-inspection.png", alt: "Raw material inspection at Om Poonam Metal Overseas", icon: ScanSearch },
  { url: "/images/about/manufacturing-process.png", alt: "Hot and cold rolling, welding and heat treatment in process", icon: Settings2 },
  { url: "/images/about/quality-testing.png", alt: "Ultrasonic and hardness testing of finished material", icon: PackageCheck },
  { url: "/images/about/logistics-dispatch-1.png", alt: "Material loaded and crated for dispatch", icon: Truck },
  { url: "/images/about/logistics-dispatch-2.png", alt: "Pipe bundles staged for transport", icon: Truck },
  { url: "/images/about/logistics-dispatch-3.png", alt: "Flanges packed for shipment", icon: Truck },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Piping, tubing and metal — verified before it ships"
        description="A proprietorship-run stockist and trading house in Ahmedabad, Gujarat, specialising in piping, tubing and metal products — stainless, carbon, alloy and duplex steel, nickel alloys and non-ferrous metal, in pipe, tube, sheet and fitting form — to fabricators, EPC contractors and re-rollers across India and abroad."
      />

      <section className="section bg-paper">
        <div className="wrap max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase text-graphite-900 leading-tight">
              From the Rakhial stockyard to clients across the world
            </h2>
            <div className="mt-6 space-y-4 text-graphite-600 leading-relaxed">
              <p>
                {company.legalTradeName} started as a metal stocking and
                trading operation in the Rakhial industrial belt of
                Ahmedabad, founded in {company.founded} — the kind of
                address where buyers still walk in, check the material
                against the mill certificate, and place the order on the
                spot.
              </p>
              <p>
                That habit of showing the paperwork shaped everything that
                came after. The firm registered for GST, secured an
                Importer-Exporter Code, registered under Udyam as a Micro
                Enterprise, and put its internal processes through
                independent {company.certification.standard} certification —
                certificate no. {company.certification.certificateNo},
                issued by {company.certification.issuingBody} — the same
                standard multinational buyers ask for before they sign a
                purchase order. It's reviewed again at surveillance audits
                in {company.certification.firstSurveillance} and{" "}
                {company.certification.secondSurveillance}, not a
                one-time badge.
              </p>
              <p>
                None of that stock moves without a paper trail behind it,
                either. Raw material is checked against international
                standards on arrival; hot and cold rolling, precision
                welding and heat treatment happen where the job calls for
                it; and before anything ships, it goes through ultrasonic
                testing, hardness testing and non-destructive evaluation —
                the exact steps an ISO auditor reviews every cycle, not
                just words on a certificate.
              </p>
              <p>
                What's actually sitting in the yard today reflects that
                same discipline: {materialsSentence()} — {totalProductPages}
                + product pages in total, each tied to a specific grade,
                size and standard rather than a generic listing. Getting
                it out the gate is its own discipline too, with a
                logistics network built for on-time delivery whatever the
                destination, and an IEC registration that lets an order
                move past the domestic market when it needs to.
              </p>
              <p>
                Today the firm operates alongside its group concern,{" "}
                {company.groupConcern}, based in Mumbai — extending the
                same sourcing relationships and reach beyond Ahmedabad
                alone.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Timeline />
          </ScrollReveal>
        </div>
      </section>

      <FounderProfile />

      {/* Visual accompaniment to the process/logistics story told above —
          plain photo grid, no separate headings or stat framing per
          image, since the words already did that work. */}
      <section className="section !py-10 bg-mist-50">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {yardImages.map((img, i) => (
              <ScrollReveal key={img.url} delay={i * 0.04}>
                <div className="relative aspect-square overflow-hidden border border-graphite-100 bg-graphite-900">
                  <ImageWithFallback
                    src={img.url}
                    alt={img.alt}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    fallback={
                      <div className="flex h-full w-full items-center justify-center">
                        <img.icon className="h-8 w-8 text-graphite-500" strokeWidth={1.5} />
                      </div>
                    }
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our Catalogue"
            title="Browse what's in stock, by product type"
            description={`${totalProductPages}+ product pages, covering every grade and dimension we stock and trade.`}
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseCategories.map((node) => (
              <ScrollReveal key={node.slug}>
                <CatalogCard href={`/products/${node.slug}`} node={node} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              {supplementaryCategories.map((node, i) => (
                <span key={node.slug} className="flex items-center gap-4">
                  {i > 0 && <span className="text-graphite-300">·</span>}
                  <Link
                    href={`/products/${node.slug}`}
                    className="text-graphite-600 underline decoration-graphite-300 underline-offset-4 transition-colors hover:text-brass-600 hover:decoration-brass-400"
                  >
                    {node.name}
                  </Link>
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="mt-6 text-center">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-graphite-600 transition-colors hover:text-brass-600"
              >
                Browse the Full Catalogue — including fasteners & valves
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Paperwork — every credential in one place, consolidated
          rather than spread across separate certification/import-export
          sections. Registration numbers first as a quick scan, then the
          actual documents underneath for anyone who wants to verify. */}
      <section className="section bg-mist-50">
        <div className="wrap max-w-4xl">
          <SectionHeading
            eyebrow="The Paperwork"
            title="Every credential, on the record"
            description="Documents are available for verification on request. Registration numbers below; the certificates themselves are further down this page."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <ScrollReveal>
              <div className="border border-graphite-200 bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  {company.certification.standard}
                </p>
                <p className="mt-1.5 font-display text-base font-bold text-graphite-900 sm:text-lg">
                  {company.certification.certificateNo}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.04}>
              <div className="border border-graphite-200 bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">GSTIN</p>
                <p className="mt-1.5 font-display text-base font-bold text-graphite-900 sm:text-lg">
                  {company.registrations.gstin}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="border border-graphite-200 bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  Importer-Exporter Code
                </p>
                <p className="mt-1.5 font-display text-base font-bold text-graphite-900 sm:text-lg">
                  {company.registrations.iec}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="border border-graphite-200 bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  Udyam ({company.registrations.udyamType})
                </p>
                <p className="mt-1.5 font-display text-base font-bold text-graphite-900 sm:text-lg">
                  {company.registrations.udyam}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <div className="border border-graphite-200 bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  Accreditation
                </p>
                <p className="mt-1.5 font-display text-base font-bold text-graphite-900 sm:text-lg">
                  {company.certification.issuingBodyAccreditation}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href={company.certification.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center border border-graphite-200 bg-paper p-5 transition-colors hover:border-brass-400"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">Verify</p>
                <p className="mt-1.5 font-display text-base font-bold text-brass-600 sm:text-lg">
                  {company.certification.issuingBody}
                </p>
              </a>
            </ScrollReveal>
          </div>

          <div className="mt-14">
            <CredentialsGrid />
          </div>

          <div className="mt-16 scroll-mt-24" id="certificates">
            <p className="eyebrow mb-1.5">Tap to view full size</p>
            <h3 className="font-display text-2xl font-bold uppercase text-graphite-900 mb-6">
              The Certificates Themselves
            </h3>
            <CertificatesGallery />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}