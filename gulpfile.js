'use strict'

var gulp = require('gulp');
var pug = require('gulp-pug');


gulp.task('html', function() {
  return gulp.src('src/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./'))
});
