<!--
传入record数据，通过判断record.type，来渲染对应的组件
  -->
<template>
  <div>
   
  </div>
</template>
<script> 
  
export default {
  name: "ng-form-item", 
  data(){  
    return{
    }
  },
  props: {
    // 表单数组
    record: {
      type: Object,
      required: true
    },
    // form-item 宽度配置
    formConfig: {
      type: Object,
      default: () => ({
        labelWidth: 120
      })
     // required: true
    },
    propPrepend: {
      // form-item的 prop前缀 默认不需要
      type: String
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true,
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
     // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    },
    // 是否拖拽面板引用
    isDragPanel: {
      type: Boolean ,
      default: false
    } 
  },
  components: {
     
  }, 
  watch: {
     

  },
  computed: {
     
  },
  methods: {
     
  }
};
</script>