<template>
  <el-container class="form-design">
    <el-header class="header" height="40px">
      <HeaderPanel
          :clear="clear"
          :preview="preview"
          :imp="imp"
          :exp="exp"
          :formTemplate="formTemplate"
          @importData="importData"
      >
        <template slot="controlButton">
          <slot name="controlButton"></slot>
        </template>
        <template slot="formName">
          <slot name="formName"></slot>
        </template>
      </HeaderPanel>
    </el-header>
    <el-main class="form-main">
      <el-container class="ng-main-container">
        <el-aside width="260px" class="item-panel">
          <slot name="drag"></slot>
          <DragPanel
              :basic-item="basicItem"
              :decorate-item="decorateItem"
              :layout-item="layoutItem"
              :application-item="applicationItem"
          />
        </el-aside>
        <el-main class="center-panel form-main">
          <ContainerPanel
              :formTemplate="formTemplate"
              @handleSelectItem="handleSelectItem"
              :selectItem="selectItem"
          >
          </ContainerPanel>
        </el-main>
        <el-aside width="370px" class="properties-panel">
          <PropertiesPanel :selectItem="selectItem">
            <template slot="custom-properties">
              <slot name="custom-properties" :selectItem="selectItem"></slot>
            </template>
            <template slot="form-extend-properties">
              <slot name="form-extend-properties" :data="formTemplate"></slot>
            </template>
            <template slot="extend-tab">
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
import { use } from '../locale/index'
import { getUUID } from '../utils/index'
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'ng-form-design',
  components: {
    HeaderPanel,
    DragPanel,
    ContainerPanel,
    PropertiesPanel
  },
  data() {
    return {
      selectItem: {},
      i18nkey: getUUID()
    }
  },
  props: {
    template: {
      type: Object,
      default: () => {
        return {
          list: [],
          config: {
            labelPosition: 'top',
            labelWidth: 80,
            size: 'mini',
            outputHidden: true, //  是否输出隐藏字段的值 默认打开,所有字段都输出
            hideRequiredMark: false,
            syncLabelRequired: false,
            customStyle: ''
          }
        }
      }
    },
    customComponents: {
      type: Array,
      default: () => []
    },
    // 按钮显示隐藏
    clear: {
      type: Boolean,
      default: true
    },
    preview: {
      type: Boolean,
      default: true
    },
    imp: {
      type: Boolean,
      default: true
    },
    exp: {
      type: Boolean,
      default: true
    },
    // 外部属性配置
    config: {
      type: Object
    },
    //基础组件是否要展示或待选组件列表集合
    basicItem: {
      type: [Array, Boolean],
      default: true
    },
    //装饰组件是否要展示或待选组件列表集合
    decorateItem: {
      type: [Array, Boolean],
      default: true
    },
    //布局组件是否要展示或待选组件列表集合
    layoutItem: {
      type: [Array, Boolean],
      default: true
    },
    //应用组件是否要展示或待选组件列表集合
    applicationItem: {
      type: [Array, Boolean],
      default: true
    }
  },
  computed: {
    formTemplate() {
      return (
          this.template || {
            list: [
              {
                type: 'controller',
                layou: true,
                options: {
                  customStyle: '',
                  customClass: '',
                  bordered: false,
                  add: true,
                  copy: true,
                  remove: true,
                  hidden: false,
                  disabled: false
                },
                label: '容器',
                labelWidth: 0,
                width: '100%',
                span: 24,
                key: 'controller_16992571869592',
                model: 'controller_16992571869592',
                list: []
              }
            ],
            config: {
              labelPosition: 'left',
              labelWidth: 100,
              size: 'mini',
              outputHidden: true, //  是否输出隐藏字段的值 默认打开,所有字段都输出
              hideRequiredMark: false,
              syncLabelRequired: false,
              customStyle: ''
            }
          }
      )
    },
    templateConfig() {
      if (this.formTemplate) return this.formTemplate.config
      return {}
    },
    // 配置中的http配置
    httpConfig() {
      //2023-10-11 lyf 判断是否注入了全局config
      // 优先判断内部
      if (this.config && this.config.httpConfig) {
        return this.config.httpConfig
      } else if (this.$ngofrm_httpConfig) {
        return this.$ngofrm_httpConfig
      }
      return null
    },
    // 自定义组件
    components() {
      if (this.$ngofrm_components && this.$ngofrm_components.length > 0) {
        return this.$ngofrm_components
      } else if (this.customComponents && this.customComponents.length > 0) {
        return this.customComponents
      }

      return undefined
    }
  },
  watch: {
    httpConfig: {
      handler(newVal) {
        window.nghttpConfig = newVal
      },
      deep: true,
      immediate: false
    },
    formTemplate: {
      handler(newVal) {
        this.$emit('update:formTemplate', newVal)
      },
      deep: true,
      immediate: false
    }
  },
  provide() {
    return {
      customC: this.components,
      configC: this.templateConfig,
      //dictsC: this.dicts,
      httpConfigC: this.httpConfig,
      ngConfig: this.config
    }
  },
  created() {
    if (this.formTemplate == null) {
      this.formTemplate = {
        list: [],
        config: {
          labelPosition: 'left',
          labelWidth: 100,
          size: 'mini',
          outputHidden: true, //  是否输出隐藏字段的值 默认打开,所有字段都输出
          hideRequiredMark: false,
          syncLabelRequired: false,
          customStyle: ''
        }
      }
    }

    if (this.httpConfig) {
      window.nghttpConfig = this.httpConfig
    }
  },
  methods: {
    handleSelectItem(record) {
      this.selectItem = record
    },

    useLocale(val) {
      use(val)
      this.i18nkey = getUUID()

      this.$ngofrm_bus.$emit('i18nRefresh')
    },
    // 返回编辑好的模板
    getModel() {
      const model = cloneDeep(this.formTemplate)

      return model
    },
    // 初始化模板
    initModel(formTemplate) {
      const modelData = cloneDeep(formTemplate)

      this.importData(modelData)
    },
    // 从模板处导入json表单模板
    importData(formTemplate = {}) {
      this.formTemplate.list = formTemplate.list
      for (let k in formTemplate.config) {
        this.template.config[k] = formTemplate.config[k]
      }
      //this.formTemplate.config = formTemplate.config;
    }
  }
}
</script>
<style>
.form-design {
  height: 100%;
  background: white; 
  text-align: left;
}

.form-design .header {
  box-shadow: 1px 0px 6px 3px rgba(48, 65, 86, 0.35);
  background: white;
}

.form-design .form-main {
  padding: 0px;
  height: 100%;
  min-height: 500px;
}

.form-design .form-main .ng-main-container {
  height: 100%;
  min-height: 500px;
}

.form-design .item-panel {
  height: 100%;
  overflow-y: hidden;
  box-shadow: 1px 0px 6px 3px rgb(48 65 86 / 35%);
  background: white;
}

.form-design .center-panel {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  //background-color: #d5d5d5;
  //padding: 100px 50px 0 50px;
}

.form-design .properties-panel {
  height: 100%;
  box-shadow: -3px 0 6px rgb(48 65 86 / 35%);
  background: white;
}

</style>
<!--
<style lang="scss">
.form-design {
  height: 100%;
  background: white;
  .header {
    box-shadow: 1px 0px 6px 3px rgba(48, 65, 86, 0.35);
  }

  .form-main {
    padding: 0px;
    height: 100%;
    min-height: 500px;

    .ng-main-container {
      height: 100%;
      min-height: 500px;
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
 -->
