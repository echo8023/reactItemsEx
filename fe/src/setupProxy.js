// const proxy = require("http-proxy-middleware")
// // const baseUrl=require("@/actions/api/config.js")
// const baseUrl = require("./actions/api/config.js")
// // cosnt {baseUrl}

// module.exports = function (app) {
//     app.use(proxy(
//         "/ajax", {
//             target: baseUrl,
//             changeOrigin: true
//         }
//     ))
// }


const { createProxyMiddleware } = require('http-proxy-middleware');
// const baseUrl=require("@/actions/api/config.js")
const baseUrl = require("./actions/api/config.js")
// cosnt {baseUrl}

module.exports = function(app) {
    app.use(
      '/ajax',  
        createProxyMiddleware({
        target: 'baseUrl',
        changeOrigin: true,
      })
    )
    // 配置shop_add_actions的反向代理
    app.use(
      '/ajax',  
        createProxyMiddleware({
        target: 'http://elm.cangdu.org',
        changeOrigin: true, //改上面源url的
      })
    )
    
}
  