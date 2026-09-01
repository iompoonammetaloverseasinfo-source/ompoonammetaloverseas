import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { pages, siteConfig } from "@/data/siteConfig";
import { company } from "@/data/company";

export default function Footer() {
  const navPages = pages.filter((p) => p.nav);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-50 text-graphite-600 border-t border-graphite-100">
      <div className="wrap py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Image
            src="/logo.jpeg"
            alt={siteConfig.name}
            width={220}
            height={220}
            className="h-32 w-auto object-contain"
          />
          <p className="mt-4 text-sm leading-relaxed max-w-sm text-graphite-500">
            {siteConfig.description}
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-400">
            ISO 9001:2015 · GSTIN {company.registrations.gstin} · IEC {company.registrations.iec}
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow text-brass-600 mb-4">Site</p>
          <ul className="space-y-2.5">
            {navPages.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="text-sm hover:text-graphite-900 transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

               <div className="lg:col-span-2">
          <p className="eyebrow text-brass-600 mb-4">Materials</p>
          <ul className="space-y-2.5 text-sm">
            <li>Stainless Steel</li>
            <li>Alloy &amp; Special Alloys</li>
            <li>Ferrous Metals</li>
            <li>Non-Ferrous Metals</li>
            <li>Ferro Alloys</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-brass-600 mb-4">Reach us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brass-600" />
              <span>{company.address.full}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-brass-600" />
              <a href={`tel:${company.contact.phoneE164}`} className="hover:text-graphite-900 transition-colors">
                {company.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-brass-600" />
              <a href={`mailto:${company.contact.email}`} className="hover:text-graphite-900 transition-colors break-all">
                {company.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite-200">
        <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-graphite-500">
          <p>© {year} Om Poonam Metal Overseas. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wider">
            Prop. {company.proprietor} · Ahmedabad, Gujarat
          </p>
        </div>
      </div>

      <div className="border-t border-graphite-200">
        <div className="wrap py-4 flex justify-center">
          <p className="text-xs text-graphite-500">
            Designed &amp; Developed by{" "}
            <a
              href="https://roshpixel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-graphite-700 hover:text-brass-600 transition-colors"
            >
              RoshPixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}