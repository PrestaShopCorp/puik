import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [
    vue({ isProduction: true }),
    dts({
      tsconfigPath: 'tsconfig.build.json'
    }),
    nodeResolve()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts')
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies)
      ],
      output: [
        {
          dir: './dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname, './'),
          entryFileNames: '[name].mjs',
          exports: 'named'
        },
        {
          dir: './dist',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname, './'),
          entryFileNames: '[name].cjs',
          exports: 'named'
        }
      ]
    }
  },
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/assets'),
      '@prestashopcorp/puik-theme/src': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/src'),
      '@prestashopcorp/puik-theme': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/dist'),
    },
  },
});
