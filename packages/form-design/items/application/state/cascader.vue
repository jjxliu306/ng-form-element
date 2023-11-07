<!--
任意一级可选
-->
<template>
 
<el-cascader
	v-model="value"
    :options="options"
   	@change="valueChange"
    :props="{ checkStrictly: checkStrictly , emitPath: emitPath , value:'v' ,label: 'l' , children: 'c' }"
    :clearable="clearable"></el-cascader>
 
</template>
<script>
import AreaData from './area.json'
export default {
	name: 'ng-org-any-select' , 
	data() {
		return { 
		}
	},
	computed: {
		options() {
			let data = AreaData
			if(this.parentCode) {
				data = AreaData.filter(t=> t.v == this.parentCode)
			}
			if(this.level < 3) {
				// 过滤层级
				data = this.filterLevel(data , this.level)
			}

			return data
		},
		level() {
  			return this.record && this.record.options ? this.record.options.maxLevel : 3
  		},
  		separator() {
  			return this.record && this.record.options ? this.record.options.separator : '/'
  		},
  		showAllPath() {
  			return this.record && this.record.options ? this.record.options.showAllPath : true
  		}, 
  		checkStrictly() {
  			return this.record && this.record.options ? this.record.options.anySelect : false
  		},
  		clearable() {
  			return this.record && this.record.options ? this.record.options.clearable : false
  		}
	},
	props: {
    	// 表单数组 
    	value: {
    		type: String
    	},
    	emitPath: {
    		type: Boolean,
    		default: false
    	},
    	// checkStrictly: {
    	// 	type: Boolean,
    	// 	default: false
    	// },
	    // separator: {
	    // 	type: String,
	    // 	default: '/'
	    // },
	    // showAllPath: {
	    // 	type: Boolean,
	    // 	default: true 
	    // },
	    models: {
	    	type: Object
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    } ,
	    parentCode: {
	     	type: String 
	    }, 
	    // 是否预览结果表单
	    preview: {
	      type: Boolean ,
	      default: false
	    },
	    record: {
	    	type: Object,
	    	required: true
	    }
  	},
  	methods: {
  		valueChange(v) {
  			this.$emit('input' , v)
  			this.$emit('change' , v)

  			// 修改label
  			const label_ = this.getLabel()
  			this.$set(this.models , this.record.model + "_label" , label_)
  		},
  		// 过滤层级
  		filterLevel(childData = [] , level) {
  			if(level == 3) return childData

  			for(let i = 0 ; i < childData.length ; i++) {
  				if(level == 1) {
  					delete childData[i].c 
  				} else if(level == 2){
  					// 层级2
  					for(let j = 0 ; j < childData[i].c.length ; j++) {
  						delete childData[i].c[j].c 
  					}
  				}
  			}

  			return childData
  		},
  		getLabel() {
	      	let address = [] 
	      	const val = this.value
	   
	        const fs_ = (areas)=> {
	          areas.forEach(t=> {
	            if(t.v == val) {
	              address.push(t.l)
	            } else if(val && val.indexOf(t.v.replace(/0+$/ , '')) == 0 && t.c && t.c.length > 0) {
	              address.push(t.l)
	              fs_(t.c)
	            }
	          })
	        }

	        fs_(AreaData) 
	       
	        let str_ = ''
	        //console.log('showAllPath' , this.showAllPath , address)
	        if(this.showAllPath) {
	          str_ = address.join(this.separator )
	        } else {
	          str_ = address.length > 0 ? address[address.length - 1] : ''
	        }

	        return  str_
      	},
  	}
}
</script>