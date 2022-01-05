import path from 'path'
import { mkdir, copyFile } from 'fs/promises'
import { copy } from 'fs-extra'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import { buildOutput, puikOutput, puikPackage, projRoot } from './utils/paths'
import { buildConfig } from './build-info'
import type { TaskFunction } from 'gulp'
import type { Module } from './build-info'

const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))

export const copyFiles = () =>
  Promise.all([
    copyFile(puikPackage, path.join(puikOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(puikOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'typings/global.d.ts'),
      path.resolve(puikOutput, 'global.d.ts')
    ),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(puikOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(puikOutput, 'theme/index.css'),
    path.resolve(puikOutput, 'dist/index.css')
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(puikOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    runTask('buildHelper'),
    series(
      withTaskName('buildTheme', () => run('pnpm run -C packages/theme build')),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
)

export * from './types-definitions'
export * from './modules'
export * from './full-bundle'
export * from './helper'
