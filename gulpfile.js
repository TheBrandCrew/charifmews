var gulp = require('gulp');
var postcss = require('gulp-postcss');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var autoprefixer = require('autoprefixer');
var browserlist = ['ie 11','ff >= 21', 'chrome >= 11', 'safari >= 6.1', 'ios >= 7.1', "android >= 4.4", 'bb >=10', 'ie_mob 11'];

gulp.task('minify-preloader', function() {
    return gulp.src('preloader/*.css')
        .pipe(postcss([ autoprefixer({ browsers: browserlist }) ]))
        .pipe(concatCss("preloader.css"))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'));
});

gulp.task('compress', function() {
    return gulp.src('final.js')
        .pipe(uglify())
        .pipe(minify())
        .pipe(gulp.dest('./production/'));
});

gulp.task('minify-html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };
    return gulp.src('./*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./production/'));
});