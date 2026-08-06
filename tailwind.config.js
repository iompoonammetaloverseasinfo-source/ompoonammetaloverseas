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
        paper: "#FFFFFF",
        mist: {
          50: "#F5F7F9",
          100: "#EAEEF2",
          200: "#DCE2E8",
          300: "#C3CBD4",
        },
        graphite: {
          50: "#F2F3F5",
          100: "#E1E3E7",
          200: "#B9BEC7",
          300: "#8D94A1",
          400: "#666E7D",
          500: "#4A505E",
          600: "#363B47",
          700: "#262A34",
          800: "#1B1F27",
          900: "#12151B",
          950: "#0B0D11",
        },
        brass: {
          50: "#FBF4E3",
          100: "#F5E4BE",
          200: "#EACF8C",
          300: "#DCB661",
          400: "#C99A3E",
          500: "#B8872E",
          600: "#976D22",
          700: "#78561B",
          800: "#5B4114",
          900: "#3E2C0D",
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
