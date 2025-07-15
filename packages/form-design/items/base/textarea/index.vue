<template>  
	<el-input 
		v-if="!preview"
		type="textarea"
		:style="`width:${record.width}`"
		:placeholder="getLabel(record.options.placeholder)"
		:clearable="record.options.clearable"
		:disabled="recordDisabled"
		:rows="record.options.rows"
		:autosize="record.options.autosize"
		:maxlength="record.options.maxLength > 0 ? record.options.maxLength : null"
		:show-word-limit="record.options.maxLength && record.options.maxLength > 0 ? true : false"
		v-model="models[record.model]" 
		@focus="handleFocus"
        @blur="handleBlur"
		> 
	</el-input> 
	<span v-else>{{models[record.model]}}</span> 
</template>
<script>
//import { dynamicFun } from '../../../../utils/index.js'
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	created () { 
	  this.updateSimpleDefaultValue()
	}
}
</script>