// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import { defineConfig } from 'rollup'
import glob from 'fast-glob'
import pkg from './package.json' assert { type: 'json' }

const excludeFiles = (files) => {
  const excludes = ['node_modules', 'dist', 'rollup.config.mjs', 'global.d.ts']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}

const externalPackages = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

export default async () =>
  defineConfig([
    {
      input: excludeFiles(
        await glob('./*.ts', {
          cwd: './',
          absolute: true,
          onlyFiles: true,
        })
      ),
      external: externalPackages.map(
        (packageName) => new RegExp(`^${packageName}(/.*)?`)
      ),
      output: [
        {
          dir: './dist/es',
          format: 'esm',
          entryFileNames: '[name].mjs',
        },
        {
          dir: './dist/lib',
          format: 'cjs',
          exports: 'named',
        },
      ],
      plugins: [
        typescript({
          check: false,
          tsconfig: './tsconfig.build.json',
        }),
      ],
    },
  ])
