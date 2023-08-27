<template>  
<!-- 上传图片 --> 
      <Upload 
      :style="`width:${record.options.width}`"
      :disabled="recordDisabled"
      v-model="models[record.model]"
      :record="record"
      :accept="record.options.accept" 
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
        created() {
                this.updateArrayDefaultValue()
        }
}
</script>