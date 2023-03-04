<template>  
<div>
        <el-date-picker 
                :style="`width:${record.options.width}`"
                v-if="!preview"
                v-model="models[record.model]"
                align="right"
                :type="record.options.dateType == 'month' ? 'monthrange' : 'daterange'"
                :clearable="record.options.clearable" 
                :start-placeholder="record.options.rangeStartPlaceholder"
                :end-placeholder="record.options.rangeEndPlaceholder"
                :format="record.options.format"
                :value-format="record.options.format" >
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
        created() {
                this.updateArrayDefaultValue()
        },
        mounted () {  
        }
}
</script>