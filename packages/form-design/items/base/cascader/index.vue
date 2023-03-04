<template>   
    <el-cascader  
      v-if="!preview"
      ref="cascader"
      v-model="models[record.model]"
      :options="(record.options.dynamic == 1 && record.options.remoteFunc ? checkValues : record.options.options)"
      :style="`width:${record.options.width}`"
      :placeholder="record.options.placeholder"
      :filterable="record.options.showSearch"  
      :clearable="record.options.clearable"
      :props="itemProp" 
      :disabled="recordDisabled"
      
    />  
    <span v-else>
      {{models[record.model+'_label']}}  
    </span> 
</template>
<script>
import mixin from '../../mixin.js'
export default {
  mixins: [mixin],
  data() {
    return {
      itemProp: {
            children: 'children',
            value: 'value',
            label: 'label',
            multiple: this.record.options.multiple 
      },
      // 2021-03-13 如果该字段带有本地数据过滤,则这里保存本地过滤的过滤条件
      localFilter: [],
    }
  },
  created () { 
    //this.updateSimpleDefaultValue()
    // 判断如果是远程方法的话 远程请求数据
    this.initDynamicValue()

    // 如果是静态数据 判断当前是否有值 是否要回填默认值

    if(this.record.options.dynamic == 0
      && this.models 
        && (
          !Object.prototype.hasOwnProperty.call(this.models,this.record.model)
          || this.models[this.record.model] == undefined) 
      ) {

      if(this.record.options.defaultValue != null && this.record.options.defaultValue.length > 0) {

        this.$set(this.models , this.record.model , this.record.options.defaultValue)

      }
       

    }
  }
}
</script>