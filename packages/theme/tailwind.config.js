// eslint-disable-next-line @typescript-eslint/no-var-requires
const { puikTailwindPreset } = require('@prestashopcorp/puik-tailwind-preset');
module.exports = {
  presets: [puikTailwindPreset],
  content: ['./src/**/*.scss'],
  plugins: [],
  darkMode: 'class' // To remove if we wanna use the css' prefers-color-scheme feature (dark mode based on OS/browser preference)
};
