 
import Vue from 'vue'
import App from './App'  
 

// 加入路由
import router from "./router";
 
 // 导入组件库
import FormDesign from '../packages/index.js' 
// 注册组件库
Vue.use(FormDesign)
 
 

Vue.config.productionTip = false

new Vue({ 
  router,
  render: h => h(App),
}).$mount('#app')
