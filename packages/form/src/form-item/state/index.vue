<template>
	<div v-if="!renderPreview || isDragPanel">
		<el-select class="width-select" v-model="dataForm.province" value-key="value" filterable clearable placeholder="请选择省份" @change="changeProvince" @clear="changeProvince()"> 
          <el-option
            v-for="item in provinces"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
        <el-select v-if="record.options.maxLevel >1 && (!record.options.oneByOne || dataForm.province)" class="width-select" v-model="dataForm.city" value-key="value" filterable clearable  placeholder="请选择地市" @change="changeCity" @clear="changeCity()">
          <el-option
            v-for="item in citys"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
        <el-select v-if="record.options.maxLevel > 2 && (!record.options.oneByOne || dataForm.city)" class="width-select" v-model="dataForm.district" value-key="value" filterable clearable placeholder="请选择区县" @change="changeDistrict" @clear="changeDistrict()"> 
          <el-option
            v-for="item in districts"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
	</div>
	<div v-else>
		models :: {{models}}
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
  	mounted(){
  		this.init()
  	},
  	watch:{
  		value(val) { 
      		if(val == this.value) {
      		 	return
      		} else {
      		 	// 找名称
      		 	const province_ = val.substr(0,2) + '0000'
  				const city_  = val.substr(0,4) + '00'
  				const district_  = val 

      		 	let address = '' 
      		 	const ps = this.provinces.filter(t=> t.v == province_)
      		 	if(ps && ps.length > 0) {
      		 		address += ps[0].l
      		 	}
      		 	const cs = this.citys.filter(t=> t.v == city_)
      		 	if(cs && cs.length > 0) {
      		 		address += cs[0].l
      		 	}
      		 	const ds = this.districts.filter(t=> t.v == district_)
      		 	if(ds && ds.length > 0) {
      		 		address += ds[0].l
      		 	}

      		 	this.$set(this.models , this.record.model + '_label' , address)
      		 	
      		}
    	}
  	},
  	methods: {
  		validator() {

  		},
  		init() {
  			this.provinces = this.areas

  			// 判断当前是否有值
  			const value = this.models[this.record.model]
  			if(value) {

  				// 省
  				this.dataForm.province = value.substr(0,2) + '0000'
  				this.dataForm.city  = value.substr(0,4) + '00'
  				this.dataForm.district  = value 

  				this.changeProvince(this.dataForm.province , 1)
  				this.changeCity(this.dataForm.city , 1)
  				this.changeDistrict(this.dataForm.district , 1)

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
				if(this.record.options.maxLevel == 1){
					this.value = v
					this.$emit("input", v);
				}
				else {
					this.$emit("input", '');
					this.value = ''
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
					if(this.record.options.maxLevel == 2){
						this.$emit("input", v);
						this.value = v
					} else {
						this.value = ''
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
  				if(this.record.options.maxLevel == 3) {
  					this.value = v
  					this.$emit("input", v);
  				}
  			} else { 
  				this.value = ''
  				this.$emit("input", '');
  			}
  		}
	},
}
</script>