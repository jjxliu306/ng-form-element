<template>  
<div>
        <el-date-picker  
        v-if="!renderPreview"
        :style="`width:${record.options.width}`"
        v-model="models[record.model]"
        align="right"
        type="datetime"
        :clearable="record.options.clearable" 
        :placeholder="record.options.placeholder"
        :format="record.options.format"
        :value-format="record.options.format" 
        >
      </el-date-picker>
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