import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/assets'),
      '@prestashopcorp/puik-theme/src': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/src'),
      '@prestashopcorp/puik-theme': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/dist')
    }
  }
});
