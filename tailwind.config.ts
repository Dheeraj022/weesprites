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
        brand: {
          violet: "#6127B8",
          "violet-dark": "#3F167D",
          "violet-soft": "#F2E9FF",
          lilac: "#E8D7FF",
          "yellow-light": "#FFF5BD",
          yellow: "#FFD83D",
          "yellow-dark": "#F4B900",
          cream: "#FFFCF2",
          white: "#FFFFFF",
        },
        "text-primary": "#32145F",
        "text-body": "#4C4260",
        "border-soft": "#E8DDF5",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(97, 39, 184, 0.08)",
        card: "0 12px 32px -8px rgba(63, 22, 125, 0.08)",
        floating: "0 20px 40px -15px rgba(63, 22, 125, 0.14)",
      },
      animation: {
        "blob-morph": "blob-morph 9s ease-in-out infinite",
        "blob-morph-offset": "blob-morph-offset 9s ease-in-out infinite",
        "blob-hero": "blob-morph-hero 10s ease-in-out infinite",
        "float-gentle": "float-gentle 5s ease-in-out infinite",
        "float-slow": "float-slow 14s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
