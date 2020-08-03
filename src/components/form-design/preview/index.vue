<template>
  <el-dialog
    title="预览"
    :visible.sync="visible" 
    style="top:20px;"
    :destroy-on-close="true"
    :width="`${previewWidth}px`"
  > 

    <FormBuild :formTemplate="jsonData" ref="formBuild" />
    <jsonModel ref="jsonModel" />
    <renderPreview ref="renderPreview" v-if="renderVisisble"/>

    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button @click="handleGetData">获取数据</el-button> 
      <el-button @click="handleRender">渲染</el-button>
      <el-button type="primary" @click="visible = false">确 定</el-button>
    </span>
 
  </el-dialog>
</template>
<script> 
import FormBuild from '../form-build/index'
import jsonModel from "./json-model";

import renderPreview from "../render/preview";
export default {
  name: "FormPreview",
  data() {
    return {
      visible: false,
      renderVisisble: false,
      previewWidth: 850,
      jsonData: {}
    };
  },
  components: {
    jsonModel,FormBuild,renderPreview
  },
  methods: {
    
    handleGetData() {
      this.$refs.formBuild.getData()
        .then(res => {
          console.log(res, "获取数据成功");

          this.$refs.jsonModel.jsonData = res;
          this.$refs.jsonModel.visible = true;
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    handleRender(){
     
      this.renderVisisble = true ;
      this.$refs.formBuild.getData()
        .then(res => {
          console.log(res, "获取数据成功");
          this.$nextTick(() => {
            this.$refs.renderPreview.init(this.jsonData , res)
          })  
      })
      .catch(err => {
          console.log(err, "获取数据失败");
      });
     
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
