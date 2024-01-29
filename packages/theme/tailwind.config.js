import tailwindConfig from '@puik/tailwind-preset'

/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  presets: [tailwindConfig],
  content: ['./src/**/*.scss'],
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  darkMode: 'class', // To remove if we wanna use the css' prefers-color-scheme feature (dark mode based on OS/browser preference)
}
