<!--
传入record数据，通过判断record.type，来渲染对应的组件
  -->
<template>

  <component
        :record="record"
        :style="{
          margin: record.margin && record.margin.length > 0 ? record.margin.join('px ') + 'px' : '0px',
          borderRadius: (record.itemBorderRadius ? record.itemBorderRadius : 0) + 'px',
          backgroundColor: record.backgroundColor ? record.backgroundColor  : '',

        }"
        :disabled="disabled"
        :preview="preview"
        :isDragPanel="isDragPanel"
        :selectItem="selectItem"
        :prop-prepend="propPrepend"
        :models.sync="models"
        @handleSelectItem="handleSelectItem"
        @handleFocus="handleFocus"
        @handleBlur="handleBlur"
        :is="customComponent">
      <!-- 递归传递插槽！！！ -->
      <template v-for="slot in Object.keys($slots)"  :slot="slot">
        <slot :name="slot" :record="record"/>
      </template>  
  </component>
</template>
<script>
import ItemList from './index.js'

import { dynamicVoidFun } from '../../utils/index.js'
export default {
  name: "ng-form-item-node",
  data(){
    return{
      items: ItemList
    }
  },
  props: {
    // 表单数组
    record: {
      type: Object,
      required: true
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
     // 是否预览结果表单
    preview: {
      type: Boolean ,
      default: false
    },
    // 是否拖拽面板引用
    isDragPanel: {
      type: Boolean ,
      default: false
    },
    selectItem: {
      type: Object
    },
    propPrepend: {
      type: String
    }
  },
  inject: {
    // 自定义组件
      customComponents: {
        from: 'customC',
        default: ()=>[]
      },
      // 表单全局config配置
      configInject: {
          from: 'configC',
          default: ()=> {return {}}
      },
      topModelsC: {
        from: "topModelsC",
        default: null
      }

  },
  computed: {
    config() {
      if(this.configInject && this.configInject != null && this.configInject != undefined) {
        return this.configInject() || {}
      }
      return {} 
    },
    topModels() {
      if(this.topModelsC && this.topModelsC != null && this.topModelsC != undefined) {
        return this.topModelsC() || {}
      }
      return {} 
    },
    customComponent() {

      // 判断是否自定义组件
      if(this.customComponents && this.customComponents.length > 0) {
        const cs = this.customComponents.filter(t=> t.type == this.record.type)

        if(cs && cs.length > 0) {
          return cs[0].component
        }
      }

      const selectItemType = this.record.type
            // 将数组映射成json
      if(this.items && this.items.length > 0) {
            for(let i = 0 ; i < this.items.length ; i++) {
              const itemList = this.items[i]

              if(itemList.list && itemList.list.length > 0) {
                const fs = itemList.list.filter(t=>t.type == selectItemType)
                if(fs && fs.length > 0) {
                  return fs[0].component
                }
              }

            }
      }
      return null
    },
    // 数据监听中要监听的数据，先通过计算属性计算 然后通过watch监听变化
    listenModelValue() {
      if(!this.isDragPanel && this.record.options && this.record.options.listenModel && this.record.options.listenModelData) {

              const lmodels = this.record.options.listenModelData.split(',')
              let vs = []
              for(let i = 0 ; i < lmodels.length ; i++) {
                // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
                const ld = lmodels[i]
                if(ld && ld.trim()) {
                    // local script
                    vs.push(this.models[ld.trim()])
                }
              }
              return vs.join(',')
          }
          return null
    }
  },
  watch: {
    // 组件数据监听
    listenModelValue: {
        handler(val, oldVal){
          if(this.isDragPanel
            || (!val && !oldVal)
            || !this.models
            || !this.record.options
            || !this.record.options.listenModel
            || !this.record.options.listenModelData
            || !this.record.options.listenModelScript )
            return

          //2023-09-10 lyf 确保当前组件的model在models中已经被挂载在执行
          if(!Object.prototype.hasOwnProperty.call(this.models,this.record.model)) {
            return
          }


         // console.log('this.record.options.listenModelScript' , this.record.options.listenModelScript)
          // 解决 初始化加载数据 被计算数据监听造成数据变化
          //const ify = JSON.stringify(val)
          //if (this.copyLstenModel != ify) {
          //  this.copyLstenModel = ify
            dynamicVoidFun(this.record.options.listenModelScript , this.models , this.topModels)

          //}

          //console.log("this.models" , this.models)
        },
        //immediate: true
    },
  },
  methods: {
    handleSelectItem(item) {
      this.$emit('handleSelectItem' , item)
    },
    handleFocus(e) {
      if(!this.record || !this.record.options) return
       // 判断是否有监听
      const focusEventScript = this.record.options.focusEvent

      if(!focusEventScript) return

      dynamicVoidFun(focusEventScript,this.models,this.topModels)
    },
    handleBlur(e) {
      if(!this.record || !this.record.options) return
       // 判断是否有监听
      const blurEventScript = this.record.options.blurEvent

      if(!blurEventScript) return

        console.log('topmodels' , this.topModels , this.topModelsC)

      dynamicVoidFun(blurEventScript,this.models,this.topModels)
    }
  }
};
</script>
