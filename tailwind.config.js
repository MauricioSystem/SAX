/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0F172A',
        'blue-gray': '#334155',
        'red-primary': '#E31E24',
        'gray-light': '#F1F5F9',
        'gray-blue': '#94A3B8',
        'blue-black': '#111827',
        'blue-base': '#1F2D3A',
        'red-darker': '#C4161C',
        'gray-soft': '#D1D5DB',
        'white-warm': '#F9FAFB',
      },
    },
  },
  plugins: [],
}
