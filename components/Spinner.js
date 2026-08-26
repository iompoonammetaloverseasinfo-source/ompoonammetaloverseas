// Simple reusable spinner for inline "data is loading" states — form
// submissions, async button actions, etc. Uses currentColor so it
// inherits whatever text color its parent sets (e.g. text-paper on a
// brass button, text-brass-500 standing alone), and Tailwind's built-in
// animate-spin, no custom keyframe needed.
export default function Spinner({ className = "h-5 w-5" }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}