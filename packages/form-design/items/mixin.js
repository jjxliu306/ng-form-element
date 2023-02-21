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
		updateTextDefaultValue() {
			// 判断当前models中是否有值 有值则不需要赋予默认值
			// 必须要包含key但没值
			console.log('111' , this.models 
				&& !Object.prototype.hasOwnProperty.call(this.models,this.record.model))
			console.log('this.record' , this.record)
			if(this.models 
				&& !Object.prototype.hasOwnProperty.call(this.models,this.record.model)) {
				const defaultValue = this.record.options.defaultValue
				console.log('defaultValue' , defaultValue)
				if(defaultValue) {
					this.$set(this.models , this.record.model , defaultValue)
				}
			}
		}
	}
}