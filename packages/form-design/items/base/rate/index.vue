<template>  
<div>  
        <el-rate
              :style="`width:${record.width}`"
              v-model="models[record.model]" 
              :max="record.options.max"  
              :allowHalf="record.options.allowHalf" 
              :disabled="recordDisabled"
                @focus="handleFocus"
                @blur="handleBlur"
        />
</div> 
</template>
<script> 
import mixin from '../../mixin.js'
export default {
        mixins: [mixin],
        created () { 
                this.updateSimpleDefaultValue()
        }
}
</script>