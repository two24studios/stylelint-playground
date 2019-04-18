'use-strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const styleLint = require('gulp-stylelint');

// css - compiles scss to css
function css() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(gulp.dest('./src/css/'));
}

// css linting
// see .stylelintrc.json for config
function cssLint() {
  return gulp.src('./src/scss/**/*.scss').pipe(
    styleLint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
    })
  );
}

// watch files
function watchFiles() {
  gulp.watch('./src/scss/**/*', gulp.series(css, cssLint));
}

// exports
exports.default = watchFiles;
exports.css = css;
exports.cssLint = cssLint;
