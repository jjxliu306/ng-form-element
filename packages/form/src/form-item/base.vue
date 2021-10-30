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
          'datePicker',
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
    <!-- 区划三级联动选择 -->
     <ng-state
      v-else-if="record.type == 'state'"
      v-model="models[record.model]" 
      :renderPreview="renderPreview"
      :models="models"
      :record="record"
      :config="formConfig"
      :parentDisabled="disabled" 
      :disabled="disabled || record.options.disabled"  
    /> 
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
     <!-- 自定义组件 -->
    <template  v-else-if="customList.includes(record.type)">
      <customComponent
        :models="models" 
        :record="record"
        :disabled="disabled || record.options.disabled" 
        :renderPreview="true"
        @change="handleChange($event, record.model)" 
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
      :disabled="dynamicDisabled"
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
      :disabled="dynamicDisabled"
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
          :disabled="dynamicDisabled"
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
        :disabled="dynamicDisabled"
        :clearable="record.options.clearable"
        multiple
        @clear="clearChange"
        @change="handleChange($event, record.model ,  true)" 
      >
        <template  v-for="item in ((record.options.dynamic == 1 && record.options.remoteFunc) ? checkValues : record.options.options)">
          <el-option 
            :key="item[itemProp.value]"
            :label="item[itemProp.label]"
            :value="item[itemProp.value]"
            v-if="itemVisible(item)"
            >
          </el-option>
        </template>
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
        :disabled="dynamicDisabled"
        :clearable="record.options.clearable" 
        @clear="clearChange"
        @change="handleChange($event, record.model , true)" 
      > 
        <template v-for="item in ((record.options.dynamic == 1 && record.options.remoteFunc) ? checkValues : record.options.options)">
          <el-option
            :key="item[itemProp.value]"
            :label="item[itemProp.label]"
            :value="item[itemProp.value]"
            v-if="itemVisible(item)"
            >
          </el-option>
        </template> 
      </el-select>
    </template>
 
    <!-- 多选框 --> 
    <el-checkbox-group  
      v-else-if="record.type === 'checkbox'"  
      v-model="checkList"
      :disabled="dynamicDisabled"
      :placeholder="record.options.placeholder"
      @change="handleChange($event, record.model)"
    >
      <template v-for="checkitem in  ( (record.options.dynamic == 1 && record.options.remoteFunc) ? checkValues : record.options.options)" >
         <el-checkbox :label="checkitem[itemProp.value]" :key="checkitem[itemProp.value]" v-if="itemVisible(checkitem)"> 
        {{checkitem[itemProp.label]}}
      </el-checkbox>
      </template> 
    </el-checkbox-group>

     <!-- 单选框 -->
    <el-radio-group
      v-model="models[record.model]"
      v-else-if="record.type === 'radio'" 
      :disabled="dynamicDisabled"
      :placeholder="record.options.placeholder"
      @change="handleChange($event, record.model)"
      
    > 
      <template v-for="radioitem in ((record.options.dynamic == 1 && record.options.remoteFunc) ? checkValues : record.options.options)" >
         <el-radio :label="radioitem[itemProp.value]" :key="radioitem[itemProp.value]" v-if="itemVisible(radioitem)">
         {{radioitem[itemProp.label]}}
        </el-radio>
      </template> 
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
        :disabled="dynamicDisabled"
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
        :disabled="dynamicDisabled"
        :placeholder="record.options.placeholder"
        :format="record.options.format"
        :value-format="record.options.format"
        @change="handleChange($event, record.model)">
      </el-date-picker>

    </template>

    <!-- 日期+时间选择 -->
   <!-- 日期选择 -->
    <template v-else-if="record.type === 'datePicker'" > 
      <!-- 区分时间段选择 和单个时间选择 -->
      <el-date-picker 
        v-if="record.options.range"
        v-model="checkList"
        align="right"
        type="datetimerange"
        :clearable="record.options.clearable"
        :disabled="dynamicDisabled"
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
        type="datetime"
        :clearable="record.options.clearable"
        :disabled="dynamicDisabled"
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
      :disabled="dynamicDisabled"
      :placeholder="record.options.placeholder" 
      :format="record.options.format"
      :value-format="record.options.format">
    </el-time-select> 



 
    <!-- 评分 -->
    <el-rate
      v-model="models[record.model]"
      v-else-if="record.type === 'rate'"
      :max="record.options.max"
      :disabled="dynamicDisabled"
      :placeholder="record.options.placeholder"
      :allowHalf="record.options.allowHalf"
      @change="handleChange($event, record.model)"
     
    />
   <!-- 滑块 --> 
    <el-slider
        v-else-if="record.type === 'slider'"
        v-model="models[record.model]"
        :style="`width:${record.options.width}`"
        :disabled="dynamicDisabled"
        :min="record.options.min"
        :max="record.options.max"
        :show-input="record.options.showInput"
        :step="record.options.step"
        :marks="sliderMarks"
        @change="handleChange($event, record.model)"
          
    />  
    
    <!-- 上传图片 
    <FileUpload
      v-else-if="record.type === 'uploadImg'"
      :style="`width:${record.options.width}`"
      :disabled="dynamicDisabled"
      :fileForm="models"
      :fileKey="record.model"
      accept="image/*" 
      :list-type="record.options.listType"
      :multiple="true"
      :action="record.options.action"
      :limit="record.options.limit"
      @change="handleChange($event, record.model)"
      
    />  -->
    <!-- 上传文件 
    <FileUpload
      v-else-if="record.type === 'uploadFile'"
      :style="`width:${record.options.width}`"
      :disabled="dynamicDisabled"
      :fileForm="models"
      :fileKey="record.model" 
      :multiple="true"
      :action="record.options.action"
      :limit="record.options.limit"
      @change="handleChange($event, record.model)"
      
    />  -->  
    <!-- 级联选择器 -->
    <el-cascader 
      v-else-if="record.type === 'cascader'"
      ref="cascader"
      v-model="checkList"
      :options="(record.options.dynamic == 1 && record.options.remoteFunc ? checkValues : record.options.options)"
      :style="`width:${record.options.width}`"
      :placeholder="record.options.placeholder"
      :filterable="record.options.showSearch" 
      :disabled="dynamicDisabled"
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
      :disabled="dynamicDisabled"
      @change="handleChange($event, record.model)"
     
    />
    <!-- 区划三级联动选择 -->
     <ng-state
      v-else-if="record.type == 'state'"
      v-model="models[record.model]" 
      :renderPreview="renderPreview"
      :models="models"
      :record="record"
      :config="formConfig"
      :parentDisabled="disabled" 
      :disabled="disabled || record.options.disabled"  
    /> 
    <!-- 自定义组件 -->
    <customComponent
      :models="models"
      v-else-if="customList.includes(record.type)"
      :record="record"
      :disabled="dynamicDisabled"
      :formConfig="formConfig"
      :renderPreview="renderPreview"
      @change="handleChange($event, record.model)"
      
    /> 
  </div>
</template>
<script> 
import request from '../utils/request.js'
//import FileUpload from './file-upload'
import {dynamicFun} from '../utils' 
import CustomComponent from "./custom";
import NgState from './state'
export default {
  name: "ng-form-item-base",
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

      },
      // 2021-03-13 针对实时搜索回调的时候将动态的url放置在外部，方便组件联动的时候引用
      remoteUrl: '' ,

      // 2021-03-13 如果该字段带有本地数据过滤,则这里保存本地过滤的过滤条件
      localFilter: [],
      remoteFilter: {} , // 远程过滤搜索 结构 {key:xx,value:xx}
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
     // 是否拖拽面板引用
    isDragPanel: {
      type: Boolean ,
      default: false
    } 
  },
  inject: {
    customComponents: {
      from: 'customC',
      default: ()=>[]
    },
  },
  components: {
     /*FileUpload,*/CustomComponent,NgState
  }, 
  computed: {
    sliderMarks() {
        
      if(this.record.type !== 'slider' || !this.record.options.marks || this.record.options.marks.length == 0) {
        return null 
      }

      let p = {}  

      this.record.options.marks.forEach(t=> {
       
        p[t.value] = t.label 
        
      })

      return p ;

    },
    customList() {
     
      if (this.customComponents) {
        return this.customComponents.map(item => item.type);
      } else {
        return [];
      }
    },
    linkageData() {
       if(!this.isDragPanel && this.record.options.linkage ) {
          const linkData = this.record.options.linkData
          if(!linkData) return null

          let vs = []
          for(let i = 0 ; i < linkData.length ; i++) {
            // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
            const ld = linkData[i]
            if(ld.model) {
              // local script
              vs.push(this.models[ld.model])

            }
          }
          return vs 

        }
        return null
    },
    modelsRecord() {
      // 2021-04-21 lyf 目前只针对select多选\checkbox 两种进行监听
      return  this.models[this.record.model]
    },
     // 2021-05-06 lyf 组件内的动态禁用
    dynamicDisabled() {
      if(this.disabled) {
        return true 
      }
      
      if(this.record.options.disabled) {
        // 打开禁用但没有配置动态禁用 直接返回true 
        if(this.record.options.dynamicDisabled) {
          if(this.record.options.dynamicDisabledValue) {
            const script = this.record.options.dynamicDisabledValue

            // 打开了开关 这里获取函数内容
            const fvalue = dynamicFun(script,this.models , this.data) 
            return fvalue
          } else {
            // 打开了动态禁用,但没有配置脚本 返回 true 直接禁用
            return true
          }
        } else {
          // 没有配置动态禁用 直接返回true
          return true
        }

      } 
      return false  
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
        const value = this.models[this.record.model]
        this.handleChange(value ,this.record.model , 1)
      },
      deep:true
    },
    // 监听关联字段
    linkageData: {
      handler(val , oldVal) { 
        if(this.record.options.linkage ) {
          const linkData = this.record.options.linkData
          if(!linkData) return  

          // 本地搜索
          let localScript = []
          let remoteQuery = {}
          for(let i = 0 ; i < linkData.length ; i++) {
            // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
            const ld = linkData[i]
            if(ld.vtype == 1) {
              // local script
              localScript.push(ld.script) 
            } else if(ld.vtype == 2 
              // 确定有远程搜索
                &&  this.record.options.dynamic == 1 && this.record.options.remoteFunc
                // 确定搜索的key 和value存在
                && ld.queryKey && ld.queryValue) {
              // remote 远程过滤 

              // 解析queryValue
              const queryValue = dynamicFun(ld.queryValue , this.models)

              remoteQuery[ld.queryKey] = queryValue 
                
            }
          }

          this.localFilter = localScript
          this.remoteFilter = remoteQuery

          // 将当前选中值设置为空 防止选择的值目前展示不出来后永远不能反选
          if( (this.record.type === 'select' && this.record.options.multiple) || this.record.type === 'checkbox') {
            this.checkList = []
          } else {
             this.$set(this.models , this.record.model , null)
          }
    

          if(this.remoteFilter) {
            this.getRemoteData()
          }

        }
         
      },
      deep:true
    } ,
    modelsRecord :{
      handler(val, oldVal){
          // 2021-04-21 lyf 目前只针对select多选\checkbox 两种进行监听
        if(this.record.type == 'checkbox' || (this.record.type == 'select' && this.record.options.multiple)) {
           
          // 选择值重置
          if(val instanceof Array) {
            this.checkList = val
          }

        } 

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

      this.remoteUrl = url 

      this.getRemoteData()
    },
    // 获取远程数据
    getRemoteData() { 

      const objectPath = require("object-path");
      
      const dataPath = this.record.options.dataPath

      request({
        url: this.remoteUrl,
        method: 'get',
        params: {
          ...this.remoteFilter
        }
      }).then((data) => {
        if (data) { 
          // 获取list 根据dataPath 
          const rdata = objectPath.get(data, dataPath);

          this.checkValues = rdata
        }
      })



    },
    // 2021-03-13 判断列表中具体某个值是否应该显示
    dynamicVisible(script , item) {
       const func = script.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 
      const Fn = new Function('$','$item', func)
      return Fn(this.models , item)
    },
    // 2021-03-13 针对select radio checkbox判断如果有本地过滤关联，判断该条数据是否该显示 
    itemVisible(item) {
      // 没有过滤条件 直接全部展示
     // console.log('this.localFilter' , this.localFilter)
      if(this.isDragPanel || !this.localFilter || this.localFilter.length == 0) return true 

      //挨个过滤判断 
            // 本地搜索开始
      for(let i = 0 ; i < this.localFilter.length ; i++) {
          const v = this.dynamicVisible(this.localFilter[i] , item )
         // console.log('sitem' , item , v)
          if(!v) {
            return false
          }
      }  
      return true 
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
   
    if(this.record.options.cbColumn && !this.isDragPanel) {
      this.loading = true
      const value = this.data[this.record.options.cbColumn] 
     // this.models[this.record.model] = value  
      this.$set(this.models , this.record.model , value)
      this.loading = false
      return
    }

     // 判断如果是远程方法的话 远程请求数据
    if(this.record.options.dynamic == 1 && this.record.options.remoteFunc) {
      const url =  this.record.options.remoteFunc 
      this.remoteUrl = url 
      

      this.getRemoteData()
 

      this.itemProp.label = this.record.options.remoteLabel
      this.itemProp.value = this.record.options.remoteValue
      this.itemProp.children = this.record.options.remoteChildren
    } 

    
    // 如果已经赋值了 则不管默认值了 
    if(this.models && Object.prototype.hasOwnProperty.call(this.models, this.record.model)) {
      // 判断数据类型是否正确 
      // 类型为checkbox cascader 但数据非array类型 则强制转array
      let modelValue = this.models[this.record.model]
      if(  this.record.type == 'checkbox' || this.record.type == 'cascader' || (
        // 2020-07-31 如果时下拉复选 这里也绑定的是数组
          this.record.type == 'select' && this.record.options.multiple 
        )) {
        if(!(modelValue instanceof Array)){
          modelValue = modelValue.split(',')
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


    // 2021-03-16 lyf 判断当前没有值并且类型是input 或者textarea 给初始化model
    // 2021-08-05 lyf 为不同的组件初始化不同类型的初始值，防止类型不同后端解析异常
    if(!this.isDragPanel) {
      if(!Object.prototype.hasOwnProperty.call(this.models,this.record.model)){
        // 判断数据格式 刷数据
        if(this.record.type == 'checkbox' ||  this.record.type == 'cascader'
          || (this.record.type == 'select' && this.record.options.multiple)) {
          // 多选
          this.$set(this.models , this.record.model , [])
        } else if(this.record.type == 'number') {
          // 数字
          this.$set(this.models , this.record.model , null)
        } else {
          // 字符串
          this.$set(this.models , this.record.model , '')
        } 
      } else if(this.record.type == 'checkbox' ||  this.record.type == 'cascader'
          || (this.record.type == 'select' && this.record.options.multiple)){
        // 获取数据 校验格式 
        const mv = this.models[this.record.model]
         

        if(typeof mv == 'string') {
          if(mv == "") {
            this.$set(this.models , this.record.model , [])
          } else {
            const mvs = mv.split(',')
            this.$set(this.models , this.record.model , mvs)
          }
          
        }

      }

    }

      
  
 
  }
};
</script>
 
