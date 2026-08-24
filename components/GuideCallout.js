import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function GuideCallout() {
  return (
    <section className="border-y border-graphite-100 bg-paper">
      <div className="wrap py-8 sm:py-10">
        <ScrollReveal>
          <Link
            href="/products/pipe-and-tube"
            className="group flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3 sm:items-center">
              <BookOpen className="h-5 w-5 shrink-0 text-brass-500" />
              <p className="text-sm text-graphite-700 sm:text-base">
                <span className="font-semibold text-graphite-900">New:</span>{" "}
                Pipe vs. tube, seamless vs. welded, and how sizing actually
                works — our material basics guide.
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-graphite-600 group-hover:text-brass-600">
              Read the guide
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}