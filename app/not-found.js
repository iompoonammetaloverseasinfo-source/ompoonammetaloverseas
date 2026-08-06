import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative bg-graphite-900 pt-[68px] min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-backdrop-dark opacity-100" aria-hidden="true" />
      <div className="wrap relative py-20 text-center">
        <p className="font-mono text-sm text-brass-400 tracking-[0.2em]">
          404 / NOT ON THE STOCK LIST
        </p>
        <h1 className="mt-4 font-display text-6xl sm:text-8xl font-black uppercase text-paper leading-none">
          Page Not Found
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-graphite-300">
          That page doesn&rsquo;t exist — but our full product range and
          contact details do.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brass-500 hover:bg-brass-400 text-graphite-900 font-semibold px-6 py-3.5 transition-colors"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-graphite-600 hover:border-brass-400 text-paper font-semibold px-6 py-3.5 transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
