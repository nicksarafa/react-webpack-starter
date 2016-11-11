/* eslint-disable import/no-extraneous-dependencies, arrow-body-style, no-console, no-unused-vars */

import gulp from 'gulp'
import babel from 'gulp-babel'
import del from 'del'
import eslint from 'gulp-eslint'
import webpack from 'webpack-stream'
import mocha from 'gulp-mocha'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import webpackConfig from './webpack.config.babel'

const paths = {
  allSrcStyles: 'src/**/*.?(s)css',
  allSrcJs: 'src/**/*.js?(x)',
  serverSrcJs: 'src/server/**/*.js?(x)',
  sharedSrcJs: 'src/shared/**/*.js?(x)',
  clientEntryPoint: 'src/client/app.jsx',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distDir: 'dist',
  clientBundle: 'dist/client-bundle.js?(.map)',
  clientStyles: 'dist/client',
  allLibTests: 'lib/test/**/*.js',
}

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
  paths.clientStyles,
]))

gulp.task('build', ['lint', 'clean'], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
})

gulp.task('main', ['test'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir))
)

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main'])
})

gulp.task('default', ['watch', 'main'])

gulp.task('lint', () => {
  return gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

// gulp.task('sass', () => {
//   return gulp.src(paths.allSrcStyles)
//     .pipe(sourcemaps.init())
//       .pipe(sass().on('error', sass.logError))
//     .pipe(sourcemaps.write('./'))
// })

gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha())
)
