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
      	:model="models" 
    >
	    <el-row :gutter="20" class="row"> 
	    	<Node  
		        v-for="record in formTemplate.list"
		        :key="record.key" 
		        :record="record"
		        :models="models"
		        :isDrag="false"  
		        >  
		    </Node>  
	    </el-row> 
	</el-form> 
</div> 
</template>
<script> 
import Node from './panel-container/node.vue'
 
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
	    customComponents: {
      		type: Array,
      		default: ()=>[]
    	}, 
	}, 
	computed: {
		config() {
			if(this.formTemplate) return this.formTemplate.config 
			return {}
		}
	},
	provide: function () {
    	return {
     		customC: this.customComponents ,
     		configC: this.config
    	}
  	},
	methods: {
	  	reset() {
	  		this.$refs.form && this.$refs.form.resetFields()
	  	},
	  	validate() {
	  		this.$refs.form && this.$refs.form.validate((valid)=> {
	  			console.log('valid' , valid)
	  		})
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