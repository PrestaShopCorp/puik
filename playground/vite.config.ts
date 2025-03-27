import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';
import Components from 'unplugin-vue-components/vite';
import { PuikResolver } from '@prestashopcorp/puik-resolver';

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
    }),
    Components({
      resolvers: [PuikResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': resolve(__dirname, 'node_modules/@prestashopcorp/puik-theme/assets'),
      '@prestashopcorp/puik-theme/src': resolve(__dirname, 'node_modules/@prestashopcorp/puik-theme/src'),
      '@prestashopcorp/puik-theme': resolve(__dirname, 'node_modules/@prestashopcorp/puik-theme/dist'),
      '@prestashopcorp/puik-resolver': resolve(__dirname, 'node_modules/@prestashopcorp/puik-resolver/dist/index.mjs')
    }
  }
});
