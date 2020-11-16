// var path = require("path");
module.exports = {
  //webpack配置
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },

  outputDir: 'target',
  // '将dist修改为target', 生产环境构建文件的目录
  /* 取消代码运行的时候eslint阻止项目运行 */
  lintOnSave: false,
  publicPath: process.env.NODE_ENV == 'development' ? '/' : './',
  devServer: {
    // 端口
    port: 8080,
    // 启动时自动默认浏览器打开
    open: true,
    overlay: {
      // 显示warnings
      warnings: true,
      // 显示error
      errors: true
    },
    proxy: {
      '/lyfen': {
        target: 'http://localhost:8182/', 
        ws: true, //如果要代理 websockets，配置这个参数
        changeOrigin: true //是否跨域
      }
    }
  }
}
