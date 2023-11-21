<template>   
	<Editor 
		v-if="!preview"
		:placeholder="getLabel(record.options.placeholder)"
		:clearable="record.options.clearable"
		:disabled="recordDisabled || isDragPanel" 
		:preview="preview"
		:html="record.options.ifHtml"
		v-model="models[record.model]"  
		>
		 
	</Editor> 
	<div v-else v-html="models[record.model]">
		<!-- {{models[record.model]}}  -->
	</div> 
</template>
<script>
import mixin from '../../mixin.js'
import Editor from './editor.vue'
export default {
	mixins: [mixin],
	components: {
		Editor
	},
	created () { 
	  this.updateSimpleDefaultValue()
	}
}
</script>