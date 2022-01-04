import path from 'path';
import { src, dest, series, parallel } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import chalk from 'chalk'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

const distFolder = path.resolve(__dirname, 'dist');


function buildTheme() {
  const sass = gulpSass(dartSass)

  const noPuikPrefixFile = /(index)/
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({cascade: false}))
    .pipe(
      cleanCSS({}, (details) => {
        console.log(
          `${chalk.cyan(details.name)}: ${chalk.yellow(details.stats.originalSize / 1000)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(
      rename((path) => {
        if(!noPuikPrefixFile.test(path.basename)) {
          path.basename = `puik-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}


export const build = series(buildTheme);

export default build;