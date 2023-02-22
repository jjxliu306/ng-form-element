<template> 
  <el-container class="form-design">
      <el-header class="header" height="40px">
        <HeaderPanel :formTemplate="formTemplate" @importData="importData"/>
      </el-header>
      <el-main class="form-main">
        <el-container class="main-container">
          <el-aside width="260px" class="item-panel">
             <DragPanel />
          </el-aside>
          <el-main class="center-panel form-main"> 
            <ContainerPanel :formTemplate="formTemplate" @handleSelectItem="handleSelectItem" :selectItem="selectItem"/>
            
          </el-main>  
          <el-aside width="260px" class="properties-panel"> 
              <PropertiesPanel :selectItem="selectItem" :formConfig="formTemplate.config"/> 
          </el-aside>  
        </el-container> 
      </el-main> 
  </el-container> 
</template>

<script> 
import HeaderPanel from './panel-header/index.vue'
import DragPanel from './panel-drag/index.vue'
import ContainerPanel from './panel-container/index.vue'
import PropertiesPanel from './panel-properties/index.vue'

export default {
  name: 'ng-form-design',
  components: {
    HeaderPanel,
    DragPanel,
    ContainerPanel,
    PropertiesPanel
  },
  data(){
    return {
      selectItem: undefined,
      formTemplate: {
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
      }
    }
  },
  watch: {
     
    
  },
  props:{
     
  },  
  created(){  
     
  },
  methods: {
    handleSelectItem(record) {
      console.log('handleSelectItem' , record)
      this.selectItem = record
    },
    // 返回编辑好的模板
    getModel() {

    },
    // 初始化模板
    initModel(formTemplate) {

    },
    // 从模板处导入json表单模板
    importData(formTemplate = {}) {
      console.log("update" , formTemplate)
      this.formTemplate = formTemplate
    }
  }
}
</script>

<style lang="scss"> 

.form-design {
  height: 100%;

  .header {

  }


  .form-main {
    padding: 0px;
    height: 100%;

    .main-container {
      height: 100%;
    }
  }

  .item-panel { 
    /* background: #f1f4f5; */
    height: 100%;
    overflow-y: hidden;
    box-shadow: 1px 0px 6px 3px rgb(48 65 86 / 35%);
  }

  .center-panel { 
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .properties-panel {
    height: 100%;
    /* background: #f1f4f5; */
    box-shadow: -3px 0 6px rgb(48 65 86 / 35%);
  }
}

</style>
