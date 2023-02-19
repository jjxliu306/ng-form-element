<template>  
				<el-input 
		      :placeholder="record.placeholder"
		      :clearable="record.clearable"
		      :maxlength="record.maxLength > 0 ? record.maxLength : null"
		      v-model="models[record.key]" 
		    >
		      <span v-if="record.prepend"  slot="prepend" v-html="transformAppend(record.prepend)">
		       
		      </span>
		      <span v-if="record.append"  slot="append" v-html="transformAppend(record.append)">
		        
		      </span>
		  </el-input> 
 
</template>
<script>
import { dynamicFun } from '../../../../utils/index.js'
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
	      default: ()=> {return {}}
	      //required: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    // 是否预览结果表单
	    renderPreview: {
	      type: Boolean,
	      default: false
	    }
	  }, 
	computed: {
	    recordOptions () {
	      const options = {   ...this.record.layout  } 
	      return JSON.stringify(options)
	    }, 
	    refresh() {
	      return this.record.refresh
	    }
	},
	watch: { 
	    refresh() {
	       
	    }
	},
	created(){
	    
	},
	mounted () { 
	    
	},
	methods: {
		transformAppend(append){
      if(append && (append.indexOf('return') >= 0 || append.indexOf('$') >= 0 )){
        // 创建函数 返回结果
          const script = append

          // 打开了开关 这里获取函数内容 
          const fvalue = dynamicFun(script,this.models) 

          return fvalue 
      } 
      return append 
    },
	}
}
</script>