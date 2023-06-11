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
        'sol-shad': '0px 0px 24px 8px rgba(0, 0, 0, 0.1)',
        
      },
      backgroundImage: {
        'cta': 'linear-gradient(0deg, #7841E8, #7841E8), radial-gradient(74.58% 74.58% at 50% 50%, #8447FF 0%, #5E32B5 100%)',
      },
    },
  },
  plugins: [],
}

