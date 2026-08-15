import { productFamilies } from "@/data/products";

const allGrades = productFamilies.flatMap((f) => f.grades);

export default function GradeMarquee() {
  const track = [...allGrades, ...allGrades];

  return (
    <div
      className="relative overflow-hidden border-y border-graphite-200 bg-mist-50 py-3"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
            {track.map((grade, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center font-mono text-xs sm:text-sm tracking-[0.1em] text-graphite-500 uppercase"
              >
                <span className="px-4 sm:px-5">{grade}</span>
                <span className="text-brass-500">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-mist-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-mist-50 to-transparent" />
    </div>
  );
}