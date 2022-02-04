const target = 'http://192.168.0.110:5000'

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
      },
      '^/member':{
        target,
        changeOrigin: true,
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      },

// '^/login': {
//   target,
//   changeOrigin: true,
// }
},
// disableHostCheck: true,
},
lintOnSave: false,
}

