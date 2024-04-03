/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        wave: 'wave 4s linear infinite',
        border: 'background 2s ease infinite'
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        wave: {
          to: {
            'margin-left': '-53%'
          }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateX(-10%);'
          },
          '50%': {
            transform: 'translateX(0);',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1);'
          }
        }
      }
    }
  },
  plugins: []
}
