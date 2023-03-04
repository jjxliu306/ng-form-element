<template>  
	<div v-if="!preview">
		<el-select 
		  v-if="record.options.multiple"
        v-model="models[record.model]"
        :value-key="itemProp.value"
        :style="`width:${record.options.width}`"
       
        :remote="record.options.onlineSearch && record.options.showSearch"
        :remote-method="remoteMethod"
        :placeholder="record.options.placeholder"
        :filterable="record.options.showSearch"
        :disabled="recordDisabled"
        :clearable="record.options.clearable"
        multiple
        @clear="clearChange" 
      >
        <template  v-for="(item, index) in ((record.options.dynamic == 1 && record.options.remoteFunc) || (record.options.dynamic == 2 && record.options.dictType) ? checkValues : record.options.options)">
          <el-option 
            :key="item[itemProp.value] + index"
            :label="item[itemProp.label]"
            :value="item[itemProp.value]"
            v-if="itemVisible(item)"
            >
          </el-option>
        </template>
      </el-select>
      <el-select
        v-else 
        v-model="models[record.model]"
        :style="`width:${record.options.width}`"
        :value-key="itemProp.value" 
        :remote="record.options.onlineSearch && record.options.showSearch"
        :remote-method="remoteMethod"
        :placeholder="record.options.placeholder"
        :filterable="record.options.showSearch"
        :disabled="recordDisabled"
        :clearable="record.options.clearable" 
        @clear="clearChange" 
      > 
        <template v-for="(item, index) in ((record.options.dynamic == 1 && record.options.remoteFunc) || (record.options.dynamic == 2 && record.options.dictType) ? checkValues : record.options.options)">
          <el-option
            :key="item[itemProp.value] + index"
            :label="item[itemProp.label]"
            :value="item[itemProp.value]"
            v-if="itemVisible(item)"
            >
          </el-option>
        </template> 
      </el-select>
	</div>
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
	}
}
</script>