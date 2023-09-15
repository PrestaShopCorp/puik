import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/rollup'
import glob from 'fast-glob'
import {
  puikRoot,
  pkgRoot,
  generateExternal,
  writeBundles,
  excludeFiles,
} from '../utils'
import { PuikAlias } from '../plugins/puik-alias'
import { buildConfigEntries, target } from '../build-info'

import type { OutputOptions } from 'rollup'

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      commonjs(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts', '.scss'],
      }),
      PuikAlias(),
      DefineOptions(),
      vue({
        isProduction: false,
      }),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: puikRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}
