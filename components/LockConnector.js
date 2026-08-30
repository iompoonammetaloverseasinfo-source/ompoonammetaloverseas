"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// The "+" between the two group-company logos springs in with a bounce
// only after both cards have had time to land, so it reads as pieces
// locking together rather than everything fading in at once. Its own
// client component for the same reason as StatUnderline — the page
// itself is a server component.
export default function LockConnector({ delay = 0.55 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0, rotate: -90, opacity: 0 }}
      animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 16, delay }}
      className="inline-block font-display text-3xl font-bold text-brass-500"
    >
      +
    </motion.span>
  );
}