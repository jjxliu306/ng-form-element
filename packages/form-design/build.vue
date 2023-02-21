<template> 
<div class="form-build-panel" >  
    <el-form 
    	v-if="formTemplate && formTemplate.config && formTemplate.list"
      	:label-width="formTemplate.config.labelWidth + 'px'" 
      	class="ng-form-build"
      	:label-position="formTemplate.config.labelPosition"
      	:hide-required-asterisk="formTemplate.config.hideRequiredMark" 
      	:label-suffix="formTemplate.config.labelSuffix"
      	ref="form" 
      	:style="formTemplate.config.customStyle" 
      	:size="formTemplate.config.size"
    >
	    <el-row :gutter="20" class="row"> 
	    	<Node  
		        v-for="record in formTemplate.list"
		        :key="record.key"
		        :record="record"
		        :isDrag="false"  
		        >  
		    </Node>  
	    </el-row> 
	</el-form> 
</div> 
</template>
<script> 
import Node from './container-panel/node.vue'
 
import cloneDeep from 'lodash/cloneDeep'

export default {
	name: 'ng-form-build' ,
	components:{
		Node
	},
	data(){
		return {
			 
		}
	},
	props: {
		formTemplate: {
	      	type: Object,
	      	required: true
	    },
	    models: {
	      	type: Object,
	      	required: false,
	      	default: ()=> {return {}}
	    },
		// 当前是否为预览或者编译状态
		isBuild: {
			type: Boolean,
			default: false
		}
	}, 
	methods: {
	  	reset() {
	  		this.$refs.form && this.$refs.form.resetField()
	  	},
	  	getModel() {
	  		return cloneDeep(this.models)
	  	}
	}
}
</script>
<style lang="scss">
.form-build-panel {
	height: 100%; 

	.row {
		height: 100%;
		overflow: auto;
	}

	.ng-form-build {
		height: 100%;
		overflow-y: auto;
    	overflow-x: hidden;
  
	}
}
</style>