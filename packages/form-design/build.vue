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
      	:id="randomId"
      	 
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
		      <!-- 递归传递插槽！！！ -->
          <template v-for="slot in Object.keys($slots)"  :slot="slot"  > 
            <slot :name="slot" :record="record"/>
          </template>  
		    </Node>  
	    </el-row> 
	</el-form> 
</div> 
</template>
<script> 
import Node from './panel-container/node.vue'
 
import cloneDeep from 'lodash/cloneDeep'
import { use } from '../locale/index'
import { getUUID } from '../utils/index' 
export default {
	name: 'ng-form-build' ,
	components:{
		Node
	},
	data(){
		return {
			randomId: new Date().getTime() + '111',
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
			if(this.formTemplate && this.formTemplate.config ) return this.formTemplate.config 
			return {}
		}, 
	   // 配置中的http配置
    httpConfig() {
       //2023-10-11 lyf 判断是否注入了全局config 
      // 优先判断内部
      if (this.config && this.config.httpConfig) {
        return this.config.httpConfig;
      } else if(this.$ngofrm_httpConfig) {
        return this.$ngofrm_httpConfig
      }
      return null;
    },
	  // 自定义组件
	  components() {
	  	if(this.$ngofrm_components && this.$ngofrm_components.length > 0) {
	  		return this.$ngofrm_components 
	  	} else if(this.customComponents && this.customComponents.length > 0) {
	  		return this.customComponents
	  	}

	  	return undefined
	  }
	},
	watch: { 
	  httpConfig: {
	    handler(newVal) { 
	      window.nghttpConfig = newVal;
	    },
	    deep: true,
	    immediate: false,
	  }
	},
	provide: function () {
		 const this_ = this
    	return {
     		customC: this.components ,
     		configC: ()=>this.templateConfig,
     		//dictsC: this.dicts,
     		httpConfigC: this.httpConfig,
     		ngConfig: this.config
    	}
  },
  created(){
  	if(this.httpConfig) {
     	window.nghttpConfig = this.httpConfig;
    }
  },
  mounted() {
  	// console.log('0 $slots' , this.$slots)
  	this.$ngform_bus.$on('reset', () => { 
	    this.$nextTick(()=> {
  			this.$refs.form.resetFields()
  		})
	  });
  },
	methods: {
	  	reset() {
	  		this.$refs.form && this.$refs.form.resetFields()
	  	},
	  	useLocale(val){
	      use(val)
	      this.key = getUUID()

	      this.$ngform_bus.$emit('i18nRefresh');
	    },
	  	validate() {
	  		return new Promise((resolve, reject) => { 
	  			if(this.$refs.form) {
	  				this.$refs.form.validate((valid,values)=>{ 
			            resolve(valid,values)
			        })
	  			} else {
	  				reject()
	  			}  
				})
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
	        	// 2024-05-18 lyf 目前采用隐藏的手段，修改之前判断在不在的方法为判断是否隐藏
	          const key_div = formdesign.querySelector('#' + key) 
	          // 判断是否隐藏
	          //console.log('key_div' , key_div)
	          if(!key_div || (key_div.style && key_div.style.display == 'none' )) {
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
<style>
.form-build-panel {
  height: 100%;
  text-align: left;
}

.form-build-panel .row {
  height: 100%;
  overflow: auto;

}

.ng-form-build .row {
	display: flex;
  flex-wrap: wrap;
}

.form-build-panel .ng-form-build {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>
<!-- 
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
</style> -->