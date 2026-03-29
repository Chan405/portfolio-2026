import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        section: "var(--section)",
        border: "var(--border)",
        accent: {
          purple: "#7C3AED",
          blue: "#3B82F6",
        },
      },
      keyframes: {
        "hero-fade-up": {
          from: { opacity: "0", transform: "translateY(1rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-blob": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(8%, -6%) scale(1.04)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.98)" },
        },
        "ambient-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.03)" },
        },
      },
      animation: {
        "hero-fade-up": "hero-fade-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-blob": "hero-blob 22s ease-in-out infinite",
        "hero-blob-slow": "hero-blob 30s ease-in-out infinite reverse",
        "ambient-glow": "ambient-glow 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
