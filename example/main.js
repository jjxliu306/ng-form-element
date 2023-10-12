 
import Vue from 'vue'
import App from './App'  
   
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
 
// 注册组件库
Vue.use(FormDesign , {locale: mergeZh , components: NgComponents})
  

Vue.config.productionTip = false

new Vue({ 
 // router,
  render: h => h(App),
}).$mount('#app')
