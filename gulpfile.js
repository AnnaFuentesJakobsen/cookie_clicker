var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
 
gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
    //.pipe(browserSync.stream())
});

gulp.task('js', function () {
  return gulp.src('src/clicker.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
 
gulp.task('default', ['sass', 'js'], function() {
    browserSync.init({
        server: "./",
        open: false
    });
    gulp.watch("./src/**/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('build', ['sass', 'js'], function() {
    return true;
});




