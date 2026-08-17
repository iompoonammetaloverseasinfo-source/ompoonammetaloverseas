/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
     colors: {
        // =========================
        // BRAND COLOR
        // =========================
        brand: {
          50: "#F2F5FA",
          100: "#E5EAF3",
          200: "#CBD5E5",
          300: "#A8B6CE",
          400: "#7186AC",
          500: "#1A3263",
          600: "#172C57",
          700: "#14264B",
          800: "#10203F",
          900: "#0B1933",
          950: "#071225",
          DEFAULT: "#1A3263",
        },

        // =========================
        // PAPER
        // =========================
        paper: "#FFFFFF",

        // =========================
        // LIGHT BLUE / MIST
        // =========================
        mist: {
          50: "#F5F8FC",
          100: "#EAF0F8",
          200: "#D6E2F0",
          300: "#B9CBE3",
        },

        // =========================
        // GRAPHITE
        // =========================
        // 300 and 400 were darkened for text legibility — both are used
        // as real text throughout the site (mono labels, eyebrows, step
        // numbers, secondary captions), not just borders, and at their
        // original values fell well short of WCAG AA contrast on a
        // white/paper background:
        //   300  #AEB9CB -> ~2.0:1  (fails; now #8996AC -> ~2.9:1)
        //   400  #8290A8 -> ~3.2:1  (fails; now #63728C -> ~4.9:1, passes AA)
        //   500  #5F6D87 -> ~5.2:1  (already passed; nudged to ~5.7:1)
        //   600  #46536B -> ~7.8:1  (already strong; nudged to ~8.6:1)
        // 700-950 were already dark enough for headings and left as-is.
        graphite: {
          50: "#F5F7FA",
          100: "#E9EDF3",
          200: "#D3DAE5",
          300: "#8996AC",
          400: "#63728C",
          500: "#54617A",
          600: "#3D4A61",
          700: "#333E54",
          800: "#1E2B47",
          900: "#0F2C57",
          950: "#0A2245",
        },

        // =========================
        // BRASS / GOLD ACCENT
        // =========================
        brass: {
          50: "#FFF9E8",
          100: "#FFF0C2",
          200: "#FFE08A",
          300: "#F5CB4F",
          400: "#E6B82E",
          500: "#D4A72C",
          600: "#B88B1C",
          700: "#936D13",
          800: "#6E510E",
          900: "#4A3609",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(18,21,27,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,21,27,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};