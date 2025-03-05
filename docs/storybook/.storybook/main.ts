import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/*/**.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  core: {
    disableTelemetry: true
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    if (config.resolve) {
      config.resolve.dedupe = ['@storybook/client-api'];
    }
    config.css = {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    };
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        entries: [
          '../stories/**/*.stories.mdx',
          '../../../packages/components/**/*.stories.@(js|jsx|ts|tsx)'
        ]
      }
    };
  },
  docs: {
    autodocs: true
  }
};

export default config;
