
import { dynamicFun } from '../../utils/index.js'

import request from '../../utils/request.js'
import cloneDeep from 'lodash/cloneDeep'

export default {
	props: {
	  // 表单数组 
	  record: {
	    type: Object,
	    required: true
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
	  preview: {
	    type: Boolean,
	    default: false
	  },
	  // 当前是否拖拽面板
	  isDragPanel: {
	  	type: Boolean,
	    default: false
	  },
	  selectItem: {
	  	type: Object
	  } 
	}, 
	data() {
		return {
			// 2021-03-13 针对实时搜索回调的时候将动态的url放置在外部，方便组件联动的时候引用
	      	remoteUrl: '' ,
	      	remoteFilter: {} , // 远程过滤搜索 结构 {key:xx,value:xx}
	      	// select radio checkbox 等这种array的远程数据
	      	checkValues: [],

	      	copyLstenModel: ''  // 监听数据字段的变化
		}
	},
	inject: {
		// 自定义组件
	    customComponents: {
	      from: 'customC',
	      default: ()=>[]
	    },
	    // 表单全局config配置
	    config: {
	        from: 'configC',
	        default: ()=>({})
	    },
	    ngConfig: {
        	from: 'ngConfig',
        	default: ()=> ({})
      	},
	},
	computed: {
		
		// 禁用
		recordDisabled() {
			if(this.isDragPanel) return false

			if(this.disabled || this.preview) return true 
			if(this.record.options && this.record.options.disabled) return true 


			// 判断动态禁用是否打开 并且条件是否满足
			if(this.record.options.dynamicDisabled && this.record.options.dynamicDisabledValue) {
          		 
            	const script = this.record.options.dynamicDisabledValue

            	// 打开了开关 这里获取函数内容
            	const fvalue = dynamicFun(script,this.models ) 
            	return fvalue
            }
          

			return false
		},
		
	},
	
	methods: {
		// 设置数组类默认值
		updateArrayDefaultValue() {
			if(this.models && 
				(!Object.prototype.hasOwnProperty.call(this.models,this.record.model)
					// 当前赋值类型不是数组
					|| ! (this.models[this.record.model] instanceof Array)
				)) {
				const defaultValue = this.record.options.defaultValue
				if(defaultValue != null && defaultValue != undefined && defaultValue instanceof Array ) {
					this.$set(this.models , this.record.model , defaultValue)
				} else {
					this.$set(this.models , this.record.model , [])
				}
			}
		},
		// 设置文本类默认值
		updateSimpleDefaultValue() {
			// 判断当前models中是否有值 有值则不需要赋予默认值
			// 必须要包含key但没值
			if(this.models 
				&& (
					!Object.prototype.hasOwnProperty.call(this.models,this.record.model)
					|| this.models[this.record.model] == undefined) 
				) {
				const defaultValue = this.record.options.defaultValue
				if(defaultValue != null && defaultValue != undefined) {
					this.$set(this.models , this.record.model , defaultValue)
				} else {
					this.$set(this.models , this.record.model , '')
				}
			}
		},
		handleSelectItem(item) { 
      		this.$emit('handleSelectItem' , item)
    	},
		 // 2021-03-13 判断列表中具体某个值是否应该显示
	    dynamicVisible(script , item) {
	       const func = script.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 
	      const Fn = new Function('$','$item', func)
	      return Fn(this.models , item)
	    },
	     // 2021-03-13 针对select radio checkbox判断如果有本地过滤关联，判断该条数据是否该显示 
	    itemVisible(item) {
	    	if(!item) return false
	      // 没有过滤条件 直接全部展示 
	      if(this.isDragPanel || !this.localFilter || this.localFilter.length == 0) return true 

	      //挨个过滤判断 
	            // 本地搜索开始
	      for(let i = 0 ; i < this.localFilter.length ; i++) {
	          const v = this.dynamicVisible(this.localFilter[i] , item )
	         // console.log('sitem' , item , v)
	          if(!v) {
	            return false
	          }
	      }  
	      return true 
	    },
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
	     // 初始化远程数据或者数据字典 针对select radio checkbox
	    initDynamicValue() {
	      if(this.record.options.dynamic == 1 && this.record.options.remoteFunc) {
	        
	        const url =  this.record.options.remoteFunc 
	        this.remoteUrl = url 
	        
	        // 在配置了远程数据的label和value之后在请求接口
	        if(this.record.options.remoteLabel && this.record.options.remoteValue) {
	        	
	        	
	        	this.getRemoteData()
	        }
 

	        this.itemProp.label = this.record.options.remoteLabel
	        this.itemProp.value = this.record.options.remoteValue
	        this.itemProp.children = this.record.options.remoteChildren
	      } else if(this.record.options.dynamic == 2 && this.record.options.dictType ) {

	        // 2022-02-26 lyf  引入数据字典后判断数据字典
	      	
	        if(this.ngConfig && this.ngConfig.dict && this.ngConfig.dict.length > 0) {
	          const fsDict = this.ngConfig.dict.filter(t=>t.type == this.record.options.dictType)
	          this.checkValues = cloneDeep(fsDict)

	          this.itemProp.label = 'label'
	          this.itemProp.value = 'value'
	          this.itemProp.children = 'children'
	        } 
	        

	      }
	    },
	    remoteMethod(query){
	      let queryParam = this.record.options.onlineParams
	      queryParam = queryParam.replace('$' , query)

	      let url =  this.record.options.remoteFunc 

	      if(url.indexOf('?') >= 0){
	        url += '&' + queryParam
	      } else {
	        url += '?' + queryParam
	      }

	      this.remoteUrl = url 

	      this.getRemoteData()
	    },
	    // 获取远程数据
	    getRemoteData() { 

	      const objectPath = require("object-path");
	      
	      const dataPath = this.record.options.dataPath

	      // 如果么有datapath 直接返回
	      if(!dataPath) {
	      	this.checkValues = []
	      	return 
	      }

	      request({
	        url: this.remoteUrl,
	        method: 'get',
	        params: this.remoteFilter
	       /* {
	          ...this.remoteFilter
	        }*/
	      }).then((data) => {
	        if (data) { 
	          // 获取list 根据dataPath 
	          const rdata = objectPath.get(data, dataPath);

	          this.checkValues = rdata
	        }
	      }) 
	    },
	    handleBlur(e){
	    	this.$emit('handleBlur' , e)
	    },
	    handleFocus(e) {
	    	this.$emit('handleFocus' , e)
	    }
	}
}