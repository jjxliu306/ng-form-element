<template>  
	<div v-if="!preview">  
		 <el-select 
		  v-if="record.options.multiple"
        v-model="models[record.model]"
        :value-key="itemValue"
        :style="`width:${record.width}`"
         :loading="loading"
        :remote="showRemote"
        :remote-method="remoteFilterMethod"
        :placeholder="getLabel(record.options.placeholder)"
        :filterable="record.options.showSearch"
        :disabled="recordDisabled"
        :clearable="record.options.clearable"
        multiple
        @change="handleChange($event)" 
        @clear="clearChange" 
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <template  v-for="(item, index) in selectList">
          <el-option 
            :key="index"
            :label="item[itemLabel]"
            :value="item[itemValue]"
            v-if="itemVisible(item)"
            :disabled="itemDisabled(item)"
            >
          </el-option>
        </template>
      </el-select>
      <el-select
        v-else 
         :loading="loading"
        v-model="models[record.model]"
        :style="`width:${record.width}`"
        :value-key="itemValue" 
        :remote="showRemote"
        :remote-method="remoteFilterMethod"
        :placeholder="getLabel(record.options.placeholder)"
        :filterable="record.options.showSearch"
        :disabled="recordDisabled"
        :clearable="record.options.clearable" 
        @change="handleChange($event)" 
        @clear="clearChange" 
        @focus="handleFocus"
        @blur="handleBlur"
      > 
        <template v-for="(item, index) in selectList">
          <el-option
            :key="index"
            :label="item[itemLabel]"
            :value="item[itemValue]"
            v-if="itemVisible(item)"
            :disabled="itemDisabled(item)"
            >
          </el-option>
        </template> 
      </el-select>  
	</div>
  <span v-else>
    {{models[record.model+'_label']}}  
  </span>
</template>
<script>
import mixin from './datasource-mixin.js'
export default {
	mixins: [mixin],
	data() {
		return {
      loading: false,
			itemProp: {
		        children: 'children',
		        value: 'value',
		        label: 'label',
		        multiple: this.record.options.multiple 
		  },
      // 2021-03-13 如果该字段带有本地数据过滤,则这里保存本地过滤的过滤条件
      localFilter: [],
		}
	},
  computed: {
    itemValue() {
      if(!this.itemProp.value) return 'value'
      return this.itemProp.value
    },
    itemLabel() {
      if(!this.itemProp.label) return 'label'
      return this.itemProp.label
    },
    selectList() {
      if(this.record.options.dynamic == 1 && this.record.options.remoteFunc) {
        return this.checkValues
      } else if(this.record.options.dynamic == 2 && this.record.options.dictType) {
        return this.checkValues
      } else {
        return this.record.options.options
      }
      // (record.options.dynamic == 1 && record.options.remoteFunc) || (record.options.dynamic == 2 && record.options.dictType) ? checkValues : record.options.options
    },
    showRemote() {
      if(this.record.options.onlineSearch && this.record.options.showSearch && this.record.options.onlineSearchQuery){
        return true
      } else {
        return false
      }
      
    }

  },
	created () { 
	  //this.updateSimpleDefaultValue()
    if(!this.record.options) return 
    // 初始化一个绑定空值 
    if(this.record.options.multiple) {
      this.updateArrayDefaultValue()
    } else {
      this.updateSimpleDefaultValue()
    }


    // 判断如果是远程方法的话 远程请求数据
    this.initDynamicValue()

    // 判断是否有联动关联需要处理 
    if(this.linkageData) {
      this.linkageDataHandle(false)
    }


    // 判断如果已经有了值 但没有label 则尝试回填label 
    const value = this.models[this.record.model]
    const label = this.models[this.record.model + '_label']
    if(value && value.length > 0 && !label) {
      this.handleChange(value)
    }
	},
  methods: {
    remoteFilterMethod(queryValue) {
      if (queryValue) {
          

          if(!this.record || !this.record.options) return
          let queryParam = this.record.options.onlineSearchQuery

          //this.loading = true;
 
          this.$set(this.remoteFilter , queryParam , queryValue )
 

          this.getRemoteData()

        
      } 
    },
      // select 清除后回调
    clearChange() {
      // 2021-05-08 lyf 判断是否有清除后回调
      if(!this.record.options.clearCb) {
        return
      }

      const cbScript = this.record.options.clearCb
      const func =  '{' + cbScript + '}'
      const Fn = new Function('$' , 'data', func)
      Fn(this.models, this.data)
    }
   
  }
}
</script>