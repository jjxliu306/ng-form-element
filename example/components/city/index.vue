<template>
 
<el-input v-model="models[record.model]" :placeholder="getLabel(record.options.placeholder)"/>
 
</template>
<script>
import { mixin } from '../../../packages/index.js'
export default {
	mixins: [mixin], 
	created() {
		this.updateSimpleDefaultValue()
	}
}
</script>