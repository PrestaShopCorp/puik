// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ['**/*.spec.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      all: false,
      clean: true,
      thresholds: {
        'packages/component/**/src/*.{ts,vue}': {
          branches: 60,
          functions: 60,
          lines: 60,
          statements: 60
        }
      }
    },
    server: {
      deps: {
        external: ['@prestashopcorp/puik-theme']
      }
    }
  },
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': resolve(__dirname, './nodes_modules/puik-theme/assets'),
      '@prestashopcorp/puik-theme/src': resolve(__dirname, './nodes_modules/puik-theme/src')
    }
  }
});
