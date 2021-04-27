let mix = require('laravel-mix');

mix
    .js('src/main.js', 'dist')
    .sass('src/master.scss', '').options({
        processCssUrls: false
    })
    .setPublicPath('dist')
    .copy('src/index.html', 'dist');