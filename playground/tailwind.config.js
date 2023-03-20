// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  presets: [require('../packages/theme/tailwind.config')],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
