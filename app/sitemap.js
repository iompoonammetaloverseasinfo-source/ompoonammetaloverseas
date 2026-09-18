import { pages, siteUrl } from "@/data/siteConfig";
import { catalog, flattenCatalog } from "@/data/catalog";

// Next.js builds /sitemap.xml from whatever this function returns.
// Static pages come from data/siteConfig.js; every product and
// sub-product comes from data/catalog.js via flattenCatalog(), so a new
// catalog entry — at any depth — appears here automatically on the next
// build too. Nothing to maintain by hand in either case.
// trailingSlash is enabled in next.config.mjs, so every canonical tag and
// every actually-served page URL ends in "/" — these entries need to match
// that or the sitemap points crawlers at a different URL than the one the
// page declares as canonical.
function withTrailingSlash(path) {
  return path.endsWith("/") ? path : `${path}/`;
}

export default function sitemap() {
  const today = new Date();

  const staticEntries = pages.map((page) => ({
    url: `${siteUrl}${withTrailingSlash(page.path)}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const catalogEntries = flattenCatalog(catalog).map((entry) => ({
    url: `${siteUrl}${withTrailingSlash(`/products/${entry.path.join("/")}`)}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: entry.parents.length === 0 ? 0.7 : 0.5,
  }));

  return [...staticEntries, ...catalogEntries];
}
