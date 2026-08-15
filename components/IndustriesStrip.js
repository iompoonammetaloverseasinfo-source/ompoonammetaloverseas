import ScrollReveal from "./ScrollReveal";
import { industries } from "@/data/products";

export default function IndustriesStrip() {
  return (
    <ScrollReveal>
      <div className="flex flex-wrap gap-3">
        {industries.map((industry) => (
          <span
            key={industry}
            className="text-sm text-graphite-700 bg-paper border border-graphite-200 px-4 py-2"
          >
            {industry}
          </span>
        ))}
      </div>
    </ScrollReveal>
  );
}