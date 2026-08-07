"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Boxes, Globe2, Clock3, FileCheck2 } from "lucide-react";
import { company } from "@/data/company";

const claims = [
  {
    icon: ShieldCheck,
    text: `${company.certification.standard} Certified Quality Management System`,
  },
  {
    icon: Boxes,
    text: "17+ Stainless Steel Grades Always In Stock",
  },
  {
    icon: Globe2,
    text: "IEC Registered — Ready For Import & Export",
  },
  {
    icon: FileCheck2,
    text: `GST & Udyam (MSME) Registered Since ${company.founded}`,
  },
  {
    icon: Clock3,
    text: `Standing Quality Objective: "${company.qualityObjective}"`,
  },
];

// A slim, auto-advancing strip of short, verified claims — sits below the
// hero as a second, faster-reading trust signal alongside the main
// headline. Pauses on hover/focus and respects prefers-reduced-motion.
export default function RotatingBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % claims.length);
    }, 3800);
    return () => clearInterval(id);
  }, [paused]);

  const Icon = claims[index].icon;

  return (
    <div
      className="border-b border-graphite-100 bg-mist-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="wrap flex h-12 items-center justify-center gap-3 sm:h-14">
        <Icon className="h-4 w-4 shrink-0 text-brass-500" aria-hidden="true" />
        <p
          key={index}
          className="motion-safe:animate-fade-up text-center font-mono text-[11px] uppercase tracking-[0.1em] text-graphite-600 sm:text-xs"
          role="status"
        >
          {claims[index].text}
        </p>
      </div>
      <div className="flex justify-center gap-1.5 pb-2.5" role="tablist" aria-label="Company highlights">
        {claims.map((claim, i) => (
          <button
            key={claim.text}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show highlight ${i + 1} of ${claims.length}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-4 bg-brass-500" : "w-1.5 bg-graphite-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
