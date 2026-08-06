import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Calendar, FileCheck2, ShieldCheck } from "lucide-react";
import ProtectedImage from "./ProtectedImage";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { company } from "@/data/company";

const facts = [
  {
    icon: FileCheck2,
    label: "Certificate No.",
    value: company.certification.certificateNo,
  },
  {
    icon: ShieldCheck,
    label: "Standard",
    value: company.certification.standard,
  },
  {
    icon: Calendar,
    label: "Valid Until",
    value: company.certification.dateOfExpiry,
  },
  {
    icon: BadgeCheck,
    label: "Issued By",
    value: company.certification.issuingBody,
  },
];

export default function CertificateShowcase() {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <SectionHeading
          eyebrow="Registered &amp; Certified"
          title="Quality you can verify, not just trust"
          description="Our quality management system is independently assessed and certified to ISO 9001:2015 — covering manufacturing, trading, stocking, import, export and supply across our full product range."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <ScrollReveal className="lg:col-span-5" delay={0.05}>
            <div className="spec-card mx-auto max-w-sm lg:max-w-none shadow-sm">
              <div className="spec-card__strip">
                <span>Cert No. {company.certification.certificateNo}</span>
                <span className="text-brass-600">Verified</span>
              </div>
              <div className="p-3">
                <ProtectedImage
                  src="/images/iso-9001-2015-certificate.jpg"
                  alt="ISO 9001:2015 Certificate of Registration issued to Om Poonam Metal Overseas by Vatsin World Services Private Limited"
                  width={1600}
                  height={2263}
                  className="w-full h-auto"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="spec-card">
                <div className="spec-card__strip">
                  <span>Registration Summary</span>
                  <span>{company.certification.issuingBodyAccreditation}</span>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                  {facts.map(({ icon: Icon, label, value }, i) => (
                    <div
                      key={label}
                      className={`flex items-start gap-3 p-5 ${
                        i % 2 === 0 ? "sm:border-r" : ""
                      } ${i < 2 ? "border-b" : ""} border-graphite-100`}
                    >
                      <Icon className="h-4 w-4 mt-1 text-brass-500 shrink-0" />
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-graphite-400">
                          {label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium text-graphite-800 break-words">
                          {value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-graphite-100 bg-paper p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-graphite-400">
                    GSTIN
                  </p>
                  <p className="mt-1 text-sm font-semibold text-graphite-800">
                    {company.registrations.gstin}
                  </p>
                </div>
                <div className="border border-graphite-100 bg-paper p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-graphite-400">
                    Import-Export Code
                  </p>
                  <p className="mt-1 text-sm font-semibold text-graphite-800">
                    {company.registrations.iec}
                  </p>
                </div>
                <div className="border border-graphite-100 bg-paper p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-graphite-400">
                    Udyam (MSME)
                  </p>
                  <p className="mt-1 text-sm font-semibold text-graphite-800">
                    {company.registrations.udyam}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/about#certificates"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-graphite-700 hover:text-brass-600 border-b border-graphite-300 hover:border-brass-500 pb-1 transition-colors"
              >
                View GST, IEC &amp; Udyam certificates
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
