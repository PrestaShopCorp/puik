import path from 'path'
import chalk from 'chalk'
import { src, dest, series, parallel } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import postcss from 'gulp-postcss'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import consola from 'consola'
import { puikOutput } from '@puik/build'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(puikOutput, 'theme')

/**
 * compile theme scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function buildTheme() {
  const sass = gulpSass(dartSass)
  const noPuikPrefixFile = /(index|base)/
  return src(
    [
      path.resolve(__dirname, 'src/*.scss'),
      path.resolve(__dirname, 'src/design-tokens/*.scss'),
    ],
    { base: 'src' }
  )
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
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

export const build = parallel(
  copyThemeSource,
  series(buildTheme, copyThemeBundle)
)

export default build
