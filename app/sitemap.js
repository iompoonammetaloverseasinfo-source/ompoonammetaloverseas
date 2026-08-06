import { pages, siteUrl } from "@/data/siteConfig";

// Next.js builds /sitemap.xml from whatever this function returns.
// Because it reads the shared `pages` array in data/siteConfig.js, adding
// a page there (see the comment at the top of that file) is the only step
// needed to have it appear here on the next build — nothing to maintain
// in two places.
export default function sitemap() {
  const today = new Date();

  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
