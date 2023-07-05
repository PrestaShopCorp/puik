import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [Vue(), DefineOptions()],
  test: {
    include: ['**/*.spec.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
})
