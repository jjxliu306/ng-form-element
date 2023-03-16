<template>  
<div 
  class="form-label" 
  
  :style="{ textAlign: record.options.textAlign }" > 
       <el-alert
        :title="record.options.title"
        :type="record.options.type"
        :description="record.options.description"
        :effect="record.options.effect"
        :closable="record.options.closable"
        :center="record.options.center"
         :close-text="record.options.closeText"
        :show-icon="record.options.showIcon">
      </el-alert>
  </div>
</template>
<script>
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] 
}
</script>