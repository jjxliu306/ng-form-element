<!--
 传入record数据，通过判断record.type，来渲染对应的组件 
 -->
<template>
 
      
  <!-- 文本 -->
  <div v-if="record.type === 'text'" :style="{ textAlign: record.options.textAlign }">  
    <span>{{record.label}}</span>
  </div>
  <!-- html -->
  <div   v-else-if="record.type === 'html'"  v-html="record.options.defaultValue" > 
  </div>
 
  <el-form-item v-else-if="
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
                    'cascader'
                  ].includes(record.type) || customList.includes(record.type) )  && !(record.type == 'select' && renderPreview &&  record.options.previewHidden )
              " 
              :rules="recordRules"
              :prop="parentModel + '.' + index + '.' + record.model" 
              label-width="0px"
              class="table-item"
            >   

        <BaseItem
          :models="domains" 
          :record="record"   
          :renderPreview="renderPreview"  
          >
    </BaseItem> 
  </el-form-item> 
</template>
<script> 
import { dynamicFun} from '../../utils/index'
import BaseItem from '../base'
 
export default {
  name: "TableItem",
  props: {
     record: {
      type: Object,
      required : true
    }, 
    domains: {
      type: Object,
      required : true
    },  
      // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    },
    index: {
      type: Number
    },
    models: {
      type: Object
    },
    parentModel: {
      type: String,
      required : true
    }
  },  
  computed: {
    customList() {
      if (this.$GSFORM && this.$GSFORM.customComponents) {
        const customComponents_ = this.$GSFORM.customComponents
        return customComponents_.map(item => item.type);
      } else {
        return [];
      }
    },
    recordRules() {
       // 2020-07-29 如果是预览 不需要规则验证
      if(this.renderPreview || !this.record.rules || this.record.rules.length == 0) {
        return []
      }
      
        let rules =this.record.rules

        // 2020-09-12 判断是否必填 ,非必填得没有值得时候不校验

        const isRequire = rules[0].required

        // 循环判断
        for(var i = 0 ; i < rules.length ; i++){
          const t = rules[i]
          
          t.required = isRequire
          // 2021-08-12 lyf 针对必填而且是文本输入的组件增加纯空格校验
          if(t.required && (this.record.type == 'input' || this.record.type == 'textarea') ){
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
       

      
      return rules 
    }
  },
  components: {
     BaseItem
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
         const fvalue =  dynamicFun(script , this.models , '$', this.domains , '$row')
          
          if (!fvalue) {
            callback(new Error(rule.message))
          } else {
            callback()
          }


        } else {
           callback()
        }
      } 
  }
};
</script>
 