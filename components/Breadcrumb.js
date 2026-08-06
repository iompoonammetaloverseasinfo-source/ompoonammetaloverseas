import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items, dark = false }) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto">
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-xs sm:text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className={`h-3 w-3 shrink-0 ${dark ? "text-graphite-500" : "text-graphite-300"}`}
                />
              )}
              {isLast ? (
                <span className={dark ? "text-brass-400" : "text-graphite-500"} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={
                    dark
                      ? "text-graphite-300 hover:text-paper"
                      : "text-graphite-500 hover:text-graphite-800"
                  }
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
