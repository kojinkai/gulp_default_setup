// separate task configured here
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');

gulp.task('jshint-gulp', function() {
  return gulp.src('./gulp/**')
    .pipe(jshint('./gulp/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({ message: 'JSHint tasks complete' }));
});
