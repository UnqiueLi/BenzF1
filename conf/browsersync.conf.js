const conf = require('./gulp.conf');

exports.tmp = () => {
    return {
        server: {
            baseDir: [
                '.tmp',
                'src'
            ]
        },
        //httpModule: 'http2',
        //https: true,
        ghostMode: false,
        notify: false,
        open: false,
        //port: 80,
    };
};

exports.dist = () => {
    return {
        server: {
            baseDir: [
                conf.paths.dist
            ]
        },
        open: false
    };
};