// 导入组件，组件必须声明 name
import VueDragFormdesign from './src/index.vue'
 
// 为组件提供 install 安装方法，供按需引入
VueDragFormdesign.install = function (Vue) { 
  Vue.component(VueDragFormdesign.name, VueDragFormdesign)
}
 
// 默认导出组件
export default VueDragFormdesign