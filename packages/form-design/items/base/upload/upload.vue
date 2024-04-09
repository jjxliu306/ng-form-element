<template>
<div>  
	<div v-if="preview || disabled  ">
		<!-- 判断图片还是文件列表 -->
		<div v-if="accept && accept.indexOf('image') >= 0 && listType && listType.indexOf('picture-card') >= 0" >
        <ul > 
          <li style="float:left;margin-right:20px;list-style: none;" v-for="(item,index) in fileList"  :key="index">

            <img  @click="reviewDown(item)"   :src="item.url" :class="[direction == null || direction == false?'avatar':'vertical']" style="max-height: 150px;max-width: 150px;cursor: pointer;">
            
          </li>

        </ul>

      </div>

      <ul v-else class="el-upload-list el-upload-list--text">
        <li v-for="(item,index) in fileList" :key="index" :tabindex="index" class="el-upload-list__item pointer"  style="cursor: pointer;"
            @click="fileDown(item)"><!---->
          <a class="el-upload-list__item-name "  style="cursor: pointer;">
            <i class="el-icon-document"></i> {{item.name}}
          </a>

          <label class="el-upload-list__item-status-label">
            <i class="el-icon-upload-success el-icon-circle-check"></i>
          </label>

          <!---->
        </li>
      </ul>
	</div>
	<el-upload
	  v-else 
	  class="ng-form-upload"
	  :class="{'upload': !uploadVisible}"
	  :action="action"
	  :drag="drag"
	  :disabled="disabled"
	  :multiple="false"
	  :limit="limit"
	  :headers="uploadHeader"
	  :accept="accept"
	  :list-type="listType"
	  :with-credentials="withCredentials"
	   :before-upload="beforeUpload"
	  :on-success="handleSuccess"
	  :on-remove="handleRemove"
	  :on-preview="handlePreview"
	  :auto-upload="autoUpload"
	  :file-list="fileList">
	 	<template v-if="uploadVisible"> 
	  	 <el-button slot="trigger" v-if="listType != 'picture-card'"  :disabled="disabled" size="small" type="primary">{{t('ngform.item.upload.select')}}</el-button>
	   	<i v-else class="el-icon-plus"></i>
	  	<div v-if="tip != undefined" slot="tip" class="el-upload__tip">{{tip}}</div>
	  </template> 
	</el-upload>

	    <!--图片查看-->
    <el-dialog :append-to-body="true" :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
</div>
</template>
<script>
import LocalMixin from '../../../../locale/mixin.js'
export default {
	mixins: [LocalMixin],
	name: 'ng-form-upload',
	data() {
		return {  
			dialogVisible: false,
			dialogImageUrl: '',
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
	      default: ''
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    // 是否可以多选
	    multiple: {
	      type: Boolean ,
	      default: false
	    },
	    image: {
	    	type: Boolean,
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
	    // 最多上传几个
	    limit: {
	    	type: Number
	    },
	    // 文件大小
	    limitSize: {
	    	type: Number,
	    	default: 10
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
	    },
	    preview: {
	    	type: Boolean,
	    	default: false
	    },
	    imgDownBut: {
	    	type: Boolean,
	    	default: true
	    },
	     // 2023-8-27 lyf 文件上传后自动隐藏上传按钮 默认关闭
	    uploadAutoHidden: {
	    	type: Boolean ,
	    	default: false
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
		// 上传按钮显示条件 
		// 1、只上传一个时有文件则不显示 多个时导致门限也不现实
		// 2、预览时不显示
		uploadVisible() {
		
			if(this.preview || this.disabled) return false 	
			if(!this.multiple && this.value && this.value.length > 0) return false 
			if(this.multiple && this.value && this.value.length >= this.limit) return false

			if(!this.uploadAutoHidden) return true

			return true 
		},
		// 需要携带的头数据
		uploadHeader() {
			let hs = {} 
			if(this.record && this.record.options && this.record.options.headers) {
				
				this.record.options.headers.forEach(t=> {
					hs[t.label] = t.value
				})
 
			} 

			// 2023-03-04 lyf强制性走一次httpConfig
			const nghttpConfig = window.nghttpConfig
			if(nghttpConfig) {
				const config = {headers: {}}

				nghttpConfig(config)

				//hs = {...hs , ...config.headers}
				
				hs = Object.assign(hs, config.headers);
				 
			}
			return hs
		},
		// 文件上传成功后文件的url路径
		uploadResponseFileUrl() {
			if(this.record && this.record.options && this.record.options.responseFileUrl) {
				 
				return this.record.options.responseFileUrl 
			} 

			return null
		},
		uploadResponseFileId() {
			if(this.record && this.record.options && this.record.options.responseFileId) {
				 
				return this.record.options.responseFileId 
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
		        !this.isAssetTypeAnImage(fileSuffix)
		    ) {
		        this.$message.error(this.t('ngform.item.upload.error_img_filetype') + "[png,jpg,jpeg,bmp]");
		        return false;
		    }

	      	if (this.limitSize && ltSize > this.limitSize) {
	        	this.$message.error(this.t('ngform.item.upload.error_max_size') + (this.limitSize) + "MB!" )

	        	return false
	         
	      	}
	      return true;
		},
		isAssetTypeAnImage(ext) {
      		return ["png", "jpg", "jpeg", "bmp"].indexOf(ext.toLowerCase()) !== -1;
    	},
		handleSuccess(response , file , fileList) {
		 	console.log('file' , file)
			// 根据返回结果的url来获取实际文件的url
			const responseFileUrl = this.uploadResponseFileUrl 
 

			const objectPath = require("object-path")
			const fileUrl = objectPath.get(response, responseFileUrl)
	 		//console.log('fileUrl' , fileUrl)
			if(fileUrl) {
				// 重新组合
				const f_ = {name: file.name , size: file.size , url: fileUrl}
 
				
				const uploadData = {
					name: file.name , size: file.size , url: fileUrl
				}
			  
			  // 文件id 
				if(this.uploadResponseFileId) {
					const fileId = objectPath.get(response, this.uploadResponseFileId)
					 
					uploadData['id'] = fileId
				}

				const addData = this.value.concat([uploadData])

			  
			  this.$emit("input", addData);
			  //this.$emit('change' , addData)
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
			this.fileDown(file) 

		},
		 // 浏览下载文件
	  reviewDown (file) {
	      this.handlePreview(file)
	  },
	  // 图片下载
	  fileDown (file) {
	    if(file.url) {
	    	if(this.image) {
	    		this.dialogVisible = true 
					this.dialogImageUrl = file.url 
	    	} else {
	    		window.open(file.url)
	    	}
				
			} else {
				this.$message.error(this.t('ngform.item.upload.error_not_found_file'))
			}
	  }
	}
}
</script>
<style>
.ng-form-upload.upload .el-upload {
	display: none;
}
</style>