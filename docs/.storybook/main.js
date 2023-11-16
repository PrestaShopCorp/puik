/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  stories: [
    '../stories/*/**.@(js|jsx|ts|tsx|mdx)',
    '../../packages/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  core: {
    disableTelemetry: true,
  },
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
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        entries: [
          '../stories/**/*.stories.mdx',
          '../../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
        ],
      },
    }
  },
  docs: {
    autodocs: true,
  },
}
