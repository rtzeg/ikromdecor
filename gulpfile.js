const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify-es').default;
// const imagemin = require('gulp-imagemin');


// function imagemining() {
//     return src('src/images/**/*')
//     .pipe(imagemin())
//     .pipe(dest('dist/images'))
// }

function styles() {
    return src(['src/scss/**/*.scss', '!src/scss/variebles.scss', '!src/scss/aside.scss', '!src/scss/swipSec.scss', '!src/scss/header.scss', '!src/scss/footer.scss', '!src/scss/mainsec.scss'])
        .pipe(scss())
        .pipe(dest('src/css'))
        .pipe(browserSync.stream());
}
// ['src/js/**/*.js', '!src/js/main.min.js']
function scripts() {
    return src(['src/js/**/*.js', '!src/js/main.min.js'])
        // .pipe(uglify())
        // .pipe(dest('src/js'))
        .pipe(browserSync.stream());
}
function browsersync() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
}
function watching() {
    watch(['src/scss/**/*.scss'], styles);
    watch(['src/js/**/*.js'], scripts);
    watch(['src/**/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
    return src('dist')
        .pipe(clean())
    }
function building() {
    return src([
        'src/**/*.css',
        'src/js/**/*.js',
        'src/**/*.html',
    ], { base: 'src' })
        .pipe(dest('dist'))
}


// exports.imagemining = imagemining;
exports.styles = styles;
exports.scripts = scripts;
exports.cleanDist = cleanDist;
exports.watching = watching;
exports.building = building;
exports.browsersync = browsersync;
exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, browsersync, watching);