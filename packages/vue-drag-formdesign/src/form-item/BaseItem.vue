<!--
传入record数据，通过判断record.type，来渲染对应的组件 
 -->
<template>
 
  <div v-if="renderPreview">
    <template v-if=" [
          'input',
          'textarea',
          'date',
          'time',
          'number', 
          'rate',
          'switch',
          'slider' 
        ].includes(record.type)">
     
      <span   v-if="record.options.prepend" v-html="transformAppend(record.options.prepend)">
         
      </span>
       <span v-if="!loading">{{models[record.model]}} </span>
      <span  v-if="record.options.append" v-html="transformAppend(record.options.append)">
       
      </span> 
 
    </template>
    <template v-else-if="[
          'radio',
          'checkbox',
          'select',
          'cascader'
        ].includes(record.type)">
      {{models[record.model+'_label']}}  
    </template>
    <template v-else-if="[
          'uploadImg',
          'uploadFile'
        ].includes(record.type)"> 

      <!-- 上传图片 -->
      <FileUpload
        v-if="record.type == 'uploadImg'"
        :style="`width:${record.options.width}`" 
        :fileForm="models"
        :fileKey="record.model"
        :updateNow="true"
        accept="image/*" 
        :list-type="record.options.listType" 
        :readOnly="true"  
      />  
      <!-- 上传文件 --> 
      <FileUpload
        v-else
        :style="`width:${record.options.width}`" 
        :fileForm="models"
        :updateNow="true"
        :fileKey="record.model"  
        :readOnly="true"    
      />  
    </template>
    <template v-else>
      {{""}}
    </template>


  </div>
  <div v-else class="base-item"> 
    <!-- 单行文本 -->   
    <el-input
     
      :style="`width:${record.options.width}`"
      v-if="record.type === 'input'"
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder"
      :type="record.options.type"
      :clearable="record.options.clearable"
      :maxlength="record.options.maxLength > 0 ? record.options.maxLength : null"
      @change="handleChange($event, record.model)"
      v-model="models[record.model]" 
    >
      <span v-if="record.options.prepend"  slot="prepend" v-html="transformAppend(record.options.prepend)">
       
      </span>
      <span v-if="record.options.append"  slot="append" v-html="transformAppend(record.options.append)">
        
      </span>
    </el-input>
    <!-- 多行文本 -->
    <el-input
     v-model="models[record.model]"
      type="textarea"
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'textarea'" 
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder"
      :clearable="record.options.clearable"
      :maxlength="record.options.maxLength > 0 ? record.options.maxLength : null"
      :rows="record.options.rows"
      :show-word-limit="record.options.maxLength > 0 && record.options.maxLength > 10"
      @change="handleChange($event, record.model)"
       
    />

    <!-- 数字输入框 -->
    <template v-else-if="record.type === 'number'">
      <div :style="`width:${record.options.width}`" class="el-input-number-diaplay">

        <el-input-number
          :class="record.options.append ? 'el-input-number__append' : null" 
          v-model="models[record.model]" 
          :style="`width:100%;float:left;`"
          :min="
            record.options.min || record.options.min === 0
              ? record.options.min
              : -Infinity
          "
          :max="
            record.options.max || record.options.max === 0
              ? record.options.max
              : Infinity
          "
          :disabled="disabled || record.options.disabled"
          :step="record.options.step"
          :precision="
            record.options.precision > 50 ||
            (!record.options.precision && record.options.precision !== 0)
              ? null
              : record.options.precision
          "
          controls-position="right"
          :placeholder="record.options.placeholder"
          @change="handleChange($event, record.model)"
          
        > </el-input-number>
        <div class="el-input-group__append el-input-number-group__append " v-if="record.options.append" v-html="transformAppend(record.options.append)">
         
        </div>
      </div>
      
    </template>
   

     <!-- 下拉选框 -->
    <template v-else-if="record.type === 'select' "> 
      <el-select
        v-model="checkList"
        :value-key="itemProp.value"
        :style="`width:${record.options.width}`"
        v-if="record.options.multiple"
        :remote="record.options.onlineSearch && record.options.showSearch"
        :remote-method="remoteMethod"
        :placeholder="record.options.placeholder"
        :filterable="record.options.showSearch"
        :disabled="disabled || record.options.disabled"
        :clearable="record.options.clearable"
        multiple
        @change="handleChange($event, record.model ,  true)" 
      >
        <el-option
          v-for="item in ((record.options.dynamic == 1 && record.options.remoteFunc) || (record.options.dynamic == 2 && record.options.dictType) ? checkValues : record.options.options)"
          :key="item[itemProp.value]"
          :label="item[itemProp.label]"
          :value="item[itemProp.value]">
        </el-option>
      </el-select>
      <el-select
        v-else
        v-model="models[record.model]"
        :style="`width:${record.options.width}`"
        :value-key="itemProp.value" 
        :remote="record.options.onlineSearch && record.options.showSearch"
        :remote-method="remoteMethod"
        :placeholder="record.options.placeholder"
        :filterable="record.options.showSearch"
        :disabled="disabled || record.options.disabled"
        :clearable="record.options.clearable" 
        @change="handleChange($event, record.model , true)" 
      > 
        <el-option
          v-for="item in ((record.options.dynamic == 1 && record.options.remoteFunc) || (record.options.dynamic == 2 && record.options.dictType) ? checkValues : record.options.options)"
          :key="item[itemProp.value]"
          :label="item[itemProp.label]"
          :value="item[itemProp.value]">
        </el-option>
      </el-select>
    </template>
 
    <!-- 多选框 --> 
    <el-checkbox-group  
      v-else-if="record.type === 'checkbox'"  
      v-model="checkList"
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder"
      @change="handleChange($event, record.model)"
    >
      <el-checkbox  v-for="checkitem in  ( (record.options.dynamic == 1 && record.options.remoteFunc) || (record.options.dynamic == 2 && record.options.dictType) ? checkValues : record.options.options)" :label="checkitem[itemProp.value]" :key="checkitem[itemProp.value]"> 
        {{checkitem[itemProp.label]}}
      </el-checkbox>
    </el-checkbox-group>

     <!-- 单选框 -->
    <el-radio-group
      v-model="models[record.model]"
      v-else-if="record.type === 'radio'" 
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder"
      @change="handleChange($event, record.model)"
      
    > 
      <el-radio v-for="radioitem in ((record.options.dynamic == 1 && record.options.remoteFunc) || (record.options.dynamic == 2 && record.options.dictType) ? checkValues : record.options.options)" :label="radioitem[itemProp.value]" :key="radioitem[itemProp.value]">
         {{radioitem[itemProp.label]}}
      </el-radio>
       
    </el-radio-group>

    <!-- 日期选择 -->
    <template v-else-if="record.type === 'date'" > 
      <!-- 区分时间段选择 和单个时间选择 -->
      <el-date-picker 
        v-if="record.options.range"
        v-model="checkList"
        align="right"
        type="daterange"
        :clearable="record.options.clearable"
        :disabled="disabled || record.options.disabled"
        :start-placeholder="record.options.rangeStartPlaceholder"
        :end-placeholder="record.options.rangeEndPlaceholder"
        :format="record.options.format"
        :value-format="record.options.format"
        @change="handleChange($event, record.model)" >
      </el-date-picker>
      <el-date-picker 
        v-else
        v-model="models[record.model]"
        align="right"
        type="date"
        :clearable="record.options.clearable"
        :disabled="disabled || record.options.disabled"
        :placeholder="record.options.placeholder"
        :format="record.options.format"
        :value-format="record.options.format"
        @change="handleChange($event, record.model)">
      </el-date-picker>

    </template>
    
 
    <!-- 时间选择 -->
    <el-time-select
      v-else-if="record.type === 'time'"
      v-model="models[record.model]"
      @change="handleChange($event, record.model)"
      :clearable="record.options.clearable"
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder" 
      :format="record.options.format"
      :value-format="record.options.format">
    </el-time-select> 
 
    <!-- 评分 -->
    <el-rate
      v-model="models[record.model]"
      v-else-if="record.type === 'rate'"
      :max="record.options.max"
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder"
      :allowHalf="record.options.allowHalf"
      @change="handleChange($event, record.model)"
     
    />
   <!-- 滑块 --> 
    <el-slider
        v-else-if="record.type === 'slider'"
        v-model="models[record.model]"
        :style="`width:${record.options.width}`"
        :disabled="disabled || record.options.disabled"
        :min="record.options.min"
        :max="record.options.max"
        :show-input="record.options.showInput"
        :step="record.options.step"
        :marks="sliderMarks"
        @change="handleChange($event, record.model)"
          
    />  
    
    <!-- 上传图片 -->
    <FileUpload
      v-else-if="record.type === 'uploadImg'"
      :style="`width:${record.options.width}`"
      :disabled="disabled"
      :fileForm="models"
      :fileKey="record.model"
      accept="image/*" 
      :list-type="record.options.listType"
      :multiple="true"
      :action="record.options.action"
      :limit="record.options.limit"
      @change="handleChange($event, record.model)"
      
    />  
    <!-- 上传文件 --> 
    <FileUpload
      v-else-if="record.type === 'uploadFile'"
      :style="`width:${record.options.width}`"
      :disabled="disabled"
      :fileForm="models"
      :fileKey="record.model" 
      :multiple="true"
      :action="record.options.action"
      :limit="record.options.limit"
      @change="handleChange($event, record.model)"
      
    />   
    <!-- 级联选择器 -->
    <el-cascader 
      v-else-if="record.type === 'cascader'"
      ref="cascader"
      v-model="checkList"
      :options="(record.options.dynamic == 1 && record.options.remoteFunc ? checkValues : record.options.options)"
      :style="`width:${record.options.width}`"
      :placeholder="record.options.placeholder"
      :filterable="record.options.showSearch" 
      :disabled="disabled || record.options.disabled"
      :clearable="record.options.clearable"
      :props="itemProp"
      @change="handleChange($event, record.model)"
      
    />  

     <!-- 开关 -->
    <el-switch
      v-model="models[record.model]"
      v-else-if="record.type === 'switch'"
      :active-text="record.options.activeText"
      :inactive-text="record.options.inactiveText"
      :disabled="disabled || record.options.disabled"
      @change="handleChange($event, record.model)"
     
    />
    <!-- 自定义组件 -->
    <customComponent
      :models="models"
      v-else-if="customList.includes(record.type)"
      :record="record"
      :disabled="disabled || record.options.disabled"
      :formConfig="formConfig"
      :renderPreview="renderPreview"
      @change="handleChange($event, record.model)"
      
    /> 
  </div>
</template>
<script> 
import request from '../utils/request.js'
import FileUpload from './file-upload'
import {dynamicFun} from '../utils' 
import CustomComponent from "./custom-component";
export default {
  name: "BaseItem",
  data(){
    return{
      loading: false,
      checkList: [],
      checkValues: [], // ajax获取的动态数据绑定
      itemProp: {
        children: 'children',
        value: 'value',
        label: 'label',
        multiple: this.record.options.multiple,

      }
    }
  },
  props: {
    // 表单数组

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
    data: {// 整个事项实体
      type: Object,
      default: () => ({})
    },
  },
  components: {
     FileUpload,CustomComponent
  }, 
  computed: {
    sliderMarks() {
        
      if(this.record.type !== 'slider' || !this.record.options.marks || this.record.options.marks.length == 0) {
        return null 
      }

      let p = {}  

      this.record.options.marks.forEach(t=> {
       
        p[t.label] = t.value 
        
      })

      return p ;

    },
    customList() {
     
      if (window.customComponents) {
        return window.customComponents.map(item => item.type);
      } else {
        return [];
      }
    }
  },
  watch: {
    checkList:{
      handler(val, oldVal){
          // 默认所有val 全部补一个id 标明顺序
        //this.models[this.record.model] = val
        this.$set(this.models , this.record.model , val)
      },
      deep:true
    },
    // 远程方法获取的数据尝试再这里回填label
    checkValues: {
      handler(val, oldVal){
         this.handleChange(val ,this.record.model , 1)
      },
      deep:true
    }
  },
  methods: {
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
    remoteMethod(query){
      let queryParam = this.record.options.onlineParams
      queryParam = queryParam.replace('$' , query)

      let url =  this.record.options.remoteFunc 

      if(url.indexOf('?') >= 0){
        url += '&' + queryParam
      } else {
        url += '?' + queryParam
      }

     request({
        url: url,
        method: 'get',
        params: {}
      }).then(({data}) => {
        if (data.code === 0) { 
          this.checkValues = data.data.list
        }
      }) 
    }, 
    handleChange(value, key , type) {
      // change事件 
      this.$emit("change", value, key); 

      // 根据类型判断 如果是 select , radio , checkbox , cascader 则回带具体的显示值
      if(['select' , 'radio' , 'checkbox' , 'cascader'].includes(this.record.type)){
        let labels = []
        // 获取数据 判断从ajax 还是本地默认配置
        let datas = this.record.options.dynamic > 0 ? this.checkValues : this.record.options.options
        if(!datas) {
          datas = []
        }

        // 回填数据
        if(this.record.type == 'cascader'){
          let as = [] 
          // 判断是不是复选
          if(!this.itemProp.multiple) {
            // 复选
            as = [value]
          } else {
            as = value
          }

          const checkNodes = this.$refs.cascader.getCheckedNodes()
          for(let i = 0 ; i < as.length ; i++){
              const v = as[i] 
              // 比对nodes 显示值
              const fs = checkNodes.filter(t=>t.path == v) 
              
              if(fs && fs.length > 0) {
                const label = fs[0].pathLabels
                if(label && label.length > 0)
                 labels.push(label.join('/'))
              }
              
          }



        } else {
          let as = []

           if(!(value instanceof Array)){
            as = [value]
           } else {
            as = value
           }

           for(let i = 0 ; i < as.length ; i++){
              const v = as[i]
              console.log('datas' , datas)
              const fs = datas.filter(t=>t[this.itemProp.value] == v)
              if(fs && fs.length > 0) {
                const label = fs[0][this.itemProp.label]

                labels.push(label)
              }
              
            }

        }

        const modelLabel = this.record.model + '_label'
        //this.models[modelLabel] = labels.join(',')
        this.$set(this.models , modelLabel , labels.join(','))


        // 2020-08-01 如果有远程调用并且有选择回调 再这里进行回调 
        if(/*this.record.options.onlineSearch && this.record.options.showSearch &&*/ type && this.record.options.selectCb) {

          // 找到当前选择的数据实体  
          // 获取数据
          const cvalues = (this.record.options.dynamic == 1 && this.record.options.remoteFunc  ?  this.checkValues : this.record.options.options)
 
          const fs = cvalues.filter(t=>t[this.itemProp.value] == value)
 
          if(fs && fs.length > 0) {
            const select = fs[0] 

            // 构建函数 去执行 
            this.$nextTick(()=>{
              const scriptFunc = this.record.options.selectCb
              const func =  '{' + scriptFunc + '}'  
              const Fn = new Function('$' , '$select', func)
            
              Fn(this.models,select)

              this.$emit('forceUpdate') 
            })
           
          }


         

        }


      }
    }
  },
  activated(){
    

  },
  mounted() { 
     // 2020-07-30 如果有cbColumn 则尝试从data中回填数据
    //console.log('this.record.options.cbColumn',this.record.options.cbColumn)
    if(this.record.options.cbColumn) {
      this.loading = true
      const value = this.data[this.record.options.cbColumn] 
     // this.models[this.record.model] = value 
      //  console.log('value', value)
      this.$set(this.models , this.record.model , value)
      this.loading = false
      return
    }

     // 判断如果是远程方法的话 远程请求数据
    if(this.record.options.dynamic == 1 && this.record.options.remoteFunc) {
      const url =  this.record.options.remoteFunc 

      
      const objectPath = require("object-path");
      
      const dataPath = this.record.options.dataPath

      request({
        url: url,
        method: 'get',
        params: {}
      }).then((data) => {
        if (data) { 
          // 获取list 根据dataPath 
          const rdata = objectPath.get(data, dataPath);

          this.checkValues = rdata
        }
      })
 

      this.itemProp.label = this.record.options.remoteLabel
      this.itemProp.value = this.record.options.remoteValue
      this.itemProp.children = this.record.options.remoteChildren
    } 

    
    // 如果已经赋值了 则不管默认值了
    if(this.models[this.record.model]) {
      // 判断数据类型是否正确 
      // 类型为checkbox cascader 但数据非array类型 则强制转array
      let modelValue = this.models[this.record.model]
      if(  this.record.type == 'checkbox' || this.record.type == 'cascader' || (
        // 2020-07-31 如果时下拉复选 这里也绑定的是数组
          this.record.type == 'select' && this.record.options.multiple 
        )) {
        if(!(modelValue instanceof Array)){
          modelValue = [modelValue]
          this.$set(this.models , this.record.model , modelValue)
        }
  
        //this.models[this.record.model] = vs
        this.checkList = modelValue 
      }

      return ;
    }

    const defaultValue = this.record.options.defaultValue
    if(defaultValue) {
      if(this.record.type == 'checkbox' || this.record.type == 'cascader'){
        this.checkList = defaultValue
      } else {
        //this.models[this.record.model] = defaultValue
        this.$set(this.models , this.record.model , defaultValue)
      } 

      this.handleChange(defaultValue , this.record.model)
    }
 
  }
};
</script>
<style >
 .base-item .slider-box {
  display: flex;
}
.base-item .slider-box > .slider {
  flex: 1;
  margin-right: 16px;
}
.base-item .slider-box > .number {
  width: 70px;
}
.base-item .el-input-number-diaplay {
  vertical-align: middle;
  display: inline-flex;
  position: relative;
}
.base-item .el-input-number-diaplay .el-input-number__append {
  float: left;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #F5F7FA;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  white-space: nowrap;
  border-left: 0;
  border-right: 0;
}
.base-item .el-input-number-diaplay .el-input-number__append .el-input__inner {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.base-item .el-input-number-diaplay .el-input-number-group__append {
  border-left: 0;
  text-align: center;
  display: inline-table;
}

</style>
