var gulp        = require('gulp');
var sass        = require('gulp-sass');
// var sass = require('gulp-ruby-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var optimizeJs = require('optimize-js');
var gulpif = require('gulp-if');

var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');

var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var autoprefixer = require('gulp-autoprefixer');
var run = require('gulp-run');


gulp.task('admin', function() {
  gulp.src('admin/app.msx')
      .pipe(browserify({
        transform: ['mithrilify']
      }))
      .pipe(rename('admin.js'))
      .pipe(gulp.dest('../public/admin/'))
});

//
// gulp.task('sass', function () {
//     return sass('scss/*.scss')
//         .on('error', sass.logError)
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(rename('custom.css'))
//         .pipe(gulp.dest('./'));
// });

gulp.task('sass', function () {
  return gulp.src('./scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename('custom.css'))
    .pipe(gulp.dest('../public/'));
});


// gulp.task('ws', function(){
//   gulp.src('ws/_main.js')
//       .pipe(browserify({
//         transform: ['mithrilify']
//       }))
//       .pipe(rename('ws2.js'))
//       .pipe(gulp.dest('public/javascripts/'))
// });

//
gulp.task('serve', function () {
  browserSync({
    // By default, Play is listening on port 9000
    proxy: 'localhost:9000',
    // We will set BrowserSync on the port 9001
    port: 9001,
    // Reload all assets
    // Important: you need to specify the path on your source code
    // not the path on the url
    files: [
      '../public/{,*/}*.css',
      '../public/{,*/}*.js',
      'public/stylesheets/*.css',
      'public/javascripts/*.js',
      'conf/routes'],
    open: false
  });
});

gulp.task('watchjsx', ['admin'], function () {
  gulp.watch('admin/{,*/}{,*/}*.msx', ['admin']);
  gulp.watch('scss/{,*/}*.scss', ['sass']);
});

// Creating the default gulp task
gulp.task('default', [  'admin', 'sass', 'watchjsx', 'serve']);
