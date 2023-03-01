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
			        @add="dragEnd($event, formTemplate.list)" 
			      	>
			        <transition-group tag="div" name="list" class="items-main"> 
			        	<Node  
			        		class="drag-move"
			        		v-for="record in formTemplate.list"
			            	:key="record.key"
			            	:record="record"
			            	:isDrag="true"
			            	:config="formTemplate.config"
			            	:selectItem="selectItem"
			            	@handleSelectItem="handleSelectItem"
			            	@handleCopy="handleCopy(record)"
			            	@handleDetele="handleDetele(record)"
			            	>  
			        	</Node> 
			        </transition-group>
		    	</draggable> 
	     
	    </el-row> 
	</el-form> 
</div> 
</template>
<script> 
import cloneDeep from 'lodash/cloneDeep'
 
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
	 	dragEnd(evt, list) {   
	    // 拖拽结束,自动选择拖拽的控件项
	    this.handleSelectItem(list[evt.newIndex])
	  },
	  handleSelectItem(record) {
	    this.$emit('handleSelectItem' , record)
	  },
	  handleCopy(item){ 
	  	const nitem = cloneDeep(item)
	  	const key = item.type + "_" + new Date().getTime() 
	  	nitem.key = key
	  	nitem.model = key

	  	// 找到index 插入
	  	const oindex = this.formTemplate.list.findIndex(t=>t.key == item.key)
	   
	  	if(oindex >= 0) {
	  		// insert 
	  		this.formTemplate.list.splice(oindex + 1 , 0, nitem)

	  	}

	  },
	  handleDetele(item) {
	  	const oindex = this.formTemplate.list.findIndex(t=>t.key == item.key)
	  	if(oindex >= 0) {
	  		this.formTemplate.list.splice(oindex , 1);
	  	}
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
			padding: 0px 10px;
		}
	}

 
}
</style>