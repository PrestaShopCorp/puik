const { puikTailwindPreset } = require('@prestashopcorp/puik-tailwind-preset');
module.exports = {
  presets: [puikTailwindPreset],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class' // To remove if we wanna use the css' prefers-color-scheme feature (dark mode based on OS/browser preference)
};
