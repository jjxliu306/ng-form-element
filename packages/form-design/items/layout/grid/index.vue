<template>  
<el-row class="ng-layout-row" :gutter="record.options.gutter">
  <el-col
    class="ng-layout-col"
    v-for="(item, index) in record.columns"
    :key="index"
    :span="item.span || 0"
    >
    <draggable
      v-if="isDragPanel"
      tag="div"
      class="draggable-box"
      v-bind="{
        group: 'form-draggable',
        ghostClass: 'moving',
        animation: 180,
        handle: '.drag-move'
      }"
      :force-fallback="true"
      v-model="item.list"
      @add="dragEnd($event, record.list)" 
      > 
        <ng-form-node
            v-for="node in item.list"
            :key="node.key"
            class="drag-move"
            :selectItem="selectItem"
            :record="node" 
            @handleSelectItem="handleSelectItem"
            @handleCopy="handleCopy(node)"
            @handleDetele="handleDetele(node)"
          />  
    </draggable>
    <template v-else>
      <ng-form-item 
        v-for="node in item.list"
        :key="node.key"
        :disabled="disabled"
        :preview="preview"
        :models.sync="models"   
        :record="node" 
      />
    </template>
  </el-col>
</el-row>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import draggable from "vuedraggable"
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] ,
  components: {
    draggable
  },
  data() {
    return { 
    }
  },
  created() {
     
  },
  methods: {
    dragEnd(evt, columns) {   
      // 拖拽结束,自动选择拖拽的控件项
      this.handleSelectItem(columns[evt.newIndex])
    },
    handleCopy(item){ 
      const nitem = cloneDeep(item)
      const key = item.type + "_" + new Date().getTime() 
      nitem.key = key
      nitem.model = key

      // 找到index 插入
      const oindex = this.record.columns.findIndex(t=>t.key == item.key)
     
      if(oindex >= 0) {
        // insert 
        this.record.columns.splice(oindex + 1 , 0, nitem)

      }

    },
    handleDetele(item) {
      const oindex = this.record.columns.findIndex(t=>t.key == item.key)
      if(oindex >= 0) {
        this.record.columns.splice(oindex , 1);
      }
    }
  }
}
</script>
<style lang="scss">
.ng-layout-row {
  z-index: 0;
  margin: 0px!important;
  border-radius: 4px;
  border: 1px dashed #ccc;

  .ng-layout-col {
    min-height: 70px;

    .draggable-box {
      min-height: 65px;
      border-radius: 4px;
      border: 1px dashed #ccc;
      box-sizing: border-box;
      padding-left: 2px;
      padding-right: 2px;
    }
  }
} 
 
</style>