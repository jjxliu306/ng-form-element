// 导入组件，组件必须声明 name
import VueDragFormdesign from './src/index.vue'
import VueDragFormBuild from './src/form-build/index.vue'
import VueDragFormItem from './src/form-item/index.vue' 
import VueDragBaseItem from './src/form-item/baseItem.vue' 
// 为组件提供 install 安装方法，供按需引入
VueDragFormdesign.install = function (Vue) { 
  Vue.component(VueDragFormdesign.name, VueDragFormdesign)
}
// 为组件提供 install 安装方法，供按需引入
VueDragFormBuild.install = function (Vue) { 
  Vue.component(VueDragFormBuild.name, VueDragFormBuild)
}
 
VueDragFormItem.install = function (Vue) { 
  Vue.component(VueDragFormItem.name, VueDragFormItem)
}

VueDragBaseItem.install = function (Vue) { 
  Vue.component(VueDragBaseItem.name, VueDragBaseItem)
}
// 默认导出组件
export default [ VueDragFormdesign,VueDragFormBuild,VueDragFormItem,VueDragBaseItem]
 