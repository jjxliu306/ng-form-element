<template> 
<div class="form-panel" > 
    
    <p class="no-data-text" v-if="!formTemplate || !formTemplate.list || formTemplate.list.length === 0">
      从左侧选择组件添加
    </p>
    <el-form  
      	:label-width="formTemplate.config.labelWidth + 'px'" 
      	class="ng-form"
      	:label-position="formTemplate.config.labelPosition"
      	:hide-required-asterisk="formTemplate.config.hideRequiredMark" 
      	:label-suffix="formTemplate.config.labelSuffix"
      	ref="form" 
      	:style="formTemplate.config.customStyle" 
      	:size="formTemplate.config.size"
    	>
	    <el-row :gutter="20" class="row"> 
	    		<draggable  
			        tag="div"
			        class="draggable-box"
			        v-bind="{
			          group: 'form-draggable',
			          ghostClass: 'moving',
			          animation: 180,
			          handle: '.drag-move'
			        }"
			        :force-fallback="true"
			        v-model="formTemplate.list" 
			        @add="deepClone"
			        @start="dragStart($event, formTemplate.list)"
			      	>
			        <transition-group tag="div" name="list" class="items-main"> 
			        	<Node  
			        		v-for="record in formTemplate.list"
			            	:key="record.key"
			            	:record="record"
			            	:isDrag="true"
			            	:selectItem="selectItem"
			            	@handleSelectItem="handleSelectItem"
			            	>  
			        	</Node> 
			        </transition-group>
		    	</draggable> 
	     
	    </el-row> 
	</el-form> 
</div> 
</template>
<script> 
import Node from './node'
export default {
	name: 'ng-form-container' ,
	components:{
		Node
	},
	data(){
		return {
			 
		}
	},
	props: {
		formTemplate: {
			type: Object ,
			required: true
		},
		selectItem: {
			type: Object
		}
	}, 
	methods: {
	 	dragStart(evt, list) {  
	      // 拖拽结束,自动选择拖拽的控件项
	      this.$emit("handleSetSelectItem", list[evt.oldIndex]);
	    },
	   	handleSelectItem(record) {
	   		this.$emit('handleSelectItem' , record)
	   	}
	}
}
</script>
<style lang="scss">
.form-panel {
	height: 100%; 

	.no-data-text {
		text-align: center;
	    width: 200px;
	    height: 50px;
	    position: absolute;
	    top: 40%;
	    left: 50%;
	    -webkit-transform: translate(-50%,-50%);
	    font-size: 20px;
	    font-weight: 700;
	}

	.row {
		height: 100%; 
	}

	.ng-form {
		height: 100%; 

		.draggable-box {
			height: 100%;
			overflow: auto;
		}
		.items-main {
			height: 100%; 

		}
	}
}
</style>