import path from 'path'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/rollup'
import { parallel } from 'gulp'
import glob from 'fast-glob'
import postcss from 'rollup-plugin-postcss'
import { camelCase, upperFirst } from 'lodash-unified'
import {
  themeRoot,
  puikRoot,
  puikOutput,
  localeRoot,
  formatBundleFilename,
  generateExternal,
  writeBundles,
  withTaskName,
} from '../utils'
import { version } from '../../../packages/puik/version'
import { PuikAlias } from '../plugins/puik-alias'
import { target } from '../build-info'

const banner = `/*! Puik v${version} */\n`

async function buildFullEntry(minify: boolean) {
  const bundle = await rollup({
    input: path.resolve(puikRoot, 'index.ts'),
    plugins: [
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts', '.scss'],
      }),
      commonjs(),
      PuikAlias(),
      vue({
        isProduction: true,
        customElement: /\.ce\.vue$/,
      }),
      postcss({
        config: {
          path: `${themeRoot}/postcss.config.js`,
          ctx: {},
        },
      }),
      DefineOptions(),
      esbuild({
        exclude: [],
        minify,
        sourceMap: minify,
        target,
        loaders: {
          '.vue': 'ts',
        },
        define: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
    ],
    external: await generateExternal({ full: true }),
  })
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(
        puikOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'js')
      ),
      exports: 'named',
      name: 'Puik',
      globals: {
        vue: 'Vue',
      },
      sourcemap: minify,
      banner,
    },
    {
      format: 'esm',
      file: path.resolve(
        puikOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'mjs')
      ),
      sourcemap: minify,
      banner,
    },
  ])
}

async function buildFullLocale(minify: boolean) {
  const files = await glob(`${path.resolve(localeRoot, 'lang')}/*.ts`, {
    absolute: true,
  })
  return Promise.all(
    files.map(async (file) => {
      const filename = path.basename(file, '.ts')
      const name = upperFirst(camelCase(filename))

      const bundle = await rollup({
        input: file,
        plugins: [
          esbuild({
            minify,
            sourceMap: minify,
            target,
          }),
        ],
      })
      await writeBundles(bundle, [
        {
          format: 'umd',
          file: path.resolve(
            puikOutput,
            'dist/locale',
            formatBundleFilename(filename, minify, 'js')
          ),
          exports: 'default',
          name: `PuikLocale${name}`,
          sourcemap: minify,
          banner,
        },
        {
          format: 'esm',
          file: path.resolve(
            puikOutput,
            'dist/locale',
            formatBundleFilename(filename, minify, 'mjs')
          ),
          sourcemap: minify,
          banner,
        },
      ])
    })
  )
}

export const buildFull = (minify: boolean) => async () =>
  Promise.all([buildFullEntry(minify), buildFullLocale(minify)])

export const buildFullBundle = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false))
)
