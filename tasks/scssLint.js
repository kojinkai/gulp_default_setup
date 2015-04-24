var gulp        = require('gulp');
var scsslint    = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  gulp.src(['./app/scss/**/*.scss', '!./app/scss/utilities/_reset.scss'])
    .pipe(scsslint({
      'config': '.scss-lint.yml',
    }));
});
