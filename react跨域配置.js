// 1.在package.json里面配置proxy
// 2.使用http-proxy-middleware管理包，创建setupProxy.js，进行代理配置
      //做多个代理的配置文件
      const proxy = require('http-proxy-middleware');
      module.exports = function (app) {
          app.use(
              proxy(
                  '/api', {  //遇见 /api前缀的请求，就会触发该代理配置
                      target: 'http://172.31.46.4:8088',
                      changeOrigin: true,  // 控制服务器接收到的请求头host的值
                      pathRewrite: {
                          "^/api": ""   
                      }
                  }),
              proxy(
                  '/apc', {
                      target: 'http://localhost:7000',
                      changeOrigin: true,
                      pathRewrite: {
                          "^/apc": ""  
                      },
                  }
              )
          )
      };

    //   /api/getUserMsg 相当于 http://172.31.46.4:8088/getUserMsg

    //   /api相当于http://172.31.46.4:8088