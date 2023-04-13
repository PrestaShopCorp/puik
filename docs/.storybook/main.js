/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config) {
    config.resolve.dedupe = ['@storybook/client-api']
    config.css = {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    }
    // eslint-disable-next-line
    config.plugins.push(require('unplugin-vue-define-options/vite')())
    return config
  },
  docs: {
    autodocs: true,
  },
}
