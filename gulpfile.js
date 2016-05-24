var browserSync = require('browser-sync').create(),
    child = require('child_process');

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    stylus = require('gulp-stylus'),
    nano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify');

var poststylus = require('poststylus'),
    postcss = require('gulp-postcss'),
    rucksack = require('rucksack-css'),
    cssstats = require('postcss-cssstats');

const siteRoot = '_site';
const cssFiles = '_css/**/*.styl';

gulp.task('stylus', () => {
  gulp.src('_css/style.styl')
    //.pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true,
      use: [
        poststylus([rucksack({autoprefixer: true})])
      ]
    }))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('minifyCss', () => {
  gulp.src('assets/css/style.css')
    .pipe(sourcemaps.init())
    .pipe(nano())
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});


gulp.task('uglify', function() {
  gulp.src(['assets/js/search.js','assets/js/scripts.js',,'assets/js/lazy-loader.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js'))
});

gulp.task('stylus-watch', ['stylus'], browserSync.reload);
gulp.task('minify-watch', ['minifyCss'], browserSync.reload);
gulp.task('uglify-watch', ['uglify'], browserSync.reload);

gulp.task('serve', ['stylus','minifyCss'], () => {
  browserSync.init({
    browser: 'google chrome',
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['stylus-watch']);
  gulp.watch('assets/css/style.css', ['minify-watch']);
  gulp.watch(['assets/js/search.js','assets/js/scripts.js'], ['uglify-watch']);
});

gulp.task('cssstats', function() {
    return gulp
        .src('assets/css/style.min.css')
        .pipe(
            postcss([
                cssstats(
                    function(stats) {
                        console.log(stats);
                    }
                )
            ])
        );
});


gulp.task('default', ['stylus', 'minifyCss', 'uglify', 'jekyll', 'serve']);
