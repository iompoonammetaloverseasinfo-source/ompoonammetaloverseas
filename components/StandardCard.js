export default function StandardCard({ code, title, summary }) {
  return (
    <div className="spec-card h-full">
      <div className="spec-card__strip">
        <span>{code}</span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-graphite-900 leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-graphite-500 leading-relaxed">
          {summary}
        </p>
      </div>
    </div>
  );
}
