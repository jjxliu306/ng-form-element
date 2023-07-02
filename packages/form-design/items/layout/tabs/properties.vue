<template>
<el-collapse-item name="tabs" title="选项卡">
<el-form class="layout-tabs-properties"  size="mini" label-width="80px" label-position="top" >
	<el-form-item  label="选项卡" v-if="selectItem && selectItem.columns && selectItem.columns.length > 0">
     <TabProperties v-model="selectItem.columns" />
  </el-form-item> 
</el-form>
</el-collapse-item>
</template>
<script> 
import TabProperties from './tabs-properties.vue'
export default {
  components: {
    TabProperties
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
<style  >
.layout-tabs-properties {
  padding: 20px; 
}
</style>
<!-- <style lang="scss">
.layout-grid-properties {
  padding: 20px;

  
}
</style> -->