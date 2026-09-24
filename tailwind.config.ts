import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#060D1C",
        navy: {
          950: "#0A1730",
          900: "#0E1F3F",
          800: "#132952",
          700: "#1B3868",
          600: "#25497F",
        },
        blue: {
          accent: "#3E7BFA",
          soft: "#7FA4E8",
        },
        crimson: {
          DEFAULT: "#D3122A",
          deep: "#9C0D20",
          bright: "#F2233E",
        },
        bone: "#F6F5F1",
        mist: "#AEB9CE",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        "hope-gradient": "linear-gradient(135deg, #0A1730 0%, #132952 45%, #1B3868 75%, #3E7BFA 130%)",
        "crimson-gradient": "linear-gradient(120deg, #F2233E 0%, #9C0D20 100%)",
        "sheen": "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.12) 35%, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(62, 123, 250, 0.45)",
        crimson: "0 12px 30px -10px rgba(211, 18, 42, 0.55)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
