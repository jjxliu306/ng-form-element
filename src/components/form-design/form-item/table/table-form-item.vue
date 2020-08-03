<!--
 传入record数据，通过判断record.type，来渲染对应的组件 
 -->
<template>
  <el-table-column
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
    :label="record.label" 
  >
 <!--  :prop="record.rules && record.rules.length > 0 ? parent.model + '.' + record.model : null" -->
    <template  slot-scope="scope"> 
      <el-form-item  
        :prop="parent.model  + '.' + scope.$index + '.' + record.model"                 
        :rules="record.rules"
      >  
        <BaseItem
          :models="domains[scope.$index]" 
          :record="record" 
          :disabled="record.options.disabled || parentDisabled"  
          :config="config" 
          :formConfig="{}"
          :renderPreview="renderPreview"
          :itemProp="parent.model  + '.' + scope.$index + '.' + record.model"
          @change="handleChange($event)"
          >
        </BaseItem>
      </el-form-item>
    </template> 
  </el-table-column>
  <!-- 文本 -->
  <el-table-column v-else-if="record.type === 'text'" :label="record.label">
    <template >
      <div :style="{ textAlign: record.options.textAlign }">
        <label
          :class="{ 'ant-form-item-required': record.options.showRequiredMark }"
          v-text="record.label"
        ></label>
      </div>
    </template>
   
  </el-table-column>
  <!-- html -->
  <el-table-column
    :label="record.label"
    v-else-if="record.type === 'html'" 
  >
    <template  >
      <div v-html="record.options.defaultValue"> 
      </div>
    </template> 
  </el-table-column>

  <el-table-column v-else :label="record.label">
    <!-- 空 -->
  </el-table-column>
</template>
<script> 
import BaseItem from '../BaseItem'
 
export default {
  name: "TableFormItem",
  props: [
    "record",
    "domains",
    "index",
    "value",
    "parentDisabled", 
    "config",
    "parent",
    "renderPreview"
  ],  
  components: {
     BaseItem
  }, 
  computed: {
    customList() {
      if (window.$customComponentList) {
        return window.$customComponentList.map(item => item.type);
      } else {
        return [];
      }
    }
  },
  methods: {
    handleChange(e) {
     // console.log('input' , e)
      this.$emit("input", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.slider-box {
  display: flex;
  > .slider {
    flex: 1;
    margin-right: 16px;
  }
  > .number {
    width: 70px;
  }
}
</style>
