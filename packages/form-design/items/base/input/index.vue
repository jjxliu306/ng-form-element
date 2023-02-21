<template>  
	<el-input 
		v-if="!renderPreview"
		:placeholder="record.placeholder"
		:clearable="record.clearable"
		:disabled="disabled"
		:maxlength="record.maxLength > 0 ? record.maxLength : null"
		v-model="models[record.model]" 
		>
		<span v-if="record.prepend"  slot="prepend" v-html="transformAppend(record.prepend)">
		</span>
		<span v-if="record.append"  slot="append" v-html="transformAppend(record.append)">
		</span>
	</el-input> 
	<span v-else>{{models[record.model]}}</span> 
</template>
<script>
import { dynamicFun } from '../../../../utils/index.js'
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	data() {
		return {

		}
	}, 
	created(){
	  
	},
	mounted () { 
	  this.updateTextDefaultValue()
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