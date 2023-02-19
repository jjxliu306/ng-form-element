<template> 
  <el-container class="form-design">
      <el-header class="header" height="40px">
        ng-form-element
      </el-header>
      <el-main class="form-main">
        <el-container class="main-container">
          <el-aside width="260px" class="item-panel">
             <DragPanel />
          </el-aside>
          <el-main class="center-panel form-main"> 
             <ContainerPanel :data="data" @handleSelectItem="handleSelectItem" :selectItem="selectItem"/>
            
          </el-main>  
          <el-aside width="260px" class="properties-panel"> 
              <PropertiesPanel :selectItem="selectItem" :formConfig="data.config"/> 
          </el-aside>  
        </el-container> 
      </el-main> 
  </el-container> 
</template>

<script> 
import DragPanel from './drag-panel/index.vue'
import ContainerPanel from './container-panel/index.vue'
import PropertiesPanel from './properties-panel/index.vue'

export default {
  name: 'ng-form-design',
  components: {
    DragPanel,
    ContainerPanel,
    PropertiesPanel
  },
  data(){
    return {
      selectItem: undefined,
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
    background: #f1f4f5; 
    height: 100%;
    overflow-y: hidden;
  }

  .center-panel { 
    height: 100%;

  }

  .properties-panel {
    height: 100%;
    background: #f1f4f5;
  }
}

</style>
