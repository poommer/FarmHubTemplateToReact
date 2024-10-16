/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#fff',
        'black-clr': '#000',
        'white-clr': '#fff',
        'p1-clr': '#2ab939',
        'p2-clr': '#fdd61f',
        'p900-clr': '#1f4e3d',
        'pure900-clr': '#225744',
        'p800-clr': '#6d756d',
        'p700-clr': '#191919',
        'p200-clr': '#e9efe5',
        'p100-clr': '#eff3ed',
        'box-clr': '#2A5747',
      },
      boxShadow: {
        'custom-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
    },
  },
  plugins: [],
}

