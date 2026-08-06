import { Boxes, Clock3, Globe2, ShieldCheck, UserCheck, FileCheck2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Certified",
    body: "Sourcing, verification and dispatch all run under an independently audited quality management system.",
  },
  {
    icon: FileCheck2,
    title: "Grade-Verified Stock",
    body: "What's specified on the order is what leaves the yard — no substitutions without sign-off.",
  },
  {
    icon: Clock3,
    title: "On-Time, By Objective",
    body: "\u201C100% timely delivery of products\u201D is a standing quality objective we're measured against, not a slogan.",
  },
  {
    icon: Globe2,
    title: "Import & Export Ready",
    body: "IEC-registered for cross-border trade, alongside an established domestic supply base.",
  },
  {
    icon: Boxes,
    title: "30+ Metals, One Supplier",
    body: "Stainless, alloy and non-ferrous materials in sheet, plate, coil, pipe, tube and bar — under one roof.",
  },
  {
    icon: UserCheck,
    title: "Proprietor-Led Relationships",
    body: "Enquiries are handled directly, so grade questions and delivery commitments get a straight answer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-mist-50">
      <div className="wrap">
        <SectionHeading
          eyebrow="Why Om Poonam Metal Overseas"
          title="Built for buyers who check the mill certificate"
          description="A small, ISO-certified operation run on a simple principle: the material matches the paperwork, every time."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-graphite-100 border border-graphite-100">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={(i % 3) * 0.08} className="bg-paper">
              <div className="h-full p-7 sm:p-8">
                <Icon className="h-6 w-6 text-brass-500" strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-xl font-bold uppercase text-graphite-900 tracking-tight">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm text-graphite-500 leading-relaxed">
                  {body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
