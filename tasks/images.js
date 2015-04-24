var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
  var dest = './build/images';

  return gulp.src('./app/assets/images/**')

		// Ignore unchanged files
		.pipe(changed(dest))

		// Optimize
		.pipe(imagemin())
		.pipe(gulp.dest(dest));
});
