import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

// Mills and manufacturers whose material OPMO sources, stocks and trades
// — from the firm's own print catalogue ("Brands With Us" page). Logo
// files supplied directly (higher quality than the earlier PDF crops).
// Name kept in `alt` for accessibility/SEO even though not shown as
// visible text — logos are the only visual content in each tile.
const brands = [
  { name: "JSL (Jindal Stainless)", logo: "/images/brands/jsl-jindal-stainless.png" },
  { name: "Tata Steel", logo: "/images/brands/tata-steel.png" },
  { name: "SAIL", logo: "/images/brands/sail.jpg" },
  { name: "JSW", logo: "/images/brands/jsw.png" },
  { name: "Jindal Steel & Power", logo: "/images/brands/jindal-steel-power.png" },
  { name: "Vizag Steel", logo: "/images/brands/vizag-steel.jpg" },
  { name: "Jindal Star", logo: "/images/brands/jindal-star.jpg" },
  { name: "AM/NS India", logo: "/images/brands/amns-india.jpg" },
  { name: "Welspun", logo: "/images/brands/welspun.png" },
  { name: "Surya", logo: "/images/brands/surya.jpg" },
  { name: "Asian Tubes & Pipes", logo: "/images/brands/asian-tubes-pipes.png" },
  { name: "Venus Pipes and Tubes", logo: "/images/brands/venus-pipes-tubes.png" },
  { name: "Gallantt", logo: "/images/brands/gallantt.jpg" },
  { name: "Hi-Tech Pipes", logo: "/images/brands/hi-tech-pipes.png" },
  { name: "ET TMT", logo: "/images/brands/et-tmt.webp" },
  { name: "APL Apollo Steel Pipes", logo: "/images/brands/apl-apollo.png" },
  { name: "Jindal", logo: "/images/brands/jindal.png" },
  { name: "Sant Valves", logo: "/images/brands/sant-valves.jpg" },
  { name: "Ratnamani", logo: "/images/brands/ratnamani.png" },
  { name: "Maharashtra Seamless Limited", logo: "/images/brands/maharashtra-seamless.jpg" },
];

export default function BrandsMarquee() {
  return (
    <section className="section bg-mist-50">
      <div className="wrap">
        <ScrollReveal>
          <p className="mb-10 text-center font-display text-3xl font-bold uppercase tracking-tight text-brass-600 sm:text-4xl lg:text-5xl">
            Brands With Us
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {brands.map((b, i) => (
            <ScrollReveal key={b.name} delay={(i % 10) * 0.03}>
              <div className="flex h-full items-center justify-center border border-graphite-200 bg-paper p-6 transition-colors hover:border-brass-400 sm:p-7">
                <div className="relative h-20 w-full sm:h-24 lg:h-28">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 200px, 45vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}