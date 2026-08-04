import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EE",
        "cream-dark": "#F5EEDF",
        miami: {
          DEFAULT: "#2BBEF3",
          light: "#EAF8FE",
          dark: "#14A6DC",
        },
        ink: {
          DEFAULT: "#14213D",
          soft: "#667085",
        },
      },
      fontFamily: {
        vazir: ["Vazirmatn", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl2: "17px",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        riseIn: "riseIn 620ms ease both",
        riseInSlow: "riseIn 720ms ease both",
        fadeIn: "fadeIn 200ms ease both",
      },
      boxShadow: {
        card: "0 8px 26px rgba(20,33,61,0.045)",
        cardHover: "0 12px 30px rgba(20,33,61,0.08)",
        panel: "0 10px 30px rgba(20,33,61,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
