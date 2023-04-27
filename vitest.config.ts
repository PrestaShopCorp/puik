import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [Vue(), DefineOptions()],
  test: {
    include: ['**/*.spec.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
})
