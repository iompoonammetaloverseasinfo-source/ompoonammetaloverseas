import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { catalog, flattenCatalog } from "@/data/catalog";

// Every node in the catalog, at every depth, with its full slug path —
// reused as-is from the shared catalog helper rather than re-flattening.
const allEntries = flattenCatalog(catalog);

// The four product families worth a dedicated deep-link block on the
// homepage — matches the showcase set already used on the About page.
const categories = [
  {
    slug: "pipe-and-tube",
    label: "Pipe & Tube",
    blurb:
      "Seamless and welded, in stainless, alloy, duplex and high-nickel grades — stocked to ASME B36.19M / B36.10M dimensions.",
  },
  {
    slug: "pipe-fittings",
    label: "Pipe Fittings",
    blurb:
      "Elbows, tees, reducers, unions and forged fittings — butt-weld, socket-weld and threaded — across every grade we hold in pipe.",
  },
  {
    slug: "flanges",
    label: "Flanges",
    blurb:
      "Weld neck, slip-on, blind and other flange types, rated to ANSI/ASME B16.5, across stainless, alloy and carbon steel.",
  },
  {
    slug: "sheet-and-plate",
    label: "Sheet, Plate & Coil",
    blurb:
      "Sheets, plates, coils and strips — mill finish through to chequered and patterned stock — in every thickness we carry.",
  },
];

// Splits a category's leaf products (actual detail pages, not groups)
// into three buckets so each block reads like a curated list rather than
// a raw data dump: high-performance alloys, standard/carbon grades, and
// everything else (fitting types, flange types, coil/strip/etc).
function bucketLeaves(categorySlug) {
  const leaves = allEntries.filter(
    (e) => e.path[0] === categorySlug && (!e.node.children || e.node.children.length === 0)
  );

  // De-dupe by display name, keeping the shortest (most direct) path —
  // the scraped catalog sometimes lists the same grade under a group
  // page and again directly under its parent.
  const byName = new Map();
  for (const e of leaves) {
    const existing = byName.get(e.node.name);
    if (!existing || e.path.length < existing.path.length) byName.set(e.node.name, e);
  }
  const unique = [...byName.values()];

  const alloys = [];
  const grades = [];
  const rest = [];
  for (const e of unique) {
    const n = e.node.name;
    if (/duplex|inconel|hastelloy|monel|titanium|nickel alloy/i.test(n)) {
      alloys.push(e);
    } else if (/stainless steel \d|carbon steel|mild steel|alloy steel/i.test(n)) {
      grades.push(e);
    } else {
      rest.push(e);
    }
  }

  return {
    alloys: alloys.slice(0, 5),
    grades: grades.slice(0, 5),
    rest: rest.slice(0, 5),
  };
}

function LinkColumn({ heading, items }) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-graphite-400">{heading}</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((e) => (
          <li key={e.path.join("/")}>
            <Link
              href={`/products/${e.path.join("/")}`}
              className="group inline-flex items-center gap-1.5 text-sm text-graphite-700 hover:text-brass-600 transition-colors"
            >
              {e.node.name}
              <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GradeLinkDirectory() {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <SectionHeading
          eyebrow="Find Your Grade"
          title="Jump straight to the exact product you need"
          description="Every category below opens into full dimensions, tolerances, chemical composition and standards — no digging through a generic PDF."
        />

        <div className="mt-14 space-y-12">
          {categories.map((cat, i) => {
            const { alloys, grades, rest } = bucketLeaves(cat.slug);
            const hasAny = alloys.length + grades.length + rest.length > 0;
            if (!hasAny) return null;

            return (
              <ScrollReveal key={cat.slug} delay={i * 0.06}>
                <div className="border border-graphite-100">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-graphite-100 bg-mist-50 px-6 py-4 sm:px-7">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-graphite-900 sm:text-xl">
                      {cat.label}
                    </h3>
                    <Link
                      href={`/products/${cat.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite-500 hover:text-brass-600 transition-colors"
                    >
                      View all
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="px-6 py-6 sm:px-7 sm:py-7">
                    <p className="max-w-2xl text-sm leading-relaxed text-graphite-500">
                      {cat.blurb}
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
                      <LinkColumn heading="High-Performance Alloys" items={alloys} />
                      <LinkColumn heading="Standard & Carbon Grades" items={grades} />
                      <LinkColumn heading="Types & Fabricated Items" items={rest} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}