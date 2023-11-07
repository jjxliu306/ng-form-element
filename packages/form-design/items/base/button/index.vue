<template>
<div :style="{width: record.width , textAlign: record.options.align}">
	<el-button  
		:type="record.options.type" 
		:size="record.options.size"
		:plain="record.options.plain"
		:round="record.options.round"
		:circle="record.options.circle"
		:icon="record.options.icon"
		@click="buttonClick"
	>
		{{record.label}}
	</el-button>
</div>
</template>
<script> 
import mixin from '../../mixin.js'
import { dynamicVoidFun } from '../../../../utils/index.js'
export default {
    mixins: [mixin],
    methods: {
    	buttonClick() {
    		const control = this.record.options.control
    		if(!control) return 
 
    		if(control == 'reset') {
    			// 清空
    			this.$ngofrm_bus.$emit('reset');
    		} else {
    			// 判断是否有脚本
    			const clickScript = this.record.options.script 
    			if(!clickScript) return 

    			// 执行脚本
    			dynamicVoidFun(clickScript , this.models)

    		}
    	}
    }
}
</script>