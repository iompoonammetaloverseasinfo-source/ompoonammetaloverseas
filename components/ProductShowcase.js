import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconTile from "./IconTile";
import ImageWithFallback from "./ImageWithFallback";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { catalog, countLeafTypes } from "@/data/catalog";

// The homepage's main visual answer to "what does Om Poonam actually
// sell" — every top-level category shown large, with its own graphic,
// name and a real count of what's inside it. This is the site's primary
// product showcase; ProductsTeaser and CatalogScale further down go
// deeper on grades and numbers respectively.
//
// PLACEHOLDER IMAGES — drop real (your own, or properly licensed) photos
// into /public/images/products/ using these exact filenames and each
// card switches over automatically:
//   pipe-and-tube.jpg · pipe-fittings.jpg · flanges.jpg ·
//   sheet-and-plate.jpg · round-bars.jpg
// If a filename below doesn't exist yet in /public, ImageWithFallback
// catches the load error at runtime and shows the icon tile instead —
// safe to leave entries in this map ahead of the actual files landing.
//
// Deliberately NOT falling back to catalog.js's scraped `gallery` data:
// every populated gallery URL in the current catalog points directly at
// ashtapad.co.in's own image server, so using it here would mean
// hotlinking a competitor's photos onto the homepage. A manually-set
// `category.image` (a real photo you've hosted yourself) still takes
// priority over the placeholder map below, if you'd rather set it there
// instead of here.
const categoryImages = {
  "pipe-and-tube": "/images/products/pipe-and-tube.jpg",
  "pipe-fittings": "/images/products/pipe-fittings.jpg",
  flanges: "/images/products/flanges.jpg",
  "sheet-and-plate": "/images/products/sheet-and-plate.jpg",
  "round-bars": "/images/products/round-bars.jpg",
};

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
                        <div className="transition-transform duration-300 group-hover:scale-105">
                          <IconTile type={category.icon} size="md" />
                        </div>
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