var gulp = require('gulp');
var karma = require('gulp-karma');

// rather than adding the Karma run to the
// generic watch task we use Karma's built in watch
// see https://www.npmjs.com/package/gulp-karma#watching

gulp.task('default', ['watch'], function() {
  gulp.src('test/**')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
