import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import IconTile from "./IconTile";

export default function CatalogCard({ href, node }) {
  const childCount = node.children?.length;

  // Image priority: a real manually-set photo (node.image) wins, then the
  // first scraped gallery shot (node.gallery[0]), then fall back to the
  // icon tile. Most nodes will only ever have the gallery photo since
  // node.image is a manual step — this is what makes the scrape alone
  // enough to get real product photos on the grid instead of icons.
  const photo = node.image
    ? { src: node.image, alt: node.name }
    : node.gallery?.[0]
      ? { src: node.gallery[0].url, alt: node.gallery[0].alt || node.name }
      : null;

  const grades = node.grades?.length ? node.grades : null;

  return (
    <Link href={href} className="group spec-card flex h-full flex-col">
      <div className="spec-card__strip">
        <span className="truncate">{node.name}</span>
        {childCount ? <span>{childCount}</span> : null}
      </div>
      <div className="relative flex aspect-[4/3] items-center justify-center bg-graphite-900">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 300px, 45vw"
          />
        ) : (
          <div className="transition-transform duration-300 group-hover:scale-105">
            <IconTile type={node.icon} size="md" />
          </div>
        )}
      </div>
      <div className="flex grow flex-col p-4 sm:p-5">
        <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-graphite-900 sm:text-xl">
          {node.name}
        </h3>
        {grades && (
          <div className="mt-1.5 flex flex-wrap gap-1">
            {grades.slice(0, 3).map((g) => (
              <span
                key={g}
                className="border border-graphite-200 bg-mist-50 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-graphite-500"
              >
                {g}
              </span>
            ))}
            {grades.length > 3 && (
              <span className="px-1 py-0.5 font-mono text-[11px] uppercase tracking-wide text-graphite-400">
                +{grades.length - 3}
              </span>
            )}
          </div>
        )}
        {node.description && (
          <p className="mt-1.5 text-xs leading-relaxed text-graphite-500 sm:text-sm">
            {node.description}
          </p>
        )}
        <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-semibold text-graphite-800 group-hover:text-brass-600">
          {childCount ? `View ${childCount} types` : "Enquire"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}