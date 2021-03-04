<template>
  <!-- 自定义组件的示例 -->
  <div id="app">
    <VueDragFormdesign ref="formDesign" :custom-components="customComponents" > 
      <!-- 自定义属性配置 -->
      <template slot="custom-properties" slot-scope="{selectItem}">
        <Properties :selectItem="selectItem"/>
      </template> 
      <template  slot="formName">
        <span> vue-drag-formdesign 示例 </span>
      </template>
    </VueDragFormdesign>   
  </div>
</template> 
<script>
// 引用自定义的表单组件和自定义组件配置信息修改组件
import CustomT from './components/TCustom'
import Properties from './components/properties'
export default {
  name: 'App',
  components: {CustomT , Properties},
  data(){
    return {  
      // 自定义组件列表
      customComponents: [
        { 
          type: 'customT' ,
          label: "自定义图片展示", // 标题文字 
          component: CustomT ,
          options: {
            style: 'width:100px;height:100px'
          },
          model: "customT",
          key: "customT",
          rules: [
            {
              required: false,
              message: "必填项"
            }
          ]
        },
      ]
    }
  } ,  
  methods: { 
  }
}
</script>
 