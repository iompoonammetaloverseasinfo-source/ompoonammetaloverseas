// Reference data for the ASME Standards page.
// Descriptions are kept general (scope/purpose) rather than reproducing
// full numeric tables from any single published source — for binding
// design figures, always point users to the current official standard.

export const pipeStandards = [
  {
    code: "ASME B36.10M",
    title: "Welded and Seamless Wrought Steel Pipe",
    summary:
      "Dimensional standard covering outside diameter, wall thickness (schedule) and weight for carbon and alloy steel pipe, from NPS 1/8 to NPS 80.",
  },
  {
    code: "ASME B36.19M",
    title: "Stainless Steel Pipe",
    summary:
      "Companion standard to B36.10M for stainless steel pipe. Shares the same outside-diameter series and adds the 5S / 10S / 40S / 80S lighter-wall schedules common to stainless material.",
  },
];

export const fittingFlangeStandards = [
  {
    code: "ASME B16.5",
    title: "Pipe Flanges and Flanged Fittings",
    summary:
      "Covers flange types, face finishes, and pressure–temperature ratings for Classes 150 to 2500, NPS 1/2 through NPS 24.",
  },
  {
    code: "ASME B16.47",
    title: "Large Diameter Steel Flanges",
    summary: "Extends flange coverage to large-bore piping, NPS 26 through NPS 60, Series A and B.",
  },
  {
    code: "ASME B16.9",
    title: "Factory-Made Wrought Buttwelding Fittings",
    summary:
      "Dimensional standard for buttweld elbows, tees, reducers, caps and stub ends manufactured to match pipe wall schedules.",
  },
  {
    code: "ASME B16.11",
    title: "Forged Fittings, Socket-Welding and Threaded",
    summary:
      "Covers forged socket-weld and threaded fittings — elbows, tees, couplings, unions — for smaller bore, higher-pressure piping.",
  },
  {
    code: "ASME B16.20",
    title: "Metallic Gaskets for Pipe Flanges",
    summary:
      "Specifies spiral-wound, ring-joint and other metallic gasket types used with B16.5 and B16.47 flanges.",
  },
];

export const materialSpecs = [
  {
    code: "ASTM A312 / A182",
    title: "Stainless Steel Pipe & Forged Fittings/Flanges",
    summary:
      "Material specifications most often paired with B36.19M dimensions — A312 for seamless/welded pipe, A182 for forged flanges and fittings.",
  },
  {
    code: "ASTM A358 / A778",
    title: "Welded Austenitic Pipe",
    summary:
      "Electric-fusion-welded and lightly-worked stainless pipe specifications used for larger diameters and lower-pressure service.",
  },
  {
    code: "ASTM A240",
    title: "Stainless & Heat-Resisting Steel Plate, Sheet and Strip",
    summary: "The governing material specification for the flat stainless products we stock and supply.",
  },
  {
    code: "ASTM A106 / A53",
    title: "Carbon Steel Pipe for High-Temperature / General Service",
    summary:
      "The two most common carbon steel pipe specifications — A106 for seamless pipe in higher-temperature process service, A53 covering both welded and seamless for general piping.",
  },
  {
    code: "ASTM A333",
    title: "Seamless & Welded Steel Pipe for Low-Temperature Service",
    summary:
      "Covers pipe intended to stay tough and crack-resistant at sub-zero service temperatures, common in cryogenic and refrigeration lines.",
  },
  {
    code: "ASTM A335",
    title: "Seamless Ferritic Alloy Steel Pipe for High-Temperature Service",
    summary:
      "The specification behind our P5 / P9 / P11 / P22 / P91 alloy pipe grades, used across high-temperature process and power piping.",
  },
  {
    code: "ASTM A213",
    title: "Seamless Ferritic Alloy Steel Boiler & Heat-Exchanger Tube",
    summary:
      "The tube-form companion to A335 — covers our T9 / T11 / T22 / T91 alloy tube grades for boiler and heat-exchanger service.",
  },
  {
    code: "ASTM A210",
    title: "Seamless Carbon Steel Boiler & Superheater Tube",
    summary: "The carbon steel specification behind the boiler tube we stock, for medium and high-pressure boiler applications.",
  },
  {
    code: "ASTM A999",
    title: "General Requirements for Alloy & Stainless Steel Pipe",
    summary: "The umbrella specification setting common requirements — tolerances, testing, marking — that grade-specific pipe standards like A312 and A790 build on.",
  },
  {
    code: "ASTM A790 / A928",
    title: "Duplex & Super Duplex Stainless Pipe",
    summary: "Covers seamless and welded duplex/super duplex pipe — the material specification behind our Duplex 2205 and Super Duplex 2507 stock.",
  },
  {
    code: "ASTM A409",
    title: "Welded Large-Diameter Austenitic Steel Pipe",
    summary: "Covers large-diameter, lighter-wall austenitic stainless pipe for corrosive or high-temperature service.",
  },
  {
    code: "ASTM A694",
    title: "Carbon & Alloy Steel Forgings for Flanges, Fittings & Valves",
    summary: "Material specification for high-pressure transmission-service forgings, relevant to our flange and forged fitting range.",
  },
  {
    code: "ASTM A984 / API 5L",
    title: "Line Pipe",
    summary: "Governs black, plain-end steel line pipe for oil, gas and water transmission — the specification family behind our API 5L stock.",
  },
];

// Common NPS-to-OD reference (fixed by standard, independent of schedule).
// Wall thickness varies by schedule — see the note below the table on the page.
export const npsReference = [
  { nps: "1/2\"", dn: "15", od: "21.3" },
  { nps: "3/4\"", dn: "20", od: "26.7" },
  { nps: "1\"", dn: "25", od: "33.4" },
  { nps: "1 1/2\"", dn: "40", od: "48.3" },
  { nps: "2\"", dn: "50", od: "60.3" },
  { nps: "3\"", dn: "80", od: "88.9" },
  { nps: "4\"", dn: "100", od: "114.3" },
  { nps: "6\"", dn: "150", od: "168.3" },
  { nps: "8\"", dn: "200", od: "219.1" },
  { nps: "10\"", dn: "250", od: "273.0" },
  { nps: "12\"", dn: "300", od: "323.9" },
];

export const flangeClasses = ["150", "300", "600", "900", "1500", "2500"];
