/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-dark': '#55008A',
      'primary-light': '#7D02C9',
      'secondary': '#2BB5E3',
      'secondary-light': '#74B1F6',
      'accent': '#4DEFA9',
      'accent-dark': '#3ec289',
      'background': '#F2F9FD',
      'text': '#040F20',
      'text-light': '#F2F9FD',
    },
  },
  plugins: [],
}

