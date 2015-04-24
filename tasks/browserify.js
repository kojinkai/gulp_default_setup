'use strict';
/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var	watchify     = require('watchify');
var	bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var	handleErrors = require('../util/handleErrors');
var sourcemaps   = require('gulp-sourcemaps');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var gulpif       = require('gulp-if');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var args         = require('yargs').argv;

var isProduction = args.env === 'production';

gulp.task('browserify', function() {
  var bundleMethod = global.isWatching ? watchify : browserify;
  var bundler = bundleMethod({

    // Specify the entry point of your app
    entries: ['./app/app.js'],

    // Add file extentions to make optional in your requires
    extensions: ['.js'],
    debug: true
  });

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
			.bundle()

			// Report compile errors
			.on('error', handleErrors)

			// Use vinyl-source-stream to make the
			// stream gulp compatible. Specify the
			// desired output filename here.
			.pipe(source('bundle.js'))

      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())

      // loads map from browserify file is no environment passed
      .pipe(gulpif(!args.env.hasOwnProperty('env'), sourcemaps.init({loadMaps: true})))

      // if production is passed to as a CLI argument
      .pipe(gulpif(isProduction, uglify()))                    // <- prod task
      .pipe(gulpif(isProduction, gulp.dest('./build')))        // <- prod task

      // writes map from browserify file is no environment passed
      .pipe(gulpif(!args.env.hasOwnProperty('env'), sourcemaps.write('./')))

			// Specify the output destination
			.pipe(gulp.dest('./app/assets'))

			// Log when bundling completes!
			.on('end', bundleLogger.end);
  };

  if (global.isWatching) {

    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});
