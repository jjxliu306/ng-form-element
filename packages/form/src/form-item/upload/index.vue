<template>
<div>
	<el-upload
	  class="upload-demo"
	  :action="action"
	  :drag="drag"
	  :disabled="disabled"
	  :multiple="multiple"
	  :limit="limit"
	  :accept="accept"
	  :list-type="listType"
	  :with-credentials="withCredentials"
	  :on-change="handleChange"
	  :auto-upload="autoUpload"
	  :file-list="value">
	   <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
	  <div v-if="tip != undefined" slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
</div>
</template>
<script>
export default {
	name: 'form-upload',
	data() {
		return {
			fileList: []
		}
	},
	props: {
	    value: {
	      type: Array,
	      default: ()=> [],
	      required: true
	    },
	    action: {
	      type: String,
	      required: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    // key必须为数字 2021-02-17 lyf
	    multiple: {
	      type: Boolean ,
	      default: false
	    },
	    // 文件接收类型
	    accept: {
	    	type: String
	    },
	    listType: {
	    	type: String,
	    	default: 'text'
	    },
	    limit: {
	    	type: Number
	    },
	    // 是否支持发送cookie信息
	    withCredentials: {
	    	type: Boolean ,
	    	default: false
	    },
	    // 是否自动上传
	    autoUpload: {
	    	type: Boolean,
	    	default: false
	    },
	    // 提示说明文字
	    tip: {
	    	type: String
	    },
	    // 是否启用拖拽上传
	    drag: {
	    	type: Boolean,
	    	default: false
	    }
	},
	watch: {

	},
	mounted(){
		if(this.value) {
			this.fileList = []
		}
	},
	methods: {
		handleChange(file , fileList) {
			//this.$emit("input", addData);
		}
	}
}
</script>