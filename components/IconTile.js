import ProductIcon from "./ProductIcon";

// A richer presentation frame for a ProductIcon — a brushed-graphite
// plate with an inset highlight and soft shadow, so the icon reads as a
// considered product graphic rather than a bare outline floating on a
// flat background. Used everywhere a product appears: catalogue cards,
// category grids, and individual product pages.
export default function IconTile({ type, size = "md", className = "" }) {
  const sizes = {
    sm: { box: "h-20 w-20", icon: "h-10 w-10" },
    md: { box: "h-28 w-28", icon: "h-14 w-14" },
    lg: { box: "h-40 w-40 sm:h-44 sm:w-44", icon: "h-20 w-20 sm:h-24 sm:w-24" },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full ${s.box} ${className}`}
      style={{
        background:
          "radial-gradient(circle at 32% 28%, #333947 0%, #1B1F27 55%, #12151B 100%)",
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -8px 16px rgba(0,0,0,0.35), 0 6px 16px rgba(18,21,27,0.18)",
      }}
    >
      <div
        className="absolute inset-[3px] rounded-full"
        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        aria-hidden="true"
      />
      <ProductIcon type={type} className={s.icon} />
    </div>
  );
}
