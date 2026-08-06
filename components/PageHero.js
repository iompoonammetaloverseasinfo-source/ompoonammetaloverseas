import ScrollReveal from "./ScrollReveal";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative bg-graphite-900 pt-[68px] overflow-hidden">
      <div className="absolute inset-0 grid-backdrop-dark opacity-100" aria-hidden="true" />
      <div className="wrap relative py-16 sm:py-20">
        <ScrollReveal>
          {eyebrow && <p className="eyebrow text-brass-400">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase text-paper leading-[0.95] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-graphite-300 leading-relaxed">
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
