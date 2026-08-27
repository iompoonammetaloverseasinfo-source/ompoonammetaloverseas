import PageHero from "@/components/PageHero";
import ProductFamilySection from "@/components/ProductFamilySection";
import CatalogCard from "@/components/CatalogCard";
import IndustriesStrip from "@/components/IndustriesStrip";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { productFamilies } from "@/data/products";
import { catalog } from "@/data/catalog";
import { categoryImages } from "@/data/categoryImages";
import { siteUrl } from "@/data/siteConfig";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Products — Stainless, Alloy & Non-Ferrous Metal Grades",
  description:
    "Browse stainless steel grades (201–904L), alloy & special alloys (Inconel, Hastelloy, Monel, Duplex), and non-ferrous metals & ferro alloys, plus pipes, fittings, flanges, valves and fasteners — stocked by Om Poonam Metal Overseas.",
  alternates: { canonical: `${siteUrl}/products` },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: catalog.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: f.name,
    description: f.description,
    url: `${siteUrl}/products/${f.slug}`,
  })),
};

// Top-level category nodes (Pipe & Tube, Flanges, etc.) don't have their
// own hero_image/image — they're organisational groupings, not
// individual products — so the same curated categoryImages map used on
// the Home and About pages is injected here too, keeping this grid
// visually consistent with how each category is shown everywhere else.
const catalogWithImages = catalog.map((node) => ({
  ...node,
  image: node.image || categoryImages[node.slug],
}));

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <PageHero
        eyebrow="Products"
        title="Every grade we stock, in one place"
        description="Browse by material grade below, or by product type — pipes, fittings, flanges, valves, fasteners and more — each with its own sub-types."
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
            eyebrow="Browse by Product Type"
            title="Pipes, fittings, flanges, valves & more"
            description="Every category opens into its full range of types — tap through to find the exact one you need."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {catalogWithImages.map((node) => (
              <ScrollReveal key={node.slug}>
                <CatalogCard href={`/products/${node.slug}`} node={node} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-16 sm:pt-20 lg:pt-28 pb-4 bg-graphite-50 border-t border-graphite-100">
        <div className="wrap">
          <ScrollReveal>
            <p className="eyebrow text-brass-600">Industries We Serve</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase text-graphite-900 leading-tight max-w-xl">
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