// Company facts, sourced from the firm's registration documents.
// Update here and it flows through the entire site.

export const company = {
  legalTradeName: "Om Poonam Metal Overseas",
  proprietor: "Harachndram V. Purohit",
  proprietorInitialed: "H. V. Purohit",
  designation: "Proprietor",
  constitution: "Proprietorship",
  founded: 2021,
  groupConcern: "Vardhman Steel India",

  address: {
    line1: "Shop No. 5, Ravi Estate",
    line2: "Keval Kantha Road, Near Gujarat Bottling Road",
    line3: "Industrial Area, Rakhial",
    city: "Ahmedabad",
    state: "Gujarat",
    pin: "380023",
    country: "India",
    full: "Shop No. 5, Ravi Estate, Keval Kantha Road, Near Gujarat Bottling Road, Industrial Area, Rakhial, Ahmedabad, Gujarat – 380023, India",
    mapQuery:
      "Shop No. 17, Ravi Estate, Keval Kantha Road, Near Gujarat Bottling Road, Industrial Area, Rakhial, Ahmedabad, Gujarat 380023",
    // Exact pin, from the location shared directly (resolves to the same
    // small cluster of Keval Kantha Road businesses as the address above).
    // Takes priority over mapQuery in components/GoogleMap.js — remove
    // this object if you ever want to fall back to the text-address pin.
    mapCoordinates: { lat: 23.0147043, lng: 72.6312331 },
  },

  contact: {
    phoneDisplay: "+91 93240 06771",
    phoneE164: "+919324006771",
    // Printed on every page of the firm's official print catalogue
    // (shared with group concern Vardhman Steel India on the back
    // cover). Kept as clearly-labelled secondary numbers alongside the
    // primary above.
    alternatePhones: [
      { display: "+91 79778 39113", e164: "+917977839113" },
    ],
    // NOTE: left pointing at the old primary number — this hasn't been
    // confirmed as WhatsApp-enabled, so it wasn't changed automatically
    // when the primary phone number switched. Update this to
    // "919324006771" once you've confirmed WhatsApp is active on the new
    // primary number, otherwise the WhatsApp button will message a
    // different number than the one now shown as primary.
    whatsapp: "919324006771",
    email: "exportompmo@gmail.com",
    // Makes the contact form actually send email instead of just opening
    // the visitor's own email app. Free, no account needed:
    //   1. Go to https://web3forms.com
    //   2. Enter this inbox's email address, click "Create Access Key"
    //   3. Copy the key from the email it sends you, paste it below
    web3formsKey: "1042bd3b-0877-43e6-af06-2c8ba9e15c92",
    hours: {
      weekdays: "Monday – Saturday",
      weekdayTime: "8:00 AM – 8:00 PM",
      sunday: "Closed",
    },
  },

  registrations: {
    gstin: "24ATBPP2924Q1ZC",
    iec: "ATBPP2924Q",
    udyam: "UDYAM-MH-19-0093323",
    udyamType: "Micro Enterprise",
  },

  certification: {
    standard: "ISO 9001:2015",
    scheme: "Quality Management System",
    certificateNo: "VW26080020",
    issuingBody: "Vatsin World Services Private Limited",
    issuingBodyAccreditation: "IAF / KAB-QC-90",
    initialRegistration: "04-08-2026",
    dateOfExpiry: "03-08-2029",
    firstSurveillance: "03-07-2027",
    secondSurveillance: "03-07-2028",
    verifyUrl: "https://www.vatsinworldservices.org/",
  },

  scopeStatement:
    "Manufacturing, trading, stocking, import, export and supply of stainless steel (SS), alloy steel, copper, brass, aluminium, tin, zinc, cobalt, cadmium, nickel, molybdenum, mercury, bismuth, lead, titanium, Inconel, Hastelloy, Monel, duplex and super duplex products, sheets, plates (patta), strips (patti), coils, pipes, tubes, fittings, flanges, fasteners, SS and PVC furniture, structural materials, industrial hardware, and other ferrous and non-ferrous metal products.",

  stats: [
    { value: "17+", label: "Stainless steel grades stocked" },
    { value: "30+", label: "Metals & alloys traded" },
    { value: "2021", label: "Year founded" },
    { value: "ISO 9001:2015", label: "Certified quality system" },
  ],

  qualityObjective: "100% timely delivery of products",
};