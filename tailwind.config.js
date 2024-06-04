/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans:['Roboto', 'sans-serif'],
          bebas: ['Bebas Neue', 'sans-serif'],
        },
        gridTemplateColumns:{
          '70-30':'70% 28%',
          '30-70':'28% 65%',
          '50-50':'48% 48%'
        },
        backgroundImage: {
          'rdmcln-bg':"url('assets/cleancloset1.png')"
        },
        keyframes:{
          pendSlideL: {
            '0%, 100%': {transform: 'translateX(-8%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
            '50%': {
              transform: 'translateX(0)',
              'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
            },
          },
          pendSlideR: {
            '0%, 100%': {transform: 'translateX(8%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
            '50%': {
              transform: 'translateX(0)',
              'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
            },
          },
          infScrollLft:{
            'to':{
              translate: 'calc(-10 * 40rem)'
            }
          },
          infScrollRt:{
            'to':{
              translate: 'calc(10 * 40rem)'
            }
          },
          slideOutL:{
            'to':{
              transform:'translateX(-500px)',
              opacity: '0'
            }
          }
        },
        animation:{
          pendSlideL: 'pendSlideL 1s infinite',
          pendSlideR: 'pendSlideR 1s infinite',
          infScrollLft: 'infScrollLft 80s infinite',
          infScrollRt: 'infScrollRt 80s infinite',
          slideOutL: 'slideOutL .7s linear'
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }