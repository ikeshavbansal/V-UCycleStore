/** @type {import('tailwindcss').Config} */
import twShades from 'tw-color-shades';
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // matches your src files
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: twShades('#3498db'),
        secondary: twShades("#F43F5E"),
        Gray: twShades("#4B5563"),
        
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        fly: 'fly 1s linear infinite',
      },
      keyframes: {
        fly: {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(60px, -60px) scale(0.5)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}