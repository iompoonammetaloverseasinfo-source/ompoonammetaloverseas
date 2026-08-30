"use client";

import { motion } from "framer-motion";

// Thin brass rule that draws in (scaleX 0 -> 1) under each headline
// stat, staggered slightly after its number lands. Split into its own
// client component since the About page itself is a server component —
// framer-motion's motion.* elements need client-side hooks and can't be
// used directly inside server component JSX.
export default function StatUnderline({ delay = 0 }) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="mx-auto mt-3 block h-px w-10 origin-center bg-brass-500"
    />
  );
}