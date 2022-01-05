import path from 'path'
import { puikOutput } from './utils/paths'
import { PUIK_PKG } from './utils/constants'
import type { ModuleFormat } from 'rollup'

export const modules = ['esm', 'cjs'] as const
export type Module = typeof modules[number]
export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    /** e.g: `es` */
    name: string
    /** e.g: `dist/puik/es` */
    path: string
  }

  bundle: {
    /** e.g: `puik/es` */
    path: string
  }
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(puikOutput, 'es'),
    },
    bundle: {
      path: `${PUIK_PKG}/es`,
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(puikOutput, 'lib'),
    },
    bundle: {
      path: `${PUIK_PKG}/lib`,
    },
  },
}
export const buildConfigEntries = Object.entries(
  buildConfig
) as BuildConfigEntries

export type BuildConfig = typeof buildConfig
export type BuildConfigEntries = [Module, BuildInfo][]
