"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import clsx from "clsx";
import { pages, siteConfig } from "@/data/siteConfig";
import { company } from "@/data/company";
import { catalog } from "@/data/catalog";
import Image from "next/image";

// Sub-links shown in the Products dropdown (desktop) and accordion (mobile).
const productLinks = [
  { href: "/products", label: "All Products" },
  ...catalog.map((c) => ({ href: `/products/${c.slug}`, label: c.name })),
];

// Renders the dropdown menu into document.body via a portal, positioned
// with `fixed` coordinates computed from the trigger button. This avoids
// depending on z-index stacking through the header/hero DOM tree — the
// menu is guaranteed to paint above everything else because it IS the
// last thing in <body>, not because of a z-index that has to win a
// cascade fight.
function ProductsDropdownPortal({ anchorRect, onClose }) {
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    };
    const onKey = (e) => e.key === "Escape" && onClose();
    const onScroll = () => onClose();
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onClose]);

  if (!mounted || !anchorRect) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.15 }}
        style={{
          position: "fixed",
          top: anchorRect.bottom + 12,
          left: anchorRect.left,
        }}
        className="z-[999] w-64 border border-graphite-200 bg-paper shadow-2xl"
      >
        {productLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block border-b border-graphite-100 px-4 py-3 text-sm text-graphite-700 last:border-b-0 hover:bg-mist-50 hover:text-brass-700"
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownRect, setDropdownRect] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const productsBtnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownRect(null);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleDesktopDropdown = () => {
    if (dropdownRect) {
      setDropdownRect(null);
      return;
    }
    const rect = productsBtnRef.current?.getBoundingClientRect();
    if (rect) setDropdownRect(rect);
  };

  const navPages = pages.filter((p) => p.nav);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur transition-shadow duration-300",
        scrolled || open ? "shadow-sm border-b border-graphite-100" : "border-b border-transparent"
      )}
    >
      <div className="wrap flex h-20 items-center justify-between gap-6">

        {/* Company Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center py-2"
          aria-label={`${siteConfig.name} — home`}
        >
          <Image
            src="/logo.jpeg"
            alt={siteConfig.name}
            width={160}
            height={160}
            priority
            className="h-14 w-auto lg:h-16 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-9" aria-label="Primary">
          {navPages.map((p) => {
            const active = pathname === p.path;

            if (p.path === "/products") {
              return (
                <button
                  key={p.path}
                  ref={productsBtnRef}
                  type="button"
                  onClick={toggleDesktopDropdown}
                  aria-expanded={!!dropdownRect}
                  className={clsx(
                    "flex items-center gap-1 font-mono text-[13px] uppercase tracking-[0.12em] transition-colors",
                    active ? "text-brass-600" : "text-graphite-600 hover:text-graphite-900"
                  )}
                >
                  {p.label}
                  <ChevronDown
                    className={clsx("h-3.5 w-3.5 transition-transform", dropdownRect && "rotate-180")}
                  />
                </button>
              );
            }

            return (
              <Link
                key={p.path}
                href={p.path}
                className={clsx(
                  "font-mono text-[13px] uppercase tracking-[0.12em] transition-colors",
                  active ? "text-brass-600" : "text-graphite-600 hover:text-graphite-900"
                )}
              >
                {p.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex shrink-0 items-center gap-5">
          <a
            href={`tel:${company.contact.phoneE164}`}
            className="flex items-center gap-2 text-sm text-graphite-600 hover:text-graphite-900 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-brass-600" />
            {company.contact.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center bg-brass-500 hover:bg-brass-600 text-paper font-semibold text-sm px-5 py-2.5 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center text-graphite-900"
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
            className="lg:hidden overflow-hidden border-t border-graphite-100 bg-paper max-h-[calc(100vh-64px)] overflow-y-auto"
            aria-label="Mobile"
          >
            <div className="wrap flex flex-col py-4">
              {navPages.map((p) => {
                const active = pathname === p.path;

                if (p.path === "/products") {
                  return (
                    <div key={p.path} className="border-b border-graphite-100">
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        aria-expanded={mobileProductsOpen}
                        className={clsx(
                          "flex w-full items-center justify-between py-3 font-display text-2xl font-semibold uppercase tracking-tight",
                          active ? "text-brass-600" : "text-graphite-900"
                        )}
                      >
                        {p.label}
                        <ChevronDown
                          className={clsx(
                            "h-5 w-5 transition-transform",
                            mobileProductsOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {productLinks.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block py-2.5 font-mono text-sm uppercase tracking-wide text-graphite-500"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={p.path}
                    href={p.path}
                    className={clsx(
                      "py-3 font-display text-2xl font-semibold uppercase tracking-tight border-b border-graphite-100",
                      active ? "text-brass-600" : "text-graphite-900"
                    )}
                  >
                    {p.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${company.contact.phoneE164}`}
                className="mt-5 flex items-center gap-2 text-graphite-600"
              >
                <Phone className="h-4 w-4 text-brass-600" />
                {company.contact.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="mt-4 inline-flex justify-center items-center bg-brass-500 text-paper font-semibold text-sm px-5 py-3"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {dropdownRect && (
        <ProductsDropdownPortal anchorRect={dropdownRect} onClose={() => setDropdownRect(null)} />
      )}
    </header>
  );
}