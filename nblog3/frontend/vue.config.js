const { defineConfig } = require('@vue/cli-service')

if (process.env.NODE_ENV === 'production') {
  module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: '../static',
    assetsDir: '../static/nblog3',
    indexPath: '../templates/nblog3/index.html',
    publicPath: '/blog/',
  })
}
