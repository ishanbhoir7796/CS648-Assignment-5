const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
    console.log('Compiling Sass...');
    return src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

exports.css = css;

exports.default = function() {
    console.log('Watching for Sass changes...');
    watch('src/**/*.scss', css);
};