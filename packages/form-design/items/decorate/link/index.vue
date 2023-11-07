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
import { dynamicFun } from '../../../../utils/index.js'
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	computed: {
		// textStyle() {
		// 	const style_ = {}

		// 	if(this.record.options.bold) {
		// 		style_.fontWeight = 'bold'
		// 	}
		// 	if(this.record.options.fontSize && this.record.options.fontSize > 0) {
		// 		style_.fontSize = this.record.options.fontSize + 'px'
		// 	}
			 
		// 	return style_
		// },
		linkHref(){
	      
	      if(!this.record.options.href) return undefined
	      
	      const href = this.record.options.href 
	    	if(href.trim == '') return undefined
 
	      
	      return href 
	    },
	}
}
</script>
 