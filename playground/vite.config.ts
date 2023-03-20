import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: /^@prestashopcorp\/puik-(.*)$/,
        replacement: `${path.resolve('../packages')}/$1`,
      },
    ],
  },
})
