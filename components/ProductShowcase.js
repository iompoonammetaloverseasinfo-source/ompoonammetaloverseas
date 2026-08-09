import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconTile from "./IconTile";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { catalog, countLeafTypes } from "@/data/catalog";

// The homepage's main visual answer to "what does Om Poonam actually
// sell" — every top-level category shown large, with its own graphic,
// name and a real count of what's inside it. This is the site's primary
// product showcase; ProductsTeaser and CatalogScale further down go
// deeper on grades and numbers respectively.
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
          {catalog.map((category, i) => (
            <ScrollReveal key={category.slug} delay={(i % 5) * 0.05}>
              <Link
                href={`/products/${category.slug}`}
                className="group flex h-full flex-col items-center border border-graphite-100 bg-mist-50 p-5 text-center transition-colors hover:border-brass-300 hover:bg-paper sm:p-7"
              >
                <IconTile type={category.icon} size="md" />
                <h3 className="mt-5 font-display text-base font-bold uppercase leading-tight tracking-tight text-graphite-900 sm:text-lg">
                  {category.name}
                </h3>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-graphite-400">
                  {countLeafTypes(category)} types
                </p>
                <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-graphite-500 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-brass-600">
                  Browse
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
