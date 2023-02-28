<template>  
	<div
    :id="record.model" :name="record.model"
    v-if="dynamicVisibleItem"
    v-html="record.options.defaultValue"
  ></div> 
</template>
<script> 
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] 
}
</script>