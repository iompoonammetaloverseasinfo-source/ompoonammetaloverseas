import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CatalogCard from "@/components/CatalogCard";
import ProductIcon from "@/components/ProductIcon";
import IconTile from "@/components/IconTile";
import ImageWithFallback from "@/components/ImageWithFallback";
import SectionHeading from "@/components/SectionHeading";
import GradesAvailable from "@/components/GradesAvailable";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import DataTable from "@/components/DataTable";
import Gallery from "@/components/Gallery";
import CatalogueDownload from "@/components/CatalogueDownload";
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

// Turns any heading/label into a URL-safe anchor id, e.g. "Standards & Compliance" -> "standards-compliance"
function slugify(label) {
  return (label || "")
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Simple responsive grid for a node's image gallery. Uses next/image with
// `fill` inside a fixed-aspect box so images stay uniform regardless of
// their original dimensions, and falls back to the node name for alt text
// if an individual gallery entry doesn't provide one.
export default function CatalogNodePage({ params }) {
  const result = findCatalogNode(params.slug);
  if (!result) notFound();
  const { node, trail } = result;
  const hasChildren = node.children && node.children.length > 0;

  // hero_image (from the latest scrape) is a richer object with real alt
  // text and an already-local path; older/un-rescraped nodes only have
  // the plain `image` string. Prefer hero_image, fall back to image,
  // fall back to null (ImageWithFallback then shows the icon tile).
const heroImage = node.hero_image
  ? { src: node.hero_image.local_path || node.hero_image.url, alt: node.hero_image.alt || node.name }
  : node.image
    ? { src: node.image, alt: node.name }
    : { src: "/images/fall-back.png", alt: node.name };

  // Price tables from the original scrape are excluded site-wide as stale,
  // competitor-sourced figures — not OPMO's own pricing, and not
  // appropriate to republish regardless of age. Filtered once, here, so
  // it's excluded consistently from the TOC, the rendered tables, and the
  // anchor-id set used to validate table_of_contents links.
  const PRICE_TABLE_PATTERN = /price|\bcost\b|\brate\b|\bpricing\b/i;
  const filteredDataTables = (node.dataTables || []).filter(
    (t) => !PRICE_TABLE_PATTERN.test(t.title)
  );

  const dataTableGroups = filteredDataTables.length ? groupDataTables(filteredDataTables) : [];
  // "Grouped" only kicks in the section-nav/collapsible treatment when a
  // node actually opted into it (via a `group` field on its tables) — a
  // node with a couple of flat, ungrouped tables (like each grade page)
  // still gets exactly the plain layout it always had.
  const isGrouped =
    dataTableGroups.length > 0 &&
    (dataTableGroups.length > 1 || dataTableGroups[0].group !== null);

  // specification_order/specifications (from the latest scrape) are short
  // factual property/application lists — e.g. "Features of ASTM A312 TP
  // 310 Seamless Pipe" -> ["Resistance to hot corrosion", ...]. Renders as
  // its own bulleted section, replacing the older flattened `specs`
  // comma-string rendering for nodes that have the richer data.
  const hasRichSpecs =
    !hasChildren && node.specification_order && node.specification_order.length > 0;

  // Every id that will actually exist as a scrollable anchor on this
  // rendered page — used to filter the scraper-provided table_of_contents
  // down to entries that go somewhere, since not every original heading
  // survived scraping/cleaning with its content intact.
  const renderedSectionIds = new Set();
  if (node.guide) {
    for (const item of node.guide) renderedSectionIds.add(slugify(item.heading));
  }
  for (const { tables } of dataTableGroups) {
    for (const t of tables) renderedSectionIds.add(slugify(t.title));
  }
  if (hasRichSpecs) {
    for (const key of node.specification_order) renderedSectionIds.add(slugify(key));
  } else if (!hasChildren && node.specs && node.specs.length > 0) {
    renderedSectionIds.add("key-data");
  }

  // Whole-page table of contents, split into up to two labeled clusters —
  // guide material vs. technical data — rather than one flat list. Only
  // shown once there's enough on the page to be worth jumping around, so a
  // short 2-table grade page doesn't get a pointless box.
  const tocGroups = [];
  if (node.guide) {
    tocGroups.push({
      label: "About This Material",
      items: node.guide.map((item) => ({ id: slugify(item.heading), label: item.heading })),
    });
  }

  if (!hasChildren && node.table_of_contents && node.table_of_contents.length > 0) {
    // Scraper-provided TOC has richer, more specific labels than the
    // group-name fallback below — but only keep entries that resolve to
    // an id that's actually rendered somewhere on this page.
    const items = node.table_of_contents
      .map((entry) => ({ id: slugify(entry.label), label: entry.label }))
      .filter((item) => renderedSectionIds.has(item.id));
    if (items.length > 0) {
      tocGroups.push({ label: node.guide ? "Technical Data" : null, items });
    }
  } else {
    const dataTocItems = [];
    if (hasRichSpecs) {
      dataTocItems.push({ id: "specifications", label: "Specifications" });
    } else if (!hasChildren && node.specs && node.specs.length > 0) {
      dataTocItems.push({ id: "key-data", label: "Key Data" });
    }
    if (isGrouped) {
      // A product can mix grouped and ungrouped tables — groupDataTables()
      // buckets any table with no `group` under the key `null`. Give that
      // bucket the same fallback id/label the fully-ungrouped case below
      // uses, instead of slugifying `null`.
      for (const { group } of dataTableGroups) {
        dataTocItems.push({
          id: group ? slugify(group) : "technical-data",
          label: group || "Technical Data",
        });
      }
    } else if (dataTableGroups.length && dataTableGroups[0].tables.length) {
      dataTocItems.push({ id: "technical-data", label: "Technical Data" });
    }
    if (dataTocItems.length > 0) {
      tocGroups.push({ label: node.guide ? "Technical Data" : null, items: dataTocItems });
    }
  }
  const tocItemCount = tocGroups.reduce((sum, g) => sum + g.items.length, 0);

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

  // Where the "Back" link should point: the immediate parent in the trail,
  // or the top-level /products index if this node has no parent above it.
  const backHref =
    trail.length > 1
      ? `/products/${trail
        .slice(0, -1)
        .map((t) => t.slug)
        .join("/")}`
      : "/products";
  const backLabel = trail.length > 1 ? trail[trail.length - 2].name : "Products";

  return (
    <>
      <section className="relative overflow-hidden bg-graphite-900 pt-[68px]">
        <div className="absolute inset-0 grid-backdrop-dark opacity-100" aria-hidden="true" />
        <div className="wrap relative py-12 sm:py-16">
          <ScrollReveal>
            <Breadcrumb items={breadcrumbItems} dark />
          </ScrollReveal>
          <ScrollReveal delay={0.03}>
            <Link
              href={backHref}
              className="group mt-4 inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-wide text-graphite-400 transition-colors hover:text-brass-300"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to {backLabel}
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="mt-5 flex items-start gap-4 sm:gap-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-graphite-700 bg-graphite-800 sm:h-20 sm:w-20">
                <ImageWithFallback
                  src={heroImage?.src}
                  alt={heroImage?.alt || node.name}
                  className="object-cover"
                  sizes="80px"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center">
                      <IconTile type={node.icon} size="sm" />
                    </div>
                  }
                />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold uppercase leading-[0.95] text-paper sm:text-5xl lg:text-6xl">
                  {node.name}
                </h1>
                {node.description && (
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-graphite-300 sm:text-xl">
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
                    className="border border-graphite-700 px-3 py-1.5 font-mono text-sm uppercase tracking-wide text-brass-300"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* <CatalogueDownload /> */}

      {tocItemCount > 2 && (
        <section className="section bg-paper !py-8">
          <div className="wrap max-w-3xl">
            <div className="border border-graphite-200 bg-mist-50 p-6 sm:p-8">
              <p className="eyebrow mb-5">On This Page</p>
              <div className="space-y-6">
                {tocGroups.map((tg) => (
                  <div key={tg.label || "toc-group"}>
                    {tg.label && (
                      <p className="mb-2.5 font-mono text-xs uppercase tracking-wide text-graphite-400">
                        {tg.label}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {tg.items.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="border border-graphite-200 bg-paper px-3.5 py-2 text-base text-graphite-700 transition-colors hover:border-brass-400 hover:bg-brass-50 hover:text-graphite-900"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {hasChildren ? (
        <>
          {(() => {
            const leafChildren = node.children.filter(
              (child) => !child.children || child.children.length === 0
            );
            const groupChildren = node.children.filter(
              (child) => child.children && child.children.length > 0
            );

            return (
              <>
                {leafChildren.length > 0 && (
                  <section className="section bg-mist-50">
                    <div className="wrap">
                      <p className="eyebrow mb-8">{leafChildren.length} types available</p>
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        {leafChildren.map((child) => (
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
                )}

                {groupChildren.map((group, i) => (
                  <section
                    key={group.slug}
                    className={`section ${
                      (leafChildren.length > 0 ? i + 1 : i) % 2 === 0 ? "bg-paper" : "bg-mist-50"
                    }`}
                  >
                    <div className="wrap">
                      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-graphite-200 pb-4">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-graphite-900 sm:text-3xl">
                          {group.name}
                        </h3>
                        <span className="font-mono text-xs uppercase tracking-wide text-graphite-400">
                          {group.children.length} types available
                        </span>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        {group.children.map((subProduct) => (
                          <ScrollReveal key={subProduct.slug}>
                            <CatalogCard
                              href={`/products/${[...params.slug, group.slug, subProduct.slug].join("/")}`}
                              node={subProduct}
                            />
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  </section>
                ))}
              </>
            );
          })()}
        </>
      ) : null}

      {hasChildren && (
        <GradesAvailable
          gradeTagLists={node.children.map((c) => c.grades || [])}
          categoryName={node.name}
        />
      )}

      {node.gallery && node.gallery.length > 0 && (
        <Gallery images={node.gallery} nodeName={node.name} icon={node.icon} />
      )}

      {node.guide && (
        <section className="section bg-paper">
          <div className="wrap max-w-3xl">
            <SectionHeading eyebrow="Know Your Material" title={`Understanding ${node.name}`} />
            <div className="mt-10 space-y-10">
              {node.guide.map((item) => (
                <ScrollReveal key={item.heading}>
                  <h3
                    id={slugify(item.heading)}
                    className="scroll-mt-24 font-display text-2xl font-bold uppercase tracking-tight text-graphite-900 sm:text-3xl"
                  >
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-graphite-600 sm:text-lg">
                    {item.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasRichSpecs && (
        <section id="specifications" className="section scroll-mt-24 bg-paper">
          <div className="wrap max-w-3xl">
            <SectionHeading eyebrow="Specification" title="Features & Applications" />
            <div className="mt-10 space-y-10">
              {node.specification_order.map((key) => {
                const items = node.specifications[key];
                if (!items || items.length === 0) return null;
                return (
                  <div key={key} id={slugify(key)} className="scroll-mt-24">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-graphite-900">
                      {key}
                    </h3>
                    <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-base text-graphite-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            {node.variants && node.variants.length > 0 && (
              <div className="mt-10">
                <p className="mb-3 font-mono text-sm uppercase tracking-wide text-graphite-500">Available As</p>
                <div className="flex flex-wrap gap-2">
                  {node.variants.map((v) => (
                    <span
                      key={v}
                      className="border border-graphite-200 bg-mist-50 px-3 py-1.5 text-sm text-graphite-700"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {!hasRichSpecs && !hasChildren && node.specs && node.specs.length > 0 && (
        <section id="key-data" className="section scroll-mt-24 bg-paper">
          <div className="wrap max-w-3xl">
            <SectionHeading eyebrow="Specification" title="Key Data" />
            <div className="mt-8 divide-y divide-graphite-100 border-t border-graphite-100">
              {node.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="shrink-0 font-mono text-sm uppercase tracking-wide text-graphite-500">
                    {s.label}
                  </span>
                  <span className="text-base text-graphite-800 sm:text-right">{s.value}</span>
                </div>
              ))}
            </div>
            {node.variants && node.variants.length > 0 && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-sm uppercase tracking-wide text-graphite-500">Available As</p>
                <div className="flex flex-wrap gap-2">
                  {node.variants.map((v) => (
                    <span
                      key={v}
                      className="border border-graphite-200 bg-mist-50 px-3 py-1.5 text-sm text-graphite-700"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {!hasChildren && node.seeAlso && (
        <section className="section !py-6 bg-paper">
          <div className="wrap max-w-3xl">
            <Link
              href={node.seeAlso.href}
              className="group flex items-center justify-between gap-4 border border-graphite-200 bg-mist-50 px-5 py-4 transition-colors hover:border-brass-400"
            >
              <span className="text-base text-graphite-700">
                <span className="font-semibold text-graphite-900">{node.seeAlso.note}</span> — see the full{" "}
                {node.seeAlso.label} page
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-graphite-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brass-600" />
            </Link>
          </div>
        </section>
      )}

      {!hasChildren && filteredDataTables.length > 0 && (
        <section id={isGrouped ? undefined : "technical-data"} className="section scroll-mt-24 bg-mist-50">
          <div className="wrap max-w-4xl">
            <SectionHeading eyebrow="Technical Data" title="Full Specifications" />

            <div className="mt-8 space-y-10">
              {!isGrouped &&
                dataTableGroups[0]?.tables.map((t) => (
                  <DataTable key={t.title} table={t} id={slugify(t.title)} />
                ))}

              {isGrouped &&
                dataTableGroups.map(({ group, tables }) => {
                  const startOpen = !tables.some((t) => t.collapsedByDefault);
                  const sectionId = group ? slugify(group) : "technical-data";
                  const sectionLabel = group || "Technical Data";
                  return (
                    <details
                      key={sectionId}
                      id={sectionId}
                      open={startOpen}
                      className="group scroll-mt-24 border-t border-graphite-200 pt-6 first:border-t-0 first:pt-0"
                    >
                      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-tight text-graphite-900">
                          <span className="inline-block text-brass-500 transition-transform group-open:rotate-90">
                            ›
                          </span>
                          {sectionLabel}
                        </span>
                      </summary>
                      <div className="mt-6 space-y-10 pl-5">
                        {tables.map((t) => (
                          <DataTable key={t.title} table={t} id={slugify(t.title)} />
                        ))}
                      </div>
                    </details>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {!hasChildren && (
        <section className="section bg-mist-50">
          <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-5">
              <div className="spec-card mx-auto max-w-sm lg:max-w-none">
                <div className="spec-card__strip">
                  <span>{node.name}</span>
                </div>
                <div className="relative aspect-square bg-graphite-900 p-10">
                  <ImageWithFallback
                    src={heroImage?.src}
                    alt={heroImage?.alt || node.name}
                    className="object-contain"
                    sizes="(min-width: 1024px) 400px, 90vw"
                    fallback={
                      <div className="flex h-full w-full items-center justify-center">
                        <IconTile type={node.icon} size="lg" />
                      </div>
                    }
                  />
                </div>
              </div>
            </ScrollReveal>
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.08}>
                <SectionHeading
                  eyebrow="Get a Price"
                  title="Request a quote for this item"
                  description="Specify the grade, size, quantity and governing standard, and we'll confirm stock and pricing — typically within the same working day."
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