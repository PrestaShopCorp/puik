import path from 'path'
import chalk from 'chalk'
import { src, dest, series, parallel } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import postcss from 'gulp-postcss'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import replace from 'gulp-replace'
import consola from 'consola'
import { PUIK_PREFIX, puikOutput, PUIK_PKG } from '@puik/build'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(puikOutput, 'theme')
const THEME = `${PUIK_PREFIX}/theme`

/**
 * compile theme scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function buildTheme() {
  const sass = gulpSass(dartSass)
  const noPuikPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(postcss())
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(
      rename((path) => {
        if (!noPuikPrefixFile.test(path.basename)) {
          path.basename = `puik-${path.basename}`
        }
      })
    )
    .pipe(replace(THEME, `${PUIK_PKG}/theme`))
    .pipe(dest(distFolder))
}

/**
 * copy from packages/theme/lib to dist/theme
 */
export function copyThemeBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

/**
 * copy source file to packages
 */

export function copyThemeSource() {
  return src(path.resolve(__dirname, 'src/**'))
    .pipe(replace(THEME, `${PUIK_PKG}/theme`))
    .pipe(dest(path.resolve(distBundle, 'src')))
}
/**
 * copy assets file to packages
 */

export function copyThemeAssets() {
  return src(path.resolve(__dirname, 'assets/**')).pipe(
    dest(path.resolve(distBundle, 'assets'))
  )
}

export const build = parallel(
  copyThemeSource,
  copyThemeAssets,
  series(buildTheme, copyThemeBundle)
)

export default build
