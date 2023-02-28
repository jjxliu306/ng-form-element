<template>
  <el-dialog
    title="预览"
    :visible.sync="visible" 
    style="top:20px;"
    :append-to-body="true"
    class="design-preview" 
    :destroy-on-close="true"
    width="800px"
  > 

    <div class="item-main">  
      models:: {{models}}
      <FormBuild :key="key" :formTemplate="formTemplate" :models="models" ref="formBuild" /> 
    </div> 
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取 消</el-button> 
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
