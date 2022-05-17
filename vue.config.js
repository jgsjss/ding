// 전연구
// const target = "http://192.168.0.110:5000";
// 박연구
const target = "http://58.239.156.241:5000";
// const target = "http://localhost:5000";

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/api/": {
        target,
        changeOrigin: true,
      },
      "^/member/": {
        target,
        changeOrigin: true,
      },
      "^/upload/": {
        target,
        changeOrigin: true,
      },
      "^/download/": {
        target,
        changeOrigin: true,
      },
      "^/apimenu/": {
        target,
        changeOrigin: true,
      },
      "^/status/": {
        target,
        changeOrigin: true,
      },
      "^/static/": {
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
  // /* 이미지 파일 (svg 제외) */
  // config.module.rule('images') //.test(/\.(png|jpe?g|gif)(\?.*)?$/)
  // .use('url-loader').loader('url-loader') .tap(options => Object.assign(options, { esModule: false }));
};
