// Pure-CSS fade/rise-in, played once on paint via the `animate-fade-up`
// keyframe (see tailwind.config.js). Deliberately NOT IntersectionObserver
// based: below-the-fold content simply finishes animating before the user
// scrolls to it (ending at its normal, fully-visible state) rather than
// depending on scroll-triggered JS timing. This also means content is
// never at risk of staying invisible if JS is slow, or never runs at all
// if JS fails outright — it's plain CSS, so it always resolves to visible.
// `motion-reduce:` (Tailwind's prefers-reduced-motion variant) disables it.
export default function ScrollReveal({ children, delay = 0, className = "" }) {
  return (
    <div
      className={`animate-fade-up motion-reduce:animate-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
