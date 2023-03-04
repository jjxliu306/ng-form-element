<template>
<el-collapse-item name="grid" title="栅格">
<el-form class="layout-grid-properties"  size="mini" label-width="80px" label-position="top" >
	<el-form-item  label="列配置" v-if="selectItem && selectItem.columns && selectItem.columns.length > 0">
     <ColProperties v-model="selectItem.columns" />
  </el-form-item> 
</el-form>
</el-collapse-item>
</template>
<script> 
import ColProperties from './grid-col-properties.vue'
export default {
  components: {
    ColProperties
  },
	props: {
		selectItem: {
			type: Object
		}
	},
  methods: {
    
  }
}
</script>
<style lang="scss">
.layout-grid-properties {
  padding: 20px;

  
}
</style>