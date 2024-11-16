// tailwind.config.js
import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],
  plugins: [
    flowbite.plugin(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A383E',
        'secondary': '#00181C',
        'success': '#1CC652',
        'neutral': '#304447',
        'gray': '#ABBED1',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  }
}
