'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass-dev', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('src', function() {
    return gulp.src('src/js/index.js')
        .pipe(browserify({
            debug: !gulp.env.production
        }))
        .pipe(uglify())
        .pipe(rename({
            basename: 'bundle'
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('src-dev', function() {
    gulp.watch('./src/js/**/*.js', ['src']);
});

gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('html-dev', function() {
    gulp.watch('./src/index.html', ['html']);
});

gulp.task('build', ['sass', 'src', 'html']);
gulp.task('dev', ['src-dev', 'sass-dev', 'html-dev']);
gulp.task('default', ['build']);