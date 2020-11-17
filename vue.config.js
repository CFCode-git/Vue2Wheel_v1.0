const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // 如果要使用dart-sass要加这个选项 https://github.com/webpack-contrib/sass-loader
        sassOptions: {
          includePaths: [path.join(__dirname, 'src')]
        },
      }
    }
  }
  // chainWebpack: (config) => { // https://github.com/vuetifyjs/vue-cli-plugins/issues/101
  //   if (process.env.NODE_ENV === 'test') {
  //     const sassRule = config.module.rule('sass')
  //     sassRule.uses.clear()
  //     sassRule.use('null-loader').loader('null-loader')
  //     const scssRule = config.module.rule('scss')
  //     scssRule.uses.clear()
  //     scssRule.use('null-loader').loader('null-loader')
  //   }
  // Allow to mix SASS and SCSS
  // https://vuetifyjs.com/en/customization/sass-variables#single-file-components
  // ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((match) => {
  //   config.module.rule('scss').oneOf(match).use('sass-loader')
  //     .tap(opt => Object.assign(opt, {data: '@import "~@/styles/application.scss";'}))
  // })
  // },
}
