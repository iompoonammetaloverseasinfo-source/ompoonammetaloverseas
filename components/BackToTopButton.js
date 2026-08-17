"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Scroll-to-top button, stacked directly above WhatsAppButton on the
// same bottom-right corner. Hidden at the very top of the page, visible
// once the user has scrolled down even a small amount.
//
// Uses aria-hidden + tabIndex (not the `disabled` attribute) to hide it
// from screen readers/keyboard nav while invisible — `disabled` buttons
// pick up browser-default styling in some browsers that can conflict
// with a custom opacity-0 class.
export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-graphite-200 bg-paper text-graphite-700 shadow-lg transition-all duration-300 hover:border-brass-400 hover:text-brass-600 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}