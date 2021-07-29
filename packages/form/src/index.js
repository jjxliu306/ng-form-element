// 导入组件，组件必须声明 name
import NgFormDesign from './form-design/index.vue'
import NgFormBuild from './form-build/index.vue'
import NgFormItem from './form-item/index.vue' 
import NgFormItemBase from './form-item/base.vue' 
// 为组件提供 install 安装方法，供按需引入
NgFormDesign.install = function (Vue) { 
  Vue.component(NgFormDesign.name, NgFormDesign)
}
// 为组件提供 install 安装方法，供按需引入
NgFormBuild.install = function (Vue) { 
  Vue.component(NgFormBuild.name, NgFormBuild)
}
 
NgFormItem.install = function (Vue) { 
  Vue.component(NgFormItem.name, NgFormItem)
}

NgFormItemBase.install = function (Vue) { 
  Vue.component(NgFormItemBase.name, NgFormItemBase)
}
// 默认导出组件
export default [ NgFormDesign,NgFormBuild,NgFormItem,NgFormItemBase]
 