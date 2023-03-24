<template>  
	<div class="ng-form-label"  :style="{ textAlign: record.options.textAlign }" >  
      <label
        :class="{ 'is-required': showRequiredMark }"
        v-text="record.label"
      ></label>
  </div>
</template>
<script>
import { dynamicFun } from '../../../../utils/index.js'
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	computed: {
		showRequiredMark(){
	      //##############
	      if(!this.record.options.showRequiredMark) return false
	      

	      const fstr = this.record.options.showRequiredMarkScript
	      if(!fstr || !fstr.trim()){
	        return true
	      }

	      const mark = dynamicFun(fstr , this.models)  
	      
	      return mark 
	    },
	}
}
</script>
<style lang="scss">
.ng-form-label {
	.is-required:before {
	  content: "*";
	  color: #F56C6C;
	  margin-right: 4px;
	}
} 
</style>