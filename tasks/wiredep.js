var gulp   = require('gulp');
var wiredep = require('wiredep').stream;
var notify  = require('gulp-notify');

gulp.task('wiredep', function() {
  gulp.src('cms/templates/cms/base.django.html')
    .pipe(wiredep({
      exclude: ['/json3/', '/es5-shim/'],
      onError: function(err) {
        return notify().write(err);
      },
      fileTypes: {
        html: {
          replace: {
            js: function(filePath) {
              return '<script src="' + 'assets/' + filePath.split('/').pop() + '"></script>';
            },
            css: function(filePath) {
              return '<link rel="stylesheet" href="' + 'assets/' + filePath.split('/').pop() + '"/>';
            }
          }
        }
      }
    }))
    .pipe(gulp.dest('cms/templates/cms/'));
});
