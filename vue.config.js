 
module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      cdn: {
        css: [
          '/cdn/element-ui-2.5.13.css' 
        ],
        js: [
          "/cdn/vue.min.js",
          "/cdn/vue-router.min.js",
          "/cdn/vuex.min.js",
          "/cdn/element-ui-2.5.13.js" 
        ]
 
      }, 
    }
  },
  configureWebpack: {
    // 打包忽略文件
    externals: {
      "element-ui": "ELEMENT",
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex" 
    }
  }, 
  productionSourceMap: false,
  // 强制内联CSS
  css: { extract: true }, 
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => { 
    //config.plugin('webpack-bundle-analyzer')
    //    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()

      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
       
  } 
 
}