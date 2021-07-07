<!--
 传入record数据，通过判断record.type，来渲染对应的组件 
 -->
<template>
 
      
  <!-- 文本 -->
  <div v-if="record.type === 'text'" :style="{ textAlign: record.options.textAlign }">  
    <span>{{record.label}}</span>
  </div>
  <!-- html -->
  <div   v-else-if="record.type === 'html'"  v-html="record.options.defaultValue" > 
  </div>

  <div v-else >
    <BaseItem
          :models="domains" 
          :record="record"   
          :renderPreview="renderPreview"  
          >
    </BaseItem>
  </div>
</template>
<script> 
import BaseItem from '../base'
 
export default {
  name: "TableItem",
  props: {
     record: {
      type: Object,
      required : true
    }, 
    domains: {
      type: Object,
      required : true
    },  
      // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }
  }, 
  computed: {
     customList() {
      if (window.customComponents) {
        return window.customComponents.map(item => item.type);
      } else {
        return [];
      }
    }
  },
  components: {
     BaseItem
  },  
  methods: {
    
  }
};
</script>
 