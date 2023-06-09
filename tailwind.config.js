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
      backgroundImage: {
        'cta-shap1': 'linear-gradient(319.28deg, #FFFFFF 13.81%, rgba(135, 146, 161, 0.16) 49.81%)',
        'cta-shap2': 'linear-gradient(131.42deg, #FFFFFF 19.24%, #FFFFFF 42.06%, rgba(135, 146, 161, 0.16) 69.61%)'
      },
    },
  },
  plugins: [],
}

