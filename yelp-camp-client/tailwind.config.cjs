/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-tab": "url(./assets/HeroImageTab.jpg)",
        "hero-desktop": "url(./assets/HeroImageDesktop.jpg)",
      },
      fontFamily: {
        body: ["Archivo"],
      },
      colors: {
        searchColor: "#f9f6f1",
        landingBgColor: "#f8f5f0",
        paragraphColor: "#837f7d",
        circleColor: "#0c9a7b",
        buttonBgColor: "#000000",
        buttonTextColor: "#e9e9e9",
      },
      gap: {
        11: "0.938rem",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(300px, auto))'
      },
      gridColumn:{
        'autoColumn': 'span 1/ span 7'
      }
    },
  },
  plugins: [],
};
