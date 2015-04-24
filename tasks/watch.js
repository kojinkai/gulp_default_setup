var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {

  // Styles
  gulp.watch('./app/scss/**', ['sass', 'modernizr']);

  // Client JavaScripts
  gulp.watch(['app/scripts/**/*.js', 'app/app.js'], ['jshint-app', 'jscs', 'browserify']);

  // Gulp Automation JavaScripts
  gulp.watch('./gulp/**', ['jshint-gulp', 'jscs']);

  // Views
  gulp.watch(['./app/templates/**/*.{html, js}', './app/scripts/ractives/**/*.{html, ract}'], ['browserify']);

  // Images
  gulp.watch('./app/assets/images/**', ['images']);

  // Front End Dependencies
  gulp.watch('bower.json', ['wiredep']);

});
