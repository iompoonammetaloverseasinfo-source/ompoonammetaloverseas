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

// Counts leaf nodes whose product name matches a material keyword —
// walks the whole catalog, not just one branch, since a material like
// stainless steel shows up across pipe, fitting, flange and sheet nodes
// alike.
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

// The four categories worth a full showcase card on this page. Round
// Bars and Fittings & Flanges are still real, distinct catalog nodes —
// just smaller ones — so they get a lighter-weight link row underneath
// rather than a full card.
const showcaseSlugs = ["pipe-and-tube", "pipe-fittings", "flanges", "sheet-and-plate"];
const showcaseCategories = catalog
  .filter((node) => showcaseSlugs.includes(node.slug))
  .map((node) => ({
    ...node,
    description: `${countProductPages(node)} products stocked, across ${node.children.length} grades & types`,
  }));

const supplementaryCategories = catalog.filter((node) =>
  ["round-bars", "fittings-and-flanges"].includes(node.slug)
);

const totalProductPages = catalog.reduce((sum, node) => sum + countProductPages(node), 0);

// Materials with genuine, countable catalog presence under that name —
// computed live from catalog.js rather than hardcoded, so the numbers
// stay accurate as the catalog grows. Filtered to >0 so a material that
// doesn't show up under this literal name (e.g. "Alloy Steel," which is
// catalogued under specific ASTM grade codes instead) doesn't display a
// misleading zero.
const catalogueMaterials = [
  { name: "Stainless Steel", pattern: /stainless steel/i },
  { name: "Duplex & Super Duplex", pattern: /duplex/i },
  { name: "Inconel", pattern: /inconel/i },
  { name: "Hastelloy", pattern: /hastelloy/i },
  { name: "Monel", pattern: /monel/i },
  { name: "Titanium", pattern: /titanium/i },
]
  .map((m) => ({ name: m.name, count: countMaterial(m.pattern) }))
  .filter((m) => m.count > 0);

// Registered in company.scopeStatement for manufacturing, trading,
// stocking, import and export, but not separately browsable as their own
// catalog product pages the way the materials above are — so these stay
// plain tags rather than getting a (possibly misleading) page count.
const alsoTraded = [
  "Alloy Steel",
  "Carbon Steel",
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

// Linked to a real catalog slug wherever one exists; plain text where a
// form doesn't have its own dedicated top-level category page.
const productForms = [
  { label: "Pipes & Tubes", slug: "pipe-and-tube" },
  { label: "Pipe Fittings", slug: "pipe-fittings" },
  { label: "Flanges", slug: "flanges" },
  { label: "Sheets, Plates & Coils", slug: "sheet-and-plate" },
  { label: "Round Bars", slug: "round-bars" },
  { label: "Strips (Patti)", slug: null },
  { label: "Fasteners", slug: null },
  { label: "Structural Materials", slug: null },
  { label: "Industrial Hardware", slug: null },
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

      {/* Certification detail — the actual certificate number, issuing
          body, accreditation and validity dates, none of which appeared
          anywhere on the site before now despite being real company.js
          data. Concrete and checkable beats "ISO certified" as a phrase. */}
      <section className="section bg-paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Certification"
            title={`${company.certification.standard} — the certificate itself`}
            description={`Issued by ${company.certification.issuingBody}, accredited under ${company.certification.issuingBodyAccreditation}.`}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div className="border border-graphite-200 bg-mist-50 p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  Certificate No.
                </p>
                <p className="mt-2 font-display text-lg font-bold text-graphite-900">
                  {company.certification.certificateNo}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="border border-graphite-200 bg-mist-50 p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  Initial Registration
                </p>
                <p className="mt-2 font-display text-lg font-bold text-graphite-900">
                  {company.certification.initialRegistration}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border border-graphite-200 bg-mist-50 p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  Valid Until
                </p>
                <p className="mt-2 font-display text-lg font-bold text-graphite-900">
                  {company.certification.dateOfExpiry}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="border border-graphite-200 bg-mist-50 p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                  Verify
                </p>
                <a
                  href={company.certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block break-words font-display text-lg font-bold text-brass-600 hover:text-brass-700"
                >
                  {company.certification.issuingBody}
                </a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-sm text-graphite-500">
              Surveillance audits scheduled {company.certification.firstSurveillance}{" "}
              and {company.certification.secondSurveillance}.
            </p>
          </ScrollReveal>
        </div>
      </section>

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
              <p className="eyebrow mb-4">Materials In Our Catalogue</p>
              <div className="flex flex-wrap gap-2">
                {catalogueMaterials.map((m) => (
                  <span
                    key={m.name}
                    className="inline-flex items-center gap-2 border border-graphite-200 bg-paper px-3 py-1.5 text-sm text-graphite-700"
                  >
                    {m.name}
                    <span className="font-mono text-xs text-brass-600">{m.count}</span>
                  </span>
                ))}
              </div>

              <p className="eyebrow mb-4 mt-8">Also Traded</p>
              <div className="flex flex-wrap gap-2">
                {alsoTraded.map((m) => (
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
                {productForms.map((f) =>
                  f.slug ? (
                    <Link
                      key={f.label}
                      href={`/products/${f.slug}`}
                      className="border border-graphite-200 bg-paper px-3 py-1.5 text-sm text-graphite-700 transition-colors hover:border-brass-400 hover:text-graphite-900"
                    >
                      {f.label}
                    </Link>
                  ) : (
                    <span
                      key={f.label}
                      className="border border-graphite-200 bg-paper px-3 py-1.5 text-sm text-graphite-700"
                    >
                      {f.label}
                    </span>
                  )
                )}
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

      {/* Reach Us — address, hours and direct contact, so About doesn't
          require a click through to /contact to answer "where/when can I
          actually reach them". */}
      <section className="section !py-14 bg-mist-50">
        <div className="wrap">
          <SectionHeading eyebrow="Reach Us" title="Where and when to find us" />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                Head Office
              </p>
              <p className="mt-2 text-graphite-700 leading-relaxed">{company.address.full}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                Working Hours
              </p>
              <p className="mt-2 text-graphite-700">
                {company.contact.hours.weekdays}: {company.contact.hours.weekdayTime}
              </p>
              <p className="text-graphite-700">Sunday: {company.contact.hours.sunday}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                Get In Touch
              </p>
              <a
                href={`tel:${company.contact.phoneE164}`}
                className="mt-2 block text-graphite-700 hover:text-brass-600"
              >
                {company.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="block break-all text-graphite-700 hover:text-brass-600"
              >
                {company.contact.email}
              </a>
            </ScrollReveal>
          </div>
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