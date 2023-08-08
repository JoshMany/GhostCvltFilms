/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
      },
      fontSize: {
        "3.5xl": "32px",
        "10xl": "160px",
        "11xl": "190px",
      },
      colors: {
        yellow: "#FDD923",
        background: "#050505",
      },
      fontFamily: {
        UrbanistRegular: ["UrbanistRegular", "sans-serif"],
        UrbanistSemibold: ["UrbanistSemibold", "sans-serif"],
        UrbanistLight: ["UrbanistLight", "sans-serif"],
        CooperHewittBook: ["CooperHewittBook", "sans-serif"],
        CooperHewittMedium: ["CooperHewittMedium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
