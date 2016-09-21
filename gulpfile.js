
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cssmin = require('gulp-cssmin');
 
gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('js-watch', ['js'], function(done) {
    browserSync.reload();
    done();
})
gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: "./",
        open: false
    });
    gulp.watch("./src/**/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['js-watch']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


