import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.build.json'
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts')
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        /^@prestashopcorp\/puik-components\/.*/
      ],
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
          exports: 'named'
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
          exports: 'named'
        }
      ]
    }
  }
});