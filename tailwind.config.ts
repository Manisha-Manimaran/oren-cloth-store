import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        "primary-light": "#1a1a1a",
        white: "#ffffff",
        accent: "#f5f5f5",
        "border-light": "#e0e0e0",
        "border-medium": "#cccccc",
        "gray-text": "#666666",
        "gray-dark": "#333333",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1" }],
        "hero-md": ["3rem", { lineHeight: "1.15" }],
        "hero-sm": ["2.25rem", { lineHeight: "1.2" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "slide-up": "slide-up 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
