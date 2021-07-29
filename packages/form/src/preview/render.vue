<!-- 带数据预览
所有要显示的数据都应该是值显示
 -->
<template>
  <el-dialog
    title="预览"
    :visible.sync="visible" 
    style="top:20px;" 
    :append-to-body="true" 
    :width="`${previewWidth}px`"
  > 

   <el-tabs v-model="active" type="card" class="form-render-preview form-design" >
    <el-tab-pane label="模板" name="template">
      <el-input style="height: 100%;" :rows="20" type="textarea" v-model="templdateText" @change="changeTemplate"> 
      </el-input> 
    </el-tab-pane>
    <el-tab-pane label="数据" name="second">
      <el-input style="height: 100%;" :rows="20" type="textarea" v-model="valueText" @change="changeValue"> 
      </el-input>  
    </el-tab-pane>
     <el-tab-pane label="表单" name="third"> 
      <FormBuild  :formTemplate="formTemplate" :models="models"   ref="buildPreview" v-if="buildVisible" />  
    </el-tab-pane>
    <el-tab-pane label="渲染" name="four">
      <FormBuild style="height: 100%;" :formTemplate="formTemplate" :models="models" :renderPreview="true" ref="formPreview" v-if="formVisible" /> 
    </el-tab-pane> 
  </el-tabs>
 
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取 消</el-button> 
      <el-button size="mini" v-if="active == 'third'" type="primary" @click="syncModel" >同 步</el-button>
      <el-button size="mini" type="primary" @click="visible = false">确 定</el-button>
    </span>
 
  </el-dialog>
</template>
<script> 
import FormBuild from '../form-build/index' 
export default {
  name: "ng-form-render",
  data() {
    return {
      templdateText: '' ,
      valueText: '',

      active: 'template',
      visible: false, 
      formVisible: false,
      buildVisible: false,
      previewWidth: 850,
      formTemplate: {},
      models: {}
    };
  },
  components: {
    FormBuild
  },
  methods: { 
    init(template , value) { 
      
      this.visible = true
      this.$nextTick(() => {
        if(template) { 
          this.formTemplate = template
          this.templdateText =  JSON.stringify(this.formTemplate, null, "\t");  
        } else {
          this.formTemplate = {}
          this.templdateText =  ''
        }

       

        if(value){
          this.models = value 
          this.valueText =  JSON.stringify(this.models, null, "\t");  
        }

        if(this.models){
           
          this.handlerFormRender()
        }
      })
       
    },
    changeTemplate(v){
      this.formTemplate = JSON.parse(v)
    },
    changeValue(v){ 
      this.models = JSON.parse(v)

      this.handlerFormRender()
    },
    handlerFormRender(){
      this.formVisible = false 
      this.buildVisible = false
      const model = this.models 
      this.$nextTick(() => {
        this.formVisible = true 
        this.buildVisible = true
        if(model && this.$refs.formPreview){
          this.$nextTick(() => {
            this.$refs.formPreview.setData(model)
            this.$refs.buildPreview.setData(model)
          })
        } 
      }) 
    },
    // 同步模型数据 根据填写的表单 
    syncModel(){
     
      this.$refs.buildPreview.getData()
        .then(res => { 
          this.$nextTick(() => {
            this.models = res ;
            this.valueText = JSON.stringify(res, null, "\t"); 
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