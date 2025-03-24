import { resolve } from 'path';
import glob from 'fast-glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import { excludeFiles } from '../utils';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
    }),
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
    nodeResolve({
      mainFields: ['module', 'js', 'json'],
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './index.ts'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
      ],
      input: excludeFiles(
        await glob('./**/*.{vue,ts}', {
          cwd: './',
          absolute: true,
          onlyFiles: true,
        }),
        ['stories', 'test']
      ),
      output: [
        {
          dir: './dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname, './'),
          entryFileNames: (chunk) => {
            if (chunk.name.includes('node_modules')) {
              return `${chunk.name.replace('node_modules', '_external')}.mjs`;
            }
            if (chunk.name.includes('packages')) {
              return `${chunk.name.replace('packages', '_external')}.mjs`;
            }
            return '[name].mjs';
          },
          exports: 'named',
          assetFileNames: 'style/[name].[ext]'
        },
        {
          dir: './dist',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname, './'),
          entryFileNames: (chunk) => {
            if (chunk.name.includes('node_modules')) {
              return `${chunk.name.replace('node_modules', '_external')}.cjs`;
            }
            if (chunk.name.includes('packages')) {
              return `${chunk.name.replace('packages', '_external')}.cjs`;
            }
            return '[name].cjs';
          },
          exports: 'named',
          assetFileNames: 'style/[name].[ext]'
        },
      ],
    },
  },
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/assets'),
      '@prestashopcorp/puik-theme/src': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/src'),
      '@prestashopcorp/puik-theme': resolve(__dirname, './node_modules/@prestashopcorp/puik-theme/dist'),
    },
  },
});
