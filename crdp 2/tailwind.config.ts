import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F3",
        bone: "#F2EEE6",
        sand: "#D9CDB8",
        champagne: "#C8AD7E",
        gold: "#B08D4F",
        ink: "#15130F",
        graphite: "#3A352D",
        stone: "#8C8475",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.32em",
        wide2: "0.18em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
