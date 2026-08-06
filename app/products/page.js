import PageHero from "@/components/PageHero";
import ProductFamilySection from "@/components/ProductFamilySection";
import ProductFormsGrid from "@/components/ProductFormsGrid";
import IndustriesStrip from "@/components/IndustriesStrip";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { productFamilies } from "@/data/products";
import { siteUrl } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Products — Stainless, Alloy & Non-Ferrous Metal Grades",
  description:
    "Browse stainless steel grades (201–904L), alloy & special alloys (Inconel, Hastelloy, Monel, Duplex), and non-ferrous metals & ferro alloys stocked by Om Poonam Metal Overseas in sheet, plate, coil, pipe, tube and bar form.",
  alternates: { canonical: `${siteUrl}/products` },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: productFamilies.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: f.name,
    description: f.blurb,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <PageHero
        eyebrow="Products"
        title="Every grade we stock, in one place"
        description="Three material families, twelve common forms. If it's not listed, ask — we source against specification through our supplier network."
      />

      <section className="section bg-mist-50">
        <div className="wrap space-y-6">
          {productFamilies.map((family) => (
            <ProductFamilySection key={family.id} family={family} />
          ))}
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Forms & Fabrication"
            title="Supplied in the form your drawing calls for"
            description="Cut, slit, or supplied mill-standard — every family above is available across these common forms."
          />
          <div className="mt-12">
            <ProductFormsGrid />
          </div>
        </div>
      </section>

      <section className="pt-16 sm:pt-20 lg:pt-28 pb-4 bg-graphite-900">
        <div className="wrap">
          <ScrollReveal>
            <p className="eyebrow text-brass-400">Industries We Serve</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase text-paper leading-tight max-w-xl">
              Supplying sectors where the wrong grade is not an option
            </h2>
          </ScrollReveal>
          <div className="mt-8">
            <IndustriesStrip />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
