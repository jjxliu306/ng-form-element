<template>
	<!--
		这里的示例是根据动态表单配置中的url显示图片
	-->
	<div>
		<el-image
			v-if="imgUrl"
	      	:style="style"
	      	:src="imgUrl"
	      	fit="scale-down"></el-image> 
	    <el-empty v-else :description="t('ngform.ngImage.no_data')"></el-empty>  	
	</div>
 	
</template>
<script>
import { LocalMixin } from '../../../packages/index.js'
export default { 
	mixins: [LocalMixin],
	props: { 
	  // 当前组件配置
	  record: {
	    type: Object,
	    required: true
	  },
	  // 当前绑定的model
	  models: {
	    type: Object,
	    default: ()=> {return {}}
	    //required: true
	  },
	  disabled: {
	    type: Boolean,
	    default: false
	  },
	  // 是否预览结果表单
	  preview: {
	    type: Boolean,
	    default: false
	  },
	  // 当前是否拖拽面板
	  isDragPanel: {
	  	type: Boolean,
	    default: false
	  },
	  // 
	  selectItem: {
	  	type: Object
	  } 
	},
	computed: {
		style() {
			return this.record.options && this.record.options.style ? this.record.options.style : null
		},
		imgUrl() {
			return this.record.options && this.record.options.imgurl ? this.record.options.imgurl : null
		}
	}
}
</script>