<template>   
        <el-date-picker  
        v-if="!preview"
        :style="`width:${record.width}`"
        v-model="models[record.model]"
        align="right"
        type="datetime"
        :disabled="recordDisabled"
        :editable="record.options.editable"
        :clearable="record.options.clearable" 
        :placeholder="getLabel(record.options.placeholder)"
        :format="record.options.format"
        :value-format="record.options.format" 
        @focus="handleFocus"
        @blur="handleBlur"
        >
      </el-date-picker>
        <span v-else>
                {{models[record.model]}}
        </span>
 
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