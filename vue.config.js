
const IS_PROD = process.env.NODE_ENV === 'production'

const npmConfigArgv = (process.env.npm_config_argv === undefined) ? null : JSON.parse(process.env.npm_config_argv)
/*
console.log('npm config: ', npmConfigArgv)
const procArgv = process.argv
console.log('npm config: ', procArgv)
*/
let buildProdFlag = false
if (!!npmConfigArgv) {
  npmConfigArgv.original.forEach(cItem => {
    if (cItem === 'build') {
      buildProdFlag = true
    }
  })
}

const mvdir = require('mvdir');
if (IS_PROD && buildProdFlag) {
  mvdir('index_template/index_prod.html', 'public/index.html', { copy: true });
} else {
  mvdir('index_template/index_dev.html', 'public/index.html', { copy: true });
}

module.exports = {
   lintOnSave: false,
  /* 开启vue运行时模板编译功能！！ */
  runtimeCompiler: true,
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
          //"/cdn/vue-router.min.js",
          "/cdn/vuex.min.js",
          "/cdn/element-ui-2.5.13.js"
        ]

      },
    }
  },
  configureWebpack:  config => {
    // 打包忽略文件
    if(process.env.NODE_ENV === 'production'){
      config.externals = {
        //"element-ui": "ELEMENT",
        // 编译 build的时候放开
        //vue: "Vue",
        //"vue-router": "VueRouter",
        //vuex: "Vuex"
      }
      config.performance= {
        hints: 'warning',
        maxEntrypointSize: 40000000,
        // 生成文件的最大体积
        maxAssetSize: 20000000,
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }
    }

  },
  productionSourceMap: false,
  // 强制内联CSS
  css: { extract: true },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    //config.plugin('webpack-bundle-analyzer')
    //    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    if(process.env.NODE_ENV === 'production'){
      config.optimization.minimizer('terser').tap(args => {
        Object.assign(args[0].terserOptions.compress, {
          pure_funcs: ['console.log']
        })
        return args
      })
    }

    config.module
      .rule('js')
      .include
        .add('/packages')
        .add('/example')
        .end()

      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })

  }

}
