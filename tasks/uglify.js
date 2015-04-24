var gulp   = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  return gulp.src('app/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
