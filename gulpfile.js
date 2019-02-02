var gulp = require('gulp');
var $ = require('gulp-load-plugins')({rename: {'gulp-rev-delete-original':'revdel', 'gulp-if': 'if'}});

/* Tasks base */
gulp.task('copy', function() {
    return gulp.src(['src/assets/{img,font,video,ico}/**/*'], {base: 'src'})
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return gulp.src('dist/', {read: false})
        .pipe($.clean());
});

/* Minificação */
gulp.task('minify-js', function() {
  return gulp.src('src/**/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('minify-css', function() {
  return gulp.src('src/**/*.css')
    .pipe($.cssnano({safe: true}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('minify-html', function() {
  return gulp.src('src/**/*.html')
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
});

/* Concatenação */
gulp.task('useref', function () {
    return gulp.src('src/*.html')
        .pipe($.useref())
        .pipe($.if('*.html', $.inlineSource()))
        .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.cssnano({safe: true})))
        .pipe(gulp.dest('dist'));
});

/* Imagens */
gulp.task('imagemin', function() {
    return gulp.src('src/assets/img/*')
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ]
        }))
        .pipe(gulp.dest('dist/assets/img'));
});

/* Revisão de arquivos */
gulp.task('rev', function(){
  return gulp.src(['dist/**/*.{css,js,jpg,jpeg,png,svg}'])
    .pipe($.rev())
    .pipe($.revdel())
    .pipe(gulp.dest('dist/'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('dist/'))
})

gulp.task('revreplace', ['rev'], function(){
  return gulp.src(['dist/*.html', 'dist/app.yaml', 'dist/**/*.css'])
    .pipe($.revReplace({
        manifest: gulp.src('dist/rev-manifest.json'),
        replaceInExtensions: ['.html', '.yaml', '.js', '.css']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify', ['minify-js', 'minify-css', 'minify-html']);
gulp.task('build', $.sequence(['minify-js', 'minify-css', 'imagemin'], 'useref', 'revreplace'));
gulp.task('default', $.sequence('clean', 'copy', 'build'));


