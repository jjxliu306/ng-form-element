<template>
<div>  
	<el-button v-if="clear" type="text" size="medium" icon="el-icon-delete" @click="handleClear">清空</el-button>
    <el-button v-if="preview" type="text" size="medium" icon="el-icon-view" @click="handlePreview">预览</el-button>
  <!--   <el-button v-if="reder"  type="text" size="medium" icon="el-icon-view" @click="handleRender">渲染</el-button> -->
    <el-button v-if="imp" type="text" size="medium" icon="el-icon-download" @click="handleImport">导入</el-button>
    <el-button v-if="exp" type="text" size="medium" icon="el-icon-upload2" @click="handleExport">导出</el-button>


    <Preview v-if="previewVisible" ref="preview" />

</div>
</template>
<script>
import Preview from './preview.vue'
export default{
	components: {
		Preview
	},
	data() {
		return {
			previewVisible: false
		}
	},
	props: {
		formTemplate: {
			type: Object
		},
		// 按钮显示隐藏 
	    clear: {
	      type: Boolean ,
	      default: true
	    },
	    preview: {
	      type: Boolean ,
	      default: true
	    },
	    reder: {
	      type: Boolean ,
	      default: true
	    },
	    imp: {
	      type: Boolean ,
	      default: true
	    },
	    exp: {
	      type: Boolean ,
	      default: true
	    }
	},
	methods: {
		handleClear() {

		},
		handlePreview() {
			this.previewVisible = true 
			this.$nextTick(()=> {
				this.$refs.preview.init(this.formTemplate)
			})
		},
		handleImport() {

		},
		handleExport() {

		}
	}
}
</script>