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
      @add="dragEnd($event, item.list)" 
      > 
        <ng-form-node
            v-for="node in item.list"
            :key="node.key"
            class="drag-move"
            :selectItem="selectItem"
            :record="node" 
            :prop-prepend="propPrepend"
            @handleSelectItem="handleSelectItem"
            @handleCopy="handleCopy(node , item.list)"
            @handleDetele="handleDetele(node , item.list)"
          />  
    </draggable>
    <template v-else>
      <ng-form-node 
        v-for="node in item.list"
        :is-drag="false"
        :key="node.key"
        :disabled="disabled"
        :preview="preview"
        :prop-prepend="propPrepend"
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
      const clone = this.cloneDeepAndFormat(columns[evt.newIndex])
       
      this.$set(columns , evt.newIndex , clone) 
      this.handleSelectItem(columns[evt.newIndex])
    },
    handleCopy(item , list){ 
      const nitem = this.cloneDeepAndFormat(item)
      const key = item.type + "_" + new Date().getTime() 
      nitem.key = key
      nitem.model = key

      // 找到index 插入
      const oindex = list.findIndex(t=>t.key == item.key)
     
      if(oindex >= 0) {
        // insert 
        list.splice(oindex + 1 , 0, nitem)

      }

    },
    handleDetele(item , list) {
      const oindex = list.findIndex(t=>t.key == item.key)
      if(oindex >= 0) {
        list.splice(oindex , 1);
      }
    }
  }
}
</script>
<style>
.ng-layout-row {
  
  margin: 0px !important;
  border-radius: 4px;
  border: 1px dashed #ccc;
}

.ng-layout-row .ng-layout-col {
  min-height: 70px;
}

.ng-layout-row .ng-layout-col .draggable-box {
  min-height: 65px;
  border-radius: 4px;
  border: 1px dashed #ccc;
  box-sizing: border-box;
  padding-left: 2px;
  padding-right: 2px;
}

</style>
<!-- 
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
 
</style> -->