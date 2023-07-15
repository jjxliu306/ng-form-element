<template>
  <el-dialog
    :title="t('ngform.header.preview')"
    :visible.sync="visible" 
    style="top:20px;"
    :append-to-body="true"
    class="design-preview" 
    :close-on-click-modal="false"
    :destroy-on-close="true"
    width="800px"
  >  
    <div class="item-main">    
      <FormBuild :key="key" :preview="preview" :formTemplate="formTemplate" :models="models" :config="ngConfig" ref="formBuild" :customComponents="customComponents" /> 
    </div> 
    <span slot="footer" class="dialog-footer">
      
      <el-button size="mini" @click="handleCancel">{{t('ngform.cancel')}}</el-button>
      <el-button type="primary" size="mini" @click="handleValidator">{{t('ngform.validator')}}</el-button>  
      <el-button type="primary" size="mini" @click="handleGetData">{{t('ngform.header.get_data')}}</el-button>  
      <el-button type="primary" size="mini" @click="handleView">
        {{preview ?  t('ngform.header.write_mode') :  t('ngform.header.read_mode')}}
      </el-button>  
    </span> 


    <el-dialog
      :title="t('ngform.header.get_data')"
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
import LocalMixin from '../../locale/mixin.js' 
export default {
  name: "ng-form-preview",
  mixins: [LocalMixin],
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
  inject: {
    // 自定义组件
    customComponents: {
      from: 'customC',
      default: ()=>[]
    }, 
    ngConfig: {
      from: 'ngConfig',
      default: ()=> {return {}}
    },
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
      const models_ = this.$refs.formBuild.getData(true)
      
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
