var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var notify       = require('gulp-notify');
var minifycss    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var gulpif       = require('gulp-if');
var args         = require('yargs').argv;

var isProduction = args.env === 'production';

gulp.task('sass', function() {
  gulp.src('./app/scss/**/*.scss')
  .pipe(gulpif(!args.env.hasOwnProperty('env'), sourcemaps.init()))
  .pipe(sass({
    errLogToConsole: true,
    onError: function(err) {
      return notify().write(err);
    },
    style: 'expanded',
    sourcemap: false
  }))
  .pipe(autoprefixer({
    browsers: ['last 4 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
  }))
  .pipe(gulpif(!args.env.hasOwnProperty('env'), sourcemaps.write('./')))
  .pipe(gulp.dest('./app/assets'))
  .pipe(gulpif(isProduction, rename({ suffix: '.min' })))  // <- prod task
  .pipe(gulpif(isProduction, minifycss()))                 // <- prod task
  .pipe(gulpif(isProduction, gulp.dest('./build')))        // <- prod task
  .pipe(notify({ message: 'Styles task complete' }));
});
