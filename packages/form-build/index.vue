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
    
    </el-form>
  
</template>
<script> 
 
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
  watch: {
    formTemplate: {
      handler (val, oldVal) {
        this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)
         
      },
      deep: true
    }
    
  },
  components: {
     
  },
  methods: { 
    
  },
  created() {  
    
 
  }
};
</script>
