<template> 
<div class="form-build-panel" >  
	 
    <el-form 
    	v-if="formTemplate && formTemplate.config && formTemplate.list"
      	:label-width="formTemplate.config.labelWidth + 'px'" 
      	class="ng-form-build"
      	:label-position="formTemplate.config.labelPosition"
      	:hide-required-asterisk="formTemplate.config.hideRequiredMark" 
      	:label-suffix="formTemplate.config.labelSuffix"
      	ref="form" 
      	:style="formTemplate.config.customStyle" 
      	:size="formTemplate.config.size"
      	:model="models" 
      	:disabled="disabled"
    >
	    <el-row :gutter="20" class="row"> 
	    	<Node  
		        v-for="record in formTemplate.list"
		        :key="record.key" 
		        :record="record"
		        :models="models"
		        :disabled="disabled"
		        :preview="preview || renderPreview"
		        :isDrag="false"  
		        >  
		    </Node>  
	    </el-row> 
	</el-form> 
</div> 
</template>
<script> 
import Node from './panel-container/node.vue'
 
import cloneDeep from 'lodash/cloneDeep'

export default {
	name: 'ng-form-build' ,
	components:{
		Node
	},
	data(){
		return {
			 
		}
	},
	props: {
		formTemplate: {
	      	type: Object,
	      	required: true
	    },
	     // 外部属性配置
	    config: {
	      type: Object
	    },
	    models: {
	      	type: Object,
	      	required: false,
	      	default: ()=> {return {}}
	    },
	    // 是否查看模式
	    preview: {
	    	type: Boolean,
	    	default: false
	    },
	    disabled: {
	    	type: Boolean,
	    	default: false
	    },
	    // 废弃 只是为了兼容之前的版本
	    renderPreview: {
	    	type: Boolean,
	    	default: false
	    },
	    customComponents: {
      		type: Array,
      		default: ()=>[]
    	}, 
	}, 
	computed: {
		templateConfig() {
			if(this.formTemplate) return this.formTemplate.config 
			return {}
		},
		// 配置的数据字典
	    dicts() {
	      if(this.config && this.config.dict && this.config.dict.length > 0) {
	        return this.config.dict
	      }
	      return null
	    },
	    // 配置中的http配置
	    httpConfig() {
	      if(this.config && this.config.httpConfig ) {
	        return this.config.httpConfig
	      }
	      return null
	      
	    }
	},
	watch: {
	    httpConfig(val) {
	      if(val)
	        window.nghttpConfig = val
	    }
	},
	provide: function () {
    	return {
     		customC: this.customComponents ,
     		configC: this.templateConfig,
     		dictsC: this.dicts,
     		httpConfigC: this.httpConfig
    	}
  	},
	methods: {
	  	reset() {
	  		this.$refs.form && this.$refs.form.resetFields()
	  	},
	  	validate(v) {
	  		return this.$refs.form && this.$refs.form.validate(v)
	  	},
	  	getData(async = true) {
	  		const data = cloneDeep(this.models)
	  		
	  		this.clearHiddenValue(data)
	  		if(!async) {
	  			return new Promise((resolve, reject) => { 

			    	this.$refs.form && this.$refs.form.validate((valid,values)=>{ 
			            if (!valid) { 
			              reject('验证失败');
			            } 
			            
			            resolve(data); 
			    	})
			 
				});
	  			
	  		}
	  		 
	  		return data 
	  		 
	  	},
	  	// 2021-03-12 清理没有显示的组件的数据
	    clearHiddenValue(data) {
	      // 根据组件ID 是否隐藏为准
	      // 根据 formTemplate.config.outputHidden 来判断是否要输出隐藏 
	      if(!this.formTemplate.config || !this.formTemplate.config.outputHidden) {
	       
	        const formdesign = document.getElementById(this.randomId)
	       
	        // 循环当前数据 非P 开头的统一不深入第二层
	        for(let key in data) {
	          if(key.indexOf('_label') > 0) continue 
	          //  判断key的id是否还在
	          const key_div = formdesign.querySelector('#' + key) 
	          if(!key_div) {
	            // 删除
	            delete data[key]
	            delete data[key + '_label']
	          }  
	        } 
	      }

	      
	    },  
	}
}
</script>
<style lang="scss">
.form-build-panel {
	height: 100%; 

	.row {
		height: 100%;
		overflow: auto;
	}

	.ng-form-build {
		height: 100%;
		overflow-y: auto;
    	overflow-x: hidden;
  
	}

	
}
</style>