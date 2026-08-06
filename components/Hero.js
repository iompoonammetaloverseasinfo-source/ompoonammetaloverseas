import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GradeMarquee from "./GradeMarquee";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative bg-graphite-900 pt-[68px] overflow-hidden">
      <div className="absolute inset-0 grid-backdrop-dark opacity-100" aria-hidden="true" />
      <div
        className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-brass-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="wrap relative py-20 sm:py-28 lg:py-32">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 border border-graphite-700 bg-graphite-800/60 px-3 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brass-400" />
            <span className="eyebrow text-brass-300">
              ISO 9001:2015 Certified · Ahmedabad, India
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="mt-7 font-display font-black uppercase text-paper leading-[0.92] text-[15vw] sm:text-[9vw] lg:text-[6.4vw] tracking-tight">
            The grade on the order.
            <br />
            <span className="text-brass-400">The grade on the dock.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-base sm:text-lg text-graphite-300 leading-relaxed">
            {company.legalTradeName} stocks and trades stainless, alloy and
            non-ferrous metal — sheets to structurals — verified to grade and
            backed by an ISO 9001:2015 quality management system, from
            Ahmedabad, Gujarat.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-brass-500 hover:bg-brass-400 text-graphite-900 font-semibold px-6 py-3.5 transition-colors"
            >
              Browse Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-graphite-600 hover:border-brass-400 text-paper font-semibold px-6 py-3.5 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <GradeMarquee />
    </section>
  );
}
