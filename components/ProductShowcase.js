import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconTile from "./IconTile";
import ImageWithFallback from "./ImageWithFallback";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { catalog, countLeafTypes } from "@/data/catalog";
import { categoryImages, GENERIC_FALLBACK_IMAGE } from "@/data/categoryImages";

// The homepage's main visual answer to "what does Om Poonam actually
// sell" — every top-level category shown large, with its own graphic,
// name and a real count of what's inside it. This is the site's primary
// product showcase; ProductsTeaser and CatalogScale further down go
// deeper on grades and numbers respectively.
//
// Image fallback chain, three deep:
//   1. category.image (a manually-set real photo) or the shared
//      per-category path from data/categoryImages.js.
//   2. GENERIC_FALLBACK_IMAGE — one shared placeholder photo, if a
//      specific category image is missing/hasn't landed yet.
//   3. IconTile — if even the generic fallback file is missing, so the
//      card never shows a broken image.
//
// Deliberately NOT falling back to catalog.js's scraped `gallery` data:
// some populated gallery URLs in the catalog still point directly at
// ashtapad.co.in's own image server (for nodes not yet re-scraped with
// the newer local-path pipeline), so using it here risks hotlinking a
// competitor's photo onto the homepage.
export default function ProductShowcase() {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <SectionHeading
          eyebrow="What We Supply"
          title="Everything, at a glance"
          description="Every category below opens into its full range — tap through to see every grade and type we stock."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {catalog.map((category, i) => {
            const imageSrc = category.image || categoryImages[category.slug] || null;

            return (
              <ScrollReveal key={category.slug} delay={(i % 5) * 0.05}>
                <Link
                  href={`/products/${category.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-graphite-100 bg-mist-50 text-center transition-colors hover:border-brass-300 hover:bg-paper"
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center bg-graphite-900">
                    <ImageWithFallback
                      src={imageSrc}
                      alt={category.name}
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 220px, 45vw"
                      fallback={
                        <ImageWithFallback
                          src={GENERIC_FALLBACK_IMAGE}
                          alt={category.name}
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          sizes="(min-width: 1024px) 220px, 45vw"
                          fallback={
                            <div className="transition-transform duration-300 group-hover:scale-105">
                              <IconTile type={category.icon} size="md" />
                            </div>
                          }
                        />
                      }
                    />
                  </div>
                  <div className="flex grow flex-col items-center p-5 sm:p-7">
                    <h3 className="font-display text-base font-bold uppercase leading-tight tracking-tight text-graphite-900 sm:text-lg">
                      {category.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-graphite-400">
                      {countLeafTypes(category)} types
                    </p>
                    <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-graphite-500 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-brass-600">
                      Browse
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}