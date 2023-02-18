<template>
	 
	<div>
		design-panel
	</div>
 
</template>
<script> 
export default {
	components:{
		 
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
		selectForm: {
			type: Object
		},
		// 当前正在拖拽的组件类型
		dragType: {
			type: String
		}
	}, 
	methods: {
	 
	   
	}
}
</script>