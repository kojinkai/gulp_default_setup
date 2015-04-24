var gulp = require('gulp');

gulp.task('build', ['clean', 'browserify', 'sass', 'images', 'copy'], function() {
  console.log('building gulp');
});
