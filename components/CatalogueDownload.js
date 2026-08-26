import { Download, FileText } from "lucide-react";

// Self-contained section — drop in anywhere, no wrapper needed. Links
// directly to the static PDF in /public, so it works as a plain download
// link with no server involved (fits the static-export architecture).
export default function CatalogueDownload() {
  return (
    <section className="section !py-10 border-y border-graphite-100 bg-mist-50">
      <div className="wrap">
        <div className="flex flex-col items-center gap-5 border border-graphite-200 bg-paper p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left">
          <div className="flex items-center gap-4">
            <FileText className="h-10 w-10 shrink-0 text-brass-500" strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight text-graphite-900 sm:text-xl">
                Download Our Full Product Catalogue
              </p>
              <p className="mt-1 text-sm text-graphite-500">
                Complete product range, grades and specifications, in one PDF.
              </p>
            </div>
          </div>
          <a
            href="/catalogue.pdf"
            download
            className="group inline-flex shrink-0 items-center gap-2 bg-brass-500 px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-brass-600"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}