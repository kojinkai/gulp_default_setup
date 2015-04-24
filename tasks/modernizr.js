var gulp         = require('gulp');
var modernizr    = require('gulp-modernizr');

// customizr returns a configuration object
// that can be passed to the modernizr method below
// var customizr = require('./util/customizr');

gulp.task('modernizr', function() {
  gulp.src(['./app/scss/**/*.scss', './app/scripts/**/*.js'])
    .pipe(modernizr())
    .pipe(gulp.dest('./app/assets/'));
});
