<!--
表单属性设置面板组件
-->
<template>
  <div class="form-properties"> 
    <div class="properties-body">
      <el-form label-position="left" size="mini"  >
        <el-form-item label="标签对齐方式">
          <el-radio-group v-model="config.labelPosition">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-divider></el-divider>

        <el-form-item label="标签宽度">
          <el-input-number v-model="config.labelWidth" :min="0" :max="200" :step="10"></el-input-number>
        </el-form-item>
        <el-form-item label="标签后缀">
          <el-input v-model="config.labelSuffix" ></el-input>
        </el-form-item>
        <el-divider></el-divider>

        <el-form-item label="组件尺寸">
          <el-radio-group v-model="config.size">
            <el-radio-button label="medium">medium</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
            <el-radio-button label="mini">mini</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="校验字段提示" title="是否打开element-ui中hide-required-asterisk开关，即 是否隐藏必填字段的标签旁边的红色星号"> 
          <el-switch
            v-model="config.hideRequiredMark"
            active-text="打开"
            :inactive-value="true"
            :active-value="false"
            inactive-text="关闭">
          </el-switch> 
        </el-form-item> 
        <el-form-item label="动态校验标签" v-if="!config.hideRequiredMark" title="此开关在打开hide-required-asterisk时，是否将标签旁边的红色星号跟随组件的校验规则一起显示"> 
          <el-switch
            v-model="config.syncLabelRequired"
            active-text="打开"
            :inactive-value="false"
            :active-value="true"
            inactive-text="关闭">
          </el-switch> 
        </el-form-item> 
        <el-form-item label="输出隐藏组件值" title="当存在动态隐藏的组件时，此开关决定隐藏的组件中的值是否将被忽略删除"> 
          <el-switch
            v-model="config.outputHidden"
            active-text="打开" 
            inactive-text="关闭">
          </el-switch> 
        </el-form-item>
        <el-divider></el-divider>

        <el-form-item label="表单CSS">
          <el-input  type="textarea" v-model="config.customStyle" />
        </el-form-item>
        <el-divider></el-divider>

        <slot name="form-extend-properties"></slot>
      
        <el-form-item label="提示">
          实际预览效果请点击预览查看
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
 
export default {
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
<style lang="scss">
.form-properties {
    .properties-body {
        padding: 10px;
    }
}
</style>