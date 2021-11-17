<template>
  
    <el-form
      v-if="
        typeof formTemplate.list !== 'undefined' && typeof formTemplate.config !== 'undefined'
      "
      class="form-build form-design"
      :label-position="formTemplate.config.labelPosition"
      :hide-required-asterisk="formTemplate.config.hideRequiredMark" 
      :label-width="formTemplate.config.labelWidth + 'px'" 
      ref="form"
      :rules="rules"
      :model="models" 
      :style="formTemplate.config.customStyle"
      :size="formTemplate.config.size"
      :id="randomId"
      :key="randomId"
    >  
    <template >
      <ng-form-build-item
        ref="buildBlocks"
        @handleReset="reset"
        @forceUpdate="forceUpdate"
        v-for="record in formTemplate.list"
        :renderPreview="renderPreview"
        :record="record"
        :models.sync="models" 
        
        :config="config"
        :disabled="disabled"
        :formConfig="formTemplate.config"
        :key="record.model"
        @change="handleChange"
      />
    </template>
    </el-form>
  
</template>
<script>
 
import NgFormBuildItem from "./build-item";  
export default {
  name: "ng-form-build",
  data() {
    return {
      randomId: '' ,
      //visible: true , 
      form: this.$refs.form,
      //models: {},
      rules: {}
    };
  }, 
  props: {
    formTemplate: {
      type: Object,
      required: true
    },
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
    },  
    // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }, 
    customComponents: {
      type: Array,
      default: ()=>[]
    }, 
  },
  provide: function () {
    return {
     customC: this.customComponents 
    }
  },
  watch: {
    formTemplate: {
      handler (val, oldVal) {
        this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)
         
      },
      deep: true
    }
    
  },
  components: {
    NgFormBuildItem
  },
  methods: { 
    reset() {
      // 重置表单
      this.$refs.form.resetFields();

      this.models = {} 

    },
    forceUpdate(){ 
      // this.visible = false
      // this.$nextTick(()=>{  
      //   this.visible = true
      // }) 
    },
    validator(){
      return new Promise((resolve, reject) => { 

          this.$refs.form.validate((valid,values)=>{ 
            
            resolve(valid); 
          })
 
      });
    },
    getData() {
      // 提交函数，提供父级组件调用
      return new Promise((resolve, reject) => { 

          this.$refs.form.validate((valid,values)=>{ 
            if (!valid) { 
              reject('验证失败');
            } 
            this.clearHiddenValue()
            resolve(this.models); 
          })
 
      });
    }, 
    // 2021-03-12 清理没有显示的组件的数据
    clearHiddenValue() {
      // 根据组件ID 是否隐藏为准
      // 根据 formTemplate.config.outputHidden 来判断是否要输出隐藏 
      if(!this.formTemplate.config || !this.formTemplate.config.outputHidden) {
       
        const formdesign = document.getElementById(this.randomId)
       
        // 循环当前数据 非P 开头的统一不深入第二层
        for(let key in this.models) {
          if(key.indexOf('_label') > 0) continue 
          //  判断key的id是否还在
          const key_div = formdesign.querySelector('#' + key) 
          if(!key_div) {
            // 删除
            delete this.models[key]
            delete this.models[key + '_label']
          }  
        } 
      }

      
    },  
    handleChange(value, key) {
      // 触发change事件
      this.$emit("change", value, key);
    },
    // 2021-11-05 lyf 初始化每个组件的key 防止后面通过动态显隐等方式无法绑定
    initModelKey() {
      // 根据模板迭代一圈 每个组件赋予初值
      const list_ = this.formTemplate.list 
      if(!list_ || list_.length == 0) return 

      const fs_ = (n)=> {
        if(n instanceof Array) {
          n.forEach(t=> {
            fs_(t)
          })
        } else {
          if(n.model && !Object.prototype.hasOwnProperty.call(this.models, n.model)) {

            if(n.type == 'checkbox' || n.type == 'cascader' || n.type == 'batch'
              || (n.type == 'select' && n.options.multiple)) {
              // 多选
              this.$set(this.models , n.model , [])
            } else {
              // 字符串
              this.$set(this.models , n.model , null)
            }
   
          } 

          for(let i in n) {
            if(n[i] instanceof Array)
              fs_(n[i])
          }

        }
      }

      fs_(list_)
    }
  },
  created() {  
    this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)

    // if(!window.customComponents && this.customComponents && this.customComponents.length > 0) {
    //   window.customComponents = this.customComponents
    // } 

    if(this.config.httpConfig && !window.httpConfig) {
      window.httpConfig = this.config.httpConfig
    }

    this.initModelKey()
 
  }
};
</script>
