const target = '192.168.0.120:5000';

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
  },
  lintOnSave: false,
};
