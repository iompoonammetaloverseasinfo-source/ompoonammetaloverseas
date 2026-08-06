import ScrollReveal from "./ScrollReveal";
import { productForms } from "@/data/products";

export default function ProductFormsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-graphite-100 border border-graphite-100">
      {productForms.map((form, i) => (
        <ScrollReveal key={form.name} delay={(i % 4) * 0.05} className="bg-paper">
          <div className="h-full p-5 sm:p-6">
            <p className="font-mono text-[11px] text-brass-600">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold uppercase text-graphite-900 leading-tight">
              {form.name}
            </h3>
            <p className="mt-1.5 text-xs text-graphite-500 leading-relaxed">
              {form.note}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
