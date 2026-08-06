import ScrollReveal from "./ScrollReveal";
import { industries } from "@/data/products";

export default function IndustriesStrip() {
  return (
    <ScrollReveal>
      <div className="flex flex-wrap gap-3">
        {industries.map((industry) => (
          <span
            key={industry}
            className="text-sm text-graphite-200 bg-graphite-800 border border-graphite-700 px-4 py-2"
          >
            {industry}
          </span>
        ))}
      </div>
    </ScrollReveal>
  );
}
