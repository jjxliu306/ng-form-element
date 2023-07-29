<!--
表单属性设置面板组件
-->
<template>
  <div class="form-properties"> 
    <div class="properties-body">
      <el-form label-position="left" size="mini"  >
        <el-form-item :label="t('ngform.properties.label_position')">
          <el-radio-group v-model="config.labelPosition">
            <el-radio-button label="left">{{t('ngform.properties.left')}}</el-radio-button>
            <el-radio-button label="right">{{t('ngform.properties.right')}}</el-radio-button>
            <el-radio-button label="top">{{t('ngform.properties.top')}}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-divider></el-divider>

        <el-form-item :label="t('ngform.properties.label_width')">
          <el-input-number v-model="config.labelWidth" :min="0" :max="200" :step="10"></el-input-number>
        </el-form-item>
        <el-form-item  :label="t('ngform.properties.label_suffix')">
          <el-input v-model="config.labelSuffix" ></el-input>
        </el-form-item>
        <el-divider></el-divider>

        <el-form-item  :label="t('ngform.properties.size')">
          <el-radio-group v-model="config.size">
            <el-radio-button label="medium">medium</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
            <el-radio-button label="mini">mini</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item :label="t('ngform.properties.validate_prompt')" :title="t('ngform.properties.validate_prompt_tip')"> 
          <el-switch
            v-model="config.hideRequiredMark"
            :active-text="t('ngform.properties.open')"
            :inactive-value="true"
            :active-value="false"
            :inactive-text="t('ngform.properties.close')">
          </el-switch> 
        </el-form-item> 
        <el-form-item :label="t('ngform.properties.dynamics_validate_label')" v-if="!config.hideRequiredMark" :title="t('ngform.properties.dynamics_validate_label_tip')"> 
          <el-switch
            v-model="config.syncLabelRequired"
            :active-text="t('ngform.properties.open')"
            :inactive-value="false"
            :active-value="true"
            :inactive-text="t('ngform.properties.close')">
          </el-switch> 
        </el-form-item> 
        <el-form-item :label="t('ngform.properties.output_hidden')" :title="t('ngform.properties.output_hidden_tip')"> 
          <el-switch
            v-model="config.outputHidden"
            :active-text="t('ngform.properties.open')" 
           :inactive-text="t('ngform.properties.close')">
          </el-switch> 
        </el-form-item>
        <el-divider></el-divider>

        <el-form-item  :label="t('ngform.properties.form_style')">
          <el-input  type="textarea" v-model="config.customStyle" />
        </el-form-item>
        <el-divider></el-divider>

        <slot name="form-extend-properties"></slot>
      
        <el-form-item  :label="t('ngform.properties.tip')"> 
          {{t('ngform.properties.result_tip')}}
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import LocalMixin from '../../locale/mixin.js' 
export default {
  mixins: [LocalMixin],
  name: "form-properties", 
  props: {
    config: {
      type: Object,
      required: true
    } 
  },
  methods: {

  }
};
</script> 
<style>
.form-properties .properties-body {
  padding: 10px;
}

</style>
<!-- <style lang="scss">
.form-properties {
    .properties-body {
        padding: 10px;
    }
}
</style> -->