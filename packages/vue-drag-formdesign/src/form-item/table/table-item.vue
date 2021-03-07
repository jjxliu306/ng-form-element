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
          :renderPreview="true"  
          >
    </BaseItem>
  </div>
</template>
<script> 
import BaseItem from '../BaseItem'
 
export default {
  name: "TableItem",
  props: [
    "record",
    "domains",  
    "renderPreview"
  ], 
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
 