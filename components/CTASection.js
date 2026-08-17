import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/data/company";

export default function CTASection() {
  return (
    <section className="section bg-graphite-50 relative overflow-hidden border-y border-graphite-100">
      <div className="absolute inset-0 grid-backdrop opacity-[0.5]" aria-hidden="true" />
      <div className="wrap relative text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow text-brass-600">Ready when you are</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold uppercase text-graphite-900 leading-[0.95]">
            Tell us the grade, size and quantity
          </h2>
          <p className="mt-5 text-graphite-600 leading-relaxed">
            Share your requirement and we&rsquo;ll confirm stock, grade
            certification and delivery — usually within the day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-brass-500 hover:bg-brass-600 text-paper font-semibold px-6 py-3.5 transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:${company.contact.phoneE164}`}
              className="inline-flex items-center gap-2 border border-graphite-300 hover:border-brass-500 text-graphite-800 font-semibold px-6 py-3.5 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {company.contact.phoneDisplay}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}