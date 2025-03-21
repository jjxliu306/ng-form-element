<template>  
	<el-link 
		:type="record.options.type || 'default'" 
		:href="linkHref"
		:underline="record.options.underline"
		>
		{{record.label}}
	</el-link>
</template>
<script> 
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	computed: { 
		linkHref(){

			// 判断是否禁用
			if(this.record.options.disabled) return undefined
	      
	      	if(!this.record.options.href) return undefined
	      
	      	const href = this.record.options.href 
	    	if(href.trim == '') return undefined 
	      
	      	return href 
	    },
	}
}
</script>
 