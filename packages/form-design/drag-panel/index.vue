<template>
<el-card  class="drag-panel">
	<el-collapse v-model="actives" accordion >
		<el-collapse-item title="基础组件" name="1" >
		</el-collapse-item>
		<el-collapse-item title="布局组件" name="2" >
		</el-collapse-item>
	</el-collapse>
</el-card>
</template>
<script>
export default {
	data() {
		return {
			actives: '',
			basicItem: []
		}
	}
}
</script>
<style lang="scss">
.drag-panel {
	height: 100%;
    overflow-y: hidden;
}

</style>