import { npsReference, flangeClasses } from "@/data/standards";

export default function DimensionReference() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 spec-card">
        <div className="spec-card__strip">
          <span>NPS → Outside Diameter</span>
          <span>mm, fixed by standard</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-graphite-100 text-left">
                <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-graphite-400">
                  NPS
                </th>
                <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-graphite-400">
                  DN
                </th>
                <th className="px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-graphite-400">
                  O.D. (mm)
                </th>
              </tr>
            </thead>
            <tbody>
              {npsReference.map((row, i) => (
                <tr
                  key={row.nps}
                  className={i % 2 === 1 ? "bg-mist-50" : ""}
                >
                  <td className="px-5 py-2.5 font-mono text-graphite-800">{row.nps}</td>
                  <td className="px-5 py-2.5 font-mono text-graphite-500">{row.dn}</td>
                  <td className="px-5 py-2.5 font-mono text-graphite-800">{row.od}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lg:col-span-5 spec-card">
        <div className="spec-card__strip">
          <span>ASME B16.5 Pressure Classes</span>
        </div>
        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap gap-2">
            {flangeClasses.map((c) => (
              <span
                key={c}
                className="font-mono text-sm text-graphite-800 bg-mist-50 border border-graphite-100 px-3 py-1.5"
              >
                Class {c}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs text-graphite-500 leading-relaxed">
            Allowable working pressure for each class falls as design
            temperature rises, and varies by material group. For binding
            design figures, always confirm against the current edition of
            ASME B16.5 for your specific material and temperature.
          </p>
        </div>
      </div>
    </div>
  );
}
