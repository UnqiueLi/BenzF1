const path = require('path');
const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../gulp.conf');

gulp.task('clean', clean);
gulp.task('cleanGitLab', cleanGitLab);
gulp.task('other', other);
gulp.task('bundle', bundle);

function clean() {
    return del([conf.paths.dist, conf.paths.tmp]);
};
function cleanGitLab() {
    return del([
        'git_lab/2017/precious-moment/assets',
        'git_lab/2017/precious-moment/scripts',
        'git_lab/2017/precious-moment/styles'
    ]);
};

function other() {
    const fileFilter = filter(file => file.stat.isFile());

    return gulp.src([
            path.join(conf.paths.src, '/**/*'),
            path.join(`!${conf.paths.src}`, '/**/*.{html,css,js,scss}')
    ])
        .pipe(fileFilter)
        .pipe(gulp.dest(conf.paths.dist))
        // .pipe(gulp.dest('git_lab/2017/precious-moment/'))
        ;
};

function bundle() {
    return gulp.src(conf.path.src('bundle/**'))
        .pipe(gulp.dest(conf.path.dist('bundle/')));
};