import Link from "next/link";
import { ArrowRight, Boxes, CalendarDays, Globe2, LayoutGrid, PackageSearch, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/data/company";
import { catalog, countLeafTypes } from "@/data/catalog";

// company.stats keeps its exact label text as the single source of
// truth; this just maps each known label to an icon for this section.
// Falls back to Boxes for any future stat added to company.js without a
// matching entry here, so nothing silently breaks.
const iconForLabel = {
  "Stainless steel grades stocked": Boxes,
  "Metals & alloys traded": Globe2,
  "Year founded": CalendarDays,
  "Certified quality system": ShieldCheck,
};

// Same four material groupings already used in Footer.js — reused as-is
// rather than a longer list, so the two don't drift out of sync.
const materials = ["Stainless Steel", "Alloy & Special Alloys", "Non-Ferrous Metals", "Ferro Alloys"];

const totalProductPages = catalog.reduce((sum, c) => sum + countLeafTypes(c), 0);

// Computed, always-accurate additions to the static company.stats —
// stay correct automatically as catalog.js grows.
const catalogStats = [
  {
    icon: PackageSearch,
    value: `${totalProductPages}+`,
    label: "Product pages in our catalogue",
  },
  {
    icon: LayoutGrid,
    value: `${catalog.length}`,
    label: "Major product categories stocked",
  },
];

const allStats = [
  ...company.stats.map((s) => ({ ...s, icon: iconForLabel[s.label] || Boxes })),
  ...catalogStats,
];

export default function StatsStrip() {
  return (
    <section className="section bg-paper border-b border-graphite-100">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Descriptive column — who the company is and what it stocks */}
        <ScrollReveal className="lg:col-span-4">
          <p className="eyebrow text-brass-600">About {company.shortName || company.legalTradeName}</p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-graphite-900 sm:text-3xl">
            Stainless, alloy & non-ferrous metal, stocked and traded from Ahmedabad
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-graphite-600 sm:text-base">
            {company.legalTradeName} is an {company.certification.standard}-certified stockist,
            trader, importer and exporter, founded in {company.founded} and operating alongside
            its group concern, {company.groupConcern}. Stock spans sheets, plates and coils
            through to pipes, tubes, fittings, flanges and structurals.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {materials.map((m) => (
              <span
                key={m}
                className="border border-graphite-200 bg-mist-50 px-3 py-1.5 text-xs font-mono uppercase tracking-wide text-graphite-600"
              >
                {m}
              </span>
            ))}
          </div>
          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite-800 hover:text-brass-600 transition-colors"
          >
            More about the company
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </ScrollReveal>

        {/* Stats grid — static company facts + live catalogue counts */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 gap-px bg-graphite-100 sm:grid-cols-3">
            {allStats.map(({ icon: Icon, value, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.05} className="bg-paper">
                <div className="h-full border-l-2 border-brass-400 px-5 py-7 sm:px-7 sm:py-8">
                  <Icon className="h-5 w-5 text-brass-500" strokeWidth={1.6} />
                  <p className="mt-4 font-display text-2xl font-bold text-graphite-900 sm:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-graphite-500 sm:text-sm">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}