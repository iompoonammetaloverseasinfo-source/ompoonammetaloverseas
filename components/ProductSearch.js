"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Search, X } from "lucide-react";

let cachedIndex = null;
let inFlight = null;

// Lazy-loads /search-index.json (generated at build time by
// scripts/build-search-index.mjs) once, then reuses it for every search —
// so opening the box is instant on repeat use and costs nothing on pages
// where a visitor never searches.
function useSearchIndex() {
  const [index, setIndex] = useState(cachedIndex);

  useEffect(() => {
    if (cachedIndex) return;
    if (!inFlight) {
      inFlight = fetch("/search-index.json")
        .then((r) => r.json())
        .then((data) => {
          cachedIndex = data;
          return data;
        });
    }
    let active = true;
    inFlight.then((data) => active && setIndex(data));
    return () => {
      active = false;
    };
  }, []);

  return index;
}

function matches(entry, terms) {
  const haystack = `${entry.n} ${entry.d} ${entry.g.join(" ")}`.toLowerCase();
  return terms.every((t) => haystack.includes(t));
}

export default function ProductSearch({ variant = "icon", initialQuery = "" }) {
  const [open, setOpen] = useState(Boolean(initialQuery));
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const index = useSearchIndex();

  // Lets a direct link like /products?q=316L (the target of the site's
  // SearchAction structured data, so Google's sitelinks searchbox has
  // somewhere real to send a query) open straight into results.
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!index || terms.length === 0) return [];
    const scored = index.filter((entry) => matches(entry, terms));
    return scored.slice(0, 8);
  }, [index, query]);

  const panel = open && (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-graphite-900/60 px-4 pt-24 sm:pt-32">
      <div
        ref={boxRef}
        className="w-full max-w-xl border border-graphite-200 bg-paper shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-graphite-200 px-4 py-3.5">
          <Search className="h-5 w-5 shrink-0 text-graphite-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search products, grades, standards…"
            className="w-full bg-transparent text-base text-graphite-900 placeholder:text-graphite-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close search"
            className="shrink-0 text-graphite-400 hover:text-graphite-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {query.trim() && (
          <ul className="max-h-[60vh] overflow-y-auto">
            {results.length === 0 && (
              <li className="px-4 py-6 text-center text-sm text-graphite-500">
                {index ? "No matches — try a grade, standard, or product name." : "Loading…"}
              </li>
            )}
            {results.map((r) => (
              <li key={r.p} className="border-b border-graphite-100 last:border-b-0">
                <Link
                  href={`/products/${r.p}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-mist-50"
                >
                  <p className="font-semibold text-graphite-900">{r.n}</p>
                  {r.d && (
                    <p className="mt-0.5 line-clamp-1 text-xs text-graphite-500">{r.d}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <>
      {variant === "icon" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Search products"
          className="flex h-9 w-9 items-center justify-center text-graphite-500 transition-colors hover:text-graphite-900"
        >
          <Search className="h-5 w-5" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-2.5 border border-graphite-200 bg-paper px-4 py-3 text-left text-graphite-500 transition-colors hover:border-graphite-300"
        >
          <Search className="h-4 w-4 shrink-0" />
          <span className="text-sm">Search products, grades, standards…</span>
        </button>
      )}
      {open && typeof document !== "undefined" && createPortal(panel, document.body)}
    </>
  );
}
