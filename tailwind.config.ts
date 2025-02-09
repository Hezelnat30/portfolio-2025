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
        primary: {
          white: "#F8F8F8",
          gold: "#FFC600",
          pink: "#FFBFB3",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "glass-inset": "inset -10px 12px 8px -12px rgba(255, 198, 0, 0.4)",
        "glass-sm": "-3px 5px 6px 2px rgba(255, 198, 0, 0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 45s linear infinite",
        "spin-slow-reverse": "spin-reverse 45s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
