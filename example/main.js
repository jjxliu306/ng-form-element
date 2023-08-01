 
import Vue from 'vue'
import App from './App'  
   
 
 // 导入组件库
import FormDesign from '../packages/index.js' 
import zh from '../packages/locale/lang/zh_CN'
//import locale from '../packages/locale/index'
// 注册组件库
Vue.use(FormDesign , {locale: zh})
 
//Vue.prototype.$locale = locale;

Vue.config.productionTip = false

new Vue({ 
 // router,
  render: h => h(App),
}).$mount('#app')
