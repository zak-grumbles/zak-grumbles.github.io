'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css'));
});

gulp.task('sass-dev', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('src', function() {
    return gulp.src('js/index.js')
        .pipe(browserify({
            debug: false 
        }))
        .pipe(rename({
            basename: 'bundle'
        }))
        .pipe(gulp.dest('../js'));
});

gulp.task('src-dev', function() {
    gulp.watch('./js/**/*.js', ['src']);
});

gulp.task('html', function() {
    gulp.src('./**/*.html')
        .pipe(gulp.dest('../'));
});

gulp.task('html-dev', function() {
    gulp.watch('./index.html', ['html']);
});

gulp.task('build', ['sass', 'src', 'html']);
gulp.task('dev', ['src-dev', 'sass-dev', 'html-dev']);
gulp.task('default', ['build']);