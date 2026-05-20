import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-prompt)", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#EB4915",
          red: "#EB2216",
          cream: "#FAF6F0",
          beige: "#F3EBE1",
          chocolate: "#341E19",
          dark: "#23110E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
