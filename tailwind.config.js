/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'red-500': '#ef4444',
      'green-500': '#22c55e',
    },

    extend: {},
  },
  plugins: [],
};
