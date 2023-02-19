<template>
<el-tabs type="card" v-model="active" >
	    <el-tab-pane label="控件属性" name="item">
	    	 <ItemProperties :selectItem="selectItem"/>
	    </el-tab-pane> 
	    <el-tab-pane label="表单属性" name="form"> 
	    	 <FormProperties :config="formConfig"/>
	    </el-tab-pane> 

	    <slot name="extend-tab" :data="data"  >
	     	<!-- 扩展插槽,扩展对应要素属性 -->
	    </slot>

</el-tabs>

</template>
<script>
import FormProperties from './form-properties.vue'
import ItemProperties from './item-properties.vue'
export default {
	components: {
		FormProperties , ItemProperties
	},
	props: {
		formConfig: {
			type: Object
		},
		selectItem: {
			type: Object
		}
	},
	data() {
		return {
			active: ''
		}
	}
}
</script>