// 开发环境处理
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const historyApiFallback = require('connect-history-api-fallback');

module.exports = merge(common, { // 针对开发环境进行一些处理
  mode: 'development', // 针对开发环境进行一些处理，比如将process.env.NODE_ENV设置为development
  devtool: 'inline-source-map', // 源码映射,以一个DataUrl的方式添加到打包的文件
                                // 精准报错，代码所处的文件，还有行数，这是source-map的最重要作因为目前我们开发时候的源码跟通过webpack构建混淆压缩后的生产环境部署的代码不一样，sourceMap就是一个文件，里面储存着位置信息。用 
                                //为什么要有source-map? 
  devServer: {
    open: true, // 打开默认浏览器
    hot: true,   // hot-module-replacement让文件内容改变时，重新加载相应模块
    historyApiFallback: true,
  },
});

