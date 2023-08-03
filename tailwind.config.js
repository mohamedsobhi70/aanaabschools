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
      backgroundSize: {
        'progrees-size': "35px 35px"
      },
      backgroundImage: {
        'cta': 'linear-gradient(0deg, #7841E8, #7841E8), radial-gradient(74.58% 74.58% at 50% 50%, #8447FF 0%, #5E32B5 100%)',
        'progrees-bar': "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
      },
      animation: {
        "progress-anmi": "animateStripe 2s linear infinite"
      },
      keyframes: {
        "animateStripe": {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(25%, 0)'},
        }
      },
      rotate: {
        '4': '4deg',
        '5': '5deg',
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

