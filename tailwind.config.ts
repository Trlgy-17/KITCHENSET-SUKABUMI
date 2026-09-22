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
        /* ── Warm Architectural Minimalism Design Tokens (2026 Studio Standard) ── */
        canvas: "#F4F1EA",
        surface: {
          DEFAULT: "#FAF8F3",
          card: "#FAF8F3",
          pure: "#FFFFFF",
          muted: "#EBE5DA",
          low: "#F4F1EA",
          border: "#DCD5CA",
        },
        ink: {
          DEFAULT: "#181715",
          primary: "#181715",
          body: "#5F5B54",
          muted: "#656159",
          light: "#8C867A",
        },
        brown: {
          warm: "#8A6248",
          dark: "#5E4434",
          light: "#A87D60",
        },
        accent: {
          DEFAULT: "#8A6248",
          dark: "#5E4434",
          light: "#A87D60",
        },
        border: {
          DEFAULT: "#DCD5CA",
          subtle: "#E5DFD4",
          dark: "rgba(24, 23, 21, 0.12)",
        },
        hairline: {
          DEFAULT: "#DCD5CA",
          dark: "rgba(255, 255, 255, 0.14)",
          subtle: "#E5DFD4",
        },
        forest: "#49685A",
        olive: "#49685A",
        whatsapp: "#25D366",

        /* Backward-compatible aliases */
        primary: {
          DEFAULT: "#181715",
          light: "#3B3935",
          dark: "#0d0d0c",
        },
        walnut: {
          DEFAULT: "#8A6248",
          dark: "#5E4434",
          light: "#A87D60",
        },
        terracotta: {
          DEFAULT: "#8A6248",
          dark: "#5E4434",
          light: "#A87D60",
        },
        editorial: {
          50: "#F4F1EA",
          100: "#FAF8F3",
          200: "#DCD5CA",
          300: "#C4BDB0",
          400: "#A09888",
          500: "#656159",
          600: "#5F5B54",
          700: "#474741",
          800: "#3B3935",
          900: "#181715",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        hero: "18px",
      },
      maxWidth: {
        architectural: "1320px",
        content: "1280px",
      },
      boxShadow: {
        ambient: "0 14px 40px rgba(30, 25, 20, 0.08)",
        soft: "0 4px 20px rgba(30, 25, 20, 0.05)",
        float: "0 18px 45px rgba(37, 31, 25, 0.07)",
        card: "0 1px 3px rgba(24, 23, 21, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
