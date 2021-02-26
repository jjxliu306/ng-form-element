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
      <buildBlocks
        ref="buildBlocks"
        @handleReset="reset"
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
    </el-form>
  
</template>
<script>
 
import buildBlocks from "./build-block";  
export default {
  name: "VueDragFormBuild",
  data() {
    return {
      //locale: zhCN,
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
    } 
  },
  components: {
    buildBlocks
  },
  methods: { 
    reset() {
      // 重置表单
      this.$refs.form.resetFields();
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
/*
      const this_ = this  
       
      weights.forEach(t=>{
        if(t.type == 'batch'){
          // const list = t.list 
          // if(list && list.length > 0){
          //   console.log('role parent , ' ,t)
          //   this_.initRules(list , t.model)
          // }

          return
        } else if(t.type == 'grid'){
          const columns = t.columns
          columns.forEach(c=>{
            const list = c.list 
            if(list && list.length > 0){
              this_.initRules(list)
            }
          })
          return
        } else if(t.type == 'table'){
          const trs = t.trs 
          trs.forEach(t=>{
            const tds = t.tds
            tds.forEach(d=>{
              const list = d.list 
              if(list && list.length > 0){
                this_.initRules(list)
              }
            })
          })


        }

        const r = t.rules
        if(r && r.length > 0) {
          if(key) {
            const modelRule = {}
            modelRule[t.model] = r 
            //keymodel[key] = r 
            this_.rules[key] = modelRule
          } else{
            this_.rules[t.model] = r
          }
          
        }
      })
*/
      

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
  
      //this.setData(this.defaultValue);
    });
  }
};
</script>
