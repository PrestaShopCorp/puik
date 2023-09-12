import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/rollup'
import esbuild from 'rollup-plugin-esbuild'
import { parallel } from 'gulp'
import glob from 'fast-glob'
import { camelCase, upperFirst } from 'lodash-unified'
import { version } from '../../../packages/puik/version'
import { PuikAlias } from '../plugins/puik-alias'
import {
  puikRoot,
  puikOutput,
  localeRoot,
  formatBundleFilename,
  generateExternal,
  writeBundles,
  withTaskName,
} from '../utils'
import { target } from '../build-info'

const banner = `/*! Puik v${version} */\n`

async function buildFullEntry(minify: boolean) {
  const bundle = await rollup({
    input: path.resolve(puikRoot, 'index.ts'),
    plugins: [
      PuikAlias(),
      vue({
        // isProduction: true,
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('-ce'),
          },
        },
      }),
      DefineOptions(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
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

// async function buildFullEntryCe(minify: boolean) {
//   const bundle = await rollup({
//     input: path.resolve(puikRoot, 'index-ce.ts'),
//     plugins: [
//       PuikAlias(),
//       vue({
//         isProduction: true,
//         template: {
//           compilerOptions: {
//             isCustomElement: (tag) => tag.includes('-ce'),
//           },
//         },
//       }),
//       DefineOptions(),
//       nodeResolve({
//         extensions: ['.mjs', '.js', '.json', '.ts'],
//       }),
//       commonjs(),
//       esbuild({
//         exclude: [],
//         minify,
//         sourceMap: minify,
//         target,
//         loaders: {
//           '.vue': 'ts',
//         },
//         define: {
//           'process.env.NODE_ENV': JSON.stringify('production'),
//         },
//       }),
//     ],
//     external: await generateExternal({ full: true }),
//   })
//   await writeBundles(bundle, [
//     {
//       format: 'umd',
//       file: path.resolve(
//         puikOutput,
//         'dist',
//         formatBundleFilename('index-ce.full', minify, 'js')
//       ),
//       exports: 'named',
//       name: 'Puik',
//       globals: {
//         vue: 'Vue',
//       },
//       sourcemap: minify,
//       banner,
//     },
//     {
//       format: 'esm',
//       file: path.resolve(
//         puikOutput,
//         'dist',
//         formatBundleFilename('index-ce.full', minify, 'mjs')
//       ),
//       sourcemap: minify,
//       banner,
//     },
//   ])
// }

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
  Promise.all([
    buildFullEntry(minify),
    // buildFullEntryCe(minify),
    buildFullLocale(minify),
  ])

export const buildFullBundle = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false))
)
