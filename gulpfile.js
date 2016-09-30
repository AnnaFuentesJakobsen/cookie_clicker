// Plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
 

// En funktion som retunerar gulp.src, som sedan loggar error meddelanden, skickas sedan 
// vidare och minifierar css som till sist lägger deni dist-mappen
gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
});
// Gör samma sak som i tidigare funktion, fast med js-filen
gulp.task('js', function () {
  return gulp.src('src/clicker.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
// Initierar browserSync och kollar efter ändringar i scss, js och index-filen.
gulp.task('default', ['sass', 'js'], function() {
    browserSync.init({
        server: "./",
        open: false
    });
    gulp.watch("./src/*.scss", ['sass']);
    gulp.watch("./src/*.js", ['js']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('build', ['sass', 'js']);




