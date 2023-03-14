// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import { defineConfig } from 'rollup'
import glob from 'fast-glob'
import pkg from './package.json' assert { type: 'json' }

const excludeFiles = (files) => {
  const excludes = ['node_modules', 'dist', 'rollup.config.mjs']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}

export default async () =>
  defineConfig([
    {
      input: excludeFiles(
        await glob('./**/*.ts', {
          cwd: './',
          absolute: true,
          onlyFiles: true,
        })
      ),
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
      ],
      output: [
        {
          dir: './dist/',
          format: 'esm',
          preserveModules: true,
        },
        // {
        //   dir: '/packages/components/dist/cjs',
        //   format: 'cjs',
        //   preserveModules: true,
        // },
      ],
      plugins: [
        typescript({
          tsconfig: './tsconfig.build.json',
        }),
      ],
    },
  ])
