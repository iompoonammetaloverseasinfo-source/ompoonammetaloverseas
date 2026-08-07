// Product catalogue data — material families, grades and forms.
// Add a grade or a whole family here and the Products page picks it up.

export const productFamilies = [
  {
    id: "stainless-steel",
    code: "SS",
    name: "Stainless Steel Grades",
    blurb:
      "Austenitic, ferritic and martensitic grades stocked in sheet, plate, coil, pipe and bar form for process, structural and architectural use.",
    grades: [
      "201",
      "202",
      "303",
      "304",
      "304L",
      "309",
      "310",
      "321",
      "310S",
      "316",
      "316L",
      "316Ti",
      "317",
      "400 Series",
      "410",
      "420",
      "430",
      "441",
      "904L",
    ],
  },
  {
    id: "alloy-steel",
    code: "AS",
    name: "Alloy Steel & Special Alloy Grades",
    blurb:
      "High-performance nickel alloys and wear-resistant steels for corrosive, high-temperature and high-abrasion service.",
    grades: [
      "Alloy Steel (P5)",
      "Alloy Steel (P9)",
      "Alloy Steel (P11)",
      "Alloy Steel (P22)",
      "Alloy Steel (P91)",
      "Inconel 400",
      "Inconel 500",
      "Inconel 600",
      "Inconel 625",
      "Inconel 800",
      "Hastelloy",
      "Monel",
      "Duplex 2205",
      "Super Duplex 2507",
      "Titanium",
      "Hardox 400",
      "Hardox 450",
      "Hardox 500",
    ],
  },
  {
    id: "non-ferrous",
    code: "NF",
    name: "Non-Ferrous Metals & Ferro Alloys",
    blurb:
      "Base metals and ferro alloys supplied for foundries, fabricators and re-rollers, sourced and stocked to specification.",
    grades: [
      "Copper",
      "Copper Nickel",
      "Brass",
      "Aluminium",
      "Nickel",
      "Zinc",
      "Tin",
      "Lead",
      "Bismuth",
      "Molybdenum",
      "Ferro Molybdenum (FeMo)",
      "Silicon",
      "Copper Phosphorus",
      "Vanadium",
      "Cadmium",
      "Mercury",
      "Cobalt",
      "Iron",
      "Mild Steel (MS)",
    ],
  },
];

export const productForms = [
  { name: "Sheets", note: "Hot & cold rolled, mill finish to mirror polish" },
  { name: "Plates (Patta)", note: "Custom thickness, plasma & gas cut to size" },
  { name: "Strips (Patti)", note: "Slit coil to specified width and temper" },
  { name: "Coils", note: "HR / CR coil in stock and re-rollable widths" },
  { name: "Round Bar", note: "Bright & black bar, peeled and ground rounds" },
  { name: "Flat", note: "Flat bar to width and thickness on request" },
  { name: "Angle", note: "Equal & unequal angles for structural framing" },
  { name: "Pipes", note: "Seamless & welded, round and structural sections" },
  { name: "Tubes", note: "Round, square and rectangular, ERW & seamless" },
  { name: "Fittings", note: "Elbows, tees, reducers, stub ends, caps" },
  { name: "Flanges", note: "Weld-neck, slip-on, blind, socket-weld" },
  { name: "Fasteners", note: "Bolts, nuts, studs and washers in SS & alloy" },
  { name: "Structural Materials", note: "Channels, beams and custom sections" },
  { name: "SS & PVC Furniture", note: "Fabricated furniture components" },
  { name: "Industrial Hardware", note: "General hardware to project spec" },
];

export const industries = [
  "Chemical & Petrochemical",
  "Oil & Gas",
  "Pharmaceutical",
  "Food Processing",
  "Water Treatment",
  "Fabrication & EPC",
  "Marine",
  "Architecture & Furniture",
];

// Expands a short grade-family tag (as used in data/catalog.js `grades`
// arrays, e.g. "Stainless Steel") into its actual list of specific grade
// numbers from the families above. Falls back to the tag itself for
// standalone tags that aren't one of the three families (e.g. "Titanium"
// used on its own, "Carbon Steel", "Mild Steel"). Used to show real grade
// numbers on category pages instead of just the family name.
const TAG_TO_FAMILY_ID = {
  "Stainless Steel": "stainless-steel",
  "Alloy Steel": "alloy-steel",
  "Non-Ferrous": "non-ferrous",
};

export function expandGradeTag(tag) {
  const familyId = TAG_TO_FAMILY_ID[tag];
  const family = familyId && productFamilies.find((f) => f.id === familyId);
  return family ? family.grades : [tag];
}
