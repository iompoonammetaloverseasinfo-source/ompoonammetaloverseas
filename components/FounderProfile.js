import Image from "next/image";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/data/company";

export default function FounderProfile() {
  return (
    <section className="section bg-paper relative overflow-hidden">
      <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <ScrollReveal className="lg:col-span-4">
          <div className="spec-card max-w-xs mx-auto lg:mx-0">
            <div className="spec-card__strip">
              <span>Proprietor</span>
              <span className="text-brass-600">Since 2021</span>
            </div>
            <div className="p-3">
              <Image
                src="/images/founder-harachndram-purohit.jpg"
                alt="Harachndram V. Purohit, Proprietor of Om Poonam Metal Overseas"
                width={658}
                height={884}
                className="w-full h-auto grayscale-0"
                sizes="(min-width: 1024px) 320px, 70vw"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-8">
          <ScrollReveal>
            <p className="eyebrow text-brass-600">The Founder</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold uppercase text-graphite-900 leading-[0.95]">
              {company.proprietor}
            </h2>
            <p className="mt-2 font-mono text-sm text-graphite-500 uppercase tracking-[0.14em]">
              {company.designation}, {company.legalTradeName}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <Quote className="mt-8 h-7 w-7 text-brass-500/70" />
            <p className="mt-3 font-display text-2xl sm:text-3xl leading-snug text-graphite-800 max-w-2xl">
              &ldquo;Our word is only as good as the mill certificate behind
              it. Every coil, plate and pipe that leaves our stock is the
              grade it was sold as.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="mt-8 space-y-4 text-graphite-600 leading-relaxed max-w-2xl">
              <p>
                Mr. {company.proprietor} founded {company.legalTradeName} in{" "}
                {company.founded} in Ahmedabad, Gujarat, building a metal
                trading business on a simple discipline: stock the right
                grade, keep the paperwork straight, and deliver on time. As{" "}
                {company.designation.toLowerCase()}, he oversees sourcing,
                quality verification and client relationships personally —
                from first enquiry through to dispatch.
              </p>
              <p>
                Under his leadership the firm has formalised its
                registrations for domestic and international trade —
                including its GST registration, Importer-Exporter Code and
                Udyam (MSME) recognition — and brought its quality management
                system up to an independently certified{" "}
                {company.certification.standard} standard, opening the way
                for the company to serve export markets alongside its
                established base in India.
              </p>
              <p>
                The firm operates alongside its group concern,{" "}
                {company.groupConcern}, and holds &ldquo;
                {company.qualityObjective}&rdquo; as a standing quality
                objective reviewed at every management review meeting.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}