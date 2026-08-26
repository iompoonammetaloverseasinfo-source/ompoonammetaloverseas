import { Boxes, Clock3, Globe2, ShieldCheck, UserCheck, FileCheck2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/data/company";

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
        <div className="max-w-auto">
          <ScrollReveal>
            <p className="eyebrow text-brass-600">Why {company.legalTradeName}</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-graphite-900 sm:text-4xl">
              A trusted partner for critical piping applications
            </h2>

            <div className="mt-6 space-y-4 text-graphite-600 leading-relaxed">
              <p>
                At {company.legalTradeName}, we are committed to supplying
                high-quality steel pipes and tubes that meet the diverse
                requirements of industrial and commercial applications.
                With a strong focus on quality, reliability, competitive
                pricing, and customer satisfaction, we aim to provide
                dependable solutions to customers across India and
                international markets.
              </p>
              <p>
                Our product range includes Hot Finished Welded Tubes, Thick
                Wall Seamless Steel Tubing, Heavy Wall Seamless Steel
                Pipes, Large Diameter Steel Pipes, and various other steel
                piping products. We offer products in different materials,
                grades, sizes, and specifications to suit a wide range of
                project and application requirements.
              </p>
              <p>
                Thick Wall Seamless Steel Tubing is designed for
                applications where enhanced strength and pressure
                resistance are required, while Heavy Wall Seamless Steel
                Pipes offer greater wall thickness and durability for
                demanding industrial environments. Large Diameter Steel
                Pipes are suitable for applications requiring high-volume
                flow and robust piping solutions.
              </p>
              <p>
                At {company.legalTradeName}, we understand the importance
                of consistent product quality, accurate specifications,
                reliable sourcing, and timely delivery. Our approach is
                focused on providing products that meet customer
                requirements while maintaining high standards throughout
                the supply process.
              </p>
              <p>
                With our commitment to quality products, professional
                service, and dependable global supply,{" "}
                {company.legalTradeName} strives to build long-term
                relationships with customers and become a trusted name in
                the steel pipes and tubes industry.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border border-graphite-100 bg-graphite-100 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={(i % 3) * 0.08} className="bg-paper">
              <div className="h-full p-7 sm:p-8">
                <Icon className="h-6 w-6 text-brass-500" strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-xl font-bold uppercase text-graphite-900 tracking-tight">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm text-graphite-500 leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}