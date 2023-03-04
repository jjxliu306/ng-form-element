<template>  
	<el-input 
		v-if="!preview"
		type="textarea"
		:style="`width:${record.options.width}`"
		:placeholder="record.options.placeholder"
		:clearable="record.options.clearable"
		:disabled="recordDisabled"
		:rows="record.options.rows"
		:autosize="record.options.autosize"
		:maxlength="record.options.maxLength > 0 ? record.options.maxLength : null"
		v-model="models[record.model]" 
		> 
	</el-input> 
	<span v-else>{{models[record.model]}}</span> 
</template>
<script>
import { dynamicFun } from '../../../../utils/index.js'
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	mounted () { 
	  this.updateSimpleDefaultValue()
	}
}
</script>