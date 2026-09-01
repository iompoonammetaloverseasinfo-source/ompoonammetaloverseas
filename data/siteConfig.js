// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for site-wide config, navigation, and the sitemap.
//
// HOW THE SITEMAP AUTO-UPDATES:
// app/sitemap.js reads the `pages` array below and generates sitemap.xml
// from it at build time. To add a new page to the whole site (nav + SEO +
// sitemap.xml) in one place:
//   1. Create the route, e.g. app/gallery/page.js
//   2. Add one entry to the `pages` array below
//   3. Run `npm run build` — sitemap.xml regenerates automatically,
//      dated with today, with every route this file knows about.
// Nothing else to touch.
// ---------------------------------------------------------------------------

export const siteUrl = "https://www.ompoonammetaloverseas.com";

export const siteConfig = {
  name: "Om Poonam Metal Overseas",
  shortName: "OPMO",
  tagline: "Stockists, Traders & Suppliers of Stainless, Alloy & Non-Ferrous Metals",
   description:
    "Om Poonam Metal Overseas is an ISO 9001:2015 certified stockist, trader, importer and exporter of stainless steel, alloy steel, ferrous and non-ferrous metals, based in Ahmedabad, Gujarat, India.",
  themeColor: "#12151B",
};

// Every real route in the app, in nav order. `nav: true` shows it in the
// header/footer menus. `priority` / `changeFrequency` feed sitemap.xml.
export const pages = [
  {
    path: "/",
    label: "Home",
    nav: true,
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "About",
    nav: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/products",
    label: "Products",
    nav: true,
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/asme-standards",
    label: "ASME Standards",
    nav: true,
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    label: "Contact",
    nav: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
];
