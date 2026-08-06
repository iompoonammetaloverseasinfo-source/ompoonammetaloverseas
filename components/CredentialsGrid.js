import ScrollReveal from "./ScrollReveal";
import { company } from "@/data/company";

const credentials = [
  {
    label: "GST Registration",
    value: company.registrations.gstin,
    note: "Regular scheme · Government of India",
  },
  {
    label: "Importer-Exporter Code",
    value: company.registrations.iec,
    note: "DGFT, Ministry of Commerce & Industry",
  },
  {
    label: "Udyam Registration (MSME)",
    value: company.registrations.udyam,
    note: `${company.registrations.udyamType} · Ministry of MSME`,
  },
  {
    label: "Quality Certification",
    value: company.certification.standard,
    note: `Cert. No. ${company.certification.certificateNo}`,
  },
];

export default function CredentialsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-graphite-100 border border-graphite-100">
      {credentials.map((c, i) => (
        <ScrollReveal key={c.label} delay={i * 0.06} className="bg-paper">
          <div className="h-full p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-400">
              {c.label}
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-graphite-900 tracking-tight break-words">
              {c.value}
            </p>
            <p className="mt-1.5 text-xs text-graphite-500">{c.note}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
