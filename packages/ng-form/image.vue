<template>
<div> 
	<ul class="el-upload-list el-upload-list--picture" v-if="value">
        <li class="el-upload-list__item is-success" style="padding: 0px;">
            <el-image
                  style="height: 100px;cursor: pointer;"
                  @click="openImage()"
                  :src="value"
                  fit="scale-down">
            </el-image>
            <template v-if="!preview">
            	<label class="el-upload-list__item-status-label">
	                <i class="el-icon-upload-success el-icon-check" />
	            </label>
	            <i class="el-icon-close" @click="clearValue( )" />
            </template>
          
        </li>
    </ul>
    <el-upload
    	v-else
	  class="ng-form-upload" 
	  :on-preview="handlePreview"
	  :on-remove="handleRemove"
	  :before-remove="beforeRemove" 
	  :before-upload="beforeUpload"
	  :limit="1" 
	  :file-list="fileList">
	  <el-button size="mini" icon="el-icon-plus"  >点击上传</el-button>
	  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过20kb</div>
	</el-upload>

     <!--图片显示-->
    <el-dialog class="img-preview-dialog" :append-to-body="true" :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
</div>
</template>
<script>
 
export default { 
	data() {
		return {
			dialogVisible: false,
      		dialogImageUrl: '',
      		images: [],
      		fileList: []
		}
	},
	props: {
		value: {
			type: String
		},
		preview: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		openImage (url) {
      		this.dialogImageUrl = this.value
      		this.dialogVisible = true;
    	},
    	 
		clearValue() {
			this.$emit('input' , null)
		},
		handlePreview() {

		},
		handleRemove() {

		},
		beforeRemove() {

		},
		beforeUpload(file) {
			const fileName = file.name;
	      	if(file.size > 100 * 1024) {
	      		this.$message.error("图片不能大于100Kb");
	        	return false;
	      	}
	       

	      var index1 = fileName.lastIndexOf(".");

	      var index2 = fileName.length;
	      var postf = fileName.substring(index1 + 1, index2); // 后缀名


	      const fileType = file.type;
	      if (
	        this.accept &&
	        this.accept.indexOf("image") >= 0 &&
	        !this.isAssetTypeAnImage(postf)
	      ) {
	        this.$message.error("当前图片格式只支持:[png,jpg,jpeg,bmp]");
	        return false;
	      }

	      // 解析转base64
	      this.getBase64(file).then((data)=> {
	      	this.$emit('input' , data)
	      	this.$emit('change' , data)
	      })

	      return false 

	     
		},

	    // 转base64码
	    getBase64(file) {
	      return new Promise((resolve, reject) => {
	        const reader = new FileReader()
	        let fileResult = ''
	        reader.readAsDataURL(file)
	        // 开始转
	        reader.onload = () => {
	          fileResult = reader.result
	        }
	        // 转 失败
	        reader.onerror = error => {
	          reject(error)
	        }
	        // 转 结束
	        reader.onloadend = () => {
	          resolve(fileResult)
	        }
	      })
	    }, 
	}
}
</script>
<style  scoped>
.el-upload-list .el-upload-list__item{
	width: 100px;
	border: none;
	margin-top: 0px; 
}


 
</style>
<style >
.img-preview-dialog .el-dialog__header{
	 
	padding: 20px 20px 10px;
	 
}
.ng-form-upload .el-upload__tip {
	font-size: 12px;

}
</style>