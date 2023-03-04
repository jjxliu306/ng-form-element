<template>  
<div> 
        <el-time-select
              v-if="!preview"
              arrow-control
              :style="`width:${record.options.width}`"
              :disabled="recordDisabled"
              v-model="models[record.model]" 
              :clearable="record.options.clearable" 
              :placeholder="record.options.placeholder" 
              :format="record.options.format"
              :picker-options="{selectableRange: '00:00:00 - 23:59:59'}"
              :value-format="record.options.format" 
              @focus="handleFocus"
                @blur="handleBlur"
              >
        </el-time-select> 
        <span v-else>
                {{models[record.model]}}
        </span>
</div> 
</template>
<script> 
import mixin from '../../mixin.js'
export default {
        mixins: [mixin],
        mounted () { 
                this.updateSimpleDefaultValue()
        }
}
</script>