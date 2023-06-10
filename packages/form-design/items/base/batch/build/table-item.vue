<!--
 传入record数据，通过判断record.type，来渲染对应的组件 
 -->
<template>
<div> 
  <!-- 文本 -->
  <!-- <div v-if="record.type === 'text'" :style="{ textAlign: record.options.textAlign }">  
    <span>{{record.label}}</span>
  </div> -->
  <!-- html -->
 <!--  <div   v-else-if="record.type === 'html'"  v-html="record.options.defaultValue" > 
  </div>   -->
    <ng-form-item
      
      :disabled="disabled"
      :preview="preview"
      :models="domains"   
      :record="record"
      :show-label="false"
      :prop-prepend="parentModel + '.' + index + '.' "  
      @focus="handleFocus"
      @blur="handleBlur"
    />    
</div>
</template>
<script> 
import { dynamicFun} from '../../../../../utils/index' 
 
export default {
  name: "TableItem",
  props: {
     record: {
      type: Object,
      required : true
    },   
      // 是否预览结果表单
    preview: {
      type: Boolean ,
      default: false
    },
    index: {
      type: Number
    },
    models: {
      type: Object
    },
    domains: {
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
      if(this.preview || !this.record.rules || this.record.rules.length == 0) {
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
  methods: {
     
  }
};
</script>
 