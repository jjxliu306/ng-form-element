<template>
  <el-date-picker
    v-if="!preview"
    :style="`width:${record.width}`"
    v-model="models[record.model]"
    :disabled="recordDisabled"
    :align="record.options.align"
    :editable="record.options.editable"
    :type="record.options.dateType"
    :clearable="record.options.clearable"
    :placeholder="getLabel(record.options.placeholder)"
    :format="record.options.format"
    :value-format="record.options.valueFormat"
    @focus="handleFocus"
    @blur="handleBlur"
  >
  </el-date-picker>
  <span v-else>
    {{ models[record.model] }}
  </span>
</template>
<script>
import mixin from "../../mixin.js"
export default {
  mixins: [mixin],
  created() {
    this.updateSimpleDefaultValue()
  }
}
</script>
