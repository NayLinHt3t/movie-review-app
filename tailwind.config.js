/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
        },
        dark: {
          100: '#1f2937',
          200: '#374151',
          300: '#4b5563',
          400: '#6b7280',
        },
        accent: '#AB8BFF',
      },
    },
  },
  plugins: [],
};
