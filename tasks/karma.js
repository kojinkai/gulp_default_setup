var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var karma   = require('gulp-karma');

gulp.task('karma', function() {
  // Be sure to return the stream
  return gulp.src(['test/**.js'])
    .pipe(plumber({
      errorHandler: function() {
        console.log('handling errors from plumber');
      }
    }))
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
});
