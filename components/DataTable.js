export default function DataTable({ table }) {
  return (
    <div>
      <h4 className="font-display text-lg font-bold uppercase tracking-tight text-graphite-900">
        {table.title}
      </h4>
      {table.columns.length > 6 && (
        <p className="mt-1 text-sm italic text-graphite-400">Scroll to see all columns →</p>
      )}
      <div className="mt-3 overflow-x-auto border border-graphite-100 bg-paper">
        <table className="w-full border-collapse text-base">
          <thead>
            <tr className="border-b border-graphite-200 bg-mist-50">
              {table.columns.map((c) => (
                <th
                  key={c}
                  className="whitespace-nowrap px-3 py-2 text-left font-mono text-sm uppercase tracking-wide text-graphite-500"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-graphite-100 last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="whitespace-nowrap px-3 py-2 text-graphite-800">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}