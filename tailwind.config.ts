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
        heritage: {
          crimson: "#C0392B",
          darkCrimson: "#A42325",
          maroon: "#780406",
          lightCrimson: "#FADBD8",
          gold: "#D4A373",
          deepGold: "#B8860B",
          cream: "#FAF5EC",
          ivory: "#FFFDF9",
          amber: "#F9E4B7",
          charcoal: "#1F1F1F",
          mutedText: "#5A544F",
          cardBorder: "#EADBCE",
          lightBg: "#FAF6F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Inter", "sans-serif"],
        display: ["var(--font-fraunces)", "Playfair Display", "serif"],
      },
      boxShadow: {
        'heritage-card': '0 4px 20px -2px rgba(120, 4, 6, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'heritage-hover': '0 12px 30px -4px rgba(120, 4, 6, 0.16), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'heritage-pill': '0 2px 10px rgba(192, 57, 43, 0.25)',
      },
      borderRadius: {
        'pill': '9999px',
        'heritage': '16px',
        'heritage-lg': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
