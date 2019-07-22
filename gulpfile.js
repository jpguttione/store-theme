'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./react/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('Washer.css'))
    .pipe(gulp.dest('./react/'));
});

gulp.task('components', function () {
  return gulp.src('./react/components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./react/components/'));
});


 
gulp.task('sass:watch', function () {
  gulp.watch('./react/sass/*.scss', gulp.series('sass'));
  gulp.watch('./react/components/**/*.scss', gulp.series('components'));
});
