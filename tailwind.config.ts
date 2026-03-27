import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        slate: "#1E293B",
        fog: "#F3F5F7",
        accent: "#FF6B35",
        mint: "#0E9384",
        steel: "#5B6B7A"
      },
      fontFamily: {
        display: ["var(--font-display)", "Segoe UI", "sans-serif"],
        body: ["var(--font-body)", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 35px rgba(15, 23, 42, 0.09)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
