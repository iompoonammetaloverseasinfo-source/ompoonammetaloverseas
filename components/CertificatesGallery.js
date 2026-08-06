"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";
import { company } from "@/data/company";

const certificates = [
  {
    key: "iso",
    label: "ISO 9001:2015",
    sub: `Cert. No. ${company.certification.certificateNo}`,
    src: "/images/iso-9001-2015-certificate.jpg",
    width: 1600,
    height: 2263,
    alt: "ISO 9001:2015 Certificate of Registration — Om Poonam Metal Overseas",
  },
  {
    key: "gst",
    label: "GST Registration",
    sub: company.registrations.gstin,
    src: "/images/gst-registration-certificate.jpg",
    width: 1400,
    height: 1981,
    alt: "GST Registration Certificate — Om Poonam Metal Overseas",
  },
  {
    key: "iec",
    label: "Importer-Exporter Code",
    sub: company.registrations.iec,
    src: "/images/iec-certificate.jpg",
    width: 1400,
    height: 2000,
    alt: "Importer-Exporter Code Certificate — Om Poonam Metal Overseas",
  },
  {
    key: "udyam",
    label: "Udyam Registration",
    sub: company.registrations.udyam,
    src: "/images/udyam-registration-certificate.jpg",
    width: 1400,
    height: 1811,
    alt: "Udyam (MSME) Registration Certificate — Om Poonam Metal Overseas",
  },
];

export default function CertificatesGallery() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {certificates.map((cert) => (
          <button
            key={cert.key}
            type="button"
            onClick={() => setActive(cert)}
            className="group spec-card text-left"
          >
            <div className="spec-card__strip">
              <span className="truncate">{cert.label}</span>
            </div>
            <div
              className="no-save relative aspect-[3/4] overflow-hidden bg-mist-50"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 240px, 45vw"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-graphite-900/0 transition-colors group-hover:bg-graphite-900/30">
                <Expand className="h-6 w-6 text-paper opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <p className="font-mono text-[11px] sm:text-xs text-graphite-500 break-words">
                {cert.sub}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </>
  );
}
