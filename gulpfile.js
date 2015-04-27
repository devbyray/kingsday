var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    package = require('./package.json');


var banner = [
    '/*!\n' +
    ' * <%= package.name %>\n' +
    ' * <%= package.title %>\n' +
    ' * <%= package.url %>\n' +
    ' * @author <%= package.author %>\n' +
    ' * @version <%= package.version %>\n' +
    ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
    ' */',
    '\n'
].join('');

gulp.task('css', function () {
    return gulp.src('app/src/sass/style.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer('last 4 version'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(header(banner, { package : package }))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('js',function(){
    gulp.src([
        'app/src/js/libs/angular.min.js',
        'app/src/js/libs/angular-route.min.js',
        'app/src/js/libs/angular-resource.min.js',
        'app/src/js/libs/masonry.min.js',
        'app/src/js/app.js',
        'app/src/js/factories/**/*.js',
        'app/src/js/controllers/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('map',function(){
    gulp.src('app/src/js/libs/*.map')
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('html',function(){
    return gulp.src([
        'app/*.html',
        'app/**/*.html'
    ])
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "dist"
        },
        open: false
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['css', 'js', 'map', 'html', 'browser-sync'], function () {
    gulp.watch("app/src/sass/**/*.scss", ['css', 'bs-reload']);
    gulp.watch("app/src/js/**/*.js", ['js', 'map', 'bs-reload']);
    gulp.watch("app/**/*.html", ['html', 'bs-reload']);
});