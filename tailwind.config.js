/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '574px',
      md: '768px',
      lg: '1024px',
      xl: '1140px'
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          lg: '15px',
        },

      },
      fontFamily: {
        'Almarai': ['Almarai', 'sans-serif'],
      },
      boxShadow: {
        'header-shad': ' 0px 2px 8px rgba(0, 0, 0, 0.08)',
        'sol-shad': '0px 0px 24px 8px rgba(0, 0, 0, 0.1)',
        'pricing-shad': '0px 0px 0px 6px rgba(243, 237, 255, 0.5), 0px 0px 0px 15px rgba(243, 237, 255, 0.5)',
        'nxtprv-shad': '0px 0px 8px 2px rgba(0, 0, 0, 0.07)',

      },
      backgroundImage: {
        'cta': 'linear-gradient(0deg, #7841E8, #7841E8), radial-gradient(74.58% 74.58% at 50% 50%, #8447FF 0%, #5E32B5 100%)',
      },
      rotate: {
        '4': '4deg',
        '5': '5deg',
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

