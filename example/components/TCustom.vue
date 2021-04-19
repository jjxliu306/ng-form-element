<template>
	<div>  
		<el-input
		  v-if="!preview"
		  type="textarea"
		  autosize
		  placeholder="请输入图片地址"
		  v-model.trim="models[record.model]" :disabled="disabled">
		</el-input> 
		 <el-image
	      :style="record.options.style ? record.options.style : null"
	      :src="models[record.model]"
	      fit="scale-down"></el-image> 
	</div> 
</template>
<script>
  export default { 
    props: {    
	    record: {//组件数据
	      type: Object,
	      required: true
	    }, 
	    models: {// 表单数组 
	      type: Object,
	      required: true
	    }, 
	    disabled: { // 是否禁用
	      type: Boolean,
	      default: false
	    } , 
	    preview: {// 是否当前是预览
	      type: Boolean ,
	      default: false
	    } 
    },
    methods: { 
    }
  }
</script>