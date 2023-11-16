import { resolve } from 'path'
import glob from 'fast-glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { excludeFiles } from '../utils'

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
    },
    rollupOptions: {
      input: excludeFiles(
        await glob('./**/*.ts', {
          cwd: './',
          absolute: true,
          onlyFiles: true,
        }),
      ),
      output: [
        {
          dir: './dist',
          format: 'esm',
          preserveModules: true,
          entryFileNames: '[name].mjs',
        },
        {
          dir: './dist',
          format: 'cjs',
          preserveModules: true,
          entryFileNames: '[name].cjs',
        },
      ],
    },
  },
})
