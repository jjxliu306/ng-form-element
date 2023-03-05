
<template>   
      <el-slider 
        v-model="models[record.model]"
        :style="`width:${record.options.width}`" 
        :min="record.options.min"
        :max="record.options.max"
        :disabled="recordDisabled"
        :show-input="record.options.showInput"
        :step="record.options.step"
        :marks="sliderMarks" 
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
        },
        computed: {
          sliderMarks() {
            if(!this.record.options.marks || this.record.options.marks.length == 0) {
              return null 
            }

            let p = {}  

            this.record.options.marks.forEach(t=> {
              p[t.value] = t.label 
            })
            return p ;
   
          }
        }
}
</script>