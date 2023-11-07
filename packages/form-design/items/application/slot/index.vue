<template>
<div> 
<slot :name="record.model"  :record="record" :models="models"  ></slot>
</div> 
</template>
<script>
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] 
}
</script>