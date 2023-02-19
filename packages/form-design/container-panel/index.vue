<template> 
<div class="form-panel" > 
    
    <p class="hint-text" v-show="!data || !data.list || data.list.length === 0">
      从左侧选择组件添加
    </p>
    <el-form 
      :label-width="data.config.labelWidth + 'px'" 
      class="ng-form"
      :label-position="data.config.labelPosition"
      :hide-required-asterisk="data.config.hideRequiredMark" 
      ref="form" 
      :style="data.config.customStyle" 
      :size="data.config.size"
    >
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
        v-model="data.list" 
        @add="deepClone"
        @start="dragStart($event, data.list)"
      >
        <transition-group tag="div" name="list" class="items-main"> 
        	<Node  
        		v-for="record in data.list"
            	:key="record.key"
            	:record="record"
            	:isDrag="true"
            	:selectItem="selectItem"
            	@handleSelectItem="handleSelectItem"
            	> 

        	</Node>
          
        </transition-group>
      </draggable>
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
		data: {
			type: Object ,
			required: true
		},
		selectItem: {
			type: Object
		},
		// 当前正在拖拽的组件类型
		dragType: {
			type: String
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
	overflow: auto;

	.ng-form {
		height: 100%;
		overflow: auto;

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