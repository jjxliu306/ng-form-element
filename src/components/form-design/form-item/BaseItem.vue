<!--
 * @Description: 传入record数据，通过判断record.type，来渲染对应的组件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2020-06-08 20:56:55
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
      {{models[record.model]}} 
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
  <div v-else>
    <!-- 单行文本 -->
    <el-input
     
      :style="`width:${record.options.width}`"
      v-if="record.type === 'input'"
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder"
      :type="record.options.type"
      :clearable="record.options.clearable"
      :maxlength="record.options.maxLength"
      @change="handleChange($event, record.model)"
      v-model="models[record.model]"
     
    />
    <!-- 多行文本 -->
    <el-input
     v-model="models[record.model]"
      type="textarea"
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'textarea'" 
      :disabled="disabled || record.options.disabled"
      :placeholder="record.options.placeholder"
      :clearable="record.options.clearable"
      :maxlength="record.options.maxLength"
      :rows="record.options.rows"
      @change="handleChange($event, record.model)"
       
    />

    <!-- 数字输入框 -->
    <el-input-number
      v-model="models[record.model]"
      v-else-if="record.type === 'number'"
      :style="`width:${record.options.width}`"
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
      :placeholder="record.options.placeholder"
      @change="handleChange($event, record.model)"
     
    />

     <!-- 下拉选框 -->
    <template v-else-if="record.type === 'select' ">
      <el-select
        v-model="checkList"
        :value-key="itemProp.value"
        :style="`width:${record.options.width}`"
        v-if="record.options.multiple"
        :placeholder="record.options.placeholder"
        :filterable="record.options.showSearch"
        :disabled="disabled || record.options.disabled"
        :clearable="record.options.clearable"
        multiple
        @change="handleChange($event, record.model)" 
      >
        <el-option
          v-for="item in (record.options.dynamic && record.options.remoteFunc ? checkValues : record.options.options)"
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
        :placeholder="record.options.placeholder"
        :filterable="record.options.showSearch"
        :disabled="disabled || record.options.disabled"
        :clearable="record.options.clearable" 
        @change="handleChange($event, record.model)" 
      > 
        <el-option
          v-for="item in (record.options.dynamic && record.options.remoteFunc ? checkValues : record.options.options)"
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
      <el-checkbox  v-for="checkitem in  (record.options.dynamic && record.options.remoteFunc ? checkValues : record.options.options)" :label="checkitem[itemProp.value]" :key="checkitem[itemProp.value]"> 
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
      <el-radio v-for="radioitem in (record.options.dynamic && record.options.remoteFunc ? checkValues : record.options.options)" :label="radioitem[itemProp.value]" :key="radioitem[itemProp.value]">
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
      :options="(record.options.dynamic && record.options.remoteFunc ? checkValues : record.options.options)"
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
  </div>
</template>
<script> 
import request from '../utils/request.js'
import FileUpload from './file-upload'
export default {
  name: "form-base-item",
  data(){
    return{
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
      required: true
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      default: () => ({})
    }, 
    disabled: {
      type: Boolean,
      default: false
    } ,
      // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }
  },
  components: {
     FileUpload
  },
  watch: {
    checkList:{
      handler(val, oldVal){
          // 默认所有val 全部补一个id 标明顺序
        this.models[this.record.model] = val
      },
      deep:true
    }
  },
  methods: {
    
    handleChange(value, key) {
      // change事件 
      this.$emit("change", value, key); 

      // 根据类型判断 如果是 select , radio , checkbox , cascader 则回带具体的显示值
      if(['select' , 'radio' , 'checkbox' , 'cascader'].includes(this.record.type)){
        let labels = []
        // 获取数据 判断从ajax 还是本地默认配置
        const datas = this.record.options.dynamic && this.record.options.remoteFunc ? this.checkValues : this.record.options.options

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
              const fs = datas.filter(t=>t[this.itemProp.value] == v)
              if(fs && fs.length > 0) {
                const label = fs[0][this.itemProp.label]

                labels.push(label)
              }
              
            }

        }

        const modelLabel = this.record.model + '_label'
        this.models[modelLabel] = labels.join(',')
 

      }
    }
  },
  mounted() { 

    
    // 如果已经赋值了 则不管默认值了
    if(this.models[this.record.model]) 
      return ;

    const defaultValue = this.record.options.defaultValue
    if(defaultValue) {
      if(this.record.type == 'checkbox'){
        this.checkList = defaultValue
      } else {
        this.models[this.record.model] = defaultValue
      } 
    }


    // 判断如果是远程方法的话 远程请求数据
    if(this.record.options.dynamic && this.record.options.remoteFunc) {
      const url =  this.record.options.remoteFunc 
      request.get(url).then(res => {
        if(res && res.code == 0){
          //this.record.options.options = res.data
          this.checkValues = res.data
        } 
      })

      this.itemProp.label = this.record.options.remoteLabel
      this.itemProp.value = this.record.options.remoteValue
      this.itemProp.children = this.record.options.remoteChildren
    }
   
 
    // if(this.record.type == 'checkbox' && !this.models[this.record.model]) {
    //   this.models[this.record.model] = []
    // }
    // console.log('record' , this.record)
    // console.log('models' , this.models)
  }
};
</script>
<style lang="scss" scoped>
.slider-box {
  display: flex;
  > .slider {
    flex: 1;
    margin-right: 16px;
  }
  > .number {
    width: 70px;
  }
}
</style>
