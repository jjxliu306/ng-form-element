<template>
<el-collapse-item name="data" title="配置">
  <el-form v-if="selectItem && selectItem.type == 'ngImage'" label-width="90px">
  	<el-form-item label="样式">
  		<el-input type="textarea" v-model="selectItem.options.style" :rows="4"/> 
  	</el-form-item>
  	<el-form-item label="图片地址">
  		<el-input type="textarea" v-model="selectItem.options.imgurl" :rows="4"/> 
  	</el-form-item>
  </el-form>
</el-collapse-item>
</template>
<script>
export default {
	props: { 
		// 
	  	selectItem: {
	  		type: Object
	  	} 

	}
}
</script>