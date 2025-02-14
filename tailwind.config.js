// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Base orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Background colors
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
          card: {
            light: '#ffffff',
            dark: '#2d2d2d'
          }
        },
        // Text colors
        text: {
          primary: {
            light: '#1a1a1a',
            dark: '#ffffff'
          },
          secondary: {
            light: '#4b5563',
            dark: '#9ca3af'
          }
        }
      }
    },
  },
  plugins: [],
}