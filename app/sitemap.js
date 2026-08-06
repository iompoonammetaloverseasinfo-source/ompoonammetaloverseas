import { pages, siteUrl } from "@/data/siteConfig";
import { catalog, flattenCatalog } from "@/data/catalog";

// Next.js builds /sitemap.xml from whatever this function returns.
// Static pages come from data/siteConfig.js; every product and
// sub-product comes from data/catalog.js via flattenCatalog(), so a new
// catalog entry — at any depth — appears here automatically on the next
// build too. Nothing to maintain by hand in either case.
export default function sitemap() {
  const today = new Date();

  const staticEntries = pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const catalogEntries = flattenCatalog(catalog).map((entry) => ({
    url: `${siteUrl}/products/${entry.path.join("/")}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: entry.parents.length === 0 ? 0.7 : 0.5,
  }));

  return [...staticEntries, ...catalogEntries];
}
