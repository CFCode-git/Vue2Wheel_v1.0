// https://cli.vuejs.org/zh/guide/webpack.html#%E4%BB%A5%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E6%96%B9%E5%BC%8F%E4%BD%BF%E7%94%A8%E8%A7%A3%E6%9E%90%E5%A5%BD%E7%9A%84%E9%85%8D%E7%BD%AE
var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'tests/**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec','coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    },
    autoWatch: true,

    browsers: ['ChromeHeadless']
  })
}
