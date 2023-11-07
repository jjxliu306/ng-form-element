<template>  
	 <el-switch
      v-model="models[record.model]" 
      :active-text="getLabel(record.options.activeText)"
      :inactive-text="getLabel(record.options.inactiveText)" 
      :disabled="recordDisabled"
      @focus="handleFocus"
      @blur="handleBlur"
    />
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