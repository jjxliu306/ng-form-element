<!--
传入record数据，通过判断record.type，来渲染对应的组件
  -->
<template>
  <el-form-item
    v-if="
      !(record.options.hidden === true) &&
        [
          'input',
          'textarea',
          'date',
          'time',
          'number',
          'radio',
          'checkbox',
          'select',
          'rate',
          'switch',
          'slider',
          'uploadImg',
          'uploadFile',
          'cascader'
        ].includes(record.type) && dynamicVisibleItem && !(record.type == 'select' && renderPreview &&  record.options.previewHidden )
    "
    :label="formConfig.labelWidth > 0 ? record.label : null " 
    :rules="recordRules"
    :prop="itemProp ? itemProp : (recordRules && recordRules.length > 0 ? record.model : null)"
  >   
 
    <BaseItem 
      :models="models"  
      :formConfig="formConfig"
      :renderPreview="renderPreview"
      :data="data"
      :record="record"
      :disabled="disabled || record.options.disabled"
      @forceUpdate="forceUpdate"
      /> 
  
  
  </el-form-item>
  <!-- 可隐藏label -->
 
  <el-form-item
    v-else-if="(record.type === 'batch' || record.type === 'editor') && dynamicVisibleItem"
    :label="!record.options.showLabel ? '' : record.label" :label-width="record.options.showLabel ? null : '0px'"
  >
    <!-- 动态表格 -->
    <TableBatch
      v-model="models[record.model]"
      v-if="record.type === 'batch'"
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
  <!-- html -->
  <div
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
import BaseItem from './BaseItem' 
 
import {dynamicFun} from '../utils'

export default {
  name: "form-item", 
  data(){  
    return{
      checkList: [] ,
 
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
    disabled: {
      type: Boolean,
      default: false
    },
    itemProp: {
      type: String,
      default: null
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
    },
    data: {// 整个事项实体
      type: Object,
      default: () => ({})
    },
  },
  components: {
     TableBatch,BaseItem 
  },
  watch: {
    checkList:{
      handler(val, oldVal){
          // 默认所有val 全部补一个id 标明顺序
        //this.models[this.record.model] = val
        this.$set(this.models , this.record.model , val)
      },
      deep:true
    }
  },
  computed: {
    customList() {
      if (window.$customComponentList) {
        return window.$customComponentList.map(item => item.type);
      } else {
        return [];
      }
    },
    showRequiredMark(){
      //##############
      const fstr = this.record.options.showRequiredMarkScript
      if(!fstr){
        return false
      }

      const mark = dynamicFun(fstr , this.models) 
      //console.log('mark' ,Fn,this.record.key ,mark)

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
        
        t.required = isRequire
        if(t.vtype == 1 || t.vtype == 2){ 
          t.validator =  this.validatorFiled 
        } 

        // 判断trigger
        if(!t.trigger) {
          t.trigger =  ['change','blur']
        }
      }
     
      //2020-12-08 lyf 如果是batch类型的话增加一个内部校验的标记

      if(this.record.type == 'batch') {
        rules.push({vtype: 3,trigger:['change','blur'] ,validator: this.validatorFiled ,message: '待完善'  })
      }  

      
      return rules 

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


        }else if(rule.vtype == 3) {
          // 2020-12-08 lyf 表单内部校验
          if(!this.$refs.TableBatch) {
             callback()

          } else {
            const v = this.$refs.TableBatch.validatorRule()
            if(v) {
               callback()
             } else {
                callback(new Error(rule.message))
            }

          }
          
        }

       
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
 
  }
};
</script>
<style   scoped>
.slider-box {
  display: flex;
}
.slider-box > .slider {
  flex: 1;
  margin-right: 16px;
}
.slider-box > .number {
  width: 70px;
}
</style>
