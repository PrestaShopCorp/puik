// import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@prestashopcorp/puik-theme/assets': resolve(__dirname, '../../node_modules/@prestashopcorp/puik-theme/assets'),
  //     '@prestashopcorp/puik-theme/src': resolve(__dirname, '../../node_modules/@prestashopcorp/puik-theme/src'),
  //     '@prestashopcorp/puik-theme': resolve(__dirname, '../../node_modules/@prestashopcorp/puik-theme')
  //   }
  // },
  server: {
    port: 5174
  }
});
