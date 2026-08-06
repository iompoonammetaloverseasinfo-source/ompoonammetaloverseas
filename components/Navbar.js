"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";
import { pages, siteConfig } from "@/data/siteConfig";
import { company } from "@/data/company";

function RingMark({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="6.5" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navPages = pages.filter((p) => p.nav);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-graphite-900/95 backdrop-blur border-b border-graphite-700/60"
          : "bg-transparent"
      )}
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-paper"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="font-display text-5xl sm:text-xl font-bold uppercase leading-none tracking-tight">
            Om Poonam Metal
            <span className="text-brass-400"> Overseas</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navPages.map((p) => {
            const active = pathname === p.path;
            return (
              <Link
                key={p.path}
                href={p.path}
                className={clsx(
                  "font-mono text-[13px] uppercase tracking-[0.12em] transition-colors",
                  active ? "text-brass-400" : "text-graphite-200 hover:text-paper"
                )}
              >
                {p.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${company.contact.phoneE164}`}
            className="flex items-center gap-2 text-sm text-graphite-200 hover:text-paper transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-brass-400" />
            {company.contact.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center bg-brass-500 hover:bg-brass-400 text-graphite-900 font-semibold text-sm px-5 py-2.5 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 text-paper"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-graphite-700/60 bg-graphite-900"
            aria-label="Mobile"
          >
            <div className="wrap flex flex-col py-4">
              {navPages.map((p) => {
                const active = pathname === p.path;
                return (
                  <Link
                    key={p.path}
                    href={p.path}
                    className={clsx(
                      "py-3 font-display text-2xl font-semibold uppercase tracking-tight border-b border-graphite-800",
                      active ? "text-brass-400" : "text-paper"
                    )}
                  >
                    {p.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${company.contact.phoneE164}`}
                className="mt-5 flex items-center gap-2 text-graphite-200"
              >
                <Phone className="h-4 w-4 text-brass-400" />
                {company.contact.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="mt-4 inline-flex justify-center items-center bg-brass-500 text-graphite-900 font-semibold text-sm px-5 py-3"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
