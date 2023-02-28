<template>  
	<div class="form-label"  :style="{ textAlign: record.options.textAlign }" > 
      <label
        :class="{ 'is-required': record.options.showRequiredMark || showRequiredMark }"
        v-text="record.label"
      ></label>
  </div>
</template>
<script>
import { dynamicFun } from '../../../../utils/index.js'
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	mounted () { 
	  this.updateSimpleDefaultValue()
	},
	computed: {
		showRequiredMark(){
	      //##############
	      const fstr = this.record.options.showRequiredMarkScript
	      if(!fstr){
	        return false
	      }

	      const mark = dynamicFun(fstr , this.models)  

	      return mark 
	    },
	}
}
</script>