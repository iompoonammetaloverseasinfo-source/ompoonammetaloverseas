import ScrollReveal from "./ScrollReveal";
import { expandGradeTag } from "@/data/products";

// Shows the real, specific grade numbers available across a category —
// not just family tags like "Stainless Steel", but the actual 304, 316,
// 321... list pulled from data/products.js. Give it every `grades` array
// used by a category's children; it dedupes tags, expands each into its
// full grade list, and groups the result under readable headings.
export default function GradesAvailable({ gradeTagLists }) {
  const uniqueTags = [...new Set(gradeTagLists.flat())];
  if (uniqueTags.length === 0) return null;

  const groups = uniqueTags.map((tag) => ({
    tag,
    grades: expandGradeTag(tag),
  }));

  return (
    <section className="section bg-mist-50">
      <div className="wrap">
        <p className="eyebrow mb-1.5">Every Grade, Not Just The Family Name</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-graphite-900 leading-tight">
          Grades Available in This Category
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ tag, grades }) => (
            <ScrollReveal key={tag}>
              <div className="spec-card h-full">
                <div className="spec-card__strip">
                  <span>{tag}</span>
                  <span>{grades.length}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 p-5">
                  {grades.map((g) => (
                    <span
                      key={g}
                      className="border border-graphite-100 bg-paper px-2.5 py-1 font-mono text-[11px] tracking-wide text-graphite-700"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
