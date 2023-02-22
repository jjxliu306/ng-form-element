<template>  
	<div>   
    <el-radio-group 
      v-model="models[record.model]" 
      :placeholder="record.options.placeholder" 
      >
        <template v-for="(radioitem, index) in checkList" > 
           <el-radio :label="radioitem[itemProp.value]" :key="radioitem[itemProp.value] + index" v-if="itemVisible(radioitem)">
           {{radioitem[itemProp.label]}}
          </el-radio>
        </template> 
      </el-radio-group>
	</div>
</template>
<script>
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	data() {
		return {
			itemProp: { 
		    value: 'value',
		    label: 'label' 
		  },
      value: '',
      // 2021-03-13 如果该字段带有本地数据过滤,则这里保存本地过滤的过滤条件
      localFilter: [],
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
    //this.initDefaultValue()
  },
	mounted () { 
	  this.updateSimpleDefaultValue()
    // 判断如果是远程方法的话 远程请求数据
    this.initDynamicValue()
	}
}
</script>