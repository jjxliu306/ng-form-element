<template>   
	<el-input 
		v-if="!preview && record.options.editable"  
		:clearable="record.options.clearable"
		:disabled="recordDisabled" 
		:style="`width:${record.width}`" 
		v-model="models[record.model]"  
		> 
	</el-input> 
	<div v-else> 
    	<span class="base-item-span" >{{models[record.model]}} </span> 
	</div> 
</template>
<script>
import mixin from '../../mixin.js'
import { dynamicFun } from '../../../../utils/index.js'
import request from '../../../../utils/request.js'
export default {
	mixins: [mixin],
	created () { 
	  //this.updateSimpleDefaultValue()
	  // 这里需要自己回填默认值了，不能用之前的
	  	if(this.models 
				&& (
					!Object.prototype.hasOwnProperty.call(this.models,this.record.model)
					|| this.models[this.record.model] == undefined) 
				) {
			//if(!this.record.sourceType) return
 
 			// 判断api还是静态数据
 			console.log('sourceType' , this.record.sourceType)
 			if(this.record.sourceType == 0) {
 				this.initStaticData()
 			} else if(this.record.sourceType == 1) {
 				// api
 				this.initApiData()
 			}
			
		}

	},
	methods: {
		initStaticData() {
			let defaultValue = dynamicFun(this.record.script , this.models)
			if(defaultValue != null && defaultValue != undefined) {
				this.$set(this.models , this.record.model , defaultValue)
			} else {
				this.$set(this.models , this.record.model , '')
			}
		},
		initApiData() {
			const dataPath = this.record.dataPath
			const apiPath = this.record.apiPath
	        
	      	// 如果么有datapath apiPath 直接返回
	      	if(!dataPath || !apiPath) {  
	      		return 
	      	}

	      	// 2023-07-08 lyf 获取方法类型
	      	const methodType = this.record.methodType || 'get'
	       

	      	const requsetData = { 
	        	url: apiPath,
	        	method: methodType 
	      	} 
	       
	      	request(requsetData).then((res) => {
	      		 

		        if (res && res.data) { 
		        	const data = res.data 
		          	// 获取  根据dataPath 
		          	const objectPath = require("object-path");
		          	const rdata = objectPath.get(data, dataPath);

		          	const defaultValue = rdata

		          	if(defaultValue != null && defaultValue != undefined) {
						this.$set(this.models , this.record.model , defaultValue)
					} else {
						this.$set(this.models , this.record.model , '')
					}
		 
		        }
	      	}).catch(e=> {
	      		console.error('remote request' , e)
	      	})
		}
	}
}
</script>