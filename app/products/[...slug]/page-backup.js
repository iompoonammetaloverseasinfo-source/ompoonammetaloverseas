import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CatalogCard from "@/components/CatalogCard";
import ProductIcon from "@/components/ProductIcon";
import IconTile from "@/components/IconTile";
import SectionHeading from "@/components/SectionHeading";
import GradesAvailable from "@/components/GradesAvailable";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { catalog, flattenCatalog, findCatalogNode, groupDataTables } from "@/data/catalog";
import { siteUrl } from "@/data/siteConfig";

export function generateStaticParams() {
  return flattenCatalog(catalog).map((entry) => ({ slug: entry.path }));
}

export function generateMetadata({ params }) {
  const result = findCatalogNode(params.slug);
  if (!result) return {};
  const { node } = result;
  const description =
    node.description ||
    `${node.name} supplied by Om Poonam Metal Overseas — ISO 9001:2015 certified metal stockists, Ahmedabad.`;
  const path = `/products/${params.slug.join("/")}`;
  return {
    title: `${node.name} — Products`,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
  };
}

// Turns a group label into a URL-safe anchor id, e.g. "Standards & Compliance" -> "standards-compliance"
function slugifyGroup(label) {
  return label
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function DataTable({ table }) {
  return (
    <div>
      <h4 className="font-display text-base font-bold uppercase tracking-tight text-graphite-900">
        {table.title}
      </h4>
      {table.columns.length > 6 && (
        <p className="mt-1 text-xs italic text-graphite-400">Scroll to see all columns →</p>
      )}
      <div className="mt-3 overflow-x-auto border border-graphite-100 bg-paper">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-graphite-200 bg-mist-50">
              {table.columns.map((c) => (
                <th
                  key={c}
                  className="whitespace-nowrap px-3 py-2 text-left font-mono text-xs uppercase tracking-wide text-graphite-500"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-graphite-100 last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="whitespace-nowrap px-3 py-2 text-graphite-800">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CatalogNodePage({ params }) {
  const result = findCatalogNode(params.slug);
  if (!result) notFound();
  const { node, trail } = result;
  const hasChildren = node.children && node.children.length > 0;

  const dataTableGroups = node.dataTables ? groupDataTables(node.dataTables) : [];
  // "Grouped" only kicks in the section-nav/collapsible treatment when a
  // node actually opted into it (via a `group` field on its tables) — a
  // node with a couple of flat, ungrouped tables (like each grade page)
  // still gets exactly the plain layout it always had.
  const isGrouped =
    dataTableGroups.length > 0 &&
    (dataTableGroups.length > 1 || dataTableGroups[0].group !== null);

  const breadcrumbItems = [
    { href: "/products", label: "Products" },
    ...trail.map((t, i) => ({
      href: `/products/${trail
        .slice(0, i + 1)
        .map((x) => x.slug)
        .join("/")}`,
      label: t.name,
    })),
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-graphite-900 pt-[68px]">
        <div className="absolute inset-0 grid-backdrop-dark opacity-100" aria-hidden="true" />
        <div className="wrap relative py-12 sm:py-16">
          <ScrollReveal>
            <Breadcrumb items={breadcrumbItems} dark />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="mt-5 flex items-start gap-4 sm:gap-5">
              {!node.image && <IconTile type={node.icon} size="sm" />}
              <div>
                <h1 className="font-display text-3xl font-bold uppercase leading-[0.95] text-paper sm:text-5xl lg:text-6xl">
                  {node.name}
                </h1>
                {node.description && (
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-300 sm:text-lg">
                    {node.description}
                  </p>
                )}
              </div>
            </div>
          </ScrollReveal>
          {node.grades && (
            <ScrollReveal delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-2">
                {node.grades.map((g) => (
                  <span
                    key={g}
                    className="border border-graphite-700 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-brass-300"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {hasChildren ? (
        <section className="section bg-mist-50">
          <div className="wrap">
            <p className="eyebrow mb-8">{node.children.length} types available</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {node.children.map((child) => (
                <ScrollReveal key={child.slug}>
                  <CatalogCard
                    href={`/products/${[...params.slug, child.slug].join("/")}`}
                    node={child}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {hasChildren && (
        <GradesAvailable
          gradeTagLists={node.children.map((c) => c.grades || [])}
          categoryName={node.name}
        />
      )}

      {node.guide && (
        <section className="section bg-paper">
          <div className="wrap max-w-3xl">
            <SectionHeading eyebrow="Know Your Material" title={`Understanding ${node.name}`} />
            <div className="mt-10 space-y-10">
              {node.guide.map((item) => (
                <ScrollReveal key={item.heading}>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-graphite-900 sm:text-2xl">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600 sm:text-base">
                    {item.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {!hasChildren && node.specs && node.specs.length > 0 && (
        <section className="section bg-paper">
          <div className="wrap max-w-3xl">
            <SectionHeading eyebrow="Specification" title="Key Data" />
            <div className="mt-8 divide-y divide-graphite-100 border-t border-graphite-100">
              {node.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-graphite-500">
                    {s.label}
                  </span>
                  <span className="text-sm text-graphite-800 sm:text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!hasChildren && node.dataTables && node.dataTables.length > 0 && (
        <section className="section bg-mist-50">
          <div className="wrap max-w-4xl">
            <SectionHeading eyebrow="Technical Data" title="Full Specifications" />

            {isGrouped && (
              <nav className="mt-6 flex flex-wrap gap-2" aria-label="Jump to section">
                {dataTableGroups.map(({ group }) => (
                  <a
                    key={group}
                    href={`#${slugifyGroup(group)}`}
                    className="border border-graphite-200 bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-graphite-600 transition-colors hover:border-brass-400 hover:text-graphite-900"
                  >
                    {group}
                  </a>
                ))}
              </nav>
            )}

            <div className="mt-8 space-y-10">
              {!isGrouped &&
                dataTableGroups[0]?.tables.map((t) => <DataTable key={t.title} table={t} />)}

              {isGrouped &&
                dataTableGroups.map(({ group, tables }) => {
                  const startOpen = !tables.some((t) => t.collapsedByDefault);
                  return (
                    <details
                      key={group}
                      id={slugifyGroup(group)}
                      open={startOpen}
                      className="group scroll-mt-24 border-t border-graphite-200 pt-6 first:border-t-0 first:pt-0"
                    >
                      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-tight text-graphite-900">
                          <span className="inline-block text-brass-500 transition-transform group-open:rotate-90">
                            ›
                          </span>
                          {group}
                        </span>
                      </summary>
                      <div className="mt-6 space-y-10 pl-5">
                        {tables.map((t) => (
                          <DataTable key={t.title} table={t} />
                        ))}
                      </div>
                    </details>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {!node.guide && !hasChildren && (
        <section className="section bg-mist-50">
          <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <div className="spec-card mx-auto max-w-sm lg:max-w-none">
                <div className="spec-card__strip">
                  <span>{node.name}</span>
                </div>
                <div className="flex aspect-square items-center justify-center bg-graphite-900 p-10">
                  {node.image ? (
                    <Image
                      src={node.image}
                      alt={node.name}
                      width={480}
                      height={480}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <IconTile type={node.icon} size="lg" />
                  )}
                </div>
              </div>
            </ScrollReveal>
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.08}>
                <SectionHeading
                  eyebrow="Get a Price"
                  title="Request a quote for this item"
                  description="Tell us the grade, size, quantity and standard you need, and we'll confirm stock and pricing — usually the same working day."
                />
                <Link
                  href={`/contact?product=${encodeURIComponent(node.name)}`}
                  className="group mt-8 inline-flex items-center gap-2 bg-brass-500 px-6 py-3.5 font-semibold text-graphite-900 transition-colors hover:bg-brass-400"
                >
                  Request a Quote for {node.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}