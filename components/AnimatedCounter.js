"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Counts up from 0 to `value` once this element scrolls into view (never
// re-triggers on scroll back up/down, via useInView's `once: true`).
// Plain requestAnimationFrame rather than a library — framer-motion's
// useInView is the only piece actually needed here, and is already a
// project dependency.
export default function AnimatedCounter({ value, suffix = "", duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    let frame;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.floor(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}