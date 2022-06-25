const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: devMode ? '[name].js':'[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {      
        test: /\.js(x?)$/,
        exclude: /[\\/]node_modules[\\/]/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /[\\/]node_modules[\\/]/,
        loader: 'html-loader',
        options: {
          minimize: !devMode,
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'simple-scaffold',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({  // 定义自动查找的标志符
      React: 'react',  // 需要变量React的时候，会自动到当前目录或者node_modules中去找react模块，不用import React from 'react' ******（项目）
    }),
  ],
  // 寻找模块对应的文件
  resolve: {
    extensions: ['.js', '.jsx'], // import文件的时候，就可以不加文件后缀名，找不到就尝试加上.jsx后缀名继续查找
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  optimization: {
    splitChunks: { // 模块打包为单独的一个文件，用到就打包，if not 导致app.hash.js文件很大，js越大，请求js文件和执行文件的时间越长，页面呈现给用户的耗时就越久
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      },
    },
  },
}
