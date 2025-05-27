import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";
import Components from 'unplugin-vue-components/vite';
import { PuikResolver } from '@prestashopcorp/puik-resolver';

// https://vite.dev/config/
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
    vueDevTools(),
    tailwindcss(),
    Components({
      resolvers: [PuikResolver()],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': fileURLToPath(new URL('../node_modules/@prestashopcorp/puik-theme/assets', import.meta.url)),
      '@prestashopcorp/puik-theme/src': fileURLToPath(new URL('../node_modules/@prestashopcorp/puik-theme/src', import.meta.url)),
      '@prestashopcorp/puik-theme': fileURLToPath(new URL('../node_modules/@prestashopcorp/puik-theme/dist', import.meta.url)),
      '@prestashopcorp/puik-resolver': fileURLToPath(new URL('../node_modules/@prestashopcorp/puik-resolver/dist/index.mjs', import.meta.url)),
      '@': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
  },
})
