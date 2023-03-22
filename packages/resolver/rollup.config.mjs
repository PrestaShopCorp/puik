// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import { defineConfig } from 'rollup'
import pkg from './package.json' assert { type: 'json' }

export default async () =>
  defineConfig([
    {
      input: './index.ts',
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        /^@prestashopcorp\/puik-components\/.*/,
      ],
      output: [
        {
          dir: './dist/es',
          format: 'esm',
          preserveModules: true,
          entryFileNames: '[name].mjs',
        },
        {
          dir: './dist/lib',
          format: 'cjs',
          preserveModules: true,
          exports: 'named',
        },
      ],
      plugins: [
        typescript({
          tsconfig: './tsconfig.build.json',
        }),
      ],
    },
  ])
