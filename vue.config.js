module.exports = {
  configureWebpack: {
    devServer: { // 处理跨域问题
      proxy: {
        '/api': {
          target: 'http://120.77.83.8:8084',// 将要请求的后端接口ip+port
          changeOrigin: true,
          // 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          ws: false,// 关闭 webSocket
          pathRewrite: {
            '^/api': '',// 替换成target中的地址
          }
        }
      },
      port: 8888, // 端口
    },
  }
}
