<template>
  <div 
    :class="{ 'active': selectItem && record.key === selectItem.key , 'drag-move-box': isDrag}" 
    
  >    
    
      
      <div  class="form-item-box" style="height: 100%;width: 100%;" @click.stop="handleSelectItem(record)">
        <Item
          :formConfig="config"
          :models="models"
          :record="record"
          :isDragPanel="isDrag"    
          :preview="preview"
          :key="refreshKey" 
          @submit="$emit('submit')"
          @reset="$emit('reset')"
          @handleSelectItem="handleSelectItem"
          @handleCopy="$emit('handleCopy')"
          @handleDetele="$emit('handleDetele')"
        />
      </div> 
    
    <div v-if="isDrag" class="node-control">        
        <div
          class="copy pointer"
          title="复制"
          :class="selectItem && record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <i class="el-icon-document-copy" />
        </div>
        
        <div
          class="delete pointer"
          title="删除"
          :class="selectItem && record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <i class="el-icon-delete" />
        </div>
      </div> 
  </div>
</template>
<script> 
 
import Item from "../items/index.vue";
import cloneDeep from 'lodash/cloneDeep' 

export default {
  name: 'ng-form-container-node',
  components: {
    Item 
  },
  props: {    
    record: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      default: () => {}
    },
    config: {
      type: Object,
      required: true
    }, 
    // 当前是否拖拽面板
    isDrag: {
      type: Boolean,
      default: true
    },
    preview: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    models: {
      type: Object ,
      default: ()=>{return {}}
    }, 
  },
  data(){
    return { 
      refreshKey: 1    
    }
  }, 
  computed: {
     
  },
  created(){
    
  },
  activated() {     
     
  },
  mounted(){
   
    
  },
  methods: {  
    handleSelectItem(rec,index) {
    
      this.$emit('handleSelectItem' , rec , index+1)
    },
    handleRefresh(){
      this.refreshKey++
    } 
  }

};
</script>
<style lang="scss">
.drag-move-box  {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  transition: all 0.3s;
  min-height: 36px;


  &::before {
    content: "";
    height: 5px;
    width: 100%;
    background: #409EFF;
    position: absolute;
    top: 0;
    right: -100%;
    transition: all 0.3s;
  }

  &.active {
    background: fade(#409EFF, 20%);
    outline-offset: 0;

    &::before {
      right: 0;
    }
  }

  .form-item-box {
    position: relative;
    box-sizing: border-box;
    word-wrap: break-word;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 888;
    }
  }

  .node-control {
    position: absolute;
    bottom: 2px;
    right: 5px;
    font-size: 14px;
   /* z-index: 999; */
    color: #409EFF;

    .copy , .delete  {
      position: absolute;
      top: 0;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      z-index: 989;
      transition: all 0.3s;

      &.unactivated {
        opacity: 0 !important;
        pointer-events: none;
 
      }

      &.active {
        opacity: 1 !important;
      }
    }

    .copy {
      border-radius: 0 0 0 8px;
      right: 30px;
      background: #409EFF;

     
    }

    .delete {
      right: 0px;
      background: #409EFF;
    }
  }

  .node-control { 
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  &:hover {
    background: fade(#409EFF, 20%);
    
    .node-control {
      /*visibility: visible;*/
      display: block;
    }
    
  }
  
} 
</style>
 