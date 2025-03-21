<template>  
<!-- 上传图片 --> 
      <Upload 
      :style="`width:${record.options.width}`"
      :disabled="recordDisabled"
      v-model="models[record.model]"
      :record="record"
      accept="image/*" 
      :image="true"
      :preview="preview"
      :list-type="record.options.listType"
      :multiple="record.options.multiple" 
      :action="record.options.action"
      :limit="record.options.limit" 
      :limit-size="record.options.limitSize"
      :upload-auto-hidden="record.options.uploadHidden"
    />  
</template>
<script> 
import Upload from '../upload.vue'

import mixin from '../../../mixin.js'
export default {
        mixins: [mixin],
        components: {
                Upload
        },
        computed: {
                uploadConfig() {
                        return this.ngConfig.uploadConfig
                }
        },
        watch: {
                uploadConfig(val) {
                         this.initConfig()
                }
        },
        created() {

                //uploadUrl: '/file/upload' ,
                //filePath: 'data.url',
                //fileIdPath: ''
                this.initConfig()
                

                this.updateArrayDefaultValue()
        },
        methods: {
                initConfig() {
                        const uploadConfig = this.uploadConfig
 
                        const action = this.record.options.action
                        if(!action && uploadConfig && uploadConfig.uploadUrl) {
                                this.$set(this.record.options , 'action' , uploadConfig.uploadUrl)
                        }


                        const filePath = this.record.options.responseFileUrl 
                        const fileIdPath = this.record.options.responseFileId

                        if(!filePath && uploadConfig && uploadConfig.filePath) {
                                this.$set(this.record.options , 'responseFileUrl' , uploadConfig.filePath)
                        }
                        if(!fileIdPath && uploadConfig && uploadConfig.fileIdPath) {
                                this.$set(this.record.options , 'responseFileId' , uploadConfig.fileIdPath)
                        }

                }
        }
}
</script>