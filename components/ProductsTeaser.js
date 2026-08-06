import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { productFamilies } from "@/data/products";

export default function ProductsTeaser() {
  return (
    <section className="section bg-mist-50">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="What We Stock"
            title="Three material families. Every common form."
            description="From architectural stainless to high-nickel alloys for corrosive service — browse by grade or by form."
          />
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite-700 hover:text-brass-600 border-b border-graphite-300 hover:border-brass-500 pb-1 transition-colors"
          >
            Full product list
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productFamilies.map((family, i) => (
            <ScrollReveal key={family.id} delay={i * 0.08}>
              <div className="spec-card h-full flex flex-col">
                <div className="spec-card__strip">
                  <span>{family.code}</span>
                  <span>{family.grades.length} grades</span>
                </div>
                <div className="p-6 sm:p-7 flex flex-col grow">
                  <h3 className="font-display text-2xl font-bold uppercase text-graphite-900 tracking-tight">
                    {family.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-graphite-500 leading-relaxed">
                    {family.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {family.grades.slice(0, 8).map((g) => (
                      <span
                        key={g}
                        className="font-mono text-[11px] tracking-wide text-graphite-600 bg-mist-100 px-2 py-1"
                      >
                        {g}
                      </span>
                    ))}
                    {family.grades.length > 8 && (
                      <span className="font-mono text-[11px] tracking-wide text-brass-600 px-2 py-1">
                        +{family.grades.length - 8} more
                      </span>
                    )}
                  </div>
                  <Link
                    href="/products"
                    className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite-800 hover:text-brass-600 transition-colors"
                  >
                    View all
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
