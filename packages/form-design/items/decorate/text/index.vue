<template>
  <div class="ng-form-label" :style="{ textAlign: record.options.textAlign }">
    <label :class="{ 'is-required': showRequiredMark }" :style="textStyle" v-text="record.label"></label>
  </div>
</template>
<script>
import { dynamicFun } from "../../../../utils/index.js"
import mixin from "../../mixin.js"
export default {
  mixins: [mixin],
  computed: {
    textStyle() {
      const style_ = {}

      if (this.record.options.bold) {
        style_.fontWeight = "bold"
      }
      if (this.record.options.fontSize && this.record.options.fontSize > 0) {
        style_.fontSize = this.record.options.fontSize + "px"
      }

      return style_
    },
    showRequiredMark() {
      //##############
      if (!this.record.options.showRequiredMark) return false

      const fstr = this.record.options.showRequiredMarkScript
      if (!fstr || !fstr.trim()) {
        return true
      }

      const mark = dynamicFun(fstr, this.models, undefined, undefined, undefined, this)

      return mark
    }
  }
}
</script>
<style>
.ng-form-label .is-required:before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
<!-- 
<style lang="scss">
.ng-form-label {
	.is-required:before {
	  content: "*";
	  color: #F56C6C;
	  margin-right: 4px;
	}
} 
</style> -->
