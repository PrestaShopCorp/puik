module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })
    // eslint-disable-next-line
    config.plugins.push(require('unplugin-vue-define-options/webpack')())

    return config
  },
}
