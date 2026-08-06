import ScrollReveal from "./ScrollReveal";

const milestones = [
  {
    year: "2021",
    title: "Founded in Ahmedabad",
    body: "Om Poonam Metal Overseas begins trading and stocking metal, alongside group concern Vardhman Steel India.",
  },
  {
    year: "2021",
    title: "Production & Business Commenced",
    body: "Commencement of active business operations, building a base of stock and repeat customers.",
  },
  {
    year: "2026",
    title: "Udyam, GST & IEC Formalised",
    body: "MSME (Udyam) recognition, GST registration and an Importer-Exporter Code are put in place to support export trade.",
  },
  {
    year: "2026",
    title: "ISO 9001:2015 Certified",
    body: "Quality management system independently audited and certified by Vatsin World Services Pvt. Ltd.",
  },
];

export default function Timeline() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-graphite-100 border border-graphite-100">
      {milestones.map((m, i) => (
        <ScrollReveal key={`${m.year}-${m.title}`} delay={i * 0.07} className="bg-paper">
          <div className="h-full p-6 sm:p-7">
            <p className="font-mono text-xs tracking-[0.14em] text-brass-600">
              {String(i + 1).padStart(2, "0")} / {m.year}
            </p>
            <h3 className="mt-3 font-display text-lg font-bold uppercase text-graphite-900 leading-tight">
              {m.title}
            </h3>
            <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
              {m.body}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
