module.exports = {
  presets: [require('@prestashopcorp/puik-theme/tailwind.config')],
  content: [
    '../../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
    './stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  ]
};
