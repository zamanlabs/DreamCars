/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a237e",
        secondary: "#ff3d00",
        neutral: "#f5f5f5",
      },
    },
  },
  plugins: [],
} 