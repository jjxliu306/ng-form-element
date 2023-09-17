<template>   
        <el-date-picker 
                :style="`width:${record.width}`"
                v-if="!preview"
                v-model="models[record.model]"
                align="right"
                :disabled="recordDisabled"
                :type="record.options.dateType == 'month' ? 'monthrange' : 'daterange'"
                :clearable="record.options.clearable" 
                :editable="record.options.editable"
                :start-placeholder="record.options.rangeStartPlaceholder"
                :end-placeholder="record.options.rangeEndPlaceholder"
                :format="record.options.format"
                :value-format="record.options.format" 
                @focus="handleFocus"
                @blur="handleBlur"
                >
        </el-date-picker>
        <span v-else>
                <!--
                2023-03-16 lyf 这里实际时两个数据 拆分
                -->
                {{modelText}} 
        </span>
 
</template>
<script> 
import mixin from '../../mixin.js'
export default {
        mixins: [mixin],
        created() {
                this.updateArrayDefaultValue()
        },
        computed: {
                modelText() {
                        const value = this.models[this.record.model]
                        if(value && value instanceof Array) {
                                return value.join(' ~ ')
                        }
                        return ''
                }
        }
}
</script>