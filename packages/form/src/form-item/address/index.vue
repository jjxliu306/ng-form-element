<!--

 多级联动select 
-->

<template>
 
	<div v-if="!renderPreview || isDragPanel"> 
		 
			<State v-model="dataForm.state" ref="state" :isDragPanel="isDragPanel" :disabled="disabled" /> 
			<el-input v-model="dataForm.address" placeholder="请输入详细地址" /> 
	</div>
	<div v-else> 
	 
		<span>{{models[record.model + '_label']}}</span> 
		 
	</div> 
</template>
<script>
import State from '../state/index'
export default {
	name: 'ng-address' ,
	components: {
		State
	} ,
	data() {
		return {
			dataForm: {
				state: undefined,
				address: undefined
			}
		}
	},
	props: {
		// 当前值 object  
    	value: {
    		type: Object
    	},
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
	    },
	     // 是否拖拽面板引用
	    isDragPanel: {
	      type: Boolean ,
	      default: false
	    } 
	},
	mounted(){ 
  		this.init()
  	},
  	watch: { 
  		value: {
	      handler(val){
	      	const s1 = this.dataForm.state + this.dataForm.address
	      	const s2 = this.value ? (this.value.state + this.value.address) : ''
	      	if(s1 != s2) {
	      		this.init()
	     		
	      	}
	      	
	      },
	      deep:true
	    },
	    dataForm: {
	      handler(val){
	      	const s1 = this.dataForm.state + this.dataForm.address
	      	const s2 = this.value ? (this.value.state + this.value.address) : ''
	      	if(s1 != s2) {
	      		this.$emit("input", {...this.dataForm});
	      		this.updateLabel(val)
	      	} 
	      },
	      deep:true
	    },
  	}, 
	methods: {
		init() { 
			if(this.value  ) { 
			 	this.dataForm.state = this.value.state
			 	this.dataForm.address = this.value.address
				 
			}
		},
		updateLabel(val) {
			if(val) {
				this.$nextTick(()=> {
					const stateLabel = this.$refs.state.getLabel() 
					const str_ = stateLabel + this.dataForm.address
			 
   					this.$set(this.models , this.record.model + '_label' , str_)
				})
				
			}
			
   			 
		}
	}
}
</script>