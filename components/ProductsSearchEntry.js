"use client";

import { useSearchParams } from "next/navigation";
import ProductSearch from "./ProductSearch";

// Reads ?q= so a direct link (e.g. from Google's sitelinks searchbox, which
// targets this URL pattern via the SearchAction in app/layout.js) opens
// straight into results instead of just landing on the plain page.
export default function ProductsSearchEntry() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  return <ProductSearch variant="block" initialQuery={q} />;
}
