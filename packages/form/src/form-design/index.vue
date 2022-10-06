<template> 
    <el-container class="form-design">
      <el-aside width="260px">
          <slot name="drag"></slot> 
          <DragPanel @handleDragType="handleDragType" :basic-item="basicItem" :personal-item="personalItem" :layout-item="layoutItem"/>
      </el-aside>
      <el-main>
        <el-row class="form-design" :gutter="20"> 
            <el-col :span="18" class="height-all">
              <el-card  header="表单面板"  class="box-card form-contains"> 
                <div slot="header" class="clearfix">
                    <span class="el-card__header">
                      <slot name="formName">表单面板</slot>
                    </span>
                    <span style="float: right;">
                      <slot name="controlButton">
                        
                      </slot>
                      <el-button v-if="clear" type="text" size="medium" icon="el-icon-delete" @click="handleClear">清空</el-button>
                      <el-button v-if="preview" type="text" size="medium" icon="el-icon-view" @click="handlePreview">预览</el-button>
                       <el-button v-if="reder"  type="text" size="medium" icon="el-icon-view" @click="handleRender">渲染</el-button>
                      <el-button v-if="imp" type="text" size="medium" icon="el-icon-download" @click="handleImport">导入</el-button>
                      <el-button v-if="exp" type="text" size="medium" icon="el-icon-upload2" @click="handleGenerateJson">导出</el-button>
                    </span> 
                </div> 
                <DesignPanel :data="data" ref="dragPanel" :dragType="dragType" :selectForm="selectForm" @changeSelectItem="changeSelectItem"/> 
               
              </el-card> 
            </el-col>
            <el-col :span="6" class="height-all">
              <el-card  header="属性配置"  class="box-card form-properties"> 
                <Properties :data="data" :selectItem="selectItem"> 
                  <template slot="custom-properties" :selectItem="selectItem">
                        <slot name="custom-properties" :selectItem="selectItem"></slot>
                  </template>
                   <template slot="form-extend-properties" :data="data">
                        <slot name="form-extend-properties" :data="data"></slot>
                  </template>
                   <template slot="extend-tab" :data="data">
                        <slot name="extend-tab" :data="data"></slot>
                  </template>
                </Properties>
              </el-card>
            </el-col>
        </el-row>
 
      </el-main>

      <Preview  v-if="previewVisible" ref="preview" />
       
      <renderPreview ref="renderPreview" v-if="renderVisisble"/>            
     
      <previewCode ref="model" v-if="modelVisible" />
          

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
          <el-button size="mini" @click="importVisible = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="importModel">确 定</el-button>
        </span>
      </el-dialog>

    </el-container> 
</template>

<script> 
 
import cloneDeep from 'lodash/cloneDeep'

import DragPanel from './drag-panel/index'
import DesignPanel from './design-panel/index' 
import Properties from './properties/index'

import Preview  from '../preview/index'
import previewCode from "../preview/preview-code"; 


import renderPreview from "../preview/render";
export default {
  name: 'ng-form-design',
  data(){
    return {
      previewVisible: false , 
      modelJson: {},

      modelVisible: false,
      importVisible: false,
      importText: '' ,

      // 2022-03-23 lyf 增加dargType 当前拖拽的组件类型
      dragType: '' ,

      renderVisisble: false,
      // 基础配置
      data: {
        list: [],
        config: {
          labelPosition: "left",
          labelWidth: 100, 
          size: 'mini',
          outputHidden: true ,//  是否输出隐藏字段的值 默认打开,所有字段都输出
          hideRequiredMark: false ,
          syncLabelRequired: false,
          customStyle: ""
        }
      },

      previewOptions: {
        width: 850
      },
      selectItem: {} // 选中的元素
    }
  },
  watch: {
    data :{
      handler(newValue, oldValue){ 
        if(this.selectForm && this.selectForm.id) {
          // 修改数据发生变化
          //this.selectForm.change = true 
          const jsonForm = JSON.stringify(this.selectForm.htmlModel)
          const jsonData = JSON.stringify(this.data)
          if(jsonForm != jsonData){
            this.$set(this.selectForm , 'change' , true)
            this.$set(this.selectForm , 'htmlModel' , cloneDeep(this.data))
          } 
        }
      },
      //对象的深度监听deep，默认为false不进行深度监听
      deep: true 
    },
    selectForm :{
      handler(newValue, oldValue){ 
        if(newValue && newValue.id != (oldValue ? oldValue.id: '')) {
          // 修改数据发生变化
          
          const htmlModel = newValue.htmlModel
      
          let jsonModel = htmlModel ? (typeof htmlModel == 'object' ? htmlModel : JSON.parse(htmlModel) ) : null

          this.initModel(cloneDeep(htmlModel))
          
        }
      },
      //对象的深度监听deep，默认为false不进行深度监听
      deep: true 
    },
    
  },
  props:{
    selectForm: {
      type: Object,
    },
    customComponents: {
      type: Array,
      default: ()=>[]
    },
    config: {
      type: Object,
      default: ()=> {return {}}
    },
    // 按钮显示隐藏 
    clear: {
      type: Boolean ,
      default: true
    },
    preview: {
      type: Boolean ,
      default: true
    },
    reder: {
      type: Boolean ,
      default: true
    },
    imp: {
      type: Boolean ,
      default: true
    },
    exp: {
      type: Boolean ,
      default: true
    },
    // 基础组件需要展示的列表 或者false全部不展示
    basicItem: {
      type: [Boolean , Array] ,
      default: true
    }, 
    // 个性化组件需要展示的列表 或者false全部不展示
    personalItem: {
      type: [Boolean , Array] ,
      default: true
    },
     //布局组件需要展示的列表 或者false全部不展示
    layoutItem: {
      type: [Boolean , Array] ,
      default: true
    } 
  },
  provide: function () {
    return {
     customC: this.customComponents ,
     ngConfigC: this.config
    }
   },
  components: {
    DesignPanel,DragPanel,Properties,Preview,previewCode,renderPreview
  },
  created(){  
    // if( this.customComponents && this.customComponents.length > 0) {
    //   window.customComponents = this.customComponents
    // }
    if(this.config.httpConfig) {
      window.httpConfig = this.config.httpConfig
    }
     
    // if(this.config.dict && this.config.dict.length > 0 && !window.ng_dict_) {
    //   window.ng_dict_ = this.config.dict  
    // }
  },
  methods: {
    changeSelectItem(item) { 
      this.selectItem = item
    },
    handlePreview () { 
      this.previewVisible = true
      this.$nextTick(() => {
        this.$refs.preview.init(this.data) 
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
    handleDragType(dragType){
      this.dragType = dragType
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
    initModel(model) { 
      if(model)
        this.data = model
      else {
        this.data.list = []
      }

      this.selectItem = {}
      this.$refs.dragPanel.selectItem = {}
    },
    getModel(){
      return this.data
    },
    handleRender(){
     
      this.renderVisisble = true ;
      this.$nextTick(() => {
        this.$refs.renderPreview.init(this.data)
      })
    },
    handleGenerateJson () { 

      this.modelVisible = true 
      this.$nextTick(()=>{
        this.$refs.model.init(this.data)
      })
 
 
    }
  }
}
</script>

<style > 


</style>
