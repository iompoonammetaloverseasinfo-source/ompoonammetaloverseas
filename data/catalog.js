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
        slug: "stainless-steel",
        name: "Stainless Steel",
        icon: "pipe",
        description: "Austenitic stainless pipe and tube across the full 300-series grade range, seamless and welded.",
        children: [
          {
            slug: "stainless-steel-pipe",
            name: "Stainless Steel Pipe",
            icon: "pipe",
            description: "General-purpose stainless pipe across common austenitic grades — confirm your exact grade and schedule at enquiry.",
            grades: ["Stainless Steel"],
            guide: [
              {
                heading: "Choosing a Grade",
                body: "Every product on this page is austenitic stainless — the 300-series family that accounts for most stainless pipe in commercial use. 304 and 304L cover general-purpose service with no aggressive chlorides; 316 and 316L add molybdenum for markedly better chloride and pitting resistance, the usual choice for marine and pharmaceutical lines; 321 holds its strength above 425°C where 304 and 316 would sensitise; 310 is built for furnace and heat-treatment temperatures; 317L and 904L step up further for stronger acids and severe chemical-process duty. Composition, mechanical properties and equivalent grades for each are on their own page below.",
              },
              {
                heading: "Finish and Where It Ends Up",
                body: "Corrosion resistance is the headline reason to specify stainless, but the finish decides what a specific pipe is actually suited for. Mill — pickled and annealed — is the standard finish for general process and structural work. Bright-annealed and polished finishes go where appearance matters or a smoother, more cleanable bore is needed: food, dairy, beverage and pharmaceutical lines, architectural fabrication, and anywhere a rougher surface would trap product or harbour bacteria. The full range we supply is listed further down this page.",
              },
              {
                heading: "Size Range We Stock",
                body: "Coverage runs from 1/8\" NPS instrumentation-scale pipe through 12\" and beyond, in Schedules 5S, 10S, 40S/STD and 80S/XS, seamless or welded. Larger diameters and non-standard schedules are available to order — confirm exact size, schedule and lead time at enquiry, along with the grade that fits your service conditions.",
              },
            ],
            specs: [
              { label: "Standard", value: "ASTM A312 / A213 (seamless & welded)" },
              { label: "Composition", value: "Austenitic chromium-nickel stainless, grade to be confirmed" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Process piping across chemical, food and general industrial use" },
              { label: "Outer Diameter Range", value: "1/8\" to 12\" NPS (larger diameters to order)" },
              { label: "Wall Thickness Range", value: "1.2mm to 12.7mm standard (Sch 5S–80S/XS; heavier in Sch 160)" },
              { label: "Schedule Range", value: "Sch 5S through Sch 160" },
              { label: "HSN Heading", value: "7304 (seamless) / 7306 (welded)" },
              { label: "Documentation", value: "MTC to EN 10204 3.1/3.2; third-party inspection on request" },
            ],
            variants: [
              "Seamless",
              "Welded (ERW/EFW)",
              "Cold Drawn",
              "Hot Finished",
              "Solution Annealed",
              "Round",
              "Square / Rectangular",
              "Clad",
            ],
            dataTables: [
              {
                title: "Pipe Dimensions — OD & Wall Thickness (ASME B36.19M)",
                group: "Dimensions & Weight",
                columns: ["NPS", "OD (in)", "Sch 5S", "Sch 10S", "Sch 40S / STD", "Sch 80S / XS"],
                rows: [
                  ["1/8", "0.405", "—", "0.049", "0.068", "0.095"],
                  ["1/4", "0.540", "—", "0.065", "0.088", "0.119"],
                  ["3/8", "0.675", "—", "0.065", "0.091", "0.126"],
                  ["1/2", "0.840", "0.065", "0.083", "0.109", "0.147"],
                  ["3/4", "1.050", "0.065", "0.083", "0.113", "0.154"],
                  ["1", "1.315", "0.065", "0.109", "0.133", "0.179"],
                  ["1-1/4", "1.660", "0.065", "0.109", "0.140", "0.191"],
                  ["1-1/2", "1.900", "0.065", "0.109", "0.145", "0.200"],
                  ["2", "2.375", "0.065", "0.109", "0.154", "0.218"],
                  ["2-1/2", "2.875", "0.083", "0.120", "0.203", "0.276"],
                  ["3", "3.500", "0.083", "0.120", "0.216", "0.300"],
                  ["4", "4.500", "0.083", "0.120", "0.237", "0.337"],
                  ["5", "5.563", "0.109", "0.134", "0.258", "0.375"],
                  ["6", "6.625", "0.109", "0.134", "0.280", "0.432"],
                  ["8", "8.625", "0.109", "0.148", "0.322", "0.500"],
                  ["10", "10.750", "0.134", "0.165", "0.365", "0.500"],
                  ["12", "12.750", "0.156", "0.180", "0.375", "0.500"],
                ],
              },
              {
                title: "Approximate Weight, Plain End (kg/m)",
                group: "Dimensions & Weight",
                columns: ["NPS", "Sch 5S", "Sch 10S", "Sch 40S / STD", "Sch 80S / XS"],
                rows: [
                  ["1/8", "—", "0.28", "0.36", "0.46"],
                  ["1/4", "—", "0.49", "0.64", "0.80"],
                  ["3/8", "—", "0.63", "0.85", "1.10"],
                  ["1/2", "0.80", "1.00", "1.26", "1.62"],
                  ["3/4", "1.01", "1.28", "1.68", "2.20"],
                  ["1", "1.29", "2.10", "2.50", "3.23"],
                  ["1-1/4", "1.65", "2.69", "3.38", "4.46"],
                  ["1-1/2", "1.90", "3.11", "4.05", "5.40"],
                  ["2", "2.40", "3.93", "5.45", "7.49"],
                  ["2-1/2", "3.69", "5.25", "8.63", "11.41"],
                  ["3", "4.51", "6.46", "11.28", "15.27"],
                  ["4", "5.83", "8.36", "16.07", "22.32"],
                  ["5", "9.46", "11.58", "21.77", "30.95"],
                  ["6", "11.30", "13.84", "28.26", "42.56"],
                  ["8", "14.76", "19.96", "42.53", "64.63"],
                  ["10", "22.63", "27.78", "60.30", "81.54"],
                  ["12", "31.25", "36.00", "73.83", "97.44"],
                ],
              },
              {
                title: "Outside Diameter Tolerance (ASTM A999)",
                group: "Tolerances",
                columns: ["NPS Range", "Over (in)", "Under (in)"],
                rows: [
                  ["1/8 to 1-1/2", "0.015", "0.031"],
                  ["Over 1-1/2 to 4", "0.031", "0.031"],
                  ["Over 4 to 8", "0.062", "0.031"],
                  ["Over 8 to 18", "0.093", "0.031"],
                  ["Over 18 to 26", "0.125", "0.031"],
                  ["Over 26 to 34", "0.156", "0.031"],
                  ["Over 34 to 48", "0.187", "0.031"],
                ],
              },
              {
                title: "Wall Thickness Tolerance (ASTM A999, Seamless)",
                group: "Tolerances",
                columns: ["Basis", "Tolerance"],
                rows: [
                  ["Minimum wall at any point", "-12.5% of nominal — no maximum wall thickness is imposed"],
                  ["Average weight per length", "+10% of nominal — keeps the pipe from running heavy on average even where local wall exceeds nominal"],
                ],
              },
              {
                title: "Chemical Composition — All Grades (wt%)",
                group: "Material Properties",
                columns: ["Grade", "C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [
                  ["304", "0.08", "2.00", "0.75", "0.045", "0.030", "18.0-20.0", "8.0-10.5", "—", "N ≤ 0.10"],
                  ["304L", "0.030", "2.00", "0.75", "0.045", "0.030", "18.0-20.0", "8.0-13.0", "—", "N ≤ 0.10"],
                  ["316", "0.08", "2.00", "0.75", "0.045", "0.030", "16.0-18.0", "10.0-14.0", "2.00-3.00", "N ≤ 0.10"],
                  ["316L", "0.030", "2.00", "0.75", "0.045", "0.030", "16.0-18.0", "10.0-14.0", "2.00-3.00", "N ≤ 0.10"],
                  ["321", "0.08", "2.00", "0.75", "0.045", "0.030", "17.0-19.0", "9.0-12.0", "—", "Ti ≥ 5×C"],
                  ["310", "0.25", "2.00", "1.50", "0.045", "0.030", "24.0-26.0", "19.0-22.0", "—", "—"],
                  ["317L", "0.030", "2.00", "0.75", "0.045", "0.030", "18.0-20.0", "11.0-15.0", "3.00-4.00", "N ≤ 0.10"],
                  ["904L", "0.020", "2.00", "1.00", "0.045", "0.035", "19.0-23.0", "23.0-28.0", "4.00-5.00", "Cu 1.00-2.00"],
                ],
              },
              {
                title: "Mechanical Properties — All Grades (ASTM A312 minimum)",
                group: "Material Properties",
                columns: ["Grade", "Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [
                  ["304", "515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"],
                  ["304L", "485 MPa (70 ksi)", "170 MPa (25 ksi)", "35%", "217 HB / 95 HRB"],
                  ["316", "515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"],
                  ["316L", "485 MPa (70 ksi)", "170 MPa (25 ksi)", "35%", "217 HB / 95 HRB"],
                  ["321", "515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"],
                  ["310", "515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"],
                  ["317L", "485 MPa (70 ksi)", "170 MPa (25 ksi)", "35%", "217 HB / 95 HRB"],
                  ["904L", "490 MPa (71 ksi)", "215 MPa (31 ksi)", "35%", "90 HRB"],
                ],
              },
              {
                title: "Equivalent Grades — All Grades",
                group: "Material Properties",
                columns: ["Grade", "UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [
                  ["304", "S30400", "1.4301", "SUS 304", "X5CrNi18-10"],
                  ["304L", "S30403", "1.4306 / 1.4307", "SUS 304L", "X2CrNi19-11"],
                  ["316", "S31600", "1.4401 / 1.4436", "SUS 316", "X5CrNiMo17-12-2"],
                  ["316L", "S31603", "1.4404 / 1.4435", "SUS 316L", "X2CrNiMo17-12-2"],
                  ["321", "S32100", "1.4541", "SUS 321", "X6CrNiTi18-10"],
                  ["310", "S31000", "1.4841", "SUS 310", "X15CrNi25-21"],
                  ["317L", "S31703", "1.4438", "SUS 317L", "X2CrNiMo18-15-4"],
                  ["904L", "N08904", "1.4539", "SUS 904L", "X1NiCrMoCu25-20-5"],
                ],
              },
              {
                title: "Governing ASTM / ASME Standards",
                group: "Standards & Compliance",
                columns: ["Standard", "Covers"],
                rows: [
                  ["ASTM A312 / ASME SA312", "Seamless and straight-seam welded pipe for general corrosive and high-temperature service — the primary specification across 304, 304L, 316, 316L, 321, 310, 317L and 904L"],
                  ["ASTM A358 / ASME SA358", "Electric-fusion-welded pipe, typically for larger diameters, for corrosive and/or high-temperature service"],
                  ["ASTM A409 / ASME SA409", "Straight- or spiral-seam welded large-diameter, light-wall pipe"],
                  ["ASTM A213 / ASME SA213", "Seamless tube for boiler, superheater, heat-exchanger and condenser applications"],
                  ["ASTM A249 / ASME SA249", "Welded tube for boiler, superheater, heat-exchanger and condenser applications"],
                  ["ASTM A269", "Seamless and welded tube for general corrosion-resisting and low-temperature service"],
                ],
              },
              {
                title: "Marking (per ASTM A999)",
                group: "Standards & Compliance",
                columns: ["Element", "Typically Shows"],
                rows: [
                  ["Heat Number", "Traceable to the mill test certificate for that production heat"],
                  ["Grade & Specification", "e.g. TP316L, ASTM A312"],
                  ["Nominal Size & Schedule", "e.g. 2\" NB, Sch 40S, or wall thickness where schedule doesn't apply"],
                  ["Manufacturing Method", "Seamless or Welded"],
                  ["Manufacturer / Brand", "Mill or supplier identification"],
                  ["Country of Origin", "Where required by the purchase order"],
                ],
              },
              {
                title: "Standard Testing & Inspection",
                group: "Standards & Compliance",
                columns: ["Test", "What It Checks"],
                rows: [
                  ["Chemical Analysis / PMI", "Confirms the alloy matches the ordered grade"],
                  ["Mechanical Testing", "Tensile, yield and elongation against the specification minimums"],
                  ["Hydrostatic Test", "Pressure-tests the pipe for leaks and gross defects"],
                  ["Radiographic (RT) / Ultrasonic (UT)", "Checks for internal defects, particularly on weld seams"],
                  ["Flattening / Flaring Test", "Checks ductility of welded pipe at the seam"],
                  ["Intergranular Corrosion (IGC) Test", "Confirms resistance to sensitisation per ASTM A262, especially for L-grades"],
                  ["Mill Test Certificate (MTC)", "EN 10204 3.1 or 3.2 certification of the above, with third-party witness on request"],
                ],
              },
              {
                title: "HSN Classification (India)",
                group: "Standards & Compliance",
                columns: ["Form", "HSN Heading", "GST Rate"],
                rows: [
                  ["Seamless pipe/tube", "7304", "18%"],
                  ["Welded (ERW/EFW) pipe/tube", "7306", "18%"],
                ],
              },
              {
                title: "Pressure Rating — Schedule 40 (psi, reference: common austenitic grades)",
                collapsedByDefault: true,
                group: "Pressure Ratings",
                columns: ["Temp (°F)", "10", "8", "6", "5", "4", "3", "2", "1-1/2", "1"],
                rows: [
                  ["750", "578", "637", "724", "797", "909", "1072", "1129", "1340", "1810"],
                  ["700", "584", "644", "732", "805", "919", "1084", "1141", "1354", "1824"],
                  ["650", "596", "657", "747", "822", "938", "1106", "1165", "1383", "1867"],
                  ["600", "615", "678", "770", "847", "967", "1140", "1201", "1425", "1924"],
                  ["500", "645", "711", "808", "889", "1014", "1196", "1260", "1496", "2019"],
                  ["400", "694", "765", "869", "956", "1091", "1287", "1355", "1608", "2171"],
                  ["300", "755", "832", "945", "1040", "1187", "1400", "1474", "1750", "2362"],
                  ["200", "840", "926", "1052", "1158", "1321", "1558", "1640", "1947", "2629"],
                  ["100", "974", "1073", "1219", "1342", "1531", "1806", "1902", "2257", "3048"],
                ],
              },
              {
                title: "Pressure Rating — Schedule 80 (psi, reference: common austenitic grades)",
                collapsedByDefault: true,
                group: "Pressure Ratings",
                columns: ["Temp (°F)", "10", "8", "6", "5", "4", "3", "2", "1-1/2", "1"],
                rows: [
                  ["750", "956", "1005", "1136", "1176", "1314", "1516", "1631", "1889", "2501"],
                  ["700", "966", "1015", "1148", "1189", "1328", "1532", "1648", "1909", "2528"],
                  ["650", "986", "1036", "1172", "1213", "1355", "1564", "1682", "1949", "2580"],
                  ["600", "1016", "1068", "1208", "1250", "1397", "1612", "1734", "2009", "2659"],
                  ["500", "1066", "1121", "1267", "1312", "1466", "1691", "1820", "2108", "2791"],
                  ["400", "1147", "1205", "1363", "1411", "1577", "1819", "1957", "2267", "3002"],
                  ["300", "1247", "1311", "1483", "1535", "1715", "1979", "2129", "2466", "3265"],
                  ["200", "1388", "1459", "1650", "1709", "1909", "2202", "2369", "2744", "3634"],
                  ["100", "1609", "1692", "1913", "1981", "2213", "2553", "2747", "3182", "4213"],
                ],
              },
              {
                title: "Pressure Rating — Schedule 160 (psi, reference: common austenitic grades)",
                collapsedByDefault: true,
                group: "Pressure Ratings",
                columns: ["Temp (°F)", "10", "8", "6", "5", "4", "3", "2", "1-1/2", "1"],
                rows: [
                  ["750", "1868", "1885", "1953", "2027", "2138", "2280", "2671", "2743", "3646"],
                  ["700", "1880", "1905", "1973", "2049", "2161", "2304", "2699", "2772", "3684"],
                  ["650", "1927", "1944", "2014", "2091", "2206", "2352", "2755", "2829", "3761"],
                  ["600", "1986", "2004", "2076", "2155", "2273", "2424", "2840", "2916", "3876"],
                  ["500", "2085", "2103", "2179", "2262", "2386", "2544", "2980", "3060", "4068"],
                  ["400", "2242", "2262", "2343", "2433", "2566", "2736", "3205", "3291", "4375"],
                  ["300", "2439", "2460", "2549", "2646", "2791", "2976", "3486", "3580", "4759"],
                  ["200", "2714", "2738", "2836", "2945", "3106", "3312", "3880", "3984", "5296"],
                  ["100", "3147", "3175", "3289", "3414", "3601", "3840", "4499", "4619", "6140"],
                ],
              },
              {
                title: "Surface Finishes Available",
                group: "Finishes & Forms",
                columns: ["Finish", "Description"],
                rows: [
                  ["2B", "Standard cold-rolled mill finish, smooth and moderately reflective, the most common commodity finish"],
                  ["No. 4", "Uniform brushed finish, widely used for visible architectural and food-contact surfaces"],
                  ["BA / Bright Annealed", "Bright, reflective finish produced by annealing in a controlled atmosphere with no scale"],
                  ["Mirror / Reflective", "High-gloss polished finish for decorative and hygienic applications"],
                  ["Satin / Brushed", "Fine unidirectional grain, less reflective than No. 4"],
                  ["Matte", "Low-gloss, non-reflective surface"],
                  ["Annealed & Pickled", "Heat-treated and acid-cleaned to remove scale, dull uniform grey finish"],
                  ["Solution Annealed", "Heat-treated to restore corrosion resistance after cold working"],
                  ["Bead Blast", "Uniform matte texture produced by blasting with fine media"],
                  ["180 / 320 / 400 / 600 Grit", "Progressively finer abrasive-polished finishes, increasing smoothness and reflectivity with grit number"],
                ],
              },
              {
                title: "Manufacturing Types & Forms Available",
                group: "Finishes & Forms",
                columns: ["Type", "What It Means"],
                rows: [
                  ["Seamless", "No weld seam, pierced and drawn from solid billet"],
                  ["Welded (ERW/EFW)", "Formed and seam-welded from flat strip or plate"],
                  ["Cold Drawn / Cold Finished", "Drawn through a die at room temperature for tighter tolerances and a smoother finish"],
                  ["Hot Finished", "Formed at elevated temperature, the usual route for heavier wall and larger sizes"],
                  ["Solution Annealed", "Heat-treated after forming to restore ductility and corrosion resistance"],
                  ["Round", "Standard circular cross-section"],
                  ["Square / Rectangular", "Box-section, see Stainless Steel Square Pipe"],
                  ["Clad", "Stainless bonded to a carbon or alloy steel core, for cost-effective corrosion resistance on the wetted surface only"],
                ],
              },
              {
                title: "Service Temperature Range",
                group: "Ordering & Availability",
                columns: ["Basis", "Range"],
                rows: [["Hot-finished seamless practice", "100–750°F (37–398°C)"]],
              },
              {
                title: "Available Forms, Ends & Services",
                group: "Ordering & Availability",
                columns: ["Category", "Options"],
                rows: [
                  ["Length", "Cut-to-length, single random, double random, or standard mill lengths up to 6m"],
                  ["Ends", "Plain, beveled, threaded or square-cut"],
                  ["Cutting", "Cold saw, laser or water-jet, to your specified length"],
                  ["Value-Added Services", "Welding, machining, threading and beveling available on request"],
                  ["Welding (welded pipe)", "TIG, MIG, MAG, SMAW and FCAW"],
                  ["Packaging", "Bundled, crated, wrapped or boxed for export"],
                  ["Trade Terms", "FOB, CFR and CIF quoted on request"],
                ],
              },
            ],
          },
          {
            slug: "stainless-steel-304-pipe",
            name: "Stainless Steel 304 Pipe",
            icon: "pipe",
            description: "Reliable Stainless Steel 304 Pipe Supplier in india. Get ASTM A213 TP304 Seamless/ Welded Tube at best price, Check stock of UNS S30400 Welded Pipe by sizes, Refer SS 304 Schedule 40 Tubing Thickness",
            grades: ["Stainless Steel"],
            keywords: "sa312 tp304, sa213 tp304, 304 stainless tubing, 304 stainless pipe, ss 304 seamless pipe, 304 steel pipe, 2.5 304 stainless steel tubing, 3 304 stainless steel tubing, Stainless Steel 304 Pipe, ASTM A312 TP304 Seamless Pipe, SS UNS S30400 Welded Pipe, 304 stainless steel Exhaust Pipe",
            keyword_list: [
              "sa312 tp304",
              "sa213 tp304",
              "304 stainless tubing",
              "304 stainless pipe",
              "ss 304 seamless pipe",
              "304 steel pipe",
              "2.5 304 stainless steel tubing",
              "3 304 stainless steel tubing",
              "Stainless Steel 304 Pipe",
              "ASTM A312 TP304 Seamless Pipe",
              "SS UNS S30400 Welded Pipe",
              "304 stainless steel Exhaust Pipe"
            ],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS S30400" },
              { label: "Composition", value: "18% chromium, 8% nickel austenitic stainless" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Food processing, general chemical and architectural piping" },
            ],
            table_of_contents: [
              {
                "label": "Stainless Steel 304 Pipe Spec Chart",
                "anchor": "1"
              },
              {
                "label": "SS 304 pipe price per meter",
                "anchor": "2"
              },
              {
                "label": "SUS 304 ERW Pipe Weight Table",
                "anchor": "3"
              },
              {
                "label": "Dimensions Chart of SS 304 Welded Pipe",
                "anchor": "4"
              },
              {
                "label": "Different Types of AISI 304 Pipe",
                "anchor": "5"
              },
              {
                "label": "Chemical Properties of Inox 304 Pipe",
                "anchor": "6"
              },
              {
                "label": "Mechanical Properties of DIN 1.4301 Seamless Tubes",
                "anchor": "7"
              },
              {
                "label": "Equivalent Grades of UNS S30400 Seamless Pipe",
                "anchor": "8"
              },
              {
                "label": "Stainless Steel 304 Round Tube Sizes",
                "anchor": "9"
              },
              {
                "label": "Pressure Rating of 304 Stainless Steel Tube",
                "anchor": "10"
              },
              {
                "label": "Diameter Tolerance of 304 Stainless Steel Tubing & Pipe",
                "anchor": "11"
              },
              {
                "label": "Wall Thickness Tolerance of Inox 304 Pipe/ Tube",
                "anchor": "12"
              },
              {
                "label": "Manufacturing Standards of SS 304 Round Pipe",
                "anchor": "13"
              }
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.08", "2.00", "0.75", "0.045", "0.030", "18.0-20.0", "8.0-10.5", "—", "N ≤ 0.10"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["S30400", "1.4301", "SUS 304", "X5CrNi18-10"]],
              },
              {
                "title": "Stainless Steel 304 Pipe Spec Chart",
                "slug": "stainless-steel-304-pipe-spec-chart",
                "columns": [
                  "ASTM / ASME Standards",
                  "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312"
                ],
                "rows": [
                  [
                    "Pipe Form",
                    "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  ],
                  [
                    "Pipe/ Tube Length",
                    "Single Random, Double Random & Cut Length."
                  ],
                  [
                    "Pipe/ Tube Schedule",
                    "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  ],
                  [
                    "Pipe Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "EFW Pipe size",
                    "5.0 mm - 1219.2 mm"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded."
                  ],
                  [
                    "Welded Tube Size",
                    "6.35 mm OD To 152 mm OD"
                  ],
                  [
                    "Swg & Bwg",
                    "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  ],
                  [
                    "Marking",
                    "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Material Test Certificates (MTC)",
                    "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  ],
                  [
                    "Tubing wall thickness",
                    "0.020\" –0.220\", (special wall thicknesses available)"
                  ],
                  [
                    "Tube Length",
                    "Single Random, Double Random, Standard & Cut length"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded"
                  ],
                  [
                    "Marking",
                    "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Tube Type",
                    "Seamless, ERW, EFW, Welded, Fabricated"
                  ],
                  [
                    "Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "Tube Form",
                    "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  ],
                  [
                    "Application",
                    "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  ]
                ],
                "records": [
                  {
                    "ASTM / ASME Standards": "Pipe Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random & Cut Length."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Schedule",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  },
                  {
                    "ASTM / ASME Standards": "Pipe Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "EFW Pipe size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "5.0 mm - 1219.2 mm"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded."
                  },
                  {
                    "ASTM / ASME Standards": "Welded Tube Size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "6.35 mm OD To 152 mm OD"
                  },
                  {
                    "ASTM / ASME Standards": "Swg & Bwg",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Material Test Certificates (MTC)",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  },
                  {
                    "ASTM / ASME Standards": "Tubing wall thickness",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "0.020\" –0.220\", (special wall thicknesses available)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random, Standard & Cut length"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded"
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Type",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Seamless, ERW, EFW, Welded, Fabricated"
                  },
                  {
                    "ASTM / ASME Standards": "Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Application",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  }
                ],
                "row_count": 18,
                "column_count": 2
              },
              {
                "title": "SS 304 pipe price per meter",
                "slug": "ss-304-pipe-price-per-meter",
                "columns": [
                  "Price list of Stainless Steel 304 Pipe in",
                  "SS 304 Pipes Price in India (INR)",
                  "SS 304 Pipes Price in USD",
                  "SS 304 Pipes Price in UAE Dirham"
                ],
                "rows": [
                  [
                    "ASTM A 312 GRADE TP304 SIZE(48.26MM OD X 2.60MM THK X 6000M LENGTH",
                    "INR 166",
                    "2.21 USD",
                    "8.13 UAE Dirham"
                  ],
                  [
                    "ASTM A 312 GRADE TP304 SIZE(168.30MM OD X 6.70MM THK X 6000M LENGTH",
                    "INR 173",
                    "2.31 USD",
                    "8.48 UAE Dirham"
                  ]
                ],
                "records": [
                  {
                    "Price list of Stainless Steel 304 Pipe in": "ASTM A 312 GRADE TP304 SIZE(48.26MM OD X 2.60MM THK X 6000M LENGTH",
                    "SS 304 Pipes Price in India (INR)": "INR 166",
                    "SS 304 Pipes Price in USD": "2.21 USD",
                    "SS 304 Pipes Price in UAE Dirham": "8.13 UAE Dirham"
                  },
                  {
                    "Price list of Stainless Steel 304 Pipe in": "ASTM A 312 GRADE TP304 SIZE(168.30MM OD X 6.70MM THK X 6000M LENGTH",
                    "SS 304 Pipes Price in India (INR)": "INR 173",
                    "SS 304 Pipes Price in USD": "2.31 USD",
                    "SS 304 Pipes Price in UAE Dirham": "8.48 UAE Dirham"
                  }
                ],
                "row_count": 2,
                "column_count": 4
              },
              {
                "title": "SUS 304 ERW Pipe Weight Table",
                "slug": "sus-304-erw-pipe-weight-table",
                "columns": [
                  "PIPE SIZE",
                  "OD IN INCHES",
                  "A.S.A. Pipe Schedules",
                  "A.S.A. Pipe Schedules_2",
                  "A.S.A. Pipe Schedules_3",
                  "A.S.A. Pipe Schedules_4",
                  "A.S.A. Pipe Schedules_5",
                  "A.S.A. Pipe Schedules_6",
                  "A.S.A. Pipe Schedules_7",
                  "A.S.A. Pipe Schedules_8",
                  "A.S.A. Pipe Schedules_9",
                  "A.S.A. Pipe Schedules_10",
                  "A.S.A. Pipe Schedules_11",
                  "A.S.A. Pipe Schedules_12"
                ],
                "rows": [
                  [
                    "PIPE SIZE",
                    "OD IN INCHES",
                    "5s",
                    "5",
                    "10s",
                    "10",
                    "40s & Std.",
                    "40",
                    "60",
                    "80s & E.H.",
                    "80",
                    "120",
                    "160",
                    "DBL E.H."
                  ],
                  [
                    "1/8",
                    ".405",
                    "",
                    ".035.1383",
                    ".049.1863",
                    ".049.1863",
                    ".068.2447",
                    "068.2447",
                    "",
                    "0.95.3145",
                    "0.95.3145",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    "",
                    ".049.2570",
                    ".065.3297",
                    ".065.3297",
                    ".088.4248",
                    "088.4248",
                    "",
                    ".119.5351",
                    ".119.5351",
                    "",
                    "",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    "",
                    ".049.3276",
                    ".065.4235",
                    ".065.4235",
                    ".091.5676",
                    ".091.5676",
                    "",
                    ".126.7338",
                    ".126.7338",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".065.5383",
                    ".065.5383",
                    ".083.6710",
                    ".083.6710",
                    ".109.8510",
                    ".109.8510",
                    "",
                    ".1471.088",
                    ".1471.088",
                    "",
                    ".1871.304",
                    ".2941.714"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".065.6838",
                    ".065.6838",
                    ".083.8572",
                    ".083.8572",
                    ".1131.131",
                    ".1131.131",
                    "",
                    ".1541.474",
                    ".1541.474",
                    "",
                    ".2181.937",
                    ".3082.441"
                  ],
                  [
                    "1",
                    "1.315",
                    ".065.8678",
                    ".065.8678",
                    ".1091.404",
                    ".1091.404",
                    ".1331.679",
                    ".1331.679",
                    "",
                    ".1792.172",
                    ".1792.172",
                    "",
                    ".2502.844",
                    ".3583.659"
                  ],
                  [
                    "1-1/4",
                    "1.660",
                    ".0651.107",
                    ".0651.107",
                    ".1091.806",
                    ".1091.806",
                    ".1402.273",
                    ".1402.273",
                    "",
                    ".1912.997",
                    ".1912.997",
                    "",
                    ".2503.765",
                    ".3825.214"
                  ],
                  [
                    "1-1/2",
                    "1.900",
                    ".0651.274",
                    ".0651.274",
                    ".1092.085",
                    ".1092.085",
                    ".1452.718",
                    ".1452.718",
                    "",
                    ".2003.631",
                    ".2003.631",
                    "",
                    ".2814.859",
                    ".4006.408"
                  ],
                  [
                    "2",
                    "2.375",
                    ".0651.604",
                    ".0651.604",
                    ".1092.638",
                    ".1092.638",
                    ".1543.653",
                    ".1543.653",
                    "",
                    ".2185.022",
                    ".2185.022",
                    "",
                    ".3437.444",
                    ".4369.029"
                  ],
                  [
                    "2-1/2",
                    "2.875",
                    ".0832.475",
                    ".0832.475",
                    ".1203.531",
                    ".1203.531",
                    ".2035.793",
                    ".2035.793",
                    "",
                    ".2767.661",
                    ".2767.661",
                    "",
                    ".37510.01",
                    ".55213.70"
                  ],
                  [
                    "3",
                    "3.500",
                    ".0833.029",
                    ".0833.029",
                    ".1204.332",
                    ".1204.332",
                    ".2167.576",
                    ".2167.576",
                    "",
                    ".30010.25",
                    ".30010.25",
                    "",
                    ".43714.32",
                    ".60018.58"
                  ],
                  [
                    "3-1/2",
                    "4.000",
                    ".0833.472",
                    ".0833.472",
                    ".1204.973",
                    ".1204.973",
                    ".2269.109",
                    ".2269.109",
                    "",
                    ".31812.51",
                    ".31812.51",
                    "",
                    "",
                    ".63622.85"
                  ],
                  [
                    "4",
                    "4.500",
                    ".0833.915",
                    ".0833.915",
                    ".1205.613",
                    ".1205.613",
                    ".23710.79",
                    ".23710.79",
                    ".28112.66",
                    ".33714.98",
                    ".33714.98",
                    ".43719.01",
                    ".53122.51",
                    ".67427.54"
                  ],
                  [
                    "4-1/2",
                    "5.000",
                    "",
                    "",
                    "",
                    "",
                    ".24712.53",
                    "",
                    "",
                    ".35517.61",
                    "",
                    "",
                    "",
                    ".71032.53"
                  ],
                  [
                    "5",
                    "5.563",
                    ".1096.349",
                    ".1096.349",
                    ".1347.770",
                    ".1347.770",
                    ".25814.62",
                    ".25814.62",
                    "",
                    ".37520.78",
                    ".37520.78",
                    ".50027.04",
                    ".62532.96",
                    ".75038.55"
                  ],
                  [
                    "6",
                    "6.625",
                    ".1097.585",
                    ".1097.585",
                    ".1349.290",
                    ".1349.290",
                    ".28018.97",
                    ".28018.97",
                    "",
                    ".43228.57",
                    ".43228.57",
                    ".56236.39",
                    ".71845.30",
                    ".86453.16"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    "",
                    "",
                    ".30123.57",
                    "",
                    "",
                    ".50038.05",
                    "",
                    "",
                    "",
                    ".87563.08"
                  ],
                  [
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  ]
                ],
                "records": [
                  {
                    "PIPE SIZE": "PIPE SIZE",
                    "OD IN INCHES": "OD IN INCHES",
                    "A.S.A. Pipe Schedules": "5s",
                    "A.S.A. Pipe Schedules_2": "5",
                    "A.S.A. Pipe Schedules_3": "10s",
                    "A.S.A. Pipe Schedules_4": "10",
                    "A.S.A. Pipe Schedules_5": "40s & Std.",
                    "A.S.A. Pipe Schedules_6": "40",
                    "A.S.A. Pipe Schedules_7": "60",
                    "A.S.A. Pipe Schedules_8": "80s & E.H.",
                    "A.S.A. Pipe Schedules_9": "80",
                    "A.S.A. Pipe Schedules_10": "120",
                    "A.S.A. Pipe Schedules_11": "160",
                    "A.S.A. Pipe Schedules_12": "DBL E.H."
                  },
                  {
                    "PIPE SIZE": "1/8",
                    "OD IN INCHES": ".405",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".035.1383",
                    "A.S.A. Pipe Schedules_3": ".049.1863",
                    "A.S.A. Pipe Schedules_4": ".049.1863",
                    "A.S.A. Pipe Schedules_5": ".068.2447",
                    "A.S.A. Pipe Schedules_6": "068.2447",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": "0.95.3145",
                    "A.S.A. Pipe Schedules_9": "0.95.3145",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/4",
                    "OD IN INCHES": ".540",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.2570",
                    "A.S.A. Pipe Schedules_3": ".065.3297",
                    "A.S.A. Pipe Schedules_4": ".065.3297",
                    "A.S.A. Pipe Schedules_5": ".088.4248",
                    "A.S.A. Pipe Schedules_6": "088.4248",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".119.5351",
                    "A.S.A. Pipe Schedules_9": ".119.5351",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "3/8",
                    "OD IN INCHES": ".675",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.3276",
                    "A.S.A. Pipe Schedules_3": ".065.4235",
                    "A.S.A. Pipe Schedules_4": ".065.4235",
                    "A.S.A. Pipe Schedules_5": ".091.5676",
                    "A.S.A. Pipe Schedules_6": ".091.5676",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".126.7338",
                    "A.S.A. Pipe Schedules_9": ".126.7338",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/2",
                    "OD IN INCHES": ".840",
                    "A.S.A. Pipe Schedules": ".065.5383",
                    "A.S.A. Pipe Schedules_2": ".065.5383",
                    "A.S.A. Pipe Schedules_3": ".083.6710",
                    "A.S.A. Pipe Schedules_4": ".083.6710",
                    "A.S.A. Pipe Schedules_5": ".109.8510",
                    "A.S.A. Pipe Schedules_6": ".109.8510",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1471.088",
                    "A.S.A. Pipe Schedules_9": ".1471.088",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".1871.304",
                    "A.S.A. Pipe Schedules_12": ".2941.714"
                  },
                  {
                    "PIPE SIZE": "3/4",
                    "OD IN INCHES": "1.050",
                    "A.S.A. Pipe Schedules": ".065.6838",
                    "A.S.A. Pipe Schedules_2": ".065.6838",
                    "A.S.A. Pipe Schedules_3": ".083.8572",
                    "A.S.A. Pipe Schedules_4": ".083.8572",
                    "A.S.A. Pipe Schedules_5": ".1131.131",
                    "A.S.A. Pipe Schedules_6": ".1131.131",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1541.474",
                    "A.S.A. Pipe Schedules_9": ".1541.474",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2181.937",
                    "A.S.A. Pipe Schedules_12": ".3082.441"
                  },
                  {
                    "PIPE SIZE": "1",
                    "OD IN INCHES": "1.315",
                    "A.S.A. Pipe Schedules": ".065.8678",
                    "A.S.A. Pipe Schedules_2": ".065.8678",
                    "A.S.A. Pipe Schedules_3": ".1091.404",
                    "A.S.A. Pipe Schedules_4": ".1091.404",
                    "A.S.A. Pipe Schedules_5": ".1331.679",
                    "A.S.A. Pipe Schedules_6": ".1331.679",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1792.172",
                    "A.S.A. Pipe Schedules_9": ".1792.172",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2502.844",
                    "A.S.A. Pipe Schedules_12": ".3583.659"
                  },
                  {
                    "PIPE SIZE": "1-1/4",
                    "OD IN INCHES": "1.660",
                    "A.S.A. Pipe Schedules": ".0651.107",
                    "A.S.A. Pipe Schedules_2": ".0651.107",
                    "A.S.A. Pipe Schedules_3": ".1091.806",
                    "A.S.A. Pipe Schedules_4": ".1091.806",
                    "A.S.A. Pipe Schedules_5": ".1402.273",
                    "A.S.A. Pipe Schedules_6": ".1402.273",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1912.997",
                    "A.S.A. Pipe Schedules_9": ".1912.997",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2503.765",
                    "A.S.A. Pipe Schedules_12": ".3825.214"
                  },
                  {
                    "PIPE SIZE": "1-1/2",
                    "OD IN INCHES": "1.900",
                    "A.S.A. Pipe Schedules": ".0651.274",
                    "A.S.A. Pipe Schedules_2": ".0651.274",
                    "A.S.A. Pipe Schedules_3": ".1092.085",
                    "A.S.A. Pipe Schedules_4": ".1092.085",
                    "A.S.A. Pipe Schedules_5": ".1452.718",
                    "A.S.A. Pipe Schedules_6": ".1452.718",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2003.631",
                    "A.S.A. Pipe Schedules_9": ".2003.631",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2814.859",
                    "A.S.A. Pipe Schedules_12": ".4006.408"
                  },
                  {
                    "PIPE SIZE": "2",
                    "OD IN INCHES": "2.375",
                    "A.S.A. Pipe Schedules": ".0651.604",
                    "A.S.A. Pipe Schedules_2": ".0651.604",
                    "A.S.A. Pipe Schedules_3": ".1092.638",
                    "A.S.A. Pipe Schedules_4": ".1092.638",
                    "A.S.A. Pipe Schedules_5": ".1543.653",
                    "A.S.A. Pipe Schedules_6": ".1543.653",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2185.022",
                    "A.S.A. Pipe Schedules_9": ".2185.022",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".3437.444",
                    "A.S.A. Pipe Schedules_12": ".4369.029"
                  },
                  {
                    "PIPE SIZE": "2-1/2",
                    "OD IN INCHES": "2.875",
                    "A.S.A. Pipe Schedules": ".0832.475",
                    "A.S.A. Pipe Schedules_2": ".0832.475",
                    "A.S.A. Pipe Schedules_3": ".1203.531",
                    "A.S.A. Pipe Schedules_4": ".1203.531",
                    "A.S.A. Pipe Schedules_5": ".2035.793",
                    "A.S.A. Pipe Schedules_6": ".2035.793",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2767.661",
                    "A.S.A. Pipe Schedules_9": ".2767.661",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".37510.01",
                    "A.S.A. Pipe Schedules_12": ".55213.70"
                  },
                  {
                    "PIPE SIZE": "3",
                    "OD IN INCHES": "3.500",
                    "A.S.A. Pipe Schedules": ".0833.029",
                    "A.S.A. Pipe Schedules_2": ".0833.029",
                    "A.S.A. Pipe Schedules_3": ".1204.332",
                    "A.S.A. Pipe Schedules_4": ".1204.332",
                    "A.S.A. Pipe Schedules_5": ".2167.576",
                    "A.S.A. Pipe Schedules_6": ".2167.576",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".30010.25",
                    "A.S.A. Pipe Schedules_9": ".30010.25",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".43714.32",
                    "A.S.A. Pipe Schedules_12": ".60018.58"
                  },
                  {
                    "PIPE SIZE": "3-1/2",
                    "OD IN INCHES": "4.000",
                    "A.S.A. Pipe Schedules": ".0833.472",
                    "A.S.A. Pipe Schedules_2": ".0833.472",
                    "A.S.A. Pipe Schedules_3": ".1204.973",
                    "A.S.A. Pipe Schedules_4": ".1204.973",
                    "A.S.A. Pipe Schedules_5": ".2269.109",
                    "A.S.A. Pipe Schedules_6": ".2269.109",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".31812.51",
                    "A.S.A. Pipe Schedules_9": ".31812.51",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".63622.85"
                  },
                  {
                    "PIPE SIZE": "4",
                    "OD IN INCHES": "4.500",
                    "A.S.A. Pipe Schedules": ".0833.915",
                    "A.S.A. Pipe Schedules_2": ".0833.915",
                    "A.S.A. Pipe Schedules_3": ".1205.613",
                    "A.S.A. Pipe Schedules_4": ".1205.613",
                    "A.S.A. Pipe Schedules_5": ".23710.79",
                    "A.S.A. Pipe Schedules_6": ".23710.79",
                    "A.S.A. Pipe Schedules_7": ".28112.66",
                    "A.S.A. Pipe Schedules_8": ".33714.98",
                    "A.S.A. Pipe Schedules_9": ".33714.98",
                    "A.S.A. Pipe Schedules_10": ".43719.01",
                    "A.S.A. Pipe Schedules_11": ".53122.51",
                    "A.S.A. Pipe Schedules_12": ".67427.54"
                  },
                  {
                    "PIPE SIZE": "4-1/2",
                    "OD IN INCHES": "5.000",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".24712.53",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".35517.61",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".71032.53"
                  },
                  {
                    "PIPE SIZE": "5",
                    "OD IN INCHES": "5.563",
                    "A.S.A. Pipe Schedules": ".1096.349",
                    "A.S.A. Pipe Schedules_2": ".1096.349",
                    "A.S.A. Pipe Schedules_3": ".1347.770",
                    "A.S.A. Pipe Schedules_4": ".1347.770",
                    "A.S.A. Pipe Schedules_5": ".25814.62",
                    "A.S.A. Pipe Schedules_6": ".25814.62",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".37520.78",
                    "A.S.A. Pipe Schedules_9": ".37520.78",
                    "A.S.A. Pipe Schedules_10": ".50027.04",
                    "A.S.A. Pipe Schedules_11": ".62532.96",
                    "A.S.A. Pipe Schedules_12": ".75038.55"
                  },
                  {
                    "PIPE SIZE": "6",
                    "OD IN INCHES": "6.625",
                    "A.S.A. Pipe Schedules": ".1097.585",
                    "A.S.A. Pipe Schedules_2": ".1097.585",
                    "A.S.A. Pipe Schedules_3": ".1349.290",
                    "A.S.A. Pipe Schedules_4": ".1349.290",
                    "A.S.A. Pipe Schedules_5": ".28018.97",
                    "A.S.A. Pipe Schedules_6": ".28018.97",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".43228.57",
                    "A.S.A. Pipe Schedules_9": ".43228.57",
                    "A.S.A. Pipe Schedules_10": ".56236.39",
                    "A.S.A. Pipe Schedules_11": ".71845.30",
                    "A.S.A. Pipe Schedules_12": ".86453.16"
                  },
                  {
                    "PIPE SIZE": "7",
                    "OD IN INCHES": "7.625",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".30123.57",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".50038.05",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".87563.08"
                  },
                  {
                    "PIPE SIZE": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "OD IN INCHES": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_2": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_3": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_4": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_5": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_6": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_7": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_8": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_9": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_10": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_11": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_12": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  }
                ],
                "row_count": 19,
                "column_count": 14
              },
              {
                "title": "Dimensions Chart of SS 304 Welded Pipe",
                "slug": "dimensions-chart-of-ss-304-welded-pipe",
                "columns": [
                  "Nominal",
                  "O.D. Inches",
                  "10s",
                  "10",
                  "40s & Std",
                  "40",
                  "80s & E.H.",
                  "80",
                  "160"
                ],
                "rows": [
                  [
                    "1/8",
                    ".405",
                    ".049",
                    ".049",
                    ".068",
                    ".068",
                    ".095",
                    ".095",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    ".065",
                    ".065",
                    ".088",
                    ".088",
                    ".119",
                    ".119",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    ".065",
                    ".065",
                    ".091",
                    ".091",
                    ".126",
                    ".126",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".083",
                    ".083",
                    ".109",
                    ".109",
                    ".147",
                    ".147",
                    ".187"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".083",
                    ".083",
                    ".113",
                    ".113",
                    ".154",
                    ".154",
                    ".218"
                  ],
                  [
                    "1",
                    "1.315",
                    ".109",
                    ".109",
                    ".133",
                    ".133",
                    ".179",
                    ".179",
                    ".250"
                  ],
                  [
                    "1 1/4",
                    "1.660",
                    ".109",
                    ".109",
                    ".140",
                    ".140",
                    ".191",
                    ".191",
                    ".250"
                  ],
                  [
                    "1 1/2",
                    "1.900",
                    ".109",
                    ".109",
                    ".145",
                    ".145",
                    ".200",
                    ".200",
                    ".281"
                  ],
                  [
                    "2",
                    "2.375",
                    ".109",
                    ".109",
                    ".154",
                    ".154",
                    ".218",
                    ".218",
                    ".343"
                  ],
                  [
                    "2 1/2",
                    "2.875",
                    ".120",
                    ".120",
                    ".203",
                    ".203",
                    ".276",
                    ".276",
                    ".375"
                  ],
                  [
                    "3",
                    "3.500",
                    ".120",
                    ".120",
                    ".216",
                    ".216",
                    ".300",
                    ".300",
                    ".437"
                  ],
                  [
                    "3 1/2",
                    "4.000",
                    ".120",
                    ".120",
                    ".226",
                    ".226",
                    ".318",
                    ".318",
                    ""
                  ],
                  [
                    "4",
                    "4.500",
                    ".120",
                    ".120",
                    ".237",
                    ".237",
                    ".337",
                    ".337",
                    ".531"
                  ],
                  [
                    "4 1/2",
                    "5.000",
                    "",
                    "",
                    ".247",
                    "",
                    ".355",
                    "",
                    ""
                  ],
                  [
                    "5",
                    "5.563",
                    ".134",
                    ".134",
                    ".258",
                    ".258",
                    ".375",
                    ".375",
                    ".625"
                  ],
                  [
                    "6",
                    "6.625",
                    ".134",
                    ".134",
                    ".280",
                    ".280",
                    ".432",
                    ".432",
                    ".718"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    ".301",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "8",
                    "8.625",
                    ".148",
                    ".148",
                    ".322",
                    ".322",
                    ".500",
                    ".500",
                    ".906"
                  ],
                  [
                    "9",
                    "9.625",
                    "",
                    "",
                    ".342",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "10",
                    "10.750",
                    ".165",
                    ".165",
                    ".365",
                    ".365",
                    ".500",
                    ".593",
                    "1.125"
                  ],
                  [
                    "11",
                    "11.750",
                    "",
                    "",
                    ".375",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "12",
                    "12.750",
                    ".180",
                    ".180",
                    ".375",
                    ".406",
                    ".500",
                    ".687",
                    "1.312"
                  ],
                  [
                    "14",
                    "14.000",
                    ".188",
                    ".250",
                    ".375",
                    ".437",
                    ".500",
                    ".750",
                    "1.406"
                  ],
                  [
                    "16",
                    "16.000",
                    ".188",
                    ".250",
                    ".375",
                    ".500",
                    ".500",
                    ".843",
                    "1.593"
                  ],
                  [
                    "18",
                    "18.000",
                    ".188",
                    ".250",
                    ".375",
                    ".562",
                    ".500",
                    ".937",
                    "1.781"
                  ]
                ],
                "records": [
                  {
                    "Nominal": "1/8",
                    "O.D. Inches": ".405",
                    "10s": ".049",
                    "10": ".049",
                    "40s & Std": ".068",
                    "40": ".068",
                    "80s & E.H.": ".095",
                    "80": ".095",
                    "160": ""
                  },
                  {
                    "Nominal": "1/4",
                    "O.D. Inches": ".540",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".088",
                    "40": ".088",
                    "80s & E.H.": ".119",
                    "80": ".119",
                    "160": ""
                  },
                  {
                    "Nominal": "3/8",
                    "O.D. Inches": ".675",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".091",
                    "40": ".091",
                    "80s & E.H.": ".126",
                    "80": ".126",
                    "160": ""
                  },
                  {
                    "Nominal": "1/2",
                    "O.D. Inches": ".840",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".109",
                    "40": ".109",
                    "80s & E.H.": ".147",
                    "80": ".147",
                    "160": ".187"
                  },
                  {
                    "Nominal": "3/4",
                    "O.D. Inches": "1.050",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".113",
                    "40": ".113",
                    "80s & E.H.": ".154",
                    "80": ".154",
                    "160": ".218"
                  },
                  {
                    "Nominal": "1",
                    "O.D. Inches": "1.315",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".133",
                    "40": ".133",
                    "80s & E.H.": ".179",
                    "80": ".179",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/4",
                    "O.D. Inches": "1.660",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".140",
                    "40": ".140",
                    "80s & E.H.": ".191",
                    "80": ".191",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/2",
                    "O.D. Inches": "1.900",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".145",
                    "40": ".145",
                    "80s & E.H.": ".200",
                    "80": ".200",
                    "160": ".281"
                  },
                  {
                    "Nominal": "2",
                    "O.D. Inches": "2.375",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".154",
                    "40": ".154",
                    "80s & E.H.": ".218",
                    "80": ".218",
                    "160": ".343"
                  },
                  {
                    "Nominal": "2 1/2",
                    "O.D. Inches": "2.875",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".203",
                    "40": ".203",
                    "80s & E.H.": ".276",
                    "80": ".276",
                    "160": ".375"
                  },
                  {
                    "Nominal": "3",
                    "O.D. Inches": "3.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".216",
                    "40": ".216",
                    "80s & E.H.": ".300",
                    "80": ".300",
                    "160": ".437"
                  },
                  {
                    "Nominal": "3 1/2",
                    "O.D. Inches": "4.000",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".226",
                    "40": ".226",
                    "80s & E.H.": ".318",
                    "80": ".318",
                    "160": ""
                  },
                  {
                    "Nominal": "4",
                    "O.D. Inches": "4.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".237",
                    "40": ".237",
                    "80s & E.H.": ".337",
                    "80": ".337",
                    "160": ".531"
                  },
                  {
                    "Nominal": "4 1/2",
                    "O.D. Inches": "5.000",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".247",
                    "40": "",
                    "80s & E.H.": ".355",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "5",
                    "O.D. Inches": "5.563",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".258",
                    "40": ".258",
                    "80s & E.H.": ".375",
                    "80": ".375",
                    "160": ".625"
                  },
                  {
                    "Nominal": "6",
                    "O.D. Inches": "6.625",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".280",
                    "40": ".280",
                    "80s & E.H.": ".432",
                    "80": ".432",
                    "160": ".718"
                  },
                  {
                    "Nominal": "7",
                    "O.D. Inches": "7.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".301",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "8",
                    "O.D. Inches": "8.625",
                    "10s": ".148",
                    "10": ".148",
                    "40s & Std": ".322",
                    "40": ".322",
                    "80s & E.H.": ".500",
                    "80": ".500",
                    "160": ".906"
                  },
                  {
                    "Nominal": "9",
                    "O.D. Inches": "9.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".342",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "10",
                    "O.D. Inches": "10.750",
                    "10s": ".165",
                    "10": ".165",
                    "40s & Std": ".365",
                    "40": ".365",
                    "80s & E.H.": ".500",
                    "80": ".593",
                    "160": "1.125"
                  },
                  {
                    "Nominal": "11",
                    "O.D. Inches": "11.750",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".375",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "12",
                    "O.D. Inches": "12.750",
                    "10s": ".180",
                    "10": ".180",
                    "40s & Std": ".375",
                    "40": ".406",
                    "80s & E.H.": ".500",
                    "80": ".687",
                    "160": "1.312"
                  },
                  {
                    "Nominal": "14",
                    "O.D. Inches": "14.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".437",
                    "80s & E.H.": ".500",
                    "80": ".750",
                    "160": "1.406"
                  },
                  {
                    "Nominal": "16",
                    "O.D. Inches": "16.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".500",
                    "80s & E.H.": ".500",
                    "80": ".843",
                    "160": "1.593"
                  },
                  {
                    "Nominal": "18",
                    "O.D. Inches": "18.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".562",
                    "80s & E.H.": ".500",
                    "80": ".937",
                    "160": "1.781"
                  }
                ],
                "row_count": 25,
                "column_count": 9
              },
              {
                "title": "Chemical Properties of Inox 304 Pipe",
                "slug": "chemical-properties-of-inox-304-pipe",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5",
                  "col_6",
                  "col_7",
                  "col_8",
                  "col_9",
                  "col_10"
                ],
                "rows": [
                  [
                    "Grade",
                    "C",
                    "Mn",
                    "Si",
                    "P",
                    "S",
                    "Cr",
                    "Mo",
                    "Ni",
                    "N"
                  ],
                  [
                    "SS 304",
                    "0.08 max",
                    "2 max",
                    "0.75 max",
                    "0.045 max",
                    "0.030 max",
                    "18 – 20",
                    "–",
                    "8 – 11",
                    "–"
                  ]
                ],
                "records": [
                  {
                    "col_1": "Grade",
                    "col_2": "C",
                    "col_3": "Mn",
                    "col_4": "Si",
                    "col_5": "P",
                    "col_6": "S",
                    "col_7": "Cr",
                    "col_8": "Mo",
                    "col_9": "Ni",
                    "col_10": "N"
                  },
                  {
                    "col_1": "SS 304",
                    "col_2": "0.08 max",
                    "col_3": "2 max",
                    "col_4": "0.75 max",
                    "col_5": "0.045 max",
                    "col_6": "0.030 max",
                    "col_7": "18 – 20",
                    "col_8": "–",
                    "col_9": "8 – 11",
                    "col_10": "–"
                  }
                ],
                "row_count": 2,
                "column_count": 10
              },
              {
                "title": "Mechanical Properties of DIN 1.4301 Seamless Tubes",
                "slug": "mechanical-properties-of-din-1-4301-seamless-tubes",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "Density",
                    "Melting Point",
                    "Tensile Strength",
                    "Yield Strength (0.2%Offset)",
                    "Elongation"
                  ],
                  [
                    "8.0 g/cm3",
                    "1400 °C (2550 °F)",
                    "Psi – 75000 , MPa – 515",
                    "Psi – 30000 , MPa – 205",
                    "35 %"
                  ]
                ],
                "records": [
                  {
                    "col_1": "Density",
                    "col_2": "Melting Point",
                    "col_3": "Tensile Strength",
                    "col_4": "Yield Strength (0.2%Offset)",
                    "col_5": "Elongation"
                  },
                  {
                    "col_1": "8.0 g/cm3",
                    "col_2": "1400 °C (2550 °F)",
                    "col_3": "Psi – 75000 , MPa – 515",
                    "col_4": "Psi – 30000 , MPa – 205",
                    "col_5": "35 %"
                  }
                ],
                "row_count": 2,
                "column_count": 5
              },
              {
                "title": "Equivalent Grades of UNS S30400 Seamless Pipe",
                "slug": "equivalent-grades-of-uns-s30400-seamless-pipe",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5",
                  "col_6",
                  "col_7",
                  "col_8"
                ],
                "rows": [
                  [
                    "STANDARD",
                    "WERKSTOFF NR.",
                    "UNS",
                    "JIS",
                    "BS",
                    "GOST",
                    "AFNOR",
                    "EN"
                  ],
                  [
                    "SS 304",
                    "1.4301",
                    "S30400",
                    "SUS 304",
                    "304S31",
                    "08Х18Н10",
                    "Z7CN18‐09",
                    "X5CrNi18-10"
                  ]
                ],
                "records": [
                  {
                    "col_1": "STANDARD",
                    "col_2": "WERKSTOFF NR.",
                    "col_3": "UNS",
                    "col_4": "JIS",
                    "col_5": "BS",
                    "col_6": "GOST",
                    "col_7": "AFNOR",
                    "col_8": "EN"
                  },
                  {
                    "col_1": "SS 304",
                    "col_2": "1.4301",
                    "col_3": "S30400",
                    "col_4": "SUS 304",
                    "col_5": "304S31",
                    "col_6": "08Х18Н10",
                    "col_7": "Z7CN18‐09",
                    "col_8": "X5CrNi18-10"
                  }
                ],
                "row_count": 2,
                "column_count": 8
              },
              {
                "title": "Stainless Steel 304 Round Tube Sizes",
                "slug": "stainless-steel-304-round-tube-sizes",
                "columns": [
                  "Wall",
                  "Sizes ( O.D.)"
                ],
                "rows": [
                  [
                    ".010",
                    "1/16\" , 1/8\" , 3/16\""
                  ],
                  [
                    ".020",
                    "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  ],
                  [
                    ".012",
                    "1/8\""
                  ],
                  [
                    ".016",
                    "1/8\" , 3/16\""
                  ],
                  [
                    ".028",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".035",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".049",
                    "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".065",
                    "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".083",
                    "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  ],
                  [
                    ".095",
                    "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".109",
                    "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".120",
                    "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".125",
                    "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  ],
                  [
                    ".134",
                    "1\""
                  ],
                  [
                    ".250",
                    "3\""
                  ],
                  [
                    ".375",
                    "3 1/2\""
                  ]
                ],
                "records": [
                  {
                    "Wall": ".010",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".020",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  },
                  {
                    "Wall": ".012",
                    "Sizes ( O.D.)": "1/8\""
                  },
                  {
                    "Wall": ".016",
                    "Sizes ( O.D.)": "1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".028",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".035",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".049",
                    "Sizes ( O.D.)": "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".065",
                    "Sizes ( O.D.)": "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".083",
                    "Sizes ( O.D.)": "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  },
                  {
                    "Wall": ".095",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".109",
                    "Sizes ( O.D.)": "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".120",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".125",
                    "Sizes ( O.D.)": "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  },
                  {
                    "Wall": ".134",
                    "Sizes ( O.D.)": "1\""
                  },
                  {
                    "Wall": ".250",
                    "Sizes ( O.D.)": "3\""
                  },
                  {
                    "Wall": ".375",
                    "Sizes ( O.D.)": "3 1/2\""
                  }
                ],
                "row_count": 16,
                "column_count": 2
              },
              {
                "title": "Pressure Rating of 304 Stainless Steel Tube",
                "slug": "pressure-rating-of-304-stainless-steel-tube",
                "columns": [
                  "OD inches",
                  "Ave. Wall inches",
                  "Min Yield Strength (PSI)",
                  "Min Tensile Strength (PSI)",
                  "Theoretical Burst Pressure * (PSI)",
                  "Working Pressure (PSI) 25% of Burst",
                  "Theoretical Yield Point ** (PSI)",
                  "Collapse Pressure *** (PSI)"
                ],
                "rows": [
                  [
                    "0.250",
                    "0.020",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "0.250",
                    "0.028",
                    "30,000",
                    "75,000",
                    "21,649",
                    "5,412",
                    "8,660",
                    "5,967"
                  ],
                  [
                    "0.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "29,167",
                    "7,292",
                    "11,667",
                    "7,224"
                  ],
                  [
                    "0.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "48,355",
                    "12,089",
                    "19,342",
                    "9,455"
                  ],
                  [
                    "0.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "81,250",
                    "20,313",
                    "32,500",
                    "11,544"
                  ],
                  [
                    "0.375",
                    "0.020",
                    "30,000",
                    "75,000",
                    "8,955",
                    "2,239",
                    "3,582",
                    "3,029"
                  ],
                  [
                    "0.375",
                    "0.028",
                    "30,000",
                    "75,000",
                    "13,166",
                    "3,292",
                    "5,266",
                    "4,145"
                  ],
                  [
                    "0.375",
                    "0.035",
                    "30,000",
                    "75,000",
                    "17,213",
                    "4,303",
                    "6,885",
                    "5,077"
                  ],
                  [
                    "0.375",
                    "0.049",
                    "30,000",
                    "75,000",
                    "26,534",
                    "6,634",
                    "10,614",
                    "6,816"
                  ],
                  [
                    "0.375",
                    "0.065",
                    "30,000",
                    "75,000",
                    "39,796",
                    "9,949",
                    "15,918",
                    "8,597"
                  ],
                  [
                    "0.500",
                    "0.020",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.500",
                    "0.028",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "12,209",
                    "3,052",
                    "4,884",
                    "3,906"
                  ],
                  [
                    "0.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "18,284",
                    "4,571",
                    "7,313",
                    "5,316L"
                  ],
                  [
                    "0.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "26,351",
                    "6,588",
                    "10,541",
                    "6,786"
                  ],
                  [
                    "0.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "37,275",
                    "9,319",
                    "14,910",
                    "8,307"
                  ],
                  [
                    "0.625",
                    "0.020",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.625",
                    "0.028",
                    "30,000",
                    "75,000",
                    "7,381",
                    "1,845",
                    "2,953",
                    "2,568"
                  ],
                  [
                    "0.625",
                    "0.035",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.625",
                    "0.049",
                    "30,000",
                    "75,000",
                    "13,947",
                    "3,487",
                    "5,579",
                    "4,335"
                  ],
                  [
                    "0.625",
                    "0.065",
                    "30,000",
                    "75,000",
                    "19,697",
                    "4,924",
                    "7,879",
                    "5,591"
                  ],
                  [
                    "0.625",
                    "0.083",
                    "30,000",
                    "75,000",
                    "27,124",
                    "6,781",
                    "10,850",
                    "6,910"
                  ],
                  [
                    "0.625",
                    "0.095",
                    "30,000",
                    "75,000",
                    "32,759",
                    "8,190",
                    "13,103",
                    "7,734"
                  ],
                  [
                    "0.625",
                    "0.109",
                    "30,000",
                    "75,000",
                    "40,172",
                    "10,043",
                    "16,069",
                    "8,639"
                  ],
                  [
                    "0.750",
                    "0.028",
                    "30,000",
                    "75,000",
                    "6,052",
                    "1,513",
                    "2,421",
                    "2,156"
                  ],
                  [
                    "0.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "7,721",
                    "1,930",
                    "3,088",
                    "2,669"
                  ],
                  [
                    "0.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "11,273",
                    "2,818",
                    "4,509",
                    "3,664"
                  ],
                  [
                    "0.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "15,726",
                    "3,931",
                    "6,290",
                    "4,749"
                  ],
                  [
                    "0.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "21,318",
                    "5,330",
                    "8,527",
                    "5,905"
                  ],
                  [
                    "0.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "25,446",
                    "6,362",
                    "10,179",
                    "6,637"
                  ],
                  [
                    "0.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "30,733",
                    "7,683",
                    "12,293",
                    "7,453"
                  ],
                  [
                    "0.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "35,294",
                    "8,824",
                    "14,118",
                    "8,064"
                  ],
                  [
                    "0.875",
                    "0.020",
                    "30,000",
                    "75,000",
                    "3,593",
                    "898",
                    "1,437",
                    "1,340"
                  ],
                  [
                    "0.875",
                    "0.028",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.875",
                    "0.035",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.875",
                    "0.049",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.875",
                    "0.065",
                    "30,000",
                    "75,000",
                    "13,087",
                    "3,272",
                    "5,235",
                    "4,126"
                  ],
                  [
                    "0.875",
                    "0.083",
                    "30,000",
                    "75,000",
                    "17,560",
                    "4,390",
                    "7,024",
                    "5,152"
                  ],
                  [
                    "0.875",
                    "0.095",
                    "30,000",
                    "75,000",
                    "20,803",
                    "5,201",
                    "8,321",
                    "5,807"
                  ],
                  [
                    "0.875",
                    "0.109",
                    "30,000",
                    "75,000",
                    "24,886",
                    "6,221",
                    "9,954",
                    "6,543"
                  ],
                  [
                    "0.875",
                    "0.120",
                    "30,000",
                    "75,000",
                    "28,346",
                    "7,087",
                    "11,339",
                    "7,100"
                  ],
                  [
                    "1.000",
                    "0.028",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "5,645",
                    "1,411",
                    "2,258",
                    "2,027"
                  ],
                  [
                    "1.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "8,149",
                    "2,037",
                    "3,259",
                    "2,796"
                  ],
                  [
                    "1.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "11,207",
                    "2,802",
                    "4,483",
                    "3,647"
                  ],
                  [
                    "1.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "14,928",
                    "3,732",
                    "5,971",
                    "4,567"
                  ],
                  [
                    "1.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "17,593",
                    "4,398",
                    "7,037",
                    "5,159"
                  ],
                  [
                    "1.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "20,908",
                    "5,227",
                    "8,363",
                    "5,827"
                  ],
                  [
                    "1.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "23,684",
                    "5,921",
                    "9,474",
                    "6,336"
                  ],
                  [
                    "1.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "27,459",
                    "6,865",
                    "10,984",
                    "6,963"
                  ],
                  [
                    "1.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "6,380",
                    "1,595",
                    "2,552",
                    "2,260"
                  ],
                  [
                    "1.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "8,705",
                    "2,176",
                    "3,482",
                    "2,958"
                  ],
                  [
                    "1.250",
                    "0.083",
                    "30,000",
                    "75,000",
                    "11,485",
                    "2,871",
                    "4,594",
                    "3,719"
                  ],
                  [
                    "1.250",
                    "0.095",
                    "30,000",
                    "75,000",
                    "13,443",
                    "3,361",
                    "5,377",
                    "4,213"
                  ],
                  [
                    "1.250",
                    "0.109",
                    "30,000",
                    "75,000",
                    "15,843",
                    "3,961",
                    "6,337",
                    "4,776"
                  ],
                  [
                    "1.250",
                    "0.120",
                    "30,000",
                    "75,000",
                    "17,822",
                    "4,455",
                    "7,129",
                    "5,207"
                  ],
                  [
                    "1.250",
                    "0.134",
                    "30,000",
                    "75,000",
                    "20,468",
                    "5,117",
                    "8,187",
                    "5,742"
                  ],
                  [
                    "1.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,671",
                    "918",
                    "1,469",
                    "1,367"
                  ],
                  [
                    "1.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "5,243",
                    "1,311",
                    "2,097",
                    "1,896"
                  ],
                  [
                    "1.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "7,117",
                    "1,779",
                    "2,847",
                    "2,487"
                  ],
                  [
                    "1.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "9,333",
                    "2,333",
                    "3,733",
                    "3,136"
                  ],
                  [
                    "1.500",
                    "0.095",
                    "30,000",
                    "75,000",
                    "10,878",
                    "2,719",
                    "4,351",
                    "3,559"
                  ],
                  [
                    "1.500",
                    "0.109",
                    "30,000",
                    "75,000",
                    "12,754",
                    "3,188",
                    "5,101",
                    "4,043"
                  ],
                  [
                    "1.500",
                    "0.120",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "1.500",
                    "0.134",
                    "30,000",
                    "75,000",
                    "16,315",
                    "4,079",
                    "6,526",
                    "4,881"
                  ],
                  [
                    "1.500",
                    "0.148",
                    "30,000",
                    "75,000",
                    "18,439",
                    "4,610",
                    "7,375",
                    "5,336"
                  ],
                  [
                    "1.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,125",
                    "781",
                    "1,250",
                    "1,176"
                  ],
                  [
                    "1.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "1.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "6,019",
                    "1,505",
                    "2,407",
                    "2,146"
                  ],
                  [
                    "1.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "7,860",
                    "1,965",
                    "3,144",
                    "2,711"
                  ],
                  [
                    "1.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "9,135",
                    "2,284",
                    "3,654",
                    "3,080"
                  ],
                  [
                    "1.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "10,672",
                    "2,668",
                    "4,269",
                    "3,504"
                  ],
                  [
                    "1.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "11,921",
                    "2,980",
                    "4,768",
                    "3,832"
                  ],
                  [
                    "1.750",
                    "0.134",
                    "30,000",
                    "75,000",
                    "13,563",
                    "3,391",
                    "5,425",
                    "4,242"
                  ],
                  [
                    "1.750",
                    "0.148",
                    "30,000",
                    "75,000",
                    "15,268",
                    "3,817",
                    "6,107",
                    "4,645"
                  ],
                  [
                    "1.750",
                    "0.165",
                    "30,000",
                    "75,000",
                    "17,430",
                    "4,357",
                    "6,972",
                    "5,124"
                  ],
                  [
                    "2.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "2,720",
                    "680",
                    "1,088",
                    "1,032"
                  ],
                  [
                    "2.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "2.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "5,214",
                    "1,303",
                    "2,086",
                    "1,887"
                  ],
                  [
                    "2.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "6,788",
                    "1,697",
                    "2,715",
                    "2,387"
                  ],
                  [
                    "2.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "7,873",
                    "1,968",
                    "3,149",
                    "2,715"
                  ],
                  [
                    "2.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "9,175",
                    "2,294",
                    "3,670",
                    "3,092"
                  ],
                  [
                    "2.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "10,227",
                    "2,557",
                    "4,091",
                    "3,384"
                  ],
                  [
                    "2.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "11,605",
                    "2,901",
                    "4,642",
                    "3,751"
                  ],
                  [
                    "2.000",
                    "0.148",
                    "30,000",
                    "75,000",
                    "13,028",
                    "3,257",
                    "5,211",
                    "4,111"
                  ],
                  [
                    "2.000",
                    "0.165",
                    "30,000",
                    "75,000",
                    "14,820",
                    "3,705",
                    "5,928",
                    "4,542"
                  ]
                ],
                "records": [
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,649",
                    "Working Pressure (PSI) 25% of Burst": "5,412",
                    "Theoretical Yield Point ** (PSI)": "8,660",
                    "Collapse Pressure *** (PSI)": "5,967"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "29,167",
                    "Working Pressure (PSI) 25% of Burst": "7,292",
                    "Theoretical Yield Point ** (PSI)": "11,667",
                    "Collapse Pressure *** (PSI)": "7,224"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "48,355",
                    "Working Pressure (PSI) 25% of Burst": "12,089",
                    "Theoretical Yield Point ** (PSI)": "19,342",
                    "Collapse Pressure *** (PSI)": "9,455"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "81,250",
                    "Working Pressure (PSI) 25% of Burst": "20,313",
                    "Theoretical Yield Point ** (PSI)": "32,500",
                    "Collapse Pressure *** (PSI)": "11,544"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,955",
                    "Working Pressure (PSI) 25% of Burst": "2,239",
                    "Theoretical Yield Point ** (PSI)": "3,582",
                    "Collapse Pressure *** (PSI)": "3,029"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,166",
                    "Working Pressure (PSI) 25% of Burst": "3,292",
                    "Theoretical Yield Point ** (PSI)": "5,266",
                    "Collapse Pressure *** (PSI)": "4,145"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,213",
                    "Working Pressure (PSI) 25% of Burst": "4,303",
                    "Theoretical Yield Point ** (PSI)": "6,885",
                    "Collapse Pressure *** (PSI)": "5,077"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,534",
                    "Working Pressure (PSI) 25% of Burst": "6,634",
                    "Theoretical Yield Point ** (PSI)": "10,614",
                    "Collapse Pressure *** (PSI)": "6,816"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "39,796",
                    "Working Pressure (PSI) 25% of Burst": "9,949",
                    "Theoretical Yield Point ** (PSI)": "15,918",
                    "Collapse Pressure *** (PSI)": "8,597"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,209",
                    "Working Pressure (PSI) 25% of Burst": "3,052",
                    "Theoretical Yield Point ** (PSI)": "4,884",
                    "Collapse Pressure *** (PSI)": "3,906"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,284",
                    "Working Pressure (PSI) 25% of Burst": "4,571",
                    "Theoretical Yield Point ** (PSI)": "7,313",
                    "Collapse Pressure *** (PSI)": "5,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,351",
                    "Working Pressure (PSI) 25% of Burst": "6,588",
                    "Theoretical Yield Point ** (PSI)": "10,541",
                    "Collapse Pressure *** (PSI)": "6,786"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "37,275",
                    "Working Pressure (PSI) 25% of Burst": "9,319",
                    "Theoretical Yield Point ** (PSI)": "14,910",
                    "Collapse Pressure *** (PSI)": "8,307"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,381",
                    "Working Pressure (PSI) 25% of Burst": "1,845",
                    "Theoretical Yield Point ** (PSI)": "2,953",
                    "Collapse Pressure *** (PSI)": "2,568"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,947",
                    "Working Pressure (PSI) 25% of Burst": "3,487",
                    "Theoretical Yield Point ** (PSI)": "5,579",
                    "Collapse Pressure *** (PSI)": "4,335"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "19,697",
                    "Working Pressure (PSI) 25% of Burst": "4,924",
                    "Theoretical Yield Point ** (PSI)": "7,879",
                    "Collapse Pressure *** (PSI)": "5,591"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,124",
                    "Working Pressure (PSI) 25% of Burst": "6,781",
                    "Theoretical Yield Point ** (PSI)": "10,850",
                    "Collapse Pressure *** (PSI)": "6,910"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "32,759",
                    "Working Pressure (PSI) 25% of Burst": "8,190",
                    "Theoretical Yield Point ** (PSI)": "13,103",
                    "Collapse Pressure *** (PSI)": "7,734"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "40,172",
                    "Working Pressure (PSI) 25% of Burst": "10,043",
                    "Theoretical Yield Point ** (PSI)": "16,069",
                    "Collapse Pressure *** (PSI)": "8,639"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,052",
                    "Working Pressure (PSI) 25% of Burst": "1,513",
                    "Theoretical Yield Point ** (PSI)": "2,421",
                    "Collapse Pressure *** (PSI)": "2,156"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,721",
                    "Working Pressure (PSI) 25% of Burst": "1,930",
                    "Theoretical Yield Point ** (PSI)": "3,088",
                    "Collapse Pressure *** (PSI)": "2,669"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,273",
                    "Working Pressure (PSI) 25% of Burst": "2,818",
                    "Theoretical Yield Point ** (PSI)": "4,509",
                    "Collapse Pressure *** (PSI)": "3,664"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,726",
                    "Working Pressure (PSI) 25% of Burst": "3,931",
                    "Theoretical Yield Point ** (PSI)": "6,290",
                    "Collapse Pressure *** (PSI)": "4,749"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,318",
                    "Working Pressure (PSI) 25% of Burst": "5,330",
                    "Theoretical Yield Point ** (PSI)": "8,527",
                    "Collapse Pressure *** (PSI)": "5,905"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "25,446",
                    "Working Pressure (PSI) 25% of Burst": "6,362",
                    "Theoretical Yield Point ** (PSI)": "10,179",
                    "Collapse Pressure *** (PSI)": "6,637"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "30,733",
                    "Working Pressure (PSI) 25% of Burst": "7,683",
                    "Theoretical Yield Point ** (PSI)": "12,293",
                    "Collapse Pressure *** (PSI)": "7,453"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "35,294",
                    "Working Pressure (PSI) 25% of Burst": "8,824",
                    "Theoretical Yield Point ** (PSI)": "14,118",
                    "Collapse Pressure *** (PSI)": "8,064"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,593",
                    "Working Pressure (PSI) 25% of Burst": "898",
                    "Theoretical Yield Point ** (PSI)": "1,437",
                    "Collapse Pressure *** (PSI)": "1,340"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,087",
                    "Working Pressure (PSI) 25% of Burst": "3,272",
                    "Theoretical Yield Point ** (PSI)": "5,235",
                    "Collapse Pressure *** (PSI)": "4,126"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,560",
                    "Working Pressure (PSI) 25% of Burst": "4,390",
                    "Theoretical Yield Point ** (PSI)": "7,024",
                    "Collapse Pressure *** (PSI)": "5,152"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,803",
                    "Working Pressure (PSI) 25% of Burst": "5,201",
                    "Theoretical Yield Point ** (PSI)": "8,321",
                    "Collapse Pressure *** (PSI)": "5,807"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "24,886",
                    "Working Pressure (PSI) 25% of Burst": "6,221",
                    "Theoretical Yield Point ** (PSI)": "9,954",
                    "Collapse Pressure *** (PSI)": "6,543"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "28,346",
                    "Working Pressure (PSI) 25% of Burst": "7,087",
                    "Theoretical Yield Point ** (PSI)": "11,339",
                    "Collapse Pressure *** (PSI)": "7,100"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,645",
                    "Working Pressure (PSI) 25% of Burst": "1,411",
                    "Theoretical Yield Point ** (PSI)": "2,258",
                    "Collapse Pressure *** (PSI)": "2,027"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,149",
                    "Working Pressure (PSI) 25% of Burst": "2,037",
                    "Theoretical Yield Point ** (PSI)": "3,259",
                    "Collapse Pressure *** (PSI)": "2,796"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,207",
                    "Working Pressure (PSI) 25% of Burst": "2,802",
                    "Theoretical Yield Point ** (PSI)": "4,483",
                    "Collapse Pressure *** (PSI)": "3,647"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,928",
                    "Working Pressure (PSI) 25% of Burst": "3,732",
                    "Theoretical Yield Point ** (PSI)": "5,971",
                    "Collapse Pressure *** (PSI)": "4,567"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,593",
                    "Working Pressure (PSI) 25% of Burst": "4,398",
                    "Theoretical Yield Point ** (PSI)": "7,037",
                    "Collapse Pressure *** (PSI)": "5,159"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,908",
                    "Working Pressure (PSI) 25% of Burst": "5,227",
                    "Theoretical Yield Point ** (PSI)": "8,363",
                    "Collapse Pressure *** (PSI)": "5,827"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "23,684",
                    "Working Pressure (PSI) 25% of Burst": "5,921",
                    "Theoretical Yield Point ** (PSI)": "9,474",
                    "Collapse Pressure *** (PSI)": "6,336"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,459",
                    "Working Pressure (PSI) 25% of Burst": "6,865",
                    "Theoretical Yield Point ** (PSI)": "10,984",
                    "Collapse Pressure *** (PSI)": "6,963"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,380",
                    "Working Pressure (PSI) 25% of Burst": "1,595",
                    "Theoretical Yield Point ** (PSI)": "2,552",
                    "Collapse Pressure *** (PSI)": "2,260"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,705",
                    "Working Pressure (PSI) 25% of Burst": "2,176",
                    "Theoretical Yield Point ** (PSI)": "3,482",
                    "Collapse Pressure *** (PSI)": "2,958"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,485",
                    "Working Pressure (PSI) 25% of Burst": "2,871",
                    "Theoretical Yield Point ** (PSI)": "4,594",
                    "Collapse Pressure *** (PSI)": "3,719"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,443",
                    "Working Pressure (PSI) 25% of Burst": "3,361",
                    "Theoretical Yield Point ** (PSI)": "5,377",
                    "Collapse Pressure *** (PSI)": "4,213"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,843",
                    "Working Pressure (PSI) 25% of Burst": "3,961",
                    "Theoretical Yield Point ** (PSI)": "6,337",
                    "Collapse Pressure *** (PSI)": "4,776"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,822",
                    "Working Pressure (PSI) 25% of Burst": "4,455",
                    "Theoretical Yield Point ** (PSI)": "7,129",
                    "Collapse Pressure *** (PSI)": "5,207"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,468",
                    "Working Pressure (PSI) 25% of Burst": "5,117",
                    "Theoretical Yield Point ** (PSI)": "8,187",
                    "Collapse Pressure *** (PSI)": "5,742"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,671",
                    "Working Pressure (PSI) 25% of Burst": "918",
                    "Theoretical Yield Point ** (PSI)": "1,469",
                    "Collapse Pressure *** (PSI)": "1,367"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,243",
                    "Working Pressure (PSI) 25% of Burst": "1,311",
                    "Theoretical Yield Point ** (PSI)": "2,097",
                    "Collapse Pressure *** (PSI)": "1,896"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,117",
                    "Working Pressure (PSI) 25% of Burst": "1,779",
                    "Theoretical Yield Point ** (PSI)": "2,847",
                    "Collapse Pressure *** (PSI)": "2,487"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,333",
                    "Working Pressure (PSI) 25% of Burst": "2,333",
                    "Theoretical Yield Point ** (PSI)": "3,733",
                    "Collapse Pressure *** (PSI)": "3,136"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,878",
                    "Working Pressure (PSI) 25% of Burst": "2,719",
                    "Theoretical Yield Point ** (PSI)": "4,351",
                    "Collapse Pressure *** (PSI)": "3,559"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,754",
                    "Working Pressure (PSI) 25% of Burst": "3,188",
                    "Theoretical Yield Point ** (PSI)": "5,101",
                    "Collapse Pressure *** (PSI)": "4,043"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "16,315",
                    "Working Pressure (PSI) 25% of Burst": "4,079",
                    "Theoretical Yield Point ** (PSI)": "6,526",
                    "Collapse Pressure *** (PSI)": "4,881"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,439",
                    "Working Pressure (PSI) 25% of Burst": "4,610",
                    "Theoretical Yield Point ** (PSI)": "7,375",
                    "Collapse Pressure *** (PSI)": "5,336"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,125",
                    "Working Pressure (PSI) 25% of Burst": "781",
                    "Theoretical Yield Point ** (PSI)": "1,250",
                    "Collapse Pressure *** (PSI)": "1,176"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,019",
                    "Working Pressure (PSI) 25% of Burst": "1,505",
                    "Theoretical Yield Point ** (PSI)": "2,407",
                    "Collapse Pressure *** (PSI)": "2,146"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,860",
                    "Working Pressure (PSI) 25% of Burst": "1,965",
                    "Theoretical Yield Point ** (PSI)": "3,144",
                    "Collapse Pressure *** (PSI)": "2,711"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,135",
                    "Working Pressure (PSI) 25% of Burst": "2,284",
                    "Theoretical Yield Point ** (PSI)": "3,654",
                    "Collapse Pressure *** (PSI)": "3,080"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,672",
                    "Working Pressure (PSI) 25% of Burst": "2,668",
                    "Theoretical Yield Point ** (PSI)": "4,269",
                    "Collapse Pressure *** (PSI)": "3,504"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,921",
                    "Working Pressure (PSI) 25% of Burst": "2,980",
                    "Theoretical Yield Point ** (PSI)": "4,768",
                    "Collapse Pressure *** (PSI)": "3,832"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,563",
                    "Working Pressure (PSI) 25% of Burst": "3,391",
                    "Theoretical Yield Point ** (PSI)": "5,425",
                    "Collapse Pressure *** (PSI)": "4,242"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,268",
                    "Working Pressure (PSI) 25% of Burst": "3,817",
                    "Theoretical Yield Point ** (PSI)": "6,107",
                    "Collapse Pressure *** (PSI)": "4,645"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,430",
                    "Working Pressure (PSI) 25% of Burst": "4,357",
                    "Theoretical Yield Point ** (PSI)": "6,972",
                    "Collapse Pressure *** (PSI)": "5,124"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "2,720",
                    "Working Pressure (PSI) 25% of Burst": "680",
                    "Theoretical Yield Point ** (PSI)": "1,088",
                    "Collapse Pressure *** (PSI)": "1,032"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,214",
                    "Working Pressure (PSI) 25% of Burst": "1,303",
                    "Theoretical Yield Point ** (PSI)": "2,086",
                    "Collapse Pressure *** (PSI)": "1,887"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,788",
                    "Working Pressure (PSI) 25% of Burst": "1,697",
                    "Theoretical Yield Point ** (PSI)": "2,715",
                    "Collapse Pressure *** (PSI)": "2,387"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,873",
                    "Working Pressure (PSI) 25% of Burst": "1,968",
                    "Theoretical Yield Point ** (PSI)": "3,149",
                    "Collapse Pressure *** (PSI)": "2,715"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,175",
                    "Working Pressure (PSI) 25% of Burst": "2,294",
                    "Theoretical Yield Point ** (PSI)": "3,670",
                    "Collapse Pressure *** (PSI)": "3,092"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,227",
                    "Working Pressure (PSI) 25% of Burst": "2,557",
                    "Theoretical Yield Point ** (PSI)": "4,091",
                    "Collapse Pressure *** (PSI)": "3,384"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,605",
                    "Working Pressure (PSI) 25% of Burst": "2,901",
                    "Theoretical Yield Point ** (PSI)": "4,642",
                    "Collapse Pressure *** (PSI)": "3,751"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,028",
                    "Working Pressure (PSI) 25% of Burst": "3,257",
                    "Theoretical Yield Point ** (PSI)": "5,211",
                    "Collapse Pressure *** (PSI)": "4,111"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,820",
                    "Working Pressure (PSI) 25% of Burst": "3,705",
                    "Theoretical Yield Point ** (PSI)": "5,928",
                    "Collapse Pressure *** (PSI)": "4,542"
                  }
                ],
                "row_count": 87,
                "column_count": 8
              },
              {
                "title": "Diameter Tolerance of 304 Stainless Steel Tubing & Pipe",
                "slug": "diameter-tolerance-of-304-stainless-steel-tubing-pipe",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance"
                  ],
                  [
                    "NPS",
                    "+",
                    "+",
                    "–",
                    "–"
                  ],
                  [
                    "NPS",
                    "inch",
                    "mm",
                    "inch",
                    "mm"
                  ],
                  [
                    "1/8~1 1 /2",
                    "1/64(0.015)",
                    "0.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 1 1 /2~4",
                    "1/32(0.031)",
                    "0.8",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 4~8",
                    "1/16(0.062)",
                    "1.6",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 8~18",
                    "3/32(0.093)",
                    "2.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 18~26",
                    "1/8(0.125)",
                    "3.2",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 26~34",
                    "5/32(0.156)",
                    "4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 34~48",
                    "3/16(0.187)",
                    "4.8",
                    "1/32(0.031)",
                    "0.8"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 OD Tolerance",
                    "col_3": "ASTM A312 OD Tolerance",
                    "col_4": "ASTM A312 OD Tolerance",
                    "col_5": "ASTM A312 OD Tolerance"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "+",
                    "col_4": "–",
                    "col_5": "–"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "inch",
                    "col_3": "mm",
                    "col_4": "inch",
                    "col_5": "mm"
                  },
                  {
                    "col_1": "1/8~1 1 /2",
                    "col_2": "1/64(0.015)",
                    "col_3": "0.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 1 1 /2~4",
                    "col_2": "1/32(0.031)",
                    "col_3": "0.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 4~8",
                    "col_2": "1/16(0.062)",
                    "col_3": "1.6",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 8~18",
                    "col_2": "3/32(0.093)",
                    "col_3": "2.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 18~26",
                    "col_2": "1/8(0.125)",
                    "col_3": "3.2",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 26~34",
                    "col_2": "5/32(0.156)",
                    "col_3": "4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 34~48",
                    "col_2": "3/16(0.187)",
                    "col_3": "4.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  }
                ],
                "row_count": 10,
                "column_count": 5
              },
              {
                "title": "Wall Thickness Tolerance of Inox 304 Pipe/ Tube",
                "slug": "wall-thickness-tolerance-of-inox-304-pipe-tube",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 WT Tolerance, %",
                    "ASTM A312 WT Tolerance, %"
                  ],
                  [
                    "NPS",
                    "+",
                    "–"
                  ],
                  [
                    "1/8-2 1 /2",
                    "20",
                    "12.5"
                  ],
                  [
                    "3~18, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "3~18, t/D> 5%",
                    "15",
                    "12.5"
                  ],
                  [
                    "≥ 20, welded",
                    "17.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D> 5%",
                    "15",
                    "12.5"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 WT Tolerance, %",
                    "col_3": "ASTM A312 WT Tolerance, %"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "–"
                  },
                  {
                    "col_1": "1/8-2 1 /2",
                    "col_2": "20",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, welded",
                    "col_2": "17.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  }
                ],
                "row_count": 8,
                "column_count": 3
              },
              {
                "title": "Manufacturing Standards of SS 304 Round Pipe",
                "slug": "manufacturing-standards-of-ss-304-round-pipe",
                "columns": [
                  "col_1",
                  "col_2"
                ],
                "rows": [
                  [
                    "ASTM A312 304/304L",
                    "Seamless and straight-seam welded austenitic pipe intended for high temperature and general corrosive service. Filler metal not permitted during welding"
                  ],
                  [
                    "ASTM A358 304/304L",
                    "Electric fusion welded austenitic pipe for corrosive and/or high temperature service. Typically only pipe up to 8 inch is produced to this specification. Addition of filler metal is permitted during welding"
                  ],
                  [
                    "ASTM A790 304/304L",
                    "Seamless and straight-seam welded ferritic/austenitic (duplex) pipe intended for general corrosive service, with a particular emphasis on resistance to stress corrosion cracking"
                  ],
                  [
                    "ASTM A409 304/304L",
                    "Straight-seam or spiral-seam electric fusion welded large diameter austenitic light-wall pipe in sizes 14” to 30” with walls Sch5S and Sch 10S for corrosive and/or high"
                  ],
                  [
                    "ASTM A376 304/304L",
                    "Seamless austenitic pipe for high temperature applications"
                  ],
                  [
                    "ASTM A813 304/304L",
                    "Single-seam, single- or double- welded austenitic pipe for high temperature and general corrosive applications"
                  ],
                  [
                    "ASTM A814 304/304L",
                    "Cold-worked welded austenitic pipe for high temperature and general corrosive service"
                  ]
                ],
                "records": [
                  {
                    "col_1": "ASTM A312 304/304L",
                    "col_2": "Seamless and straight-seam welded austenitic pipe intended for high temperature and general corrosive service. Filler metal not permitted during welding"
                  },
                  {
                    "col_1": "ASTM A358 304/304L",
                    "col_2": "Electric fusion welded austenitic pipe for corrosive and/or high temperature service. Typically only pipe up to 8 inch is produced to this specification. Addition of filler metal is permitted during welding"
                  },
                  {
                    "col_1": "ASTM A790 304/304L",
                    "col_2": "Seamless and straight-seam welded ferritic/austenitic (duplex) pipe intended for general corrosive service, with a particular emphasis on resistance to stress corrosion cracking"
                  },
                  {
                    "col_1": "ASTM A409 304/304L",
                    "col_2": "Straight-seam or spiral-seam electric fusion welded large diameter austenitic light-wall pipe in sizes 14” to 30” with walls Sch5S and Sch 10S for corrosive and/or high"
                  },
                  {
                    "col_1": "ASTM A376 304/304L",
                    "col_2": "Seamless austenitic pipe for high temperature applications"
                  },
                  {
                    "col_1": "ASTM A813 304/304L",
                    "col_2": "Single-seam, single- or double- welded austenitic pipe for high temperature and general corrosive applications"
                  },
                  {
                    "col_1": "ASTM A814 304/304L",
                    "col_2": "Cold-worked welded austenitic pipe for high temperature and general corrosive service"
                  }
                ],
                "row_count": 7,
                "column_count": 2
              },
              {
                "title": "Check We supply SS 304 Welded Pipe in Which Countries",
                "slug": "check-we-supply-ss-304-welded-pipe-in-which-countries",
                "columns": [
                  "col_1",
                  "col_2"
                ],
                "rows": [
                  [
                    "Custom Size 4 Inch SS 304 Stainless Steel Welded Pipe",
                    "Belgium, Indonesia, Philippines, Dammam -KSA"
                  ],
                  [
                    "20mm diameter stainless steel pipe 304",
                    "Thailand, France, Europe, Qatar"
                  ],
                  [
                    "aisi 304 mirror polished seamless stainless steel pipe",
                    "Malaysia, Germany, Thailand, Czechia"
                  ],
                  [
                    "304 2b surface seamless or welded stainless steel pipe",
                    "Finland, USA, Bangladesh, Malaysia"
                  ],
                  [
                    "Food Grade 304 Sanitary Seamless Stainless Steel Tube",
                    "Brazil, Saudi Arabia (KSA), Kuwait, South Africa"
                  ],
                  [
                    "304 stainless tubing",
                    "Singapore, South Africa, Singapore, Bahrain"
                  ],
                  [
                    "Decorative 304 grade 6 inch welded polished stainless steel pipe",
                    "Nigeria, Australia, UK, Philippines"
                  ],
                  [
                    "304 stainless steel pipe square tube",
                    "UAE, Malaysia, Hong Kong, Oman"
                  ],
                  [
                    "3 In. Schedule 40 304 Stainless Steel Pipe",
                    "Singapore, Italy, Iran, Chile"
                  ],
                  [
                    "304 stainless steel Exhaust Pipe",
                    "Malaysia, Turkey, Norway, United Arab Emirates (UAE)"
                  ],
                  [
                    "Dia 1.0mm thick 0.2mm 304 grade BA stainless steel capillary tube",
                    "Dubai, Malaysia, Russia, Netherlands"
                  ],
                  [
                    "2.5 304 stainless steel tubing",
                    "UK, Spain, Mexico, Egypt"
                  ],
                  [
                    "304 12mm Diameter Stainless Steel Pipe Tube",
                    "UAE, Europe, Malaysia, United Kingdom -UK"
                  ],
                  [
                    "ss 304 schedule 10 pipe",
                    "Ellington -United States, Canada, Poland, UK"
                  ],
                  [
                    "3 X 0.083 In. Weld 304 Stainless Steel Tubing",
                    "Singapore, Malaysia, Canada, Philippines"
                  ],
                  [
                    "ASTM A312 TP304 Seamless Pipe",
                    "Malaysia, Japan, Romania, Europe"
                  ],
                  [
                    "10mm 304 stainless steel round tube",
                    "China, Colombia, Malaysia, Sweden"
                  ],
                  [
                    "304 cold rolled stainless steel square pipe",
                    "Philippines, Taiwan, Los Alamos -Mexico, Malaysia"
                  ]
                ],
                "records": [
                  {
                    "col_1": "Custom Size 4 Inch SS 304 Stainless Steel Welded Pipe",
                    "col_2": "Belgium, Indonesia, Philippines, Dammam -KSA"
                  },
                  {
                    "col_1": "20mm diameter stainless steel pipe 304",
                    "col_2": "Thailand, France, Europe, Qatar"
                  },
                  {
                    "col_1": "aisi 304 mirror polished seamless stainless steel pipe",
                    "col_2": "Malaysia, Germany, Thailand, Czechia"
                  },
                  {
                    "col_1": "304 2b surface seamless or welded stainless steel pipe",
                    "col_2": "Finland, USA, Bangladesh, Malaysia"
                  },
                  {
                    "col_1": "Food Grade 304 Sanitary Seamless Stainless Steel Tube",
                    "col_2": "Brazil, Saudi Arabia (KSA), Kuwait, South Africa"
                  },
                  {
                    "col_1": "304 stainless tubing",
                    "col_2": "Singapore, South Africa, Singapore, Bahrain"
                  },
                  {
                    "col_1": "Decorative 304 grade 6 inch welded polished stainless steel pipe",
                    "col_2": "Nigeria, Australia, UK, Philippines"
                  },
                  {
                    "col_1": "304 stainless steel pipe square tube",
                    "col_2": "UAE, Malaysia, Hong Kong, Oman"
                  },
                  {
                    "col_1": "3 In. Schedule 40 304 Stainless Steel Pipe",
                    "col_2": "Singapore, Italy, Iran, Chile"
                  },
                  {
                    "col_1": "304 stainless steel Exhaust Pipe",
                    "col_2": "Malaysia, Turkey, Norway, United Arab Emirates (UAE)"
                  },
                  {
                    "col_1": "Dia 1.0mm thick 0.2mm 304 grade BA stainless steel capillary tube",
                    "col_2": "Dubai, Malaysia, Russia, Netherlands"
                  },
                  {
                    "col_1": "2.5 304 stainless steel tubing",
                    "col_2": "UK, Spain, Mexico, Egypt"
                  },
                  {
                    "col_1": "304 12mm Diameter Stainless Steel Pipe Tube",
                    "col_2": "UAE, Europe, Malaysia, United Kingdom -UK"
                  },
                  {
                    "col_1": "ss 304 schedule 10 pipe",
                    "col_2": "Ellington -United States, Canada, Poland, UK"
                  },
                  {
                    "col_1": "3 X 0.083 In. Weld 304 Stainless Steel Tubing",
                    "col_2": "Singapore, Malaysia, Canada, Philippines"
                  },
                  {
                    "col_1": "ASTM A312 TP304 Seamless Pipe",
                    "col_2": "Malaysia, Japan, Romania, Europe"
                  },
                  {
                    "col_1": "10mm 304 stainless steel round tube",
                    "col_2": "China, Colombia, Malaysia, Sweden"
                  },
                  {
                    "col_1": "304 cold rolled stainless steel square pipe",
                    "col_2": "Philippines, Taiwan, Los Alamos -Mexico, Malaysia"
                  }
                ],
                "row_count": 18,
                "column_count": 2
              }
            ],
          },
          {
            slug: "stainless-steel-304l-pipe",
            name: "Stainless Steel 304L Pipe",
            icon: "pipe",
            "description": "One of the trusted Stainless Steel 304L Pipe manufacturers in India. Supplier of SA 213 TP 304L Seamless/ ERW Tubing. Schedule 40 304L SS Tubing Pressure Rating, Check price of UNS S30403 ERW Pipe",
            grades: ["Stainless Steel"],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            table_of_contents: [
              {
                "label": "Stainless Steel 304L Pipe Specification",
                "anchor": "1"
              },
              {
                "label": "Check Price List of SUS 304L ERW Pipe",
                "anchor": "2"
              },
              {
                "label": "Weight Chart of SS UNS S30403 Welded Pipe",
                "anchor": "3"
              },
              {
                "label": "Dimensions of 304L SS Seamless Tubes",
                "anchor": "4"
              },
              {
                "label": "Available Types of Stainless Steel 304L Welded Pipe",
                "anchor": "5"
              },
              {
                "label": "SUS 304L Pipe/ Tube Chemical Analysis",
                "anchor": "6"
              },
              {
                "label": "Mechanical Properties of ASTM A312 TP304L Pipe",
                "anchor": "7"
              },
              {
                "label": "Equivalent Material of Inox 304L Pipe",
                "anchor": "8"
              },
              {
                "label": "UNS S30403 Tube Sizes",
                "anchor": "9"
              },
              {
                "label": "Pressure Rating of Stainless Steel 304L Round Tube",
                "anchor": "10"
              },
              {
                "label": "Diameter Tolerance of WNR 1.4306 Tubing & Pipe",
                "anchor": "11"
              },
              {
                "label": "Wall Thickness Tolerance of ASME SA312 SS 304L Pipe",
                "anchor": "12"
              }
            ],
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS S30403" },
              { label: "Composition", value: "Low-carbon 304 (≤ 0.03% C) for weld-decay resistance" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Field-welded piping in chemical and process plant" },
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.030", "2.00", "0.75", "0.045", "0.030", "18.0-20.0", "8.0-13.0", "—", "N ≤ 0.10"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["485 MPa (70 ksi)", "170 MPa (25 ksi)", "35%", "217 HB / 95 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["S30403", "1.4306 / 1.4307", "SUS 304L", "X2CrNi19-11"]],
              },
              {
                "title": "Stainless Steel 304L Pipe Specification",
                "slug": "stainless-steel-304l-pipe-specification",
                "columns": [
                  "ASTM / ASME Standards",
                  "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312"
                ],
                "rows": [
                  [
                    "Pipe Form",
                    "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  ],
                  [
                    "Pipe/ Tube Length",
                    "Single Random, Double Random & Cut Length."
                  ],
                  [
                    "Pipe/ Tube Schedule",
                    "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  ],
                  [
                    "Pipe Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "EFW Pipe size",
                    "5.0 mm - 1219.2 mm"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded."
                  ],
                  [
                    "Welded Tube Size",
                    "6.35 mm OD To 152 mm OD"
                  ],
                  [
                    "Swg & Bwg",
                    "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  ],
                  [
                    "Marking",
                    "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Material Test Certificates (MTC)",
                    "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  ],
                  [
                    "Tubing wall thickness",
                    "0.020\" –0.220\", (special wall thicknesses available)"
                  ],
                  [
                    "Tube Length",
                    "Single Random, Double Random, Standard & Cut length"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded"
                  ],
                  [
                    "Marking",
                    "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Tube Type",
                    "Seamless, ERW, EFW, Welded, Fabricated"
                  ],
                  [
                    "Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "Tube Form",
                    "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  ],
                  [
                    "Application",
                    "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  ]
                ],
                "records": [
                  {
                    "ASTM / ASME Standards": "Pipe Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random & Cut Length."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Schedule",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  },
                  {
                    "ASTM / ASME Standards": "Pipe Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "EFW Pipe size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "5.0 mm - 1219.2 mm"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded."
                  },
                  {
                    "ASTM / ASME Standards": "Welded Tube Size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "6.35 mm OD To 152 mm OD"
                  },
                  {
                    "ASTM / ASME Standards": "Swg & Bwg",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Material Test Certificates (MTC)",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  },
                  {
                    "ASTM / ASME Standards": "Tubing wall thickness",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "0.020\" –0.220\", (special wall thicknesses available)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random, Standard & Cut length"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded"
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Type",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Seamless, ERW, EFW, Welded, Fabricated"
                  },
                  {
                    "ASTM / ASME Standards": "Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Application",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  }
                ],
                "row_count": 18,
                "column_count": 2
              },
              {
                "title": "Check Price List of SUS 304L ERW Pipe",
                "slug": "check-price-list-of-sus-304l-erw-pipe",
                "columns": [
                  "Price list of Stainless Steel 304L Pipe",
                  "SS A312 TP304H Pipe Price in INR",
                  "SS A312 TP304H Pipe Price in USD",
                  "SS A312 TP304H Pipe Price in UAE Dirham"
                ],
                "rows": [
                  [
                    "SS A312 TP304L Seamless Pipe Nb X Sch 80 X 1 Meter",
                    "INR 24,171",
                    "260.52 USD",
                    "1247.91 UAE Dirham"
                  ]
                ],
                "records": [
                  {
                    "Price list of Stainless Steel 304L Pipe": "SS A312 TP304L Seamless Pipe Nb X Sch 80 X 1 Meter",
                    "SS A312 TP304H Pipe Price in INR": "INR 24,171",
                    "SS A312 TP304H Pipe Price in USD": "260.52 USD",
                    "SS A312 TP304H Pipe Price in UAE Dirham": "1247.91 UAE Dirham"
                  }
                ],
                "row_count": 1,
                "column_count": 4
              },
              {
                "title": "Weight Chart of SS UNS S30403 Welded Pipe",
                "slug": "weight-chart-of-ss-uns-s30403-welded-pipe",
                "columns": [
                  "PIPE SIZE",
                  "OD IN INCHES",
                  "A.S.A. Pipe Schedules",
                  "A.S.A. Pipe Schedules_2",
                  "A.S.A. Pipe Schedules_3",
                  "A.S.A. Pipe Schedules_4",
                  "A.S.A. Pipe Schedules_5",
                  "A.S.A. Pipe Schedules_6",
                  "A.S.A. Pipe Schedules_7",
                  "A.S.A. Pipe Schedules_8",
                  "A.S.A. Pipe Schedules_9",
                  "A.S.A. Pipe Schedules_10",
                  "A.S.A. Pipe Schedules_11",
                  "A.S.A. Pipe Schedules_12"
                ],
                "rows": [
                  [
                    "PIPE SIZE",
                    "OD IN INCHES",
                    "5s",
                    "5",
                    "10s",
                    "10",
                    "40s & Std.",
                    "40",
                    "60",
                    "80s & E.H.",
                    "80",
                    "120",
                    "160",
                    "DBL E.H."
                  ],
                  [
                    "1/8",
                    ".405",
                    "",
                    ".035 .1383",
                    ".049 .1863",
                    ".049 .1863",
                    ".068 .2447",
                    "068 .2447",
                    "",
                    "0.95 .3145",
                    "0.95 .3145",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    "",
                    ".049 .2570",
                    ".065 .3297",
                    ".065 .3297",
                    ".088 .4248",
                    "088 .4248",
                    "",
                    ".119 .5351",
                    ".119 .5351",
                    "",
                    "",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    "",
                    ".049 .3276",
                    ".065 .4235",
                    ".065 .4235",
                    ".091 .5676",
                    ".091 .5676",
                    "",
                    ".126 .7338",
                    ".126 .7338",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".065 .5383",
                    ".065 .5383",
                    ".083 .6710",
                    ".083 .6710",
                    ".109 .8510",
                    ".109 .8510",
                    "",
                    ".147 1.088",
                    ".147 1.088",
                    "",
                    ".187 1.304",
                    ".294 1.714"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".065 .6838",
                    ".065 .6838",
                    ".083 .8572",
                    ".083 .8572",
                    ".113 1.131",
                    ".113 1.131",
                    "",
                    ".154 1.474",
                    ".154 1.474",
                    "",
                    ".218 1.937",
                    ".308 2.441"
                  ],
                  [
                    "1",
                    "1.315",
                    ".065 .8678",
                    ".065 .8678",
                    ".109 1.404",
                    ".109 1.404",
                    ".133 1.679",
                    ".133 1.679",
                    "",
                    ".179 2.172",
                    ".179 2.172",
                    "",
                    ".250 2.844",
                    ".358 3.659"
                  ],
                  [
                    "1-1/4",
                    "1.660",
                    ".065 1.107",
                    ".065 1.107",
                    ".109 1.806",
                    ".109 1.806",
                    ".140 2.273",
                    ".140 2.273",
                    "",
                    ".191 2.997",
                    ".191 2.997",
                    "",
                    ".250 3.765",
                    ".382 5.214"
                  ],
                  [
                    "1-1/2",
                    "1.900",
                    ".065 1.274",
                    ".065 1.274",
                    ".109 2.085",
                    ".109 2.085",
                    ".145 2.718",
                    ".145 2.718",
                    "",
                    ".200 3.631",
                    ".200 3.631",
                    "",
                    ".281 4.859",
                    ".400 6.408"
                  ],
                  [
                    "2",
                    "2.375",
                    ".065 1.604",
                    ".065 1.604",
                    ".109 2.638",
                    ".109 2.638",
                    ".154 3.653",
                    ".154 3.653",
                    "",
                    ".218 5.022",
                    ".218 5.022",
                    "",
                    ".343 7.444",
                    ".436 9.029"
                  ],
                  [
                    "2-1/2",
                    "2.875",
                    ".083 2.475",
                    ".083 2.475",
                    ".120 3.531",
                    ".120 3.531",
                    ".203 5.793",
                    ".203 5.793",
                    "",
                    ".276 7.661",
                    ".276 7.661",
                    "",
                    ".375 10.01",
                    ".552 13.70"
                  ],
                  [
                    "3",
                    "3.500",
                    ".083 3.029",
                    ".083 3.029",
                    ".120 4.332",
                    ".120 4.332",
                    ".216 7.576",
                    ".216 7.576",
                    "",
                    ".300 10.25",
                    ".300 10.25",
                    "",
                    ".437 14.32",
                    ".600 18.58"
                  ],
                  [
                    "3-1/2",
                    "4.000",
                    ".083 3.472",
                    ".083 3.472",
                    ".120 4.973",
                    ".120 4.973",
                    ".226 9.109",
                    ".226 9.109",
                    "",
                    ".318 12.51",
                    ".318 12.51",
                    "",
                    "",
                    ".636 22.85"
                  ],
                  [
                    "4",
                    "4.500",
                    ".083 3.915",
                    ".083 3.915",
                    ".120 5.613",
                    ".120 5.613",
                    ".237 10.79",
                    ".237 10.79",
                    ".281 12.66",
                    ".337 14.98",
                    ".337 14.98",
                    ".437 19.01",
                    ".531 22.51",
                    ".674 27.54"
                  ],
                  [
                    "4-1/2",
                    "5.000",
                    "",
                    "",
                    "",
                    "",
                    ".247 12.53",
                    "",
                    "",
                    ".355 17.61",
                    "",
                    "",
                    "",
                    ".710 32.53"
                  ],
                  [
                    "5",
                    "5.563",
                    ".109 6.349",
                    ".109 6.349",
                    ".134 7.770",
                    ".134 7.770",
                    ".258 14.62",
                    ".258 14.62",
                    "",
                    ".375 20.78",
                    ".375 20.78",
                    ".500 27.04",
                    ".625 32.96",
                    ".750 38.55"
                  ],
                  [
                    "6",
                    "6.625",
                    ".109 7.585",
                    ".109 7.585",
                    ".134 9.290",
                    ".134 9.290",
                    ".280 18.97",
                    ".280 18.97",
                    "",
                    ".432 28.57",
                    ".432 28.57",
                    ".562 36.39",
                    ".718 45.30",
                    ".864 53.16"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    "",
                    "",
                    ".301 23.57",
                    "",
                    "",
                    ".500 38.05",
                    "",
                    "",
                    "",
                    ".875 63.08"
                  ],
                  [
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  ]
                ],
                "records": [
                  {
                    "PIPE SIZE": "PIPE SIZE",
                    "OD IN INCHES": "OD IN INCHES",
                    "A.S.A. Pipe Schedules": "5s",
                    "A.S.A. Pipe Schedules_2": "5",
                    "A.S.A. Pipe Schedules_3": "10s",
                    "A.S.A. Pipe Schedules_4": "10",
                    "A.S.A. Pipe Schedules_5": "40s & Std.",
                    "A.S.A. Pipe Schedules_6": "40",
                    "A.S.A. Pipe Schedules_7": "60",
                    "A.S.A. Pipe Schedules_8": "80s & E.H.",
                    "A.S.A. Pipe Schedules_9": "80",
                    "A.S.A. Pipe Schedules_10": "120",
                    "A.S.A. Pipe Schedules_11": "160",
                    "A.S.A. Pipe Schedules_12": "DBL E.H."
                  },
                  {
                    "PIPE SIZE": "1/8",
                    "OD IN INCHES": ".405",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".035 .1383",
                    "A.S.A. Pipe Schedules_3": ".049 .1863",
                    "A.S.A. Pipe Schedules_4": ".049 .1863",
                    "A.S.A. Pipe Schedules_5": ".068 .2447",
                    "A.S.A. Pipe Schedules_6": "068 .2447",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": "0.95 .3145",
                    "A.S.A. Pipe Schedules_9": "0.95 .3145",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/4",
                    "OD IN INCHES": ".540",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049 .2570",
                    "A.S.A. Pipe Schedules_3": ".065 .3297",
                    "A.S.A. Pipe Schedules_4": ".065 .3297",
                    "A.S.A. Pipe Schedules_5": ".088 .4248",
                    "A.S.A. Pipe Schedules_6": "088 .4248",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".119 .5351",
                    "A.S.A. Pipe Schedules_9": ".119 .5351",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "3/8",
                    "OD IN INCHES": ".675",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049 .3276",
                    "A.S.A. Pipe Schedules_3": ".065 .4235",
                    "A.S.A. Pipe Schedules_4": ".065 .4235",
                    "A.S.A. Pipe Schedules_5": ".091 .5676",
                    "A.S.A. Pipe Schedules_6": ".091 .5676",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".126 .7338",
                    "A.S.A. Pipe Schedules_9": ".126 .7338",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/2",
                    "OD IN INCHES": ".840",
                    "A.S.A. Pipe Schedules": ".065 .5383",
                    "A.S.A. Pipe Schedules_2": ".065 .5383",
                    "A.S.A. Pipe Schedules_3": ".083 .6710",
                    "A.S.A. Pipe Schedules_4": ".083 .6710",
                    "A.S.A. Pipe Schedules_5": ".109 .8510",
                    "A.S.A. Pipe Schedules_6": ".109 .8510",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".147 1.088",
                    "A.S.A. Pipe Schedules_9": ".147 1.088",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".187 1.304",
                    "A.S.A. Pipe Schedules_12": ".294 1.714"
                  },
                  {
                    "PIPE SIZE": "3/4",
                    "OD IN INCHES": "1.050",
                    "A.S.A. Pipe Schedules": ".065 .6838",
                    "A.S.A. Pipe Schedules_2": ".065 .6838",
                    "A.S.A. Pipe Schedules_3": ".083 .8572",
                    "A.S.A. Pipe Schedules_4": ".083 .8572",
                    "A.S.A. Pipe Schedules_5": ".113 1.131",
                    "A.S.A. Pipe Schedules_6": ".113 1.131",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".154 1.474",
                    "A.S.A. Pipe Schedules_9": ".154 1.474",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".218 1.937",
                    "A.S.A. Pipe Schedules_12": ".308 2.441"
                  },
                  {
                    "PIPE SIZE": "1",
                    "OD IN INCHES": "1.315",
                    "A.S.A. Pipe Schedules": ".065 .8678",
                    "A.S.A. Pipe Schedules_2": ".065 .8678",
                    "A.S.A. Pipe Schedules_3": ".109 1.404",
                    "A.S.A. Pipe Schedules_4": ".109 1.404",
                    "A.S.A. Pipe Schedules_5": ".133 1.679",
                    "A.S.A. Pipe Schedules_6": ".133 1.679",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".179 2.172",
                    "A.S.A. Pipe Schedules_9": ".179 2.172",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".250 2.844",
                    "A.S.A. Pipe Schedules_12": ".358 3.659"
                  },
                  {
                    "PIPE SIZE": "1-1/4",
                    "OD IN INCHES": "1.660",
                    "A.S.A. Pipe Schedules": ".065 1.107",
                    "A.S.A. Pipe Schedules_2": ".065 1.107",
                    "A.S.A. Pipe Schedules_3": ".109 1.806",
                    "A.S.A. Pipe Schedules_4": ".109 1.806",
                    "A.S.A. Pipe Schedules_5": ".140 2.273",
                    "A.S.A. Pipe Schedules_6": ".140 2.273",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".191 2.997",
                    "A.S.A. Pipe Schedules_9": ".191 2.997",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".250 3.765",
                    "A.S.A. Pipe Schedules_12": ".382 5.214"
                  },
                  {
                    "PIPE SIZE": "1-1/2",
                    "OD IN INCHES": "1.900",
                    "A.S.A. Pipe Schedules": ".065 1.274",
                    "A.S.A. Pipe Schedules_2": ".065 1.274",
                    "A.S.A. Pipe Schedules_3": ".109 2.085",
                    "A.S.A. Pipe Schedules_4": ".109 2.085",
                    "A.S.A. Pipe Schedules_5": ".145 2.718",
                    "A.S.A. Pipe Schedules_6": ".145 2.718",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".200 3.631",
                    "A.S.A. Pipe Schedules_9": ".200 3.631",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".281 4.859",
                    "A.S.A. Pipe Schedules_12": ".400 6.408"
                  },
                  {
                    "PIPE SIZE": "2",
                    "OD IN INCHES": "2.375",
                    "A.S.A. Pipe Schedules": ".065 1.604",
                    "A.S.A. Pipe Schedules_2": ".065 1.604",
                    "A.S.A. Pipe Schedules_3": ".109 2.638",
                    "A.S.A. Pipe Schedules_4": ".109 2.638",
                    "A.S.A. Pipe Schedules_5": ".154 3.653",
                    "A.S.A. Pipe Schedules_6": ".154 3.653",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".218 5.022",
                    "A.S.A. Pipe Schedules_9": ".218 5.022",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".343 7.444",
                    "A.S.A. Pipe Schedules_12": ".436 9.029"
                  },
                  {
                    "PIPE SIZE": "2-1/2",
                    "OD IN INCHES": "2.875",
                    "A.S.A. Pipe Schedules": ".083 2.475",
                    "A.S.A. Pipe Schedules_2": ".083 2.475",
                    "A.S.A. Pipe Schedules_3": ".120 3.531",
                    "A.S.A. Pipe Schedules_4": ".120 3.531",
                    "A.S.A. Pipe Schedules_5": ".203 5.793",
                    "A.S.A. Pipe Schedules_6": ".203 5.793",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".276 7.661",
                    "A.S.A. Pipe Schedules_9": ".276 7.661",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".375 10.01",
                    "A.S.A. Pipe Schedules_12": ".552 13.70"
                  },
                  {
                    "PIPE SIZE": "3",
                    "OD IN INCHES": "3.500",
                    "A.S.A. Pipe Schedules": ".083 3.029",
                    "A.S.A. Pipe Schedules_2": ".083 3.029",
                    "A.S.A. Pipe Schedules_3": ".120 4.332",
                    "A.S.A. Pipe Schedules_4": ".120 4.332",
                    "A.S.A. Pipe Schedules_5": ".216 7.576",
                    "A.S.A. Pipe Schedules_6": ".216 7.576",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".300 10.25",
                    "A.S.A. Pipe Schedules_9": ".300 10.25",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".437 14.32",
                    "A.S.A. Pipe Schedules_12": ".600 18.58"
                  },
                  {
                    "PIPE SIZE": "3-1/2",
                    "OD IN INCHES": "4.000",
                    "A.S.A. Pipe Schedules": ".083 3.472",
                    "A.S.A. Pipe Schedules_2": ".083 3.472",
                    "A.S.A. Pipe Schedules_3": ".120 4.973",
                    "A.S.A. Pipe Schedules_4": ".120 4.973",
                    "A.S.A. Pipe Schedules_5": ".226 9.109",
                    "A.S.A. Pipe Schedules_6": ".226 9.109",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".318 12.51",
                    "A.S.A. Pipe Schedules_9": ".318 12.51",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".636 22.85"
                  },
                  {
                    "PIPE SIZE": "4",
                    "OD IN INCHES": "4.500",
                    "A.S.A. Pipe Schedules": ".083 3.915",
                    "A.S.A. Pipe Schedules_2": ".083 3.915",
                    "A.S.A. Pipe Schedules_3": ".120 5.613",
                    "A.S.A. Pipe Schedules_4": ".120 5.613",
                    "A.S.A. Pipe Schedules_5": ".237 10.79",
                    "A.S.A. Pipe Schedules_6": ".237 10.79",
                    "A.S.A. Pipe Schedules_7": ".281 12.66",
                    "A.S.A. Pipe Schedules_8": ".337 14.98",
                    "A.S.A. Pipe Schedules_9": ".337 14.98",
                    "A.S.A. Pipe Schedules_10": ".437 19.01",
                    "A.S.A. Pipe Schedules_11": ".531 22.51",
                    "A.S.A. Pipe Schedules_12": ".674 27.54"
                  },
                  {
                    "PIPE SIZE": "4-1/2",
                    "OD IN INCHES": "5.000",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".247 12.53",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".355 17.61",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".710 32.53"
                  },
                  {
                    "PIPE SIZE": "5",
                    "OD IN INCHES": "5.563",
                    "A.S.A. Pipe Schedules": ".109 6.349",
                    "A.S.A. Pipe Schedules_2": ".109 6.349",
                    "A.S.A. Pipe Schedules_3": ".134 7.770",
                    "A.S.A. Pipe Schedules_4": ".134 7.770",
                    "A.S.A. Pipe Schedules_5": ".258 14.62",
                    "A.S.A. Pipe Schedules_6": ".258 14.62",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".375 20.78",
                    "A.S.A. Pipe Schedules_9": ".375 20.78",
                    "A.S.A. Pipe Schedules_10": ".500 27.04",
                    "A.S.A. Pipe Schedules_11": ".625 32.96",
                    "A.S.A. Pipe Schedules_12": ".750 38.55"
                  },
                  {
                    "PIPE SIZE": "6",
                    "OD IN INCHES": "6.625",
                    "A.S.A. Pipe Schedules": ".109 7.585",
                    "A.S.A. Pipe Schedules_2": ".109 7.585",
                    "A.S.A. Pipe Schedules_3": ".134 9.290",
                    "A.S.A. Pipe Schedules_4": ".134 9.290",
                    "A.S.A. Pipe Schedules_5": ".280 18.97",
                    "A.S.A. Pipe Schedules_6": ".280 18.97",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".432 28.57",
                    "A.S.A. Pipe Schedules_9": ".432 28.57",
                    "A.S.A. Pipe Schedules_10": ".562 36.39",
                    "A.S.A. Pipe Schedules_11": ".718 45.30",
                    "A.S.A. Pipe Schedules_12": ".864 53.16"
                  },
                  {
                    "PIPE SIZE": "7",
                    "OD IN INCHES": "7.625",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".301 23.57",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".500 38.05",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".875 63.08"
                  },
                  {
                    "PIPE SIZE": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "OD IN INCHES": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_2": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_3": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_4": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_5": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_6": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_7": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_8": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_9": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_10": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_11": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_12": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  }
                ],
                "row_count": 19,
                "column_count": 14
              },
              {
                "title": "Dimensions of 304L SS Seamless Tubes",
                "slug": "dimensions-of-304l-ss-seamless-tubes",
                "columns": [
                  "Nominal",
                  "O.D. Inches",
                  "10s",
                  "10",
                  "40s & Std",
                  "40",
                  "80s & E.H.",
                  "80",
                  "160"
                ],
                "rows": [
                  [
                    "1/8",
                    ".405",
                    ".049",
                    ".049",
                    ".068",
                    ".068",
                    ".095",
                    ".095",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    ".065",
                    ".065",
                    ".088",
                    ".088",
                    ".119",
                    ".119",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    ".065",
                    ".065",
                    ".091",
                    ".091",
                    ".126",
                    ".126",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".083",
                    ".083",
                    ".109",
                    ".109",
                    ".147",
                    ".147",
                    ".187"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".083",
                    ".083",
                    ".113",
                    ".113",
                    ".154",
                    ".154",
                    ".218"
                  ],
                  [
                    "1",
                    "1.315",
                    ".109",
                    ".109",
                    ".133",
                    ".133",
                    ".179",
                    ".179",
                    ".250"
                  ],
                  [
                    "1 1/4",
                    "1.660",
                    ".109",
                    ".109",
                    ".140",
                    ".140",
                    ".191",
                    ".191",
                    ".250"
                  ],
                  [
                    "1 1/2",
                    "1.900",
                    ".109",
                    ".109",
                    ".145",
                    ".145",
                    ".200",
                    ".200",
                    ".281"
                  ],
                  [
                    "2",
                    "2.375",
                    ".109",
                    ".109",
                    ".154",
                    ".154",
                    ".218",
                    ".218",
                    ".343"
                  ],
                  [
                    "2 1/2",
                    "2.875",
                    ".120",
                    ".120",
                    ".203",
                    ".203",
                    ".276",
                    ".276",
                    ".375"
                  ],
                  [
                    "3",
                    "3.500",
                    ".120",
                    ".120",
                    ".216",
                    ".216",
                    ".300",
                    ".300",
                    ".437"
                  ],
                  [
                    "3 1/2",
                    "4.000",
                    ".120",
                    ".120",
                    ".226",
                    ".226",
                    ".318",
                    ".318",
                    ""
                  ],
                  [
                    "4",
                    "4.500",
                    ".120",
                    ".120",
                    ".237",
                    ".237",
                    ".337",
                    ".337",
                    ".531"
                  ],
                  [
                    "4 1/2",
                    "5.000",
                    "",
                    "",
                    ".247",
                    "",
                    ".355",
                    "",
                    ""
                  ],
                  [
                    "5",
                    "5.563",
                    ".134",
                    ".134",
                    ".258",
                    ".258",
                    ".375",
                    ".375",
                    ".625"
                  ],
                  [
                    "6",
                    "6.625",
                    ".134",
                    ".134",
                    ".280",
                    ".280",
                    ".432",
                    ".432",
                    ".718"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    ".301",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "8",
                    "8.625",
                    ".148",
                    ".148",
                    ".322",
                    ".322",
                    ".500",
                    ".500",
                    ".906"
                  ],
                  [
                    "9",
                    "9.625",
                    "",
                    "",
                    ".342",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "10",
                    "10.750",
                    ".165",
                    ".165",
                    ".365",
                    ".365",
                    ".500",
                    ".593",
                    "1.125"
                  ],
                  [
                    "11",
                    "11.750",
                    "",
                    "",
                    ".375",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "12",
                    "12.750",
                    ".180",
                    ".180",
                    ".375",
                    ".406",
                    ".500",
                    ".687",
                    "1.312"
                  ],
                  [
                    "14",
                    "14.000",
                    ".188",
                    ".250",
                    ".375",
                    ".437",
                    ".500",
                    ".750",
                    "1.406"
                  ],
                  [
                    "16",
                    "16.000",
                    ".188",
                    ".250",
                    ".375",
                    ".500",
                    ".500",
                    ".843",
                    "1.593"
                  ],
                  [
                    "18",
                    "18.000",
                    ".188",
                    ".250",
                    ".375",
                    ".562",
                    ".500",
                    ".937",
                    "1.781"
                  ]
                ],
                "records": [
                  {
                    "Nominal": "1/8",
                    "O.D. Inches": ".405",
                    "10s": ".049",
                    "10": ".049",
                    "40s & Std": ".068",
                    "40": ".068",
                    "80s & E.H.": ".095",
                    "80": ".095",
                    "160": ""
                  },
                  {
                    "Nominal": "1/4",
                    "O.D. Inches": ".540",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".088",
                    "40": ".088",
                    "80s & E.H.": ".119",
                    "80": ".119",
                    "160": ""
                  },
                  {
                    "Nominal": "3/8",
                    "O.D. Inches": ".675",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".091",
                    "40": ".091",
                    "80s & E.H.": ".126",
                    "80": ".126",
                    "160": ""
                  },
                  {
                    "Nominal": "1/2",
                    "O.D. Inches": ".840",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".109",
                    "40": ".109",
                    "80s & E.H.": ".147",
                    "80": ".147",
                    "160": ".187"
                  },
                  {
                    "Nominal": "3/4",
                    "O.D. Inches": "1.050",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".113",
                    "40": ".113",
                    "80s & E.H.": ".154",
                    "80": ".154",
                    "160": ".218"
                  },
                  {
                    "Nominal": "1",
                    "O.D. Inches": "1.315",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".133",
                    "40": ".133",
                    "80s & E.H.": ".179",
                    "80": ".179",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/4",
                    "O.D. Inches": "1.660",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".140",
                    "40": ".140",
                    "80s & E.H.": ".191",
                    "80": ".191",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/2",
                    "O.D. Inches": "1.900",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".145",
                    "40": ".145",
                    "80s & E.H.": ".200",
                    "80": ".200",
                    "160": ".281"
                  },
                  {
                    "Nominal": "2",
                    "O.D. Inches": "2.375",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".154",
                    "40": ".154",
                    "80s & E.H.": ".218",
                    "80": ".218",
                    "160": ".343"
                  },
                  {
                    "Nominal": "2 1/2",
                    "O.D. Inches": "2.875",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".203",
                    "40": ".203",
                    "80s & E.H.": ".276",
                    "80": ".276",
                    "160": ".375"
                  },
                  {
                    "Nominal": "3",
                    "O.D. Inches": "3.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".216",
                    "40": ".216",
                    "80s & E.H.": ".300",
                    "80": ".300",
                    "160": ".437"
                  },
                  {
                    "Nominal": "3 1/2",
                    "O.D. Inches": "4.000",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".226",
                    "40": ".226",
                    "80s & E.H.": ".318",
                    "80": ".318",
                    "160": ""
                  },
                  {
                    "Nominal": "4",
                    "O.D. Inches": "4.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".237",
                    "40": ".237",
                    "80s & E.H.": ".337",
                    "80": ".337",
                    "160": ".531"
                  },
                  {
                    "Nominal": "4 1/2",
                    "O.D. Inches": "5.000",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".247",
                    "40": "",
                    "80s & E.H.": ".355",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "5",
                    "O.D. Inches": "5.563",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".258",
                    "40": ".258",
                    "80s & E.H.": ".375",
                    "80": ".375",
                    "160": ".625"
                  },
                  {
                    "Nominal": "6",
                    "O.D. Inches": "6.625",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".280",
                    "40": ".280",
                    "80s & E.H.": ".432",
                    "80": ".432",
                    "160": ".718"
                  },
                  {
                    "Nominal": "7",
                    "O.D. Inches": "7.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".301",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "8",
                    "O.D. Inches": "8.625",
                    "10s": ".148",
                    "10": ".148",
                    "40s & Std": ".322",
                    "40": ".322",
                    "80s & E.H.": ".500",
                    "80": ".500",
                    "160": ".906"
                  },
                  {
                    "Nominal": "9",
                    "O.D. Inches": "9.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".342",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "10",
                    "O.D. Inches": "10.750",
                    "10s": ".165",
                    "10": ".165",
                    "40s & Std": ".365",
                    "40": ".365",
                    "80s & E.H.": ".500",
                    "80": ".593",
                    "160": "1.125"
                  },
                  {
                    "Nominal": "11",
                    "O.D. Inches": "11.750",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".375",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "12",
                    "O.D. Inches": "12.750",
                    "10s": ".180",
                    "10": ".180",
                    "40s & Std": ".375",
                    "40": ".406",
                    "80s & E.H.": ".500",
                    "80": ".687",
                    "160": "1.312"
                  },
                  {
                    "Nominal": "14",
                    "O.D. Inches": "14.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".437",
                    "80s & E.H.": ".500",
                    "80": ".750",
                    "160": "1.406"
                  },
                  {
                    "Nominal": "16",
                    "O.D. Inches": "16.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".500",
                    "80s & E.H.": ".500",
                    "80": ".843",
                    "160": "1.593"
                  },
                  {
                    "Nominal": "18",
                    "O.D. Inches": "18.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".562",
                    "80s & E.H.": ".500",
                    "80": ".937",
                    "160": "1.781"
                  }
                ],
                "row_count": 25,
                "column_count": 9
              },
              {
                "title": "SUS 304L Pipe/ Tube Chemical Analysis",
                "slug": "sus-304l-pipe-tube-chemical-analysis",
                "columns": [
                  "Grade",
                  "C",
                  "Mn",
                  "Si",
                  "P",
                  "S",
                  "Cr",
                  "Mo",
                  "Ni",
                  "N"
                ],
                "rows": [
                  [
                    "SS 304L",
                    "0.035 max",
                    "2.0 max",
                    "1.0 max",
                    "0.045 max",
                    "0.03 max",
                    "18 ? 20",
                    "-",
                    "8 ? 13",
                    "-"
                  ]
                ],
                "records": [
                  {
                    "Grade": "SS 304L",
                    "C": "0.035 max",
                    "Mn": "2.0 max",
                    "Si": "1.0 max",
                    "P": "0.045 max",
                    "S": "0.03 max",
                    "Cr": "18 ? 20",
                    "Mo": "-",
                    "Ni": "8 ? 13",
                    "N": "-"
                  }
                ],
                "row_count": 1,
                "column_count": 10
              },
              {
                "title": "Mechanical Properties of ASTM A312 TP304L Pipe",
                "slug": "mechanical-properties-of-astm-a312-tp304l-pipe",
                "columns": [
                  "Grade>",
                  "Tensile Strength (MPa) min>",
                  "Yield Strength 0.2% Proof (MPa) min>",
                  "Elongation (% in 50mm) min>",
                  "Hardness>",
                  "Hardness>_2"
                ],
                "rows": [
                  [
                    "Grade>",
                    "Tensile Strength (MPa) min>",
                    "Yield Strength 0.2% Proof (MPa) min>",
                    "Elongation (% in 50mm) min>",
                    "Rockwell B (HR B) max>",
                    "Brinell (HB) max>"
                  ],
                  [
                    "304L",
                    "485",
                    "170",
                    "40",
                    "92",
                    "201"
                  ]
                ],
                "records": [
                  {
                    "Grade>": "Grade>",
                    "Tensile Strength (MPa) min>": "Tensile Strength (MPa) min>",
                    "Yield Strength 0.2% Proof (MPa) min>": "Yield Strength 0.2% Proof (MPa) min>",
                    "Elongation (% in 50mm) min>": "Elongation (% in 50mm) min>",
                    "Hardness>": "Rockwell B (HR B) max>",
                    "Hardness>_2": "Brinell (HB) max>"
                  },
                  {
                    "Grade>": "304L",
                    "Tensile Strength (MPa) min>": "485",
                    "Yield Strength 0.2% Proof (MPa) min>": "170",
                    "Elongation (% in 50mm) min>": "40",
                    "Hardness>": "92",
                    "Hardness>_2": "201"
                  }
                ],
                "row_count": 2,
                "column_count": 6
              },
              {
                "title": "Equivalent Material of Inox 304L Pipe",
                "slug": "equivalent-material-of-inox-304l-pipe",
                "columns": [
                  "Grade>",
                  "UNS No>",
                  "Old British>",
                  "Old British>_2",
                  "Euronorm>",
                  "Euronorm>_2",
                  "Swedish SS>",
                  "Japanese JIS>",
                  "GOST>"
                ],
                "rows": [
                  [
                    "Grade>",
                    "UNS No>",
                    "BS>",
                    "En>",
                    "No>",
                    "Name>",
                    "Swedish SS>",
                    "Japanese JIS>",
                    "GOST>"
                  ],
                  [
                    "304L",
                    "S30403",
                    "304S31",
                    "58E",
                    "1.4306 / 1.4307",
                    "X5CrNi18-10",
                    "2332",
                    "SUS 304L",
                    "03Х18Н11"
                  ]
                ],
                "records": [
                  {
                    "Grade>": "Grade>",
                    "UNS No>": "UNS No>",
                    "Old British>": "BS>",
                    "Old British>_2": "En>",
                    "Euronorm>": "No>",
                    "Euronorm>_2": "Name>",
                    "Swedish SS>": "Swedish SS>",
                    "Japanese JIS>": "Japanese JIS>",
                    "GOST>": "GOST>"
                  },
                  {
                    "Grade>": "304L",
                    "UNS No>": "S30403",
                    "Old British>": "304S31",
                    "Old British>_2": "58E",
                    "Euronorm>": "1.4306 / 1.4307",
                    "Euronorm>_2": "X5CrNi18-10",
                    "Swedish SS>": "2332",
                    "Japanese JIS>": "SUS 304L",
                    "GOST>": "03Х18Н11"
                  }
                ],
                "row_count": 2,
                "column_count": 9
              },
              {
                "title": "UNS S30403 Tube Sizes",
                "slug": "uns-s30403-tube-sizes",
                "columns": [
                  "Wall",
                  "Sizes ( O.D.)"
                ],
                "rows": [
                  [
                    ".010",
                    "1/16\" , 1/8\" , 3/16\""
                  ],
                  [
                    ".020",
                    "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  ],
                  [
                    ".012",
                    "1/8\""
                  ],
                  [
                    ".016",
                    "1/8\" , 3/16\""
                  ],
                  [
                    ".028",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".035",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".049",
                    "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".065",
                    "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".083",
                    "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  ],
                  [
                    ".095",
                    "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".109",
                    "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".120",
                    "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".125",
                    "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  ],
                  [
                    ".134",
                    "1\""
                  ],
                  [
                    ".250",
                    "3\""
                  ],
                  [
                    ".375",
                    "3 1/2\""
                  ]
                ],
                "records": [
                  {
                    "Wall": ".010",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".020",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  },
                  {
                    "Wall": ".012",
                    "Sizes ( O.D.)": "1/8\""
                  },
                  {
                    "Wall": ".016",
                    "Sizes ( O.D.)": "1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".028",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".035",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".049",
                    "Sizes ( O.D.)": "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".065",
                    "Sizes ( O.D.)": "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".083",
                    "Sizes ( O.D.)": "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  },
                  {
                    "Wall": ".095",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".109",
                    "Sizes ( O.D.)": "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".120",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".125",
                    "Sizes ( O.D.)": "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  },
                  {
                    "Wall": ".134",
                    "Sizes ( O.D.)": "1\""
                  },
                  {
                    "Wall": ".250",
                    "Sizes ( O.D.)": "3\""
                  },
                  {
                    "Wall": ".375",
                    "Sizes ( O.D.)": "3 1/2\""
                  }
                ],
                "row_count": 16,
                "column_count": 2
              },
              {
                "title": "Pressure Rating of Stainless Steel 304L Round Tube",
                "slug": "pressure-rating-of-stainless-steel-304l-round-tube",
                "columns": [
                  "OD inches",
                  "Ave. Wall inches",
                  "Min Yield Strength (PSI)",
                  "Min Tensile Strength (PSI)",
                  "Theoretical Burst Pressure * (PSI)",
                  "Working Pressure (PSI) 25% of Burst",
                  "Theoretical Yield Point ** (PSI)",
                  "Collapse Pressure *** (PSI)"
                ],
                "rows": [
                  [
                    "0.250",
                    "0.020",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "0.250",
                    "0.028",
                    "30,000",
                    "75,000",
                    "21,649",
                    "5,412",
                    "8,660",
                    "5,967"
                  ],
                  [
                    "0.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "29,167",
                    "7,292",
                    "11,667",
                    "7,224"
                  ],
                  [
                    "0.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "48,355",
                    "12,089",
                    "19,342",
                    "9,455"
                  ],
                  [
                    "0.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "81,250",
                    "20,313",
                    "32,500",
                    "11,544"
                  ],
                  [
                    "0.375",
                    "0.020",
                    "30,000",
                    "75,000",
                    "8,955",
                    "2,239",
                    "3,582",
                    "3,029"
                  ],
                  [
                    "0.375",
                    "0.028",
                    "30,000",
                    "75,000",
                    "13,166",
                    "3,292",
                    "5,266",
                    "4,145"
                  ],
                  [
                    "0.375",
                    "0.035",
                    "30,000",
                    "75,000",
                    "17,213",
                    "4,303",
                    "6,885",
                    "5,077"
                  ],
                  [
                    "0.375",
                    "0.049",
                    "30,000",
                    "75,000",
                    "26,534",
                    "6,634",
                    "10,614",
                    "6,816"
                  ],
                  [
                    "0.375",
                    "0.065",
                    "30,000",
                    "75,000",
                    "39,796",
                    "9,949",
                    "15,918",
                    "8,597"
                  ],
                  [
                    "0.500",
                    "0.020",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.500",
                    "0.028",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "12,209",
                    "3,052",
                    "4,884",
                    "3,906"
                  ],
                  [
                    "0.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "18,284",
                    "4,571",
                    "7,313",
                    "5,316L"
                  ],
                  [
                    "0.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "26,351",
                    "6,588",
                    "10,541",
                    "6,786"
                  ],
                  [
                    "0.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "37,275",
                    "9,319",
                    "14,910",
                    "8,307"
                  ],
                  [
                    "0.625",
                    "0.020",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.625",
                    "0.028",
                    "30,000",
                    "75,000",
                    "7,381",
                    "1,845",
                    "2,953",
                    "2,568"
                  ],
                  [
                    "0.625",
                    "0.035",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.625",
                    "0.049",
                    "30,000",
                    "75,000",
                    "13,947",
                    "3,487",
                    "5,579",
                    "4,335"
                  ],
                  [
                    "0.625",
                    "0.065",
                    "30,000",
                    "75,000",
                    "19,697",
                    "4,924",
                    "7,879",
                    "5,591"
                  ],
                  [
                    "0.625",
                    "0.083",
                    "30,000",
                    "75,000",
                    "27,124",
                    "6,781",
                    "10,850",
                    "6,910"
                  ],
                  [
                    "0.625",
                    "0.095",
                    "30,000",
                    "75,000",
                    "32,759",
                    "8,190",
                    "13,103",
                    "7,734"
                  ],
                  [
                    "0.625",
                    "0.109",
                    "30,000",
                    "75,000",
                    "40,172",
                    "10,043",
                    "16,069",
                    "8,639"
                  ],
                  [
                    "0.750",
                    "0.028",
                    "30,000",
                    "75,000",
                    "6,052",
                    "1,513",
                    "2,421",
                    "2,156"
                  ],
                  [
                    "0.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "7,721",
                    "1,930",
                    "3,088",
                    "2,669"
                  ],
                  [
                    "0.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "11,273",
                    "2,818",
                    "4,509",
                    "3,664"
                  ],
                  [
                    "0.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "15,726",
                    "3,931",
                    "6,290",
                    "4,749"
                  ],
                  [
                    "0.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "21,318",
                    "5,330",
                    "8,527",
                    "5,905"
                  ],
                  [
                    "0.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "25,446",
                    "6,362",
                    "10,179",
                    "6,637"
                  ],
                  [
                    "0.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "30,733",
                    "7,683",
                    "12,293",
                    "7,453"
                  ],
                  [
                    "0.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "35,294",
                    "8,824",
                    "14,118",
                    "8,064"
                  ],
                  [
                    "0.875",
                    "0.020",
                    "30,000",
                    "75,000",
                    "3,593",
                    "898",
                    "1,437",
                    "1,340"
                  ],
                  [
                    "0.875",
                    "0.028",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.875",
                    "0.035",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.875",
                    "0.049",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.875",
                    "0.065",
                    "30,000",
                    "75,000",
                    "13,087",
                    "3,272",
                    "5,235",
                    "4,126"
                  ],
                  [
                    "0.875",
                    "0.083",
                    "30,000",
                    "75,000",
                    "17,560",
                    "4,390",
                    "7,024",
                    "5,152"
                  ],
                  [
                    "0.875",
                    "0.095",
                    "30,000",
                    "75,000",
                    "20,803",
                    "5,201",
                    "8,321",
                    "5,807"
                  ],
                  [
                    "0.875",
                    "0.109",
                    "30,000",
                    "75,000",
                    "24,886",
                    "6,221",
                    "9,954",
                    "6,543"
                  ],
                  [
                    "0.875",
                    "0.120",
                    "30,000",
                    "75,000",
                    "28,346",
                    "7,087",
                    "11,339",
                    "7,100"
                  ],
                  [
                    "1.000",
                    "0.028",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "5,645",
                    "1,411",
                    "2,258",
                    "2,027"
                  ],
                  [
                    "1.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "8,149",
                    "2,037",
                    "3,259",
                    "2,796"
                  ],
                  [
                    "1.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "11,207",
                    "2,802",
                    "4,483",
                    "3,647"
                  ],
                  [
                    "1.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "14,928",
                    "3,732",
                    "5,971",
                    "4,567"
                  ],
                  [
                    "1.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "17,593",
                    "4,398",
                    "7,037",
                    "5,159"
                  ],
                  [
                    "1.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "20,908",
                    "5,227",
                    "8,363",
                    "5,827"
                  ],
                  [
                    "1.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "23,684",
                    "5,921",
                    "9,474",
                    "6,336"
                  ],
                  [
                    "1.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "27,459",
                    "6,865",
                    "10,984",
                    "6,963"
                  ],
                  [
                    "1.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "6,380",
                    "1,595",
                    "2,552",
                    "2,260"
                  ],
                  [
                    "1.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "8,705",
                    "2,176",
                    "3,482",
                    "2,958"
                  ],
                  [
                    "1.250",
                    "0.083",
                    "30,000",
                    "75,000",
                    "11,485",
                    "2,871",
                    "4,594",
                    "3,719"
                  ],
                  [
                    "1.250",
                    "0.095",
                    "30,000",
                    "75,000",
                    "13,443",
                    "3,361",
                    "5,377",
                    "4,213"
                  ],
                  [
                    "1.250",
                    "0.109",
                    "30,000",
                    "75,000",
                    "15,843",
                    "3,961",
                    "6,337",
                    "4,776"
                  ],
                  [
                    "1.250",
                    "0.120",
                    "30,000",
                    "75,000",
                    "17,822",
                    "4,455",
                    "7,129",
                    "5,207"
                  ],
                  [
                    "1.250",
                    "0.134",
                    "30,000",
                    "75,000",
                    "20,468",
                    "5,117",
                    "8,187",
                    "5,742"
                  ],
                  [
                    "1.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,671",
                    "918",
                    "1,469",
                    "1,367"
                  ],
                  [
                    "1.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "5,243",
                    "1,311",
                    "2,097",
                    "1,896"
                  ],
                  [
                    "1.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "7,117",
                    "1,779",
                    "2,847",
                    "2,487"
                  ],
                  [
                    "1.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "9,333",
                    "2,333",
                    "3,733",
                    "3,136"
                  ],
                  [
                    "1.500",
                    "0.095",
                    "30,000",
                    "75,000",
                    "10,878",
                    "2,719",
                    "4,351",
                    "3,559"
                  ],
                  [
                    "1.500",
                    "0.109",
                    "30,000",
                    "75,000",
                    "12,754",
                    "3,188",
                    "5,101",
                    "4,043"
                  ],
                  [
                    "1.500",
                    "0.120",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "1.500",
                    "0.134",
                    "30,000",
                    "75,000",
                    "16,315",
                    "4,079",
                    "6,526",
                    "4,881"
                  ],
                  [
                    "1.500",
                    "0.148",
                    "30,000",
                    "75,000",
                    "18,439",
                    "4,610",
                    "7,375",
                    "5,336"
                  ],
                  [
                    "1.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,125",
                    "781",
                    "1,250",
                    "1,176"
                  ],
                  [
                    "1.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "1.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "6,019",
                    "1,505",
                    "2,407",
                    "2,146"
                  ],
                  [
                    "1.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "7,860",
                    "1,965",
                    "3,144",
                    "2,711"
                  ],
                  [
                    "1.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "9,135",
                    "2,284",
                    "3,654",
                    "3,080"
                  ],
                  [
                    "1.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "10,672",
                    "2,668",
                    "4,269",
                    "3,504"
                  ],
                  [
                    "1.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "11,921",
                    "2,980",
                    "4,768",
                    "3,832"
                  ],
                  [
                    "1.750",
                    "0.134",
                    "30,000",
                    "75,000",
                    "13,563",
                    "3,391",
                    "5,425",
                    "4,242"
                  ],
                  [
                    "1.750",
                    "0.148",
                    "30,000",
                    "75,000",
                    "15,268",
                    "3,817",
                    "6,107",
                    "4,645"
                  ],
                  [
                    "1.750",
                    "0.165",
                    "30,000",
                    "75,000",
                    "17,430",
                    "4,357",
                    "6,972",
                    "5,124"
                  ],
                  [
                    "2.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "2,720",
                    "680",
                    "1,088",
                    "1,032"
                  ],
                  [
                    "2.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "2.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "5,214",
                    "1,303",
                    "2,086",
                    "1,887"
                  ],
                  [
                    "2.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "6,788",
                    "1,697",
                    "2,715",
                    "2,387"
                  ],
                  [
                    "2.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "7,873",
                    "1,968",
                    "3,149",
                    "2,715"
                  ],
                  [
                    "2.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "9,175",
                    "2,294",
                    "3,670",
                    "3,092"
                  ],
                  [
                    "2.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "10,227",
                    "2,557",
                    "4,091",
                    "3,384"
                  ],
                  [
                    "2.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "11,605",
                    "2,901",
                    "4,642",
                    "3,751"
                  ],
                  [
                    "2.000",
                    "0.148",
                    "30,000",
                    "75,000",
                    "13,028",
                    "3,257",
                    "5,211",
                    "4,111"
                  ],
                  [
                    "2.000",
                    "0.165",
                    "30,000",
                    "75,000",
                    "14,820",
                    "3,705",
                    "5,928",
                    "4,542"
                  ]
                ],
                "records": [
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,649",
                    "Working Pressure (PSI) 25% of Burst": "5,412",
                    "Theoretical Yield Point ** (PSI)": "8,660",
                    "Collapse Pressure *** (PSI)": "5,967"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "29,167",
                    "Working Pressure (PSI) 25% of Burst": "7,292",
                    "Theoretical Yield Point ** (PSI)": "11,667",
                    "Collapse Pressure *** (PSI)": "7,224"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "48,355",
                    "Working Pressure (PSI) 25% of Burst": "12,089",
                    "Theoretical Yield Point ** (PSI)": "19,342",
                    "Collapse Pressure *** (PSI)": "9,455"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "81,250",
                    "Working Pressure (PSI) 25% of Burst": "20,313",
                    "Theoretical Yield Point ** (PSI)": "32,500",
                    "Collapse Pressure *** (PSI)": "11,544"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,955",
                    "Working Pressure (PSI) 25% of Burst": "2,239",
                    "Theoretical Yield Point ** (PSI)": "3,582",
                    "Collapse Pressure *** (PSI)": "3,029"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,166",
                    "Working Pressure (PSI) 25% of Burst": "3,292",
                    "Theoretical Yield Point ** (PSI)": "5,266",
                    "Collapse Pressure *** (PSI)": "4,145"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,213",
                    "Working Pressure (PSI) 25% of Burst": "4,303",
                    "Theoretical Yield Point ** (PSI)": "6,885",
                    "Collapse Pressure *** (PSI)": "5,077"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,534",
                    "Working Pressure (PSI) 25% of Burst": "6,634",
                    "Theoretical Yield Point ** (PSI)": "10,614",
                    "Collapse Pressure *** (PSI)": "6,816"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "39,796",
                    "Working Pressure (PSI) 25% of Burst": "9,949",
                    "Theoretical Yield Point ** (PSI)": "15,918",
                    "Collapse Pressure *** (PSI)": "8,597"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,209",
                    "Working Pressure (PSI) 25% of Burst": "3,052",
                    "Theoretical Yield Point ** (PSI)": "4,884",
                    "Collapse Pressure *** (PSI)": "3,906"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,284",
                    "Working Pressure (PSI) 25% of Burst": "4,571",
                    "Theoretical Yield Point ** (PSI)": "7,313",
                    "Collapse Pressure *** (PSI)": "5,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,351",
                    "Working Pressure (PSI) 25% of Burst": "6,588",
                    "Theoretical Yield Point ** (PSI)": "10,541",
                    "Collapse Pressure *** (PSI)": "6,786"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "37,275",
                    "Working Pressure (PSI) 25% of Burst": "9,319",
                    "Theoretical Yield Point ** (PSI)": "14,910",
                    "Collapse Pressure *** (PSI)": "8,307"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,381",
                    "Working Pressure (PSI) 25% of Burst": "1,845",
                    "Theoretical Yield Point ** (PSI)": "2,953",
                    "Collapse Pressure *** (PSI)": "2,568"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,947",
                    "Working Pressure (PSI) 25% of Burst": "3,487",
                    "Theoretical Yield Point ** (PSI)": "5,579",
                    "Collapse Pressure *** (PSI)": "4,335"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "19,697",
                    "Working Pressure (PSI) 25% of Burst": "4,924",
                    "Theoretical Yield Point ** (PSI)": "7,879",
                    "Collapse Pressure *** (PSI)": "5,591"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,124",
                    "Working Pressure (PSI) 25% of Burst": "6,781",
                    "Theoretical Yield Point ** (PSI)": "10,850",
                    "Collapse Pressure *** (PSI)": "6,910"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "32,759",
                    "Working Pressure (PSI) 25% of Burst": "8,190",
                    "Theoretical Yield Point ** (PSI)": "13,103",
                    "Collapse Pressure *** (PSI)": "7,734"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "40,172",
                    "Working Pressure (PSI) 25% of Burst": "10,043",
                    "Theoretical Yield Point ** (PSI)": "16,069",
                    "Collapse Pressure *** (PSI)": "8,639"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,052",
                    "Working Pressure (PSI) 25% of Burst": "1,513",
                    "Theoretical Yield Point ** (PSI)": "2,421",
                    "Collapse Pressure *** (PSI)": "2,156"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,721",
                    "Working Pressure (PSI) 25% of Burst": "1,930",
                    "Theoretical Yield Point ** (PSI)": "3,088",
                    "Collapse Pressure *** (PSI)": "2,669"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,273",
                    "Working Pressure (PSI) 25% of Burst": "2,818",
                    "Theoretical Yield Point ** (PSI)": "4,509",
                    "Collapse Pressure *** (PSI)": "3,664"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,726",
                    "Working Pressure (PSI) 25% of Burst": "3,931",
                    "Theoretical Yield Point ** (PSI)": "6,290",
                    "Collapse Pressure *** (PSI)": "4,749"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,318",
                    "Working Pressure (PSI) 25% of Burst": "5,330",
                    "Theoretical Yield Point ** (PSI)": "8,527",
                    "Collapse Pressure *** (PSI)": "5,905"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "25,446",
                    "Working Pressure (PSI) 25% of Burst": "6,362",
                    "Theoretical Yield Point ** (PSI)": "10,179",
                    "Collapse Pressure *** (PSI)": "6,637"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "30,733",
                    "Working Pressure (PSI) 25% of Burst": "7,683",
                    "Theoretical Yield Point ** (PSI)": "12,293",
                    "Collapse Pressure *** (PSI)": "7,453"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "35,294",
                    "Working Pressure (PSI) 25% of Burst": "8,824",
                    "Theoretical Yield Point ** (PSI)": "14,118",
                    "Collapse Pressure *** (PSI)": "8,064"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,593",
                    "Working Pressure (PSI) 25% of Burst": "898",
                    "Theoretical Yield Point ** (PSI)": "1,437",
                    "Collapse Pressure *** (PSI)": "1,340"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,087",
                    "Working Pressure (PSI) 25% of Burst": "3,272",
                    "Theoretical Yield Point ** (PSI)": "5,235",
                    "Collapse Pressure *** (PSI)": "4,126"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,560",
                    "Working Pressure (PSI) 25% of Burst": "4,390",
                    "Theoretical Yield Point ** (PSI)": "7,024",
                    "Collapse Pressure *** (PSI)": "5,152"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,803",
                    "Working Pressure (PSI) 25% of Burst": "5,201",
                    "Theoretical Yield Point ** (PSI)": "8,321",
                    "Collapse Pressure *** (PSI)": "5,807"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "24,886",
                    "Working Pressure (PSI) 25% of Burst": "6,221",
                    "Theoretical Yield Point ** (PSI)": "9,954",
                    "Collapse Pressure *** (PSI)": "6,543"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "28,346",
                    "Working Pressure (PSI) 25% of Burst": "7,087",
                    "Theoretical Yield Point ** (PSI)": "11,339",
                    "Collapse Pressure *** (PSI)": "7,100"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,645",
                    "Working Pressure (PSI) 25% of Burst": "1,411",
                    "Theoretical Yield Point ** (PSI)": "2,258",
                    "Collapse Pressure *** (PSI)": "2,027"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,149",
                    "Working Pressure (PSI) 25% of Burst": "2,037",
                    "Theoretical Yield Point ** (PSI)": "3,259",
                    "Collapse Pressure *** (PSI)": "2,796"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,207",
                    "Working Pressure (PSI) 25% of Burst": "2,802",
                    "Theoretical Yield Point ** (PSI)": "4,483",
                    "Collapse Pressure *** (PSI)": "3,647"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,928",
                    "Working Pressure (PSI) 25% of Burst": "3,732",
                    "Theoretical Yield Point ** (PSI)": "5,971",
                    "Collapse Pressure *** (PSI)": "4,567"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,593",
                    "Working Pressure (PSI) 25% of Burst": "4,398",
                    "Theoretical Yield Point ** (PSI)": "7,037",
                    "Collapse Pressure *** (PSI)": "5,159"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,908",
                    "Working Pressure (PSI) 25% of Burst": "5,227",
                    "Theoretical Yield Point ** (PSI)": "8,363",
                    "Collapse Pressure *** (PSI)": "5,827"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "23,684",
                    "Working Pressure (PSI) 25% of Burst": "5,921",
                    "Theoretical Yield Point ** (PSI)": "9,474",
                    "Collapse Pressure *** (PSI)": "6,336"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,459",
                    "Working Pressure (PSI) 25% of Burst": "6,865",
                    "Theoretical Yield Point ** (PSI)": "10,984",
                    "Collapse Pressure *** (PSI)": "6,963"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,380",
                    "Working Pressure (PSI) 25% of Burst": "1,595",
                    "Theoretical Yield Point ** (PSI)": "2,552",
                    "Collapse Pressure *** (PSI)": "2,260"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,705",
                    "Working Pressure (PSI) 25% of Burst": "2,176",
                    "Theoretical Yield Point ** (PSI)": "3,482",
                    "Collapse Pressure *** (PSI)": "2,958"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,485",
                    "Working Pressure (PSI) 25% of Burst": "2,871",
                    "Theoretical Yield Point ** (PSI)": "4,594",
                    "Collapse Pressure *** (PSI)": "3,719"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,443",
                    "Working Pressure (PSI) 25% of Burst": "3,361",
                    "Theoretical Yield Point ** (PSI)": "5,377",
                    "Collapse Pressure *** (PSI)": "4,213"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,843",
                    "Working Pressure (PSI) 25% of Burst": "3,961",
                    "Theoretical Yield Point ** (PSI)": "6,337",
                    "Collapse Pressure *** (PSI)": "4,776"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,822",
                    "Working Pressure (PSI) 25% of Burst": "4,455",
                    "Theoretical Yield Point ** (PSI)": "7,129",
                    "Collapse Pressure *** (PSI)": "5,207"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,468",
                    "Working Pressure (PSI) 25% of Burst": "5,117",
                    "Theoretical Yield Point ** (PSI)": "8,187",
                    "Collapse Pressure *** (PSI)": "5,742"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,671",
                    "Working Pressure (PSI) 25% of Burst": "918",
                    "Theoretical Yield Point ** (PSI)": "1,469",
                    "Collapse Pressure *** (PSI)": "1,367"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,243",
                    "Working Pressure (PSI) 25% of Burst": "1,311",
                    "Theoretical Yield Point ** (PSI)": "2,097",
                    "Collapse Pressure *** (PSI)": "1,896"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,117",
                    "Working Pressure (PSI) 25% of Burst": "1,779",
                    "Theoretical Yield Point ** (PSI)": "2,847",
                    "Collapse Pressure *** (PSI)": "2,487"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,333",
                    "Working Pressure (PSI) 25% of Burst": "2,333",
                    "Theoretical Yield Point ** (PSI)": "3,733",
                    "Collapse Pressure *** (PSI)": "3,136"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,878",
                    "Working Pressure (PSI) 25% of Burst": "2,719",
                    "Theoretical Yield Point ** (PSI)": "4,351",
                    "Collapse Pressure *** (PSI)": "3,559"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,754",
                    "Working Pressure (PSI) 25% of Burst": "3,188",
                    "Theoretical Yield Point ** (PSI)": "5,101",
                    "Collapse Pressure *** (PSI)": "4,043"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "16,315",
                    "Working Pressure (PSI) 25% of Burst": "4,079",
                    "Theoretical Yield Point ** (PSI)": "6,526",
                    "Collapse Pressure *** (PSI)": "4,881"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,439",
                    "Working Pressure (PSI) 25% of Burst": "4,610",
                    "Theoretical Yield Point ** (PSI)": "7,375",
                    "Collapse Pressure *** (PSI)": "5,336"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,125",
                    "Working Pressure (PSI) 25% of Burst": "781",
                    "Theoretical Yield Point ** (PSI)": "1,250",
                    "Collapse Pressure *** (PSI)": "1,176"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,019",
                    "Working Pressure (PSI) 25% of Burst": "1,505",
                    "Theoretical Yield Point ** (PSI)": "2,407",
                    "Collapse Pressure *** (PSI)": "2,146"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,860",
                    "Working Pressure (PSI) 25% of Burst": "1,965",
                    "Theoretical Yield Point ** (PSI)": "3,144",
                    "Collapse Pressure *** (PSI)": "2,711"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,135",
                    "Working Pressure (PSI) 25% of Burst": "2,284",
                    "Theoretical Yield Point ** (PSI)": "3,654",
                    "Collapse Pressure *** (PSI)": "3,080"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,672",
                    "Working Pressure (PSI) 25% of Burst": "2,668",
                    "Theoretical Yield Point ** (PSI)": "4,269",
                    "Collapse Pressure *** (PSI)": "3,504"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,921",
                    "Working Pressure (PSI) 25% of Burst": "2,980",
                    "Theoretical Yield Point ** (PSI)": "4,768",
                    "Collapse Pressure *** (PSI)": "3,832"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,563",
                    "Working Pressure (PSI) 25% of Burst": "3,391",
                    "Theoretical Yield Point ** (PSI)": "5,425",
                    "Collapse Pressure *** (PSI)": "4,242"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,268",
                    "Working Pressure (PSI) 25% of Burst": "3,817",
                    "Theoretical Yield Point ** (PSI)": "6,107",
                    "Collapse Pressure *** (PSI)": "4,645"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,430",
                    "Working Pressure (PSI) 25% of Burst": "4,357",
                    "Theoretical Yield Point ** (PSI)": "6,972",
                    "Collapse Pressure *** (PSI)": "5,124"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "2,720",
                    "Working Pressure (PSI) 25% of Burst": "680",
                    "Theoretical Yield Point ** (PSI)": "1,088",
                    "Collapse Pressure *** (PSI)": "1,032"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,214",
                    "Working Pressure (PSI) 25% of Burst": "1,303",
                    "Theoretical Yield Point ** (PSI)": "2,086",
                    "Collapse Pressure *** (PSI)": "1,887"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,788",
                    "Working Pressure (PSI) 25% of Burst": "1,697",
                    "Theoretical Yield Point ** (PSI)": "2,715",
                    "Collapse Pressure *** (PSI)": "2,387"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,873",
                    "Working Pressure (PSI) 25% of Burst": "1,968",
                    "Theoretical Yield Point ** (PSI)": "3,149",
                    "Collapse Pressure *** (PSI)": "2,715"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,175",
                    "Working Pressure (PSI) 25% of Burst": "2,294",
                    "Theoretical Yield Point ** (PSI)": "3,670",
                    "Collapse Pressure *** (PSI)": "3,092"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,227",
                    "Working Pressure (PSI) 25% of Burst": "2,557",
                    "Theoretical Yield Point ** (PSI)": "4,091",
                    "Collapse Pressure *** (PSI)": "3,384"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,605",
                    "Working Pressure (PSI) 25% of Burst": "2,901",
                    "Theoretical Yield Point ** (PSI)": "4,642",
                    "Collapse Pressure *** (PSI)": "3,751"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,028",
                    "Working Pressure (PSI) 25% of Burst": "3,257",
                    "Theoretical Yield Point ** (PSI)": "5,211",
                    "Collapse Pressure *** (PSI)": "4,111"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,820",
                    "Working Pressure (PSI) 25% of Burst": "3,705",
                    "Theoretical Yield Point ** (PSI)": "5,928",
                    "Collapse Pressure *** (PSI)": "4,542"
                  }
                ],
                "row_count": 87,
                "column_count": 8
              },
              {
                "title": "Diameter Tolerance of WNR 1.4306 Tubing & Pipe",
                "slug": "diameter-tolerance-of-wnr-1-4306-tubing-pipe",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance"
                  ],
                  [
                    "NPS",
                    "+",
                    "+",
                    "–",
                    "–"
                  ],
                  [
                    "NPS",
                    "inch",
                    "mm",
                    "inch",
                    "mm"
                  ],
                  [
                    "1/8~1 1 /2",
                    "1/64(0.015)",
                    "0.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 1 1 /2~4",
                    "1/32(0.031)",
                    "0.8",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 4~8",
                    "1/16(0.062)",
                    "1.6",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 8~18",
                    "3/32(0.093)",
                    "2.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 18~26",
                    "1/8(0.125)",
                    "3.2",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 26~34",
                    "5/32(0.156)",
                    "4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 34~48",
                    "3/16(0.187)",
                    "4.8",
                    "1/32(0.031)",
                    "0.8"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 OD Tolerance",
                    "col_3": "ASTM A312 OD Tolerance",
                    "col_4": "ASTM A312 OD Tolerance",
                    "col_5": "ASTM A312 OD Tolerance"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "+",
                    "col_4": "–",
                    "col_5": "–"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "inch",
                    "col_3": "mm",
                    "col_4": "inch",
                    "col_5": "mm"
                  },
                  {
                    "col_1": "1/8~1 1 /2",
                    "col_2": "1/64(0.015)",
                    "col_3": "0.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 1 1 /2~4",
                    "col_2": "1/32(0.031)",
                    "col_3": "0.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 4~8",
                    "col_2": "1/16(0.062)",
                    "col_3": "1.6",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 8~18",
                    "col_2": "3/32(0.093)",
                    "col_3": "2.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 18~26",
                    "col_2": "1/8(0.125)",
                    "col_3": "3.2",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 26~34",
                    "col_2": "5/32(0.156)",
                    "col_3": "4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 34~48",
                    "col_2": "3/16(0.187)",
                    "col_3": "4.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  }
                ],
                "row_count": 10,
                "column_count": 5
              },
              {
                "title": "Wall Thickness Tolerance of ASME SA312 SS 304L Pipe",
                "slug": "wall-thickness-tolerance-of-asme-sa312-ss-304l-pipe",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 WT Tolerance, %",
                    "ASTM A312 WT Tolerance, %"
                  ],
                  [
                    "NPS",
                    "+",
                    "–"
                  ],
                  [
                    "1/8-2 1 /2",
                    "20",
                    "12.5"
                  ],
                  [
                    "3~18, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "3~18, t/D> 5%",
                    "15",
                    "12.5"
                  ],
                  [
                    "≥ 20, welded",
                    "17.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D> 5%",
                    "15",
                    "12.5"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 WT Tolerance, %",
                    "col_3": "ASTM A312 WT Tolerance, %"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "–"
                  },
                  {
                    "col_1": "1/8-2 1 /2",
                    "col_2": "20",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, welded",
                    "col_2": "17.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  }
                ],
                "row_count": 8,
                "column_count": 3
              },
              {
                "title": "Exporter of Stainless Steel 304L Pipe in Below Countries",
                "slug": "exporter-of-stainless-steel-304l-pipe-in-below-countries",
                "columns": [
                  "col_1",
                  "col_2"
                ],
                "rows": [
                  [
                    "polished 304L Stainless Steel Pipe",
                    "Oman, UAE, Hong Kong, Malaysia"
                  ],
                  [
                    "Stainless steel pipe 1.4307",
                    "Philippines, Nigeria, UK, Australia"
                  ],
                  [
                    "Small Diameter AISI 304l SS Capillary Tube",
                    "Egypt, UK, Mexico, Spain"
                  ],
                  [
                    "304L Stainless Steel exhaust pipe",
                    "UK, Ellington -United States, Poland, Canada"
                  ],
                  [
                    "304L Stainless Steel schedule 40 pipe",
                    "United Kingdom -UK, UAE, Malaysia, Europe"
                  ],
                  [
                    "304l Stainless Steel Square Tubing",
                    "Bahrain, Singapore, Singapore, South Africa"
                  ],
                  [
                    "03Х18Н11 AISI 304L pipes",
                    "Dammam -KSA, Belgium, Philippines, Indonesia"
                  ],
                  [
                    "SA 213 TP 304L Stainless Steel Tubing",
                    "Malaysia, Finland, Bangladesh, USA"
                  ],
                  [
                    "304L SS Hexagonal Pipe",
                    "Chile, Singapore, Iran, Italy"
                  ],
                  [
                    "304L Stainless Steel Heat Exchanger Tubes",
                    "Netherlands, Dubai, Russia, Malaysia"
                  ],
                  [
                    "Thickness 9.0mm aisi 304l seamless stainless steel pipe",
                    "United Arab Emirates (UAE), Malaysia, Norway, Turkey"
                  ],
                  [
                    "18 inch 304l Welded stainless Steel Pipe",
                    "Czechia, Malaysia, Thailand, Germany"
                  ],
                  [
                    "304L Stainless Steel Square Tube Mirror Finish",
                    "South Africa, Thailand, Europe, Saudi Arabia (KSA)"
                  ],
                  [
                    "6\" A312 TP304l stainless steel seamless pipe",
                    "Qatar, Brazil, Kuwait, France"
                  ],
                  [
                    "Schedule 10 Type 304L Stainless Steel Tube",
                    "United Arab Emirates (UAE), Malaysia, Thailand"
                  ],
                  [
                    "1.4307 Aisi 304L Corrugated Tube",
                    "Czechia, Malaysia, Norway, Turkey"
                  ],
                  [
                    "45mm stainless steel boiler tube 304L",
                    "South Africa, Saudi Arabia (KSA), Qatar, Thailand"
                  ],
                  [
                    "Stainless Steel 304l Seamless Round Tubing",
                    "Brazil, Kuwait, Europe, France"
                  ]
                ],
                "records": [
                  {
                    "col_1": "polished 304L Stainless Steel Pipe",
                    "col_2": "Oman, UAE, Hong Kong, Malaysia"
                  },
                  {
                    "col_1": "Stainless steel pipe 1.4307",
                    "col_2": "Philippines, Nigeria, UK, Australia"
                  },
                  {
                    "col_1": "Small Diameter AISI 304l SS Capillary Tube",
                    "col_2": "Egypt, UK, Mexico, Spain"
                  },
                  {
                    "col_1": "304L Stainless Steel exhaust pipe",
                    "col_2": "UK, Ellington -United States, Poland, Canada"
                  },
                  {
                    "col_1": "304L Stainless Steel schedule 40 pipe",
                    "col_2": "United Kingdom -UK, UAE, Malaysia, Europe"
                  },
                  {
                    "col_1": "304l Stainless Steel Square Tubing",
                    "col_2": "Bahrain, Singapore, Singapore, South Africa"
                  },
                  {
                    "col_1": "03Х18Н11 AISI 304L pipes",
                    "col_2": "Dammam -KSA, Belgium, Philippines, Indonesia"
                  },
                  {
                    "col_1": "SA 213 TP 304L Stainless Steel Tubing",
                    "col_2": "Malaysia, Finland, Bangladesh, USA"
                  },
                  {
                    "col_1": "304L SS Hexagonal Pipe",
                    "col_2": "Chile, Singapore, Iran, Italy"
                  },
                  {
                    "col_1": "304L Stainless Steel Heat Exchanger Tubes",
                    "col_2": "Netherlands, Dubai, Russia, Malaysia"
                  },
                  {
                    "col_1": "Thickness 9.0mm aisi 304l seamless stainless steel pipe",
                    "col_2": "United Arab Emirates (UAE), Malaysia, Norway, Turkey"
                  },
                  {
                    "col_1": "18 inch 304l Welded stainless Steel Pipe",
                    "col_2": "Czechia, Malaysia, Thailand, Germany"
                  },
                  {
                    "col_1": "304L Stainless Steel Square Tube Mirror Finish",
                    "col_2": "South Africa, Thailand, Europe, Saudi Arabia (KSA)"
                  },
                  {
                    "col_1": "6\" A312 TP304l stainless steel seamless pipe",
                    "col_2": "Qatar, Brazil, Kuwait, France"
                  },
                  {
                    "col_1": "Schedule 10 Type 304L Stainless Steel Tube",
                    "col_2": "United Arab Emirates (UAE), Malaysia, Thailand"
                  },
                  {
                    "col_1": "1.4307 Aisi 304L Corrugated Tube",
                    "col_2": "Czechia, Malaysia, Norway, Turkey"
                  },
                  {
                    "col_1": "45mm stainless steel boiler tube 304L",
                    "col_2": "South Africa, Saudi Arabia (KSA), Qatar, Thailand"
                  },
                  {
                    "col_1": "Stainless Steel 304l Seamless Round Tubing",
                    "col_2": "Brazil, Kuwait, Europe, France"
                  }
                ],
                "row_count": 18,
                "column_count": 2
              }
            ],
          },
          {
            slug: "stainless-steel-316-pipe",
            name: "Stainless Steel 316 Pipe",
            icon: "pipe",
            "description": "ISO Certified Stainless Steel 316 Pipe Suppliers in India. Buy UNS S31600 schedule 40 Tubing at best price, Manufacturer of STM A213 TP316 Seamless/ Welded Tube. SA312 TP316 ERW Pipe Price List.",
            grades: ["Stainless Steel"],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            table_of_contents: [
              {
                "label": "Stainless Steel 316 Pipe Specification Table",
                "anchor": "1"
              },
              {
                "label": "316 Stainless Steel Pipe Prices",
                "anchor": "2"
              },
              {
                "label": "Weight Chart of ASTM A312 SS 316 Pipe",
                "anchor": "3"
              },
              {
                "label": "Size Chart of Stainless Steel 316 Round Tube",
                "anchor": "4"
              },
              {
                "label": "316 Stainless Steel Tube Pressure Rating",
                "anchor": "5"
              },
              {
                "label": "Stainless Steel Type 316 Pipe Chemical Properties",
                "anchor": "6"
              },
              {
                "label": "Mechanical Properties of SS 316 Pipe",
                "anchor": "7"
              },
              {
                "label": "Equivalent Grades of UNS S31600 Welded Pipe",
                "anchor": "8"
              },
              {
                "label": "Available Types of Inox 316 Pipe/ Tube",
                "anchor": "9"
              },
              {
                "label": "SS 316 Pipe/ Tube Wall Thickness Tolerance",
                "anchor": "10"
              },
              {
                "label": "Diameter Tolerance of 316 Stainless Steel Tubing & Pipe",
                "anchor": "11"
              },
              {
                "label": "DIN 1.4401 Seamless Tubes Dimension Table",
                "anchor": "12"
              }
            ],
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS S31600" },
              { label: "Composition", value: "16-18% chromium, 10-14% nickel, 2-3% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Marine, pharmaceutical and chloride-exposed process piping" },
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.08", "2.00", "0.75", "0.045", "0.030", "16.0-18.0", "10.0-14.0", "2.00-3.00", "N ≤ 0.10"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["S31600", "1.4401 / 1.4436", "SUS 316", "X5CrNiMo17-12-2"]],
              },
              {
                "title": "Stainless Steel 316 Pipe Specification Table",
                "slug": "stainless-steel-316-pipe-specification-table",
                "columns": [
                  "ASTM / ASME Standards",
                  "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312"
                ],
                "rows": [
                  [
                    "Pipe Form",
                    "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  ],
                  [
                    "Pipe/ Tube Length",
                    "Single Random, Double Random & Cut Length."
                  ],
                  [
                    "Pipe/ Tube Schedule",
                    "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  ],
                  [
                    "Pipe Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "EFW Pipe size",
                    "5.0 mm - 1219.2 mm"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded."
                  ],
                  [
                    "Welded Tube Size",
                    "6.35 mm OD To 152 mm OD"
                  ],
                  [
                    "Swg & Bwg",
                    "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  ],
                  [
                    "Marking",
                    "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Material Test Certificates (MTC)",
                    "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  ],
                  [
                    "Tubing wall thickness",
                    "0.020\" –0.220\", (special wall thicknesses available)"
                  ],
                  [
                    "Tube Length",
                    "Single Random, Double Random, Standard & Cut length"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded"
                  ],
                  [
                    "Marking",
                    "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Tube Type",
                    "Seamless, ERW, EFW, Welded, Fabricated"
                  ],
                  [
                    "Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "Tube Form",
                    "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  ],
                  [
                    "Application",
                    "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  ]
                ],
                "records": [
                  {
                    "ASTM / ASME Standards": "Pipe Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random & Cut Length."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Schedule",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  },
                  {
                    "ASTM / ASME Standards": "Pipe Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "EFW Pipe size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "5.0 mm - 1219.2 mm"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded."
                  },
                  {
                    "ASTM / ASME Standards": "Welded Tube Size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "6.35 mm OD To 152 mm OD"
                  },
                  {
                    "ASTM / ASME Standards": "Swg & Bwg",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Material Test Certificates (MTC)",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  },
                  {
                    "ASTM / ASME Standards": "Tubing wall thickness",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "0.020\" –0.220\", (special wall thicknesses available)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random, Standard & Cut length"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded"
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Type",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Seamless, ERW, EFW, Welded, Fabricated"
                  },
                  {
                    "ASTM / ASME Standards": "Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Application",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  }
                ],
                "row_count": 18,
                "column_count": 2
              },
              {
                "title": "316 Stainless Steel Pipe Prices",
                "slug": "316-stainless-steel-pipe-prices",
                "columns": [
                  "Price list of Stainless Steel 316 Pipe",
                  "316 SS Pipe Price in INR",
                  "316 SS Pipe Price in USD",
                  "316 SS Pipe Price in UAE Dirham"
                ],
                "rows": [
                  [
                    "SCH 80 Stainless Steel 316 Pipe",
                    "INR 35,649",
                    "383.53 USD",
                    "1839.46 UAE Dirham"
                  ],
                  [
                    "STAINLESS STEEL PIPES : SIZE - OD : 21.3M, 1/2, PIPE SCH 40S, A312 GR.TP316/316L",
                    "INR 436",
                    "5.82 USD",
                    "21.36 UAE Dirham"
                  ]
                ],
                "records": [
                  {
                    "Price list of Stainless Steel 316 Pipe": "SCH 80 Stainless Steel 316 Pipe",
                    "316 SS Pipe Price in INR": "INR 35,649",
                    "316 SS Pipe Price in USD": "383.53 USD",
                    "316 SS Pipe Price in UAE Dirham": "1839.46 UAE Dirham"
                  },
                  {
                    "Price list of Stainless Steel 316 Pipe": "STAINLESS STEEL PIPES : SIZE - OD : 21.3M, 1/2, PIPE SCH 40S, A312 GR.TP316/316L",
                    "316 SS Pipe Price in INR": "INR 436",
                    "316 SS Pipe Price in USD": "5.82 USD",
                    "316 SS Pipe Price in UAE Dirham": "21.36 UAE Dirham"
                  }
                ],
                "row_count": 2,
                "column_count": 4
              },
              {
                "title": "Weight Chart of ASTM A312 SS 316 Pipe",
                "slug": "weight-chart-of-astm-a312-ss-316-pipe",
                "columns": [
                  "PIPE SIZE",
                  "OD IN INCHES",
                  "A.S.A. Pipe Schedules",
                  "A.S.A. Pipe Schedules_2",
                  "A.S.A. Pipe Schedules_3",
                  "A.S.A. Pipe Schedules_4",
                  "A.S.A. Pipe Schedules_5",
                  "A.S.A. Pipe Schedules_6",
                  "A.S.A. Pipe Schedules_7",
                  "A.S.A. Pipe Schedules_8",
                  "A.S.A. Pipe Schedules_9",
                  "A.S.A. Pipe Schedules_10",
                  "A.S.A. Pipe Schedules_11",
                  "A.S.A. Pipe Schedules_12"
                ],
                "rows": [
                  [
                    "PIPE SIZE",
                    "OD IN INCHES",
                    "5s",
                    "5",
                    "10s",
                    "10",
                    "40s & Std.",
                    "40",
                    "60",
                    "80s & E.H.",
                    "80",
                    "120",
                    "160",
                    "DBL E.H."
                  ],
                  [
                    "1/8",
                    ".405",
                    "",
                    ".035.1383",
                    ".049.1863",
                    ".049.1863",
                    ".068.2447",
                    "068.2447",
                    "",
                    "0.95.3145",
                    "0.95.3145",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    "",
                    ".049.2570",
                    ".065.3297",
                    ".065.3297",
                    ".088.4248",
                    "088.4248",
                    "",
                    ".119.5351",
                    ".119.5351",
                    "",
                    "",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    "",
                    ".049.3276",
                    ".065.4235",
                    ".065.4235",
                    ".091.5676",
                    ".091.5676",
                    "",
                    ".126.7338",
                    ".126.7338",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".065.5383",
                    ".065.5383",
                    ".083.6710",
                    ".083.6710",
                    ".109.8510",
                    ".109.8510",
                    "",
                    ".1471.088",
                    ".1471.088",
                    "",
                    ".1871.304",
                    ".2941.714"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".065.6838",
                    ".065.6838",
                    ".083.8572",
                    ".083.8572",
                    ".1131.131",
                    ".1131.131",
                    "",
                    ".1541.474",
                    ".1541.474",
                    "",
                    ".2181.937",
                    ".3082.441"
                  ],
                  [
                    "1",
                    "1.315",
                    ".065.8678",
                    ".065.8678",
                    ".1091.404",
                    ".1091.404",
                    ".1331.679",
                    ".1331.679",
                    "",
                    ".1792.172",
                    ".1792.172",
                    "",
                    ".2502.844",
                    ".3583.659"
                  ],
                  [
                    "1-1/4",
                    "1.660",
                    ".0651.107",
                    ".0651.107",
                    ".1091.806",
                    ".1091.806",
                    ".1402.273",
                    ".1402.273",
                    "",
                    ".1912.997",
                    ".1912.997",
                    "",
                    ".2503.765",
                    ".3825.214"
                  ],
                  [
                    "1-1/2",
                    "1.900",
                    ".0651.274",
                    ".0651.274",
                    ".1092.085",
                    ".1092.085",
                    ".1452.718",
                    ".1452.718",
                    "",
                    ".2003.631",
                    ".2003.631",
                    "",
                    ".2814.859",
                    ".4006.408"
                  ],
                  [
                    "2",
                    "2.375",
                    ".0651.604",
                    ".0651.604",
                    ".1092.638",
                    ".1092.638",
                    ".1543.653",
                    ".1543.653",
                    "",
                    ".2185.022",
                    ".2185.022",
                    "",
                    ".3437.444",
                    ".4369.029"
                  ],
                  [
                    "2-1/2",
                    "2.875",
                    ".0832.475",
                    ".0832.475",
                    ".1203.531",
                    ".1203.531",
                    ".2035.793",
                    ".2035.793",
                    "",
                    ".2767.661",
                    ".2767.661",
                    "",
                    ".37510.01",
                    ".55213.70"
                  ],
                  [
                    "3",
                    "3.500",
                    ".0833.029",
                    ".0833.029",
                    ".1204.332",
                    ".1204.332",
                    ".2167.576",
                    ".2167.576",
                    "",
                    ".30010.25",
                    ".30010.25",
                    "",
                    ".43714.32",
                    ".60018.58"
                  ],
                  [
                    "3-1/2",
                    "4.000",
                    ".0833.472",
                    ".0833.472",
                    ".1204.973",
                    ".1204.973",
                    ".2269.109",
                    ".2269.109",
                    "",
                    ".31812.51",
                    ".31812.51",
                    "",
                    "",
                    ".63622.85"
                  ],
                  [
                    "4",
                    "4.500",
                    ".0833.915",
                    ".0833.915",
                    ".1205.613",
                    ".1205.613",
                    ".23710.79",
                    ".23710.79",
                    ".28112.66",
                    ".33714.98",
                    ".33714.98",
                    ".43719.01",
                    ".53122.51",
                    ".67427.54"
                  ],
                  [
                    "4-1/2",
                    "5.000",
                    "",
                    "",
                    "",
                    "",
                    ".24712.53",
                    "",
                    "",
                    ".35517.61",
                    "",
                    "",
                    "",
                    ".71032.53"
                  ],
                  [
                    "5",
                    "5.563",
                    ".1096.349",
                    ".1096.349",
                    ".1347.770",
                    ".1347.770",
                    ".25814.62",
                    ".25814.62",
                    "",
                    ".37520.78",
                    ".37520.78",
                    ".50027.04",
                    ".62532.96",
                    ".75038.55"
                  ],
                  [
                    "6",
                    "6.625",
                    ".1097.585",
                    ".1097.585",
                    ".1349.290",
                    ".1349.290",
                    ".28018.97",
                    ".28018.97",
                    "",
                    ".43228.57",
                    ".43228.57",
                    ".56236.39",
                    ".71845.30",
                    ".86453.16"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    "",
                    "",
                    ".30123.57",
                    "",
                    "",
                    ".50038.05",
                    "",
                    "",
                    "",
                    ".87563.08"
                  ],
                  [
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  ]
                ],
                "records": [
                  {
                    "PIPE SIZE": "PIPE SIZE",
                    "OD IN INCHES": "OD IN INCHES",
                    "A.S.A. Pipe Schedules": "5s",
                    "A.S.A. Pipe Schedules_2": "5",
                    "A.S.A. Pipe Schedules_3": "10s",
                    "A.S.A. Pipe Schedules_4": "10",
                    "A.S.A. Pipe Schedules_5": "40s & Std.",
                    "A.S.A. Pipe Schedules_6": "40",
                    "A.S.A. Pipe Schedules_7": "60",
                    "A.S.A. Pipe Schedules_8": "80s & E.H.",
                    "A.S.A. Pipe Schedules_9": "80",
                    "A.S.A. Pipe Schedules_10": "120",
                    "A.S.A. Pipe Schedules_11": "160",
                    "A.S.A. Pipe Schedules_12": "DBL E.H."
                  },
                  {
                    "PIPE SIZE": "1/8",
                    "OD IN INCHES": ".405",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".035.1383",
                    "A.S.A. Pipe Schedules_3": ".049.1863",
                    "A.S.A. Pipe Schedules_4": ".049.1863",
                    "A.S.A. Pipe Schedules_5": ".068.2447",
                    "A.S.A. Pipe Schedules_6": "068.2447",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": "0.95.3145",
                    "A.S.A. Pipe Schedules_9": "0.95.3145",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/4",
                    "OD IN INCHES": ".540",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.2570",
                    "A.S.A. Pipe Schedules_3": ".065.3297",
                    "A.S.A. Pipe Schedules_4": ".065.3297",
                    "A.S.A. Pipe Schedules_5": ".088.4248",
                    "A.S.A. Pipe Schedules_6": "088.4248",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".119.5351",
                    "A.S.A. Pipe Schedules_9": ".119.5351",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "3/8",
                    "OD IN INCHES": ".675",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.3276",
                    "A.S.A. Pipe Schedules_3": ".065.4235",
                    "A.S.A. Pipe Schedules_4": ".065.4235",
                    "A.S.A. Pipe Schedules_5": ".091.5676",
                    "A.S.A. Pipe Schedules_6": ".091.5676",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".126.7338",
                    "A.S.A. Pipe Schedules_9": ".126.7338",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/2",
                    "OD IN INCHES": ".840",
                    "A.S.A. Pipe Schedules": ".065.5383",
                    "A.S.A. Pipe Schedules_2": ".065.5383",
                    "A.S.A. Pipe Schedules_3": ".083.6710",
                    "A.S.A. Pipe Schedules_4": ".083.6710",
                    "A.S.A. Pipe Schedules_5": ".109.8510",
                    "A.S.A. Pipe Schedules_6": ".109.8510",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1471.088",
                    "A.S.A. Pipe Schedules_9": ".1471.088",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".1871.304",
                    "A.S.A. Pipe Schedules_12": ".2941.714"
                  },
                  {
                    "PIPE SIZE": "3/4",
                    "OD IN INCHES": "1.050",
                    "A.S.A. Pipe Schedules": ".065.6838",
                    "A.S.A. Pipe Schedules_2": ".065.6838",
                    "A.S.A. Pipe Schedules_3": ".083.8572",
                    "A.S.A. Pipe Schedules_4": ".083.8572",
                    "A.S.A. Pipe Schedules_5": ".1131.131",
                    "A.S.A. Pipe Schedules_6": ".1131.131",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1541.474",
                    "A.S.A. Pipe Schedules_9": ".1541.474",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2181.937",
                    "A.S.A. Pipe Schedules_12": ".3082.441"
                  },
                  {
                    "PIPE SIZE": "1",
                    "OD IN INCHES": "1.315",
                    "A.S.A. Pipe Schedules": ".065.8678",
                    "A.S.A. Pipe Schedules_2": ".065.8678",
                    "A.S.A. Pipe Schedules_3": ".1091.404",
                    "A.S.A. Pipe Schedules_4": ".1091.404",
                    "A.S.A. Pipe Schedules_5": ".1331.679",
                    "A.S.A. Pipe Schedules_6": ".1331.679",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1792.172",
                    "A.S.A. Pipe Schedules_9": ".1792.172",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2502.844",
                    "A.S.A. Pipe Schedules_12": ".3583.659"
                  },
                  {
                    "PIPE SIZE": "1-1/4",
                    "OD IN INCHES": "1.660",
                    "A.S.A. Pipe Schedules": ".0651.107",
                    "A.S.A. Pipe Schedules_2": ".0651.107",
                    "A.S.A. Pipe Schedules_3": ".1091.806",
                    "A.S.A. Pipe Schedules_4": ".1091.806",
                    "A.S.A. Pipe Schedules_5": ".1402.273",
                    "A.S.A. Pipe Schedules_6": ".1402.273",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1912.997",
                    "A.S.A. Pipe Schedules_9": ".1912.997",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2503.765",
                    "A.S.A. Pipe Schedules_12": ".3825.214"
                  },
                  {
                    "PIPE SIZE": "1-1/2",
                    "OD IN INCHES": "1.900",
                    "A.S.A. Pipe Schedules": ".0651.274",
                    "A.S.A. Pipe Schedules_2": ".0651.274",
                    "A.S.A. Pipe Schedules_3": ".1092.085",
                    "A.S.A. Pipe Schedules_4": ".1092.085",
                    "A.S.A. Pipe Schedules_5": ".1452.718",
                    "A.S.A. Pipe Schedules_6": ".1452.718",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2003.631",
                    "A.S.A. Pipe Schedules_9": ".2003.631",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2814.859",
                    "A.S.A. Pipe Schedules_12": ".4006.408"
                  },
                  {
                    "PIPE SIZE": "2",
                    "OD IN INCHES": "2.375",
                    "A.S.A. Pipe Schedules": ".0651.604",
                    "A.S.A. Pipe Schedules_2": ".0651.604",
                    "A.S.A. Pipe Schedules_3": ".1092.638",
                    "A.S.A. Pipe Schedules_4": ".1092.638",
                    "A.S.A. Pipe Schedules_5": ".1543.653",
                    "A.S.A. Pipe Schedules_6": ".1543.653",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2185.022",
                    "A.S.A. Pipe Schedules_9": ".2185.022",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".3437.444",
                    "A.S.A. Pipe Schedules_12": ".4369.029"
                  },
                  {
                    "PIPE SIZE": "2-1/2",
                    "OD IN INCHES": "2.875",
                    "A.S.A. Pipe Schedules": ".0832.475",
                    "A.S.A. Pipe Schedules_2": ".0832.475",
                    "A.S.A. Pipe Schedules_3": ".1203.531",
                    "A.S.A. Pipe Schedules_4": ".1203.531",
                    "A.S.A. Pipe Schedules_5": ".2035.793",
                    "A.S.A. Pipe Schedules_6": ".2035.793",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2767.661",
                    "A.S.A. Pipe Schedules_9": ".2767.661",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".37510.01",
                    "A.S.A. Pipe Schedules_12": ".55213.70"
                  },
                  {
                    "PIPE SIZE": "3",
                    "OD IN INCHES": "3.500",
                    "A.S.A. Pipe Schedules": ".0833.029",
                    "A.S.A. Pipe Schedules_2": ".0833.029",
                    "A.S.A. Pipe Schedules_3": ".1204.332",
                    "A.S.A. Pipe Schedules_4": ".1204.332",
                    "A.S.A. Pipe Schedules_5": ".2167.576",
                    "A.S.A. Pipe Schedules_6": ".2167.576",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".30010.25",
                    "A.S.A. Pipe Schedules_9": ".30010.25",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".43714.32",
                    "A.S.A. Pipe Schedules_12": ".60018.58"
                  },
                  {
                    "PIPE SIZE": "3-1/2",
                    "OD IN INCHES": "4.000",
                    "A.S.A. Pipe Schedules": ".0833.472",
                    "A.S.A. Pipe Schedules_2": ".0833.472",
                    "A.S.A. Pipe Schedules_3": ".1204.973",
                    "A.S.A. Pipe Schedules_4": ".1204.973",
                    "A.S.A. Pipe Schedules_5": ".2269.109",
                    "A.S.A. Pipe Schedules_6": ".2269.109",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".31812.51",
                    "A.S.A. Pipe Schedules_9": ".31812.51",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".63622.85"
                  },
                  {
                    "PIPE SIZE": "4",
                    "OD IN INCHES": "4.500",
                    "A.S.A. Pipe Schedules": ".0833.915",
                    "A.S.A. Pipe Schedules_2": ".0833.915",
                    "A.S.A. Pipe Schedules_3": ".1205.613",
                    "A.S.A. Pipe Schedules_4": ".1205.613",
                    "A.S.A. Pipe Schedules_5": ".23710.79",
                    "A.S.A. Pipe Schedules_6": ".23710.79",
                    "A.S.A. Pipe Schedules_7": ".28112.66",
                    "A.S.A. Pipe Schedules_8": ".33714.98",
                    "A.S.A. Pipe Schedules_9": ".33714.98",
                    "A.S.A. Pipe Schedules_10": ".43719.01",
                    "A.S.A. Pipe Schedules_11": ".53122.51",
                    "A.S.A. Pipe Schedules_12": ".67427.54"
                  },
                  {
                    "PIPE SIZE": "4-1/2",
                    "OD IN INCHES": "5.000",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".24712.53",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".35517.61",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".71032.53"
                  },
                  {
                    "PIPE SIZE": "5",
                    "OD IN INCHES": "5.563",
                    "A.S.A. Pipe Schedules": ".1096.349",
                    "A.S.A. Pipe Schedules_2": ".1096.349",
                    "A.S.A. Pipe Schedules_3": ".1347.770",
                    "A.S.A. Pipe Schedules_4": ".1347.770",
                    "A.S.A. Pipe Schedules_5": ".25814.62",
                    "A.S.A. Pipe Schedules_6": ".25814.62",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".37520.78",
                    "A.S.A. Pipe Schedules_9": ".37520.78",
                    "A.S.A. Pipe Schedules_10": ".50027.04",
                    "A.S.A. Pipe Schedules_11": ".62532.96",
                    "A.S.A. Pipe Schedules_12": ".75038.55"
                  },
                  {
                    "PIPE SIZE": "6",
                    "OD IN INCHES": "6.625",
                    "A.S.A. Pipe Schedules": ".1097.585",
                    "A.S.A. Pipe Schedules_2": ".1097.585",
                    "A.S.A. Pipe Schedules_3": ".1349.290",
                    "A.S.A. Pipe Schedules_4": ".1349.290",
                    "A.S.A. Pipe Schedules_5": ".28018.97",
                    "A.S.A. Pipe Schedules_6": ".28018.97",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".43228.57",
                    "A.S.A. Pipe Schedules_9": ".43228.57",
                    "A.S.A. Pipe Schedules_10": ".56236.39",
                    "A.S.A. Pipe Schedules_11": ".71845.30",
                    "A.S.A. Pipe Schedules_12": ".86453.16"
                  },
                  {
                    "PIPE SIZE": "7",
                    "OD IN INCHES": "7.625",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".30123.57",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".50038.05",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".87563.08"
                  },
                  {
                    "PIPE SIZE": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "OD IN INCHES": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_2": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_3": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_4": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_5": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_6": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_7": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_8": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_9": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_10": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_11": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_12": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  }
                ],
                "row_count": 19,
                "column_count": 14
              },
              {
                "title": "Size Chart of Stainless Steel 316 Round Tube",
                "slug": "size-chart-of-stainless-steel-316-round-tube",
                "columns": [
                  "Wall",
                  "Sizes ( O.D.)"
                ],
                "rows": [
                  [
                    ".010",
                    "1/16\" , 1/8\" , 3/16\""
                  ],
                  [
                    ".020",
                    "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  ],
                  [
                    ".012",
                    "1/8\""
                  ],
                  [
                    ".016",
                    "1/8\" , 3/16\""
                  ],
                  [
                    ".028",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".035",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".049",
                    "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".065",
                    "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".083",
                    "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  ],
                  [
                    ".095",
                    "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".109",
                    "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".120",
                    "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".125",
                    "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  ],
                  [
                    ".134",
                    "1\""
                  ],
                  [
                    ".250",
                    "3\""
                  ],
                  [
                    ".375",
                    "3 1/2\""
                  ]
                ],
                "records": [
                  {
                    "Wall": ".010",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".020",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  },
                  {
                    "Wall": ".012",
                    "Sizes ( O.D.)": "1/8\""
                  },
                  {
                    "Wall": ".016",
                    "Sizes ( O.D.)": "1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".028",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".035",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".049",
                    "Sizes ( O.D.)": "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".065",
                    "Sizes ( O.D.)": "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".083",
                    "Sizes ( O.D.)": "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  },
                  {
                    "Wall": ".095",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".109",
                    "Sizes ( O.D.)": "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".120",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".125",
                    "Sizes ( O.D.)": "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  },
                  {
                    "Wall": ".134",
                    "Sizes ( O.D.)": "1\""
                  },
                  {
                    "Wall": ".250",
                    "Sizes ( O.D.)": "3\""
                  },
                  {
                    "Wall": ".375",
                    "Sizes ( O.D.)": "3 1/2\""
                  }
                ],
                "row_count": 16,
                "column_count": 2
              },
              {
                "title": "316 Stainless Steel Tube Pressure Rating",
                "slug": "316-stainless-steel-tube-pressure-rating",
                "columns": [
                  "OD inches",
                  "Ave. Wall inches",
                  "Min Yield Strength (PSI)",
                  "Min Tensile Strength (PSI)",
                  "Theoretical Burst Pressure * (PSI)",
                  "Working Pressure (PSI) 25% of Burst",
                  "Theoretical Yield Point ** (PSI)",
                  "Collapse Pressure *** (PSI)"
                ],
                "rows": [
                  [
                    "0.250",
                    "0.020",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "0.250",
                    "0.028",
                    "30,000",
                    "75,000",
                    "21,649",
                    "5,412",
                    "8,660",
                    "5,967"
                  ],
                  [
                    "0.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "29,167",
                    "7,292",
                    "11,667",
                    "7,224"
                  ],
                  [
                    "0.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "48,355",
                    "12,089",
                    "19,342",
                    "9,455"
                  ],
                  [
                    "0.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "81,250",
                    "20,313",
                    "32,500",
                    "11,544"
                  ],
                  [
                    "0.375",
                    "0.020",
                    "30,000",
                    "75,000",
                    "8,955",
                    "2,239",
                    "3,582",
                    "3,029"
                  ],
                  [
                    "0.375",
                    "0.028",
                    "30,000",
                    "75,000",
                    "13,166",
                    "3,292",
                    "5,266",
                    "4,145"
                  ],
                  [
                    "0.375",
                    "0.035",
                    "30,000",
                    "75,000",
                    "17,213",
                    "4,303",
                    "6,885",
                    "5,077"
                  ],
                  [
                    "0.375",
                    "0.049",
                    "30,000",
                    "75,000",
                    "26,534",
                    "6,634",
                    "10,614",
                    "6,816"
                  ],
                  [
                    "0.375",
                    "0.065",
                    "30,000",
                    "75,000",
                    "39,796",
                    "9,949",
                    "15,918",
                    "8,597"
                  ],
                  [
                    "0.500",
                    "0.020",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.500",
                    "0.028",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "12,209",
                    "3,052",
                    "4,884",
                    "3,906"
                  ],
                  [
                    "0.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "18,284",
                    "4,571",
                    "7,313",
                    "5,316L"
                  ],
                  [
                    "0.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "26,351",
                    "6,588",
                    "10,541",
                    "6,786"
                  ],
                  [
                    "0.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "37,275",
                    "9,319",
                    "14,910",
                    "8,307"
                  ],
                  [
                    "0.625",
                    "0.020",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.625",
                    "0.028",
                    "30,000",
                    "75,000",
                    "7,381",
                    "1,845",
                    "2,953",
                    "2,568"
                  ],
                  [
                    "0.625",
                    "0.035",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.625",
                    "0.049",
                    "30,000",
                    "75,000",
                    "13,947",
                    "3,487",
                    "5,579",
                    "4,335"
                  ],
                  [
                    "0.625",
                    "0.065",
                    "30,000",
                    "75,000",
                    "19,697",
                    "4,924",
                    "7,879",
                    "5,591"
                  ],
                  [
                    "0.625",
                    "0.083",
                    "30,000",
                    "75,000",
                    "27,124",
                    "6,781",
                    "10,850",
                    "6,910"
                  ],
                  [
                    "0.625",
                    "0.095",
                    "30,000",
                    "75,000",
                    "32,759",
                    "8,190",
                    "13,103",
                    "7,734"
                  ],
                  [
                    "0.625",
                    "0.109",
                    "30,000",
                    "75,000",
                    "40,172",
                    "10,043",
                    "16,069",
                    "8,639"
                  ],
                  [
                    "0.750",
                    "0.028",
                    "30,000",
                    "75,000",
                    "6,052",
                    "1,513",
                    "2,421",
                    "2,156"
                  ],
                  [
                    "0.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "7,721",
                    "1,930",
                    "3,088",
                    "2,669"
                  ],
                  [
                    "0.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "11,273",
                    "2,818",
                    "4,509",
                    "3,664"
                  ],
                  [
                    "0.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "15,726",
                    "3,931",
                    "6,290",
                    "4,749"
                  ],
                  [
                    "0.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "21,318",
                    "5,330",
                    "8,527",
                    "5,905"
                  ],
                  [
                    "0.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "25,446",
                    "6,362",
                    "10,179",
                    "6,637"
                  ],
                  [
                    "0.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "30,733",
                    "7,683",
                    "12,293",
                    "7,453"
                  ],
                  [
                    "0.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "35,294",
                    "8,824",
                    "14,118",
                    "8,064"
                  ],
                  [
                    "0.875",
                    "0.020",
                    "30,000",
                    "75,000",
                    "3,593",
                    "898",
                    "1,437",
                    "1,340"
                  ],
                  [
                    "0.875",
                    "0.028",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.875",
                    "0.035",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.875",
                    "0.049",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.875",
                    "0.065",
                    "30,000",
                    "75,000",
                    "13,087",
                    "3,272",
                    "5,235",
                    "4,126"
                  ],
                  [
                    "0.875",
                    "0.083",
                    "30,000",
                    "75,000",
                    "17,560",
                    "4,390",
                    "7,024",
                    "5,152"
                  ],
                  [
                    "0.875",
                    "0.095",
                    "30,000",
                    "75,000",
                    "20,803",
                    "5,201",
                    "8,321",
                    "5,807"
                  ],
                  [
                    "0.875",
                    "0.109",
                    "30,000",
                    "75,000",
                    "24,886",
                    "6,221",
                    "9,954",
                    "6,543"
                  ],
                  [
                    "0.875",
                    "0.120",
                    "30,000",
                    "75,000",
                    "28,346",
                    "7,087",
                    "11,339",
                    "7,100"
                  ],
                  [
                    "1.000",
                    "0.028",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "5,645",
                    "1,411",
                    "2,258",
                    "2,027"
                  ],
                  [
                    "1.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "8,149",
                    "2,037",
                    "3,259",
                    "2,796"
                  ],
                  [
                    "1.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "11,207",
                    "2,802",
                    "4,483",
                    "3,647"
                  ],
                  [
                    "1.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "14,928",
                    "3,732",
                    "5,971",
                    "4,567"
                  ],
                  [
                    "1.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "17,593",
                    "4,398",
                    "7,037",
                    "5,159"
                  ],
                  [
                    "1.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "20,908",
                    "5,227",
                    "8,363",
                    "5,827"
                  ],
                  [
                    "1.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "23,684",
                    "5,921",
                    "9,474",
                    "6,336"
                  ],
                  [
                    "1.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "27,459",
                    "6,865",
                    "10,984",
                    "6,963"
                  ],
                  [
                    "1.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "6,380",
                    "1,595",
                    "2,552",
                    "2,260"
                  ],
                  [
                    "1.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "8,705",
                    "2,176",
                    "3,482",
                    "2,958"
                  ],
                  [
                    "1.250",
                    "0.083",
                    "30,000",
                    "75,000",
                    "11,485",
                    "2,871",
                    "4,594",
                    "3,719"
                  ],
                  [
                    "1.250",
                    "0.095",
                    "30,000",
                    "75,000",
                    "13,443",
                    "3,361",
                    "5,377",
                    "4,213"
                  ],
                  [
                    "1.250",
                    "0.109",
                    "30,000",
                    "75,000",
                    "15,843",
                    "3,961",
                    "6,337",
                    "4,776"
                  ],
                  [
                    "1.250",
                    "0.120",
                    "30,000",
                    "75,000",
                    "17,822",
                    "4,455",
                    "7,129",
                    "5,207"
                  ],
                  [
                    "1.250",
                    "0.134",
                    "30,000",
                    "75,000",
                    "20,468",
                    "5,117",
                    "8,187",
                    "5,742"
                  ],
                  [
                    "1.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,671",
                    "918",
                    "1,469",
                    "1,367"
                  ],
                  [
                    "1.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "5,243",
                    "1,311",
                    "2,097",
                    "1,896"
                  ],
                  [
                    "1.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "7,117",
                    "1,779",
                    "2,847",
                    "2,487"
                  ],
                  [
                    "1.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "9,333",
                    "2,333",
                    "3,733",
                    "3,136"
                  ],
                  [
                    "1.500",
                    "0.095",
                    "30,000",
                    "75,000",
                    "10,878",
                    "2,719",
                    "4,351",
                    "3,559"
                  ],
                  [
                    "1.500",
                    "0.109",
                    "30,000",
                    "75,000",
                    "12,754",
                    "3,188",
                    "5,101",
                    "4,043"
                  ],
                  [
                    "1.500",
                    "0.120",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "1.500",
                    "0.134",
                    "30,000",
                    "75,000",
                    "16,315",
                    "4,079",
                    "6,526",
                    "4,881"
                  ],
                  [
                    "1.500",
                    "0.148",
                    "30,000",
                    "75,000",
                    "18,439",
                    "4,610",
                    "7,375",
                    "5,336"
                  ],
                  [
                    "1.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,125",
                    "781",
                    "1,250",
                    "1,176"
                  ],
                  [
                    "1.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "1.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "6,019",
                    "1,505",
                    "2,407",
                    "2,146"
                  ],
                  [
                    "1.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "7,860",
                    "1,965",
                    "3,144",
                    "2,711"
                  ],
                  [
                    "1.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "9,135",
                    "2,284",
                    "3,654",
                    "3,080"
                  ],
                  [
                    "1.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "10,672",
                    "2,668",
                    "4,269",
                    "3,504"
                  ],
                  [
                    "1.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "11,921",
                    "2,980",
                    "4,768",
                    "3,832"
                  ],
                  [
                    "1.750",
                    "0.134",
                    "30,000",
                    "75,000",
                    "13,563",
                    "3,391",
                    "5,425",
                    "4,242"
                  ],
                  [
                    "1.750",
                    "0.148",
                    "30,000",
                    "75,000",
                    "15,268",
                    "3,817",
                    "6,107",
                    "4,645"
                  ],
                  [
                    "1.750",
                    "0.165",
                    "30,000",
                    "75,000",
                    "17,430",
                    "4,357",
                    "6,972",
                    "5,124"
                  ],
                  [
                    "2.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "2,720",
                    "680",
                    "1,088",
                    "1,032"
                  ],
                  [
                    "2.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "2.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "5,214",
                    "1,303",
                    "2,086",
                    "1,887"
                  ],
                  [
                    "2.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "6,788",
                    "1,697",
                    "2,715",
                    "2,387"
                  ],
                  [
                    "2.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "7,873",
                    "1,968",
                    "3,149",
                    "2,715"
                  ],
                  [
                    "2.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "9,175",
                    "2,294",
                    "3,670",
                    "3,092"
                  ],
                  [
                    "2.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "10,227",
                    "2,557",
                    "4,091",
                    "3,384"
                  ],
                  [
                    "2.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "11,605",
                    "2,901",
                    "4,642",
                    "3,751"
                  ],
                  [
                    "2.000",
                    "0.148",
                    "30,000",
                    "75,000",
                    "13,028",
                    "3,257",
                    "5,211",
                    "4,111"
                  ],
                  [
                    "2.000",
                    "0.165",
                    "30,000",
                    "75,000",
                    "14,820",
                    "3,705",
                    "5,928",
                    "4,542"
                  ]
                ],
                "records": [
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,649",
                    "Working Pressure (PSI) 25% of Burst": "5,412",
                    "Theoretical Yield Point ** (PSI)": "8,660",
                    "Collapse Pressure *** (PSI)": "5,967"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "29,167",
                    "Working Pressure (PSI) 25% of Burst": "7,292",
                    "Theoretical Yield Point ** (PSI)": "11,667",
                    "Collapse Pressure *** (PSI)": "7,224"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "48,355",
                    "Working Pressure (PSI) 25% of Burst": "12,089",
                    "Theoretical Yield Point ** (PSI)": "19,342",
                    "Collapse Pressure *** (PSI)": "9,455"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "81,250",
                    "Working Pressure (PSI) 25% of Burst": "20,313",
                    "Theoretical Yield Point ** (PSI)": "32,500",
                    "Collapse Pressure *** (PSI)": "11,544"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,955",
                    "Working Pressure (PSI) 25% of Burst": "2,239",
                    "Theoretical Yield Point ** (PSI)": "3,582",
                    "Collapse Pressure *** (PSI)": "3,029"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,166",
                    "Working Pressure (PSI) 25% of Burst": "3,292",
                    "Theoretical Yield Point ** (PSI)": "5,266",
                    "Collapse Pressure *** (PSI)": "4,145"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,213",
                    "Working Pressure (PSI) 25% of Burst": "4,303",
                    "Theoretical Yield Point ** (PSI)": "6,885",
                    "Collapse Pressure *** (PSI)": "5,077"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,534",
                    "Working Pressure (PSI) 25% of Burst": "6,634",
                    "Theoretical Yield Point ** (PSI)": "10,614",
                    "Collapse Pressure *** (PSI)": "6,816"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "39,796",
                    "Working Pressure (PSI) 25% of Burst": "9,949",
                    "Theoretical Yield Point ** (PSI)": "15,918",
                    "Collapse Pressure *** (PSI)": "8,597"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,209",
                    "Working Pressure (PSI) 25% of Burst": "3,052",
                    "Theoretical Yield Point ** (PSI)": "4,884",
                    "Collapse Pressure *** (PSI)": "3,906"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,284",
                    "Working Pressure (PSI) 25% of Burst": "4,571",
                    "Theoretical Yield Point ** (PSI)": "7,313",
                    "Collapse Pressure *** (PSI)": "5,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,351",
                    "Working Pressure (PSI) 25% of Burst": "6,588",
                    "Theoretical Yield Point ** (PSI)": "10,541",
                    "Collapse Pressure *** (PSI)": "6,786"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "37,275",
                    "Working Pressure (PSI) 25% of Burst": "9,319",
                    "Theoretical Yield Point ** (PSI)": "14,910",
                    "Collapse Pressure *** (PSI)": "8,307"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,381",
                    "Working Pressure (PSI) 25% of Burst": "1,845",
                    "Theoretical Yield Point ** (PSI)": "2,953",
                    "Collapse Pressure *** (PSI)": "2,568"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,947",
                    "Working Pressure (PSI) 25% of Burst": "3,487",
                    "Theoretical Yield Point ** (PSI)": "5,579",
                    "Collapse Pressure *** (PSI)": "4,335"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "19,697",
                    "Working Pressure (PSI) 25% of Burst": "4,924",
                    "Theoretical Yield Point ** (PSI)": "7,879",
                    "Collapse Pressure *** (PSI)": "5,591"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,124",
                    "Working Pressure (PSI) 25% of Burst": "6,781",
                    "Theoretical Yield Point ** (PSI)": "10,850",
                    "Collapse Pressure *** (PSI)": "6,910"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "32,759",
                    "Working Pressure (PSI) 25% of Burst": "8,190",
                    "Theoretical Yield Point ** (PSI)": "13,103",
                    "Collapse Pressure *** (PSI)": "7,734"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "40,172",
                    "Working Pressure (PSI) 25% of Burst": "10,043",
                    "Theoretical Yield Point ** (PSI)": "16,069",
                    "Collapse Pressure *** (PSI)": "8,639"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,052",
                    "Working Pressure (PSI) 25% of Burst": "1,513",
                    "Theoretical Yield Point ** (PSI)": "2,421",
                    "Collapse Pressure *** (PSI)": "2,156"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,721",
                    "Working Pressure (PSI) 25% of Burst": "1,930",
                    "Theoretical Yield Point ** (PSI)": "3,088",
                    "Collapse Pressure *** (PSI)": "2,669"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,273",
                    "Working Pressure (PSI) 25% of Burst": "2,818",
                    "Theoretical Yield Point ** (PSI)": "4,509",
                    "Collapse Pressure *** (PSI)": "3,664"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,726",
                    "Working Pressure (PSI) 25% of Burst": "3,931",
                    "Theoretical Yield Point ** (PSI)": "6,290",
                    "Collapse Pressure *** (PSI)": "4,749"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,318",
                    "Working Pressure (PSI) 25% of Burst": "5,330",
                    "Theoretical Yield Point ** (PSI)": "8,527",
                    "Collapse Pressure *** (PSI)": "5,905"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "25,446",
                    "Working Pressure (PSI) 25% of Burst": "6,362",
                    "Theoretical Yield Point ** (PSI)": "10,179",
                    "Collapse Pressure *** (PSI)": "6,637"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "30,733",
                    "Working Pressure (PSI) 25% of Burst": "7,683",
                    "Theoretical Yield Point ** (PSI)": "12,293",
                    "Collapse Pressure *** (PSI)": "7,453"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "35,294",
                    "Working Pressure (PSI) 25% of Burst": "8,824",
                    "Theoretical Yield Point ** (PSI)": "14,118",
                    "Collapse Pressure *** (PSI)": "8,064"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,593",
                    "Working Pressure (PSI) 25% of Burst": "898",
                    "Theoretical Yield Point ** (PSI)": "1,437",
                    "Collapse Pressure *** (PSI)": "1,340"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,087",
                    "Working Pressure (PSI) 25% of Burst": "3,272",
                    "Theoretical Yield Point ** (PSI)": "5,235",
                    "Collapse Pressure *** (PSI)": "4,126"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,560",
                    "Working Pressure (PSI) 25% of Burst": "4,390",
                    "Theoretical Yield Point ** (PSI)": "7,024",
                    "Collapse Pressure *** (PSI)": "5,152"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,803",
                    "Working Pressure (PSI) 25% of Burst": "5,201",
                    "Theoretical Yield Point ** (PSI)": "8,321",
                    "Collapse Pressure *** (PSI)": "5,807"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "24,886",
                    "Working Pressure (PSI) 25% of Burst": "6,221",
                    "Theoretical Yield Point ** (PSI)": "9,954",
                    "Collapse Pressure *** (PSI)": "6,543"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "28,346",
                    "Working Pressure (PSI) 25% of Burst": "7,087",
                    "Theoretical Yield Point ** (PSI)": "11,339",
                    "Collapse Pressure *** (PSI)": "7,100"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,645",
                    "Working Pressure (PSI) 25% of Burst": "1,411",
                    "Theoretical Yield Point ** (PSI)": "2,258",
                    "Collapse Pressure *** (PSI)": "2,027"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,149",
                    "Working Pressure (PSI) 25% of Burst": "2,037",
                    "Theoretical Yield Point ** (PSI)": "3,259",
                    "Collapse Pressure *** (PSI)": "2,796"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,207",
                    "Working Pressure (PSI) 25% of Burst": "2,802",
                    "Theoretical Yield Point ** (PSI)": "4,483",
                    "Collapse Pressure *** (PSI)": "3,647"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,928",
                    "Working Pressure (PSI) 25% of Burst": "3,732",
                    "Theoretical Yield Point ** (PSI)": "5,971",
                    "Collapse Pressure *** (PSI)": "4,567"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,593",
                    "Working Pressure (PSI) 25% of Burst": "4,398",
                    "Theoretical Yield Point ** (PSI)": "7,037",
                    "Collapse Pressure *** (PSI)": "5,159"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,908",
                    "Working Pressure (PSI) 25% of Burst": "5,227",
                    "Theoretical Yield Point ** (PSI)": "8,363",
                    "Collapse Pressure *** (PSI)": "5,827"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "23,684",
                    "Working Pressure (PSI) 25% of Burst": "5,921",
                    "Theoretical Yield Point ** (PSI)": "9,474",
                    "Collapse Pressure *** (PSI)": "6,336"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,459",
                    "Working Pressure (PSI) 25% of Burst": "6,865",
                    "Theoretical Yield Point ** (PSI)": "10,984",
                    "Collapse Pressure *** (PSI)": "6,963"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,380",
                    "Working Pressure (PSI) 25% of Burst": "1,595",
                    "Theoretical Yield Point ** (PSI)": "2,552",
                    "Collapse Pressure *** (PSI)": "2,260"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,705",
                    "Working Pressure (PSI) 25% of Burst": "2,176",
                    "Theoretical Yield Point ** (PSI)": "3,482",
                    "Collapse Pressure *** (PSI)": "2,958"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,485",
                    "Working Pressure (PSI) 25% of Burst": "2,871",
                    "Theoretical Yield Point ** (PSI)": "4,594",
                    "Collapse Pressure *** (PSI)": "3,719"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,443",
                    "Working Pressure (PSI) 25% of Burst": "3,361",
                    "Theoretical Yield Point ** (PSI)": "5,377",
                    "Collapse Pressure *** (PSI)": "4,213"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,843",
                    "Working Pressure (PSI) 25% of Burst": "3,961",
                    "Theoretical Yield Point ** (PSI)": "6,337",
                    "Collapse Pressure *** (PSI)": "4,776"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,822",
                    "Working Pressure (PSI) 25% of Burst": "4,455",
                    "Theoretical Yield Point ** (PSI)": "7,129",
                    "Collapse Pressure *** (PSI)": "5,207"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,468",
                    "Working Pressure (PSI) 25% of Burst": "5,117",
                    "Theoretical Yield Point ** (PSI)": "8,187",
                    "Collapse Pressure *** (PSI)": "5,742"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,671",
                    "Working Pressure (PSI) 25% of Burst": "918",
                    "Theoretical Yield Point ** (PSI)": "1,469",
                    "Collapse Pressure *** (PSI)": "1,367"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,243",
                    "Working Pressure (PSI) 25% of Burst": "1,311",
                    "Theoretical Yield Point ** (PSI)": "2,097",
                    "Collapse Pressure *** (PSI)": "1,896"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,117",
                    "Working Pressure (PSI) 25% of Burst": "1,779",
                    "Theoretical Yield Point ** (PSI)": "2,847",
                    "Collapse Pressure *** (PSI)": "2,487"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,333",
                    "Working Pressure (PSI) 25% of Burst": "2,333",
                    "Theoretical Yield Point ** (PSI)": "3,733",
                    "Collapse Pressure *** (PSI)": "3,136"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,878",
                    "Working Pressure (PSI) 25% of Burst": "2,719",
                    "Theoretical Yield Point ** (PSI)": "4,351",
                    "Collapse Pressure *** (PSI)": "3,559"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,754",
                    "Working Pressure (PSI) 25% of Burst": "3,188",
                    "Theoretical Yield Point ** (PSI)": "5,101",
                    "Collapse Pressure *** (PSI)": "4,043"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "16,315",
                    "Working Pressure (PSI) 25% of Burst": "4,079",
                    "Theoretical Yield Point ** (PSI)": "6,526",
                    "Collapse Pressure *** (PSI)": "4,881"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,439",
                    "Working Pressure (PSI) 25% of Burst": "4,610",
                    "Theoretical Yield Point ** (PSI)": "7,375",
                    "Collapse Pressure *** (PSI)": "5,336"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,125",
                    "Working Pressure (PSI) 25% of Burst": "781",
                    "Theoretical Yield Point ** (PSI)": "1,250",
                    "Collapse Pressure *** (PSI)": "1,176"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,019",
                    "Working Pressure (PSI) 25% of Burst": "1,505",
                    "Theoretical Yield Point ** (PSI)": "2,407",
                    "Collapse Pressure *** (PSI)": "2,146"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,860",
                    "Working Pressure (PSI) 25% of Burst": "1,965",
                    "Theoretical Yield Point ** (PSI)": "3,144",
                    "Collapse Pressure *** (PSI)": "2,711"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,135",
                    "Working Pressure (PSI) 25% of Burst": "2,284",
                    "Theoretical Yield Point ** (PSI)": "3,654",
                    "Collapse Pressure *** (PSI)": "3,080"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,672",
                    "Working Pressure (PSI) 25% of Burst": "2,668",
                    "Theoretical Yield Point ** (PSI)": "4,269",
                    "Collapse Pressure *** (PSI)": "3,504"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,921",
                    "Working Pressure (PSI) 25% of Burst": "2,980",
                    "Theoretical Yield Point ** (PSI)": "4,768",
                    "Collapse Pressure *** (PSI)": "3,832"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,563",
                    "Working Pressure (PSI) 25% of Burst": "3,391",
                    "Theoretical Yield Point ** (PSI)": "5,425",
                    "Collapse Pressure *** (PSI)": "4,242"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,268",
                    "Working Pressure (PSI) 25% of Burst": "3,817",
                    "Theoretical Yield Point ** (PSI)": "6,107",
                    "Collapse Pressure *** (PSI)": "4,645"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,430",
                    "Working Pressure (PSI) 25% of Burst": "4,357",
                    "Theoretical Yield Point ** (PSI)": "6,972",
                    "Collapse Pressure *** (PSI)": "5,124"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "2,720",
                    "Working Pressure (PSI) 25% of Burst": "680",
                    "Theoretical Yield Point ** (PSI)": "1,088",
                    "Collapse Pressure *** (PSI)": "1,032"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,214",
                    "Working Pressure (PSI) 25% of Burst": "1,303",
                    "Theoretical Yield Point ** (PSI)": "2,086",
                    "Collapse Pressure *** (PSI)": "1,887"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,788",
                    "Working Pressure (PSI) 25% of Burst": "1,697",
                    "Theoretical Yield Point ** (PSI)": "2,715",
                    "Collapse Pressure *** (PSI)": "2,387"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,873",
                    "Working Pressure (PSI) 25% of Burst": "1,968",
                    "Theoretical Yield Point ** (PSI)": "3,149",
                    "Collapse Pressure *** (PSI)": "2,715"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,175",
                    "Working Pressure (PSI) 25% of Burst": "2,294",
                    "Theoretical Yield Point ** (PSI)": "3,670",
                    "Collapse Pressure *** (PSI)": "3,092"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,227",
                    "Working Pressure (PSI) 25% of Burst": "2,557",
                    "Theoretical Yield Point ** (PSI)": "4,091",
                    "Collapse Pressure *** (PSI)": "3,384"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,605",
                    "Working Pressure (PSI) 25% of Burst": "2,901",
                    "Theoretical Yield Point ** (PSI)": "4,642",
                    "Collapse Pressure *** (PSI)": "3,751"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,028",
                    "Working Pressure (PSI) 25% of Burst": "3,257",
                    "Theoretical Yield Point ** (PSI)": "5,211",
                    "Collapse Pressure *** (PSI)": "4,111"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,820",
                    "Working Pressure (PSI) 25% of Burst": "3,705",
                    "Theoretical Yield Point ** (PSI)": "5,928",
                    "Collapse Pressure *** (PSI)": "4,542"
                  }
                ],
                "row_count": 87,
                "column_count": 8
              },
              {
                "title": "Stainless Steel Type 316 Pipe Chemical Properties",
                "slug": "stainless-steel-type-316-pipe-chemical-properties",
                "columns": [
                  "Grade",
                  "C",
                  "Mn",
                  "Si",
                  "P",
                  "S",
                  "Cr",
                  "Mo",
                  "Ni",
                  "Fe"
                ],
                "rows": [
                  [
                    "SS 316",
                    "0.08 max",
                    "2.0 max",
                    "1.0 max",
                    "0.045 max",
                    "0.030 max",
                    "16.00 - 18.00",
                    "2.00 - 3.00",
                    "11.00 - 14.00",
                    "67.845 min"
                  ]
                ],
                "records": [
                  {
                    "Grade": "SS 316",
                    "C": "0.08 max",
                    "Mn": "2.0 max",
                    "Si": "1.0 max",
                    "P": "0.045 max",
                    "S": "0.030 max",
                    "Cr": "16.00 - 18.00",
                    "Mo": "2.00 - 3.00",
                    "Ni": "11.00 - 14.00",
                    "Fe": "67.845 min"
                  }
                ],
                "row_count": 1,
                "column_count": 10
              },
              {
                "title": "Mechanical Properties of SS 316 Pipe",
                "slug": "mechanical-properties-of-ss-316-pipe",
                "columns": [
                  "Density",
                  "Melting Point",
                  "Tensile Strength",
                  "Yield Strength (0.2%Offset)",
                  "Elongation"
                ],
                "rows": [
                  [
                    "8.0 g/cm3",
                    "1400 °C (2550 °F)",
                    "Psi - 75000 , MPa - 515",
                    "Psi - 30000 , MPa - 205",
                    "35 %"
                  ]
                ],
                "records": [
                  {
                    "Density": "8.0 g/cm3",
                    "Melting Point": "1400 °C (2550 °F)",
                    "Tensile Strength": "Psi - 75000 , MPa - 515",
                    "Yield Strength (0.2%Offset)": "Psi - 30000 , MPa - 205",
                    "Elongation": "35 %"
                  }
                ],
                "row_count": 1,
                "column_count": 5
              },
              {
                "title": "Equivalent Grades of UNS S31600 Welded Pipe",
                "slug": "equivalent-grades-of-uns-s31600-welded-pipe",
                "columns": [
                  "STANDARD",
                  "WERKSTOFF NR.",
                  "UNS",
                  "JIS",
                  "BS",
                  "GOST",
                  "AFNOR",
                  "EN"
                ],
                "rows": [
                  [
                    "SS 316",
                    "1.4401 / 1.4436",
                    "S31600",
                    "SUS 316",
                    "316S31 / 316S33",
                    "-",
                    "Z7CND17-11-02",
                    "X5CrNiMo17-12-2 / X3CrNiMo17-13-3"
                  ]
                ],
                "records": [
                  {
                    "STANDARD": "SS 316",
                    "WERKSTOFF NR.": "1.4401 / 1.4436",
                    "UNS": "S31600",
                    "JIS": "SUS 316",
                    "BS": "316S31 / 316S33",
                    "GOST": "-",
                    "AFNOR": "Z7CND17-11-02",
                    "EN": "X5CrNiMo17-12-2 / X3CrNiMo17-13-3"
                  }
                ],
                "row_count": 1,
                "column_count": 8
              },
              {
                "title": "SS 316 Pipe/ Tube Wall Thickness Tolerance",
                "slug": "ss-316-pipe-tube-wall-thickness-tolerance",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 WT Tolerance, %",
                    "ASTM A312 WT Tolerance, %"
                  ],
                  [
                    "NPS",
                    "+",
                    "–"
                  ],
                  [
                    "1/8-2 1 /2",
                    "20",
                    "12.5"
                  ],
                  [
                    "3~18, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "3~18, t/D> 5%",
                    "15",
                    "12.5"
                  ],
                  [
                    "≥ 20, welded",
                    "17.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D> 5%",
                    "15",
                    "12.5"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 WT Tolerance, %",
                    "col_3": "ASTM A312 WT Tolerance, %"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "–"
                  },
                  {
                    "col_1": "1/8-2 1 /2",
                    "col_2": "20",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, welded",
                    "col_2": "17.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  }
                ],
                "row_count": 8,
                "column_count": 3
              },
              {
                "title": "Diameter Tolerance of 316 Stainless Steel Tubing & Pipe",
                "slug": "diameter-tolerance-of-316-stainless-steel-tubing-pipe",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance"
                  ],
                  [
                    "NPS",
                    "+",
                    "+",
                    "–",
                    "–"
                  ],
                  [
                    "NPS",
                    "inch",
                    "mm",
                    "inch",
                    "mm"
                  ],
                  [
                    "1/8~1 1 /2",
                    "1/64(0.015)",
                    "0.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 1 1 /2~4",
                    "1/32(0.031)",
                    "0.8",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 4~8",
                    "1/16(0.062)",
                    "1.6",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 8~18",
                    "3/32(0.093)",
                    "2.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 18~26",
                    "1/8(0.125)",
                    "3.2",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 26~34",
                    "5/32(0.156)",
                    "4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 34~48",
                    "3/16(0.187)",
                    "4.8",
                    "1/32(0.031)",
                    "0.8"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 OD Tolerance",
                    "col_3": "ASTM A312 OD Tolerance",
                    "col_4": "ASTM A312 OD Tolerance",
                    "col_5": "ASTM A312 OD Tolerance"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "+",
                    "col_4": "–",
                    "col_5": "–"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "inch",
                    "col_3": "mm",
                    "col_4": "inch",
                    "col_5": "mm"
                  },
                  {
                    "col_1": "1/8~1 1 /2",
                    "col_2": "1/64(0.015)",
                    "col_3": "0.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 1 1 /2~4",
                    "col_2": "1/32(0.031)",
                    "col_3": "0.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 4~8",
                    "col_2": "1/16(0.062)",
                    "col_3": "1.6",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 8~18",
                    "col_2": "3/32(0.093)",
                    "col_3": "2.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 18~26",
                    "col_2": "1/8(0.125)",
                    "col_3": "3.2",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 26~34",
                    "col_2": "5/32(0.156)",
                    "col_3": "4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 34~48",
                    "col_2": "3/16(0.187)",
                    "col_3": "4.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  }
                ],
                "row_count": 10,
                "column_count": 5
              },
              {
                "title": "DIN 1.4401 Seamless Tubes Dimension Table",
                "slug": "din-1-4401-seamless-tubes-dimension-table",
                "columns": [
                  "Nominal",
                  "O.D. Inches",
                  "10s",
                  "10",
                  "40s & Std",
                  "40",
                  "80s & E.H.",
                  "80",
                  "160"
                ],
                "rows": [
                  [
                    "1/8",
                    ".405",
                    ".049",
                    ".049",
                    ".068",
                    ".068",
                    ".095",
                    ".095",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    ".065",
                    ".065",
                    ".088",
                    ".088",
                    ".119",
                    ".119",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    ".065",
                    ".065",
                    ".091",
                    ".091",
                    ".126",
                    ".126",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".083",
                    ".083",
                    ".109",
                    ".109",
                    ".147",
                    ".147",
                    ".187"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".083",
                    ".083",
                    ".113",
                    ".113",
                    ".154",
                    ".154",
                    ".218"
                  ],
                  [
                    "1",
                    "1.315",
                    ".109",
                    ".109",
                    ".133",
                    ".133",
                    ".179",
                    ".179",
                    ".250"
                  ],
                  [
                    "1 1/4",
                    "1.660",
                    ".109",
                    ".109",
                    ".140",
                    ".140",
                    ".191",
                    ".191",
                    ".250"
                  ],
                  [
                    "1 1/2",
                    "1.900",
                    ".109",
                    ".109",
                    ".145",
                    ".145",
                    ".200",
                    ".200",
                    ".281"
                  ],
                  [
                    "2",
                    "2.375",
                    ".109",
                    ".109",
                    ".154",
                    ".154",
                    ".218",
                    ".218",
                    ".343"
                  ],
                  [
                    "2 1/2",
                    "2.875",
                    ".120",
                    ".120",
                    ".203",
                    ".203",
                    ".276",
                    ".276",
                    ".375"
                  ],
                  [
                    "3",
                    "3.500",
                    ".120",
                    ".120",
                    ".216",
                    ".216",
                    ".300",
                    ".300",
                    ".437"
                  ],
                  [
                    "3 1/2",
                    "4.000",
                    ".120",
                    ".120",
                    ".226",
                    ".226",
                    ".318",
                    ".318",
                    ""
                  ],
                  [
                    "4",
                    "4.500",
                    ".120",
                    ".120",
                    ".237",
                    ".237",
                    ".337",
                    ".337",
                    ".531"
                  ],
                  [
                    "4 1/2",
                    "5.000",
                    "",
                    "",
                    ".247",
                    "",
                    ".355",
                    "",
                    ""
                  ],
                  [
                    "5",
                    "5.563",
                    ".134",
                    ".134",
                    ".258",
                    ".258",
                    ".375",
                    ".375",
                    ".625"
                  ],
                  [
                    "6",
                    "6.625",
                    ".134",
                    ".134",
                    ".280",
                    ".280",
                    ".432",
                    ".432",
                    ".718"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    ".301",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "8",
                    "8.625",
                    ".148",
                    ".148",
                    ".322",
                    ".322",
                    ".500",
                    ".500",
                    ".906"
                  ],
                  [
                    "9",
                    "9.625",
                    "",
                    "",
                    ".342",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "10",
                    "10.750",
                    ".165",
                    ".165",
                    ".365",
                    ".365",
                    ".500",
                    ".593",
                    "1.125"
                  ],
                  [
                    "11",
                    "11.750",
                    "",
                    "",
                    ".375",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "12",
                    "12.750",
                    ".180",
                    ".180",
                    ".375",
                    ".406",
                    ".500",
                    ".687",
                    "1.312"
                  ],
                  [
                    "14",
                    "14.000",
                    ".188",
                    ".250",
                    ".375",
                    ".437",
                    ".500",
                    ".750",
                    "1.406"
                  ],
                  [
                    "16",
                    "16.000",
                    ".188",
                    ".250",
                    ".375",
                    ".500",
                    ".500",
                    ".843",
                    "1.593"
                  ],
                  [
                    "18",
                    "18.000",
                    ".188",
                    ".250",
                    ".375",
                    ".562",
                    ".500",
                    ".937",
                    "1.781"
                  ]
                ],
                "records": [
                  {
                    "Nominal": "1/8",
                    "O.D. Inches": ".405",
                    "10s": ".049",
                    "10": ".049",
                    "40s & Std": ".068",
                    "40": ".068",
                    "80s & E.H.": ".095",
                    "80": ".095",
                    "160": ""
                  },
                  {
                    "Nominal": "1/4",
                    "O.D. Inches": ".540",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".088",
                    "40": ".088",
                    "80s & E.H.": ".119",
                    "80": ".119",
                    "160": ""
                  },
                  {
                    "Nominal": "3/8",
                    "O.D. Inches": ".675",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".091",
                    "40": ".091",
                    "80s & E.H.": ".126",
                    "80": ".126",
                    "160": ""
                  },
                  {
                    "Nominal": "1/2",
                    "O.D. Inches": ".840",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".109",
                    "40": ".109",
                    "80s & E.H.": ".147",
                    "80": ".147",
                    "160": ".187"
                  },
                  {
                    "Nominal": "3/4",
                    "O.D. Inches": "1.050",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".113",
                    "40": ".113",
                    "80s & E.H.": ".154",
                    "80": ".154",
                    "160": ".218"
                  },
                  {
                    "Nominal": "1",
                    "O.D. Inches": "1.315",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".133",
                    "40": ".133",
                    "80s & E.H.": ".179",
                    "80": ".179",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/4",
                    "O.D. Inches": "1.660",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".140",
                    "40": ".140",
                    "80s & E.H.": ".191",
                    "80": ".191",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/2",
                    "O.D. Inches": "1.900",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".145",
                    "40": ".145",
                    "80s & E.H.": ".200",
                    "80": ".200",
                    "160": ".281"
                  },
                  {
                    "Nominal": "2",
                    "O.D. Inches": "2.375",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".154",
                    "40": ".154",
                    "80s & E.H.": ".218",
                    "80": ".218",
                    "160": ".343"
                  },
                  {
                    "Nominal": "2 1/2",
                    "O.D. Inches": "2.875",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".203",
                    "40": ".203",
                    "80s & E.H.": ".276",
                    "80": ".276",
                    "160": ".375"
                  },
                  {
                    "Nominal": "3",
                    "O.D. Inches": "3.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".216",
                    "40": ".216",
                    "80s & E.H.": ".300",
                    "80": ".300",
                    "160": ".437"
                  },
                  {
                    "Nominal": "3 1/2",
                    "O.D. Inches": "4.000",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".226",
                    "40": ".226",
                    "80s & E.H.": ".318",
                    "80": ".318",
                    "160": ""
                  },
                  {
                    "Nominal": "4",
                    "O.D. Inches": "4.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".237",
                    "40": ".237",
                    "80s & E.H.": ".337",
                    "80": ".337",
                    "160": ".531"
                  },
                  {
                    "Nominal": "4 1/2",
                    "O.D. Inches": "5.000",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".247",
                    "40": "",
                    "80s & E.H.": ".355",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "5",
                    "O.D. Inches": "5.563",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".258",
                    "40": ".258",
                    "80s & E.H.": ".375",
                    "80": ".375",
                    "160": ".625"
                  },
                  {
                    "Nominal": "6",
                    "O.D. Inches": "6.625",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".280",
                    "40": ".280",
                    "80s & E.H.": ".432",
                    "80": ".432",
                    "160": ".718"
                  },
                  {
                    "Nominal": "7",
                    "O.D. Inches": "7.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".301",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "8",
                    "O.D. Inches": "8.625",
                    "10s": ".148",
                    "10": ".148",
                    "40s & Std": ".322",
                    "40": ".322",
                    "80s & E.H.": ".500",
                    "80": ".500",
                    "160": ".906"
                  },
                  {
                    "Nominal": "9",
                    "O.D. Inches": "9.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".342",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "10",
                    "O.D. Inches": "10.750",
                    "10s": ".165",
                    "10": ".165",
                    "40s & Std": ".365",
                    "40": ".365",
                    "80s & E.H.": ".500",
                    "80": ".593",
                    "160": "1.125"
                  },
                  {
                    "Nominal": "11",
                    "O.D. Inches": "11.750",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".375",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "12",
                    "O.D. Inches": "12.750",
                    "10s": ".180",
                    "10": ".180",
                    "40s & Std": ".375",
                    "40": ".406",
                    "80s & E.H.": ".500",
                    "80": ".687",
                    "160": "1.312"
                  },
                  {
                    "Nominal": "14",
                    "O.D. Inches": "14.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".437",
                    "80s & E.H.": ".500",
                    "80": ".750",
                    "160": "1.406"
                  },
                  {
                    "Nominal": "16",
                    "O.D. Inches": "16.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".500",
                    "80s & E.H.": ".500",
                    "80": ".843",
                    "160": "1.593"
                  },
                  {
                    "Nominal": "18",
                    "O.D. Inches": "18.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".562",
                    "80s & E.H.": ".500",
                    "80": ".937",
                    "160": "1.781"
                  }
                ],
                "row_count": 25,
                "column_count": 9
              },
              {
                "title": "We Supply Stainless Steel 316 Pipe in Following Countries",
                "slug": "we-supply-stainless-steel-316-pipe-in-following-countries",
                "columns": [
                  "col_1",
                  "col_2"
                ],
                "rows": [
                  [
                    "316 2b surface seamless or welded stainless steel pipe",
                    "Italy, Singapore, Chile, Iran,"
                  ],
                  [
                    "20mm diameter stainless steel pipe 316 mirror polished",
                    "United Arab Emirates (UAE), Turkey, Norway"
                  ],
                  [
                    "316 grade 6 inch welded polished stainless steel pipe",
                    "France, Thailand, Europe, Qatar"
                  ],
                  [
                    "200x200 316 stainless steel Square tube",
                    "USA, Malaysia, Finland, Bangladesh,"
                  ],
                  [
                    "316 welding stainless steel pipes",
                    "Dammam -KSA, Indonesia, Belgium, Philippines"
                  ],
                  [
                    "316 Medical Stainless Steel Capillary Tube",
                    "Qatar, France, Thailand, Europe"
                  ],
                  [
                    "ASTM A249 TP316 Boiler Tubes",
                    "UK, Nigeria, Philippines, Australia,"
                  ],
                  [
                    "316 stainless steel shell and tube",
                    "Oman, Hong Kong, Malaysia"
                  ],
                  [
                    "Thickness 9.0mm aisi 316 seamless stainless steel pipe",
                    "Singapore, Egypt, UK, Mexico, Spain"
                  ],
                  [
                    "ASTM A312 TP316 Elliptical and Oval Pipe",
                    "United Kingdom -UK, Europe, Malaysia"
                  ],
                  [
                    "Custom Size 4 Inch SS 316 Stainless Steel Welded Tube",
                    "Russia, Malaysia, Netherlands"
                  ],
                  [
                    "316 Mirror Finish Stainless Steel Pipe",
                    "Kuwait, South Africa, Saudi Arabia (KSA), Brazil"
                  ],
                  [
                    "ASTM A213 316 Seamless Tube",
                    "Singapore, South Africa, Bahrain"
                  ],
                  [
                    "AISI 316 Stainless Steel ERW Pipe",
                    "Ellington -United States, Canada, UK"
                  ]
                ],
                "records": [
                  {
                    "col_1": "316 2b surface seamless or welded stainless steel pipe",
                    "col_2": "Italy, Singapore, Chile, Iran,"
                  },
                  {
                    "col_1": "20mm diameter stainless steel pipe 316 mirror polished",
                    "col_2": "United Arab Emirates (UAE), Turkey, Norway"
                  },
                  {
                    "col_1": "316 grade 6 inch welded polished stainless steel pipe",
                    "col_2": "France, Thailand, Europe, Qatar"
                  },
                  {
                    "col_1": "200x200 316 stainless steel Square tube",
                    "col_2": "USA, Malaysia, Finland, Bangladesh,"
                  },
                  {
                    "col_1": "316 welding stainless steel pipes",
                    "col_2": "Dammam -KSA, Indonesia, Belgium, Philippines"
                  },
                  {
                    "col_1": "316 Medical Stainless Steel Capillary Tube",
                    "col_2": "Qatar, France, Thailand, Europe"
                  },
                  {
                    "col_1": "ASTM A249 TP316 Boiler Tubes",
                    "col_2": "UK, Nigeria, Philippines, Australia,"
                  },
                  {
                    "col_1": "316 stainless steel shell and tube",
                    "col_2": "Oman, Hong Kong, Malaysia"
                  },
                  {
                    "col_1": "Thickness 9.0mm aisi 316 seamless stainless steel pipe",
                    "col_2": "Singapore, Egypt, UK, Mexico, Spain"
                  },
                  {
                    "col_1": "ASTM A312 TP316 Elliptical and Oval Pipe",
                    "col_2": "United Kingdom -UK, Europe, Malaysia"
                  },
                  {
                    "col_1": "Custom Size 4 Inch SS 316 Stainless Steel Welded Tube",
                    "col_2": "Russia, Malaysia, Netherlands"
                  },
                  {
                    "col_1": "316 Mirror Finish Stainless Steel Pipe",
                    "col_2": "Kuwait, South Africa, Saudi Arabia (KSA), Brazil"
                  },
                  {
                    "col_1": "ASTM A213 316 Seamless Tube",
                    "col_2": "Singapore, South Africa, Bahrain"
                  },
                  {
                    "col_1": "AISI 316 Stainless Steel ERW Pipe",
                    "col_2": "Ellington -United States, Canada, UK"
                  }
                ],
                "row_count": 14,
                "column_count": 2
              }
            ],
          },
          {
            slug: "stainless-steel-316l-pipe",
            name: "Stainless Steel 316L Pipe",
            icon: "pipe",
            description: "Low-carbon 316 — the standard choice for welded pipe in marine and chemical-process service.",
            grades: ["Stainless Steel"],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            "table_of_contents": [
              {
                "label": "Specification Table of Stainless Steel 316L Pipe",
                "anchor": "1"
              },
              {
                "label": "SS 316l Pipe Price In India",
                "anchor": "2"
              },
              {
                "label": "Weight Chart of Inox 316L Pipe",
                "anchor": "3"
              },
              {
                "label": "Available Types of Stainless Steel 316L Round Pipe / Tube",
                "anchor": "4"
              },
              {
                "label": "316L SS Seamless Tubes Pressure Rating of",
                "anchor": "5"
              },
              {
                "label": "UNS S31603 Tube Dimensions",
                "anchor": "6"
              },
              {
                "label": "Chemical Composition WNR 1.4404 Tubing & Pipe",
                "anchor": "7"
              },
              {
                "label": "316L Stainless Steel Pipe & Tube Mechanical Analysis",
                "anchor": "8"
              },
              {
                "label": "Equivalent Material of SUS 316L ERW Pipe",
                "anchor": "9"
              },
              {
                "label": "ASTM A312 TP316L Pipe Sizes",
                "anchor": "10"
              },
              {
                "label": "Stainless Steel 316L Welded Pipe Diameter Tolerance",
                "anchor": "11"
              },
              {
                "label": "Wall Thickness Tolerance of SUS 316L Pipe/ Tube",
                "anchor": "12"
              }
            ],
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS S31603" },
              { label: "Composition", value: "Low-carbon 316 (≤ 0.03% C) for weld-decay resistance" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Field-welded piping in marine and chemical-process plant" },
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.030", "2.00", "0.75", "0.045", "0.030", "16.0-18.0", "10.0-14.0", "2.00-3.00", "N ≤ 0.10"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["485 MPa (70 ksi)", "170 MPa (25 ksi)", "35%", "217 HB / 95 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["S31603", "1.4404 / 1.4435", "SUS 316L", "X2CrNiMo17-12-2"]],
              },
              {
                "title": "Specification Table of Stainless Steel 316L Pipe",
                "slug": "specification-table-of-stainless-steel-316l-pipe",
                "columns": [
                  "ASTM / ASME Standards",
                  "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312"
                ],
                "rows": [
                  [
                    "Pipe Form",
                    "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  ],
                  [
                    "Pipe/ Tube Length",
                    "Single Random, Double Random & Cut Length."
                  ],
                  [
                    "Pipe/ Tube Schedule",
                    "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  ],
                  [
                    "Pipe Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "EFW Pipe size",
                    "5.0 mm - 1219.2 mm"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded."
                  ],
                  [
                    "Welded Tube Size",
                    "6.35 mm OD To 152 mm OD"
                  ],
                  [
                    "Swg & Bwg",
                    "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  ],
                  [
                    "Marking",
                    "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Material Test Certificates (MTC)",
                    "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  ],
                  [
                    "Tubing wall thickness",
                    "0.020\" –0.220\", (special wall thicknesses available)"
                  ],
                  [
                    "Tube Length",
                    "Single Random, Double Random, Standard & Cut length"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded"
                  ],
                  [
                    "Marking",
                    "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Tube Type",
                    "Seamless, ERW, EFW, Welded, Fabricated"
                  ],
                  [
                    "Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "Tube Form",
                    "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  ],
                  [
                    "Application",
                    "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  ]
                ],
                "records": [
                  {
                    "ASTM / ASME Standards": "Pipe Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random & Cut Length."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Schedule",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  },
                  {
                    "ASTM / ASME Standards": "Pipe Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "EFW Pipe size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "5.0 mm - 1219.2 mm"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded."
                  },
                  {
                    "ASTM / ASME Standards": "Welded Tube Size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "6.35 mm OD To 152 mm OD"
                  },
                  {
                    "ASTM / ASME Standards": "Swg & Bwg",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Material Test Certificates (MTC)",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  },
                  {
                    "ASTM / ASME Standards": "Tubing wall thickness",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "0.020\" –0.220\", (special wall thicknesses available)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random, Standard & Cut length"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded"
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Type",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Seamless, ERW, EFW, Welded, Fabricated"
                  },
                  {
                    "ASTM / ASME Standards": "Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Application",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  }
                ],
                "row_count": 18,
                "column_count": 2
              },
              {
                "title": "SS 316l Pipe Price In India",
                "slug": "ss-316l-pipe-price-in-india",
                "columns": [
                  "Price list of SS 316l Pipe",
                  "UNS S31603 Pipe Price in INR",
                  "UNS S31603 Pipe Price in USD",
                  "UNS S31603 Pipe Price in UAE Dirham"
                ],
                "rows": [
                  [
                    "ASTM A312 TP 316L Pipe 3.0mm Dia X 0.50mm Wall X500mm",
                    "INR 18582.91",
                    "200.00 USD",
                    "959.10 UAE Dirham"
                  ]
                ],
                "records": [
                  {
                    "Price list of SS 316l Pipe": "ASTM A312 TP 316L Pipe 3.0mm Dia X 0.50mm Wall X500mm",
                    "UNS S31603 Pipe Price in INR": "INR 18582.91",
                    "UNS S31603 Pipe Price in USD": "200.00 USD",
                    "UNS S31603 Pipe Price in UAE Dirham": "959.10 UAE Dirham"
                  }
                ],
                "row_count": 1,
                "column_count": 4
              },
              {
                "title": "Weight Chart of Inox 316L Pipe",
                "slug": "weight-chart-of-inox-316l-pipe",
                "columns": [
                  "PIPE SIZE",
                  "OD IN INCHES",
                  "A.S.A. Pipe Schedules",
                  "A.S.A. Pipe Schedules_2",
                  "A.S.A. Pipe Schedules_3",
                  "A.S.A. Pipe Schedules_4",
                  "A.S.A. Pipe Schedules_5",
                  "A.S.A. Pipe Schedules_6",
                  "A.S.A. Pipe Schedules_7",
                  "A.S.A. Pipe Schedules_8",
                  "A.S.A. Pipe Schedules_9",
                  "A.S.A. Pipe Schedules_10",
                  "A.S.A. Pipe Schedules_11",
                  "A.S.A. Pipe Schedules_12"
                ],
                "rows": [
                  [
                    "PIPE SIZE",
                    "OD IN INCHES",
                    "5s",
                    "5",
                    "10s",
                    "10",
                    "40s & Std.",
                    "40",
                    "60",
                    "80s & E.H.",
                    "80",
                    "120",
                    "160",
                    "DBL E.H."
                  ],
                  [
                    "1/8",
                    ".405",
                    "",
                    ".035.1383",
                    ".049.1863",
                    ".049.1863",
                    ".068.2447",
                    "068.2447",
                    "",
                    "0.95.3145",
                    "0.95.3145",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    "",
                    ".049.2570",
                    ".065.3297",
                    ".065.3297",
                    ".088.4248",
                    "088.4248",
                    "",
                    ".119.5351",
                    ".119.5351",
                    "",
                    "",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    "",
                    ".049.3276",
                    ".065.4235",
                    ".065.4235",
                    ".091.5676",
                    ".091.5676",
                    "",
                    ".126.7338",
                    ".126.7338",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".065.5383",
                    ".065.5383",
                    ".083.6710",
                    ".083.6710",
                    ".109.8510",
                    ".109.8510",
                    "",
                    ".1471.088",
                    ".1471.088",
                    "",
                    ".1871.304",
                    ".2941.714"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".065.6838",
                    ".065.6838",
                    ".083.8572",
                    ".083.8572",
                    ".1131.131",
                    ".1131.131",
                    "",
                    ".1541.474",
                    ".1541.474",
                    "",
                    ".2181.937",
                    ".3082.441"
                  ],
                  [
                    "1",
                    "1.315",
                    ".065.8678",
                    ".065.8678",
                    ".1091.404",
                    ".1091.404",
                    ".1331.679",
                    ".1331.679",
                    "",
                    ".1792.172",
                    ".1792.172",
                    "",
                    ".2502.844",
                    ".3583.659"
                  ],
                  [
                    "1-1/4",
                    "1.660",
                    ".0651.107",
                    ".0651.107",
                    ".1091.806",
                    ".1091.806",
                    ".1402.273",
                    ".1402.273",
                    "",
                    ".1912.997",
                    ".1912.997",
                    "",
                    ".2503.765",
                    ".3825.214"
                  ],
                  [
                    "1-1/2",
                    "1.900",
                    ".0651.274",
                    ".0651.274",
                    ".1092.085",
                    ".1092.085",
                    ".1452.718",
                    ".1452.718",
                    "",
                    ".2003.631",
                    ".2003.631",
                    "",
                    ".2814.859",
                    ".4006.408"
                  ],
                  [
                    "2",
                    "2.375",
                    ".0651.604",
                    ".0651.604",
                    ".1092.638",
                    ".1092.638",
                    ".1543.653",
                    ".1543.653",
                    "",
                    ".2185.022",
                    ".2185.022",
                    "",
                    ".3437.444",
                    ".4369.029"
                  ],
                  [
                    "2-1/2",
                    "2.875",
                    ".0832.475",
                    ".0832.475",
                    ".1203.531",
                    ".1203.531",
                    ".2035.793",
                    ".2035.793",
                    "",
                    ".2767.661",
                    ".2767.661",
                    "",
                    ".37510.01",
                    ".55213.70"
                  ],
                  [
                    "3",
                    "3.500",
                    ".0833.029",
                    ".0833.029",
                    ".1204.332",
                    ".1204.332",
                    ".2167.576",
                    ".2167.576",
                    "",
                    ".30010.25",
                    ".30010.25",
                    "",
                    ".43714.32",
                    ".60018.58"
                  ],
                  [
                    "3-1/2",
                    "4.000",
                    ".0833.472",
                    ".0833.472",
                    ".1204.973",
                    ".1204.973",
                    ".2269.109",
                    ".2269.109",
                    "",
                    ".31812.51",
                    ".31812.51",
                    "",
                    "",
                    ".63622.85"
                  ],
                  [
                    "4",
                    "4.500",
                    ".0833.915",
                    ".0833.915",
                    ".1205.613",
                    ".1205.613",
                    ".23710.79",
                    ".23710.79",
                    ".28112.66",
                    ".33714.98",
                    ".33714.98",
                    ".43719.01",
                    ".53122.51",
                    ".67427.54"
                  ],
                  [
                    "4-1/2",
                    "5.000",
                    "",
                    "",
                    "",
                    "",
                    ".24712.53",
                    "",
                    "",
                    ".35517.61",
                    "",
                    "",
                    "",
                    ".71032.53"
                  ],
                  [
                    "5",
                    "5.563",
                    ".1096.349",
                    ".1096.349",
                    ".1347.770",
                    ".1347.770",
                    ".25814.62",
                    ".25814.62",
                    "",
                    ".37520.78",
                    ".37520.78",
                    ".50027.04",
                    ".62532.96",
                    ".75038.55"
                  ],
                  [
                    "6",
                    "6.625",
                    ".1097.585",
                    ".1097.585",
                    ".1349.290",
                    ".1349.290",
                    ".28018.97",
                    ".28018.97",
                    "",
                    ".43228.57",
                    ".43228.57",
                    ".56236.39",
                    ".71845.30",
                    ".86453.16"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    "",
                    "",
                    ".30123.57",
                    "",
                    "",
                    ".50038.05",
                    "",
                    "",
                    "",
                    ".87563.08"
                  ],
                  [
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  ]
                ],
                "records": [
                  {
                    "PIPE SIZE": "PIPE SIZE",
                    "OD IN INCHES": "OD IN INCHES",
                    "A.S.A. Pipe Schedules": "5s",
                    "A.S.A. Pipe Schedules_2": "5",
                    "A.S.A. Pipe Schedules_3": "10s",
                    "A.S.A. Pipe Schedules_4": "10",
                    "A.S.A. Pipe Schedules_5": "40s & Std.",
                    "A.S.A. Pipe Schedules_6": "40",
                    "A.S.A. Pipe Schedules_7": "60",
                    "A.S.A. Pipe Schedules_8": "80s & E.H.",
                    "A.S.A. Pipe Schedules_9": "80",
                    "A.S.A. Pipe Schedules_10": "120",
                    "A.S.A. Pipe Schedules_11": "160",
                    "A.S.A. Pipe Schedules_12": "DBL E.H."
                  },
                  {
                    "PIPE SIZE": "1/8",
                    "OD IN INCHES": ".405",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".035.1383",
                    "A.S.A. Pipe Schedules_3": ".049.1863",
                    "A.S.A. Pipe Schedules_4": ".049.1863",
                    "A.S.A. Pipe Schedules_5": ".068.2447",
                    "A.S.A. Pipe Schedules_6": "068.2447",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": "0.95.3145",
                    "A.S.A. Pipe Schedules_9": "0.95.3145",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/4",
                    "OD IN INCHES": ".540",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.2570",
                    "A.S.A. Pipe Schedules_3": ".065.3297",
                    "A.S.A. Pipe Schedules_4": ".065.3297",
                    "A.S.A. Pipe Schedules_5": ".088.4248",
                    "A.S.A. Pipe Schedules_6": "088.4248",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".119.5351",
                    "A.S.A. Pipe Schedules_9": ".119.5351",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "3/8",
                    "OD IN INCHES": ".675",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.3276",
                    "A.S.A. Pipe Schedules_3": ".065.4235",
                    "A.S.A. Pipe Schedules_4": ".065.4235",
                    "A.S.A. Pipe Schedules_5": ".091.5676",
                    "A.S.A. Pipe Schedules_6": ".091.5676",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".126.7338",
                    "A.S.A. Pipe Schedules_9": ".126.7338",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/2",
                    "OD IN INCHES": ".840",
                    "A.S.A. Pipe Schedules": ".065.5383",
                    "A.S.A. Pipe Schedules_2": ".065.5383",
                    "A.S.A. Pipe Schedules_3": ".083.6710",
                    "A.S.A. Pipe Schedules_4": ".083.6710",
                    "A.S.A. Pipe Schedules_5": ".109.8510",
                    "A.S.A. Pipe Schedules_6": ".109.8510",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1471.088",
                    "A.S.A. Pipe Schedules_9": ".1471.088",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".1871.304",
                    "A.S.A. Pipe Schedules_12": ".2941.714"
                  },
                  {
                    "PIPE SIZE": "3/4",
                    "OD IN INCHES": "1.050",
                    "A.S.A. Pipe Schedules": ".065.6838",
                    "A.S.A. Pipe Schedules_2": ".065.6838",
                    "A.S.A. Pipe Schedules_3": ".083.8572",
                    "A.S.A. Pipe Schedules_4": ".083.8572",
                    "A.S.A. Pipe Schedules_5": ".1131.131",
                    "A.S.A. Pipe Schedules_6": ".1131.131",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1541.474",
                    "A.S.A. Pipe Schedules_9": ".1541.474",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2181.937",
                    "A.S.A. Pipe Schedules_12": ".3082.441"
                  },
                  {
                    "PIPE SIZE": "1",
                    "OD IN INCHES": "1.315",
                    "A.S.A. Pipe Schedules": ".065.8678",
                    "A.S.A. Pipe Schedules_2": ".065.8678",
                    "A.S.A. Pipe Schedules_3": ".1091.404",
                    "A.S.A. Pipe Schedules_4": ".1091.404",
                    "A.S.A. Pipe Schedules_5": ".1331.679",
                    "A.S.A. Pipe Schedules_6": ".1331.679",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1792.172",
                    "A.S.A. Pipe Schedules_9": ".1792.172",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2502.844",
                    "A.S.A. Pipe Schedules_12": ".3583.659"
                  },
                  {
                    "PIPE SIZE": "1-1/4",
                    "OD IN INCHES": "1.660",
                    "A.S.A. Pipe Schedules": ".0651.107",
                    "A.S.A. Pipe Schedules_2": ".0651.107",
                    "A.S.A. Pipe Schedules_3": ".1091.806",
                    "A.S.A. Pipe Schedules_4": ".1091.806",
                    "A.S.A. Pipe Schedules_5": ".1402.273",
                    "A.S.A. Pipe Schedules_6": ".1402.273",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1912.997",
                    "A.S.A. Pipe Schedules_9": ".1912.997",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2503.765",
                    "A.S.A. Pipe Schedules_12": ".3825.214"
                  },
                  {
                    "PIPE SIZE": "1-1/2",
                    "OD IN INCHES": "1.900",
                    "A.S.A. Pipe Schedules": ".0651.274",
                    "A.S.A. Pipe Schedules_2": ".0651.274",
                    "A.S.A. Pipe Schedules_3": ".1092.085",
                    "A.S.A. Pipe Schedules_4": ".1092.085",
                    "A.S.A. Pipe Schedules_5": ".1452.718",
                    "A.S.A. Pipe Schedules_6": ".1452.718",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2003.631",
                    "A.S.A. Pipe Schedules_9": ".2003.631",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2814.859",
                    "A.S.A. Pipe Schedules_12": ".4006.408"
                  },
                  {
                    "PIPE SIZE": "2",
                    "OD IN INCHES": "2.375",
                    "A.S.A. Pipe Schedules": ".0651.604",
                    "A.S.A. Pipe Schedules_2": ".0651.604",
                    "A.S.A. Pipe Schedules_3": ".1092.638",
                    "A.S.A. Pipe Schedules_4": ".1092.638",
                    "A.S.A. Pipe Schedules_5": ".1543.653",
                    "A.S.A. Pipe Schedules_6": ".1543.653",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2185.022",
                    "A.S.A. Pipe Schedules_9": ".2185.022",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".3437.444",
                    "A.S.A. Pipe Schedules_12": ".4369.029"
                  },
                  {
                    "PIPE SIZE": "2-1/2",
                    "OD IN INCHES": "2.875",
                    "A.S.A. Pipe Schedules": ".0832.475",
                    "A.S.A. Pipe Schedules_2": ".0832.475",
                    "A.S.A. Pipe Schedules_3": ".1203.531",
                    "A.S.A. Pipe Schedules_4": ".1203.531",
                    "A.S.A. Pipe Schedules_5": ".2035.793",
                    "A.S.A. Pipe Schedules_6": ".2035.793",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2767.661",
                    "A.S.A. Pipe Schedules_9": ".2767.661",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".37510.01",
                    "A.S.A. Pipe Schedules_12": ".55213.70"
                  },
                  {
                    "PIPE SIZE": "3",
                    "OD IN INCHES": "3.500",
                    "A.S.A. Pipe Schedules": ".0833.029",
                    "A.S.A. Pipe Schedules_2": ".0833.029",
                    "A.S.A. Pipe Schedules_3": ".1204.332",
                    "A.S.A. Pipe Schedules_4": ".1204.332",
                    "A.S.A. Pipe Schedules_5": ".2167.576",
                    "A.S.A. Pipe Schedules_6": ".2167.576",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".30010.25",
                    "A.S.A. Pipe Schedules_9": ".30010.25",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".43714.32",
                    "A.S.A. Pipe Schedules_12": ".60018.58"
                  },
                  {
                    "PIPE SIZE": "3-1/2",
                    "OD IN INCHES": "4.000",
                    "A.S.A. Pipe Schedules": ".0833.472",
                    "A.S.A. Pipe Schedules_2": ".0833.472",
                    "A.S.A. Pipe Schedules_3": ".1204.973",
                    "A.S.A. Pipe Schedules_4": ".1204.973",
                    "A.S.A. Pipe Schedules_5": ".2269.109",
                    "A.S.A. Pipe Schedules_6": ".2269.109",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".31812.51",
                    "A.S.A. Pipe Schedules_9": ".31812.51",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".63622.85"
                  },
                  {
                    "PIPE SIZE": "4",
                    "OD IN INCHES": "4.500",
                    "A.S.A. Pipe Schedules": ".0833.915",
                    "A.S.A. Pipe Schedules_2": ".0833.915",
                    "A.S.A. Pipe Schedules_3": ".1205.613",
                    "A.S.A. Pipe Schedules_4": ".1205.613",
                    "A.S.A. Pipe Schedules_5": ".23710.79",
                    "A.S.A. Pipe Schedules_6": ".23710.79",
                    "A.S.A. Pipe Schedules_7": ".28112.66",
                    "A.S.A. Pipe Schedules_8": ".33714.98",
                    "A.S.A. Pipe Schedules_9": ".33714.98",
                    "A.S.A. Pipe Schedules_10": ".43719.01",
                    "A.S.A. Pipe Schedules_11": ".53122.51",
                    "A.S.A. Pipe Schedules_12": ".67427.54"
                  },
                  {
                    "PIPE SIZE": "4-1/2",
                    "OD IN INCHES": "5.000",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".24712.53",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".35517.61",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".71032.53"
                  },
                  {
                    "PIPE SIZE": "5",
                    "OD IN INCHES": "5.563",
                    "A.S.A. Pipe Schedules": ".1096.349",
                    "A.S.A. Pipe Schedules_2": ".1096.349",
                    "A.S.A. Pipe Schedules_3": ".1347.770",
                    "A.S.A. Pipe Schedules_4": ".1347.770",
                    "A.S.A. Pipe Schedules_5": ".25814.62",
                    "A.S.A. Pipe Schedules_6": ".25814.62",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".37520.78",
                    "A.S.A. Pipe Schedules_9": ".37520.78",
                    "A.S.A. Pipe Schedules_10": ".50027.04",
                    "A.S.A. Pipe Schedules_11": ".62532.96",
                    "A.S.A. Pipe Schedules_12": ".75038.55"
                  },
                  {
                    "PIPE SIZE": "6",
                    "OD IN INCHES": "6.625",
                    "A.S.A. Pipe Schedules": ".1097.585",
                    "A.S.A. Pipe Schedules_2": ".1097.585",
                    "A.S.A. Pipe Schedules_3": ".1349.290",
                    "A.S.A. Pipe Schedules_4": ".1349.290",
                    "A.S.A. Pipe Schedules_5": ".28018.97",
                    "A.S.A. Pipe Schedules_6": ".28018.97",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".43228.57",
                    "A.S.A. Pipe Schedules_9": ".43228.57",
                    "A.S.A. Pipe Schedules_10": ".56236.39",
                    "A.S.A. Pipe Schedules_11": ".71845.30",
                    "A.S.A. Pipe Schedules_12": ".86453.16"
                  },
                  {
                    "PIPE SIZE": "7",
                    "OD IN INCHES": "7.625",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".30123.57",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".50038.05",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".87563.08"
                  },
                  {
                    "PIPE SIZE": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "OD IN INCHES": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_2": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_3": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_4": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_5": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_6": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_7": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_8": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_9": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_10": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_11": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_12": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  }
                ],
                "row_count": 19,
                "column_count": 14
              },
              {
                "title": "316L SS Seamless Tubes Pressure Rating of",
                "slug": "316l-ss-seamless-tubes-pressure-rating-of",
                "columns": [
                  "OD inches",
                  "Ave. Wall inches",
                  "Min Yield Strength (PSI)",
                  "Min Tensile Strength (PSI)",
                  "Theoretical Burst Pressure * (PSI)",
                  "Working Pressure (PSI) 25% of Burst",
                  "Theoretical Yield Point ** (PSI)",
                  "Collapse Pressure *** (PSI)"
                ],
                "rows": [
                  [
                    "0.250",
                    "0.020",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "0.250",
                    "0.028",
                    "30,000",
                    "75,000",
                    "21,649",
                    "5,412",
                    "8,660",
                    "5,967"
                  ],
                  [
                    "0.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "29,167",
                    "7,292",
                    "11,667",
                    "7,224"
                  ],
                  [
                    "0.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "48,355",
                    "12,089",
                    "19,342",
                    "9,455"
                  ],
                  [
                    "0.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "81,250",
                    "20,313",
                    "32,500",
                    "11,544"
                  ],
                  [
                    "0.375",
                    "0.020",
                    "30,000",
                    "75,000",
                    "8,955",
                    "2,239",
                    "3,582",
                    "3,029"
                  ],
                  [
                    "0.375",
                    "0.028",
                    "30,000",
                    "75,000",
                    "13,166",
                    "3,292",
                    "5,266",
                    "4,145"
                  ],
                  [
                    "0.375",
                    "0.035",
                    "30,000",
                    "75,000",
                    "17,213",
                    "4,303",
                    "6,885",
                    "5,077"
                  ],
                  [
                    "0.375",
                    "0.049",
                    "30,000",
                    "75,000",
                    "26,534",
                    "6,634",
                    "10,614",
                    "6,816"
                  ],
                  [
                    "0.375",
                    "0.065",
                    "30,000",
                    "75,000",
                    "39,796",
                    "9,949",
                    "15,918",
                    "8,597"
                  ],
                  [
                    "0.500",
                    "0.020",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.500",
                    "0.028",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "12,209",
                    "3,052",
                    "4,884",
                    "3,906"
                  ],
                  [
                    "0.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "18,284",
                    "4,571",
                    "7,313",
                    "5,316L"
                  ],
                  [
                    "0.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "26,351",
                    "6,588",
                    "10,541",
                    "6,786"
                  ],
                  [
                    "0.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "37,275",
                    "9,319",
                    "14,910",
                    "8,307"
                  ],
                  [
                    "0.625",
                    "0.020",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.625",
                    "0.028",
                    "30,000",
                    "75,000",
                    "7,381",
                    "1,845",
                    "2,953",
                    "2,568"
                  ],
                  [
                    "0.625",
                    "0.035",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.625",
                    "0.049",
                    "30,000",
                    "75,000",
                    "13,947",
                    "3,487",
                    "5,579",
                    "4,335"
                  ],
                  [
                    "0.625",
                    "0.065",
                    "30,000",
                    "75,000",
                    "19,697",
                    "4,924",
                    "7,879",
                    "5,591"
                  ],
                  [
                    "0.625",
                    "0.083",
                    "30,000",
                    "75,000",
                    "27,124",
                    "6,781",
                    "10,850",
                    "6,910"
                  ],
                  [
                    "0.625",
                    "0.095",
                    "30,000",
                    "75,000",
                    "32,759",
                    "8,190",
                    "13,103",
                    "7,734"
                  ],
                  [
                    "0.625",
                    "0.109",
                    "30,000",
                    "75,000",
                    "40,172",
                    "10,043",
                    "16,069",
                    "8,639"
                  ],
                  [
                    "0.750",
                    "0.028",
                    "30,000",
                    "75,000",
                    "6,052",
                    "1,513",
                    "2,421",
                    "2,156"
                  ],
                  [
                    "0.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "7,721",
                    "1,930",
                    "3,088",
                    "2,669"
                  ],
                  [
                    "0.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "11,273",
                    "2,818",
                    "4,509",
                    "3,664"
                  ],
                  [
                    "0.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "15,726",
                    "3,931",
                    "6,290",
                    "4,749"
                  ],
                  [
                    "0.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "21,318",
                    "5,330",
                    "8,527",
                    "5,905"
                  ],
                  [
                    "0.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "25,446",
                    "6,362",
                    "10,179",
                    "6,637"
                  ],
                  [
                    "0.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "30,733",
                    "7,683",
                    "12,293",
                    "7,453"
                  ],
                  [
                    "0.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "35,294",
                    "8,824",
                    "14,118",
                    "8,064"
                  ],
                  [
                    "0.875",
                    "0.020",
                    "30,000",
                    "75,000",
                    "3,593",
                    "898",
                    "1,437",
                    "1,340"
                  ],
                  [
                    "0.875",
                    "0.028",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.875",
                    "0.035",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.875",
                    "0.049",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.875",
                    "0.065",
                    "30,000",
                    "75,000",
                    "13,087",
                    "3,272",
                    "5,235",
                    "4,126"
                  ],
                  [
                    "0.875",
                    "0.083",
                    "30,000",
                    "75,000",
                    "17,560",
                    "4,390",
                    "7,024",
                    "5,152"
                  ],
                  [
                    "0.875",
                    "0.095",
                    "30,000",
                    "75,000",
                    "20,803",
                    "5,201",
                    "8,321",
                    "5,807"
                  ],
                  [
                    "0.875",
                    "0.109",
                    "30,000",
                    "75,000",
                    "24,886",
                    "6,221",
                    "9,954",
                    "6,543"
                  ],
                  [
                    "0.875",
                    "0.120",
                    "30,000",
                    "75,000",
                    "28,346",
                    "7,087",
                    "11,339",
                    "7,100"
                  ],
                  [
                    "1.000",
                    "0.028",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "5,645",
                    "1,411",
                    "2,258",
                    "2,027"
                  ],
                  [
                    "1.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "8,149",
                    "2,037",
                    "3,259",
                    "2,796"
                  ],
                  [
                    "1.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "11,207",
                    "2,802",
                    "4,483",
                    "3,647"
                  ],
                  [
                    "1.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "14,928",
                    "3,732",
                    "5,971",
                    "4,567"
                  ],
                  [
                    "1.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "17,593",
                    "4,398",
                    "7,037",
                    "5,159"
                  ],
                  [
                    "1.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "20,908",
                    "5,227",
                    "8,363",
                    "5,827"
                  ],
                  [
                    "1.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "23,684",
                    "5,921",
                    "9,474",
                    "6,336"
                  ],
                  [
                    "1.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "27,459",
                    "6,865",
                    "10,984",
                    "6,963"
                  ],
                  [
                    "1.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "6,380",
                    "1,595",
                    "2,552",
                    "2,260"
                  ],
                  [
                    "1.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "8,705",
                    "2,176",
                    "3,482",
                    "2,958"
                  ],
                  [
                    "1.250",
                    "0.083",
                    "30,000",
                    "75,000",
                    "11,485",
                    "2,871",
                    "4,594",
                    "3,719"
                  ],
                  [
                    "1.250",
                    "0.095",
                    "30,000",
                    "75,000",
                    "13,443",
                    "3,361",
                    "5,377",
                    "4,213"
                  ],
                  [
                    "1.250",
                    "0.109",
                    "30,000",
                    "75,000",
                    "15,843",
                    "3,961",
                    "6,337",
                    "4,776"
                  ],
                  [
                    "1.250",
                    "0.120",
                    "30,000",
                    "75,000",
                    "17,822",
                    "4,455",
                    "7,129",
                    "5,207"
                  ],
                  [
                    "1.250",
                    "0.134",
                    "30,000",
                    "75,000",
                    "20,468",
                    "5,117",
                    "8,187",
                    "5,742"
                  ],
                  [
                    "1.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,671",
                    "918",
                    "1,469",
                    "1,367"
                  ],
                  [
                    "1.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "5,243",
                    "1,311",
                    "2,097",
                    "1,896"
                  ],
                  [
                    "1.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "7,117",
                    "1,779",
                    "2,847",
                    "2,487"
                  ],
                  [
                    "1.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "9,333",
                    "2,333",
                    "3,733",
                    "3,136"
                  ],
                  [
                    "1.500",
                    "0.095",
                    "30,000",
                    "75,000",
                    "10,878",
                    "2,719",
                    "4,351",
                    "3,559"
                  ],
                  [
                    "1.500",
                    "0.109",
                    "30,000",
                    "75,000",
                    "12,754",
                    "3,188",
                    "5,101",
                    "4,043"
                  ],
                  [
                    "1.500",
                    "0.120",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "1.500",
                    "0.134",
                    "30,000",
                    "75,000",
                    "16,315",
                    "4,079",
                    "6,526",
                    "4,881"
                  ],
                  [
                    "1.500",
                    "0.148",
                    "30,000",
                    "75,000",
                    "18,439",
                    "4,610",
                    "7,375",
                    "5,336"
                  ],
                  [
                    "1.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,125",
                    "781",
                    "1,250",
                    "1,176"
                  ],
                  [
                    "1.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "1.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "6,019",
                    "1,505",
                    "2,407",
                    "2,146"
                  ],
                  [
                    "1.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "7,860",
                    "1,965",
                    "3,144",
                    "2,711"
                  ],
                  [
                    "1.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "9,135",
                    "2,284",
                    "3,654",
                    "3,080"
                  ],
                  [
                    "1.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "10,672",
                    "2,668",
                    "4,269",
                    "3,504"
                  ],
                  [
                    "1.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "11,921",
                    "2,980",
                    "4,768",
                    "3,832"
                  ],
                  [
                    "1.750",
                    "0.134",
                    "30,000",
                    "75,000",
                    "13,563",
                    "3,391",
                    "5,425",
                    "4,242"
                  ],
                  [
                    "1.750",
                    "0.148",
                    "30,000",
                    "75,000",
                    "15,268",
                    "3,817",
                    "6,107",
                    "4,645"
                  ],
                  [
                    "1.750",
                    "0.165",
                    "30,000",
                    "75,000",
                    "17,430",
                    "4,357",
                    "6,972",
                    "5,124"
                  ],
                  [
                    "2.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "2,720",
                    "680",
                    "1,088",
                    "1,032"
                  ],
                  [
                    "2.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "2.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "5,214",
                    "1,303",
                    "2,086",
                    "1,887"
                  ],
                  [
                    "2.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "6,788",
                    "1,697",
                    "2,715",
                    "2,387"
                  ],
                  [
                    "2.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "7,873",
                    "1,968",
                    "3,149",
                    "2,715"
                  ],
                  [
                    "2.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "9,175",
                    "2,294",
                    "3,670",
                    "3,092"
                  ],
                  [
                    "2.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "10,227",
                    "2,557",
                    "4,091",
                    "3,384"
                  ],
                  [
                    "2.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "11,605",
                    "2,901",
                    "4,642",
                    "3,751"
                  ],
                  [
                    "2.000",
                    "0.148",
                    "30,000",
                    "75,000",
                    "13,028",
                    "3,257",
                    "5,211",
                    "4,111"
                  ],
                  [
                    "2.000",
                    "0.165",
                    "30,000",
                    "75,000",
                    "14,820",
                    "3,705",
                    "5,928",
                    "4,542"
                  ]
                ],
                "records": [
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,649",
                    "Working Pressure (PSI) 25% of Burst": "5,412",
                    "Theoretical Yield Point ** (PSI)": "8,660",
                    "Collapse Pressure *** (PSI)": "5,967"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "29,167",
                    "Working Pressure (PSI) 25% of Burst": "7,292",
                    "Theoretical Yield Point ** (PSI)": "11,667",
                    "Collapse Pressure *** (PSI)": "7,224"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "48,355",
                    "Working Pressure (PSI) 25% of Burst": "12,089",
                    "Theoretical Yield Point ** (PSI)": "19,342",
                    "Collapse Pressure *** (PSI)": "9,455"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "81,250",
                    "Working Pressure (PSI) 25% of Burst": "20,313",
                    "Theoretical Yield Point ** (PSI)": "32,500",
                    "Collapse Pressure *** (PSI)": "11,544"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,955",
                    "Working Pressure (PSI) 25% of Burst": "2,239",
                    "Theoretical Yield Point ** (PSI)": "3,582",
                    "Collapse Pressure *** (PSI)": "3,029"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,166",
                    "Working Pressure (PSI) 25% of Burst": "3,292",
                    "Theoretical Yield Point ** (PSI)": "5,266",
                    "Collapse Pressure *** (PSI)": "4,145"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,213",
                    "Working Pressure (PSI) 25% of Burst": "4,303",
                    "Theoretical Yield Point ** (PSI)": "6,885",
                    "Collapse Pressure *** (PSI)": "5,077"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,534",
                    "Working Pressure (PSI) 25% of Burst": "6,634",
                    "Theoretical Yield Point ** (PSI)": "10,614",
                    "Collapse Pressure *** (PSI)": "6,816"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "39,796",
                    "Working Pressure (PSI) 25% of Burst": "9,949",
                    "Theoretical Yield Point ** (PSI)": "15,918",
                    "Collapse Pressure *** (PSI)": "8,597"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,209",
                    "Working Pressure (PSI) 25% of Burst": "3,052",
                    "Theoretical Yield Point ** (PSI)": "4,884",
                    "Collapse Pressure *** (PSI)": "3,906"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,284",
                    "Working Pressure (PSI) 25% of Burst": "4,571",
                    "Theoretical Yield Point ** (PSI)": "7,313",
                    "Collapse Pressure *** (PSI)": "5,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,351",
                    "Working Pressure (PSI) 25% of Burst": "6,588",
                    "Theoretical Yield Point ** (PSI)": "10,541",
                    "Collapse Pressure *** (PSI)": "6,786"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "37,275",
                    "Working Pressure (PSI) 25% of Burst": "9,319",
                    "Theoretical Yield Point ** (PSI)": "14,910",
                    "Collapse Pressure *** (PSI)": "8,307"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,381",
                    "Working Pressure (PSI) 25% of Burst": "1,845",
                    "Theoretical Yield Point ** (PSI)": "2,953",
                    "Collapse Pressure *** (PSI)": "2,568"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,947",
                    "Working Pressure (PSI) 25% of Burst": "3,487",
                    "Theoretical Yield Point ** (PSI)": "5,579",
                    "Collapse Pressure *** (PSI)": "4,335"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "19,697",
                    "Working Pressure (PSI) 25% of Burst": "4,924",
                    "Theoretical Yield Point ** (PSI)": "7,879",
                    "Collapse Pressure *** (PSI)": "5,591"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,124",
                    "Working Pressure (PSI) 25% of Burst": "6,781",
                    "Theoretical Yield Point ** (PSI)": "10,850",
                    "Collapse Pressure *** (PSI)": "6,910"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "32,759",
                    "Working Pressure (PSI) 25% of Burst": "8,190",
                    "Theoretical Yield Point ** (PSI)": "13,103",
                    "Collapse Pressure *** (PSI)": "7,734"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "40,172",
                    "Working Pressure (PSI) 25% of Burst": "10,043",
                    "Theoretical Yield Point ** (PSI)": "16,069",
                    "Collapse Pressure *** (PSI)": "8,639"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,052",
                    "Working Pressure (PSI) 25% of Burst": "1,513",
                    "Theoretical Yield Point ** (PSI)": "2,421",
                    "Collapse Pressure *** (PSI)": "2,156"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,721",
                    "Working Pressure (PSI) 25% of Burst": "1,930",
                    "Theoretical Yield Point ** (PSI)": "3,088",
                    "Collapse Pressure *** (PSI)": "2,669"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,273",
                    "Working Pressure (PSI) 25% of Burst": "2,818",
                    "Theoretical Yield Point ** (PSI)": "4,509",
                    "Collapse Pressure *** (PSI)": "3,664"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,726",
                    "Working Pressure (PSI) 25% of Burst": "3,931",
                    "Theoretical Yield Point ** (PSI)": "6,290",
                    "Collapse Pressure *** (PSI)": "4,749"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,318",
                    "Working Pressure (PSI) 25% of Burst": "5,330",
                    "Theoretical Yield Point ** (PSI)": "8,527",
                    "Collapse Pressure *** (PSI)": "5,905"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "25,446",
                    "Working Pressure (PSI) 25% of Burst": "6,362",
                    "Theoretical Yield Point ** (PSI)": "10,179",
                    "Collapse Pressure *** (PSI)": "6,637"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "30,733",
                    "Working Pressure (PSI) 25% of Burst": "7,683",
                    "Theoretical Yield Point ** (PSI)": "12,293",
                    "Collapse Pressure *** (PSI)": "7,453"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "35,294",
                    "Working Pressure (PSI) 25% of Burst": "8,824",
                    "Theoretical Yield Point ** (PSI)": "14,118",
                    "Collapse Pressure *** (PSI)": "8,064"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,593",
                    "Working Pressure (PSI) 25% of Burst": "898",
                    "Theoretical Yield Point ** (PSI)": "1,437",
                    "Collapse Pressure *** (PSI)": "1,340"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,087",
                    "Working Pressure (PSI) 25% of Burst": "3,272",
                    "Theoretical Yield Point ** (PSI)": "5,235",
                    "Collapse Pressure *** (PSI)": "4,126"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,560",
                    "Working Pressure (PSI) 25% of Burst": "4,390",
                    "Theoretical Yield Point ** (PSI)": "7,024",
                    "Collapse Pressure *** (PSI)": "5,152"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,803",
                    "Working Pressure (PSI) 25% of Burst": "5,201",
                    "Theoretical Yield Point ** (PSI)": "8,321",
                    "Collapse Pressure *** (PSI)": "5,807"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "24,886",
                    "Working Pressure (PSI) 25% of Burst": "6,221",
                    "Theoretical Yield Point ** (PSI)": "9,954",
                    "Collapse Pressure *** (PSI)": "6,543"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "28,346",
                    "Working Pressure (PSI) 25% of Burst": "7,087",
                    "Theoretical Yield Point ** (PSI)": "11,339",
                    "Collapse Pressure *** (PSI)": "7,100"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,645",
                    "Working Pressure (PSI) 25% of Burst": "1,411",
                    "Theoretical Yield Point ** (PSI)": "2,258",
                    "Collapse Pressure *** (PSI)": "2,027"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,149",
                    "Working Pressure (PSI) 25% of Burst": "2,037",
                    "Theoretical Yield Point ** (PSI)": "3,259",
                    "Collapse Pressure *** (PSI)": "2,796"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,207",
                    "Working Pressure (PSI) 25% of Burst": "2,802",
                    "Theoretical Yield Point ** (PSI)": "4,483",
                    "Collapse Pressure *** (PSI)": "3,647"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,928",
                    "Working Pressure (PSI) 25% of Burst": "3,732",
                    "Theoretical Yield Point ** (PSI)": "5,971",
                    "Collapse Pressure *** (PSI)": "4,567"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,593",
                    "Working Pressure (PSI) 25% of Burst": "4,398",
                    "Theoretical Yield Point ** (PSI)": "7,037",
                    "Collapse Pressure *** (PSI)": "5,159"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,908",
                    "Working Pressure (PSI) 25% of Burst": "5,227",
                    "Theoretical Yield Point ** (PSI)": "8,363",
                    "Collapse Pressure *** (PSI)": "5,827"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "23,684",
                    "Working Pressure (PSI) 25% of Burst": "5,921",
                    "Theoretical Yield Point ** (PSI)": "9,474",
                    "Collapse Pressure *** (PSI)": "6,336"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,459",
                    "Working Pressure (PSI) 25% of Burst": "6,865",
                    "Theoretical Yield Point ** (PSI)": "10,984",
                    "Collapse Pressure *** (PSI)": "6,963"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,380",
                    "Working Pressure (PSI) 25% of Burst": "1,595",
                    "Theoretical Yield Point ** (PSI)": "2,552",
                    "Collapse Pressure *** (PSI)": "2,260"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,705",
                    "Working Pressure (PSI) 25% of Burst": "2,176",
                    "Theoretical Yield Point ** (PSI)": "3,482",
                    "Collapse Pressure *** (PSI)": "2,958"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,485",
                    "Working Pressure (PSI) 25% of Burst": "2,871",
                    "Theoretical Yield Point ** (PSI)": "4,594",
                    "Collapse Pressure *** (PSI)": "3,719"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,443",
                    "Working Pressure (PSI) 25% of Burst": "3,361",
                    "Theoretical Yield Point ** (PSI)": "5,377",
                    "Collapse Pressure *** (PSI)": "4,213"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,843",
                    "Working Pressure (PSI) 25% of Burst": "3,961",
                    "Theoretical Yield Point ** (PSI)": "6,337",
                    "Collapse Pressure *** (PSI)": "4,776"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,822",
                    "Working Pressure (PSI) 25% of Burst": "4,455",
                    "Theoretical Yield Point ** (PSI)": "7,129",
                    "Collapse Pressure *** (PSI)": "5,207"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,468",
                    "Working Pressure (PSI) 25% of Burst": "5,117",
                    "Theoretical Yield Point ** (PSI)": "8,187",
                    "Collapse Pressure *** (PSI)": "5,742"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,671",
                    "Working Pressure (PSI) 25% of Burst": "918",
                    "Theoretical Yield Point ** (PSI)": "1,469",
                    "Collapse Pressure *** (PSI)": "1,367"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,243",
                    "Working Pressure (PSI) 25% of Burst": "1,311",
                    "Theoretical Yield Point ** (PSI)": "2,097",
                    "Collapse Pressure *** (PSI)": "1,896"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,117",
                    "Working Pressure (PSI) 25% of Burst": "1,779",
                    "Theoretical Yield Point ** (PSI)": "2,847",
                    "Collapse Pressure *** (PSI)": "2,487"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,333",
                    "Working Pressure (PSI) 25% of Burst": "2,333",
                    "Theoretical Yield Point ** (PSI)": "3,733",
                    "Collapse Pressure *** (PSI)": "3,136"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,878",
                    "Working Pressure (PSI) 25% of Burst": "2,719",
                    "Theoretical Yield Point ** (PSI)": "4,351",
                    "Collapse Pressure *** (PSI)": "3,559"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,754",
                    "Working Pressure (PSI) 25% of Burst": "3,188",
                    "Theoretical Yield Point ** (PSI)": "5,101",
                    "Collapse Pressure *** (PSI)": "4,043"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "16,315",
                    "Working Pressure (PSI) 25% of Burst": "4,079",
                    "Theoretical Yield Point ** (PSI)": "6,526",
                    "Collapse Pressure *** (PSI)": "4,881"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,439",
                    "Working Pressure (PSI) 25% of Burst": "4,610",
                    "Theoretical Yield Point ** (PSI)": "7,375",
                    "Collapse Pressure *** (PSI)": "5,336"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,125",
                    "Working Pressure (PSI) 25% of Burst": "781",
                    "Theoretical Yield Point ** (PSI)": "1,250",
                    "Collapse Pressure *** (PSI)": "1,176"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,019",
                    "Working Pressure (PSI) 25% of Burst": "1,505",
                    "Theoretical Yield Point ** (PSI)": "2,407",
                    "Collapse Pressure *** (PSI)": "2,146"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,860",
                    "Working Pressure (PSI) 25% of Burst": "1,965",
                    "Theoretical Yield Point ** (PSI)": "3,144",
                    "Collapse Pressure *** (PSI)": "2,711"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,135",
                    "Working Pressure (PSI) 25% of Burst": "2,284",
                    "Theoretical Yield Point ** (PSI)": "3,654",
                    "Collapse Pressure *** (PSI)": "3,080"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,672",
                    "Working Pressure (PSI) 25% of Burst": "2,668",
                    "Theoretical Yield Point ** (PSI)": "4,269",
                    "Collapse Pressure *** (PSI)": "3,504"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,921",
                    "Working Pressure (PSI) 25% of Burst": "2,980",
                    "Theoretical Yield Point ** (PSI)": "4,768",
                    "Collapse Pressure *** (PSI)": "3,832"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,563",
                    "Working Pressure (PSI) 25% of Burst": "3,391",
                    "Theoretical Yield Point ** (PSI)": "5,425",
                    "Collapse Pressure *** (PSI)": "4,242"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,268",
                    "Working Pressure (PSI) 25% of Burst": "3,817",
                    "Theoretical Yield Point ** (PSI)": "6,107",
                    "Collapse Pressure *** (PSI)": "4,645"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,430",
                    "Working Pressure (PSI) 25% of Burst": "4,357",
                    "Theoretical Yield Point ** (PSI)": "6,972",
                    "Collapse Pressure *** (PSI)": "5,124"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "2,720",
                    "Working Pressure (PSI) 25% of Burst": "680",
                    "Theoretical Yield Point ** (PSI)": "1,088",
                    "Collapse Pressure *** (PSI)": "1,032"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,214",
                    "Working Pressure (PSI) 25% of Burst": "1,303",
                    "Theoretical Yield Point ** (PSI)": "2,086",
                    "Collapse Pressure *** (PSI)": "1,887"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,788",
                    "Working Pressure (PSI) 25% of Burst": "1,697",
                    "Theoretical Yield Point ** (PSI)": "2,715",
                    "Collapse Pressure *** (PSI)": "2,387"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,873",
                    "Working Pressure (PSI) 25% of Burst": "1,968",
                    "Theoretical Yield Point ** (PSI)": "3,149",
                    "Collapse Pressure *** (PSI)": "2,715"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,175",
                    "Working Pressure (PSI) 25% of Burst": "2,294",
                    "Theoretical Yield Point ** (PSI)": "3,670",
                    "Collapse Pressure *** (PSI)": "3,092"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,227",
                    "Working Pressure (PSI) 25% of Burst": "2,557",
                    "Theoretical Yield Point ** (PSI)": "4,091",
                    "Collapse Pressure *** (PSI)": "3,384"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,605",
                    "Working Pressure (PSI) 25% of Burst": "2,901",
                    "Theoretical Yield Point ** (PSI)": "4,642",
                    "Collapse Pressure *** (PSI)": "3,751"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,028",
                    "Working Pressure (PSI) 25% of Burst": "3,257",
                    "Theoretical Yield Point ** (PSI)": "5,211",
                    "Collapse Pressure *** (PSI)": "4,111"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,820",
                    "Working Pressure (PSI) 25% of Burst": "3,705",
                    "Theoretical Yield Point ** (PSI)": "5,928",
                    "Collapse Pressure *** (PSI)": "4,542"
                  }
                ],
                "row_count": 87,
                "column_count": 8
              },
              {
                "title": "UNS S31603 Tube Dimensions",
                "slug": "uns-s31603-tube-dimensions",
                "columns": [
                  "Nominal",
                  "O.D. Inches",
                  "10s",
                  "10",
                  "40s & Std",
                  "40",
                  "80s & E.H.",
                  "80",
                  "160"
                ],
                "rows": [
                  [
                    "1/8",
                    ".405",
                    ".049",
                    ".049",
                    ".068",
                    ".068",
                    ".095",
                    ".095",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    ".065",
                    ".065",
                    ".088",
                    ".088",
                    ".119",
                    ".119",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    ".065",
                    ".065",
                    ".091",
                    ".091",
                    ".126",
                    ".126",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".083",
                    ".083",
                    ".109",
                    ".109",
                    ".147",
                    ".147",
                    ".187"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".083",
                    ".083",
                    ".113",
                    ".113",
                    ".154",
                    ".154",
                    ".218"
                  ],
                  [
                    "1",
                    "1.315",
                    ".109",
                    ".109",
                    ".133",
                    ".133",
                    ".179",
                    ".179",
                    ".250"
                  ],
                  [
                    "1 1/4",
                    "1.660",
                    ".109",
                    ".109",
                    ".140",
                    ".140",
                    ".191",
                    ".191",
                    ".250"
                  ],
                  [
                    "1 1/2",
                    "1.900",
                    ".109",
                    ".109",
                    ".145",
                    ".145",
                    ".200",
                    ".200",
                    ".281"
                  ],
                  [
                    "2",
                    "2.375",
                    ".109",
                    ".109",
                    ".154",
                    ".154",
                    ".218",
                    ".218",
                    ".343"
                  ],
                  [
                    "2 1/2",
                    "2.875",
                    ".120",
                    ".120",
                    ".203",
                    ".203",
                    ".276",
                    ".276",
                    ".375"
                  ],
                  [
                    "3",
                    "3.500",
                    ".120",
                    ".120",
                    ".216",
                    ".216",
                    ".300",
                    ".300",
                    ".437"
                  ],
                  [
                    "3 1/2",
                    "4.000",
                    ".120",
                    ".120",
                    ".226",
                    ".226",
                    ".318",
                    ".318",
                    ""
                  ],
                  [
                    "4",
                    "4.500",
                    ".120",
                    ".120",
                    ".237",
                    ".237",
                    ".337",
                    ".337",
                    ".531"
                  ],
                  [
                    "4 1/2",
                    "5.000",
                    "",
                    "",
                    ".247",
                    "",
                    ".355",
                    "",
                    ""
                  ],
                  [
                    "5",
                    "5.563",
                    ".134",
                    ".134",
                    ".258",
                    ".258",
                    ".375",
                    ".375",
                    ".625"
                  ],
                  [
                    "6",
                    "6.625",
                    ".134",
                    ".134",
                    ".280",
                    ".280",
                    ".432",
                    ".432",
                    ".718"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    ".301",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "8",
                    "8.625",
                    ".148",
                    ".148",
                    ".322",
                    ".322",
                    ".500",
                    ".500",
                    ".906"
                  ],
                  [
                    "9",
                    "9.625",
                    "",
                    "",
                    ".342",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "10",
                    "10.750",
                    ".165",
                    ".165",
                    ".365",
                    ".365",
                    ".500",
                    ".593",
                    "1.125"
                  ],
                  [
                    "11",
                    "11.750",
                    "",
                    "",
                    ".375",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "12",
                    "12.750",
                    ".180",
                    ".180",
                    ".375",
                    ".406",
                    ".500",
                    ".687",
                    "1.312"
                  ],
                  [
                    "14",
                    "14.000",
                    ".188",
                    ".250",
                    ".375",
                    ".437",
                    ".500",
                    ".750",
                    "1.406"
                  ],
                  [
                    "16",
                    "16.000",
                    ".188",
                    ".250",
                    ".375",
                    ".500",
                    ".500",
                    ".843",
                    "1.593"
                  ],
                  [
                    "18",
                    "18.000",
                    ".188",
                    ".250",
                    ".375",
                    ".562",
                    ".500",
                    ".937",
                    "1.781"
                  ]
                ],
                "records": [
                  {
                    "Nominal": "1/8",
                    "O.D. Inches": ".405",
                    "10s": ".049",
                    "10": ".049",
                    "40s & Std": ".068",
                    "40": ".068",
                    "80s & E.H.": ".095",
                    "80": ".095",
                    "160": ""
                  },
                  {
                    "Nominal": "1/4",
                    "O.D. Inches": ".540",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".088",
                    "40": ".088",
                    "80s & E.H.": ".119",
                    "80": ".119",
                    "160": ""
                  },
                  {
                    "Nominal": "3/8",
                    "O.D. Inches": ".675",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".091",
                    "40": ".091",
                    "80s & E.H.": ".126",
                    "80": ".126",
                    "160": ""
                  },
                  {
                    "Nominal": "1/2",
                    "O.D. Inches": ".840",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".109",
                    "40": ".109",
                    "80s & E.H.": ".147",
                    "80": ".147",
                    "160": ".187"
                  },
                  {
                    "Nominal": "3/4",
                    "O.D. Inches": "1.050",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".113",
                    "40": ".113",
                    "80s & E.H.": ".154",
                    "80": ".154",
                    "160": ".218"
                  },
                  {
                    "Nominal": "1",
                    "O.D. Inches": "1.315",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".133",
                    "40": ".133",
                    "80s & E.H.": ".179",
                    "80": ".179",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/4",
                    "O.D. Inches": "1.660",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".140",
                    "40": ".140",
                    "80s & E.H.": ".191",
                    "80": ".191",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/2",
                    "O.D. Inches": "1.900",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".145",
                    "40": ".145",
                    "80s & E.H.": ".200",
                    "80": ".200",
                    "160": ".281"
                  },
                  {
                    "Nominal": "2",
                    "O.D. Inches": "2.375",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".154",
                    "40": ".154",
                    "80s & E.H.": ".218",
                    "80": ".218",
                    "160": ".343"
                  },
                  {
                    "Nominal": "2 1/2",
                    "O.D. Inches": "2.875",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".203",
                    "40": ".203",
                    "80s & E.H.": ".276",
                    "80": ".276",
                    "160": ".375"
                  },
                  {
                    "Nominal": "3",
                    "O.D. Inches": "3.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".216",
                    "40": ".216",
                    "80s & E.H.": ".300",
                    "80": ".300",
                    "160": ".437"
                  },
                  {
                    "Nominal": "3 1/2",
                    "O.D. Inches": "4.000",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".226",
                    "40": ".226",
                    "80s & E.H.": ".318",
                    "80": ".318",
                    "160": ""
                  },
                  {
                    "Nominal": "4",
                    "O.D. Inches": "4.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".237",
                    "40": ".237",
                    "80s & E.H.": ".337",
                    "80": ".337",
                    "160": ".531"
                  },
                  {
                    "Nominal": "4 1/2",
                    "O.D. Inches": "5.000",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".247",
                    "40": "",
                    "80s & E.H.": ".355",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "5",
                    "O.D. Inches": "5.563",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".258",
                    "40": ".258",
                    "80s & E.H.": ".375",
                    "80": ".375",
                    "160": ".625"
                  },
                  {
                    "Nominal": "6",
                    "O.D. Inches": "6.625",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".280",
                    "40": ".280",
                    "80s & E.H.": ".432",
                    "80": ".432",
                    "160": ".718"
                  },
                  {
                    "Nominal": "7",
                    "O.D. Inches": "7.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".301",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "8",
                    "O.D. Inches": "8.625",
                    "10s": ".148",
                    "10": ".148",
                    "40s & Std": ".322",
                    "40": ".322",
                    "80s & E.H.": ".500",
                    "80": ".500",
                    "160": ".906"
                  },
                  {
                    "Nominal": "9",
                    "O.D. Inches": "9.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".342",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "10",
                    "O.D. Inches": "10.750",
                    "10s": ".165",
                    "10": ".165",
                    "40s & Std": ".365",
                    "40": ".365",
                    "80s & E.H.": ".500",
                    "80": ".593",
                    "160": "1.125"
                  },
                  {
                    "Nominal": "11",
                    "O.D. Inches": "11.750",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".375",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "12",
                    "O.D. Inches": "12.750",
                    "10s": ".180",
                    "10": ".180",
                    "40s & Std": ".375",
                    "40": ".406",
                    "80s & E.H.": ".500",
                    "80": ".687",
                    "160": "1.312"
                  },
                  {
                    "Nominal": "14",
                    "O.D. Inches": "14.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".437",
                    "80s & E.H.": ".500",
                    "80": ".750",
                    "160": "1.406"
                  },
                  {
                    "Nominal": "16",
                    "O.D. Inches": "16.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".500",
                    "80s & E.H.": ".500",
                    "80": ".843",
                    "160": "1.593"
                  },
                  {
                    "Nominal": "18",
                    "O.D. Inches": "18.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".562",
                    "80s & E.H.": ".500",
                    "80": ".937",
                    "160": "1.781"
                  }
                ],
                "row_count": 25,
                "column_count": 9
              },
              {
                "title": "Chemical Composition WNR 1.4404 Tubing & Pipe",
                "slug": "chemical-composition-wnr-1-4404-tubing-pipe",
                "columns": [
                  "Grade",
                  "C",
                  "Mn",
                  "Si",
                  "P",
                  "S",
                  "Cr",
                  "Mo",
                  "Ni",
                  "Fe"
                ],
                "rows": [
                  [
                    "SS 316L",
                    "0.035 max",
                    "2.0 max",
                    "1.0 max",
                    "0.045 max",
                    "0.030 max",
                    "16.00 - 18.00",
                    "2.00 - 3.00",
                    "10.00 - 14.00",
                    "68.89 min"
                  ]
                ],
                "records": [
                  {
                    "Grade": "SS 316L",
                    "C": "0.035 max",
                    "Mn": "2.0 max",
                    "Si": "1.0 max",
                    "P": "0.045 max",
                    "S": "0.030 max",
                    "Cr": "16.00 - 18.00",
                    "Mo": "2.00 - 3.00",
                    "Ni": "10.00 - 14.00",
                    "Fe": "68.89 min"
                  }
                ],
                "row_count": 1,
                "column_count": 10
              },
              {
                "title": "316L Stainless Steel Pipe & Tube Mechanical Analysis",
                "slug": "316l-stainless-steel-pipe-tube-mechanical-analysis",
                "columns": [
                  "Density",
                  "Melting Point",
                  "Tensile Strength",
                  "Yield Strength (0.2%Offset)",
                  "Elongation"
                ],
                "rows": [
                  [
                    "8.0 g/cm3",
                    "1399 °C (2550 °F)",
                    "Psi - 75000 , MPa - 515",
                    "Psi - 30000 , MPa - 205",
                    "35 %"
                  ]
                ],
                "records": [
                  {
                    "Density": "8.0 g/cm3",
                    "Melting Point": "1399 °C (2550 °F)",
                    "Tensile Strength": "Psi - 75000 , MPa - 515",
                    "Yield Strength (0.2%Offset)": "Psi - 30000 , MPa - 205",
                    "Elongation": "35 %"
                  }
                ],
                "row_count": 1,
                "column_count": 5
              },
              {
                "title": "Equivalent Material of SUS 316L ERW Pipe",
                "slug": "equivalent-material-of-sus-316l-erw-pipe",
                "columns": [
                  "STANDARD",
                  "WERKSTOFF NR.",
                  "UNS",
                  "JIS",
                  "BS",
                  "GOST",
                  "AFNOR",
                  "EN"
                ],
                "rows": [
                  [
                    "SS 316L",
                    "1.4404 / 1.4435",
                    "S31603",
                    "SUS 316L",
                    "316S11 / 316S13",
                    "03Ch17N14M3 / 03Ch17N14M2",
                    "Z3CND17-11-02 / Z3CND18-14-03",
                    "X2CrNiMo17-12-2 / X2CrNiMo18-14-3"
                  ]
                ],
                "records": [
                  {
                    "STANDARD": "SS 316L",
                    "WERKSTOFF NR.": "1.4404 / 1.4435",
                    "UNS": "S31603",
                    "JIS": "SUS 316L",
                    "BS": "316S11 / 316S13",
                    "GOST": "03Ch17N14M3 / 03Ch17N14M2",
                    "AFNOR": "Z3CND17-11-02 / Z3CND18-14-03",
                    "EN": "X2CrNiMo17-12-2 / X2CrNiMo18-14-3"
                  }
                ],
                "row_count": 1,
                "column_count": 8
              },
              {
                "title": "ASTM A312 TP316L Pipe Sizes",
                "slug": "astm-a312-tp316l-pipe-sizes",
                "columns": [
                  "Wall",
                  "Sizes ( O.D.)"
                ],
                "rows": [
                  [
                    ".010",
                    "1/16\" , 1/8\" , 3/16\""
                  ],
                  [
                    ".020",
                    "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  ],
                  [
                    ".012",
                    "1/8\""
                  ],
                  [
                    ".016",
                    "1/8\" , 3/16\""
                  ],
                  [
                    ".028",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".035",
                    "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".049",
                    "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  ],
                  [
                    ".065",
                    "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".083",
                    "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  ],
                  [
                    ".095",
                    "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".109",
                    "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  ],
                  [
                    ".120",
                    "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  ],
                  [
                    ".125",
                    "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  ],
                  [
                    ".134",
                    "1\""
                  ],
                  [
                    ".250",
                    "3\""
                  ],
                  [
                    ".375",
                    "3 1/2\""
                  ]
                ],
                "records": [
                  {
                    "Wall": ".010",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".020",
                    "Sizes ( O.D.)": "1/16\" , 1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\""
                  },
                  {
                    "Wall": ".012",
                    "Sizes ( O.D.)": "1/8\""
                  },
                  {
                    "Wall": ".016",
                    "Sizes ( O.D.)": "1/8\" , 3/16\""
                  },
                  {
                    "Wall": ".028",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 3/4\" , 1\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".035",
                    "Sizes ( O.D.)": "1/8\" , 3/16\" , 1/4\" , 5/16\" , 3/8\" , 7/16\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".049",
                    "Sizes ( O.D.)": "3/16\" , 1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/8\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 2\" , 2 1/4\""
                  },
                  {
                    "Wall": ".065",
                    "Sizes ( O.D.)": "1/4\" , 5/16\" , 3/8\" , 1/2\" , 16\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 3/4\" , 2\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".083",
                    "Sizes ( O.D.)": "1/4\" , 3/8\" , 1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 1 5/8\" , 1 7/8\" , 2\" , 2 1/2\" ,3\""
                  },
                  {
                    "Wall": ".095",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".109",
                    "Sizes ( O.D.)": "1/2\" , 3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\""
                  },
                  {
                    "Wall": ".120",
                    "Sizes ( O.D.)": "1/2\" , 5/8\" , 3/4\" , 7/8\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 2 1/4\" , 2 1/2\" , 3\""
                  },
                  {
                    "Wall": ".125",
                    "Sizes ( O.D.)": "3/4\" , 1\" , 1 1/4\" , 1 1/2\" , 2\" , 3\" , 3 1/4\""
                  },
                  {
                    "Wall": ".134",
                    "Sizes ( O.D.)": "1\""
                  },
                  {
                    "Wall": ".250",
                    "Sizes ( O.D.)": "3\""
                  },
                  {
                    "Wall": ".375",
                    "Sizes ( O.D.)": "3 1/2\""
                  }
                ],
                "row_count": 16,
                "column_count": 2
              },
              {
                "title": "Stainless Steel 316L Welded Pipe Diameter Tolerance",
                "slug": "stainless-steel-316l-welded-pipe-diameter-tolerance",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance"
                  ],
                  [
                    "NPS",
                    "+",
                    "+",
                    "–",
                    "–"
                  ],
                  [
                    "NPS",
                    "inch",
                    "mm",
                    "inch",
                    "mm"
                  ],
                  [
                    "1/8~1 1 /2",
                    "1/64(0.015)",
                    "0.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 1 1 /2~4",
                    "1/32(0.031)",
                    "0.8",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 4~8",
                    "1/16(0.062)",
                    "1.6",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 8~18",
                    "3/32(0.093)",
                    "2.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 18~26",
                    "1/8(0.125)",
                    "3.2",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 26~34",
                    "5/32(0.156)",
                    "4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 34~48",
                    "3/16(0.187)",
                    "4.8",
                    "1/32(0.031)",
                    "0.8"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 OD Tolerance",
                    "col_3": "ASTM A312 OD Tolerance",
                    "col_4": "ASTM A312 OD Tolerance",
                    "col_5": "ASTM A312 OD Tolerance"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "+",
                    "col_4": "–",
                    "col_5": "–"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "inch",
                    "col_3": "mm",
                    "col_4": "inch",
                    "col_5": "mm"
                  },
                  {
                    "col_1": "1/8~1 1 /2",
                    "col_2": "1/64(0.015)",
                    "col_3": "0.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 1 1 /2~4",
                    "col_2": "1/32(0.031)",
                    "col_3": "0.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 4~8",
                    "col_2": "1/16(0.062)",
                    "col_3": "1.6",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 8~18",
                    "col_2": "3/32(0.093)",
                    "col_3": "2.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 18~26",
                    "col_2": "1/8(0.125)",
                    "col_3": "3.2",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 26~34",
                    "col_2": "5/32(0.156)",
                    "col_3": "4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 34~48",
                    "col_2": "3/16(0.187)",
                    "col_3": "4.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  }
                ],
                "row_count": 10,
                "column_count": 5
              },
              {
                "title": "Wall Thickness Tolerance of SUS 316L Pipe/ Tube",
                "slug": "wall-thickness-tolerance-of-sus-316l-pipe-tube",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 WT Tolerance, %",
                    "ASTM A312 WT Tolerance, %"
                  ],
                  [
                    "NPS",
                    "+",
                    "–"
                  ],
                  [
                    "1/8-2 1 /2",
                    "20",
                    "12.5"
                  ],
                  [
                    "3~18, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "3~18, t/D> 5%",
                    "15",
                    "12.5"
                  ],
                  [
                    "≥ 20, welded",
                    "17.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D> 5%",
                    "15",
                    "12.5"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 WT Tolerance, %",
                    "col_3": "ASTM A312 WT Tolerance, %"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "–"
                  },
                  {
                    "col_1": "1/8-2 1 /2",
                    "col_2": "20",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, welded",
                    "col_2": "17.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  }
                ],
                "row_count": 8,
                "column_count": 3
              },
              {
                "title": "We Supplied Following Material",
                "slug": "we-supplied-following-material",
                "columns": [
                  "col_1",
                  "col_2"
                ],
                "rows": [
                  [
                    "stainless steel pipe 316l schedule 40",
                    "Romania, Malaysia, Europe, Japan"
                  ],
                  [
                    "stainless steel pipe 316l schedule 10s",
                    "Malaysia, China, Sweden, Colombia"
                  ],
                  [
                    "SCH 10 40 80 SS UNS S31603 Pipes",
                    "Spain, Egypt, UK, Mexico"
                  ],
                  [
                    "SS DIN 1.4436 Square Pipe",
                    "Malaysia, UAE, United Kingdom -UK, Europe"
                  ],
                  [
                    "316L SS Hexagonal Pipe",
                    "Poland, Ellington -United States, UK, Canada"
                  ],
                  [
                    "2 Inch 316L stainless steel tube",
                    "Singapore, Bahrain, South Africa"
                  ],
                  [
                    "316L mirror polished stainless steel pipe",
                    "UK, Nigeria, Philippines, Australia"
                  ],
                  [
                    "316L Bright Annealed Tube Stainless Steel For Instrumentation",
                    "Hong Kong, UAE, Oman, Malaysia"
                  ],
                  [
                    "316L 42mm Inox Round Section Tube",
                    "Iran, Singapore, Chile, Italy"
                  ],
                  [
                    "Dia 1.0mm thick 0.2mm 316L grade BA stainless steel capillary tube",
                    "Norway, Malaysia, United Arab Emirates (UAE), Turkey"
                  ],
                  [
                    "Round Stainless Steel 316L Tube 5/16\"",
                    "Netherlands, Dubai, Russia, Malaysia"
                  ],
                  [
                    "ASTM A358 TP316L Coil Tubing",
                    "Indonesia, Belgium, Dammam -KSA, Philippines"
                  ],
                  [
                    "Type 316L Stainless Steel Polished Pipes",
                    "Qatar, Europe, Thailand, France,"
                  ],
                  [
                    "Uns S31603 Thin Wall Tubing",
                    "NY 12203 (USA), Malaysia, Singapore, South Korea"
                  ],
                  [
                    "1.4435 Stainless Steel Welded Pipes",
                    "Canada, Singapore, Philippines, Malaysia"
                  ],
                  [
                    "Bright Annealed Stainless Steel ASTM A312 tp316L Pipe",
                    "Germany, Czechia Thailand, Malaysia"
                  ],
                  [
                    "Stainless Steel hollow pipes 316L grade",
                    "Bangladesh, USA, Malaysia, Finland"
                  ],
                  [
                    "316L Stainless Steel schedule 40 pipes",
                    "Los Alamos -Mexico, Philippines, Malaysia, Taiwan"
                  ],
                  [
                    "ASTM A312 tp316L Corrugated Pipes",
                    "South Africa, Kuwait, Saudi Arabia (KSA), Brazil"
                  ]
                ],
                "records": [
                  {
                    "col_1": "stainless steel pipe 316l schedule 40",
                    "col_2": "Romania, Malaysia, Europe, Japan"
                  },
                  {
                    "col_1": "stainless steel pipe 316l schedule 10s",
                    "col_2": "Malaysia, China, Sweden, Colombia"
                  },
                  {
                    "col_1": "SCH 10 40 80 SS UNS S31603 Pipes",
                    "col_2": "Spain, Egypt, UK, Mexico"
                  },
                  {
                    "col_1": "SS DIN 1.4436 Square Pipe",
                    "col_2": "Malaysia, UAE, United Kingdom -UK, Europe"
                  },
                  {
                    "col_1": "316L SS Hexagonal Pipe",
                    "col_2": "Poland, Ellington -United States, UK, Canada"
                  },
                  {
                    "col_1": "2 Inch 316L stainless steel tube",
                    "col_2": "Singapore, Bahrain, South Africa"
                  },
                  {
                    "col_1": "316L mirror polished stainless steel pipe",
                    "col_2": "UK, Nigeria, Philippines, Australia"
                  },
                  {
                    "col_1": "316L Bright Annealed Tube Stainless Steel For Instrumentation",
                    "col_2": "Hong Kong, UAE, Oman, Malaysia"
                  },
                  {
                    "col_1": "316L 42mm Inox Round Section Tube",
                    "col_2": "Iran, Singapore, Chile, Italy"
                  },
                  {
                    "col_1": "Dia 1.0mm thick 0.2mm 316L grade BA stainless steel capillary tube",
                    "col_2": "Norway, Malaysia, United Arab Emirates (UAE), Turkey"
                  },
                  {
                    "col_1": "Round Stainless Steel 316L Tube 5/16\"",
                    "col_2": "Netherlands, Dubai, Russia, Malaysia"
                  },
                  {
                    "col_1": "ASTM A358 TP316L Coil Tubing",
                    "col_2": "Indonesia, Belgium, Dammam -KSA, Philippines"
                  },
                  {
                    "col_1": "Type 316L Stainless Steel Polished Pipes",
                    "col_2": "Qatar, Europe, Thailand, France,"
                  },
                  {
                    "col_1": "Uns S31603 Thin Wall Tubing",
                    "col_2": "NY 12203 (USA), Malaysia, Singapore, South Korea"
                  },
                  {
                    "col_1": "1.4435 Stainless Steel Welded Pipes",
                    "col_2": "Canada, Singapore, Philippines, Malaysia"
                  },
                  {
                    "col_1": "Bright Annealed Stainless Steel ASTM A312 tp316L Pipe",
                    "col_2": "Germany, Czechia Thailand, Malaysia"
                  },
                  {
                    "col_1": "Stainless Steel hollow pipes 316L grade",
                    "col_2": "Bangladesh, USA, Malaysia, Finland"
                  },
                  {
                    "col_1": "316L Stainless Steel schedule 40 pipes",
                    "col_2": "Los Alamos -Mexico, Philippines, Malaysia, Taiwan"
                  },
                  {
                    "col_1": "ASTM A312 tp316L Corrugated Pipes",
                    "col_2": "South Africa, Kuwait, Saudi Arabia (KSA), Brazil"
                  }
                ],
                "row_count": 19,
                "column_count": 2
              }
            ],
          },
          {
            slug: "stainless-steel-321-pipe",
            name: "Stainless Steel 321 Pipe",
            icon: "pipe",
            description: "Titanium-stabilised grade for sustained service above 425°C, where 304/316 would sensitise.",
            grades: ["Stainless Steel"],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            "table_of_contents": [
              {
                "label": "Spec Table of Stainless Steel 321 Pipe",
                "anchor": "1"
              },
              {
                "label": "321 Stainless Steel Pipe Price",
                "anchor": "2"
              },
              {
                "label": "Weight Chart of EN 1.4541 Welded Pipe/ Tube",
                "anchor": "3"
              },
              {
                "label": "Pressure Rating of 321 stainless steel Tube/ Pipe",
                "anchor": "4"
              },
              {
                "label": "Available W. Nr. 1.4541 Pipe/ Tube Types",
                "anchor": "5"
              },
              {
                "label": "UNS S32100 Pipes & Tubes Chemical Properties",
                "anchor": "6"
              },
              {
                "label": "Mechanical Characteristics of AISI 321/ 321H SS Pipe and Tube",
                "anchor": "7"
              },
              {
                "label": "Equivalent of SS 321/ 321H Tubing & Pipe",
                "anchor": "8"
              },
              {
                "label": "Dimension Table of AISI 321H Tube",
                "anchor": "9"
              },
              {
                "label": "321H SS Seamless Tubes Diameter Tolerance",
                "anchor": "10"
              },
              {
                "label": "Wall Thickness Tolerance of Type 321 Stainless Steel Pipe/ Tubing",
                "anchor": "11"
              }
            ],
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS S32100" },
              { label: "Composition", value: "Titanium-stabilised austenitic stainless" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "High-temperature piping above 425°C, aerospace and exhaust systems" },
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.08", "2.00", "0.75", "0.045", "0.030", "17.0-19.0", "9.0-12.0", "—", "Ti ≥ 5×C"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["S32100", "1.4541", "SUS 321", "X6CrNiTi18-10"]],
              },
              {
                "title": "Spec Table of Stainless Steel 321 Pipe",
                "slug": "spec-table-of-stainless-steel-321-pipe",
                "columns": [
                  "ASTM / ASME Standards",
                  "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312"
                ],
                "rows": [
                  [
                    "Pipe Form",
                    "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  ],
                  [
                    "Pipe/ Tube Length",
                    "Single Random, Double Random & Cut Length."
                  ],
                  [
                    "Pipe/ Tube Schedule",
                    "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  ],
                  [
                    "Pipe Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "EFW Pipe size",
                    "5.0 mm - 1219.2 mm"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded."
                  ],
                  [
                    "Welded Tube Size",
                    "6.35 mm OD To 152 mm OD"
                  ],
                  [
                    "Swg & Bwg",
                    "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  ],
                  [
                    "Marking",
                    "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Material Test Certificates (MTC)",
                    "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  ],
                  [
                    "Tubing wall thickness",
                    "0.020\" –0.220\", (special wall thicknesses available)"
                  ],
                  [
                    "Tube Length",
                    "Single Random, Double Random, Standard & Cut length"
                  ],
                  [
                    "End",
                    "Plain End, Beveled End, Treaded"
                  ],
                  [
                    "Marking",
                    "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  ],
                  [
                    "Tube Type",
                    "Seamless, ERW, EFW, Welded, Fabricated"
                  ],
                  [
                    "Finish",
                    "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  ],
                  [
                    "Tube Form",
                    "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  ],
                  [
                    "Application",
                    "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  ]
                ],
                "records": [
                  {
                    "ASTM / ASME Standards": "Pipe Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Square, Hollow, Rectangular, Hydraulic, Straight Pipes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random & Cut Length."
                  },
                  {
                    "ASTM / ASME Standards": "Pipe/ Tube Schedule",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "SCH5, SCH10, SCH40, STD, SCH80, SCH160"
                  },
                  {
                    "ASTM / ASME Standards": "Pipe Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "EFW Pipe size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "5.0 mm - 1219.2 mm"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded."
                  },
                  {
                    "ASTM / ASME Standards": "Welded Tube Size",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "6.35 mm OD To 152 mm OD"
                  },
                  {
                    "ASTM / ASME Standards": "Swg & Bwg",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "10 Swg., 12 Swg., 14 Swg., 16 Swg., 18 Swg., 20 Swg."
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All Pipes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Material Test Certificates (MTC)",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Material Test Certificates (MTC) as per EN 10204 3.1 and EN 10204 3.2"
                  },
                  {
                    "ASTM / ASME Standards": "Tubing wall thickness",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "0.020\" –0.220\", (special wall thicknesses available)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Length",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Single Random, Double Random, Standard & Cut length"
                  },
                  {
                    "ASTM / ASME Standards": "End",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Plain End, Beveled End, Treaded"
                  },
                  {
                    "ASTM / ASME Standards": "Marking",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "All tubes are marked as follows: Standard, Grade, OD, Thickness, Length, Heat No. (Or according to the customer’s request.)"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Type",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Seamless, ERW, EFW, Welded, Fabricated"
                  },
                  {
                    "ASTM / ASME Standards": "Finish",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Polished, AP (Annealed & Pickled), BA (Bright & Annealed), MF"
                  },
                  {
                    "ASTM / ASME Standards": "Tube Form",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Round, Coil, Square, Rectangular, Boiler, Hydraulic, Straight or ‘U’ bent Tubes, Hollow, LSAW Tubes Etc."
                  },
                  {
                    "ASTM / ASME Standards": "Application",
                    "ASTM A269 / ASME SA269 ASTM A312 / ASME SA312": "Oil Tube, Gas Tube, Fluid Tube, Boiler and Heat exchanger"
                  }
                ],
                "row_count": 18,
                "column_count": 2
              },
              {
                "title": "321 Stainless Steel Pipe Price",
                "slug": "321-stainless-steel-pipe-price",
                "columns": [
                  "Price list of Stainless Steel 321 Pipe",
                  "ASTM A312 TP 321H Pipe Price in INR",
                  "ASTM A312 TP 321H Pipe Price in USD",
                  "ASTM A312 TP 321H Pipe Price in UAE Dirham"
                ],
                "rows": [
                  [
                    "Sch 40 SS 321H Pipe",
                    "INR 421",
                    "4.53 USD",
                    "21.72 UAE Dirham"
                  ]
                ],
                "records": [
                  {
                    "Price list of Stainless Steel 321 Pipe": "Sch 40 SS 321H Pipe",
                    "ASTM A312 TP 321H Pipe Price in INR": "INR 421",
                    "ASTM A312 TP 321H Pipe Price in USD": "4.53 USD",
                    "ASTM A312 TP 321H Pipe Price in UAE Dirham": "21.72 UAE Dirham"
                  }
                ],
                "row_count": 1,
                "column_count": 4
              },
              {
                "title": "Weight Chart of EN 1.4541 Welded Pipe/ Tube",
                "slug": "weight-chart-of-en-1-4541-welded-pipe-tube",
                "columns": [
                  "PIPE SIZE",
                  "OD IN INCHES",
                  "A.S.A. Pipe Schedules",
                  "A.S.A. Pipe Schedules_2",
                  "A.S.A. Pipe Schedules_3",
                  "A.S.A. Pipe Schedules_4",
                  "A.S.A. Pipe Schedules_5",
                  "A.S.A. Pipe Schedules_6",
                  "A.S.A. Pipe Schedules_7",
                  "A.S.A. Pipe Schedules_8",
                  "A.S.A. Pipe Schedules_9",
                  "A.S.A. Pipe Schedules_10",
                  "A.S.A. Pipe Schedules_11",
                  "A.S.A. Pipe Schedules_12"
                ],
                "rows": [
                  [
                    "PIPE SIZE",
                    "OD IN INCHES",
                    "5s",
                    "5",
                    "10s",
                    "10",
                    "40s & Std.",
                    "40",
                    "60",
                    "80s & E.H.",
                    "80",
                    "120",
                    "160",
                    "DBL E.H."
                  ],
                  [
                    "1/8",
                    ".405",
                    "",
                    ".035.1383",
                    ".049.1863",
                    ".049.1863",
                    ".068.2447",
                    "068.2447",
                    "",
                    "0.95.3145",
                    "0.95.3145",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    "",
                    ".049.2570",
                    ".065.3297",
                    ".065.3297",
                    ".088.4248",
                    "088.4248",
                    "",
                    ".119.5351",
                    ".119.5351",
                    "",
                    "",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    "",
                    ".049.3276",
                    ".065.4235",
                    ".065.4235",
                    ".091.5676",
                    ".091.5676",
                    "",
                    ".126.7338",
                    ".126.7338",
                    "",
                    "",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".065.5383",
                    ".065.5383",
                    ".083.6710",
                    ".083.6710",
                    ".109.8510",
                    ".109.8510",
                    "",
                    ".1471.088",
                    ".1471.088",
                    "",
                    ".1871.304",
                    ".2941.714"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".065.6838",
                    ".065.6838",
                    ".083.8572",
                    ".083.8572",
                    ".1131.131",
                    ".1131.131",
                    "",
                    ".1541.474",
                    ".1541.474",
                    "",
                    ".2181.937",
                    ".3082.441"
                  ],
                  [
                    "1",
                    "1.315",
                    ".065.8678",
                    ".065.8678",
                    ".1091.404",
                    ".1091.404",
                    ".1331.679",
                    ".1331.679",
                    "",
                    ".1792.172",
                    ".1792.172",
                    "",
                    ".2502.844",
                    ".3583.659"
                  ],
                  [
                    "1-1/4",
                    "1.660",
                    ".0651.107",
                    ".0651.107",
                    ".1091.806",
                    ".1091.806",
                    ".1402.273",
                    ".1402.273",
                    "",
                    ".1912.997",
                    ".1912.997",
                    "",
                    ".2503.765",
                    ".3825.214"
                  ],
                  [
                    "1-1/2",
                    "1.900",
                    ".0651.274",
                    ".0651.274",
                    ".1092.085",
                    ".1092.085",
                    ".1452.718",
                    ".1452.718",
                    "",
                    ".2003.631",
                    ".2003.631",
                    "",
                    ".2814.859",
                    ".4006.408"
                  ],
                  [
                    "2",
                    "2.375",
                    ".0651.604",
                    ".0651.604",
                    ".1092.638",
                    ".1092.638",
                    ".1543.653",
                    ".1543.653",
                    "",
                    ".2185.022",
                    ".2185.022",
                    "",
                    ".3437.444",
                    ".4369.029"
                  ],
                  [
                    "2-1/2",
                    "2.875",
                    ".0832.475",
                    ".0832.475",
                    ".1203.531",
                    ".1203.531",
                    ".2035.793",
                    ".2035.793",
                    "",
                    ".2767.661",
                    ".2767.661",
                    "",
                    ".37510.01",
                    ".55213.70"
                  ],
                  [
                    "3",
                    "3.500",
                    ".0833.029",
                    ".0833.029",
                    ".1204.332",
                    ".1204.332",
                    ".2167.576",
                    ".2167.576",
                    "",
                    ".30010.25",
                    ".30010.25",
                    "",
                    ".43714.32",
                    ".60018.58"
                  ],
                  [
                    "3-1/2",
                    "4.000",
                    ".0833.472",
                    ".0833.472",
                    ".1204.973",
                    ".1204.973",
                    ".2269.109",
                    ".2269.109",
                    "",
                    ".31812.51",
                    ".31812.51",
                    "",
                    "",
                    ".63622.85"
                  ],
                  [
                    "4",
                    "4.500",
                    ".0833.915",
                    ".0833.915",
                    ".1205.613",
                    ".1205.613",
                    ".23710.79",
                    ".23710.79",
                    ".28112.66",
                    ".33714.98",
                    ".33714.98",
                    ".43719.01",
                    ".53122.51",
                    ".67427.54"
                  ],
                  [
                    "4-1/2",
                    "5.000",
                    "",
                    "",
                    "",
                    "",
                    ".24712.53",
                    "",
                    "",
                    ".35517.61",
                    "",
                    "",
                    "",
                    ".71032.53"
                  ],
                  [
                    "5",
                    "5.563",
                    ".1096.349",
                    ".1096.349",
                    ".1347.770",
                    ".1347.770",
                    ".25814.62",
                    ".25814.62",
                    "",
                    ".37520.78",
                    ".37520.78",
                    ".50027.04",
                    ".62532.96",
                    ".75038.55"
                  ],
                  [
                    "6",
                    "6.625",
                    ".1097.585",
                    ".1097.585",
                    ".1349.290",
                    ".1349.290",
                    ".28018.97",
                    ".28018.97",
                    "",
                    ".43228.57",
                    ".43228.57",
                    ".56236.39",
                    ".71845.30",
                    ".86453.16"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    "",
                    "",
                    ".30123.57",
                    "",
                    "",
                    ".50038.05",
                    "",
                    "",
                    "",
                    ".87563.08"
                  ],
                  [
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  ]
                ],
                "records": [
                  {
                    "PIPE SIZE": "PIPE SIZE",
                    "OD IN INCHES": "OD IN INCHES",
                    "A.S.A. Pipe Schedules": "5s",
                    "A.S.A. Pipe Schedules_2": "5",
                    "A.S.A. Pipe Schedules_3": "10s",
                    "A.S.A. Pipe Schedules_4": "10",
                    "A.S.A. Pipe Schedules_5": "40s & Std.",
                    "A.S.A. Pipe Schedules_6": "40",
                    "A.S.A. Pipe Schedules_7": "60",
                    "A.S.A. Pipe Schedules_8": "80s & E.H.",
                    "A.S.A. Pipe Schedules_9": "80",
                    "A.S.A. Pipe Schedules_10": "120",
                    "A.S.A. Pipe Schedules_11": "160",
                    "A.S.A. Pipe Schedules_12": "DBL E.H."
                  },
                  {
                    "PIPE SIZE": "1/8",
                    "OD IN INCHES": ".405",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".035.1383",
                    "A.S.A. Pipe Schedules_3": ".049.1863",
                    "A.S.A. Pipe Schedules_4": ".049.1863",
                    "A.S.A. Pipe Schedules_5": ".068.2447",
                    "A.S.A. Pipe Schedules_6": "068.2447",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": "0.95.3145",
                    "A.S.A. Pipe Schedules_9": "0.95.3145",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/4",
                    "OD IN INCHES": ".540",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.2570",
                    "A.S.A. Pipe Schedules_3": ".065.3297",
                    "A.S.A. Pipe Schedules_4": ".065.3297",
                    "A.S.A. Pipe Schedules_5": ".088.4248",
                    "A.S.A. Pipe Schedules_6": "088.4248",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".119.5351",
                    "A.S.A. Pipe Schedules_9": ".119.5351",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "3/8",
                    "OD IN INCHES": ".675",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": ".049.3276",
                    "A.S.A. Pipe Schedules_3": ".065.4235",
                    "A.S.A. Pipe Schedules_4": ".065.4235",
                    "A.S.A. Pipe Schedules_5": ".091.5676",
                    "A.S.A. Pipe Schedules_6": ".091.5676",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".126.7338",
                    "A.S.A. Pipe Schedules_9": ".126.7338",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ""
                  },
                  {
                    "PIPE SIZE": "1/2",
                    "OD IN INCHES": ".840",
                    "A.S.A. Pipe Schedules": ".065.5383",
                    "A.S.A. Pipe Schedules_2": ".065.5383",
                    "A.S.A. Pipe Schedules_3": ".083.6710",
                    "A.S.A. Pipe Schedules_4": ".083.6710",
                    "A.S.A. Pipe Schedules_5": ".109.8510",
                    "A.S.A. Pipe Schedules_6": ".109.8510",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1471.088",
                    "A.S.A. Pipe Schedules_9": ".1471.088",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".1871.304",
                    "A.S.A. Pipe Schedules_12": ".2941.714"
                  },
                  {
                    "PIPE SIZE": "3/4",
                    "OD IN INCHES": "1.050",
                    "A.S.A. Pipe Schedules": ".065.6838",
                    "A.S.A. Pipe Schedules_2": ".065.6838",
                    "A.S.A. Pipe Schedules_3": ".083.8572",
                    "A.S.A. Pipe Schedules_4": ".083.8572",
                    "A.S.A. Pipe Schedules_5": ".1131.131",
                    "A.S.A. Pipe Schedules_6": ".1131.131",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1541.474",
                    "A.S.A. Pipe Schedules_9": ".1541.474",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2181.937",
                    "A.S.A. Pipe Schedules_12": ".3082.441"
                  },
                  {
                    "PIPE SIZE": "1",
                    "OD IN INCHES": "1.315",
                    "A.S.A. Pipe Schedules": ".065.8678",
                    "A.S.A. Pipe Schedules_2": ".065.8678",
                    "A.S.A. Pipe Schedules_3": ".1091.404",
                    "A.S.A. Pipe Schedules_4": ".1091.404",
                    "A.S.A. Pipe Schedules_5": ".1331.679",
                    "A.S.A. Pipe Schedules_6": ".1331.679",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1792.172",
                    "A.S.A. Pipe Schedules_9": ".1792.172",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2502.844",
                    "A.S.A. Pipe Schedules_12": ".3583.659"
                  },
                  {
                    "PIPE SIZE": "1-1/4",
                    "OD IN INCHES": "1.660",
                    "A.S.A. Pipe Schedules": ".0651.107",
                    "A.S.A. Pipe Schedules_2": ".0651.107",
                    "A.S.A. Pipe Schedules_3": ".1091.806",
                    "A.S.A. Pipe Schedules_4": ".1091.806",
                    "A.S.A. Pipe Schedules_5": ".1402.273",
                    "A.S.A. Pipe Schedules_6": ".1402.273",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".1912.997",
                    "A.S.A. Pipe Schedules_9": ".1912.997",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2503.765",
                    "A.S.A. Pipe Schedules_12": ".3825.214"
                  },
                  {
                    "PIPE SIZE": "1-1/2",
                    "OD IN INCHES": "1.900",
                    "A.S.A. Pipe Schedules": ".0651.274",
                    "A.S.A. Pipe Schedules_2": ".0651.274",
                    "A.S.A. Pipe Schedules_3": ".1092.085",
                    "A.S.A. Pipe Schedules_4": ".1092.085",
                    "A.S.A. Pipe Schedules_5": ".1452.718",
                    "A.S.A. Pipe Schedules_6": ".1452.718",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2003.631",
                    "A.S.A. Pipe Schedules_9": ".2003.631",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".2814.859",
                    "A.S.A. Pipe Schedules_12": ".4006.408"
                  },
                  {
                    "PIPE SIZE": "2",
                    "OD IN INCHES": "2.375",
                    "A.S.A. Pipe Schedules": ".0651.604",
                    "A.S.A. Pipe Schedules_2": ".0651.604",
                    "A.S.A. Pipe Schedules_3": ".1092.638",
                    "A.S.A. Pipe Schedules_4": ".1092.638",
                    "A.S.A. Pipe Schedules_5": ".1543.653",
                    "A.S.A. Pipe Schedules_6": ".1543.653",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2185.022",
                    "A.S.A. Pipe Schedules_9": ".2185.022",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".3437.444",
                    "A.S.A. Pipe Schedules_12": ".4369.029"
                  },
                  {
                    "PIPE SIZE": "2-1/2",
                    "OD IN INCHES": "2.875",
                    "A.S.A. Pipe Schedules": ".0832.475",
                    "A.S.A. Pipe Schedules_2": ".0832.475",
                    "A.S.A. Pipe Schedules_3": ".1203.531",
                    "A.S.A. Pipe Schedules_4": ".1203.531",
                    "A.S.A. Pipe Schedules_5": ".2035.793",
                    "A.S.A. Pipe Schedules_6": ".2035.793",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".2767.661",
                    "A.S.A. Pipe Schedules_9": ".2767.661",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".37510.01",
                    "A.S.A. Pipe Schedules_12": ".55213.70"
                  },
                  {
                    "PIPE SIZE": "3",
                    "OD IN INCHES": "3.500",
                    "A.S.A. Pipe Schedules": ".0833.029",
                    "A.S.A. Pipe Schedules_2": ".0833.029",
                    "A.S.A. Pipe Schedules_3": ".1204.332",
                    "A.S.A. Pipe Schedules_4": ".1204.332",
                    "A.S.A. Pipe Schedules_5": ".2167.576",
                    "A.S.A. Pipe Schedules_6": ".2167.576",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".30010.25",
                    "A.S.A. Pipe Schedules_9": ".30010.25",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": ".43714.32",
                    "A.S.A. Pipe Schedules_12": ".60018.58"
                  },
                  {
                    "PIPE SIZE": "3-1/2",
                    "OD IN INCHES": "4.000",
                    "A.S.A. Pipe Schedules": ".0833.472",
                    "A.S.A. Pipe Schedules_2": ".0833.472",
                    "A.S.A. Pipe Schedules_3": ".1204.973",
                    "A.S.A. Pipe Schedules_4": ".1204.973",
                    "A.S.A. Pipe Schedules_5": ".2269.109",
                    "A.S.A. Pipe Schedules_6": ".2269.109",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".31812.51",
                    "A.S.A. Pipe Schedules_9": ".31812.51",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".63622.85"
                  },
                  {
                    "PIPE SIZE": "4",
                    "OD IN INCHES": "4.500",
                    "A.S.A. Pipe Schedules": ".0833.915",
                    "A.S.A. Pipe Schedules_2": ".0833.915",
                    "A.S.A. Pipe Schedules_3": ".1205.613",
                    "A.S.A. Pipe Schedules_4": ".1205.613",
                    "A.S.A. Pipe Schedules_5": ".23710.79",
                    "A.S.A. Pipe Schedules_6": ".23710.79",
                    "A.S.A. Pipe Schedules_7": ".28112.66",
                    "A.S.A. Pipe Schedules_8": ".33714.98",
                    "A.S.A. Pipe Schedules_9": ".33714.98",
                    "A.S.A. Pipe Schedules_10": ".43719.01",
                    "A.S.A. Pipe Schedules_11": ".53122.51",
                    "A.S.A. Pipe Schedules_12": ".67427.54"
                  },
                  {
                    "PIPE SIZE": "4-1/2",
                    "OD IN INCHES": "5.000",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".24712.53",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".35517.61",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".71032.53"
                  },
                  {
                    "PIPE SIZE": "5",
                    "OD IN INCHES": "5.563",
                    "A.S.A. Pipe Schedules": ".1096.349",
                    "A.S.A. Pipe Schedules_2": ".1096.349",
                    "A.S.A. Pipe Schedules_3": ".1347.770",
                    "A.S.A. Pipe Schedules_4": ".1347.770",
                    "A.S.A. Pipe Schedules_5": ".25814.62",
                    "A.S.A. Pipe Schedules_6": ".25814.62",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".37520.78",
                    "A.S.A. Pipe Schedules_9": ".37520.78",
                    "A.S.A. Pipe Schedules_10": ".50027.04",
                    "A.S.A. Pipe Schedules_11": ".62532.96",
                    "A.S.A. Pipe Schedules_12": ".75038.55"
                  },
                  {
                    "PIPE SIZE": "6",
                    "OD IN INCHES": "6.625",
                    "A.S.A. Pipe Schedules": ".1097.585",
                    "A.S.A. Pipe Schedules_2": ".1097.585",
                    "A.S.A. Pipe Schedules_3": ".1349.290",
                    "A.S.A. Pipe Schedules_4": ".1349.290",
                    "A.S.A. Pipe Schedules_5": ".28018.97",
                    "A.S.A. Pipe Schedules_6": ".28018.97",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".43228.57",
                    "A.S.A. Pipe Schedules_9": ".43228.57",
                    "A.S.A. Pipe Schedules_10": ".56236.39",
                    "A.S.A. Pipe Schedules_11": ".71845.30",
                    "A.S.A. Pipe Schedules_12": ".86453.16"
                  },
                  {
                    "PIPE SIZE": "7",
                    "OD IN INCHES": "7.625",
                    "A.S.A. Pipe Schedules": "",
                    "A.S.A. Pipe Schedules_2": "",
                    "A.S.A. Pipe Schedules_3": "",
                    "A.S.A. Pipe Schedules_4": "",
                    "A.S.A. Pipe Schedules_5": ".30123.57",
                    "A.S.A. Pipe Schedules_6": "",
                    "A.S.A. Pipe Schedules_7": "",
                    "A.S.A. Pipe Schedules_8": ".50038.05",
                    "A.S.A. Pipe Schedules_9": "",
                    "A.S.A. Pipe Schedules_10": "",
                    "A.S.A. Pipe Schedules_11": "",
                    "A.S.A. Pipe Schedules_12": ".87563.08"
                  },
                  {
                    "PIPE SIZE": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "OD IN INCHES": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_2": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_3": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_4": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_5": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_6": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_7": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_8": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_9": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_10": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_11": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds",
                    "A.S.A. Pipe Schedules_12": "Medium Type = Wall thickness in inches Bold Type = Steel weight per foot in pounds"
                  }
                ],
                "row_count": 19,
                "column_count": 14
              },
              {
                "title": "Pressure Rating of 321 stainless steel Tube/ Pipe",
                "slug": "pressure-rating-of-321-stainless-steel-tube-pipe",
                "columns": [
                  "OD inches",
                  "Ave. Wall inches",
                  "Min Yield Strength (PSI)",
                  "Min Tensile Strength (PSI)",
                  "Theoretical Burst Pressure * (PSI)",
                  "Working Pressure (PSI) 25% of Burst",
                  "Theoretical Yield Point ** (PSI)",
                  "Collapse Pressure *** (PSI)"
                ],
                "rows": [
                  [
                    "0.250",
                    "0.020",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "0.250",
                    "0.028",
                    "30,000",
                    "75,000",
                    "21,649",
                    "5,412",
                    "8,660",
                    "5,967"
                  ],
                  [
                    "0.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "29,167",
                    "7,292",
                    "11,667",
                    "7,224"
                  ],
                  [
                    "0.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "48,355",
                    "12,089",
                    "19,342",
                    "9,455"
                  ],
                  [
                    "0.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "81,250",
                    "20,313",
                    "32,500",
                    "11,544"
                  ],
                  [
                    "0.375",
                    "0.020",
                    "30,000",
                    "75,000",
                    "8,955",
                    "2,239",
                    "3,582",
                    "3,029"
                  ],
                  [
                    "0.375",
                    "0.028",
                    "30,000",
                    "75,000",
                    "13,166",
                    "3,292",
                    "5,266",
                    "4,145"
                  ],
                  [
                    "0.375",
                    "0.035",
                    "30,000",
                    "75,000",
                    "17,213",
                    "4,303",
                    "6,885",
                    "5,077"
                  ],
                  [
                    "0.375",
                    "0.049",
                    "30,000",
                    "75,000",
                    "26,534",
                    "6,634",
                    "10,614",
                    "6,816"
                  ],
                  [
                    "0.375",
                    "0.065",
                    "30,000",
                    "75,000",
                    "39,796",
                    "9,949",
                    "15,918",
                    "8,597"
                  ],
                  [
                    "0.500",
                    "0.020",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.500",
                    "0.028",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "12,209",
                    "3,052",
                    "4,884",
                    "3,906"
                  ],
                  [
                    "0.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "18,284",
                    "4,571",
                    "7,313",
                    "5,316L"
                  ],
                  [
                    "0.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "26,351",
                    "6,588",
                    "10,541",
                    "6,786"
                  ],
                  [
                    "0.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "37,275",
                    "9,319",
                    "14,910",
                    "8,307"
                  ],
                  [
                    "0.625",
                    "0.020",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.625",
                    "0.028",
                    "30,000",
                    "75,000",
                    "7,381",
                    "1,845",
                    "2,953",
                    "2,568"
                  ],
                  [
                    "0.625",
                    "0.035",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.625",
                    "0.049",
                    "30,000",
                    "75,000",
                    "13,947",
                    "3,487",
                    "5,579",
                    "4,335"
                  ],
                  [
                    "0.625",
                    "0.065",
                    "30,000",
                    "75,000",
                    "19,697",
                    "4,924",
                    "7,879",
                    "5,591"
                  ],
                  [
                    "0.625",
                    "0.083",
                    "30,000",
                    "75,000",
                    "27,124",
                    "6,781",
                    "10,850",
                    "6,910"
                  ],
                  [
                    "0.625",
                    "0.095",
                    "30,000",
                    "75,000",
                    "32,759",
                    "8,190",
                    "13,103",
                    "7,734"
                  ],
                  [
                    "0.625",
                    "0.109",
                    "30,000",
                    "75,000",
                    "40,172",
                    "10,043",
                    "16,069",
                    "8,639"
                  ],
                  [
                    "0.750",
                    "0.028",
                    "30,000",
                    "75,000",
                    "6,052",
                    "1,513",
                    "2,421",
                    "2,156"
                  ],
                  [
                    "0.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "7,721",
                    "1,930",
                    "3,088",
                    "2,669"
                  ],
                  [
                    "0.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "11,273",
                    "2,818",
                    "4,509",
                    "3,664"
                  ],
                  [
                    "0.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "15,726",
                    "3,931",
                    "6,290",
                    "4,749"
                  ],
                  [
                    "0.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "21,318",
                    "5,330",
                    "8,527",
                    "5,905"
                  ],
                  [
                    "0.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "25,446",
                    "6,362",
                    "10,179",
                    "6,637"
                  ],
                  [
                    "0.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "30,733",
                    "7,683",
                    "12,293",
                    "7,453"
                  ],
                  [
                    "0.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "35,294",
                    "8,824",
                    "14,118",
                    "8,064"
                  ],
                  [
                    "0.875",
                    "0.020",
                    "30,000",
                    "75,000",
                    "3,593",
                    "898",
                    "1,437",
                    "1,340"
                  ],
                  [
                    "0.875",
                    "0.028",
                    "30,000",
                    "75,000",
                    "5,128",
                    "1,282",
                    "2,051",
                    "1,859"
                  ],
                  [
                    "0.875",
                    "0.035",
                    "30,000",
                    "75,000",
                    "6,522",
                    "1,630",
                    "2,609",
                    "2,316L"
                  ],
                  [
                    "0.875",
                    "0.049",
                    "30,000",
                    "75,000",
                    "9,459",
                    "2,365",
                    "3,784",
                    "3,172"
                  ],
                  [
                    "0.875",
                    "0.065",
                    "30,000",
                    "75,000",
                    "13,087",
                    "3,272",
                    "5,235",
                    "4,126"
                  ],
                  [
                    "0.875",
                    "0.083",
                    "30,000",
                    "75,000",
                    "17,560",
                    "4,390",
                    "7,024",
                    "5,152"
                  ],
                  [
                    "0.875",
                    "0.095",
                    "30,000",
                    "75,000",
                    "20,803",
                    "5,201",
                    "8,321",
                    "5,807"
                  ],
                  [
                    "0.875",
                    "0.109",
                    "30,000",
                    "75,000",
                    "24,886",
                    "6,221",
                    "9,954",
                    "6,543"
                  ],
                  [
                    "0.875",
                    "0.120",
                    "30,000",
                    "75,000",
                    "28,346",
                    "7,087",
                    "11,339",
                    "7,100"
                  ],
                  [
                    "1.000",
                    "0.028",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "5,645",
                    "1,411",
                    "2,258",
                    "2,027"
                  ],
                  [
                    "1.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "8,149",
                    "2,037",
                    "3,259",
                    "2,796"
                  ],
                  [
                    "1.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "11,207",
                    "2,802",
                    "4,483",
                    "3,647"
                  ],
                  [
                    "1.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "14,928",
                    "3,732",
                    "5,971",
                    "4,567"
                  ],
                  [
                    "1.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "17,593",
                    "4,398",
                    "7,037",
                    "5,159"
                  ],
                  [
                    "1.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "20,908",
                    "5,227",
                    "8,363",
                    "5,827"
                  ],
                  [
                    "1.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "23,684",
                    "5,921",
                    "9,474",
                    "6,336"
                  ],
                  [
                    "1.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "27,459",
                    "6,865",
                    "10,984",
                    "6,963"
                  ],
                  [
                    "1.250",
                    "0.035",
                    "30,000",
                    "75,000",
                    "4,449",
                    "1,112",
                    "1,780",
                    "1,633"
                  ],
                  [
                    "1.250",
                    "0.049",
                    "30,000",
                    "75,000",
                    "6,380",
                    "1,595",
                    "2,552",
                    "2,260"
                  ],
                  [
                    "1.250",
                    "0.065",
                    "30,000",
                    "75,000",
                    "8,705",
                    "2,176",
                    "3,482",
                    "2,958"
                  ],
                  [
                    "1.250",
                    "0.083",
                    "30,000",
                    "75,000",
                    "11,485",
                    "2,871",
                    "4,594",
                    "3,719"
                  ],
                  [
                    "1.250",
                    "0.095",
                    "30,000",
                    "75,000",
                    "13,443",
                    "3,361",
                    "5,377",
                    "4,213"
                  ],
                  [
                    "1.250",
                    "0.109",
                    "30,000",
                    "75,000",
                    "15,843",
                    "3,961",
                    "6,337",
                    "4,776"
                  ],
                  [
                    "1.250",
                    "0.120",
                    "30,000",
                    "75,000",
                    "17,822",
                    "4,455",
                    "7,129",
                    "5,207"
                  ],
                  [
                    "1.250",
                    "0.134",
                    "30,000",
                    "75,000",
                    "20,468",
                    "5,117",
                    "8,187",
                    "5,742"
                  ],
                  [
                    "1.500",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,671",
                    "918",
                    "1,469",
                    "1,367"
                  ],
                  [
                    "1.500",
                    "0.049",
                    "30,000",
                    "75,000",
                    "5,243",
                    "1,311",
                    "2,097",
                    "1,896"
                  ],
                  [
                    "1.500",
                    "0.065",
                    "30,000",
                    "75,000",
                    "7,117",
                    "1,779",
                    "2,847",
                    "2,487"
                  ],
                  [
                    "1.500",
                    "0.083",
                    "30,000",
                    "75,000",
                    "9,333",
                    "2,333",
                    "3,733",
                    "3,136"
                  ],
                  [
                    "1.500",
                    "0.095",
                    "30,000",
                    "75,000",
                    "10,878",
                    "2,719",
                    "4,351",
                    "3,559"
                  ],
                  [
                    "1.500",
                    "0.109",
                    "30,000",
                    "75,000",
                    "12,754",
                    "3,188",
                    "5,101",
                    "4,043"
                  ],
                  [
                    "1.500",
                    "0.120",
                    "30,000",
                    "75,000",
                    "14,286",
                    "3,571",
                    "5,714",
                    "4,416"
                  ],
                  [
                    "1.500",
                    "0.134",
                    "30,000",
                    "75,000",
                    "16,315",
                    "4,079",
                    "6,526",
                    "4,881"
                  ],
                  [
                    "1.500",
                    "0.148",
                    "30,000",
                    "75,000",
                    "18,439",
                    "4,610",
                    "7,375",
                    "5,336"
                  ],
                  [
                    "1.750",
                    "0.035",
                    "30,000",
                    "75,000",
                    "3,125",
                    "781",
                    "1,250",
                    "1,176"
                  ],
                  [
                    "1.750",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "1.750",
                    "0.065",
                    "30,000",
                    "75,000",
                    "6,019",
                    "1,505",
                    "2,407",
                    "2,146"
                  ],
                  [
                    "1.750",
                    "0.083",
                    "30,000",
                    "75,000",
                    "7,860",
                    "1,965",
                    "3,144",
                    "2,711"
                  ],
                  [
                    "1.750",
                    "0.095",
                    "30,000",
                    "75,000",
                    "9,135",
                    "2,284",
                    "3,654",
                    "3,080"
                  ],
                  [
                    "1.750",
                    "0.109",
                    "30,000",
                    "75,000",
                    "10,672",
                    "2,668",
                    "4,269",
                    "3,504"
                  ],
                  [
                    "1.750",
                    "0.120",
                    "30,000",
                    "75,000",
                    "11,921",
                    "2,980",
                    "4,768",
                    "3,832"
                  ],
                  [
                    "1.750",
                    "0.134",
                    "30,000",
                    "75,000",
                    "13,563",
                    "3,391",
                    "5,425",
                    "4,242"
                  ],
                  [
                    "1.750",
                    "0.148",
                    "30,000",
                    "75,000",
                    "15,268",
                    "3,817",
                    "6,107",
                    "4,645"
                  ],
                  [
                    "1.750",
                    "0.165",
                    "30,000",
                    "75,000",
                    "17,430",
                    "4,357",
                    "6,972",
                    "5,124"
                  ],
                  [
                    "2.000",
                    "0.035",
                    "30,000",
                    "75,000",
                    "2,720",
                    "680",
                    "1,088",
                    "1,032"
                  ],
                  [
                    "2.000",
                    "0.049",
                    "30,000",
                    "75,000",
                    "3,864",
                    "966",
                    "1,546",
                    "1,434"
                  ],
                  [
                    "2.000",
                    "0.065",
                    "30,000",
                    "75,000",
                    "5,214",
                    "1,303",
                    "2,086",
                    "1,887"
                  ],
                  [
                    "2.000",
                    "0.083",
                    "30,000",
                    "75,000",
                    "6,788",
                    "1,697",
                    "2,715",
                    "2,387"
                  ],
                  [
                    "2.000",
                    "0.095",
                    "30,000",
                    "75,000",
                    "7,873",
                    "1,968",
                    "3,149",
                    "2,715"
                  ],
                  [
                    "2.000",
                    "0.109",
                    "30,000",
                    "75,000",
                    "9,175",
                    "2,294",
                    "3,670",
                    "3,092"
                  ],
                  [
                    "2.000",
                    "0.120",
                    "30,000",
                    "75,000",
                    "10,227",
                    "2,557",
                    "4,091",
                    "3,384"
                  ],
                  [
                    "2.000",
                    "0.134",
                    "30,000",
                    "75,000",
                    "11,605",
                    "2,901",
                    "4,642",
                    "3,751"
                  ],
                  [
                    "2.000",
                    "0.148",
                    "30,000",
                    "75,000",
                    "13,028",
                    "3,257",
                    "5,211",
                    "4,111"
                  ],
                  [
                    "2.000",
                    "0.165",
                    "30,000",
                    "75,000",
                    "14,820",
                    "3,705",
                    "5,928",
                    "4,542"
                  ]
                ],
                "records": [
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,649",
                    "Working Pressure (PSI) 25% of Burst": "5,412",
                    "Theoretical Yield Point ** (PSI)": "8,660",
                    "Collapse Pressure *** (PSI)": "5,967"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "29,167",
                    "Working Pressure (PSI) 25% of Burst": "7,292",
                    "Theoretical Yield Point ** (PSI)": "11,667",
                    "Collapse Pressure *** (PSI)": "7,224"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "48,355",
                    "Working Pressure (PSI) 25% of Burst": "12,089",
                    "Theoretical Yield Point ** (PSI)": "19,342",
                    "Collapse Pressure *** (PSI)": "9,455"
                  },
                  {
                    "OD inches": "0.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "81,250",
                    "Working Pressure (PSI) 25% of Burst": "20,313",
                    "Theoretical Yield Point ** (PSI)": "32,500",
                    "Collapse Pressure *** (PSI)": "11,544"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,955",
                    "Working Pressure (PSI) 25% of Burst": "2,239",
                    "Theoretical Yield Point ** (PSI)": "3,582",
                    "Collapse Pressure *** (PSI)": "3,029"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,166",
                    "Working Pressure (PSI) 25% of Burst": "3,292",
                    "Theoretical Yield Point ** (PSI)": "5,266",
                    "Collapse Pressure *** (PSI)": "4,145"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,213",
                    "Working Pressure (PSI) 25% of Burst": "4,303",
                    "Theoretical Yield Point ** (PSI)": "6,885",
                    "Collapse Pressure *** (PSI)": "5,077"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,534",
                    "Working Pressure (PSI) 25% of Burst": "6,634",
                    "Theoretical Yield Point ** (PSI)": "10,614",
                    "Collapse Pressure *** (PSI)": "6,816"
                  },
                  {
                    "OD inches": "0.375",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "39,796",
                    "Working Pressure (PSI) 25% of Burst": "9,949",
                    "Theoretical Yield Point ** (PSI)": "15,918",
                    "Collapse Pressure *** (PSI)": "8,597"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,209",
                    "Working Pressure (PSI) 25% of Burst": "3,052",
                    "Theoretical Yield Point ** (PSI)": "4,884",
                    "Collapse Pressure *** (PSI)": "3,906"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,284",
                    "Working Pressure (PSI) 25% of Burst": "4,571",
                    "Theoretical Yield Point ** (PSI)": "7,313",
                    "Collapse Pressure *** (PSI)": "5,316L"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "26,351",
                    "Working Pressure (PSI) 25% of Burst": "6,588",
                    "Theoretical Yield Point ** (PSI)": "10,541",
                    "Collapse Pressure *** (PSI)": "6,786"
                  },
                  {
                    "OD inches": "0.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "37,275",
                    "Working Pressure (PSI) 25% of Burst": "9,319",
                    "Theoretical Yield Point ** (PSI)": "14,910",
                    "Collapse Pressure *** (PSI)": "8,307"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,381",
                    "Working Pressure (PSI) 25% of Burst": "1,845",
                    "Theoretical Yield Point ** (PSI)": "2,953",
                    "Collapse Pressure *** (PSI)": "2,568"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,947",
                    "Working Pressure (PSI) 25% of Burst": "3,487",
                    "Theoretical Yield Point ** (PSI)": "5,579",
                    "Collapse Pressure *** (PSI)": "4,335"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "19,697",
                    "Working Pressure (PSI) 25% of Burst": "4,924",
                    "Theoretical Yield Point ** (PSI)": "7,879",
                    "Collapse Pressure *** (PSI)": "5,591"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,124",
                    "Working Pressure (PSI) 25% of Burst": "6,781",
                    "Theoretical Yield Point ** (PSI)": "10,850",
                    "Collapse Pressure *** (PSI)": "6,910"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "32,759",
                    "Working Pressure (PSI) 25% of Burst": "8,190",
                    "Theoretical Yield Point ** (PSI)": "13,103",
                    "Collapse Pressure *** (PSI)": "7,734"
                  },
                  {
                    "OD inches": "0.625",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "40,172",
                    "Working Pressure (PSI) 25% of Burst": "10,043",
                    "Theoretical Yield Point ** (PSI)": "16,069",
                    "Collapse Pressure *** (PSI)": "8,639"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,052",
                    "Working Pressure (PSI) 25% of Burst": "1,513",
                    "Theoretical Yield Point ** (PSI)": "2,421",
                    "Collapse Pressure *** (PSI)": "2,156"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,721",
                    "Working Pressure (PSI) 25% of Burst": "1,930",
                    "Theoretical Yield Point ** (PSI)": "3,088",
                    "Collapse Pressure *** (PSI)": "2,669"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,273",
                    "Working Pressure (PSI) 25% of Burst": "2,818",
                    "Theoretical Yield Point ** (PSI)": "4,509",
                    "Collapse Pressure *** (PSI)": "3,664"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,726",
                    "Working Pressure (PSI) 25% of Burst": "3,931",
                    "Theoretical Yield Point ** (PSI)": "6,290",
                    "Collapse Pressure *** (PSI)": "4,749"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "21,318",
                    "Working Pressure (PSI) 25% of Burst": "5,330",
                    "Theoretical Yield Point ** (PSI)": "8,527",
                    "Collapse Pressure *** (PSI)": "5,905"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "25,446",
                    "Working Pressure (PSI) 25% of Burst": "6,362",
                    "Theoretical Yield Point ** (PSI)": "10,179",
                    "Collapse Pressure *** (PSI)": "6,637"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "30,733",
                    "Working Pressure (PSI) 25% of Burst": "7,683",
                    "Theoretical Yield Point ** (PSI)": "12,293",
                    "Collapse Pressure *** (PSI)": "7,453"
                  },
                  {
                    "OD inches": "0.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "35,294",
                    "Working Pressure (PSI) 25% of Burst": "8,824",
                    "Theoretical Yield Point ** (PSI)": "14,118",
                    "Collapse Pressure *** (PSI)": "8,064"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.020",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,593",
                    "Working Pressure (PSI) 25% of Burst": "898",
                    "Theoretical Yield Point ** (PSI)": "1,437",
                    "Collapse Pressure *** (PSI)": "1,340"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,128",
                    "Working Pressure (PSI) 25% of Burst": "1,282",
                    "Theoretical Yield Point ** (PSI)": "2,051",
                    "Collapse Pressure *** (PSI)": "1,859"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,522",
                    "Working Pressure (PSI) 25% of Burst": "1,630",
                    "Theoretical Yield Point ** (PSI)": "2,609",
                    "Collapse Pressure *** (PSI)": "2,316L"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,459",
                    "Working Pressure (PSI) 25% of Burst": "2,365",
                    "Theoretical Yield Point ** (PSI)": "3,784",
                    "Collapse Pressure *** (PSI)": "3,172"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,087",
                    "Working Pressure (PSI) 25% of Burst": "3,272",
                    "Theoretical Yield Point ** (PSI)": "5,235",
                    "Collapse Pressure *** (PSI)": "4,126"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,560",
                    "Working Pressure (PSI) 25% of Burst": "4,390",
                    "Theoretical Yield Point ** (PSI)": "7,024",
                    "Collapse Pressure *** (PSI)": "5,152"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,803",
                    "Working Pressure (PSI) 25% of Burst": "5,201",
                    "Theoretical Yield Point ** (PSI)": "8,321",
                    "Collapse Pressure *** (PSI)": "5,807"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "24,886",
                    "Working Pressure (PSI) 25% of Burst": "6,221",
                    "Theoretical Yield Point ** (PSI)": "9,954",
                    "Collapse Pressure *** (PSI)": "6,543"
                  },
                  {
                    "OD inches": "0.875",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "28,346",
                    "Working Pressure (PSI) 25% of Burst": "7,087",
                    "Theoretical Yield Point ** (PSI)": "11,339",
                    "Collapse Pressure *** (PSI)": "7,100"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.028",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,645",
                    "Working Pressure (PSI) 25% of Burst": "1,411",
                    "Theoretical Yield Point ** (PSI)": "2,258",
                    "Collapse Pressure *** (PSI)": "2,027"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,149",
                    "Working Pressure (PSI) 25% of Burst": "2,037",
                    "Theoretical Yield Point ** (PSI)": "3,259",
                    "Collapse Pressure *** (PSI)": "2,796"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,207",
                    "Working Pressure (PSI) 25% of Burst": "2,802",
                    "Theoretical Yield Point ** (PSI)": "4,483",
                    "Collapse Pressure *** (PSI)": "3,647"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,928",
                    "Working Pressure (PSI) 25% of Burst": "3,732",
                    "Theoretical Yield Point ** (PSI)": "5,971",
                    "Collapse Pressure *** (PSI)": "4,567"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,593",
                    "Working Pressure (PSI) 25% of Burst": "4,398",
                    "Theoretical Yield Point ** (PSI)": "7,037",
                    "Collapse Pressure *** (PSI)": "5,159"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,908",
                    "Working Pressure (PSI) 25% of Burst": "5,227",
                    "Theoretical Yield Point ** (PSI)": "8,363",
                    "Collapse Pressure *** (PSI)": "5,827"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "23,684",
                    "Working Pressure (PSI) 25% of Burst": "5,921",
                    "Theoretical Yield Point ** (PSI)": "9,474",
                    "Collapse Pressure *** (PSI)": "6,336"
                  },
                  {
                    "OD inches": "1.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "27,459",
                    "Working Pressure (PSI) 25% of Burst": "6,865",
                    "Theoretical Yield Point ** (PSI)": "10,984",
                    "Collapse Pressure *** (PSI)": "6,963"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "4,449",
                    "Working Pressure (PSI) 25% of Burst": "1,112",
                    "Theoretical Yield Point ** (PSI)": "1,780",
                    "Collapse Pressure *** (PSI)": "1,633"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,380",
                    "Working Pressure (PSI) 25% of Burst": "1,595",
                    "Theoretical Yield Point ** (PSI)": "2,552",
                    "Collapse Pressure *** (PSI)": "2,260"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "8,705",
                    "Working Pressure (PSI) 25% of Burst": "2,176",
                    "Theoretical Yield Point ** (PSI)": "3,482",
                    "Collapse Pressure *** (PSI)": "2,958"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,485",
                    "Working Pressure (PSI) 25% of Burst": "2,871",
                    "Theoretical Yield Point ** (PSI)": "4,594",
                    "Collapse Pressure *** (PSI)": "3,719"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,443",
                    "Working Pressure (PSI) 25% of Burst": "3,361",
                    "Theoretical Yield Point ** (PSI)": "5,377",
                    "Collapse Pressure *** (PSI)": "4,213"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,843",
                    "Working Pressure (PSI) 25% of Burst": "3,961",
                    "Theoretical Yield Point ** (PSI)": "6,337",
                    "Collapse Pressure *** (PSI)": "4,776"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,822",
                    "Working Pressure (PSI) 25% of Burst": "4,455",
                    "Theoretical Yield Point ** (PSI)": "7,129",
                    "Collapse Pressure *** (PSI)": "5,207"
                  },
                  {
                    "OD inches": "1.250",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "20,468",
                    "Working Pressure (PSI) 25% of Burst": "5,117",
                    "Theoretical Yield Point ** (PSI)": "8,187",
                    "Collapse Pressure *** (PSI)": "5,742"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,671",
                    "Working Pressure (PSI) 25% of Burst": "918",
                    "Theoretical Yield Point ** (PSI)": "1,469",
                    "Collapse Pressure *** (PSI)": "1,367"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,243",
                    "Working Pressure (PSI) 25% of Burst": "1,311",
                    "Theoretical Yield Point ** (PSI)": "2,097",
                    "Collapse Pressure *** (PSI)": "1,896"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,117",
                    "Working Pressure (PSI) 25% of Burst": "1,779",
                    "Theoretical Yield Point ** (PSI)": "2,847",
                    "Collapse Pressure *** (PSI)": "2,487"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,333",
                    "Working Pressure (PSI) 25% of Burst": "2,333",
                    "Theoretical Yield Point ** (PSI)": "3,733",
                    "Collapse Pressure *** (PSI)": "3,136"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,878",
                    "Working Pressure (PSI) 25% of Burst": "2,719",
                    "Theoretical Yield Point ** (PSI)": "4,351",
                    "Collapse Pressure *** (PSI)": "3,559"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "12,754",
                    "Working Pressure (PSI) 25% of Burst": "3,188",
                    "Theoretical Yield Point ** (PSI)": "5,101",
                    "Collapse Pressure *** (PSI)": "4,043"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,286",
                    "Working Pressure (PSI) 25% of Burst": "3,571",
                    "Theoretical Yield Point ** (PSI)": "5,714",
                    "Collapse Pressure *** (PSI)": "4,416"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "16,315",
                    "Working Pressure (PSI) 25% of Burst": "4,079",
                    "Theoretical Yield Point ** (PSI)": "6,526",
                    "Collapse Pressure *** (PSI)": "4,881"
                  },
                  {
                    "OD inches": "1.500",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "18,439",
                    "Working Pressure (PSI) 25% of Burst": "4,610",
                    "Theoretical Yield Point ** (PSI)": "7,375",
                    "Collapse Pressure *** (PSI)": "5,336"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,125",
                    "Working Pressure (PSI) 25% of Burst": "781",
                    "Theoretical Yield Point ** (PSI)": "1,250",
                    "Collapse Pressure *** (PSI)": "1,176"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,019",
                    "Working Pressure (PSI) 25% of Burst": "1,505",
                    "Theoretical Yield Point ** (PSI)": "2,407",
                    "Collapse Pressure *** (PSI)": "2,146"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,860",
                    "Working Pressure (PSI) 25% of Burst": "1,965",
                    "Theoretical Yield Point ** (PSI)": "3,144",
                    "Collapse Pressure *** (PSI)": "2,711"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,135",
                    "Working Pressure (PSI) 25% of Burst": "2,284",
                    "Theoretical Yield Point ** (PSI)": "3,654",
                    "Collapse Pressure *** (PSI)": "3,080"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,672",
                    "Working Pressure (PSI) 25% of Burst": "2,668",
                    "Theoretical Yield Point ** (PSI)": "4,269",
                    "Collapse Pressure *** (PSI)": "3,504"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,921",
                    "Working Pressure (PSI) 25% of Burst": "2,980",
                    "Theoretical Yield Point ** (PSI)": "4,768",
                    "Collapse Pressure *** (PSI)": "3,832"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,563",
                    "Working Pressure (PSI) 25% of Burst": "3,391",
                    "Theoretical Yield Point ** (PSI)": "5,425",
                    "Collapse Pressure *** (PSI)": "4,242"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "15,268",
                    "Working Pressure (PSI) 25% of Burst": "3,817",
                    "Theoretical Yield Point ** (PSI)": "6,107",
                    "Collapse Pressure *** (PSI)": "4,645"
                  },
                  {
                    "OD inches": "1.750",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "17,430",
                    "Working Pressure (PSI) 25% of Burst": "4,357",
                    "Theoretical Yield Point ** (PSI)": "6,972",
                    "Collapse Pressure *** (PSI)": "5,124"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.035",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "2,720",
                    "Working Pressure (PSI) 25% of Burst": "680",
                    "Theoretical Yield Point ** (PSI)": "1,088",
                    "Collapse Pressure *** (PSI)": "1,032"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.049",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "3,864",
                    "Working Pressure (PSI) 25% of Burst": "966",
                    "Theoretical Yield Point ** (PSI)": "1,546",
                    "Collapse Pressure *** (PSI)": "1,434"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.065",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "5,214",
                    "Working Pressure (PSI) 25% of Burst": "1,303",
                    "Theoretical Yield Point ** (PSI)": "2,086",
                    "Collapse Pressure *** (PSI)": "1,887"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.083",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "6,788",
                    "Working Pressure (PSI) 25% of Burst": "1,697",
                    "Theoretical Yield Point ** (PSI)": "2,715",
                    "Collapse Pressure *** (PSI)": "2,387"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.095",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "7,873",
                    "Working Pressure (PSI) 25% of Burst": "1,968",
                    "Theoretical Yield Point ** (PSI)": "3,149",
                    "Collapse Pressure *** (PSI)": "2,715"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.109",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "9,175",
                    "Working Pressure (PSI) 25% of Burst": "2,294",
                    "Theoretical Yield Point ** (PSI)": "3,670",
                    "Collapse Pressure *** (PSI)": "3,092"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.120",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "10,227",
                    "Working Pressure (PSI) 25% of Burst": "2,557",
                    "Theoretical Yield Point ** (PSI)": "4,091",
                    "Collapse Pressure *** (PSI)": "3,384"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.134",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "11,605",
                    "Working Pressure (PSI) 25% of Burst": "2,901",
                    "Theoretical Yield Point ** (PSI)": "4,642",
                    "Collapse Pressure *** (PSI)": "3,751"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.148",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "13,028",
                    "Working Pressure (PSI) 25% of Burst": "3,257",
                    "Theoretical Yield Point ** (PSI)": "5,211",
                    "Collapse Pressure *** (PSI)": "4,111"
                  },
                  {
                    "OD inches": "2.000",
                    "Ave. Wall inches": "0.165",
                    "Min Yield Strength (PSI)": "30,000",
                    "Min Tensile Strength (PSI)": "75,000",
                    "Theoretical Burst Pressure * (PSI)": "14,820",
                    "Working Pressure (PSI) 25% of Burst": "3,705",
                    "Theoretical Yield Point ** (PSI)": "5,928",
                    "Collapse Pressure *** (PSI)": "4,542"
                  }
                ],
                "row_count": 87,
                "column_count": 8
              },
              {
                "title": "UNS S32100 Pipes & Tubes Chemical Properties",
                "slug": "uns-s32100-pipes-tubes-chemical-properties",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5",
                  "col_6",
                  "col_7",
                  "col_8",
                  "col_9",
                  "col_10"
                ],
                "rows": [
                  [
                    "Grade",
                    "C",
                    "Mn",
                    "Si",
                    "P",
                    "S",
                    "Cr",
                    "N",
                    "Ni",
                    "Ti"
                  ],
                  [
                    "SS 321",
                    "0.08 max",
                    "2.0 max",
                    "1.0 max",
                    "0.045 max",
                    "0.030 max",
                    "17.00 - 19.00",
                    "0.10 max",
                    "9.00 - 12.00",
                    "5(C+N) - 0.70 max"
                  ],
                  [
                    "SS 321H",
                    "0.04 - 0.10",
                    "2.0 max",
                    "1.0 max",
                    "0.045 max",
                    "0.030 max",
                    "17.00 - 19.00",
                    "0.10 max",
                    "9.00 - 12.00",
                    "4(C+N) - 0.70 max"
                  ]
                ],
                "records": [
                  {
                    "col_1": "Grade",
                    "col_2": "C",
                    "col_3": "Mn",
                    "col_4": "Si",
                    "col_5": "P",
                    "col_6": "S",
                    "col_7": "Cr",
                    "col_8": "N",
                    "col_9": "Ni",
                    "col_10": "Ti"
                  },
                  {
                    "col_1": "SS 321",
                    "col_2": "0.08 max",
                    "col_3": "2.0 max",
                    "col_4": "1.0 max",
                    "col_5": "0.045 max",
                    "col_6": "0.030 max",
                    "col_7": "17.00 - 19.00",
                    "col_8": "0.10 max",
                    "col_9": "9.00 - 12.00",
                    "col_10": "5(C+N) - 0.70 max"
                  },
                  {
                    "col_1": "SS 321H",
                    "col_2": "0.04 - 0.10",
                    "col_3": "2.0 max",
                    "col_4": "1.0 max",
                    "col_5": "0.045 max",
                    "col_6": "0.030 max",
                    "col_7": "17.00 - 19.00",
                    "col_8": "0.10 max",
                    "col_9": "9.00 - 12.00",
                    "col_10": "4(C+N) - 0.70 max"
                  }
                ],
                "row_count": 3,
                "column_count": 10
              },
              {
                "title": "Mechanical Characteristics of AISI 321/ 321H SS Pipe and Tube",
                "slug": "mechanical-characteristics-of-aisi-321-321h-ss-pipe-and-tube",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "Density",
                    "Melting Point",
                    "Tensile Strength",
                    "Yield Strength (0.2%Offset)",
                    "Elongation"
                  ],
                  [
                    "8.0 g/cm3",
                    "1457 °C (2650 °F)",
                    "Psi - 75000 , MPa - 515",
                    "Psi - 30000 , MPa - 205",
                    "35 %"
                  ]
                ],
                "records": [
                  {
                    "col_1": "Density",
                    "col_2": "Melting Point",
                    "col_3": "Tensile Strength",
                    "col_4": "Yield Strength (0.2%Offset)",
                    "col_5": "Elongation"
                  },
                  {
                    "col_1": "8.0 g/cm3",
                    "col_2": "1457 °C (2650 °F)",
                    "col_3": "Psi - 75000 , MPa - 515",
                    "col_4": "Psi - 30000 , MPa - 205",
                    "col_5": "35 %"
                  }
                ],
                "row_count": 2,
                "column_count": 5
              },
              {
                "title": "Equivalent of SS 321/ 321H Tubing & Pipe",
                "slug": "equivalent-of-ss-321-321h-tubing-pipe",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "STANDARD",
                    "WERKSTOFF NR.",
                    "UNS",
                    "JIS",
                    "EN"
                  ],
                  [
                    "SS 321",
                    "1.4541",
                    "S32100",
                    "SUS 321",
                    "X6CrNiTi18-10"
                  ],
                  [
                    "SS 321H",
                    "1.4878",
                    "S32109",
                    "SUS 321H",
                    "X12CrNiTi18-9"
                  ]
                ],
                "records": [
                  {
                    "col_1": "STANDARD",
                    "col_2": "WERKSTOFF NR.",
                    "col_3": "UNS",
                    "col_4": "JIS",
                    "col_5": "EN"
                  },
                  {
                    "col_1": "SS 321",
                    "col_2": "1.4541",
                    "col_3": "S32100",
                    "col_4": "SUS 321",
                    "col_5": "X6CrNiTi18-10"
                  },
                  {
                    "col_1": "SS 321H",
                    "col_2": "1.4878",
                    "col_3": "S32109",
                    "col_4": "SUS 321H",
                    "col_5": "X12CrNiTi18-9"
                  }
                ],
                "row_count": 3,
                "column_count": 5
              },
              {
                "title": "Dimension Table of AISI 321H Tube",
                "slug": "dimension-table-of-aisi-321h-tube",
                "columns": [
                  "Nominal",
                  "O.D. Inches",
                  "10s",
                  "10",
                  "40s & Std",
                  "40",
                  "80s & E.H.",
                  "80",
                  "160"
                ],
                "rows": [
                  [
                    "1/8",
                    ".405",
                    ".049",
                    ".049",
                    ".068",
                    ".068",
                    ".095",
                    ".095",
                    ""
                  ],
                  [
                    "1/4",
                    ".540",
                    ".065",
                    ".065",
                    ".088",
                    ".088",
                    ".119",
                    ".119",
                    ""
                  ],
                  [
                    "3/8",
                    ".675",
                    ".065",
                    ".065",
                    ".091",
                    ".091",
                    ".126",
                    ".126",
                    ""
                  ],
                  [
                    "1/2",
                    ".840",
                    ".083",
                    ".083",
                    ".109",
                    ".109",
                    ".147",
                    ".147",
                    ".187"
                  ],
                  [
                    "3/4",
                    "1.050",
                    ".083",
                    ".083",
                    ".113",
                    ".113",
                    ".154",
                    ".154",
                    ".218"
                  ],
                  [
                    "1",
                    "1.315",
                    ".109",
                    ".109",
                    ".133",
                    ".133",
                    ".179",
                    ".179",
                    ".250"
                  ],
                  [
                    "1 1/4",
                    "1.660",
                    ".109",
                    ".109",
                    ".140",
                    ".140",
                    ".191",
                    ".191",
                    ".250"
                  ],
                  [
                    "1 1/2",
                    "1.900",
                    ".109",
                    ".109",
                    ".145",
                    ".145",
                    ".200",
                    ".200",
                    ".281"
                  ],
                  [
                    "2",
                    "2.375",
                    ".109",
                    ".109",
                    ".154",
                    ".154",
                    ".218",
                    ".218",
                    ".343"
                  ],
                  [
                    "2 1/2",
                    "2.875",
                    ".120",
                    ".120",
                    ".203",
                    ".203",
                    ".276",
                    ".276",
                    ".375"
                  ],
                  [
                    "3",
                    "3.500",
                    ".120",
                    ".120",
                    ".216",
                    ".216",
                    ".300",
                    ".300",
                    ".437"
                  ],
                  [
                    "3 1/2",
                    "4.000",
                    ".120",
                    ".120",
                    ".226",
                    ".226",
                    ".318",
                    ".318",
                    ""
                  ],
                  [
                    "4",
                    "4.500",
                    ".120",
                    ".120",
                    ".237",
                    ".237",
                    ".337",
                    ".337",
                    ".531"
                  ],
                  [
                    "4 1/2",
                    "5.000",
                    "",
                    "",
                    ".247",
                    "",
                    ".355",
                    "",
                    ""
                  ],
                  [
                    "5",
                    "5.563",
                    ".134",
                    ".134",
                    ".258",
                    ".258",
                    ".375",
                    ".375",
                    ".625"
                  ],
                  [
                    "6",
                    "6.625",
                    ".134",
                    ".134",
                    ".280",
                    ".280",
                    ".432",
                    ".432",
                    ".718"
                  ],
                  [
                    "7",
                    "7.625",
                    "",
                    "",
                    ".301",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "8",
                    "8.625",
                    ".148",
                    ".148",
                    ".322",
                    ".322",
                    ".500",
                    ".500",
                    ".906"
                  ],
                  [
                    "9",
                    "9.625",
                    "",
                    "",
                    ".342",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "10",
                    "10.750",
                    ".165",
                    ".165",
                    ".365",
                    ".365",
                    ".500",
                    ".593",
                    "1.125"
                  ],
                  [
                    "11",
                    "11.750",
                    "",
                    "",
                    ".375",
                    "",
                    ".500",
                    "",
                    ""
                  ],
                  [
                    "12",
                    "12.750",
                    ".180",
                    ".180",
                    ".375",
                    ".406",
                    ".500",
                    ".687",
                    "1.312"
                  ],
                  [
                    "14",
                    "14.000",
                    ".188",
                    ".250",
                    ".375",
                    ".437",
                    ".500",
                    ".750",
                    "1.406"
                  ],
                  [
                    "16",
                    "16.000",
                    ".188",
                    ".250",
                    ".375",
                    ".500",
                    ".500",
                    ".843",
                    "1.593"
                  ],
                  [
                    "18",
                    "18.000",
                    ".188",
                    ".250",
                    ".375",
                    ".562",
                    ".500",
                    ".937",
                    "1.781"
                  ]
                ],
                "records": [
                  {
                    "Nominal": "1/8",
                    "O.D. Inches": ".405",
                    "10s": ".049",
                    "10": ".049",
                    "40s & Std": ".068",
                    "40": ".068",
                    "80s & E.H.": ".095",
                    "80": ".095",
                    "160": ""
                  },
                  {
                    "Nominal": "1/4",
                    "O.D. Inches": ".540",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".088",
                    "40": ".088",
                    "80s & E.H.": ".119",
                    "80": ".119",
                    "160": ""
                  },
                  {
                    "Nominal": "3/8",
                    "O.D. Inches": ".675",
                    "10s": ".065",
                    "10": ".065",
                    "40s & Std": ".091",
                    "40": ".091",
                    "80s & E.H.": ".126",
                    "80": ".126",
                    "160": ""
                  },
                  {
                    "Nominal": "1/2",
                    "O.D. Inches": ".840",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".109",
                    "40": ".109",
                    "80s & E.H.": ".147",
                    "80": ".147",
                    "160": ".187"
                  },
                  {
                    "Nominal": "3/4",
                    "O.D. Inches": "1.050",
                    "10s": ".083",
                    "10": ".083",
                    "40s & Std": ".113",
                    "40": ".113",
                    "80s & E.H.": ".154",
                    "80": ".154",
                    "160": ".218"
                  },
                  {
                    "Nominal": "1",
                    "O.D. Inches": "1.315",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".133",
                    "40": ".133",
                    "80s & E.H.": ".179",
                    "80": ".179",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/4",
                    "O.D. Inches": "1.660",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".140",
                    "40": ".140",
                    "80s & E.H.": ".191",
                    "80": ".191",
                    "160": ".250"
                  },
                  {
                    "Nominal": "1 1/2",
                    "O.D. Inches": "1.900",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".145",
                    "40": ".145",
                    "80s & E.H.": ".200",
                    "80": ".200",
                    "160": ".281"
                  },
                  {
                    "Nominal": "2",
                    "O.D. Inches": "2.375",
                    "10s": ".109",
                    "10": ".109",
                    "40s & Std": ".154",
                    "40": ".154",
                    "80s & E.H.": ".218",
                    "80": ".218",
                    "160": ".343"
                  },
                  {
                    "Nominal": "2 1/2",
                    "O.D. Inches": "2.875",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".203",
                    "40": ".203",
                    "80s & E.H.": ".276",
                    "80": ".276",
                    "160": ".375"
                  },
                  {
                    "Nominal": "3",
                    "O.D. Inches": "3.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".216",
                    "40": ".216",
                    "80s & E.H.": ".300",
                    "80": ".300",
                    "160": ".437"
                  },
                  {
                    "Nominal": "3 1/2",
                    "O.D. Inches": "4.000",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".226",
                    "40": ".226",
                    "80s & E.H.": ".318",
                    "80": ".318",
                    "160": ""
                  },
                  {
                    "Nominal": "4",
                    "O.D. Inches": "4.500",
                    "10s": ".120",
                    "10": ".120",
                    "40s & Std": ".237",
                    "40": ".237",
                    "80s & E.H.": ".337",
                    "80": ".337",
                    "160": ".531"
                  },
                  {
                    "Nominal": "4 1/2",
                    "O.D. Inches": "5.000",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".247",
                    "40": "",
                    "80s & E.H.": ".355",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "5",
                    "O.D. Inches": "5.563",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".258",
                    "40": ".258",
                    "80s & E.H.": ".375",
                    "80": ".375",
                    "160": ".625"
                  },
                  {
                    "Nominal": "6",
                    "O.D. Inches": "6.625",
                    "10s": ".134",
                    "10": ".134",
                    "40s & Std": ".280",
                    "40": ".280",
                    "80s & E.H.": ".432",
                    "80": ".432",
                    "160": ".718"
                  },
                  {
                    "Nominal": "7",
                    "O.D. Inches": "7.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".301",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "8",
                    "O.D. Inches": "8.625",
                    "10s": ".148",
                    "10": ".148",
                    "40s & Std": ".322",
                    "40": ".322",
                    "80s & E.H.": ".500",
                    "80": ".500",
                    "160": ".906"
                  },
                  {
                    "Nominal": "9",
                    "O.D. Inches": "9.625",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".342",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "10",
                    "O.D. Inches": "10.750",
                    "10s": ".165",
                    "10": ".165",
                    "40s & Std": ".365",
                    "40": ".365",
                    "80s & E.H.": ".500",
                    "80": ".593",
                    "160": "1.125"
                  },
                  {
                    "Nominal": "11",
                    "O.D. Inches": "11.750",
                    "10s": "",
                    "10": "",
                    "40s & Std": ".375",
                    "40": "",
                    "80s & E.H.": ".500",
                    "80": "",
                    "160": ""
                  },
                  {
                    "Nominal": "12",
                    "O.D. Inches": "12.750",
                    "10s": ".180",
                    "10": ".180",
                    "40s & Std": ".375",
                    "40": ".406",
                    "80s & E.H.": ".500",
                    "80": ".687",
                    "160": "1.312"
                  },
                  {
                    "Nominal": "14",
                    "O.D. Inches": "14.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".437",
                    "80s & E.H.": ".500",
                    "80": ".750",
                    "160": "1.406"
                  },
                  {
                    "Nominal": "16",
                    "O.D. Inches": "16.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".500",
                    "80s & E.H.": ".500",
                    "80": ".843",
                    "160": "1.593"
                  },
                  {
                    "Nominal": "18",
                    "O.D. Inches": "18.000",
                    "10s": ".188",
                    "10": ".250",
                    "40s & Std": ".375",
                    "40": ".562",
                    "80s & E.H.": ".500",
                    "80": ".937",
                    "160": "1.781"
                  }
                ],
                "row_count": 25,
                "column_count": 9
              },
              {
                "title": "321H SS Seamless Tubes Diameter Tolerance",
                "slug": "321h-ss-seamless-tubes-diameter-tolerance",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3",
                  "col_4",
                  "col_5"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance",
                    "ASTM A312 OD Tolerance"
                  ],
                  [
                    "NPS",
                    "+",
                    "+",
                    "–",
                    "–"
                  ],
                  [
                    "NPS",
                    "inch",
                    "mm",
                    "inch",
                    "mm"
                  ],
                  [
                    "1/8~1 1 /2",
                    "1/64(0.015)",
                    "0.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 1 1 /2~4",
                    "1/32(0.031)",
                    "0.8",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 4~8",
                    "1/16(0.062)",
                    "1.6",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 8~18",
                    "3/32(0.093)",
                    "2.4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 18~26",
                    "1/8(0.125)",
                    "3.2",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 26~34",
                    "5/32(0.156)",
                    "4",
                    "1/32(0.031)",
                    "0.8"
                  ],
                  [
                    "> 34~48",
                    "3/16(0.187)",
                    "4.8",
                    "1/32(0.031)",
                    "0.8"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 OD Tolerance",
                    "col_3": "ASTM A312 OD Tolerance",
                    "col_4": "ASTM A312 OD Tolerance",
                    "col_5": "ASTM A312 OD Tolerance"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "+",
                    "col_4": "–",
                    "col_5": "–"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "inch",
                    "col_3": "mm",
                    "col_4": "inch",
                    "col_5": "mm"
                  },
                  {
                    "col_1": "1/8~1 1 /2",
                    "col_2": "1/64(0.015)",
                    "col_3": "0.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 1 1 /2~4",
                    "col_2": "1/32(0.031)",
                    "col_3": "0.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 4~8",
                    "col_2": "1/16(0.062)",
                    "col_3": "1.6",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 8~18",
                    "col_2": "3/32(0.093)",
                    "col_3": "2.4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 18~26",
                    "col_2": "1/8(0.125)",
                    "col_3": "3.2",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 26~34",
                    "col_2": "5/32(0.156)",
                    "col_3": "4",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  },
                  {
                    "col_1": "> 34~48",
                    "col_2": "3/16(0.187)",
                    "col_3": "4.8",
                    "col_4": "1/32(0.031)",
                    "col_5": "0.8"
                  }
                ],
                "row_count": 10,
                "column_count": 5
              },
              {
                "title": "Wall Thickness Tolerance of Type 321 Stainless Steel Pipe/ Tubing",
                "slug": "wall-thickness-tolerance-of-type-321-stainless-steel-pipe-tubing",
                "columns": [
                  "col_1",
                  "col_2",
                  "col_3"
                ],
                "rows": [
                  [
                    "NPS",
                    "ASTM A312 WT Tolerance, %",
                    "ASTM A312 WT Tolerance, %"
                  ],
                  [
                    "NPS",
                    "+",
                    "–"
                  ],
                  [
                    "1/8-2 1 /2",
                    "20",
                    "12.5"
                  ],
                  [
                    "3~18, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "3~18, t/D> 5%",
                    "15",
                    "12.5"
                  ],
                  [
                    "≥ 20, welded",
                    "17.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D≤ 5%",
                    "22.5",
                    "12.5"
                  ],
                  [
                    "≥ 20, seamless, t/D> 5%",
                    "15",
                    "12.5"
                  ]
                ],
                "records": [
                  {
                    "col_1": "NPS",
                    "col_2": "ASTM A312 WT Tolerance, %",
                    "col_3": "ASTM A312 WT Tolerance, %"
                  },
                  {
                    "col_1": "NPS",
                    "col_2": "+",
                    "col_3": "–"
                  },
                  {
                    "col_1": "1/8-2 1 /2",
                    "col_2": "20",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "3~18, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, welded",
                    "col_2": "17.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D≤ 5%",
                    "col_2": "22.5",
                    "col_3": "12.5"
                  },
                  {
                    "col_1": "≥ 20, seamless, t/D> 5%",
                    "col_2": "15",
                    "col_3": "12.5"
                  }
                ],
                "row_count": 8,
                "column_count": 3
              },
              {
                "title": "Check What We Supply in Africa & Europe",
                "slug": "check-what-we-supply-in-africa-europe",
                "columns": [
                  "col_1",
                  "col_2"
                ],
                "rows": [
                  [
                    "ASTM A999 TP 321 Pipes",
                    "Philippines, Canada, Malaysia, Singapore"
                  ],
                  [
                    "Austenitic Stainless Steel 321 Round Pipe",
                    "Taiwan, Los Alamos -Mexico, Malaysia, Philippines"
                  ],
                  [
                    "SA358 GR.321H CL.1 Welded Pipe",
                    "Indonesia, Dammam -KSA, Belgium, Philippines,"
                  ],
                  [
                    "SA 213 TP 321 Stainless Steel Exhaust Tubing",
                    "France, Europe, Qatar, Thailand"
                  ],
                  [
                    "ASME SA 312 321H ERW Pipe",
                    "Saudi Arabia (KSA), Kuwait, South Africa, Brazil"
                  ],
                  [
                    "W. Nr. 1.4541 Welded Pipe",
                    "Singapore, South Africa, Bahrain,"
                  ],
                  [
                    "AISI 321H Heat Exhanger Tubes",
                    "Nigeria, Philippines, Australia, UK"
                  ],
                  [
                    "UNS S32100 Boiler Tube",
                    "Hong Kong, Malaysia, UAE, Oman"
                  ],
                  [
                    "ASME SA249 TP 321 Seamless Tubing",
                    "Iran, Italy, Chile, Singapore"
                  ],
                  [
                    "Stainless Steel 321H Cold Drawn Pipes",
                    "Germany, Thailand, Czechia, Malaysia"
                  ],
                  [
                    "AISI 321 stainless steel capillary tube",
                    "USA, Bangladesh, Malaysia, Finland"
                  ],
                  [
                    "Heat Resistant 321H Stainless Steel Welded Tubing",
                    "Mexico, Egypt, Spain, UK"
                  ],
                  [
                    "Inox 321 Exhaust Stainless Steel Pipe",
                    "UAE, Europe, United Kingdom -UK, Malaysia"
                  ],
                  [
                    "16 Gauge Sus 321H Stainless Steel Seamless Tube",
                    "Canada, Poland, UK, Ellington -United States"
                  ],
                  [
                    "321 Stainless Steel Welded Coiled heat exchanger Tube",
                    "Turkey, Norway, United Arab Emirates (UAE), Malaysia"
                  ],
                  [
                    "321H stainless steel hypodermic tubing",
                    "Japan, Malaysia, Romania, Europe"
                  ],
                  [
                    "15mm-101.6mm 321 stainless steel welded pipe",
                    "Sweden, Colombia, Malaysia, China"
                  ],
                  [
                    "2 Inch 321H Stainless Steel Pipe for Heat Resistant",
                    "Russia, Malaysia, Dubai, Netherlands"
                  ],
                  [
                    "321 Stainless Steel Rectangular Tubing DN6 - DN300",
                    "South Korea, NY 12203 (USA), Singapore, Malaysia"
                  ]
                ],
                "records": [
                  {
                    "col_1": "ASTM A999 TP 321 Pipes",
                    "col_2": "Philippines, Canada, Malaysia, Singapore"
                  },
                  {
                    "col_1": "Austenitic Stainless Steel 321 Round Pipe",
                    "col_2": "Taiwan, Los Alamos -Mexico, Malaysia, Philippines"
                  },
                  {
                    "col_1": "SA358 GR.321H CL.1 Welded Pipe",
                    "col_2": "Indonesia, Dammam -KSA, Belgium, Philippines,"
                  },
                  {
                    "col_1": "SA 213 TP 321 Stainless Steel Exhaust Tubing",
                    "col_2": "France, Europe, Qatar, Thailand"
                  },
                  {
                    "col_1": "ASME SA 312 321H ERW Pipe",
                    "col_2": "Saudi Arabia (KSA), Kuwait, South Africa, Brazil"
                  },
                  {
                    "col_1": "W. Nr. 1.4541 Welded Pipe",
                    "col_2": "Singapore, South Africa, Bahrain,"
                  },
                  {
                    "col_1": "AISI 321H Heat Exhanger Tubes",
                    "col_2": "Nigeria, Philippines, Australia, UK"
                  },
                  {
                    "col_1": "UNS S32100 Boiler Tube",
                    "col_2": "Hong Kong, Malaysia, UAE, Oman"
                  },
                  {
                    "col_1": "ASME SA249 TP 321 Seamless Tubing",
                    "col_2": "Iran, Italy, Chile, Singapore"
                  },
                  {
                    "col_1": "Stainless Steel 321H Cold Drawn Pipes",
                    "col_2": "Germany, Thailand, Czechia, Malaysia"
                  },
                  {
                    "col_1": "AISI 321 stainless steel capillary tube",
                    "col_2": "USA, Bangladesh, Malaysia, Finland"
                  },
                  {
                    "col_1": "Heat Resistant 321H Stainless Steel Welded Tubing",
                    "col_2": "Mexico, Egypt, Spain, UK"
                  },
                  {
                    "col_1": "Inox 321 Exhaust Stainless Steel Pipe",
                    "col_2": "UAE, Europe, United Kingdom -UK, Malaysia"
                  },
                  {
                    "col_1": "16 Gauge Sus 321H Stainless Steel Seamless Tube",
                    "col_2": "Canada, Poland, UK, Ellington -United States"
                  },
                  {
                    "col_1": "321 Stainless Steel Welded Coiled heat exchanger Tube",
                    "col_2": "Turkey, Norway, United Arab Emirates (UAE), Malaysia"
                  },
                  {
                    "col_1": "321H stainless steel hypodermic tubing",
                    "col_2": "Japan, Malaysia, Romania, Europe"
                  },
                  {
                    "col_1": "15mm-101.6mm 321 stainless steel welded pipe",
                    "col_2": "Sweden, Colombia, Malaysia, China"
                  },
                  {
                    "col_1": "2 Inch 321H Stainless Steel Pipe for Heat Resistant",
                    "col_2": "Russia, Malaysia, Dubai, Netherlands"
                  },
                  {
                    "col_1": "321 Stainless Steel Rectangular Tubing DN6 - DN300",
                    "col_2": "South Korea, NY 12203 (USA), Singapore, Malaysia"
                  }
                ],
                "row_count": 19,
                "column_count": 2
              }
            ],
          },
          {
            slug: "stainless-steel-310-pipe",
            name: "Stainless Steel 310 Pipe",
            icon: "pipe",
            description: "High-chromium, high-nickel grade for furnace, heat-treatment and other high-temperature lines.",
            grades: ["Stainless Steel"],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS S31000" },
              { label: "Composition", value: "24-26% chromium, 19-22% nickel" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Furnace, heat-treatment and high-temperature process piping" },
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.25", "2.00", "1.50", "0.045", "0.030", "24.0-26.0", "19.0-22.0", "—", "—"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["515 MPa (75 ksi)", "205 MPa (30 ksi)", "35%", "217 HB / 95 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["S31000", "1.4841", "SUS 310", "X15CrNi25-21"]],
              },
            ],
          },
          {
            slug: "stainless-steel-317l-pipe",
            name: "Stainless Steel 317L Pipe",
            icon: "pipe",
            description: "Higher-molybdenum than 316L, for service with stronger acids and chlorides.",
            grades: ["Stainless Steel"],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS S31703" },
              { label: "Composition", value: "18-20% chromium, 11-15% nickel, 3-4% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Pulp/paper and flue-gas desulphurisation piping" },
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.030", "2.00", "0.75", "0.045", "0.030", "18.0-20.0", "11.0-15.0", "3.00-4.00", "N ≤ 0.10"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["485 MPa (70 ksi)", "170 MPa (25 ksi)", "35%", "217 HB / 95 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["S31703", "1.4438", "SUS 317L", "X2CrNiMo18-15-4"]],
              },
            ],
          },
          {
            slug: "stainless-steel-904l-pipe",
            name: "Stainless Steel 904L Pipe",
            icon: "pipe",
            description: "High-alloy austenitic grade for sulphuric acid and other severely corrosive process duty.",
            grades: ["Stainless Steel"],
            seeAlso: {
              href: "/products/pipes-tubes/stainless-steel/stainless-steel-pipe",
              label: "Stainless Steel Pipe",
              note: "Dimensional charts, tolerances, pressure ratings and governing standards for the full range",
            },
            specs: [
              { label: "Standard", value: "ASTM A312 / ASME SA312, UNS N08904" },
              { label: "Composition", value: "Super-austenitic, 4-5% molybdenum, copper-bearing" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Sulphuric acid and severe chemical-process piping" },
            ],
            dataTables: [
              {
                title: "Chemical Composition (wt%)",
                columns: ["C (max)", "Mn (max)", "Si (max)", "P (max)", "S (max)", "Cr", "Ni", "Mo", "Other"],
                rows: [["0.020", "2.00", "1.00", "0.045", "0.035", "19.0-23.0", "23.0-28.0", "4.00-5.00", "Cu 1.00-2.00"]],
              },
              {
                title: "Mechanical Properties (ASTM A312 minimum)",
                columns: ["Tensile Strength (min)", "Yield Strength (min)", "Elongation (min)", "Hardness (max)"],
                rows: [["490 MPa (71 ksi)", "215 MPa (31 ksi)", "35%", "90 HRB"]],
              },
              {
                title: "Equivalent Grades",
                columns: ["UNS", "Werkstoff Nr.", "JIS", "EN"],
                rows: [["N08904", "1.4539", "SUS 904L", "X1NiCrMoCu25-20-5"]],
              },
            ],
          },
          {
            slug: "stainless-steel-welded-pipe",
            name: "Stainless Steel Welded Pipe",
            icon: "pipe",
            description: "ERW/EFW stainless pipe across common grades, the economical option where seamless isn't required.",
            grades: ["Stainless Steel"],
            specs: [
              { label: "Standard", value: "ASTM A358 / A312 (EFW/ERW), across common grades" },
              { label: "Composition", value: "Austenitic stainless, grade to be confirmed" },
              { label: "Manufacturing Method", value: "Electric-fusion or electric-resistance welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.19M" },
              { label: "Surface Finish", value: "Pickled and annealed (mill) standard; bright-annealed or polished on request" },
              { label: "Typical Applications", value: "Larger-diameter process and structural piping where seamless isn't required" },
            ],
          },
          {
            slug: "stainless-steel-square-pipe",
            name: "Stainless Steel Square Pipe",
            icon: "tube-square",
            description: "Box-section stainless pipe for structural framing, railings and fabrication.",
            grades: ["Stainless Steel"],
            specs: [
              { label: "Standard", value: "ASTM A554" },
              { label: "Composition", value: "Austenitic stainless, common grades" },
              { label: "Manufacturing Method", value: "Welded, cold-formed box section" },
              { label: "Dimensional Standard", value: "Sized to ASTM A554" },
              { label: "Surface Finish", value: "Mill finish standard; polished on request" },
              { label: "Typical Applications", value: "Structural framing, railing and architectural fabrication" },
            ],
          },
          {
            slug: "stainless-steel-capillary-tube",
            name: "Stainless Steel Capillary Tube",
            icon: "pipe",
            description: "Very fine-bore precision tube for instrumentation and control lines.",
            grades: ["Stainless Steel"],
            specs: [
              { label: "Standard", value: "ASTM A269 / A213" },
              { label: "Composition", value: "Austenitic stainless, common grades" },
              { label: "Manufacturing Method", value: "Seamless, cold-drawn" },
              { label: "Dimensional Standard", value: "Sized to ASTM A269" },
              { label: "Surface Finish", value: "Bright annealed" },
              { label: "Typical Applications", value: "Instrumentation, control lines and refrigeration" },
            ],
          },
          {
            slug: "stainless-steel-coiled-tubing",
            name: "Stainless Steel Coiled Tubing",
            icon: "coil",
            description: "Long-length tube supplied coiled rather than in straight lengths.",
            grades: ["Stainless Steel"],
            specs: [
              { label: "Standard", value: "ASTM A269" },
              { label: "Composition", value: "Austenitic stainless, common grades" },
              { label: "Manufacturing Method", value: "Seamless, cold-drawn, supplied coiled" },
              { label: "Dimensional Standard", value: "Sized to ASTM A269" },
              { label: "Surface Finish", value: "Bright annealed" },
              { label: "Typical Applications", value: "Long continuous runs for instrumentation and hydraulic lines" },
            ],
          },
          {
            slug: "stainless-steel-sanitary-tube",
            name: "Stainless Steel Sanitary Tube",
            icon: "pipe",
            description: "Polished, hygienic-finish tube for food, dairy and pharmaceutical use.",
            grades: ["Stainless Steel"],
            specs: [
              { label: "Standard", value: "ASTM A270" },
              { label: "Composition", value: "Austenitic stainless, polished bore" },
              { label: "Manufacturing Method", value: "Welded, polished bore" },
              { label: "Dimensional Standard", value: "Sized to ASTM A270" },
              { label: "Surface Finish", value: "Internal bore polished to sanitary (Ra) standard" },
              { label: "Typical Applications", value: "Food, dairy, beverage and pharmaceutical process lines" },
            ],
          },
        ],
      },
      {
        slug: "titanium",
        name: "Titanium",
        icon: "pipe",
        description: "Titanium pipe for extreme-corrosion service where even high-alloy stainless falls short.",
        children: [
          {
            slug: "titanium-pipe",
            name: "Titanium Pipe",
            icon: "pipe",
            description: "General titanium pipe for aggressive chloride and acidic environments.",
            grades: ["Titanium"],
            specs: [
              { label: "Standard", value: "ASTM B861" },
              { label: "Composition", value: "Commercially pure or alloyed titanium, grade to be confirmed" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASTM B861" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Aggressive chloride and acidic process environments" },
            ],
          },
          {
            slug: "titanium-grade-2-pipe",
            name: "Titanium Grade 2 Pipe",
            icon: "pipe",
            description: "Commercially pure titanium — the standard grade for process and marine piping.",
            grades: ["Titanium"],
            specs: [
              { label: "Standard", value: "ASTM B861 Grade 2" },
              { label: "Composition", value: "Commercially pure titanium (CP-Ti)" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASTM B861" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Chemical process, desalination and marine piping" },
            ],
          },
          {
            slug: "titanium-grade-5-pipe",
            name: "Titanium Grade 5 Pipe",
            icon: "pipe",
            description: "Ti-6Al-4V alloy grade, for higher strength where commercially pure titanium isn't stiff enough.",
            grades: ["Titanium"],
            specs: [
              { label: "Standard", value: "ASTM B861 Grade 5" },
              { label: "Composition", value: "Ti-6Al-4V alloy" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASTM B861" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Aerospace, high-strength process and marine piping" },
            ],
          },
        ],
      },
      {
        slug: "duplex-super-duplex",
        name: "Duplex & Super Duplex",
        icon: "pipe",
        description: "Duplex stainless pipe — roughly twice the strength of standard austenitic grades, with better chloride resistance too.",
        children: [
          {
            slug: "duplex-2205-pipe",
            name: "Duplex 2205 Pipe",
            icon: "pipe",
            description: "The workhorse duplex grade, balancing strength and corrosion resistance for offshore and process lines.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A790 / A928, UNS S32205 / S31803" },
              { label: "Composition", value: "22% chromium, 5% nickel, 3% molybdenum duplex structure" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASTM A790" },
              { label: "Surface Finish", value: "Pickled and annealed standard" },
              { label: "Typical Applications", value: "Offshore, chemical-tanker and desalination piping" },
            ],
          },
          {
            slug: "super-duplex-2507-pipe",
            name: "Super Duplex 2507 Pipe",
            icon: "pipe",
            description: "Higher-alloy duplex grade for the most demanding chloride and sour-service conditions.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A790, UNS S32750" },
              { label: "Composition", value: "25% chromium, 7% nickel, 4% molybdenum duplex structure" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASTM A790" },
              { label: "Surface Finish", value: "Pickled and annealed standard" },
              { label: "Typical Applications", value: "Severe offshore and high-chloride process piping" },
            ],
          },
        ],
      },
      {
        slug: "api-5l",
        name: "API 5L",
        icon: "pipe",
        description: "Line pipe to API 5L across the PSL2 grade range, for oil, gas and water transmission.",
        children: [
          {
            slug: "api-5l-pipe",
            name: "API 5L Pipe",
            icon: "pipe",
            description: "General API 5L line pipe — confirm PSL and grade at enquiry.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L, PSL1 / PSL2" },
              { label: "Composition", value: "Carbon-manganese line pipe steel, grade to be confirmed" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "Oil, gas and water transmission pipelines" },
            ],
          },
          {
            slug: "api-5l-x42-pipe",
            name: "API 5L X42 Pipe",
            icon: "pipe",
            description: "Entry-level high-strength line pipe grade for lower-pressure transmission lines.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L PSL2 Grade X42" },
              { label: "Composition", value: "Carbon-manganese steel, min. yield ~290 MPa" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "Lower-pressure gathering and distribution lines" },
            ],
          },
          {
            slug: "api-5l-x52-pipe",
            name: "API 5L X52 Pipe",
            icon: "pipe",
            description: "Mid-strength grade, one of the most widely used for cross-country pipelines.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L PSL2 Grade X52" },
              { label: "Composition", value: "Carbon-manganese steel, min. yield ~360 MPa" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "Cross-country transmission pipelines" },
            ],
          },
          {
            slug: "api-5l-x60-pipe",
            name: "API 5L X60 Pipe",
            icon: "pipe",
            description: "Higher-strength grade allowing a thinner wall for the same pressure rating.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L PSL2 Grade X60" },
              { label: "Composition", value: "Carbon-manganese steel, min. yield ~415 MPa" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "Higher-pressure gas and oil transmission" },
            ],
          },
          {
            slug: "api-5l-x65-pipe",
            name: "API 5L X65 Pipe",
            icon: "pipe",
            description: "High-strength grade used on major long-distance oil and gas trunk lines.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L PSL2 Grade X65" },
              { label: "Composition", value: "Carbon-manganese steel, min. yield ~450 MPa" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "Long-distance high-pressure trunk lines" },
            ],
          },
          {
            slug: "api-5l-x70-pipe",
            name: "API 5L X70 Pipe",
            icon: "pipe",
            description: "Top of the commonly-stocked strength range, for high-pressure transmission service.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L PSL2 Grade X70" },
              { label: "Composition", value: "Carbon-manganese steel, min. yield ~485 MPa" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "High-pressure transmission where thinner walls are needed" },
            ],
          },
          {
            slug: "api-5l-erw-pipe",
            name: "API 5L ERW Pipe",
            icon: "pipe",
            description: "Electric-resistance-welded line pipe to API 5L, the economical option for lower-pressure lines.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L, electric-resistance-welded" },
              { label: "Composition", value: "Carbon-manganese line pipe steel" },
              { label: "Manufacturing Method", value: "Electric-resistance-welded (ERW)" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "Lower-pressure gathering and distribution lines" },
            ],
          },
          {
            slug: "api-5l-grade-b-pipe",
            name: "API 5L Grade B Pipe",
            icon: "pipe",
            description: "The standard base grade of API 5L line pipe, seamless or welded.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "API 5L PSL1 / PSL2 Grade B" },
              { label: "Composition", value: "Carbon-manganese steel, min. yield ~245 MPa" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and wall thickness per API 5L" },
              { label: "Surface Finish", value: "Mill finish, bare or coated on request" },
              { label: "Typical Applications", value: "General-purpose oil and gas line pipe" },
            ],
          },
          {
            slug: "en-10210-s355j2-pipe",
            name: "EN 10210 S355J2 Pipe",
            icon: "pipe",
            description: "Hot-finished structural hollow section to EN 10210, S355J2 impact-tested grade.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "EN 10210-1, Grade S355J2" },
              { label: "Composition", value: "Impact-tested structural carbon steel" },
              { label: "Manufacturing Method", value: "Hot-finished, welded" },
              { label: "Dimensional Standard", value: "Sized per EN 10210-2" },
              { label: "Surface Finish", value: "Mill / hot-finished" },
              { label: "Typical Applications", value: "Hot-finished structural hollow sections for framing" },
            ],
          },
          {
            slug: "en-10210-pipe",
            name: "EN 10210 Pipe",
            icon: "pipe",
            description: "Hot-finished structural hollow sections to EN 10210, for framing and structural fabrication.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "EN 10210-1 / 2" },
              { label: "Composition", value: "Hot-finished structural carbon steel" },
              { label: "Manufacturing Method", value: "Hot-finished, welded" },
              { label: "Dimensional Standard", value: "Sized per EN 10210-2" },
              { label: "Surface Finish", value: "Mill / hot-finished" },
              { label: "Typical Applications", value: "Structural hollow sections for framing and fabrication" },
            ],
          },
        ],
      },
      {
        slug: "alloy-steel-pipe",
        name: "Alloy Steel Pipe",
        icon: "pipe",
        description: "Chrome-moly alloy steel pipe to ASTM A335, for high-temperature and high-pressure service.",
        children: [
          {
            slug: "alloy-steel-pipe-item",
            name: "Alloy Steel Pipe",
            icon: "pipe",
            description: "General chrome-moly alloy pipe — confirm the exact P-grade at enquiry.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A335, grade to be confirmed" },
              { label: "Composition", value: "Chrome-molybdenum alloy steel" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "High-temperature refinery and power-plant piping" },
            ],
          },
          {
            slug: "astm-a335-p5-pipe",
            name: "ASTM A335 P5 Pipe",
            icon: "pipe",
            description: "5% chrome alloy grade for elevated-temperature refinery and process piping.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A335 Grade P5" },
              { label: "Composition", value: "5% chromium, 0.5% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Elevated-temperature refinery piping" },
            ],
          },
          {
            slug: "astm-a335-p9-pipe",
            name: "ASTM A335 P9 Pipe",
            icon: "pipe",
            description: "9% chrome alloy grade, a step up in temperature and corrosion resistance from P5.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A335 Grade P9" },
              { label: "Composition", value: "9% chromium, 1% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Higher-temperature refinery and process piping" },
            ],
          },
          {
            slug: "astm-a335-p11-pipe",
            name: "ASTM A335 P11 Pipe",
            icon: "pipe",
            description: "1.25% chrome, 0.5% moly grade, one of the most widely used alloy pipe grades in refineries.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A335 Grade P11" },
              { label: "Composition", value: "1.25% chromium, 0.5% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Refinery and power-plant high-temperature piping" },
            ],
          },
          {
            slug: "astm-a335-p22-pipe",
            name: "ASTM A335 P22 Pipe",
            icon: "pipe",
            description: "2.25% chrome, 1% moly grade for higher-temperature service than P11.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A335 Grade P22" },
              { label: "Composition", value: "2.25% chromium, 1% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Higher-temperature power-plant piping than P11" },
            ],
          },
          {
            slug: "astm-a335-p91-pipe",
            name: "ASTM A335 P91 Pipe",
            icon: "pipe",
            description: "9% chrome modified grade for the highest-temperature power and process applications.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A335 Grade P91" },
              { label: "Composition", value: "9% chromium, modified with vanadium and niobium" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Highest-temperature power-plant and process piping" },
            ],
          },
        ],
      },
      {
        slug: "copper-nickel",
        name: "Copper Nickel",
        icon: "pipe",
        description: "Copper-nickel pipe for seawater and marine service, valued for its resistance to biofouling.",
        children: [
          {
            slug: "copper-nickel-pipe",
            name: "Copper Nickel Pipe",
            icon: "pipe",
            description: "90/10 and 70/30 copper-nickel pipe for seawater piping and marine heat exchangers.",
            grades: ["Non-Ferrous"],
            specs: [
              { label: "Standard", value: "ASTM B466 / B467" },
              { label: "Composition", value: "90/10 (C70600) or 70/30 (C71500) copper-nickel" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "OD and wall thickness per ASTM B466" },
              { label: "Surface Finish", value: "Mill finish" },
              { label: "Typical Applications", value: "Seawater piping and marine heat exchangers" },
            ],
          },
        ],
      },
      {
        slug: "pipe-standard",
        name: "Pipe Standard",
        icon: "pipe",
        description: "Stainless pipe supplied to a specific dimensional standard, alongside our regular schedule range.",
        children: [
          {
            slug: "asme-b36-19-stainless-steel-pipe",
            name: "ASME B36.19 Stainless Steel Pipe",
            icon: "pipe",
            description: "Stainless pipe dimensioned to ASME B36.19, the companion standard to B36.10M for stainless schedules.",
            grades: ["Stainless Steel"],
            specs: [
              { label: "Standard", value: "ASME B36.19M" },
              { label: "Composition", value: "Austenitic stainless, dimensional standard" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "Schedule series per ASME B36.19M" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Stainless pipe dimensioned per the ASME schedule system" },
            ],
          },
        ],
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        icon: "pipe",
        description: "Carbon steel pipe for general process, structural and utility lines, seamless and welded.",
        children: [
          {
            slug: "carbon-steel-pipe",
            name: "Carbon Steel Pipe",
            icon: "pipe",
            description: "General-purpose carbon steel pipe — confirm schedule and standard at enquiry.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "ASTM A106 / A53, grade to be confirmed" },
              { label: "Composition", value: "Plain carbon steel" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Black / mill finish standard" },
              { label: "Typical Applications", value: "General process, utility and structural piping" },
            ],
          },
          {
            slug: "astm-a106-grade-b-pipe",
            name: "ASTM A106 Grade B Pipe",
            icon: "pipe",
            description: "Seamless carbon steel pipe for high-temperature service, the standard refinery workhorse grade.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "ASTM A106 Grade B" },
              { label: "Composition", value: "Carbon steel, min. yield ~240 MPa" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Black / mill finish standard" },
              { label: "Typical Applications", value: "High-temperature refinery and process piping" },
            ],
          },
          {
            slug: "astm-a53-grade-b-pipe",
            name: "ASTM A53 Grade B Pipe",
            icon: "pipe",
            description: "Seamless or welded carbon steel pipe for general structural and mechanical use.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "ASTM A53 Grade B" },
              { label: "Composition", value: "Carbon steel, seamless or welded" },
              { label: "Manufacturing Method", value: "Seamless or welded (Type E/S)" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Black / mill finish, galvanised on request" },
              { label: "Typical Applications", value: "General structural, mechanical and low-pressure piping" },
            ],
          },
          {
            slug: "astm-a333-grade-6-pipe",
            name: "ASTM A333 Grade 6 Pipe",
            icon: "pipe",
            description: "Impact-tested carbon steel pipe rated for low-temperature service.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "ASTM A333 Grade 6" },
              { label: "Composition", value: "Impact-tested carbon steel" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Black / mill finish standard" },
              { label: "Typical Applications", value: "Low-temperature service down to around -45°C" },
            ],
          },
          {
            slug: "black-steel-pipe",
            name: "Black Steel Pipe",
            icon: "pipe",
            description: "Uncoated mill-finish carbon steel pipe for general piping and structural work.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "ASTM A53 Type E / S" },
              { label: "Composition", value: "Uncoated mill-finish carbon steel" },
              { label: "Manufacturing Method", value: "Seamless or welded" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Black (uncoated) mill finish" },
              { label: "Typical Applications", value: "General piping and structural work" },
            ],
          },
          {
            slug: "sour-service-pipe",
            name: "Sour Service Pipe",
            icon: "pipe",
            description: "Pipe rated for H2S-containing (sour) oil and gas environments.",
            grades: ["Carbon Steel", "Alloy Steel"],
            specs: [
              { label: "Standard", value: "NACE MR0175 / ASTM A106" },
              { label: "Composition", value: "Carbon or low-alloy steel, sulphide-stress-cracking resistant" },
              { label: "Manufacturing Method", value: "Seamless or welded, NACE-compliant processing" },
              { label: "Dimensional Standard", value: "NPS and schedule per ASME B36.10M" },
              { label: "Surface Finish", value: "Black / mill finish standard" },
              { label: "Typical Applications", value: "H2S-containing oil and gas environments" },
            ],
          },
          {
            slug: "drill-pipe",
            name: "Drill Pipe",
            icon: "pipe",
            description: "Oilfield drill pipe for exploration and drilling applications.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "API 5DP" },
              { label: "Composition", value: "Heat-treated alloy steel" },
              { label: "Manufacturing Method", value: "Seamless, heat-treated with upset ends" },
              { label: "Dimensional Standard", value: "Per API 5DP dimensional tables" },
              { label: "Surface Finish", value: "Black / mill finish, tool-joint hardfacing available" },
              { label: "Typical Applications", value: "Oilfield exploration and drilling" },
            ],
          },
          {
            slug: "astm-a210-grade-a1-boiler-tube",
            name: "ASTM A210 Grade A1 Boiler Tube",
            icon: "pipe",
            description: "Seamless carbon steel tube for boiler and superheater service.",
            grades: ["Carbon Steel"],
            specs: [
              { label: "Standard", value: "ASTM A210 Grade A1" },
              { label: "Composition", value: "Carbon steel, seamless" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "OD and minimum wall per ASTM A210" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Boiler and superheater tubing" },
            ],
          },
        ],
      },
      {
        slug: "alloy-steel-tube",
        name: "Alloy Steel Boiler Tube",
        icon: "pipe",
        description: "Chrome-moly alloy steel tube to ASTM A213, for boiler and heat-exchanger service.",
        children: [
          {
            slug: "alloy-steel-tube-item",
            name: "Alloy Steel Tube",
            icon: "pipe",
            description: "General chrome-moly alloy tube — confirm the exact T-grade at enquiry.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A213, grade to be confirmed" },
              { label: "Composition", value: "Chrome-molybdenum alloy steel" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "OD and minimum wall per ASTM A213" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Boiler and superheater tubing" },
            ],
          },
          {
            slug: "astm-a213-t9-tube",
            name: "ASTM A213 T9 Tube",
            icon: "pipe",
            description: "9% chrome boiler tube grade for elevated-temperature superheater service.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A213 Grade T9" },
              { label: "Composition", value: "9% chromium, 1% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "OD and minimum wall per ASTM A213" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Elevated-temperature superheater tubing" },
            ],
          },
          {
            slug: "astm-a213-t11-tube",
            name: "ASTM A213 T11 Tube",
            icon: "pipe",
            description: "1.25% chrome, 0.5% moly boiler tube grade, widely used in power plant boilers.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A213 Grade T11" },
              { label: "Composition", value: "1.25% chromium, 0.5% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "OD and minimum wall per ASTM A213" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Power-plant boiler tubing" },
            ],
          },
          {
            slug: "astm-a213-t22-tube",
            name: "ASTM A213 T22 Tube",
            icon: "pipe",
            description: "2.25% chrome, 1% moly boiler tube grade for higher-temperature service than T11.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A213 Grade T22" },
              { label: "Composition", value: "2.25% chromium, 1% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "OD and minimum wall per ASTM A213" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Higher-temperature boiler tubing than T11" },
            ],
          },
          {
            slug: "astm-a213-t91-tube",
            name: "ASTM A213 T91 Tube",
            icon: "pipe",
            description: "9% chrome modified grade for the highest-temperature boiler and superheater duty.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM A213 Grade T91" },
              { label: "Composition", value: "9% chromium, modified with vanadium and niobium" },
              { label: "Manufacturing Method", value: "Seamless" },
              { label: "Dimensional Standard", value: "OD and minimum wall per ASTM A213" },
              { label: "Surface Finish", value: "Mill / pickled standard" },
              { label: "Typical Applications", value: "Highest-temperature boiler and superheater duty" },
            ],
          },
        ],
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        icon: "pipe",
        description: "Nickel-alloy pipe for the most severe corrosion and high-temperature service.",
        children: [
          {
            slug: "inconel-600-pipe",
            name: "Inconel 600 Pipe",
            icon: "pipe",
            description: "Nickel-chromium alloy for oxidation resistance at high temperature.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM B167, UNS N06600" },
              { label: "Composition", value: "72% nickel, 14-17% chromium" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "OD and wall per ASTM B167" },
              { label: "Surface Finish", value: "Mill / pickled standard, bright-annealed on request" },
              { label: "Typical Applications", value: "High-temperature oxidation-resistant piping" },
            ],
          },
          {
            slug: "inconel-625-pipe",
            name: "Inconel 625 Pipe",
            icon: "pipe",
            description: "Nickel-chromium-molybdenum alloy for severe marine and high-temperature corrosion.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM B444, UNS N06625" },
              { label: "Composition", value: "58% nickel, 20-23% chromium, 8-10% molybdenum" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "OD and wall per ASTM B444" },
              { label: "Surface Finish", value: "Mill / pickled standard, bright-annealed on request" },
              { label: "Typical Applications", value: "Severe marine and high-temperature corrosion service" },
            ],
          },
          {
            slug: "hastelloy-c276-pipe",
            name: "Hastelloy C276 Pipe",
            icon: "pipe",
            description: "Nickel-molybdenum-chromium alloy for the most aggressive acid and chloride environments.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM B622, UNS N10276" },
              { label: "Composition", value: "Nickel-molybdenum-chromium alloy" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "OD and wall per ASTM B622" },
              { label: "Surface Finish", value: "Mill / pickled standard, bright-annealed on request" },
              { label: "Typical Applications", value: "Aggressive acid and chloride environments" },
            ],
          },
          {
            slug: "monel-400-pipe",
            name: "Monel 400 Pipe",
            icon: "pipe",
            description: "Nickel-copper alloy prized for resistance to hydrofluoric acid and seawater.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM B165, UNS N04400" },
              { label: "Composition", value: "63-70% nickel, 28-34% copper" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "OD and wall per ASTM B165" },
              { label: "Surface Finish", value: "Mill / pickled standard, bright-annealed on request" },
              { label: "Typical Applications", value: "Hydrofluoric acid and seawater service" },
            ],
          },
          {
            slug: "inconel-825-pipe",
            name: "Inconel 825 Pipe",
            icon: "pipe",
            description: "Nickel-iron-chromium alloy for sulphuric and phosphoric acid service.",
            grades: ["Alloy Steel"],
            specs: [
              { label: "Standard", value: "ASTM B423, UNS N08825" },
              { label: "Composition", value: "38-46% nickel, 19.5-23.5% chromium, 2.5-3.5% copper" },
              { label: "Manufacturing Method", value: "Seamless and welded" },
              { label: "Dimensional Standard", value: "OD and wall per ASTM B423" },
              { label: "Surface Finish", value: "Mill / pickled standard, bright-annealed on request" },
              { label: "Typical Applications", value: "Sulphuric and phosphoric acid service" },
            ],
          },
        ],
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
        slug: "stainless-steel",
        name: "Stainless Steel",
        icon: "elbow",
        description: "Stainless buttweld, forged, threaded and socket-weld fittings across the 300-series grade range.",
        children: [
          {
            slug: "stainless-steel-pipe-fittings",
            name: "Stainless Steel Pipe Fittings",
            icon: "elbow",
            description: "General-purpose stainless fittings across common austenitic grades — confirm your exact grade and type at enquiry.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-304-pipe-fittings",
            name: "Stainless Steel 304 Pipe Fittings",
            icon: "elbow",
            description: "The standard general-purpose austenitic grade, for fittings that don't see aggressive chlorides.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-304l-pipe-fittings",
            name: "Stainless Steel 304L Pipe Fittings",
            icon: "elbow",
            description: "Low-carbon version of 304 — resists weld decay, the usual pick for fittings welded in the field.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-316-pipe-fittings",
            name: "Stainless Steel 316 Pipe Fittings",
            icon: "elbow",
            description: "Molybdenum-bearing grade with markedly better chloride and pitting resistance than 304.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-316l-pipe-fittings",
            name: "Stainless Steel 316L Pipe Fittings",
            icon: "elbow",
            description: "Low-carbon 316 — the standard choice for welded fittings in marine and chemical-process service.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-321-pipe-fittings",
            name: "Stainless Steel 321 Pipe Fittings",
            icon: "elbow",
            description: "Titanium-stabilised grade for sustained service above 425°C, where 304/316 would sensitise.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-forged-fittings",
            name: "Stainless Steel Forged Fittings",
            icon: "coupling",
            description: "Forged socket-weld and threaded fittings for smaller, higher-pressure bores.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-threaded-fittings",
            name: "Stainless Steel Threaded Fittings",
            icon: "coupling",
            description: "Screwed fittings for lines where welding isn't practical.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-socket-weld-fittings",
            name: "Stainless Steel Socket Weld Fittings",
            icon: "coupling",
            description: "Socket-weld fittings for smaller-bore, higher-pressure piping.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-pipe-elbow",
            name: "Stainless Steel Pipe Elbow",
            icon: "elbow",
            description: "Long and short radius elbows for changes in line direction.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-union-fittings",
            name: "Stainless Steel Union Fittings",
            icon: "coupling",
            description: "Three-piece unions for lines that need to be opened for maintenance.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-tube-fittings",
            name: "Stainless Steel Tube Fittings",
            icon: "coupling",
            description: "Compression and ferrule-style fittings for instrumentation tubing.",
            grades: ["Stainless Steel"],
          },
        ],
      },
      {
        slug: "duplex-super-duplex",
        name: "Duplex & Super Duplex",
        icon: "elbow",
        description: "Duplex stainless fittings matched to our duplex pipe range.",
        children: [
          {
            slug: "duplex-2205-pipe-fittings",
            name: "Duplex 2205 Pipe Fittings",
            icon: "elbow",
            description: "The workhorse duplex grade, balancing strength and corrosion resistance.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "super-duplex-2507-pipe-fittings",
            name: "Super Duplex 2507 Pipe Fittings",
            icon: "elbow",
            description: "Higher-alloy duplex grade for the most demanding chloride and sour-service conditions.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        icon: "elbow",
        description: "Carbon steel buttweld and forged fittings for general process and pipeline service.",
        children: [
          {
            slug: "carbon-steel-pipe-fittings",
            name: "Carbon Steel Pipe Fittings",
            icon: "elbow",
            description: "General-purpose carbon steel fittings — confirm schedule and standard at enquiry.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a105-forged-fittings",
            name: "ASTM A105 Forged Fittings",
            icon: "coupling",
            description: "Forged carbon steel fittings, the standard grade for socket-weld and threaded connections.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a234-wpb-fittings",
            name: "ASTM A234 WPB Fittings",
            icon: "elbow",
            description: "Buttweld carbon steel fittings matched to standard-temperature A106/A53 pipe.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a420-wpl6-fittings",
            name: "ASTM A420 WPL6 Fittings",
            icon: "elbow",
            description: "Low-temperature carbon steel buttweld fittings, impact-tested for cold service.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a860-wphy-42-fittings",
            name: "ASTM A860 WPHY 42 Fittings",
            icon: "elbow",
            description: "High-yield buttweld fittings matched to API 5L X42 line pipe.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a860-wphy-52-fittings",
            name: "ASTM A860 WPHY 52 Fittings",
            icon: "elbow",
            description: "High-yield buttweld fittings matched to API 5L X52 line pipe.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a860-wphy-60-fittings",
            name: "ASTM A860 WPHY 60 Fittings",
            icon: "elbow",
            description: "High-yield buttweld fittings matched to API 5L X60 line pipe.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a860-wphy-65-fittings",
            name: "ASTM A860 WPHY 65 Fittings",
            icon: "elbow",
            description: "High-yield buttweld fittings matched to API 5L X65 line pipe.",
            grades: ["Carbon Steel"],
          },
        ],
      },
      {
        slug: "copper-nickel",
        name: "Copper Nickel",
        icon: "elbow",
        description: "Copper-nickel fittings for seawater and marine piping systems.",
        children: [
          {
            slug: "copper-nickel-pipe-fittings",
            name: "Copper Nickel Pipe Fittings",
            icon: "elbow",
            description: "90/10 and 70/30 copper-nickel fittings for seawater piping and marine heat exchangers.",
            grades: ["Non-Ferrous"],
          },
        ],
      },
      {
        slug: "mss-sp75",
        name: "MSS SP-75",
        icon: "coupling",
        description: "High-yield buttweld fittings to MSS SP-75, for line pipe applications beyond the standard ASME B16.9 range.",
        children: [
          {
            slug: "mss-sp-75-fittings",
            name: "MSS SP-75 Fittings",
            icon: "coupling",
            description: "Wrought high-yield buttweld fittings to MSS SP-75, matched to API 5L pipeline grades.",
            grades: ["Carbon Steel"],
          },
        ],
      },
      {
        slug: "types-of-fittings",
        name: "Types of Fittings",
        icon: "elbow",
        description: "Fitting shapes and connection types available across our stainless, carbon and alloy steel range.",
        children: [
          {
            slug: "asme-b16-9-elbow",
            name: "ASME B16.9 Elbow",
            icon: "elbow",
            description: "Long and short radius 45°, 90° and 180° buttweld elbows, sized to match pipe schedule.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "asme-b16-9-equal-tee",
            name: "ASME B16.9 Equal Tee",
            icon: "tee",
            description: "Equal and reducing buttweld tees for branch connections.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "asme-b16-9-reducer",
            name: "ASME B16.9 Reducer",
            icon: "reducer",
            description: "Concentric and eccentric buttweld reducers for stepping between pipe sizes.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "asme-b16-9-end-cap",
            name: "ASME B16.9 End Cap",
            icon: "cap",
            description: "Buttweld end caps for terminating a line.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "asme-b16-9-stub-end",
            name: "ASME B16.9 Stub End",
            icon: "stub-end",
            description: "Paired with a lap joint flange for easy alignment and dismantling.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "asme-b16-11-fittings",
            name: "ASME B16.11 Fittings",
            icon: "coupling",
            description: "Forged socket-weld and threaded fittings to ASME B16.11 for smaller, higher-pressure bores.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
        ],
      },
      {
        slug: "alloy-steel",
        name: "Alloy Steel",
        icon: "elbow",
        description: "Chrome-moly alloy steel fittings matched to our A335 alloy pipe range.",
        children: [
          {
            slug: "alloy-steel-pipe-fittings",
            name: "Alloy Steel Pipe Fittings",
            icon: "elbow",
            description: "General chrome-moly alloy fittings — confirm the exact WP-grade at enquiry.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a234-wp5-fittings",
            name: "ASTM A234 WP5 Fittings",
            icon: "elbow",
            description: "5% chrome alloy fittings matched to P5 pipe.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a234-wp9-pipe-fittings",
            name: "ASTM A234 WP9 Pipe Fittings",
            icon: "elbow",
            description: "9% chrome alloy fittings matched to P9 pipe.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a234-wp11-fittings",
            name: "ASTM A234 WP11 Fittings",
            icon: "elbow",
            description: "1.25% chrome, 0.5% moly fittings matched to P11 pipe.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a234-wp22-fittings",
            name: "ASTM A234 WP22 Fittings",
            icon: "elbow",
            description: "2.25% chrome, 1% moly fittings matched to P22 pipe.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a234-wp91-pipe-fittings",
            name: "ASTM A234 WP91 Pipe Fittings",
            icon: "elbow",
            description: "9% chrome modified fittings matched to P91 pipe.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        icon: "elbow",
        description: "Nickel-alloy fittings for the most severe corrosion and high-temperature service.",
        children: [
          {
            slug: "inconel-600-pipe-fittings",
            name: "Inconel 600 Pipe Fittings",
            icon: "elbow",
            description: "Nickel-chromium alloy fittings for oxidation resistance at high temperature.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "inconel-625-pipe-fittings",
            name: "Inconel 625 Pipe Fittings",
            icon: "elbow",
            description: "Nickel-chromium-molybdenum alloy fittings for severe marine and high-temperature corrosion.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "hastelloy-c276-pipe-fittings",
            name: "Hastelloy C276 Pipe Fittings",
            icon: "elbow",
            description: "Nickel-molybdenum-chromium alloy fittings for the most aggressive acid and chloride environments.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "monel-400-pipe-fittings",
            name: "Monel 400 Pipe Fittings",
            icon: "elbow",
            description: "Nickel-copper alloy fittings prized for resistance to hydrofluoric acid and seawater.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "inconel-825-fittings",
            name: "Inconel 825 Fittings",
            icon: "elbow",
            description: "Nickel-iron-chromium alloy fittings for sulphuric and phosphoric acid service.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "brass",
        name: "Brass",
        icon: "coupling",
        description: "Brass fittings for plumbing, instrumentation and general fabrication.",
        children: [
          {
            slug: "brass-fittings",
            name: "Brass Fittings",
            icon: "coupling",
            description: "Threaded brass fittings for water lines, pneumatics and general fabrication.",
            grades: ["Non-Ferrous"],
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
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        icon: "flange",
        description: "Stainless flanges across the 300-series grade range, to ASME B16.5.",
        children: [
          {
            slug: "stainless-steel-flanges",
            name: "Stainless Steel Flanges",
            icon: "flange",
            description: "General-purpose stainless flanges across common austenitic grades — confirm your exact grade and type at enquiry.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-304-flanges",
            name: "Stainless Steel 304 Flanges",
            icon: "flange",
            description: "The standard general-purpose austenitic grade, for flanges that don't see aggressive chlorides.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-304l-flanges",
            name: "Stainless Steel 304L Flanges",
            icon: "flange",
            description: "Low-carbon version of 304 — resists weld decay around the hub weld.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-316-flanges",
            name: "Stainless Steel 316 Flanges",
            icon: "flange",
            description: "Molybdenum-bearing grade with markedly better chloride and pitting resistance than 304.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-316l-flanges",
            name: "Stainless Steel 316L Flanges",
            icon: "flange",
            description: "Low-carbon 316 — the standard choice for welded flanges in marine and chemical-process service.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-321-flanges",
            name: "Stainless Steel 321 Flanges",
            icon: "flange",
            description: "Titanium-stabilised grade for sustained service above 425°C, where 304/316 would sensitise.",
            grades: ["Stainless Steel"],
          },
        ],
      },
      {
        slug: "duplex-super-duplex",
        name: "Duplex & Super Duplex",
        icon: "flange",
        description: "Duplex stainless flanges matched to our duplex pipe and fitting range.",
        children: [
          {
            slug: "duplex-2205-flanges",
            name: "Duplex 2205 Flanges",
            icon: "flange",
            description: "The workhorse duplex grade, balancing strength and corrosion resistance.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "super-duplex-2507-flanges",
            name: "Super Duplex 2507 Flanges",
            icon: "flange",
            description: "Higher-alloy duplex grade for the most demanding chloride and sour-service conditions.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        icon: "flange",
        description: "Carbon steel flanges for general process and structural piping.",
        children: [
          {
            slug: "carbon-steel-flanges",
            name: "Carbon Steel Flanges",
            icon: "flange",
            description: "General-purpose carbon steel flanges — confirm class and facing at enquiry.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a105-flange",
            name: "ASTM A105 Flange",
            icon: "flange",
            description: "Forged carbon steel flange, the standard grade for general process piping.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a350-lf2-flanges",
            name: "ASTM A350 LF2 Flanges",
            icon: "flange",
            description: "Low-temperature carbon steel flanges, impact-tested for cold service.",
            grades: ["Carbon Steel"],
          },
        ],
      },
      {
        slug: "other-materials",
        name: "Other Materials",
        icon: "flange",
        description: "Flanges outside our main stainless, carbon and alloy steel ranges.",
        children: [
          {
            slug: "api-flanges",
            name: "API Flanges",
            icon: "flange",
            description: "Flanges to API 6A specification for wellhead and Christmas-tree assemblies.",
            grades: ["Carbon Steel", "Alloy Steel"],
          },
          {
            slug: "mild-steel-flange",
            name: "Mild Steel Flange",
            icon: "flange",
            description: "General mild steel flange for low-pressure utility and structural piping.",
            grades: ["Mild Steel"],
          },
          {
            slug: "copper-nickel-flanges",
            name: "Copper Nickel Flanges",
            icon: "flange",
            description: "90/10 and 70/30 copper-nickel flanges for seawater piping systems.",
            grades: ["Non-Ferrous"],
          },
        ],
      },
      {
        slug: "types-of-flanges",
        name: "Types of Flanges",
        icon: "flange",
        description: "Flange styles and facings available across our stainless, carbon and alloy steel range.",
        children: [
          {
            slug: "blind-flange",
            name: "Blind Flange",
            icon: "flange",
            description: "Seals off a line end or branch.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "rtj-flange",
            name: "RTJ Flange",
            icon: "flange",
            description: "Ring Type Joint flange with a metal ring-gasket seal for high-pressure, high-temperature service.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "asme-b16-5-weld-neck-flange",
            name: "ASME B16.5 Weld Neck Flange",
            icon: "flange",
            description: "Butt-welded to pipe, for high-pressure and cyclic service.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "slip-on-flange",
            name: "Slip On Flange",
            icon: "flange",
            description: "Slides over the pipe before fillet welding — easier alignment.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "asme-b16-5-plate-flanges",
            name: "ASME B16.5 Plate Flanges",
            icon: "flange",
            description: "Flanges machined from plate rather than forged, for larger or non-standard sizes.",
            grades: ["Stainless Steel", "Carbon Steel"],
          },
          {
            slug: "forged-flanges",
            name: "Forged Flanges",
            icon: "flange",
            description: "Forged construction for maximum strength and integrity under pressure.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "orifice-flange",
            name: "Orifice Flange",
            icon: "flange",
            description: "Paired flanges with tapped holes for orifice-plate flow metering.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
          {
            slug: "en-1092-1-flanges",
            name: "EN 1092-1 Flanges",
            icon: "flange",
            description: "European-standard flanges to EN 1092-1, PN-rated rather than ASME class-rated.",
            grades: ["Stainless Steel", "Carbon Steel"],
          },
          {
            slug: "asme-b16-5-flange",
            name: "ASME B16.5 Flange",
            icon: "flange",
            description: "General flange to ASME B16.5 — Classes 150 through 2500, NPS 1/2 through 24.",
            grades: ["Stainless Steel", "Alloy Steel"],
          },
        ],
      },
      {
        slug: "alloy-steel",
        name: "Alloy Steel",
        icon: "flange",
        description: "Chrome-moly alloy steel flanges matched to our A335 alloy pipe range.",
        children: [
          {
            slug: "alloy-steel-flanges",
            name: "Alloy Steel Flanges",
            icon: "flange",
            description: "General chrome-moly alloy flanges — confirm the exact F-grade at enquiry.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a182-f5-flanges",
            name: "ASTM A182 F5 Flanges",
            icon: "flange",
            description: "5% chrome alloy flanges matched to P5 pipe.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a182-f9-flanges",
            name: "ASTM A182 F9 Flanges",
            icon: "flange",
            description: "9% chrome alloy flanges matched to P9 pipe.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a182-f11-flanges",
            name: "ASTM A182 F11 Flanges",
            icon: "flange",
            description: "1.25% chrome, 0.5% moly flanges matched to P11 pipe.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a182-f22-flanges",
            name: "ASTM A182 F22 Flanges",
            icon: "flange",
            description: "2.25% chrome, 1% moly flanges matched to P22 pipe.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        icon: "flange",
        description: "Nickel-alloy flanges for the most severe corrosion and high-temperature service.",
        children: [
          {
            slug: "inconel-600-flanges",
            name: "Inconel 600 Flanges",
            icon: "flange",
            description: "Nickel-chromium alloy flanges for oxidation resistance at high temperature.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "inconel-625-flanges",
            name: "Inconel 625 Flanges",
            icon: "flange",
            description: "Nickel-chromium-molybdenum alloy flanges for severe marine and high-temperature corrosion.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "hastelloy-c276-flanges",
            name: "Hastelloy C276 Flanges",
            icon: "flange",
            description: "Nickel-molybdenum-chromium alloy flanges for the most aggressive acid and chloride environments.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "monel-400-flanges",
            name: "Monel 400 Flanges",
            icon: "flange",
            description: "Nickel-copper alloy flanges prized for resistance to hydrofluoric acid and seawater.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "inconel-825-flanges",
            name: "Inconel 825 Flanges",
            icon: "flange",
            description: "Nickel-iron-chromium alloy flanges for sulphuric and phosphoric acid service.",
            grades: ["Alloy Steel"],
          },
        ],
      },
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
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        icon: "sheet",
        description: "Stainless sheet, plate, coil and flat-rolled sections across the 300-series grade range.",
        children: [
          {
            slug: "stainless-steel-sheet",
            name: "Stainless Steel Sheet",
            icon: "sheet",
            description: "General-purpose stainless sheet across common austenitic grades, 2B to mirror finish.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-304-sheet",
            name: "Stainless Steel 304 Sheet",
            icon: "sheet",
            description: "The standard general-purpose austenitic grade, for sheet that doesn't see aggressive chlorides.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-304l-sheet",
            name: "Stainless Steel 304L Sheet",
            icon: "sheet",
            description: "Low-carbon version of 304 — resists weld decay along fabricated seams.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-316-sheet",
            name: "Stainless Steel 316 Sheet",
            icon: "sheet",
            description: "Molybdenum-bearing grade with markedly better chloride and pitting resistance than 304.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-316l-sheet",
            name: "Stainless Steel 316L Sheet",
            icon: "sheet",
            description: "Low-carbon 316 — the standard choice for welded sheet fabrication in marine and process plant.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-321-sheet",
            name: "Stainless Steel 321 Sheet",
            icon: "sheet",
            description: "Titanium-stabilised grade for sustained service above 425°C, where 304/316 would sensitise.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-310-sheet",
            name: "Stainless Steel 310 Sheet",
            icon: "sheet",
            description: "High-chromium, high-nickel grade for furnace linings and other high-temperature panels.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-317-sheet",
            name: "Stainless Steel 317 Sheet",
            icon: "sheet",
            description: "Higher-molybdenum than 316, for sheet in service with stronger acids and chlorides.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-904l-sheet",
            name: "Stainless Steel 904L Sheet",
            icon: "sheet",
            description: "High-alloy austenitic grade for sulphuric acid and other severely corrosive process duty.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-coil",
            name: "Stainless Steel Coil",
            icon: "coil",
            description: "Hot- and cold-rolled stainless coil, stocked and re-rollable widths.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-strip",
            name: "Stainless Steel Strip",
            icon: "strip",
            description: "Slit stainless coil to a specified width and temper.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-chequered-plate",
            name: "Stainless Steel Chequered Plate",
            icon: "sheet",
            description: "Raised-pattern plate for anti-slip flooring and walkways.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-angle",
            name: "Stainless Steel Angle",
            icon: "angle",
            description: "Equal and unequal stainless angles for structural framing.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-channel",
            name: "Stainless Steel Channel",
            icon: "i-beam",
            description: "Stainless channel sections for structural framing and fabrication.",
            grades: ["Stainless Steel"],
          },
          {
            slug: "stainless-steel-circle",
            name: "Stainless Steel Circle",
            icon: "circle-blank",
            description: "Blanked circles for utensil, tank-head and fabrication use.",
            grades: ["Stainless Steel"],
          },
        ],
      },
      {
        slug: "duplex-super-duplex",
        name: "Duplex & Super Duplex",
        icon: "sheet",
        description: "Duplex stainless plate matched to our duplex pipe and fitting range.",
        children: [
          {
            slug: "duplex-2205-plate",
            name: "Duplex 2205 Plate",
            icon: "sheet",
            description: "The workhorse duplex grade, balancing strength and corrosion resistance.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "super-duplex-2507-plate",
            name: "Super Duplex 2507 Plate",
            icon: "sheet",
            description: "Higher-alloy duplex grade for the most demanding chloride and sour-service conditions.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        icon: "sheet",
        description: "Carbon steel plate for structural, pressure-vessel and general fabrication use.",
        children: [
          {
            slug: "carbon-steel-plate",
            name: "Carbon Steel Plate",
            icon: "sheet",
            description: "General-purpose carbon steel plate — confirm grade and thickness at enquiry.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "is-2062-grade-b-plate",
            name: "IS 2062 Grade B Plate",
            icon: "sheet",
            description: "Indian-standard structural steel plate for general fabrication and construction.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a36-steel-plate",
            name: "ASTM A36 Steel Plate",
            icon: "sheet",
            description: "General-purpose structural carbon steel plate, the most widely specified structural grade.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a515-gr-70-plates",
            name: "ASTM A515 Gr 70 Plates",
            icon: "sheet",
            description: "Pressure-vessel plate for moderate- and higher-temperature service.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a515-gr-60-plates",
            name: "ASTM A515 Gr 60 Plates",
            icon: "sheet",
            description: "Pressure-vessel plate, a lower-strength option in the A515 range.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a516-gr-60-plates",
            name: "ASTM A516 Gr 60 Plates",
            icon: "sheet",
            description: "Pressure-vessel plate for lower-temperature service, better notch toughness than A515.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a516-gr-65-plate",
            name: "ASTM A516 Gr 65 Plate",
            icon: "sheet",
            description: "Pressure-vessel plate, a mid-strength option in the A516 range.",
            grades: ["Carbon Steel"],
          },
          {
            slug: "astm-a516-gr-70-plate",
            name: "ASTM A516 Gr 70 Plate",
            icon: "sheet",
            description: "The most widely used pressure-vessel plate grade, for boilers and storage tanks.",
            grades: ["Carbon Steel"],
          },
        ],
      },
      {
        slug: "titanium",
        name: "Titanium",
        icon: "sheet",
        description: "Titanium sheet for extreme-corrosion service where even high-alloy stainless falls short.",
        children: [
          {
            slug: "titanium-sheet",
            name: "Titanium Sheet",
            icon: "sheet",
            description: "General titanium sheet for aggressive chloride and acidic environments.",
            grades: ["Titanium"],
          },
          {
            slug: "titanium-grade-2-sheet",
            name: "Titanium Grade 2 Sheet",
            icon: "sheet",
            description: "Commercially pure titanium — the standard grade for process and marine plate work.",
            grades: ["Titanium"],
          },
          {
            slug: "titanium-grade-5-sheet",
            name: "Titanium Grade 5 Sheet",
            icon: "sheet",
            description: "Ti-6Al-4V alloy grade, for higher strength where commercially pure titanium isn't stiff enough.",
            grades: ["Titanium"],
          },
        ],
      },
      {
        slug: "other-materials",
        name: "Other Materials",
        icon: "sheet",
        description: "Sheet and plate outside our main stainless, carbon and alloy steel ranges.",
        children: [
          {
            slug: "mild-steel-plate",
            name: "Mild Steel Plate",
            icon: "sheet",
            description: "General mild steel plate for structural and general fabrication use.",
            grades: ["Mild Steel"],
          },
          {
            slug: "copper-nickel-plate",
            name: "Copper Nickel Plate",
            icon: "sheet",
            description: "90/10 and 70/30 copper-nickel plate for seawater and marine fabrication.",
            grades: ["Non-Ferrous"],
          },
          {
            slug: "copper-sheet",
            name: "Copper Sheet",
            icon: "sheet",
            description: "Pure copper sheet for electrical, roofing and architectural work.",
            grades: ["Non-Ferrous"],
          },
        ],
      },
      {
        slug: "alloy-steel",
        name: "Alloy Steel",
        icon: "sheet",
        description: "Chrome-moly alloy steel plate for high-temperature pressure-vessel service.",
        children: [
          {
            slug: "alloy-steel-plate",
            name: "Alloy Steel Plate",
            icon: "sheet",
            description: "General chrome-moly alloy plate — confirm the exact grade at enquiry.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a387-gr-5-plate",
            name: "ASTM A387 Gr 5 Plate",
            icon: "sheet",
            description: "5% chrome alloy plate for elevated-temperature pressure-vessel service.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a387-gr-9-plate",
            name: "ASTM A387 Gr 9 Plate",
            icon: "sheet",
            description: "9% chrome alloy plate, a step up in temperature and corrosion resistance from Gr 5.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a387-gr-11-plate",
            name: "ASTM A387 Gr 11 Plate",
            icon: "sheet",
            description: "1.25% chrome, 0.5% moly plate, one of the most widely used alloy plate grades.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a387-gr-12-plate",
            name: "ASTM A387 Gr 12 Plate",
            icon: "sheet",
            description: "1% chrome, 0.5% moly plate for moderate-temperature pressure-vessel service.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "astm-a387-gr-22-plate",
            name: "ASTM A387 Gr 22 Plate",
            icon: "sheet",
            description: "2.25% chrome, 1% moly plate for higher-temperature service than Gr 11.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        icon: "sheet",
        description: "Nickel-alloy plate for the most severe corrosion and high-temperature service.",
        children: [
          {
            slug: "nickel-alloy-plate",
            name: "Nickel Alloy Plate",
            icon: "sheet",
            description: "General nickel-alloy plate — confirm the exact alloy at enquiry.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "inconel-600-plate",
            name: "Inconel 600 Plate",
            icon: "sheet",
            description: "Nickel-chromium alloy plate for oxidation resistance at high temperature.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "inconel-625-plate",
            name: "Inconel 625 Plate",
            icon: "sheet",
            description: "Nickel-chromium-molybdenum alloy plate for severe marine and high-temperature corrosion.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "hastelloy-c276-plate",
            name: "Hastelloy C276 Plate",
            icon: "sheet",
            description: "Nickel-molybdenum-chromium alloy plate for the most aggressive acid and chloride environments.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "monel-400-plate",
            name: "Monel 400 Plate",
            icon: "sheet",
            description: "Nickel-copper alloy plate prized for resistance to hydrofluoric acid and seawater.",
            grades: ["Alloy Steel"],
          },
          {
            slug: "inconel-825-plate",
            name: "Inconel 825 Plate",
            icon: "sheet",
            description: "Nickel-iron-chromium alloy plate for sulphuric and phosphoric acid service.",
            grades: ["Alloy Steel"],
          },
        ],
      },
      {
        slug: "brass",
        name: "Brass",
        icon: "sheet",
        description: "Brass sheet for architectural, decorative and general fabrication use.",
        children: [
          {
            slug: "brass-sheet",
            name: "Brass Sheet",
            icon: "sheet",
            description: "General brass sheet for architectural trim, decorative work and fabrication.",
            grades: ["Non-Ferrous"],
          },
        ],
      },
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

// Groups a node's dataTables by their optional `group` field, preserving
// first-seen group order. Tables with no `group` come back as a single
// entry with group: null — so nodes with just a couple of flat tables
// (e.g. the individual grade pages) render exactly as before, with no
// section headings or jump-nav. Add `group: "Some Label"` to a table's
// entry in catalog.js to opt it into the grouped, collapsible layout.
export function groupDataTables(dataTables = []) {
  const order = [];
  const map = new Map();
  for (const t of dataTables) {
    const key = t.group || null;
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key).push(t);
  }
  return order.map((key) => ({ group: key, tables: map.get(key) }));
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