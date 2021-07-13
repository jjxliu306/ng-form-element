 
import Vue from 'vue'
import App from './App'  
// 导入element-ui    
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
 
 // 导入组件库
import FormDesign from '../packages/index'
import '../packages/form/src/form-design.css';
// 注册组件库
Vue.use(FormDesign)

//Vue.use(ElementUI);
 


Vue.config.productionTip = false

new Vue({ 
  render: h => h(App),
}).$mount('#app')
