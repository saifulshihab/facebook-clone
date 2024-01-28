/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1877f2',
        greenLight: '#42b72a',
      },
    },
  },
  plugins: [],
};
