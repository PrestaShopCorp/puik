import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // template: {
      //   compilerOptions: {
      //     isCustomElement: (tag) => tag.includes('-ce'),
      //   },
      // },
    }),
    DefineOptions(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: /^@puik\/(.*)$/,
        replacement: `${path.resolve('../packages')}/$1`,
      },
    ],
  },
})
