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
        :formConfig="formConfig"
        :models.sync="models" 
        @handleSelectItem="handleSelectItem" 
        @handleFocus="handleFocus"
        @handleBlur="handleBlur"
        :is="customComponent"> 
  </component>   
</template>
<script>  
import ItemList from './index.js' 
 
import { dynamicFun } from '../../utils/index.js'
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
    formConfig: {
      type: Object,
      default: () => ({
        labelWidth: 120
      })
     // required: true
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
    }
  }, 
  computed: { 
     
    customComponent() {
        
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
      if(!this.isDragPanel && this.record.options.listenModel && this.record.options.listenModelData) {
               
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
          console.log('val' , val , oldVal)
          if(this.isDragPanel 
            || !this.models
            || !this.record.options.listenModel 
            || !this.record.options.listenModelData
            || !this.record.options.listenModelScript )
            return 
  



        console.log('val' , val , oldVal)
          // 解决 初始化加载数据 被计算数据监听造成数据变化
          const ify = JSON.stringify(val)
          if (this.copyLstenModel != ify) {
            this.copyLstenModel = ify
            console.log('this.copyLstenModel' , this.copyLstenModel)
            console.log('models1' , JSON.stringify(this.models))
            console.log('this.record.options.listenModelScript' , this.record.options.listenModelScript)
            dynamicFun(this.record.options.listenModelScript , this.models)
            console.log('models2' , JSON.stringify(this.models))
          }
        },
        immediate: true
    },
  },
  methods: {
    handleSelectItem(item) {
      this.$emit('handleSelectItem' , item)
    },
    handleFocus(e) {
       // 判断是否有监听
      const focusEventScript = this.record.options.focusEvent

      if(!focusEventScript) return 

      dynamicFun(focusEventScript,this.models) 
    },
    handleBlur(e) {
       // 判断是否有监听
      const blurEventScript = this.record.options.blurEvent

      if(!blurEventScript) return 

      dynamicFun(blurEventScript,this.models) 
    }
  } 
};
</script>