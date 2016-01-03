/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
// font
gulp.task('font', function(){
  return gulp.src('src/font/**/*')
    .pipe(gulp.dest('assets/font'))
    .pipe(notify({ message: 'font task complete' }));
});
// css
gulp.task('css', function() {
  return sass('src/css/screen.scss',{ style: 'expanded' })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
    .pipe(notify({ message: 'css task complete' }));
});
// js
gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    //.pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(notify({ message: 'js task complete' }));
});
// img
gulp.task('img', function() {
  return gulp.src('src/img/**/*')
    //.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/img'))
    .pipe(notify({ message: 'img task complete' }));
});
// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/css/**/*.scss', ['css']);
  // Watch .js files
  gulp.watch('src/js/**/*.js', ['js']);
  // Watch image files
  gulp.watch('src/img/*', ['img']);
  // Watch font files
  gulp.watch('src/font/*', ['font']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in assets/, reload on change
  gulp.watch(['assets/**']).on('change', livereload.changed);
});

//develop
gulp.task('develop', ['font', 'css', 'js', 'img', 'watch']);

//clean
// 清空图片、样式、js
gulp.task('clean', function(cb) {
  return del(['assets/css', 'assets/js','assets/img','assets/font'],cb);
});

// gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
gulp.task('default', ['clean'], function() {
  gulp.start('develop');
});
