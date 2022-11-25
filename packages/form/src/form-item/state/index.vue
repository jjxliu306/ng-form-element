<template>
	<div v-if="!renderPreview || isDragPanel">
			省:<el-select class="width-select" v-model="dataForm.province" value-key="value" filterable clearable placeholder="请选择省份" @change="changeProvince" @clear="changeProvince()" :disabled="disabled"> 
          <el-option
            v-for="item in provinces"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
      <template  v-if="maxLevel >1 && (!oneByOne || dataForm.province)">
      	市:<el-select class="width-select" v-model="dataForm.city" value-key="value" filterable clearable  placeholder="请选择地市" @change="changeCity" @clear="changeCity()" :disabled="disabled">
          <el-option
            v-for="item in citys"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
      </template>
    	<template v-if="maxLevel > 2 && (!oneByOne || dataForm.city)" >
    		县:<el-select class="width-select" v-model="dataForm.district" value-key="value" filterable clearable placeholder="请选择区县" @change="changeDistrict" @clear="changeDistrict()" :disabled="disabled"> 
          <el-option
            v-for="item in districts"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
    	</template>
        
	</div>
	<div v-else> 
		<span>{{models[record.model + '_label']}}</span> 
	</div>
</template>
<script>
import AreaData from './area.json'
export default {
	name: 'ng-state' ,
	data() {
		return {
			areas: AreaData ,
			provinces: [],
			citys: [],
			districts: [],
			dataForm: {
				province: '' , 
				city: '' , 
				district: '' 
			} 
		}
	},
	props: {
    	// 表单数组 
    	value: {
    		type: String
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
  	computed: {
  		maxLevel() {
  			return this.record && this.record.options ? this.record.options.maxLevel : 3
  		},
  		oneByOne(){
  			return this.record && this.record.options ? this.record.options.oneByOne : true
  		}
  	},
  	mounted(){
  		this.init()
  	},
  	watch:{
  		value(val) {  
      		 	// 找名称
      	this.updateStateLabel(val)	 	
      		 
    	}
  	},
  	methods: {
  		validator() {

  		},
      // 更新区划label
      updateStateLabel(val) {
       

        let address = [] 

        const fs_ = (areas)=> {
          areas.forEach(t=> {
            if(t.v == val) {
              address.push(t.l)
            } else if(val.indexOf(t.v.replace(/0+$/ , '')) == 0 && t.c && t.c.length > 0) {
              address.push(t.l)
              fs_(t.c)
            }
          })
        }

        fs_(AreaData) 
        let separator = this.record ? this.record.options.separator : null
        if(separator == null || separator == undefined) {
          separator = ''
        }

        let str_ = ''
        if(!this.record || this.record.options.showAllPath) {
          str_ = address.join(separator)
        } else {
          str_ = address.length > 0 ? address[address.length - 1] : ''
        }
   			
   			if(this.record && this.record.model) {
   				this.$set(this.models , this.record.model + '_label' , str_)
   			}
        
            
      },
  		init() {
  			this.provinces = this.areas

  			// 判断当前是否有值
  			//const value = this.models[this.record.model]
  			if(this.value) {

  				// 省
  				this.dataForm.province = this.value.substr(0,2) + '0000'
  				this.dataForm.city  = this.value.substr(0,4) + '00'
  				this.dataForm.district  = this.value 

  				this.changeProvince(this.dataForm.province , 1)
  				this.changeCity(this.dataForm.city , 1)
  				this.changeDistrict(this.dataForm.district , 1)

          if(this.record && !this.models[this.record.model + '_label']) {
            this.$nextTick(()=> { 
              this.updateStateLabel(this.value)
            })
            
          }

  			}
  		},
  		getOrgs (pid) {
	    	return new Promise((resolve, reject)=>{
	    		const ds = this.getOrgChild(pid)
	    		resolve(ds)
	    	})  
	    },
		  getOrgChild(pid ) {
		  	let ds = []
		  	if(!pid) {
		    	// 第一层
		   		return  this.areas.map(t=>{return {v: t.v , l: t.t}})
		  	}

		  	// 迭代
		  	let datas = []

		  	const fn = (data)=>{

		    	for(let i = 0 ; i < data.length ; i++) {
			      	if(data[i].v == pid) {
			        	datas = data[i].c
			        	break
			      	} else if(data[i].c && data[i].c.length > 0){

			        	fn(data[i].c)
			      	}
		    	}
		  	}

		  	fn(this.areas)

		  	return datas
		  },
  		changeProvince(v , type) {
  			// 过滤name
  			if(!type) {
  				this.dataForm.city = ''
  				this.dataForm.district = ''
  			}
  		
  			this.districts = []
  			if(v) {
  				this.getOrgs(v).then((data)=>{
  					this.citys = data
  				}).catch(()=>{
  					this.citys = []
  				})
  			} else {
  				this.citys = []
  			}
  			// 判断层级 如果是最小层级 则input change
  			if(!type) {
  				
  				if(this.maxLevel == 1){
  					this.$emit("input", v);
  				}
  				else {
  					this.$emit("input", '');
  				}
  			}
			
  		},
  		changeCity(v,type) {
  			// 过滤name 
  			if(!type) {
  				this.dataForm.district = ''
  			}
  			
  			if(v) {
  				this.getOrgs(v).then((data)=>{
  					this.districts = data
  				}).catch(()=>{
  					this.districts = []
  				})
				// 判断层级 如果是最小层级 则input change
				if(!type) {
				 
					if(this.maxLevel == 2){
						this.$emit("input", v);
					} else {
						this.$emit("input", '');
					}

				}
				
  			} else {
  				this.districts = [] 
  				if(!type) {
  					this.$emit("input", '');
  				}
  				
  			}
				 
  		},
  		changeDistrict(v , type){
  			if(type) return
  			if(v) {
  			 
  				if(this.maxLevel == 3) {
  					this.$emit("input", v);
  				}
  			} else {
  				this.$emit("input", '');
  			}
  		}
	},
}
</script>