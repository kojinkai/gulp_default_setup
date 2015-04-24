var gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src(['app/assets/fonts', 'app/modernizr.js'])
		.pipe(gulp.dest('build'));
});
