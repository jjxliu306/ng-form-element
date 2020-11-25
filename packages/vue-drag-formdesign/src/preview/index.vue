<template>
  <el-dialog
    title="预览"
    :visible.sync="visible" 
    style="top:20px;"
    :append-to-body="true"
    class="design-preview"
    :destroy-on-close="true"
    :width="`${previewWidth}px`"
  > 

    <div class="item-main">
      <FormBuild :formTemplate="jsonData" :models="models" ref="formBuild" />
      <jsonModel ref="jsonModel" />
      <renderPreview ref="renderPreview" v-if="renderVisisble"/> 
    </div> 
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button @click="handleGetData">获取数据</el-button> 
      <el-button @click="handleRender">渲染</el-button>
       <el-button @click="handleValidator">验证</el-button>
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
      models:{},
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

          this.$refs.jsonModel.jsonData = res;
          this.$refs.jsonModel.visible = true;
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    handleValidator(){
       this.$refs.formBuild.getData()
        .then(res => { 
  
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    handleRender(){
     
      this.renderVisisble = true ;
      this.$refs.formBuild.getData()
        .then(res => { 
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
<style lang="scss">
.design-preview {
  .item-main {
    height: calc(100vh - 140px);
    padding: 0 20px 0 20px;
    overflow: auto;
  }
}





</style>
