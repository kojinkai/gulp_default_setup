var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');

gulp.task('jshint-app', function() {
  return gulp.src(['app/scripts/**/*.js', 'app/app.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({ message: 'JSHint app complete' }));
});
