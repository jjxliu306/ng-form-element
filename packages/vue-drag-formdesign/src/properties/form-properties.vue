<!--
表单属性设置面板组件
-->
<template>
  <div class="properties-centent kk-checkbox"> 
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
        <el-divider></el-divider>

        <el-form-item label="组件尺寸">
          <el-radio-group v-model="config.size">
            <el-radio-button label="medium">medium</el-radio-button>
            <el-radio-button label="small">small</el-radio-button>
            <el-radio-button label="mini">mini</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="校验字段提示"> 
          <el-switch
            v-model="config.hideRequiredMark"
            active-text="打开"
            :inactive-value="true"
            :active-value="false"
            inactive-text="关闭">
          </el-switch> 
        </el-form-item> 
          <el-form-item label="输出隐藏组件值"> 
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
  name: "formProperties", 
  props: {
    config: {
      type: Object,
      required: true
    },
    previewOptions: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
 .change-col-box > div {
  padding: 5px;
  display: flex;
}
.change-col-box > div > label {
  text-align: right;
  padding-right: 8px;
  display: block;
  font-size: 16px;
  width: 45px;
}
</style>
