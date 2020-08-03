<!--
 传入record数据，通过判断record.type，来渲染对应的组件 
 -->
<template>
  <div
    v-if="
      [
        'input',
        'textarea',
        'date',
        'time',
        'number',
        'radio',
        'checkbox',
        'select',
        'rate',
        'switch',
        'slider',
        'uploadImg',
        'uploadFile',
        'cascader'
      ].includes(record.type)
    " 
    align="center" 
  >
        <BaseItem
          :models="domains" 
          :record="record"   
          :renderPreview="true"  
          >
        </BaseItem>
  </div>
      
  <!-- 文本 -->
  <div v-else-if="record.type === 'text'" :style="{ textAlign: record.options.textAlign }"> 
    <label :class="{ 'ant-form-item-required': record.options.showRequiredMark }" v-text="record.label" ></label>  
  </div>
  <!-- html -->
  <div   v-else-if="record.type === 'html'"  v-html="record.options.defaultValue" > 
  </div>

  <div v-else >
    <!-- 空 -->
    dd
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
  components: {
     BaseItem
  },  
  methods: {
    
  }
};
</script>
 