var gulp = require('gulp'),
    less = require('gulp-less'),
    concatCss = require('gulp-concat-css'),
    jade = require('gulp-jade'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    svgSprite = require('gulp-svg-sprite'),
    cache = require('gulp-cached'),
    cleanCSS = require('gulp-clean-css'),
    gulpIf = require('gulp-if');

//less-task
gulp.task('less', function () {
    return gulp.src('frontend/styles/*.less')
        .pipe(less())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(cache('less'))
        .pipe(gulp.dest('public/styles'))
});

//media-less-task
gulp.task('media', function () {
    return gulp.src('frontend/media-styles/*.less')
        .pipe(less())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(cache('less'))
        .pipe(gulp.dest('public/media-styles'))
});

//minify-css-task
gulp.task('minify-css-media', function() {
    return gulp.src('public/media-styles/media-styles.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'));
});

//minify-css-task
gulp.task('minify-css-styles', function() {
    return gulp.src('public/styles/styles.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'));
});

//html-task
gulp.task('html', function () {
    return gulp.src('frontend/**/*.html')
        .pipe(gulp.dest('public'))
});

//javascript-task
gulp.task('js', function () {
    return gulp.src('frontend/js/*.js')
        .pipe(gulp.dest('public/js'))
});

//svg-sprite
gulp.task('styles:svg', function() {
    return gulp.src('frontend/images/**/*.svg')
        .pipe(svgSprite({
            mode: {
                css: {
                    dest:       '.', // where to put style && sprite, default: 'css'
                    bust:       false,
                    sprite:     'sprite.svg', // filename for sprite relative to dest
                    layout:     'vertical',
                    dimensions: true,
                    render:     {
                        less: {
                            dest: 'sprite.less'  // filename for .styl relative to dest^
                        }
                    }
                }
            }
        }))
        .pipe(gulpIf('*.less', gulp.dest('frontend/styles'), gulp.dest('public/images/svg')));
});

//watch-task
gulp.task('watch', function () {
    gulp.watch('frontend/styles/**/*.less', ['less']);
    gulp.watch('frontend/media-styles/**/*.less', ['media']);
    gulp.watch('public/media-styles/media-styles.css', ['minify-css-media']);
    gulp.watch('public/styles/styles.css', ['minify-css-styles']);
    gulp.watch('frontend/**/*.html', ['html']);
    gulp.watch('frontend/**/*.js', ['js']);
});

//server-task
gulp.task('server', function () {
    browserSync.init({
        server: 'public'
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('default',
    ['less', 'media', 'html', 'js', 'watch', 'server']
);