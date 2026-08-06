import { company } from "@/data/company";

export default function GoogleMap({ className = "h-80 sm:h-96" }) {
  const { mapCoordinates, mapQuery } = company.address;

  // Coordinates give an exact pin (no geocoding guesswork); the text
  // address is the fallback if no coordinates are set for the location.
  const query = mapCoordinates
    ? `${mapCoordinates.lat},${mapCoordinates.lng}`
    : encodeURIComponent(mapQuery);

  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className={`w-full border border-graphite-100 ${className}`}>
      <iframe
        title="Om Poonam Metal Overseas — location map"
        src={src}
        className="h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}