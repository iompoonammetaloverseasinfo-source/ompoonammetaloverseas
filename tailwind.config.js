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
        graphite: {
          50: "#F5F7FA",
          100: "#E9EDF3",
          200: "#D3DAE5",
          300: "#AEB9CB",
          400: "#8290A8",
          500: "#5F6D87",
          600: "#46536B",
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