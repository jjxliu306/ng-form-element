 
import Vue from 'vue'
import App from './App' 
// 引入@babel/polyfill处理兼容 
// 导入ant组件    
 // 导入组件库
import VueFormDesign from '../packages/index'
// 注册组件库
Vue.use(VueFormDesign)
// import "ant-design-vue/dist/antd.less";
 


Vue.config.productionTip = false

new Vue({ 
  render: h => h(App),
}).$mount('#app')
