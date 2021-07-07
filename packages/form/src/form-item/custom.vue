<template>
	<!-- 自定义组件 -->
	<div>
		<component 
	      :record="record"
	      :style="`width:${record.options.width}`"
	      @change="handleChange"
	      :disabled="disabled" 
	      :preview="renderPreview"
	      :models="models" 
	      :is="customComponent"> 
	    </component>  
	</div>
	
</template>
<script>
export default {
	data() {
		return {

		}
	},
	props: {
	    // 表单数组 
	    record: {
	      type: Object,
	      required: true
	    },
	    // form-item 宽度配置
	    formConfig: {
	      type: Object,
	      required: false
	    },
	    // form-item 宽度配置
	    models: {
	      type: Object,
	      required: true
	    }, 
	    disabled: {
	      type: Boolean,
	      default: false
	    } ,
	      // 是否预览结果表单
	    renderPreview: {
	      type: Boolean ,
	      default: false
	    } 
	},
	computed: {
	    customComponent() {
	      // 计算需要显示的组件
	      let customComponentList = {};
	      if (window.customComponents) {
	        // 将数组映射成json
	        window.customComponents.forEach(item => {
	          customComponentList[item.type] = item.component;
	        });
	      }
	      return customComponentList[this.record.type];
	    }
	},
	methods: {
		handleChange(value, key) {
	      this.$emit("change", value, key);
	    }
	}
}

</script>