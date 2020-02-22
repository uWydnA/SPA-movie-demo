// vue.config.js
module.exports = {
  devServer: {
    port: 8000,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/retr0': {
        target: 'http://m.maoyan.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/retr0': ''
        }
      },
      '/appapi': {
        target: 'http://www.mei.com',
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
}
