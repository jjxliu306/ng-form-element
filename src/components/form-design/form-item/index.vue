<!--
 * @Description: 传入record数据，通过判断record.type，来渲染对应的组件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2020-06-08 20:56:55
 -->
<template>
  <el-form-item
    v-if="
      !(record.options.hidden === true) &&
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
        ].includes(record.type) && dynamicVisibleItem
    "
    :label="formConfig.labelWidth > 0 ? record.label : null " 
    :rules="record.rules"
    :prop="itemProp ? itemProp : (record.rules && record.rules.length > 0 ? record.model : null)"
  > 
   
    <BaseItem 
      :models="models"  
      :formConfig="formConfig"
      :renderPreview="renderPreview"
      :record="record"
      :disabled="disabled || record.options.disabled"

      />
    
  </el-form-item>
  <!-- 可隐藏label -->
  <el-form-item
    v-else-if="(record.type === 'batch' || record.type === 'editor') && dynamicVisibleItem"
    :label="!record.options.showLabel ? '' : record.label" 
  >
    <!-- 动态表格 -->
    <TableBatch
      v-model="models[record.model]"
      v-if="record.type === 'batch'"
      ref="TableBatch"
      :renderPreview="renderPreview"
      :models="models"
      :style="`width:${record.options.width}`"
      :record="record"
      :config="formConfig"
      :parentDisabled="disabled" 
      @change="handleChange($event, record.model)"
      
    />  
     
  </el-form-item>
  <!-- button按钮 -->
  <el-form-item
    v-else-if="record.type === 'button' && dynamicVisibleItem" 
  >
    <el-button
      :disabled="disabled || record.options.disabled" 
      :type="record.options.type" 
      v-text="record.label"
    ></el-button>
  </el-form-item>
  
  <!-- 文本 -->
  <div v-else-if="record.type === 'text' && dynamicVisibleItem " :style="{ textAlign: record.options.textAlign }" >
      <label
        :class="{ 'is-required': record.options.showRequiredMark }"
        v-text="record.label"
      ></label>
  </div>
  <!-- html -->
  <div
    v-else-if="record.type === 'html' && dynamicVisibleItem"
    v-html="record.options.defaultValue"
  ></div> 

  <div v-else-if="dynamicVisibleItem">
    <!-- 分割线 -->
    <el-divider
      v-if="
        record.type === 'divider' &&
          record.label !== '' &&
          record.options.orientation
      "
      :orientation="record.options.orientation"
      >{{ record.label }}</el-divider>
    <el-divider v-else-if="record.type === 'divider' && record.label !== ''">{{
      record.label
    }}</el-divider>
    <el-divider v-else-if="record.type === 'divider' && record.label === ''" />
  </div>
</template>
<script> 
import TableBatch from "./table";
import BaseItem from './BaseItem' 
export default {
  name: "form-item",
  data(){
    return{
      checkList: []
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
      required: true
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
    itemProp: {
      type: String,
      default: null
    },
     // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }
  },
  components: {
     TableBatch,BaseItem 
  },
  watch: {
    checkList:{
      handler(val, oldVal){
          // 默认所有val 全部补一个id 标明顺序
        this.models[this.record.model] = val
      },
      deep:true
    }
  },
  computed: {
    customList() {
      if (window.$customComponentList) {
        return window.$customComponentList.map(item => item.type);
      } else {
        return [];
      }
    },
    // 是否动态显示当前元素 
    // 返回true 显示 false 不显示
    dynamicVisibleItem(){
      
      if(!this.record.options || !this.record.options.dynamicVisible){
        return true
      }
      if(!this.record.options.dynamicVisibleValue){
        return true
      }
      let fstr = this.record.options.dynamicVisibleValue;
      // 打开了开关 这里获取函数内容
      const func = 'return (' + fstr + ')' 
      const Fn = new Function('$', func)
      return Fn(this.models)
    }
  },
  methods: {
    validationSubform() {
      // 验证动态表格
      if (!this.$refs.KBatch) return true;
      return this.$refs.KBatch.validationSubform();
    },
    handleChange(value, key) {
      // change事件
      this.$emit("change", value, key);
 
    },
    
  },
  mounted() {  
    // 如果已经赋值了 则不管默认值了
    if(this.models[this.record.model]) 
      return ;

    const defaultValue = this.record.options.defaultValue
    if(defaultValue) {
      if(this.record.type == 'checkbox'){
        this.checkList = defaultValue
      } else {
        this.models[this.record.model] = defaultValue
      } 
    } 

    // if(this.record.type == 'checkbox' && !this.models[this.record.model]) {
    //   this.models[this.record.model] = []
    // }
    // console.log('record' , this.record)
    // console.log('models' , this.models)
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
