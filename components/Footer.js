import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { pages, siteConfig } from "@/data/siteConfig";
import { company } from "@/data/company";

function RingMark({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="6.5" />
    </svg>
  );
}

export default function Footer() {
  const navPages = pages.filter((p) => p.nav);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-900 text-graphite-300">
      <div className="wrap py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 text-paper">
            <span className="font-display text-xl font-bold uppercase tracking-tight">
              Om Poonam Metal <span className="text-brass-400">Overseas</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-sm text-graphite-400">
            {siteConfig.description}
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-500">
            ISO 9001:2015 · GSTIN {company.registrations.gstin} · IEC {company.registrations.iec}
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow text-brass-400 mb-4">Site</p>
          <ul className="space-y-2.5">
            {navPages.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="text-sm hover:text-paper transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow text-brass-400 mb-4">Materials</p>
          <ul className="space-y-2.5 text-sm">
            <li>Stainless Steel</li>
            <li>Alloy &amp; Special Alloys</li>
            <li>Non-Ferrous Metals</li>
            <li>Ferro Alloys</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-brass-400 mb-4">Reach us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brass-400" />
              <span>{company.address.full}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-brass-400" />
              <a href={`tel:${company.contact.phoneE164}`} className="hover:text-paper transition-colors">
                {company.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-brass-400" />
              <a href={`mailto:${company.contact.email}`} className="hover:text-paper transition-colors break-all">
                {company.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite-800">
        <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-graphite-500">
          <p>© {year} Om Poonam Metal Overseas. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wider">
            Prop. {company.proprietor} · Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
