<template>
<el-collapse-item name="data" :title="t('ngform.config')">
  <el-form v-if="selectItem && selectItem.type == 'ngImage'" label-width="90px">
  	<el-form-item :label="t('ngform.ngImage.style')">
  		<el-input type="textarea" v-model="selectItem.options.style" :rows="4"/> 
  	</el-form-item>
  	<el-form-item :label="t('ngform.ngImage.img_path')">
  		<el-input type="textarea" v-model="selectItem.options.imgurl" :rows="4"/> 
  	</el-form-item>
  </el-form>
</el-collapse-item>
</template>
<script>
import { LocalMixin } from '../../../packages/index.js'
export default {
  mixins: [LocalMixin],
	props: { 
		// 
	  	selectItem: {
	  		type: Object
	  	} 

	}
}
</script>