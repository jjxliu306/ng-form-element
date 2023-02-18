<template>
<el-tabs type="card" v-model="active" >
	    <el-tab-pane label="控件属性" name="item">
	    	 
	    </el-tab-pane> 
	    <el-tab-pane label="表单属性" name="form"> 
	    	 
	    </el-tab-pane> 

	    <slot name="extend-tab" :data="data"  >
	     	<!-- 扩展插槽,扩展对应要素属性 -->
	    </slot>

</el-tabs>

</template>
<script>
export default {
	data() {
		return {
			active: ''
		}
	}
}
</script>