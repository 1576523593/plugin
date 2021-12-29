const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const vueConfig = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@$', resolve('src'))
    config.plugins.delete('prefetch')
    config.plugin('html').tap(args => {
      args[0].title = '智慧计量监管服务平台'
      return args
    })
  },
  outputDir: 'jiliang_zjg',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          'border-radius-base': '2px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  productionSourceMap: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}
module.exports = vueConfig
