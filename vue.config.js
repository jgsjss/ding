<<<<<<< Updated upstream
// const target = "http://192.168.0.110:5000";
const target = "http://39.113.242.19:5000";

=======
const target = "http://39.113.242.19:5000";
// "http://58.239.156.241:5000"
>>>>>>> Stashed changes
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/api/": {
        target,
        changeOrigin: true,ㅡㅡ
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

      // '^/login': {
      //   target,
      //   changeOrigin: true,
      // }
    },
    // disableHostCheck: true,
  },
  lintOnSave: false,
};
