<template>   
	<div
    :id="record.model" 
    :name="record.model" 
    v-html="record.options.defaultValue"
    /> 
</template>
<script> 
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] 
}
</script>