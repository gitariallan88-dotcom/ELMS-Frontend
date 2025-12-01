/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",   // Dark gray (main background)
        secondary: "#f3f4f6", // Light gray (cards, backgrounds)
        accent: "#2563eb",    // Blue (buttons, highlights)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class", // Enables dark mode using class
  plugins: [],
  colors: {
    primary: {
      light: "#f3f4f6",
      DEFAULT: "#1f2937",
      dark: "#111827"
    },
    secondary: {
      light: "#9ca3af",
      DEFAULT: "#6b7280",
      dark: "#4b5563"
    },
    accent: {
      light: "#60a5fa",
      DEFAULT: "#2563eb",
      dark: "#1d4ed8"
    }
  }
};
