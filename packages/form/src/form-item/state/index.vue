<template>
	<div>
		<el-select class="width-select" v-model="dataForm.province" value-key="value" filterable clearable placeholder="请选择省份" @change="changeProvince" @clear="changeProvince()"> 
          <el-option
            v-for="item in provinces"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
        <el-select v-if="dataForm.province" class="width-select" v-model="dataForm.city" value-key="value" filterable clearable  placeholder="请选择地市" @change="changeCity" @clear="changeCity()">
          <el-option
            v-for="item in citys"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
        <el-select v-if="dataForm.city" class="width-select" v-model="dataForm.district" value-key="value" filterable clearable placeholder="请选择区县" @change="changeDistrict" @clear="changeDistrict()"> 
          <el-option
            v-for="item in districts"
            :key="item.v"
            :label="item.l"
            :value="item.v">
          </el-option>
        </el-select>
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
				provinceName: '' ,
				city: '' ,
				cityName: '' ,
				district: '',
				districtName: ''
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
  	methods: {
  		init() {
  			this.provinces = this.areas
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
  		changeProvince(v) {
  			// 过滤name
  			this.dataForm.city = ''
  			this.dataForm.district = ''
  			if(v) {
  				this.getOrgs(v).then((data)=>{
					this.citys = data
				}).catch(()=>{
					this.citys = []
				})
  			} else {
  				this.citys = []
  			}
			
			this.$emit("input", v);
  		},
  		changeCity(v) {
  			// 过滤name 
  			this.dataForm.district = ''
  			if(v) {
  				this.getOrgs(v).then((data)=>{
					this.districts = data
				}).catch(()=>{
					this.districts = []
				})
				this.$emit("input", v);
  			} else {
  				this.districts = []
  				this.$emit("input", this.dataf.province);
  			}
  		},
  		changeDistrict(v){
  			if(v) {
  				this.$emit("input", v);
  			} else {
  				this.$emit("input", this.dataForm.city);
  			}
  		}
	},
}
</script>