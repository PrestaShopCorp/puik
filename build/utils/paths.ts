import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme')
export const hookRoot = resolve(pkgRoot, 'hooks')
export const epRoot = resolve(pkgRoot, 'puik')
export const utilRoot = resolve(pkgRoot, 'utils')
export const docRoot = resolve(projRoot, 'docs')

/** dist */
export const buildOutput = resolve(projRoot, 'dist')
/** dist/puik */
export const epOutput = resolve(buildOutput, 'puik')

export const projPackage = resolve(projRoot, 'package.json')
export const compPackage = resolve(compRoot, 'package.json')
export const themePackage = resolve(themeRoot, 'package.json')
export const hookPackage = resolve(hookRoot, 'package.json')
export const epPackage = resolve(epRoot, 'package.json')
export const utilPackage = resolve(utilRoot, 'package.json')
export const docPackage = resolve(docRoot, 'package.json')