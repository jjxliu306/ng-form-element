// 导入组件，组件必须声明 name
import FormDesign from './form-design/index.vue'
import FormBuild from './form-build/index.vue'
import FormItem from './form-item/index.vue' 
import FormItemBase from './form-item/base.vue' 
// 为组件提供 install 安装方法，供按需引入
FormDesign.install = function (Vue) { 
  Vue.component(FormDesign.name, FormDesign)
}
// 为组件提供 install 安装方法，供按需引入
FormBuild.install = function (Vue) { 
  Vue.component(FormBuild.name, FormBuild)
}
 
FormItem.install = function (Vue) { 
  Vue.component(FormItem.name, FormItem)
}

FormItemBase.install = function (Vue) { 
  Vue.component(FormItemBase.name, FormItemBase)
}
// 默认导出组件
export default [ FormDesign,FormBuild,FormItem,FormItemBase]
 