import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { PuikResolver } from '@prestashopcorp/puik-resolver';

const componentsPlugin = Components({
  resolvers: [PuikResolver()],
  dts: true
}) as unknown as Plugin;

export default defineConfig({
  plugins: [
    vue(),
    componentsPlugin
  ],
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/assets'),
      '@prestashopcorp/puik-theme/src': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/src'),
      '@prestashopcorp/puik-theme': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/dist')
    }
  }
});
