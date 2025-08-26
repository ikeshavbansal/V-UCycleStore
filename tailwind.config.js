/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: {
        brand: {
          50: '#f2f8ff',
          100: '#e6f0ff',
          200: '#cce0ff',
          300: '#99c2ff',
          400: '#66a3ff',
          500: '#3385ff',
          600: '#0066ff',
          700: '#0052cc',
          800: '#003d99',
          900: '#002966',
        },
      },
      boxShadow: { soft: '0 6px 24px rgba(0,0,0,0.06)' },
      borderRadius: { xl2: '1.25rem' }
    },
  },
  plugins: [],
}
