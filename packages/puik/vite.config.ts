import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.build.json'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts')
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        /^@prestashopcorp\/puik-components\/.*/,
      ],
      output: [
        {
          dir: './dist',
          format: 'esm',
          preserveModules: true,
          entryFileNames: '[name].mjs',
          exports: 'named'
        },
        {
          dir: './dist',
          format: 'cjs',
          preserveModules: true,
          entryFileNames: '[name].cjs',
          exports: 'named'
        }
      ]
    }
  }
});
