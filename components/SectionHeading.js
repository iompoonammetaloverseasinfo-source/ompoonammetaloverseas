import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={clsx(
        "max-w-2xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={clsx("eyebrow mb-3", isDark && "text-brass-300")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-display text-4xl sm:text-5xl font-bold uppercase leading-[0.95] tracking-tight",
          isDark ? "text-paper" : "text-graphite-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-graphite-200" : "text-graphite-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
