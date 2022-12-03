const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundDark: 'hsl(263deg 60% 43%)',
        background: 'hsl(263deg 60% 48%)',
        backgroundLight: 'hsl(263deg 60% 53%)',
        actionDark: 'hsl(171deg 80% 64%)',
        action: 'hsl(171deg 80% 69%)',
        actionLight: 'hsl(171deg 80% 74%)',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
