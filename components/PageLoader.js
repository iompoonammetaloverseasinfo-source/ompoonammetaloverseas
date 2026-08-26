"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// Thin progress bar across the very top of the viewport, in the spirit
// of the YouTube/GitHub-style navigation loader. Next.js App Router
// doesn't expose a "navigation started" event the way Pages Router did,
// so the start is detected by intercepting clicks on internal links, and
// the end is detected by pathname/searchParams actually changing (which
// only happens once the new route has rendered).
function PageLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }
      const currentPath = window.location.pathname + window.location.search;
      if (href !== currentPath) setLoading(true);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Pathname or query changing means the new route has actually rendered
  // — that's the real "done" signal, not a timer guess.
  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-transparent">
          <motion.div
            className="h-full bg-brass-500"
            initial={{ width: "0%" }}
            animate={{ width: "85%" }}
            exit={{
              width: "100%",
              opacity: 0,
              transition: { width: { duration: 0.15 }, opacity: { duration: 0.35, delay: 0.15 } },
            }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}

// useSearchParams() requires a Suspense boundary in Next.js (build-time
// requirement, not optional) — wrapped here so the component is a
// complete, drop-in default export.
export default function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderInner />
    </Suspense>
  );
}