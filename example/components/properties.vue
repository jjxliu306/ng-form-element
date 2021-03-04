<template>
	<!-- 自定义组件的属性配置 --> 
	 
	      <el-form v-show="selectItem.key" size="mini" :disabled="disabled">

	         <!-- TCustom   start-->
	        <template v-if="selectItem.type == 'customT'"> 
	          <!-- 开关的label -->
	          <el-form-item   label="图片样式">
	            <el-input type="textarea" placeholder="请输入" v-model="selectItem.options.style" /> 
	          </el-form-item>
	         
	        </template> 
	        <!-- TCustom  end -->

	      </el-form> 
	    
</template>
<script>
export default {
	data() {
		return {

		}
	},
	props: {
		selectItem: {
	      type: Object,
	      required: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	},
	methods: {

	}
}
</script>