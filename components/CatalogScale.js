import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductIcon from "./ProductIcon";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { catalog, countLeafTypes } from "@/data/catalog";
import { productFamilies } from "@/data/products";

const totalLeafTypes = catalog.reduce((sum, c) => sum + countLeafTypes(c), 0);
const totalGrades = productFamilies.reduce((sum, f) => sum + f.grades.length, 0);

export default function CatalogScale() {
  return (
    <section className="section bg-graphite-50 relative overflow-hidden border-y border-graphite-100">
      <div className="absolute inset-0 grid-backdrop opacity-[0.5]" aria-hidden="true" />
      <div className="wrap relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="The Catalogue, By The Numbers"
            title={`${totalLeafTypes} product types. ${totalGrades} grades. One supplier.`}
            description="Every figure below is live from our own product catalogue — not a round estimate."
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px border border-graphite-200 bg-graphite-200 sm:grid-cols-4">
          {catalog.map((category) => (
            <ScrollReveal key={category.slug} className="bg-paper">
              <Link
                href={`/products/${category.slug}`}
                className="group flex h-full flex-col p-5 sm:p-6"
              >
                <ProductIcon
                  type={category.icon}
                  className="h-8 w-8 text-graphite-400 transition-colors group-hover:text-brass-500"
                />
                <p className="mt-4 font-display text-3xl font-bold text-graphite-900">
                  {countLeafTypes(category)}
                </p>
                <p className="mt-1 text-xs leading-snug text-graphite-500">
                  {category.name}
                </p>
                <span className="mt-auto flex items-center gap-1 pt-4 text-[11px] font-mono uppercase tracking-wider text-graphite-400 group-hover:text-brass-600">
                  View
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}