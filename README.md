# Om Poonam Metal Overseas — Website

A production-ready marketing website for Om Poonam Metal Overseas, built with
Next.js 14 (App Router) and Tailwind CSS, and exported as static files so it
can be hosted anywhere.

## What's inside

- **5 pages**: Home, About, Products, ASME Standards, Contact
- **SEO**: unique title/description per page, Open Graph + Twitter cards,
  JSON-LD structured data (Organization + LocalBusiness), a real
  auto-generated `sitemap.xml` and `robots.txt`
- **A full multi-level product catalogue** — Pipes & Tubes, Pipe Fittings
  (with Buttweld and Forged sub-groups), Flanges, Valves, Fasteners, Sheets/
  Plates/Coils, Bars & Sections, and Furniture & Hardware — each with its
  own real page and URL, nested as deep as the products actually go (e.g.
  Products → Pipe Fittings → Buttweld Fittings → Elbow). See "The product
  catalogue" section below for how to add more.
- **A Products dropdown** in the header — desktop shows it on click, mobile
  shows it as an expandable accordion inside the menu — linking straight to
  every top-level catalogue category
- **All 4 of your certificates** — ISO 9001:2015, GST Registration, IEC, and
  Udyam (MSME) — shown on the homepage and as a tap-to-enlarge gallery on
  the About page, plus a full credentials section (GSTIN, IEC, Udyam numbers)
- **The founder's profile** (Mr. Harachndram V. Purohit) on the About page
- **Full material grade catalogue** — every grade you listed, organised into
  Stainless Steel / Alloy & Special Alloys / Non-Ferrous & Ferro Alloys
- **Google Maps** embed on Home and Contact (no API key needed)
- **A WhatsApp quick-contact button** and an enquiry form that pre-fills
  itself with the product name when someone clicks "Request a Quote" from
  a catalogue page
- Carefully tested on mobile — including down to 320px-wide screens — since
  that's where most of your buyers will land
- A distinctive visual identity — graphite/ink + brass accent, a "pipe
  cross-section" logo mark, original technical line-art icons for every
  product type, and a recurring "mill certificate" card style — instead of
  a generic template look

## The product catalogue

Every product and sub-product — at any depth — lives in one file:
`data/catalog.js`. Nothing else needs to be touched to add one.

```js
{
  slug: "ball-valve",       // becomes part of the URL
  name: "Ball Valve",
  icon: "ball-valve",       // see components/ProductIcon.js for the list
  description: "Quarter-turn on/off isolation with a bored ball for tight shutoff.",
  grades: ["Stainless Steel", "Alloy Steel"],  // optional tags
  children: [ /* optional — nest sub-types the same way */ ],
}
```

Add an object like that to the right `children` array (or straight into
`catalog` for a whole new top-level category) and run `npm run build`.
That one entry automatically gets:
- its own real page at its own URL (e.g. `/products/valves/ball-valve`)
- a listing in `sitemap.xml`
- a card wherever its parent is shown (the Products page, or its parent
  category's page)
- an entry in the header's Products dropdown, if it's top-level

**About the icons.** Rather than use stock photos scraped from the web —
which would belong to other companies or photo libraries, and using them
on a live commercial site is a real legal risk — every product currently
shows an original line-art icon (drawn in the style of standard piping/
P&ID symbols). The moment you have real photos of your own stock, drop the
file in `public/images/products/` and add `image: "/images/products/your-file.jpg"`
to that product's entry — it'll replace the icon automatically, no other
changes needed.

## About the mobile header issue

An earlier version of this site had a real bug: on some phones, the header
text rendered oversized and overlapped the browser's own address bar. I
tracked it down to how the site's CSS and a dropdown menu were structured,
and rebuilt both more defensively:

- The header bar now has an explicit height with overflow clipped, so it's
  structurally impossible for it to grow past its intended size again.
- The Products dropdown now renders through a React portal (a standard
  pattern for exactly this kind of menu) instead of depending on layered
  z-index rules, which is a more robust approach regardless of what caused
  the original glitch.

If you ever see anything render incorrectly on a specific phone again,
the most useful thing to send back is the exact device/browser (e.g.
"Chrome on a Samsung A14") plus a screenshot — that narrows it down fast.

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
| Products & sub-products (multi-level)  | `data/catalog.js`               |
| Material grades (SS/alloy/non-ferrous) | `data/products.js`              |
| Certificate images shown in the gallery | `components/CertificatesGallery.js` + `public/images/` |
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
