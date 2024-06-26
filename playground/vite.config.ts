import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-ce')
        }
      },
      customElement: /^(?!.*App\.vue)(?!.*VueComponentsView\.vue)(?!.*WebComponentsView\.vue).*$/
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: '@prestashopcorp/puik',
        replacement: `${path.resolve('../packages/puik')}`
      },
      {
        find: /^@prestashopcorp\/puik-(.*)$/,
        replacement: `${path.resolve('../packages')}/$1`
      }
    ]
  }
});
