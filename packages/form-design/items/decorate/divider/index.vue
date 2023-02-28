<template>  
<div>
 <el-divider
      v-if="record.label !== '' && record.options.orientation "
      :content-position="record.options.orientation" :direction="record.options.direction ? record.options.direction : 'horizontal'">
      {{ record.label }}
    </el-divider>
    <el-divider v-else-if="record.label !== ''" :direction="record.options.direction ? record.options.direction : 'horizontal'" >
      {{record.label}}
    </el-divider>
    <el-divider v-else-if="record.label === ''" :direction="record.options.direction ? record.options.direction : 'horizontal'" />
</div>
</template>
<script>
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] 
}
</script>