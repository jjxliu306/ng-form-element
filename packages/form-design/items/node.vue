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
        :models="models" 
        @handleSelectItem="handleSelectItem" 
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
    }
  },
  methods: {
     handleSelectItem(item) {
      this.$emit('handleSelectItem' , item)
     }
  },
  mounted() {  
    
  }
};
</script>