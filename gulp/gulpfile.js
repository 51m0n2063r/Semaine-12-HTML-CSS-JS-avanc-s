//JS
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
//J'appel Brower sync pour rafaich en live
var browserSync = require('browser-sync');
//
gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass())    // ici on utilise gulp-sass
    .pipe(gulp.dest('destination'))
});
//ficher style.scss
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) //convetie mon fichier vers css
    .pipe(gulp.dest('app/css'))
});
//JS
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children directories
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});
//gulp watch (covetion auto)
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // autres observations
});
//function de lacement de BrowersSync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})
