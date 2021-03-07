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
    }
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
            
            resolve(this.models); 
          })
 
      });
    },
    // 初始化验证规则
    initRules(weights , key){
      if(!weights) return
 

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
    this.$nextTick(() => {
      const list = this.formTemplate.list
      this.initRules(list)   

      if(!window.customComponents && this.customComponents && this.customComponents.length > 0) {
        window.customComponents = this.customComponents
      } 

    });
  }
};
</script>
