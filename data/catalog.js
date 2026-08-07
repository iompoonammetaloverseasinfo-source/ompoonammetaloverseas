// ---------------------------------------------------------------------------
// CENTRALISED PRODUCT CATALOGUE — the single source of truth for every
// product and sub-product on the site, at any depth.
//
// HOW TO ADD A PRODUCT:
//   Add an object to the right `children` array (or to `catalog` itself for
//   a brand-new top-level category). That's it — the site does the rest:
//     - app/products/[...slug]/page.js turns every node into a real page
//       at its own URL (e.g. /products/valves/ball-valve)
//     - app/sitemap.js walks this same tree, so the new page is in
//       sitemap.xml on the next build automatically
//     - the header's Products dropdown and the /products index page both
//       read this file too
//
// FIELDS PER NODE:
//   slug        (required) URL segment — lowercase, hyphenated, unique
//               among its siblings
//   name        (required) Display name
//   icon        (optional) key from components/ProductIcon.js — shown
//               until a real photo is supplied
//   image       (optional) path under /public/images/products/... — a real
//               product photo. Takes priority over `icon` when present.
//   description (optional) 1–2 sentences shown on the card and detail page
//   grades      (optional) which material families this is typically
//               available in — shown as tags, cross-references
//               data/products.js
//   children    (optional) array of the same shape, for sub-products.
//               Nest as deep as you actually need — a child can have its
//               own children.
// ---------------------------------------------------------------------------

export const catalog = [
  {
    slug: "pipes-tubes",
    name: "Pipes & Tubes",
    icon: "pipe",
    description:
      "Seamless and welded pipe, plus square, rectangular and round tube, in stock lengths or cut to size.",
    // Optional extended content shown on this category's page, below its
    // product grid. Add the same field to any other node in this file to
    // give it a similar "learn the basics" section — entirely original
    // writing, not tied to any particular grade or type.
    guide: [
      {
        heading: "Pipe or Tube — What's the Difference?",
        body: "The two words get used interchangeably, but they're not quite the same thing. A pipe is defined by its job: a round, hollow section built to carry a fluid or gas, sized by nominal bore and schedule rather than an exact outside diameter. A tube is defined by its shape instead — round, square or rectangular — sized to a precise outside diameter and wall thickness, and used as often for structural or mechanical work as for carrying anything at all.",
      },
      {
        heading: "Seamless or Welded (ERW) — Which Do You Need?",
        body: "Seamless pipe starts as a solid billet, pierced and drawn into a hollow section with no join anywhere along its length — the usual choice where pressure rating and consistency matter most. Welded (ERW) pipe is made the other way round: flat steel strip is rolled into a cylinder and the seam fused shut along its length. That weld is a controlled, tested joint, not a weak point by accident, which is what makes ERW pipe the more economical option for the many jobs that don't call for seamless-grade pressure ratings.",
      },
      {
        heading: "How Pipe Sizing Actually Works",
        body: "Every pipe we quote comes down to two numbers: outside diameter and wall thickness. Subtract the wall thickness twice from the outside diameter and you're left with the bore — the figure that actually determines how much the pipe can carry. It's a simple calculation, but it's the first thing we check against your requirement before confirming stock and quoting a price.",
      },
    ],
    children: [
      {
        slug: "seamless-pipes",
        name: "Seamless Pipes",
        icon: "pipe",
        description: "No weld seam — for higher-pressure and critical process lines.",
        grades: ["Stainless Steel", "Alloy Steel", "Titanium"],
      },
      {
        slug: "api-5l-line-pipe",
        name: "API 5L Line Pipe",
        icon: "pipe",
        description: "Line pipe to API 5L, grades B through X70, for oil, gas and water transmission.",
        grades: ["Carbon Steel"],
      },
      {
        slug: "large-diameter-heavy-wall-pipe",
        name: "Large Diameter & Heavy Wall Pipe",
        icon: "pipe",
        description: "Thick-wall pipe for high-pressure and high-temperature service, including hot-finished welded tube.",
        grades: ["Carbon Steel", "Alloy Steel", "Stainless Steel"],
      },
      {
        slug: "sour-service-pipe",
        name: "Sour Service Pipe",
        icon: "pipe",
        description: "Pipe rated for H2S-containing (sour) oil and gas environments.",
        grades: ["Carbon Steel", "Alloy Steel"],
      },
      {
        slug: "drill-pipe",
        name: "Drill Pipe",
        icon: "pipe",
        description: "Oilfield drill pipe for exploration and drilling applications.",
        grades: ["Alloy Steel"],
      },
      {
        slug: "welded-pipes",
        name: "Welded (ERW) Pipes",
        icon: "pipe",
        description: "Electric-resistance-welded pipe for general process and structural use.",
        grades: ["Stainless Steel", "Non-Ferrous"],
      },
      {
        slug: "boiler-tube",
        name: "Boiler Tube",
        icon: "pipe",
        description: "Heat-exchanger and boiler-grade tube for high-temperature service.",
        grades: ["Alloy Steel", "Carbon Steel"],
      },
      {
        slug: "square-rectangular-tubes",
        name: "Square & Rectangular Tubes",
        icon: "tube-square",
        description: "ERW and seamless box sections for structural and fabrication work.",
        grades: ["Stainless Steel", "Alloy Steel"],
      },
      {
        slug: "round-tubes",
        name: "Round Tubes",
        icon: "pipe",
        description: "Thin- to medium-wall round tube for instrumentation and fabrication.",
        grades: ["Stainless Steel"],
      },
      {
        slug: "capillary-tube",
        name: "Capillary Tube",
        icon: "pipe",
        description: "Very fine-bore precision tube for instrumentation and control lines.",
        grades: ["Stainless Steel"],
      },
      {
        slug: "coiled-tubing",
        name: "Coiled Tubing",
        icon: "coil",
        description: "Long-length tube supplied coiled rather than in straight lengths.",
        grades: ["Stainless Steel"],
      },
      {
        slug: "sanitary-tube",
        name: "Sanitary Tube",
        icon: "pipe",
        description: "Polished, hygienic-finish tube for food, dairy and pharmaceutical use.",
        grades: ["Stainless Steel"],
      },
    ],
  },
  {
    slug: "pipe-fittings",
    name: "Pipe Fittings",
    icon: "elbow",
    description:
      "Buttweld and forged fittings matched to our pipe wall schedules — see the ASME Standards page for the governing specs.",
    children: [
      {
        slug: "buttweld-fittings",
        name: "Buttweld Fittings",
        icon: "elbow",
        description: "Factory-made fittings to ASME B16.9, sized to match pipe schedule.",
        children: [
          {
            slug: "elbow",
            name: "Elbow (45° / 90° / 180°)",
            icon: "elbow",
            description: "Long and short radius, for changes in line direction.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "tee",
            name: "Tee",
            icon: "tee",
            description: "Equal and reducing tees for branch connections.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "reducer",
            name: "Reducer",
            icon: "reducer",
            description: "Concentric and eccentric, for stepping between pipe sizes.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "cap",
            name: "Cap",
            icon: "cap",
            description: "Buttweld end cap for terminating a line.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stub-end",
            name: "Stub End",
            icon: "stub-end",
            description: "Paired with a lap joint flange for easy alignment and dismantling.",
            grades: ["Stainless Steel"],
          },
        ],
      },
      {
        slug: "forged-fittings",
        name: "Forged Fittings",
        icon: "coupling",
        description: "Socket-weld and threaded fittings to ASME B16.11 for smaller, higher-pressure bores.",
        children: [
          {
            slug: "socket-weld-elbow",
            name: "Socket Weld Elbow",
            icon: "elbow",
            description: "90° and 45°, for smaller-bore high-pressure piping.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "socket-weld-tee",
            name: "Socket Weld Tee",
            icon: "tee",
            description: "Branch connections for socket-weld piping systems.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "threaded-coupling",
            name: "Threaded Coupling",
            icon: "coupling",
            description: "Full and half couplings, NPT and BSP threads.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "union",
            name: "Union",
            icon: "coupling",
            description: "Three-piece union for lines that need to be opened for maintenance.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "cross",
            name: "Cross",
            icon: "tee",
            description: "Four-way forged fitting for branch connections.",
            grades: ["Stainless Steel"],
          },
        ],
      },
      {
        slug: "outlet-fittings",
        name: "Outlet Fittings (Olets)",
        icon: "coupling",
        description: "Forged branch-outlet fittings welded directly onto a run pipe — an alternative to a full tee where the branch is smaller than the main line.",
        children: [
          {
            slug: "weldolet",
            name: "Weldolet",
            icon: "tee",
            description: "Full-strength butt-weld branch outlet for the main run of pipe.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "sockolet",
            name: "Sockolet",
            icon: "coupling",
            description: "Socket-weld branch outlet for smaller-bore connections.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "threadolet",
            name: "Threadolet",
            icon: "coupling",
            description: "Threaded branch outlet where a welded connection isn't practical.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "elbolet",
            name: "Elbolet",
            icon: "elbow",
            description: "Branch outlet designed to attach directly onto an elbow.",
            grades: ["Stainless Steel"],
          },
        ],
      },
    ],
  },
  {
    slug: "flanges",
    name: "Flanges",
    icon: "flange",
    description:
      "Weld-neck through blind, to ASME B16.5 — Classes 150 through 2500, NPS 1/2 through 24.",
    children: [
      { slug: "weld-neck-flange", name: "Weld Neck Flange", icon: "flange", description: "Butt-welded to pipe, for high-pressure and cyclic service.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "slip-on-flange", name: "Slip-On Flange", icon: "flange", description: "Slides over the pipe before fillet welding — easier alignment.", grades: ["Stainless Steel"] },
      { slug: "blind-flange", name: "Blind Flange", icon: "flange", description: "Seals off a line end or branch.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "socket-weld-flange", name: "Socket Weld Flange", icon: "flange", description: "For smaller-bore, higher-pressure lines.", grades: ["Stainless Steel"] },
      { slug: "threaded-flange", name: "Threaded Flange", icon: "flange", description: "Screwed connection where welding isn't practical.", grades: ["Stainless Steel"] },
      { slug: "lap-joint-flange", name: "Lap Joint Flange", icon: "flange", description: "Used with a stub end — rotates freely for bolt-hole alignment.", grades: ["Stainless Steel"] },
      { slug: "spectacle-blind", name: "Spectacle Blind", icon: "flange", description: "Figure-8 isolation plate for positive line shutoff.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "ring-type-joint-flange", name: "Ring Type Joint (RTJ) Flange", icon: "flange", description: "Metal ring-gasket seal for high-pressure, high-temperature service.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "orifice-flange", name: "Orifice Flange", icon: "flange", description: "Paired flanges with tapped holes for orifice-plate flow metering.", grades: ["Stainless Steel", "Alloy Steel"] },
    ],
  },
  {
    slug: "valves",
    name: "Valves",
    icon: "ball-valve",
    description: "Manual and actuated valves for isolation, regulation and non-return duty.",
    children: [
      { slug: "ball-valve", name: "Ball Valve", icon: "ball-valve", description: "Quarter-turn on/off isolation with a bored ball for tight shutoff.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "gate-valve", name: "Gate Valve", icon: "gate-valve", description: "Full-bore isolation valve for fully open or fully closed service.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "globe-valve", name: "Globe Valve", icon: "globe-valve", description: "Linear-motion valve for throttling and flow regulation.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "check-valve", name: "Check Valve (Non-Return)", icon: "check-valve", description: "Allows flow in one direction only — swing and lift types.", grades: ["Stainless Steel"] },
      { slug: "butterfly-valve", name: "Butterfly Valve", icon: "butterfly-valve", description: "Compact quarter-turn valve for large-bore, lower-pressure lines.", grades: ["Stainless Steel"] },
      { slug: "three-way-valve", name: "3-Way Valve", icon: "three-way-valve", description: "Diverts or mixes flow between three ports — L-port and T-port bores.", grades: ["Stainless Steel"] },
      { slug: "needle-valve", name: "Needle Valve", icon: "needle-valve", description: "Fine flow control for instrumentation and metering lines.", grades: ["Stainless Steel"] },
    ],
  },
  {
    slug: "fasteners",
    name: "Fasteners",
    icon: "bolt",
    description: "Bolting for flanged and structural connections, in stainless and alloy grades.",
    children: [
      { slug: "hex-bolts", name: "Hex Bolts", icon: "bolt", description: "Standard hex-head bolts in common metric and UNC/UNF sizes.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "studs", name: "Studs (Stud Bolts)", icon: "stud", description: "Full-thread studs for flange bolting, typically paired with two nuts.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "nuts", name: "Nuts", icon: "nut", description: "Hex and heavy hex nuts to match our bolt and stud range.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "washers", name: "Washers", icon: "washer", description: "Flat and spring washers for load distribution and locking.", grades: ["Stainless Steel"] },
      { slug: "set-screws", name: "Socket Set Screws", icon: "screw", description: "Headless screws for securing collars, pulleys and fittings.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "u-bolts", name: "U-Bolts", icon: "u-bolt", description: "For pipe clamping and support brackets.", grades: ["Stainless Steel"] },
    ],
  },
  {
    slug: "sheets-plates-coils",
    name: "Sheets, Plates & Coils",
    icon: "sheet",
    description: "Flat-rolled stainless and non-ferrous material in mill or custom-cut sizes.",
    children: [
      { slug: "sheets", name: "Sheets", icon: "sheet", description: "Hot- and cold-rolled, 2B, BA, No. 4 and mirror finishes.", grades: ["Stainless Steel", "Titanium", "Non-Ferrous"] },
      { slug: "plates", name: "Plates (Patta)", icon: "sheet", description: "Heavier gauge, plasma and gas cut to your dimensions.", grades: ["Stainless Steel", "Alloy Steel", "Titanium", "Non-Ferrous"] },
      { slug: "strips", name: "Strips (Patti)", icon: "strip", description: "Slit coil to a specified width and temper.", grades: ["Stainless Steel"] },
      { slug: "coils", name: "Coils", icon: "coil", description: "Hot- and cold-rolled coil, stocked and re-rollable widths.", grades: ["Stainless Steel", "Non-Ferrous"] },
      { slug: "circles", name: "Circles", icon: "circle-blank", description: "Blanked circles for utensil, tank-head and fabrication use.", grades: ["Stainless Steel"] },
    ],
  },
  {
    slug: "bars-sections",
    name: "Bars & Sections",
    icon: "round-bar",
    description: "Solid sections for machining, fabrication and structural framing.",
    children: [
      { slug: "round-bar", name: "Round Bar", icon: "round-bar", description: "Bright and black bar, peeled and ground rounds.", grades: ["Stainless Steel", "Alloy Steel"] },
      { slug: "flat", name: "Flat", icon: "flat", description: "Flat bar to width and thickness on request.", grades: ["Stainless Steel"] },
      { slug: "angle", name: "Angle", icon: "angle", description: "Equal and unequal angles for structural framing.", grades: ["Stainless Steel", "Mild Steel"] },
      { slug: "structural", name: "Structural Materials", icon: "i-beam", description: "Channels, beams and custom sections to project spec.", grades: ["Mild Steel", "Alloy Steel"] },
    ],
  },
  {
    slug: "furniture-hardware",
    name: "Furniture & Hardware",
    icon: "hardware",
    description: "Fabricated components and general hardware for interiors and industry.",
    children: [
      { slug: "ss-pvc-furniture", name: "SS & PVC Furniture", icon: "hardware", description: "Fabricated furniture components and fittings." },
      { slug: "industrial-hardware", name: "Industrial Hardware", icon: "hardware", description: "General hardware supplied to project specification." },
      { slug: "welding-consumables", name: "Welding Electrodes & Rod", icon: "hardware", description: "Welding rod and electrodes matched to stainless, alloy and carbon steel grades.", grades: ["Stainless Steel", "Alloy Steel"] },
    ],
  },
];

// --- helpers -----------------------------------------------------------

// Flattens the tree into { node, path: [slug,...], parents: [node,...] }
// for every node, used by generateStaticParams and the sitemap.
export function flattenCatalog(nodes = catalog, path = [], parents = []) {
  return nodes.flatMap((node) => {
    const nodePath = [...path, node.slug];
    const entry = { node, path: nodePath, parents };
    const childEntries = node.children
      ? flattenCatalog(node.children, nodePath, [...parents, node])
      : [];
    return [entry, ...childEntries];
  });
}

// Counts leaf product types under a node (or the whole catalog) — used
// to show real, accurate "N types" figures anywhere on the site, that
// stay correct automatically as products are added to this file.
export function countLeafTypes(node) {
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((sum, child) => sum + countLeafTypes(child), 0);
}

// Finds a node (and its ancestor chain) by URL path segments.
export function findCatalogNode(slugPath) {
  let nodes = catalog;
  let found = null;
  const trail = [];
  for (const slug of slugPath) {
    found = nodes.find((n) => n.slug === slug);
    if (!found) return null;
    trail.push(found);
    nodes = found.children || [];
  }
  return { node: found, trail };
}
