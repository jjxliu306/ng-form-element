 
import Vue from 'vue'
import App from './App'  
   
 
 // 导入组件库
import FormDesign from '../packages/index.js' 
import zh from '../packages/locale/lang/zh_CN'
import en from '../packages/locale/lang/en'

import ngEn from './locale/en.js'
import ngZh from './locale/zh_CN.js'

console.log('ngZh' , ngZh)

const mergeZh = Object.assign({}, ngZh, zh); // {...ngZh , ...zh}
//console.log('mergeZh' , mergeZh)
//import locale from '../packages/locale/index'
// 注册组件库
Vue.use(FormDesign , {locale: mergeZh})
 
//Vue.prototype.$locale = locale;

Vue.config.productionTip = false

new Vue({ 
 // router,
  render: h => h(App),
}).$mount('#app')
