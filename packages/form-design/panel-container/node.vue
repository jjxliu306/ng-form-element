<template>
  <el-col 
    :span="record.span || 24"   
   >  
    <div :class="{ 'active': selectItem && record.key === selectItem.key , 'drag-box': isDrag , 'node-item': isDrag}"  @click.stop="handleSelectItem(record)">
      <div  class="form-item-box" style="height: 100%;width: 100%;">
        <Item 
          :models="models"
          :record="record"
          :isDragPanel="isDrag"    
          :selectItem="selectItem"
          :preview="preview"
          :key="refreshKey" 
          @submit="$emit('submit')"
          @reset="$emit('reset')"
          @handleSelectItem="handleSelectItem"
          @handleCopy="$emit('handleCopy')"
          @handleDetele="$emit('handleDetele')"
        />
      </div> 
      <template v-if="isDrag">
        <div class="key-box" v-text="record.model" /> 
        <div class="node-control">   
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
      </template> 
    </div>
  </el-col>
</template>
<script> 
 
import Item from "../items/index.vue"
import cloneDeep from 'lodash/cloneDeep' 

export default {
  name: 'ng-form-node',
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
    if(this.record.type == 'controller' && !this.record.list) {
      this.$set(this.record , 'list' , [])
    }
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
.node-item {
  padding: 10px;
  background: #f6f6f6;
  border-color: #f6f6f6;
  border-radius: 5px;
  margin-top: 10px;
}

.node-item.active{
  background: #d9f1ff;
  border-color: #d9f1ff;
}

.drag-box  {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  transition: all 0.3s;
  min-height: 36px;

  .key-box {
    position: absolute;
    bottom: 2px;
    right: 5px;
    font-size: 14px;
    color: #409eff;
  }
 
  // &::before {
  //   content: "";
  //   height: 5px;
  //   width: 100%;
  //   background: #409EFF;
  //   position: absolute;
  //   top: 0;
  //   right: -100%; 
  // }
  

  &.active {
    background: #5ea8f57d;
    outline-offset: 0; 

    &::before {
      right: 0;
    }
  }

  .form-item-box {
    position: relative;
    box-sizing: border-box;
    word-wrap: break-word;
/*
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 888;
    }
    */
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



  
  .right-menu {
    width: 190px;
    background: #fff;
    border: 1px solid #ccc;
    position: fixed;
    transition: all 0s;
    box-shadow: 3px 3px 5px #999;
    padding: 8px 0;
    z-index: 999;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        cursor: pointer;
        user-select: none;
        padding: 0 15px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;

        &:hover {
          background: #eee;
        }
      }
    }
  }
  
}

.active .key-box {
    color: #ff40ec;
}

.pointer {
  cursor: pointer;
}
</style>
 