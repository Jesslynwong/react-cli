# react-cli

📦 使用

 git clone https://github.com/Jesslynwong/react-cli.git

# yarn 
yarn install

yarn start

# npm 
npm install

npm run start

# 💡一些思考

完成CRA+vite之后，结合昨天看相关文章，对脚手架形成整体认知，今天动手做一个脚手架。尝试学习过程中优化目前项目。接下来以《vue设计与实现》中提到的框架设计核心要素进行阐述该脚手架的中重点配置过程：
-  对于特性开关，输出不同产物：使用跨平台设置和使用环境变量，不同的的系统操作环境变量的设置会有所不同，因此build的时候设置cross-env，将不同平台的环境变量形成同一个环境变量。对于压缩代码方面，生产环境环境无需压缩代码并且打包 过后的文件需要hash值，但是开发环境没有此类需求。
-  开发环境对于错误定位有要求，因此使用sourcemap进行源码映射，sourcemap里面储存着位置信息，能够精准报错定位。
-  对于打包降低框架代码方面：splitchunk用于将node_modules中用到的模块打包到app.[hash].js中，如果不配置，会导致该文件太大，js越大，请求js文件和执行文件的时间越长，页面呈现给用户时间越久，用户体验不佳。
-  由于浏览器只能运行js代码，因此需要使用babel来转化jsx语法，比如对于找文件的拓展名，能够设置extensions，对于路径写法能够用alias进行转化。同时解析过得到的js可能无法在某些浏览器进行使用，因此，使用@babel/preset-env来设置不同浏览器所需要的插件，再把插件传给babel。比如babel设置中的targets


相关注释主要在代码中体现

做学习脚手架搭建过程，做学习用途

参考文章： https://juejin.cn/post/6906392940675874830#comment
