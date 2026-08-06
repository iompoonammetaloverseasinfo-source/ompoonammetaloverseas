# Om Poonam Metal Overseas — Website

A production-ready marketing website for Om Poonam Metal Overseas, built with
Next.js 14 (App Router) and Tailwind CSS, and exported as static files so it
can be hosted anywhere.

## What's inside

- **5 pages**: Home, About, Products, ASME Standards, Contact
- **SEO**: unique title/description per page, Open Graph + Twitter cards,
  JSON-LD structured data (Organization + LocalBusiness), a real
  auto-generated `sitemap.xml` and `robots.txt`
- **Your ISO 9001:2015 certificate**, rendered as a crisp image on the
  homepage, plus a full credentials section (GSTIN, IEC, Udyam) on About
- **The founder's profile** (Mr. Harachndram V. Purohit) on the About page
- **Full product catalogue** — every grade you listed, organised into
  Stainless Steel / Alloy & Special Alloys / Non-Ferrous & Ferro Alloys,
  plus the 12 forms you supply (sheets, plates, pipes, flanges, etc.)
- **Google Maps** embed on Home and Contact (no API key needed)
- **A WhatsApp quick-contact button** and an enquiry form (see "Contact form"
  below)
- Fully responsive: tested at mobile (390px), tablet (834px) and desktop
  (1440px) widths
- A distinctive visual identity — graphite/ink + brass accent, a "pipe
  cross-section" logo mark, and a recurring "mill certificate" card style
  used for products, certifications and standards — instead of a generic
  template look

## Before you launch — 3 things to update

1. **Domain name.** Every SEO tag (sitemap, canonical URLs, Open Graph)
   reads from one constant. Open `data/siteConfig.js` and change:
   ```js
   export const siteUrl = "https://www.ompoonammetaloverseas.com";
   ```
   to your real domain once you have one. Everything else updates itself.

2. **Contact form delivery.** Right now "Send Enquiry" opens the visitor's
   own email app, pre-filled and addressed to `exportompmo@gmail.com` — no
   backend required, and it works the moment you deploy. If you'd rather the
   form send silently (no email app popup), sign up for a free form service
   like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
   and swap the `handleSubmit` function in `components/ContactForm.js` for
   their fetch call — it's a 10-line change.

3. **Business hours** on the Contact page currently just say
   "Monday – Saturday" since we didn't have your exact hours — add specific
   times there if you'd like (`app/contact/page.js`).

## Running it locally

Requires [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploying

```bash
npm run build
```

This produces a folder named `out/` containing a complete static website —
plain HTML, CSS and JS. Upload the **contents** of `out/` to any of:

- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the `out` folder,
  or connect the Git repo and set build command `npm run build`, publish
  directory `out`
- **Any regular web hosting / cPanel** — upload the contents of `out/` to
  your `public_html` folder, same as any static HTML site
- **GitHub Pages** — push `out/` contents to the repo

A pre-built copy of `out/` is included alongside this README so you can
preview or deploy immediately, even before installing Node.js.

## Adding a new page (and keeping the sitemap correct)

The sitemap is not a file you edit by hand — it's generated from
`data/siteConfig.js` every time you build, so it can never go stale:

1. Create the folder + file, e.g. `app/gallery/page.js`
2. Add one entry to the `pages` array in `data/siteConfig.js`:
   ```js
   { path: "/gallery", label: "Gallery", nav: true, priority: 0.6, changeFrequency: "monthly" }
   ```
3. Run `npm run build` — the new page appears in the navigation menu, the
   footer, and `sitemap.xml` automatically.

## Where everything lives

| To change...                          | Edit this file                  |
|----------------------------------------|----------------------------------|
| Company info, phone, email, address    | `data/company.js`               |
| Product grades and forms               | `data/products.js`              |
| ASME/ASTM standards reference          | `data/standards.js`             |
| Site title, description, page list     | `data/siteConfig.js`            |
| Homepage layout                        | `app/page.js`                   |
| About page copy                        | `app/about/page.js`             |
| Colours, fonts                         | `tailwind.config.js`            |
| Header / footer                        | `components/Navbar.js`, `Footer.js` |

## Notes on the design

- **Typography**: "Big Shoulders Display" for headlines (chosen because it's
  literally an industrial, girder-like typeface — Chicago's "City of Big
  Shoulders"), "IBM Plex Sans" for body text, "IBM Plex Mono" for grade
  codes, certificate numbers and data. All self-hosted via npm packages, so
  the site never depends on an external font CDN.
- **Colour**: graphite/ink (`#12151B`) and a brass accent (`#B8872E`) on
  white — chosen to feel premium and tie to the metals themselves (brass is
  literally one of your products) rather than a generic "startup" palette.
- **The recurring card style** with the small monospace header strip (used
  for the certificate, product families, and standards) is deliberately
  modelled on a mill test certificate / material spec sheet — the actual
  paperwork of the industry — rather than a generic card component.

## Technical notes

- Built with Next.js 14.2.35 (the latest patch of the 14.x line) using
  `output: "export"`, i.e. a fully static site — there is no Node.js server
  to run or secure in production, which is why some of Next's
  server-side–only advisories (`npm audit`) don't apply to this deployment:
  there's no image-optimisation server, middleware, or server actions in
  the shipped output. If you later add server-side features, upgrade Next
  first.
- No browser storage, cookies, or tracking scripts are used anywhere.
