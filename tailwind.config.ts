import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        surface: "var(--surface)",
        panel: "var(--panel)",
        panelLight: "var(--panel-light)",
        line: "var(--line)",
        paper: "var(--paper)",
        steel: "var(--steel)",
        orange: {
          DEFAULT: "rgb(var(--orange-rgb) / <alpha-value>)",
          dim: "var(--orange-dim)",
          soft: "var(--orange-soft)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
