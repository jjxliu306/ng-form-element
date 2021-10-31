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
      <FormBuild  :custom-components="customComponents" :formTemplate="jsonData" :models="models" ref="formBuild" />
      <PreviewCode ref="previewCode" />
      <renderPreview ref="renderPreview" v-if="renderVisisble"/> 
    </div> 
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取 消</el-button>
      <el-button size="mini" @click="handleGetData">获取数据</el-button> 
      <el-button size="mini" @click="handleRender">渲染</el-button>
      <el-button size="mini" @click="handleValidator">验证</el-button>
      <el-button  size="mini" type="primary" @click="visible = false">确 定</el-button>
    </span>
 
  </el-dialog>
</template>
<script> 
import FormBuild from '../form-build/index'
import PreviewCode from "./preview-code";

import renderPreview from "./render";
export default {
  name: "ng-form-preview",
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
    PreviewCode,FormBuild,renderPreview
  },
  inject: {
      customComponents: {
        from: 'customC',
        default: ()=>[]
      },
  },
  methods: {
    
    handleGetData() {
      this.$refs.formBuild.getData()
        .then(res => { 

          this.$refs.previewCode.jsonData = res;
          this.$refs.previewCode.visible = true;
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
