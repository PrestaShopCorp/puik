// eslint-disable-next-line @typescript-eslint/no-var-requires
const { puikTailwindPreset } = require('@puik/tailwind-preset')
module.exports = {
  presets: [puikTailwindPreset],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
