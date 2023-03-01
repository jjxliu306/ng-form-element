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
		// 当前是否为预览或者编译状态
		isBuild: {
			type: Boolean,
			default: false
		}
	}, 
	methods: {
	  	reset() {
	  		this.$refs.form && this.$refs.form.resetFields()
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

	
	.right-menu {
	  width: 190px;
	  background: #fff;
	  border: 1px solid #ccc;
	  position: fixed;
	  transition: all 0s;
	  box-shadow: 3px 3px 5px #999;
	  padding: 8px 0;
	  z-index: 999;

	  ul {
		  padding: 0;
		  margin: 0;
		  list-style: none;

		  li {
			  cursor: pointer;
			  user-select: none;
			  padding: 0 15px;
			  height: 30px;
			  line-height: 30px;
			  font-size: 14px;

			  &:hover {
				  background: #eee;
				}
			}
		}
	}
}
</style>