module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
}
