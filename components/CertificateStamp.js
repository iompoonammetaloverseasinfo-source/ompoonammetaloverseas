"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// A circular ink-stamp graphic that snaps into place — scale, rotation
// and a brief impact ring — when it scrolls into view. The signature
// motion element for the About page: this company's entire pitch is
// "paperwork that holds up," so the stamp isn't decoration, it's the
// literal motif of the page. Respects prefers-reduced-motion by
// dropping straight to the resting state with no animation.
export default function CertificateStamp({
  size = 120,
  rotation = -10,
  opacity = 1,
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const resting = { scale: 1, rotate: rotation, opacity };

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? resting : { scale: 2.2, rotate: rotation - 18, opacity: 0 }}
      animate={isInView ? resting : undefined}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }
      }
      style={{ width: size, height: size }}
      className={`relative select-none ${className}`}
      aria-hidden="true"
    >
      {/* impact ring */}
      {!reduceMotion && (
        <motion.span
          initial={{ scale: 0.6, opacity: 0.5 }}
          animate={isInView ? { scale: 1.6, opacity: 0 } : undefined}
          transition={{ duration: 0.6, delay: delay + 0.35, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border-2 border-brass-400"
        />
      )}
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          id="stampCircleTop"
          d="M 100 20 A 80 80 0 0 1 180 100"
          fill="none"
        />
        <text fontSize="12" fontFamily="monospace" letterSpacing="2" fill="currentColor">
          <textPath href="#stampCircleTop" startOffset="2">
            VERIFIED · ISO 9001:2015
          </textPath>
        </text>
        <g transform="translate(100,105)">
          <path
            d="M -28 0 L -10 18 L 30 -24"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </motion.div>
  );
}