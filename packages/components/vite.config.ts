import { resolve as pathResolve } from 'path';
import glob from 'fast-glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import { excludeFiles } from '../utils';
import pkg from './package.json' assert { type: 'json' };

const inputFiles = excludeFiles(
  await glob('./**/*.{vue,ts}', {
    cwd: './',
    absolute: true,
    onlyFiles: true,
  }),
  ['stories', 'test']
);

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
    }),
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
    nodeResolve({
      mainFields: ['module', 'main'],
    }),
  ],
  build: {
    lib: {
      entry: pathResolve(__dirname, './index.ts'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ],
      input: inputFiles,
      output: [
        {
          dir: './dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: pathResolve(__dirname, './'),
          entryFileNames: (chunk) => chunk.name.includes('node_modules')
            ? chunk.name.replace('node_modules', '_external') + '.mjs'
            : '[name].mjs',
          exports: 'named',
        },
        {
          dir: './dist',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: pathResolve(__dirname, './'),
          entryFileNames: (chunk) => chunk.name.includes('node_modules')
            ? chunk.name.replace('node_modules', '_external') + '.cjs'
            : '[name].cjs',
          exports: 'named',
        },
      ],
    },
  },
  resolve: {
    alias: {
      '@prestashopcorp/puik-theme/assets': pathResolve(__dirname, './node_modules/@prestashopcorp/puik-theme/assets'),
      '@prestashopcorp/puik-theme/src': pathResolve(__dirname, './node_modules/@prestashopcorp/puik-theme/src'),
      '@prestashopcorp/puik-theme': pathResolve(__dirname, './node_modules/@prestashopcorp/puik-theme/dist'),
    },
  },
});
