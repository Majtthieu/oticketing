import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Bleu foncé
        secondary: "#3B82F6", // Bleu clair
        accent: "#F59E0B", // Jaune
        background: "#F3F4F6", // Gris clair
        foreground: "#1F2937", // Gris foncé
      },
      fontFamily: {
        rso: ['var(--font-rso)'],
        ops: ['var(--font-ops)']
      },
    },
  },
  plugins: [],
};

export default config;
