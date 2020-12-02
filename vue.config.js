const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // 如果要使用dart-sass要加这个选项 https://github.com/webpack-contrib/sass-loader
        sassOptions: {
          includePaths: [path.join(__dirname, 'styles')]
        },
      }
    }
  }
}
