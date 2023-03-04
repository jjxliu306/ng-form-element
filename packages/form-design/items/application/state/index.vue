<template>   
<ng-state
      
      v-model="models[record.model]" 
      :preview="preview"
      :models="models"
      :record="record"
      :config="config"
      :disabled="recordDisabled"
    /> 
</template>
<script> 
import mixin from '../../mixin.js'
import NgState from './state.vue'
export default {
        mixins: [mixin],
        components: {
                NgState
        },
        mounted () { 
                //this.updateSimpleDefaultValue()
        }
}
</script>