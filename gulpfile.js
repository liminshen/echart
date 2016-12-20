var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: './build',
        port: 3000,
    });
});

// // 代理

gulp.task('browser-sync1', function() {
    browserSync.init({
        proxy: "http://stapi.yinyuetai.com/"
    });
});