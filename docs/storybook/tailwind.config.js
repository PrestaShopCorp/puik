const { puikTailwindPreset } = require('@prestashopcorp/puik-tailwind-preset');
module.exports = {
  presets: [puikTailwindPreset],
  content: [
    '../../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
    './stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  ]
};
