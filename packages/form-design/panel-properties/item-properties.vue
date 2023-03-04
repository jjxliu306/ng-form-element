<template>
<div class="item-properties"> 
	<!-- 判断是否有自定义的属性配置组件 -->
	<p class="no-data-text" v-show="!selectItemKey">
      请先从面板中选择组件
    </p>
	<!-- 先是属性中配置的columns -->
	<ng-form 
		v-if="formColumns && formColumns.column && formColumns.column.length > 0" 
		:config="formColumns.config"   
		:record="selectItem" 
		:model="selectItem"
		:columns="formColumns.column"  
	/> 
	
	<!-- 
		分割线
	循环group 处理在group中但要显示在外部的表单
	 -->
	<template v-for="(form,formIndex) in groupColumns ">
		<ng-form 
			v-if="form.alone != undefined && form.alone == false && form.column && form.column.length > 0"
			:key="formIndex" 
			:config="form.config"   
			:record="selectItem" 
			:model="selectItem[form.prop]"
			:columns="form.column"  
		/> 
	 
	</template>
	<!-- 
	循环group 处理在group中但显示在折叠面板中的表单
	 -->
	
	<el-collapse v-model="activeNames" v-if="groupColumnsCollapse && groupColumnsCollapse.length > 0">
		<template v-for="(form,formIndex) in groupColumnsCollapse ">
			<el-collapse-item  
				:key="'form' + formIndex" 
				:title="form.label" 
				:name="formIndex + ''"
				>
				<ng-form   
					:config="form.config"   
					:record="selectItem" 
					:model="selectItem[form.prop]"
					:columns="form.column"  
				/> 
		  	</el-collapse-item> 
		</template> 
	</el-collapse> 

	<!-- 最后判断有没有自定义属性配置 -->
	<component 
		ref="itemProperties" 
		v-if="propertiesComponent"
		:selectItem="selectItem"   
		:is="propertiesComponent">  
	</component>  


	<!-- 最后是全局的 事件、数据监听、动态显示 -->
	<el-form 
		v-if="selectItem && selectItem.options"
		label-width="formColumns.config.labelWidth" 
		class="common-form"> 

		<!-- 事件 -->
		<el-divider >事件</el-divider>
        <el-form-item  label="获取焦点">
           <el-input type="textarea" v-model="selectItem.options.focusEvent"  placeholder="获取焦点后事件,eg: $.address = $.city + $.location" /> 
        </el-form-item>
        <el-form-item  label="失去焦点">
           <el-input type="textarea" v-model="selectItem.options.blurEvent"  placeholder="失去焦点后事件,eg: $.address = $.city + $.location" /> 
        </el-form-item>

        <!-- 数据监听 -->
        <!-- <el-divider >监听</el-divider>
        <el-form-item  label="数据监听">
        	<el-switch 
        		v-model="selectItem.options.listenModel" 
        		active-text="打开"
              	inactive-text="关闭"> 
            </el-switch> 
        </el-form-item>
        <template v-if="selectItem.options.listenModel">
        	<el-form-item label="监听组件model">
	            <el-input v-model.trim="selectItem.options.listenModelData"  placeholder="多个使用,分割" /> 
	        </el-form-item>
	        <el-form-item label="触发表达式">
	            <el-input size="mini"   type="textarea" v-model="selectItem.options.listenModelScript" placeholder="表达式,eg: $.address = $.city + $.location" />
	        </el-form-item> 
        </template> -->

        <!-- 动态显示 -->
       	<el-divider >动态显示</el-divider> 
       	<el-form-item label="动态显示">
            <!-- 每个元素都有隐藏条件 根据渲染数据的值来改变 --> 
            <el-switch
              v-model="selectItem.options.dynamicVisible"
              active-text="打开"
              inactive-text="关闭">
            </el-switch>
        </el-form-item>
        <el-form-item label="显示条件" v-if="selectItem.options.dynamicVisible">
            <!-- 每个元素都有隐藏条件 根据渲染数据的值来改变 -->
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入显示条件,$标识当前整个表单的绑定数据"
              v-model="selectItem.options.dynamicVisibleValue">
            </el-input>
        </el-form-item>

        <!-- 动态禁用 -->
        <el-divider >动态禁用</el-divider> 
        <el-form-item label="动态禁用">
            <!-- 每个元素都有隐藏条件 根据渲染数据的值来改变 --> 
            <el-switch
              v-model="selectItem.options.dynamicDisabled"
              active-text="打开"
              inactive-text="关闭">
            </el-switch>
        </el-form-item>
        <el-form-item label="禁用条件" v-if="selectItem.options.dynamicDisabled">
            <!-- 每个元素都有隐藏条件 根据渲染数据的值来改变 -->
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入禁用条件,$标识当前整个表单的绑定数据,data标识当前事项实体数据"
              v-model="selectItem.options.dynamicDisabledValue">
            </el-input>
        </el-form-item>


	</el-form>
	
</div>
</template>
<script>
import NgForm from '../../ng-form/index.vue'

// 获取个性化属性配置 
import itemIndex from "../items/index.js";

import { dynamicFun } from '../../utils/index.js' 
import cloneDeep from 'lodash/cloneDeep'

export default {
	components: {
		NgForm
	},
	data() {
		return {
			activeNames: ['0'],
			groupColumns: [],
		    // 独立与group分组，直接配置的属性
		    formColumns: {}, 
		}
	},
	props: {
		selectItem: {
			type: Object
		}
	},
	computed: {
		selectItemKey() {
			if(this.selectItem){
				return this.selectItem.key 
			}
			return null
		},
		propertiesComponent() {
  			if(this.selectItem && this.selectItem.type) {
  				const selectItemType = this.selectItem.type   
	          	// 将数组映射成json
		        if(itemIndex && itemIndex.length > 0) {
		        	for(let i = 0 ; i < itemIndex.length ; i++) {
		        		const itemList = itemIndex[i]

		        		if(itemList.list && itemList.list.length > 0) {
			        		const fs = itemList.list.filter(t=>t.type == selectItemType)
				        	if(fs && fs.length > 0) {
				        		return fs[0].properties
				        	} 
			        	} 

		        	}
		        }
  			} 
	         
	        return null
	    }, 
	    // 分组字段 需要在collapse上显示的列表
	    groupColumnsCollapse() {
	    	return this.groupColumns.filter(form=> {
	    		return (form.alone == undefined || form.alone == true ) && form.column && form.column.length > 0
	    	})
	    }
	},
	watch: {
		selectItemKey() {
			this.init() 
		}
	},
	methods: {
		init() {
			if(this.selectItem) {
		      	this.$nextTick(()=> {
		      		if(this.$refs.properties && this.$refs.properties.init) {
				      	this.$refs.properties.init()
				    } 
		      	}) 

		      	this.groupColumns = this.initFormOptions()
		      	this.formColumns = this.initFormColumns() 
		      	this.formGroupColumn =  []
	      	
	      	} else {
	      		this.groupColumns = []
	      		this.formColumns = {}
	      		this.formGroupColumn = {}
	      	}
		},
		initFormOptions () {
	      const currentType = this.selectItem.type
	      const configs = this.$itemConfig
	      if (configs && configs[currentType]) {
	        const tformOptions = cloneDeep(configs[currentType].options)
	      	
	        let config_ = { ...tformOptions.config }

	        const groups = tformOptions.group
	        if(!groups || groups.length == 0) {

	        	return []

	        }
	        const this_ = this
	        const groupColumns = [] 
	        groups.forEach(t => {
	        	// 判断是否已经叠加到columns中 
	          	t.config = config_
	          	const prop = t.prop
	          	// 判断当前整个组的prop是否有值
	          	if (!this_.selectItem[prop]) {
	            	this_.$set(this_.selectItem, prop, {})
	          	}

	          	// 如果找到新的column有默认值 当前配置中没有值 则回填 
	          	const groupColumn = t.column
	          	if (groupColumn) {

	            	groupColumn.filter(gf => gf.default).forEach(gc => {
		              	// 判断column如果有默认值，但当前data没有值 则回填 
		              	//if(!this_.selectItem[prop][gc.prop]) {
		              	if (!Object.prototype.hasOwnProperty.call(this_.selectItem[prop], gc.prop)) {
		                	this_.$set(this_.selectItem[prop], gc.prop, gc.default)
		              	}
	 
	            	})
	          	}

	          	groupColumns.push(t)
	        })

	      

	        return groupColumns
	      }
	      return []
	    },
	    initFormColumns() {
	    	  // 2023-01-03 lyf 判断是否有单独的columns 不依赖分组信息
	        const currentType = this.selectItem.type
	      	const configs = this.$itemConfig
	      	if (configs && configs[currentType]) {
	        	const tformOptions = cloneDeep(configs[currentType].options)
	        	
	        	let config_ = { ...tformOptions.config }

	        	let columns = tformOptions.columns
	        	const this_ = this 
	          	if (columns) {

	            	columns.filter(gf => gf.default).forEach(gc => {
	              		// 判断column如果有默认值，但当前data没有值 则回填  
	              		if (!Object.prototype.hasOwnProperty.call(this_.selectItem, gc.prop)) {
	                		this_.$set(this_.selectItem, gc.prop, gc.default)
	              		}
	 
	            	})
	          	}


	          	return {config: config_ , column : columns}

	        }

	        return null
	    },

	    /** 计算当前form是否需要显示 */
	    showCollapse (form) {
	    	// 如果下面没有任何字段 则不显示
	      if(!form.column || form.column.length == 0) return false
	      if (form.show == undefined || form.show == true) return true
	      if (typeof form.show == 'string') {
	        return dynamicFun(form.show, this.selectItem)
	      }
	      return true
	    },
	}
}
</script>
<style lang="scss">
.item-properties {
	.no-data-text {
		text-align: center; 
    	font-size: 13px; 
	}

	.common-form {
		padding: 10px;
	}
}

</style>