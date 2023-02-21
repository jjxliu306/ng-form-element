
import { dynamicFun } from '../../utils/index.js'
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
	  renderPreview: {
	    type: Boolean,
	    default: false
	  }
	}, 
	methods: {
		// 设置文本类默认值
		updateSimpleDefaultValue() {
			// 判断当前models中是否有值 有值则不需要赋予默认值
			// 必须要包含key但没值
			if(this.models 
				&& !Object.prototype.hasOwnProperty.call(this.models,this.record.model)) {
				const defaultValue = this.record.options.defaultValue
				if(defaultValue != null && defaultValue != undefined) {
					this.$set(this.models , this.record.model , defaultValue)
				}
			}
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
	}
}