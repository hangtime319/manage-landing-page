/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      custom: "1440px",
    },
    extend: {
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
    },
    fontFamily: {
      vietnam: ["Be Vietnam Pro", "sans-serif"],
    },
    keyframes: {
      slideIn: {
        "0%": {
          opacity: 0,
          transform: "translateX(100vh)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
      fadeIn: {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
    animation: {
      ["slide-in"]: "slideIn .1s ease-in-out forwards",
      ["fade-in"]: "fadeIn .1s ease-in-out forwards",
      
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
