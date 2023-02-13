const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          '/api': {
            target: 'http://spa-test',
            secure: false,
            changeOrigin: true
          }
        }
      },
      filenameHashing: false,
      productionSourceMap: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
})
