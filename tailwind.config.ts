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
};
