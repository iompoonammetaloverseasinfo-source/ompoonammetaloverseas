import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import ImageWithFallback from "./ImageWithFallback";
import IconTile from "./IconTile";

// Simple responsive grid for a node's image gallery. Uses ImageWithFallback
// so a placeholder path with no file behind it yet degrades to the icon
// tile instead of a broken image, and falls back to the node name for alt
// text if an individual gallery entry doesn't provide one.
export default function Gallery({ images, nodeName, icon }) {
  return (
    <section className="section bg-paper">
      <div className="wrap max-w-5xl">
        <SectionHeading eyebrow="Gallery" title={`${nodeName} in Detail`} />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.url || i} delay={Math.min(i, 6) * 0.03}>
              <div className="relative aspect-square overflow-hidden border border-graphite-100 bg-mist-50">
                <ImageWithFallback
                  src={img.url}
                  alt={img.alt || img.caption || nodeName}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center">
                      <IconTile type={icon} size="md" />
                    </div>
                  }
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}