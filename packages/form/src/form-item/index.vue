<!--
传入record数据，通过判断record.type，来渲染对应的组件
  -->
<template>
   
  <el-form-item
    v-if="
      !(record.options.hidden === true) &&
        ( [
          'input',
          'textarea',
          'date',
          'time',
          'datePicker',
          'number',
          'radio',
          'checkbox',
          'select',
          'rate',
          'switch',
          'slider',
          'uploadImg',
          'uploadFile',
          'cascader',
          'state'
        ].includes(record.type) || customList.includes(record.type) ) && dynamicVisibleItem && !(record.type == 'select' && renderPreview &&  record.options.previewHidden )
    "
    :label="formConfig.labelWidth > 0 ? record.label : null " 
    :rules="recordRules"
    :prop="recordProps"
    :required="recordRequired" 
    :id="record.model" :name="record.model"
    :label-width="(record.options.labelWidth >= 0 ? record.options.labelWidth : formConfig.labelWidth) + 'px'"
  >   recordRules:: {{recordRules}}
    <BaseItem 
      :models="models"  
      :formConfig="formConfig"
      :renderPreview="renderPreview" 
      :record="record"
      :disabled="disabled"
      @forceUpdate="forceUpdate"
      :isDragPanel="isDragPanel"
      /> 
  
  </el-form-item>
  <!-- 可隐藏label -->
 
  <el-form-item
    :id="record.model" :name="record.model"
    v-else-if="(record.type === 'batch' || record.type === 'editor') && dynamicVisibleItem"
    :label="!record.options.showLabel ? '' : record.label"  
    :label-width="record.options.showLabel ? ((record.options.labelWidth >= 0 ? record.options.labelWidth : formConfig.labelWidth) + 'px') : '0px'"
     :rules="recordRules"
     :prop="recordProps"
  >
    <!-- 动态表格 -->
    <TableBatch
      v-model="models[record.model]" 
      ref="TableBatch"
      :renderPreview="renderPreview"
      :models="models"
      :style="`width:${record.options.width}`"
      :record="record"
      :config="formConfig"
      :parentDisabled="disabled" 
      @change="handleChange($event, record.model)"
      
    />  
     
  </el-form-item> 

  <!-- button按钮 -->
  <el-form-item
    v-else-if="record.type === 'button' && dynamicVisibleItem" 
    :style="{ 'textAlign': record.options.textAlign }"
    :label-width="(record.options.labelWidth >= 0 ? record.options.labelWidth : formConfig.labelWidth) + 'px'"
  > 
    <el-button
      :disabled="disabled || record.options.disabled" 
      :type="record.options.type" 
      @click="buttonClick"
      v-text="record.label"
    ></el-button>
  </el-form-item>
  
  <!-- 文本 -->
  <div class="form-label" v-else-if="record.type === 'text' && dynamicVisibleItem " :style="{ textAlign: record.options.textAlign }" > 
      <label
        :class="{ 'is-required': record.options.showRequiredMark || showRequiredMark }"
        v-text="record.label"
      ></label>
  </div>
   <!-- 提示 -->
  <div class="form-label" v-else-if="record.type === 'alert' && dynamicVisibleItem " :style="{ textAlign: record.options.textAlign }" > 
       <el-alert
        :title="record.options.title"
        :type="record.options.type"
        :description="record.options.description"
        :effect="record.options.effect"
        :closable="record.options.closable"
        :center="record.options.center"
         :close-text="record.options.closeText"
        :show-icon="record.options.showIcon">
      </el-alert>
  </div>
  <!-- html -->
  <div
    :id="record.model" :name="record.model"
    v-else-if="record.type === 'html' && dynamicVisibleItem"
    v-html="record.options.defaultValue"
  ></div> 

  <div v-else-if="dynamicVisibleItem">
    <!-- 分割线 --> 
    <el-divider
      v-if=" record.type === 'divider' && record.label !== '' && record.options.orientation "
      :content-position="record.options.orientation" :direction="record.options.direction ? record.options.direction : 'horizontal'">
      {{ record.label }}
    </el-divider>
    <el-divider v-else-if="record.type === 'divider' && record.label !== ''" :direction="record.options.direction ? record.options.direction : 'horizontal'" >
      {{record.label}}
    </el-divider>
    <el-divider v-else-if="record.type === 'divider' && record.label === ''" :direction="record.options.direction ? record.options.direction : 'horizontal'" />
  </div>
</template>
<script> 
import TableBatch from "./table"; 
import BaseItem from './base' 
import {dynamicFun} from '../utils'

export default {
  name: "ng-form-item", 
  data(){  
    return{
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
      default: () => ({
        labelWidth: 120
      })
     // required: true
    },
    propPrepend: {
      // form-item的 prop前缀 默认不需要
      type: String
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true,
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
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
  components: {
     TableBatch,BaseItem
  },
  inject: {
      customComponents: {
        from: 'customC',
        default: ()=>[]
      },
  }, 
  watch: {
    'record': {
      handler(pre, nex) {
        if (this.models[this.record.model]) return ;
        const defaultValue = this.record.options.defaultValue
        if (defaultValue) {
          this.$set(this.models, this.record.model, defaultValue)
        } 
      },
      deep: true,
    },

  },
  computed: {
    customList() {
      if (this.customComponents) {
        return this.customComponents.map(item => item.type);
      } else {
        return [];
      }
    },
     // 校验的prop值 动态计算
    recordProps() {
      if(this.recordRules && this.recordRules.length > 0) {
        if(this.propPrepend) {
          return this.propPrepend + this.record.model
        } else {
          return this.record.model
        }
      }
      return null
    },
    showRequiredMark(){
      //##############
      const fstr = this.record.options.showRequiredMarkScript
      if(!fstr){
        return false
      }

      const mark = dynamicFun(fstr , this.models)  

      return mark 
    },
    // 是否动态显示当前元素 
     // 是否动态显示当前元素 
    // 返回true 显示 false 不显示
    dynamicVisibleItem(){ 
      if(this.isDragPanel) {
        return true
      }
      
      if(!this.record.options || !this.record.options.dynamicVisible){
        return true
      }
      if(!this.record.options.dynamicVisibleValue){
        return true
      }
      let fstr = this.record.options.dynamicVisibleValue;
      // 打开了开关 这里获取函数内容
      const func =  dynamicFun(fstr , this.models)
      return func
    },
    recordRules(){
      // 2020-07-29 如果是预览 不需要规则验证
      if(this.isDragPanel || this.renderPreview || !this.record.rules || this.record.rules.length == 0) {
        return []
      }
      let rules =this.record.rules

      // 2020-09-12 判断是否必填 ,非必填得没有值得时候不校验

      const isRequire = rules[0].required

      // 循环判断
      for(var i = 0 ; i < rules.length ; i++){
        const t = rules[i]
        
        // if(t.required != undefined) {

        // }
        // t.required = isRequire
        // 2021-08-12 lyf 针对必填而且是文本输入的组件增加纯空格校验
        if(isRequire && (this.record.type == 'input' || this.record.type == 'textarea') ){
          t.whitespace = true
        }

        if(t.vtype == 1 || t.vtype == 2){ 
          t.validator =  this.validatorFiled 
        } 

        // 判断trigger
        if(!t.trigger) {
          t.trigger =  ['change','blur']
        }
      }
     
      //2020-12-08 lyf 如果是batch类型的话增加一个内部校验的标记
      // 2022-11-08 lyf batch走内部表单组件校验 此处不需要了
      // if(this.record.type == 'batch') {
      //   rules.push({vtype: 3,trigger:['change','blur'] ,validator: this.validatorFiled ,message: '待完善'  })
      // }  

      
      return rules 

    },
    // 2022-10-06 lyf 判断组件是否必填 动态
    recordRequired() {
      if(this.formConfig.hideRequiredMark || !this.formConfig.syncLabelRequired) {
        return false
      }
       

      let rules =this.record.rules

      if(!rules || rules.length == 0) return false
      // 2020-09-12 判断是否必填 ,非必填得没有值得时候不校验

      const isRequire = rules[0].required
      if(isRequire) {
        return true 
      }

      const value = this.models[this.record.model]
      // 循环判断
      for(var i = 0 ; i < rules.length ; i++){
        const rule = rules[i]

 
        if(rule.vtype == 1) {
            // 正则
          if(!rule.pattern) { 
            continue
          }
          // 正则匹配
          const patt1 = new RegExp(rule.pattern);
            //document.write(patt1.test("free"));

          if(!patt1.test(value)) {
            return true
          }  
 
        } else if(rule.vtype == 2) {
          // 表达式
          const script = rule.script

          // 打开了开关 这里获取函数内容
         const fvalue =  dynamicFun(script , this.models)
          
          if (!fvalue) {
            return true
          } 
        } 
      }

      return false
    }
  },
  methods: {
    validatorFiled (rule , value , callback) {
      
        // 判断rule类型 
        if(rule.vtype == 1) {
          // 正则
          if(!rule.pattern) {
            callback()
            return
          }
          // 正则匹配
          var patt1=new RegExp(rule.pattern);
          //document.write(patt1.test("free"));

          if(patt1.test(value)) {
            callback() 
           } else {
            callback(new Error(rule.message)) 
           }

           return
        } else if(rule.vtype == 2) {
          // 表达式
          const script = rule.script

          // 打开了开关 这里获取函数内容
         const fvalue =  dynamicFun(script , this.models)
          
          if (!fvalue) {
            callback(new Error(rule.message))
          } else {
            callback()
          }


        } else {
           callback()
        }
        // else if(rule.vtype == 3) {
        //   // 2020-12-08 lyf 表单内部校验
        //   if(!this.$refs.TableBatch) {
        //      callback()

        //   } else {
        //     const v = this.$refs.TableBatch.validatorRule()
        //     if(v) {
        //        callback()
        //      } else {
        //         callback(new Error(rule.message))
        //     }

        //   }
          
        // }

       
      } ,
    forceUpdate(){ 
       this.$emit("forceUpdate" );
    },
    handleChange(value, key) {
      // change事件
      this.$emit("change", value, key);
 
    },
    // 按钮点击事件 2021-02-17 lyf
    buttonClick() { 
      if(this.record.type != 'button' || !this.record.options.dynamicFun) {
        return 
      } 
      // 有回调函数 去执行
      dynamicFun(this.record.options.dynamicFun , this.models)

    }
  },
  created () {
    // 如果已经赋值了 则不管默认值了
    // if(this.models[this.record.model]) return ;
    // const defaultValue = this.record.options.defaultValue
    // if(defaultValue) {
    //   this.$set(this.models, this.record.model, defaultValue)
    // } 
  },
};
</script>