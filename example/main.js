
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import deepmerge from 'deepmerge';

// 自定义组件
import NgComponents from './components/index.js'
 // 导入组件库
import FormDesign from '../packages/index.js'
// ng-form组件国际化资源
import zh from '../packages/locale/lang/zh_CN'
import en from '../packages/locale/lang/en'

// 本地国际化资源
import ngEn from './locale/en.js'
import ngZh from './locale/zh_CN.js'

// 将本地的国际化资源和组件内资源合并
const mergeZh =  deepmerge(zh, ngZh, { clone: true })

const uploadConfig = {
    uploadUrl: 'http://localhost:8080/common/upload' ,
    filePath: 'url',
    fileIdPath: ''
}

const httpConfig = (config)=> {
    config.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjIwZDRhNmU3LTZkMTMtNGNhNy05NThkLTA4ZDM0ZDllMDE2NSJ9.WbJZtczTqd_UYG0qznYBGNH6oMQ6xqJVtBTddzoG5GJwzPvpnXjxAupYtQM9NGvPNh17zpv-omxHmiSUOsLrOw'
    return config 
}
  

// 注册组件库
Vue.use(ElementUI)
Vue.use(FormDesign , {locale: mergeZh , components: NgComponents , httpConfig: httpConfig , uploadConfig: uploadConfig})
Vue.config.productionTip = false

new Vue({
 // router,
  render: h => h(App),
}).$mount('#app')
