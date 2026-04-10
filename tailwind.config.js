/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50: '#F8F7F4',
          100: '#EEECE6',
          200: '#D8D4CA',
          400: '#A8A39A',
          600: '#6B6660',
          800: '#2C2A26',
          900: '#1A1916',
        },
        accent: {
          DEFAULT: '#C9622F',
          light: '#F4E8DF',
          dark: '#8B3E18',
        }
      },
    },
  },
  plugins: [],
};

