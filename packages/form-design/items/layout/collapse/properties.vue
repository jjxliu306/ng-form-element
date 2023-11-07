<template>
<el-collapse-item name="collapses" :title="t('ngform.item.collapse.name')">
<el-form class="layout-collapse-properties"  size="mini" label-width="80px" label-position="top" >
	<el-form-item  :label="t('ngform.item.collapse.name')" v-if="selectItem && selectItem.columns && selectItem.columns.length > 0">
     <NgFormV v-model="selectItem.columns" prepend="面板"/>
  </el-form-item> 
</el-form>
</el-collapse-item>
</template>
<script> 
import NgFormV from '../../../../ng-form/label-list.vue'
import LocalMixin from '../../../../locale/mixin.js'
export default {
  mixins: [LocalMixin],
  components: {
    NgFormV
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
.layout-collapse-properties {
  padding: 20px; 
}
</style>
<!-- <style lang="scss">
.layout-grid-properties {
  padding: 20px;

  
}
</style> -->