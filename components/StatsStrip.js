import ScrollReveal from "./ScrollReveal";
import { company } from "@/data/company";

export default function StatsStrip() {
  return (
    <section className="bg-paper border-b border-graphite-100">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4 gap-px bg-graphite-100">
        {company.stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.06} className="bg-paper">
            <div className="h-full py-8 sm:py-10 px-5 sm:px-7 border-l-2 border-brass-400">
              <p className="font-display text-3xl sm:text-4xl font-bold text-graphite-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-graphite-500 leading-snug">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
