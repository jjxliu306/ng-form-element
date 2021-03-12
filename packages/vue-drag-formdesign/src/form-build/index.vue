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
    > 
    <template v-if="visible">
      <buildBlocks
        ref="buildBlocks"
        @handleReset="reset"
        @forceUpdate="forceUpdate"
        v-for="(record, index) in formTemplate.list"
        :renderPreview="renderPreview"
        :record="record"
        :models.sync="models" 
        :data="data"
        :config="config"
        :disabled="disabled"
        :formConfig="formTemplate.config"
        :key="index"
        @change="handleChange"
      />
    </template>
    </el-form>
  
</template>
<script>
 
import buildBlocks from "./build-block";  
export default {
  name: "VueDragFormBuild",
  data() {
    return {
      randomId: '' ,
      visible: true , 
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
    defaultValue: {
      type: Object,
      default: () => ({})
    },
    // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    },
    customComponents: {
      type: Array,
      default: ()=>[]
    }, 
  },
  components: {
    buildBlocks
  },
  methods: { 
    reset() {
      // 重置表单
      this.$refs.form.resetFields();

      this.models = {} 

    },
    forceUpdate(){ 
      this.visible = false
      this.$nextTick(()=>{  
        this.visible = true
      }) 
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
    // 初始化验证规则
    initRules(weights , key){
      if(!weights) return
 

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
    // 初始化表单数据 默认值或者填充值
    initData(){

    }, 
    setData(json) { 
      this.models = json
 
    }, 
    handleChange(value, key) {
      // 触发change事件
      this.$emit("change", value, key);
    }
  },
  mounted() {  
    this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)
    this.$nextTick(() => {
      const list = this.formTemplate.list
      this.initRules(list)   

      if(!window.customComponents && this.customComponents && this.customComponents.length > 0) {
        window.customComponents = this.customComponents
      } 

      if(this.config.httpConfig && !window.httpConfig) {
        window.httpConfig = this.config.httpConfig
      }
      

    });
  }
};
</script>
