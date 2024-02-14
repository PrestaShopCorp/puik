// eslint-disable-next-line @typescript-eslint/no-var-requires
const { puikTailwindPreset } = require('@prestashopcorp/puik-tailwind-preset');
module.exports = {
  presets: [puikTailwindPreset],
  content: ['./src/**/*.scss'],
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  darkMode: 'class'
};
