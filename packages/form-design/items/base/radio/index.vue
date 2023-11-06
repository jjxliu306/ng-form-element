<template>   
    <el-radio-group 
      v-if="!preview"
      v-model="models[record.model]" 
      :disabled="recordDisabled"
      :placeholder="getLabel(record.options.placeholder)" 
      @change="handleChange($event)" 
      @focus="handleFocus"
      @blur="handleBlur"
      >
        <template v-for="(radioitem, index) in checkList" > 
           <el-radio :label="radioitem[itemProp.value]" :key="index" v-if="itemVisible(radioitem)">
           {{radioitem[itemProp.label]}}
          </el-radio>
        </template> 
      </el-radio-group>
	<span v-else>
    {{models[record.model+'_label']}}  
  </span>
</template>
<script>
import mixin from '../select/datasource-mixin.js'
export default {
	mixins: [mixin],
	data() {
		return {
			itemProp: { 
		    value: 'value',
		    label: 'label' 
		  } 
		}
	},
  computed: {
    checkList() {
      if(
        (this.record.options.dynamic == 1 && this.record.options.remoteFunc)||
        (this.record.options.dynamic == 2 && this.record.options.dictType)
        ) {
        return this.checkValues
      } else {
        return this.record.options.options
      } 
    }
  },
  created() {
    
    this.updateSimpleDefaultValue()

     // 判断如果是远程方法的话 远程请求数据
    this.initDynamicValue()

    // 判断是否有联动关联需要处理 
    if(this.linkageData) {
      this.linkageDataHandle(false)
    }

    // 判断如果已经有了值 但没有label 则尝试回填label 
    const value = this.models[this.record.model]
    const label = this.models[this.record.model + '_label']
    if(value && value.length > 0 && !label) {
      this.handleChange(value)
    }
  },
	mounted () { 
	  
   
	}
}
</script>