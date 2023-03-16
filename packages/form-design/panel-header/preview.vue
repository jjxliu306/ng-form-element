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
  >  
    <div class="item-main">   
      <FormBuild :key="key" :preview="preview" :formTemplate="formTemplate" :models="models" ref="formBuild" /> 
    </div> 
    <span slot="footer" class="dialog-footer">
      
      <el-button size="mini" @click="handleCancel">取消</el-button>
      <el-button type="primary" size="mini" @click="handleValidator">效验</el-button>  
      <el-button type="primary" size="mini" @click="handleGetData">获取数据</el-button>  
      <el-button type="primary" size="mini" @click="handleView">
        {{preview ?  '填报模式': '查看模式'}}
      </el-button>  
    </span> 


    <el-dialog
      title="数据查看"
      :visible.sync="dataVisible" 
      style="top:20px;"
      :append-to-body="true"
      class="data-preview" 
      :close-on-click-modal="false"
      :destroy-on-close="true"
      width="600px"
    >  
    <div class="json-box"> 
      <el-input style="min-height:300px;height: 300px;max-height: 290px;overflow: auto;" autosize  readonly ref="dataJson" type="textarea" :value="dataJson"> 
      </el-input> 
    </div> 
  </el-dialog>

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
      key: '1',

      preview: false,

      dataVisible: false,
      dataJson: ''
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
      const models_ = this.$refs.formBuild.getData(false)
      
      this.dataJson = JSON.stringify(models_, null, "\t")

      this.dataVisible = true 
    },
    handleValidator(){ 
       this.$refs.formBuild.validate() 
    },
    handleView(){ 
      this.preview = !this.preview 
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
