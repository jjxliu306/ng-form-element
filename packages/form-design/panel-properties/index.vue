<template>
	<el-tabs type="card" v-model="active" class="design-properties" >
	    <el-tab-pane label="控件属性" name="item" class="tab-pane">
	    	<ItemProperties :selectItem="selectItem">
	    	 	<template slot="custom-properties"  >
                    <slot name="custom-properties" :selectItem="selectItem"></slot>
                </template>
	    	</ItemProperties>
	    </el-tab-pane> 
	    <el-tab-pane label="表单属性" name="form" class="tab-pane"> 
	    	<FormProperties :config="config">
	    	 	<template slot="form-extend-properties"  >
                    <slot name="form-extend-properties"  ></slot>
                </template> 
	    	</FormProperties>
	    </el-tab-pane> 

	    <slot name="extend-tab" :data="data"  class="tab-pane">
	     	<!-- 扩展插槽,扩展对应要素属性 -->
	    </slot> 
	</el-tabs> 
</template>
<script>
import FormProperties from './form-properties.vue'
import ItemProperties from './item-properties.vue'
export default {
	components: {
		FormProperties , ItemProperties
	},
	props: { 
		selectItem: {
			type: Object
		}
	},
	data() {
		return {
			active: 'item'
		}
	},
	inject: { 
	    // 表单全局config配置
	    config: {
	        from: 'configC',
	        default: ()=>({})
	    }
	},
	computed: {
		selectItemKey() {
			if(this.selectItem){
				return this.selectItem.key
			}
			return null
		}
	},
	watch: {
		selectItemKey(val){
			if(val) {
				this.active = 'item'
			}
		}
	}
}
</script>
<style lang="scss">
.design-properties {
 

	div , label , span  {
		font-size: 13px;
	}

	.tab-pane {
		padding: 0px 15px 0px 0px;
	}

}
</style>