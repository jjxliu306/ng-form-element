<template>  

<div v-if="!preview">

        <ng-state 
                v-if="selectType == 'select'"
                v-model="models[record.model]" 
                :preview="preview"
                :models="models"
                :record="record"
                :config="config"
                :isDragPanel="isDragPanel"
                :disabled="recordDisabled"
        /> 
        <NgStateCascader v-else
                v-model="models[record.model]" 
                :preview="preview"
                :models="models"
                :record="record"
                :config="config"
                :isDragPanel="isDragPanel"
                :disabled="recordDisabled"
        />

</div> 
<div v-else>
 <ng-state 
       
      v-model="models[record.model]" 
      :preview="true"
      :models="models"
      :record="record"
      :config="config"  
    /> 
</div>

</template>
<script> 
import mixin from '../../mixin.js'
import NgState from './state.vue'
import NgStateCascader from './cascader.vue'
export default {
        mixins: [mixin],
        components: {
                NgState , NgStateCascader
        },
        computed: {
                selectType() {
                        return this.record.options.selectType || 'select'
                }
        },
        mounted () { 
                //this.updateSimpleDefaultValue()
        }
}
</script>