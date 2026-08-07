import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import IconTile from "./IconTile";

export default function CatalogCard({ href, node }) {
  const childCount = node.children?.length;

  return (
    <Link href={href} className="group spec-card flex h-full flex-col">
      <div className="spec-card__strip">
        <span className="truncate">{node.name}</span>
        {childCount ? <span>{childCount}</span> : null}
      </div>
      <div className="relative flex aspect-[4/3] items-center justify-center bg-graphite-900">
        {node.image ? (
          <Image
            src={node.image}
            alt={node.name}
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
