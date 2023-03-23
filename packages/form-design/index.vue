<template> 
  <el-container class="form-design">
      <el-header class="header" height="40px">
        <HeaderPanel :clear="clear" :preview="preview" :imp="imp" :exp="exp" :formTemplate="formTemplate" @importData="importData"/>
      </el-header>
      <el-main class="form-main">
        <el-container class="main-container">
          <el-aside width="260px" class="item-panel">
             <slot name="drag"></slot> 
             <DragPanel :basic-item="basicItem" :decorate-item="decorateItem" :layout-item="layoutItem" :application-item="applicationItem"/>
          </el-aside>
          <el-main class="center-panel form-main"> 
            <ContainerPanel :formTemplate="formTemplate" @handleSelectItem="handleSelectItem" :selectItem="selectItem">
              <template slot="controlButton" >
                <slot name="controlButton" ></slot>
              </template> 
            </ContainerPanel>  
          </el-main>  
          <el-aside width="260px" class="properties-panel"> 
              <PropertiesPanel :selectItem="selectItem" >
                  <template slot="custom-properties" >
                    <slot name="custom-properties" :selectItem="selectItem"></slot>
                  </template>
                   <template slot="form-extend-properties"  >
                      <slot name="form-extend-properties" :data="formTemplate"></slot>
                  </template>
                   <template slot="extend-tab" >
                      <slot name="extend-tab" :data="formTemplate"></slot>
                  </template>
              </PropertiesPanel> 
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

import cloneDeep from 'lodash/cloneDeep' 

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
  props:{
    customComponents: {
      type: Array,
      default: ()=>[]
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
    imp: {
      type: Boolean ,
      default: true
    },
    exp: {
      type: Boolean ,
      default: true
    },
    // 外部属性配置
    config: {
      type: Object
    },
    //基础组件是否要展示或待选组件列表集合
    basicItem: {
      type: [Array,Boolean],
      default: true
    },
    //装饰组件是否要展示或待选组件列表集合
    decorateItem: {
      type: [Array,Boolean],
      default: true
    }, 
    //布局组件是否要展示或待选组件列表集合
    layoutItem: {
      type: [Array,Boolean],
      default: true
    },
    //应用组件是否要展示或待选组件列表集合
    applicationItem: {
      type: [Array,Boolean],
      default: true
    },
  },   
  computed: {
    templateConfig() {
      if(this.formTemplate) return this.formTemplate.config 
      return {}
    },
    // 配置的数据字典
    dicts() {
      if(this.config && this.config.dict && this.config.dict.length > 0) {
        return this.config.dict
      }
      return null
    },
    // 配置中的http配置
    httpConfig() {
      if(this.config && this.config.httpConfig ) {
        return this.config.httpConfig
      }
      return null
      
    }
  },
  watch: {
    httpConfig(val) {
      if(val)
        window.nghttpConfig = val
    }
  },
  provide: function () {
    return {
     customC: this.customComponents ,
     configC: this.templateConfig,
     dictsC: this.dicts,
     httpConfigC: this.httpConfig
    }
  },
  methods: {
    handleSelectItem(record) {
      this.selectItem = record
    },
    // 返回编辑好的模板
    getModel() {
      const model = cloneDeep(this.formTemplate)

      return model 
    },
    // 初始化模板
    initModel(formTemplate) {
      this.formTemplate = cloneDeep(formTemplate)
    },
    // 从模板处导入json表单模板
    importData(formTemplate = {}) {
      this.formTemplate = formTemplate
    }
  }
}
</script>

<style lang="scss"> 

.form-design {
  height: 100%;

  .header {
    box-shadow: 1px 0px 6px 3px rgba(48, 65, 86, 0.35);
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
