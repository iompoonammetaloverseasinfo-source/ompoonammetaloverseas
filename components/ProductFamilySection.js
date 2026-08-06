import ScrollReveal from "./ScrollReveal";

export default function ProductFamilySection({ family }) {
  return (
    <ScrollReveal>
      <div className="spec-card">
        <div className="spec-card__strip">
          <span>
            {family.code} · {family.name}
          </span>
          <span>{family.grades.length} grades stocked</span>
        </div>
        <div className="p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="font-display text-3xl font-bold uppercase text-graphite-900 leading-[0.95]">
              {family.name}
            </h3>
            <p className="mt-4 text-sm text-graphite-500 leading-relaxed">
              {family.blurb}
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2">
              {family.grades.map((grade) => (
                <span
                  key={grade}
                  className="font-mono text-xs sm:text-[13px] tracking-wide text-graphite-700 bg-mist-50 border border-graphite-100 px-3 py-1.5 hover:border-brass-400 hover:text-brass-700 transition-colors"
                >
                  {grade}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
