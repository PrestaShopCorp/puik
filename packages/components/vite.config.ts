// TODO: REPLACE FAST-GLOB BY GLOB
import { resolve } from 'path'
import glob from 'fast-glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json' assert { type: 'json' }

// TODO: CREATE GENERIC UTIL FOR EXCLUDE FILES
const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'dist', 'vite.config.ts', 'stories', 'test']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude)),
  )
}

export default defineConfig({
  plugins: [
    vue(),
    // TODO: CLEAN UP
    dts({
      tsconfigPath: 'tsconfig.build.json',
      exclude: [
        '**/node_modules',
        '**/dist',
        '**/vite.config.ts',
        '**/stories',
        '**/test',
      ],
    }),
    nodeResolve(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        /^@puik\/theme\/.*/,
      ],
      input: excludeFiles(
        await glob('./**/*.{vue,ts}', {
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
          preserveModulesRoot: resolve(__dirname, './'),
          entryFileNames: (chunk) => {
            if (chunk.name.includes('node_modules')) {
              return `${chunk.name.replace('node_modules', '_external')}.mjs`
            }
            if (chunk.name.includes('packages')) {
              return `${chunk.name.replace('packages', '_external')}.mjs`
            }
            return '[name].mjs'
          },
          exports: 'named',
        },
        {
          dir: './dist',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname, './'),
          entryFileNames: (chunk) => {
            if (chunk.name.includes('node_modules')) {
              return `${chunk.name.replace('node_modules', '_external')}.cjs`
            }
            if (chunk.name.includes('packages')) {
              return `${chunk.name.replace('packages', '_external')}.cjs`
            }
            return '[name].cjs'
          },
          exports: 'named',
        },
      ],
    },
  },
  resolve: {
    alias: {
      '@puik/components': resolve(__dirname, './'),
    },
  },
})
