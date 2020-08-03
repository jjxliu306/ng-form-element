 
import Vue from 'vue'
import App from '@/App' 
// 引入@babel/polyfill处理兼容
import "@babel/polyfill";
// 导入ant组件
import '@/element-ui'   
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/scss/form-design.scss'
// import "ant-design-vue/dist/antd.less";

// 解决Chrome控制台non-passive event listener输出问题
import "default-passive-events"; 


Vue.config.productionTip = false

new Vue({ 
  render: h => h(App),
}).$mount('#app')
