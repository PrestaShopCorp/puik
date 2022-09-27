import path from 'path'
import { copyFile } from 'fs/promises'
import { copy } from 'fs-extra'
import { buildConfig } from '../build-info'
import { buildOutput, pkgRoot } from '../utils'

export const copyStandAlonePackages = async () => {
  const standAlonePackages = ['tailwind-preset']

  return await standAlonePackages.forEach(async (pkg: string) => {
    await copy(
      `${buildConfig['cjs'].output.path}/${pkg}`,
      `${buildOutput}/${pkg}/lib`,
      {
        recursive: true,
      }
    )
    await copy(
      `${buildConfig['esm'].output.path}/${pkg}`,
      `${buildOutput}/${pkg}/es`,
      {
        recursive: true,
      }
    )
    await copyFile(
      path.resolve(`${pkgRoot}/${pkg}`, 'package.json'),
      path.resolve(`${buildOutput}/${pkg}`, 'package.json')
    )
  })
}
