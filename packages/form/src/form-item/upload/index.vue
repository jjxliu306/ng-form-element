<template>
<div> 
	<el-upload
	  class="upload-demo"
	  :action="action"
	  :drag="drag"
	  :disabled="disabled"
	  :multiple="multiple"
	  :limit="limit"
	  :headers="uploadHeader"
	  :accept="accept"
	  :list-type="listType"
	  :with-credentials="withCredentials"
	  :on-success="handleSuccess"
	  :on-remove="handleRemove"
	  :on-preview="handlePreview"
	  :auto-upload="autoUpload"
	  :file-list="fileList">
	   <el-button slot="trigger" v-if="listType != 'picture-card'" size="small" type="primary">选取文件</el-button>
	   <i v-else class="el-icon-plus"></i>
	  <div v-if="tip != undefined" slot="tip" class="el-upload__tip">请选择图片，且不超过500kb</div>
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
	    	default: true
	    },
	    // 提示说明文字
	    tip: {
	    	type: String
	    },
	    // 是否启用拖拽上传
	    drag: {
	    	type: Boolean,
	    	default: false
	    },
	    record: {
	    	type: Object
	    }
	},
	watch: {
		value(val) {
			if(val && val.length > 0) {
				const valueNames = val.map(t=>t.name).join(',');
				const fileListNames = this.fileList.map(t=>t.name).join(',')
				if(fileListNames != valueNames) {
					this.fileList = val 
				} 
			}
		}
	},
	computed: {
		// 需要携带的头数据
		uploadHeader() {
			if(this.record && this.record.options && this.record.options.headers) {
				const hs = {} 
				this.record.options.headers.forEach(t=> {
					hs[t.label] = t.value
				})

				return hs 
			} 
			return {}
		},
		// 文件上传成功后文件的url路径
		uploadResponseFileUrl() {
			if(this.record && this.record.options && this.record.options.responseFileUrl) {
				 
				return this.record.options.responseFileUrl 
			} 

			return null
		}
	},
	mounted() {
		if(this.value == null || this.value == undefined) {
			//this.$emit("input", []);
			this.fileList = []
		} else {
			this.fileList = this.value
		}
	}, 
	methods: {
		beforeUpload(file) {
			const fileName = file.name;
	       
	      	const ltSize = file.size / 1024 / 1024  

	      	const index1 = fileName.lastIndexOf(".");

	      	const index2 = fileName.length;
	      	const fileSuffix = fileName.substring(index1 + 1, index2); // 后缀名
 
	      	// console.log('file' , file)
	      	const fileType = file.type;
	      	if (
		        this.accept &&
		        this.accept.indexOf("image") >= 0 &&
		        !this.isAssetTypeAnImage(postf)
		    ) {
		        this.$message.error("当前图片格式只支持:[png,jpg,jpeg,bmp]");
		        return false;
		    }

	      	if (this.record.options.limitSize && ltSize > this.record.options.limitSize) {
	        	this.$message.error( "上传文件大小不能超过" + (this.record.options.limitSize) + "MB!" )

	        	return false
	         
	      	}
	      return true;
		},
		isAssetTypeAnImage(ext) {
      		return ["png", "jpg", "jpeg", "bmp"].indexOf(ext.toLowerCase()) !== -1;
    	},
		handleSuccess(response , file , fileList) {
			//console.log('add response' , response)
			//console.log('add file' , file)
			//console.log('add fileList' , fileList)

			// 根据返回结果的url来获取实际文件的url
			const responseFileUrl = this.uploadResponseFileUrl 
 

			const objectPath = require("object-path")
			const fileUrl = objectPath.get(response, responseFileUrl)

			if(fileUrl) {
				// 重新组合
				const f_ = {name: file.name , size: file.size , url: fileUrl}

				console.log('this.value' , JSON.stringify(this.value))
				const addData = [
			        ...this.value,
			        {
			         name: file.name , size: file.size , url: fileUrl
			        }
			    ];

			     console.log('addData' , addData)
			    this.$emit("input", addData);
			}

			
		 
		},
		handleRemove(file , fileList) {
			//console.log('remove file' , file)
			//console.log('remove fileList' , fileList)

			// 根据文件名删除文件
			const name = file.name  

			 // 删除
		    this.$emit(
		        "input",
		        this.value.filter(val => val.name != name)
		    ) 
		},
		// 点击下载或者预览
		handlePreview(file) {
			//console.log('handlePreview file' , file)

			// 从url中下载
			if(file.url) {
				window.location.href = file.url
			} else {
				this.$message.error('找不到文件下载路径')
			}

		}
	}
}
</script>