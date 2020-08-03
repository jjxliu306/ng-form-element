<template> 
    <el-container class="form-design">
      <el-aside width="260px">
          <DragItem> </DragItem> 
      </el-aside>
      <el-main>
        <el-row class="form-design" :gutter="20"> 
            <el-col :span="18" class="height-all">
              <el-card  header="表单面板"  class="box-card form-contains"> 
                <div slot="header" class="clearfix">
                    <span class="el-card__header">表单面板</span>
                    <span style="float: right;">
                      <el-button   type="text" size="medium" icon="el-icon-delete" @click="handleClear">清空</el-button>
                      <el-button  type="text" size="medium" icon="el-icon-view" @click="handlePreview">预览</el-button>
                       <el-button  type="text" size="medium" icon="el-icon-view" @click="handleRender">渲染</el-button>
                      <el-button  type="text" size="medium" icon="el-icon-upload" @click="handleImport">导入</el-button>
                      <el-button  type="text" size="medium" icon="el-icon-tickets" @click="handleGenerateJson">生成json</el-button>
                    </span> 
                </div> 
                <DragPanel :data="data" @changeSelectItem="changeSelectItem"> 
               </DragPanel> 
              </el-card> 
            </el-col>
            <el-col :span="6" class="height-all">
              <el-card  header="属性配置"  class="box-card form-properties"> 
                <Properties :data="data" :selectItem="selectItem"> </Properties>
              </el-card>
            </el-col>
        </el-row>
 
      </el-main>

      <Preview  v-if="previewVisible" ref="preview" />
       
      <renderPreview ref="renderPreview" v-if="renderVisisble"/>            
      <el-dialog
        title="模板数据" 
        :visible.sync="modelVisible"
        :append-to-body="true"
        style="top:20px;"
        width="850px"
      >
        <previewCode :editorJson="modelJson" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="modelVisible = false">取 消</el-button>
          <el-button type="primary" @click="modelVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog
        title="模板数据" 
        :visible.sync="importVisible"
        :append-to-body="true"
        style="top:20px;"
        width="850px"
      >

        <el-input type="textarea" :rows="3" v-model="importText">

        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="importVisible = false">取 消</el-button>
          <el-button type="primary" @click="importModel">确 定</el-button>
        </span>
      </el-dialog>

    </el-container> 
</template>

<script>
import DragItem from './form-item/drag-item/index'
import DragPanel from './drag-panel/index' 
import Properties from './properties/index'

import Preview  from './preview/index'
import previewCode from "./preview/preview-code"; 


import renderPreview from "./render/preview";

export default {
  name: 'App',
  data(){
    return {
      previewVisible: false , 
      modelJson: {},

      modelVisible: false,
      importVisible: false,
      importText: '' ,

      renderVisisble: false,
      // 基础配置
      data: {
        list: [],
        config: {
          labelPosition: "left",
          labelWidth: 100, 
          size: 'mini',
          hideRequiredMark: true ,
          customStyle: ""
        }
      },

      previewOptions: {
        width: 850
      },
      selectItem: {} // 选中的元素
    }
  },
  components: {
    DragItem,DragPanel,Properties,Preview,previewCode,renderPreview
  },
  methods: {
    changeSelectItem(item) {
      this.selectItem = item
    },
    handlePreview () { 

          this.previewVisible = true
          const this_ = this
          this.$nextTick(() => {
            this_.$refs.preview.jsonData = this_.data;
            this_.$refs.preview.previewWidth = this_.previewOptions.width;
            this_.$refs.preview.visible = true;
          }) 
         
    },
    handleClear () {
       this.$confirm('清空后无法恢复,请确认操作?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.data.list = []
        }) 
     
    },
    // 导入
    handleImport(){
      this.importVisible = true 
      this.importText = ''
    },
    importModel(){
      if(!this.importText) {
        alert('文本不能为空')
        return
      }

      const importData = JSON.parse(this.importText)
      if(importData){
        this.data = importData
      }

      this.importVisible = false


    },
    handleRender(){
     
      this.renderVisisble = true ;
      this.$nextTick(() => {
        this.$refs.renderPreview.init(this.data)
      })
    },
    handleGenerateJson () { 

      this.modelJson =  JSON.stringify(this.data, null, "\t"); //JSON.stringify(this.data)
      this.modelVisible = true
 
    }
  }
}
</script>

<style> 

.form-design {
  height: 100%;
  width: 100%;
}
.form-properties {
  height: 100%;
  width: 100%; 
}

.height-all {
   height: 100%;
}
 
</style>
