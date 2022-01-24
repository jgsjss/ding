const target = 'http://localhost:9999';

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
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
    disableHostCheck: true,
  },
  lintOnSave: false,
};
