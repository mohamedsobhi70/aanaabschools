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
    },
  },
  plugins: [],
}

