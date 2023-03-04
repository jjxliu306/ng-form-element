<template>
  <el-dialog
    title="预览"
    :visible.sync="visible" 
    style="top:20px;"
    :append-to-body="true"
    class="design-preview" 
    :close-on-click-modal="false"
    :destroy-on-close="true"
    width="800px"
  >  models:: {{models}}
    <div class="item-main">   
      <FormBuild :key="key" :formTemplate="formTemplate" :models="models" ref="formBuild" /> 
    </div> 
    <span slot="footer" class="dialog-footer">
      
      <el-button size="mini" @click="visible = false">取消</el-button>
      <el-button type="primary" size="mini" @click="handleValidator">效验</el-button>  
    </span> 
  </el-dialog>
</template>
<script> 
import FormBuild from '../build.vue' 
 
export default {
  name: "ng-form-preview",
  data() {
    return {
      visible: false,
      renderVisisble: false,
      previewWidth: 850,
      models:{},
      formTemplate: {},
      key: '1'
    };
  },
  components: {
    FormBuild
  }, 
  methods: {
    init(data) {
      
      this.formTemplate = data
      this.models = {}
      this.key = 'key' + new Date().getTime()
      this.visible = true
      // 重置表单
      this.$nextTick(()=>{
        this.$refs.formBuild.reset()
      }) 
     
    },
    handleGetData() {
      this.$refs.formBuild.getData()
        .then(res => { 
          this.$refs.previewCode.init(res) 
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    handleValidator(){
      console.log("111") 
       this.$refs.formBuild.validate() 
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
