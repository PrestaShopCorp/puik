import { fileURLToPath } from 'url';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import type { StorybookConfig } from '@storybook/vue3-vite';
import type { Plugin } from 'vite';

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
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    const fileUrlResolverPlugin: Plugin = {
      name: 'storybook-mdx-file-url-resolver',
      enforce: 'pre',
      resolveId(id) {
        if (id.startsWith('file:///')) {
          return { id: fileURLToPath(id), external: false };
        }
      }
    };

    config.plugins = [...(config.plugins ?? []), fileUrlResolverPlugin];
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
          '../../../packages/components/**/*.stories.@(js|jsx|ts|tsx)'
        ]
      }
    };
  }
};

export default config;
