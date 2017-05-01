var gulp = require('gulp');
var sass = require('gulp-sass');
var typescript = require('gulp-tsc');
var runSequence = require('run-sequence');

gulp.task('develop', function(done) {
    runSequence('sass', 'typescript', 'copy', function() {
        console.log('Run something else');
        done();
    });
});

gulp.task('sass', function(){
  return gulp.src('app/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('typescript', function(){
  return gulp.src('app/**/*.ts')
    .pipe(typescript())
    .pipe(gulp.dest('app'));
});

gulp.task('copy', function () {
  gulp.src(['app/**/*', '!app/**/*.scss', '!app/**/*.ts'])
    .pipe(gulp.dest('dist'));
})



