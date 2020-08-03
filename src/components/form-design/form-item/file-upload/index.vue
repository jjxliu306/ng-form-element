<template> 
  <div class="upload-div">  
    <el-upload
      ref="upload"
      :list-type="listType"
      :with-credentials="true"
      :action="doUpload"
      :file-list="fileList"
      :on-remove="handleRemove"
      :on-preview="handlePreview"
      :before-remove="beforeRemove"
      :on-success="handleSuccess"
      :on-error="handerError"
      :before-upload="beforeAvatarUpload"
      :accept="accept"
      :multiple="multiple && (multiple == true || multiple == 'true')"
      :limit="limit"
      :on-exceed="handleExceed"
      v-if="readOnly == null || readOnly == false"
    > 
      <!-- <div v-if="limit == null || limit <= 0 || files.length < limit">  -->
      <i v-if="accept &&  accept.indexOf('image') >= 0 &&  listType && listType.indexOf('picture') >= 0 " class="el-icon-plus">
      </i>
      <div v-else  >
        <el-button   icon="el-icon-plus">请上传文件</el-button>
      </div>
      <!--  </div>   -->
    </el-upload>
    <div slot="tip" v-if="readOnly == null || readOnly == false" class="el-upload__tip">
        {{ accept && accept.indexOf('image') >= 0 && listType && listType.indexOf('picture') >= 0  ?
        '* 图片最大不能超过'+(this.fileSize ==undefined ? 10 :this.fileSize)+'Mb,图片格式支持(bmp,jpg,jpeg,png)' :
        '* 文件最大不能超过'+(this.fileSize ==undefined ? 10 :this.fileSize)+'Mb,文件格式支持(bmp,jpg,jpeg,png,xls,xlsx,doc,docx,pdf,mp4,wmv,zip,txt,csv)'}} 
    </div> 
    <div v-else>
       
      <div v-if="accept && accept.indexOf('image') >= 0 && listType && listType.indexOf('picture-card') >= 0" > 
        <ul style="list-style: none;">
          <li style="float:left;margin-right:20px;" v-for="(item,index) in fileList"  :key="index">
          <img  @click="reviewDown(item.id)"   :src="item.url" :class="[direction == null || direction == false?'avatar':'vertical']" :style="imgDownBut?'float: left;':''">
          <el-button  v-if="imgDownBut" @click="imgDown(item.id)" type="text" size="small" style="padding: 90px 0 16px 30px ;float: left;" > 
            <i class="el-icon-download"></i>
            <!-- <img title="下载" src="~@/assets/img/icon_xiazai.svg"> -->
          </el-button>
          <div v-if="imgDownBut" style="clear:both"></div>
          </li> 
        </ul> 
      </div> 
      <ul v-else class="el-upload-list el-upload-list--text">
        <li v-for="(item,index) in fileList" :key="item.id" :tabindex="index" class="el-upload-list__item pointer"
            @click="reviewDown(item.id , item.fileSuffix)"><!---->
          <a class="el-upload-list__item-name">
            <i class="el-icon-document"></i> {{item.oldFileName}}
          </a> 
          <label class="el-upload-list__item-status-label">
            <i class="el-icon-upload-success el-icon-circle-check"></i>
          </label> 
          <!---->
        </li>
      </ul> 
    </div> 
    <!--附件上传-->
    <el-dialog :append-to-body="true" :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  import request from '../../utils/request.js'
  import {http_get_file_list_url,http_upload_file_url,http_down_file_url} from '../../utils'
  export default {
    name: "fileUpload",
    data () {
      return {
        fileList: [],
        files: [],
        doUpload: this.action,
        dialogVisible: false,
        dialogImageUrl: ''
      }
    },
    watch: {
      formFiles: {// 深度监听，可监听到对象、数组的变化
        handler (val, oldVal) { 
          /* if (this.files != null && this.files.length > 0) {
            return
          } */

          let fs = val

          if (JSON.stringify(fs) == JSON.stringify(this.files)) return

          if (fs != null && this.files.length != fs.length) {
            this.files = []
            this.fileList = []
            this.initFiles()
          } else {
            this.files = []
            this.fileList = []
          }
        },
        deep: true
      },
      updateNow (val) {
        if (val) {
          this.files = []
          this.fileList = []
          this.initFiles()
        }
      }
    },
    computed: {
      formFiles () {
  　　　　return this.fileForm[this.fileKey]
      }
    },
    // notPhysicalDels 不能够物理删除的文件ID列表
    props: ['fileKey', 'fileForm', 'readOnly', 'accept', 'limit', 'listType', 'direction', 'notPhysicalDels', 'imgDownBut', 'updateNow', 'multiple', 'fileSize' , 'action'],
     
    mounted(){
      // console.log('mounted fileupload ', this.fileForm , 'key' , this.fileKey)
      this.initFiles()
    },
    methods: {
      // 钩子函数上传附件成功后
      handleSuccess (res, file) {
        // console.log('113 ' , res , file)
        // console.log('fileList' ,file , this.fileList)
        if (res.code == 401) {
          this.$message.error('当前账号已在其他地方登录,请重新登录!')
          this.$router.replace({ name: 'login' })
          return
        }
        if (!res || res.code != 0) {
          // 上传失败时候  去除进度条
          let list = this.$refs['upload'].uploadFiles
          this.$refs['upload'].uploadFiles = list.filter(item => {
            return item.uid != file.uid
          })
          this.$message.error(res.msg ? res.msg : '上传失败')
          return
        } 
        file.id = res.data.id
        file.url = res.data.url
        this.files.push(res.data.id)
        if (this.fileForm != null && (this.fileForm[this.fileKey] == null || this.fileForm[this.fileKey].length == 0)) {
          const key = this.fileKey
          // this.fileForm = {}
          this.fileForm[key] = this.files
        } else {
          this.fileForm[this.fileKey] = this.files
        }
        this.$message('上传成功')
        // console.log('this.fileForm',this.fileForm)
        this.$emit('uploadChange', {id: res.data.id, url: res.data.url, type: 'add', fileForm: this.fileForm})
        // URL.createObjectURL(file.raw);
        // console.log("--------"+ URL.createObjectURL(file.raw));
      },
      handerError (err, file, fileList) {
        console.log('error', err, file, fileList)
        // download
      },
      beforeAvatarUpload (file) {
       // console.log('file', file)
        const fileName = file.name
      // const isJPG = file.type === 'image/jpeg';
        const isLt10M = file.size / 1024 / 1024 < (this.fileSize == undefined ? 10 : this.fileSize)

        var index1 = fileName.lastIndexOf('.')

        var index2 = fileName.length
        var postf = fileName.substring(index1 + 1, index2)// 后缀名

     // console.log('ff' , postf)
      /*  if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        } */

     // console.log('file' , file)
        const fileType = file.type
        if (this.accept && this.accept.indexOf('image') >= 0 && !this.isAssetTypeAnImage(postf)) {
          this.$message.error('当前图片格式只支持:[png,jpg,jpeg,bmp]')
          return false
        }

        if (!isLt10M) {
          this.$message.error('上传文件大小不能超过' + (this.fileSize == undefined ? 10 : this.fileSize) + 'MB!')
        }
        return isLt10M
      },
      isAssetTypeAnImage (ext) {
        return [
          'png', 'jpg', 'jpeg', 'bmp']
    .indexOf(ext.toLowerCase()) !== -1
  },
      // 文件溢出
      handleExceed (files, fileList) {
        this.$message.error('最多只能上传 ' + this.limit + ' 个文件')
      },
      handleRemove (file, fileList) {
        // console.log('fileList' , fileList)
        // console.log('file' , file)

        let id = file.id
        if (id == null && file.response) {
          id = file.response.id
        }
        let url = file.url
        if (url == null && file.response) {
          url = file.response.fileUrl
        }
        let itemId = file.itemId
        if (itemId == null && file.response) {
          itemId = file.response.itemId
        }

        // 判断是否再非物理删除的文件列表内
        if (this.notPhysicalDels && this.notPhysicalDels.indexOf(id) >= 0) {
          for (var i in this.files) {
            if (this.files[i] == id) {
              this.files.splice(i, 1)
              break
            }
          }
          this.fileForm[this.fileKey] = this.files
          this.$emit('uploadChange', {id: id, url: url, type: 'delete', itemId: itemId, fileForm: this.fileForm})
              // this.$emit('uploadChanges' , this.files)
               // 清除 删除的数据
          let list = this.$refs['upload'].uploadFiles
          this.$refs['upload'].uploadFiles = list.filter(item => {
            return item.response.id != id
          })
          this.$message('删除成功')
          return
        }

        if (id != null && id != '') {
          // 后台删除
        
              // console.log('this files 152' , this.files)
              for (var j in this.files) {
                if (this.files[j] == id) {
                  this.files.splice(j, 1)
                  break
                }
              }
              // console.log('this files 159' ,  {id:res.id , url:res.url,type:"delete",itemId:data.file.itemId})
              this.fileForm[this.fileKey] = this.files

             
              // this.$emit('uploadChanges' , this.files)
            
        }

        // console.log(file, fileList);
      },
      initFiles () { 
        if (!this.fileForm || !this.fileForm[this.fileKey]) { return }

        let upFiles = this.fileForm[this.fileKey]
      
        // 判断类型
        if (typeof upFiles === 'string') {
          upFiles = upFiles.split(',')
        }

        if (upFiles.length == 0) {
          return
        } 
        // 拼接ids
        const ids = upFiles.join(',')
        const this_ = this 
        request({
          url:  http_get_file_list_url + `?ids=` + ids ,
          method: 'get',
          params: {}
        }).then((data) => { 
          if (data && data.code === 0) {
            let efiles = data.data
            let fs = []
            if (efiles != null && efiles.length > 0) {
              efiles.forEach(t => {
                t.name = t.oldFileName
                t.url = t.fileUrl
                fs.push(t.id)
              })
            }

            this_.fileList = efiles
            this_.files = fs
            //  console.log('end files ' , this.fileList)
          }
        })
      },
      // 浏览下载文件
      reviewDown (id , fileSuffix) {
        this.handlePreview({id: id , fileSuffix:fileSuffix})
      },
      handlePreview (file) {
      
        if (file && file.id) {
          // 判断是不是图片 如果是图片进行预览
          if ((this.accept && this.accept.indexOf('image') >= 0) || (file.fileSuffix && this.isAssetTypeAnImage(file.fileSuffix) ))  {
            this.dialogImageUrl = http_down_file_url + '?uuid=' + file.id 
            this.dialogVisible = true
          } else { 
            window.location.href = http_down_file_url +'?uuid=' + file.id 
          }
        }
      },
      // 图片下载
      imgDown (id) { 
        window.location.href = http_down_file_url + '?uuid=' + id 
      },

      beforeRemove (file, fileList) {
       // console.log('file remove', file)
        return !file.id || this.$confirm(`确定移除 ${file.oldFileName}？`)
      }
     

    }
  }
</script>
<style lang="scss">

.upload-div{
  float: left;

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 128px;
    height: 128px;
    display: block;
    object-fit: cover;
  }
  .vertical {
    width: 128px;
    height: 128px;
    margin-left: 5px;
    object-fit: cover;
    margin-top: 20px;
  }
}

  
</style>



