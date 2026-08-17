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
import { company } from "@/data/company";
import { catalog } from "@/data/catalog";
import { siteUrl } from "@/data/siteConfig";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Om Poonam Metal Overseas — an ISO 9001:2015 certified metal stockist and trader based in Ahmedabad, Gujarat, led by proprietor Harachndram V. Purohit.",
  alternates: { canonical: `${siteUrl}/about` },
};

// Counts every leaf (childless) node under a catalog node — i.e. every
// actual product detail page reachable beneath it, at any depth.
function countProductPages(node) {
  const children = node.children || [];
  if (children.length === 0) return 1;
  return children.reduce((sum, c) => sum + countProductPages(c), 0);
}

// The four categories worth a full showcase card on this page. The
// remaining catalog nodes (round bars, misc/reclassified pages) are still
// reachable via the "Browse the Full Catalogue" link below the grid.
const showcaseSlugs = ["pipe-and-tube", "pipe-fittings", "flanges", "sheet-and-plate"];
const showcaseCategories = catalog
  .filter((node) => showcaseSlugs.includes(node.slug))
  .map((node) => ({
    ...node,
    description: `${countProductPages(node)} products stocked, across ${node.children.length} grades & types`,
  }));

const totalProductPages = catalog.reduce((sum, node) => sum + countProductPages(node), 0);

// Curated from company.scopeStatement — the metals and alloys the firm is
// registered to manufacture, trade, stock, import and export.
const materialsTraded = [
  "Stainless Steel",
  "Alloy Steel",
  "Duplex & Super Duplex",
  "Inconel",
  "Hastelloy",
  "Monel",
  "Titanium",
  "Copper",
  "Brass",
  "Aluminium",
  "Nickel",
  "Tin",
  "Zinc",
  "Cobalt",
  "Cadmium",
  "Molybdenum",
  "Mercury",
  "Bismuth",
  "Lead",
];

const productForms = [
  "Sheets, Plates & Coils",
  "Strips (Patti)",
  "Pipes & Tubes",
  "Pipe Fittings",
  "Flanges",
  "Fasteners",
  "Structural Materials",
  "Industrial Hardware",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Metal trading, built on paperwork that holds up"
        description="A proprietorship-run stockist and trading house in Ahmedabad, Gujarat — supplying stainless, alloy and non-ferrous metal to fabricators, EPC contractors and re-rollers across India and abroad."
      />

      <section className="section bg-paper">
        <div className="wrap max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase text-graphite-900 leading-tight">
              From a Rakhial stockyard to a certified trading house
            </h2>
            <div className="mt-6 space-y-4 text-graphite-600 leading-relaxed">
              <p>
                {company.legalTradeName} started as a metal stocking and
                trading operation in the Rakhial industrial belt of
                Ahmedabad — the kind of address where buyers still walk in,
                check the material against the mill certificate, and place
                the order on the spot.
              </p>
              <p>
                That habit of showing the paperwork shaped how the business
                is run. As demand grew beyond the local market, the firm
                formalised its GST registration, secured an
                Importer-Exporter Code, registered under Udyam as a Micro
                Enterprise, and put its internal processes through
                independent {company.certification.standard} certification —
                the same standard multinational buyers ask for before they
                sign a purchase order.
              </p>
              <p>
                Today it operates alongside its group concern,{" "}
                {company.groupConcern}, across manufacturing, trading,
                stocking, import, export and supply of stainless steel,
                alloy steel and non-ferrous metal products — sheets and
                plates through to pipes, fittings, flanges and structurals.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Timeline />
          </ScrollReveal>
        </div>
      </section>

      {/* Quick-glance stats strip, sourced directly from company.js */}
      <section className="section !py-10 bg-graphite-900">
        <div className="wrap grid grid-cols-2 gap-6 sm:grid-cols-4">
          {company.stats.map((s) => (
            <ScrollReveal key={s.label}>
              <div className="text-center sm:text-left">
                <p className="font-display text-2xl font-bold text-brass-400 sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-graphite-400">
                  {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <FounderProfile />

      {/* What the company does: materials, forms, and the live product
          catalogue — so "About" answers "what do they actually sell". */}
      <section className="section bg-mist-50">
        <div className="wrap">
          <SectionHeading
            eyebrow="What We Do"
            title="Metal stocking & trading, across every major form"
            description={company.scopeStatement}
          />

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <p className="eyebrow mb-4">Materials We Deal In</p>
              <div className="flex flex-wrap gap-2">
                {materialsTraded.map((m) => (
                  <span
                    key={m}
                    className="border border-graphite-200 bg-paper px-3 py-1.5 text-sm text-graphite-700"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <p className="eyebrow mb-4">Product Forms We Stock</p>
              <div className="flex flex-wrap gap-2">
                {productForms.map((f) => (
                  <span
                    key={f}
                    className="border border-graphite-200 bg-paper px-3 py-1.5 text-sm text-graphite-700"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </ScrollReveal>
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
          <ScrollReveal delay={0.08}>
            <div className="mt-8 text-center">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-graphite-600 transition-colors hover:text-brass-600"
              >
                Browse the Full Catalogue — including fasteners, valves & round bars
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Import / export capability — registrations that let the firm
          trade across borders, not just locally. */}
      <section className="section !py-14 bg-graphite-900">
        <div className="wrap">
          <SectionHeading
            eyebrow="Import & Export"
            title="Registered to trade across borders"
            description="GST, IEC and Udyam registration, backed by an ISO 9001:2015 quality management system, mean orders can move beyond the domestic market with the paperwork already in place."
            dark
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ScrollReveal>
              <div className="border border-graphite-700 p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-brass-400">
                  Importer-Exporter Code
                </p>
                <p className="mt-2 font-display text-lg font-bold text-paper">
                  {company.registrations.iec}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <div className="border border-graphite-700 p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-brass-400">GSTIN</p>
                <p className="mt-2 font-display text-lg font-bold text-paper">
                  {company.registrations.gstin}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="border border-graphite-700 p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-brass-400">
                  Udyam ({company.registrations.udyamType})
                </p>
                <p className="mt-2 font-display text-lg font-bold text-paper">
                  {company.registrations.udyam}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section bg-mist-50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Registrations & Standing"
            title="Every credential, on the record"
            description="Documents are available for verification on request — from GST and IEC to our ISO 9001:2015 certificate."
          />
          <div className="mt-12">
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