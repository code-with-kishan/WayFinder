/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1021',
        mist: '#f6f7fb',
        accent: '#78aa36'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 10px 40px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
