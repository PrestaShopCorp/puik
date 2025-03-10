/** @type {import('tailwindcss').Config} */
const { puikTailwindPreset } = require('@prestashopcorp/puik-tailwind-preset');
module.exports = {
  presets: [puikTailwindPreset],
  content: ['./src/**/*.{postcss,css}'],
  darkMode: 'class'
};
