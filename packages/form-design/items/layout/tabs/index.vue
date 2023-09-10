<template>  
<el-tabs 
  :type="record.options.type"
  :tab-position="record.options.position"
  class="ng-layout-tabs" 
  v-model="activeName" 
   >
    <el-tab-pane 
      :label="item.label" 
      :name="index"  
      class="ng-layout-tab-pane"
      v-for="(item, index) in record.columns"
      :key="index">
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
        :list="item.list"
        @add="dragEnd($event, item.list)" 
        > 
          <ng-form-node
              v-for="node in item.list"
              :key="node.key"
              class="drag-move"
              :selectItem="selectItem"
              :record="node" 
              @handleSelectItem="handleSelectItem"
              @handleCopy="handleCopy(node,item.list)"
              @handleDetele="handleDetele(node,item.list)"
            />  
      </draggable>
      <template v-else>
        <el-row :gutter="20" class="controller-row dragpanel" 
            :class="{'controller-bordered': record.options && record.options.bordered}"> 
          <template  v-for="node in item.list"  >
            <ng-form-node 
              :is-drag="false"
              :key="node.key"
              :disabled="disabled"
              :preview="preview"
              :models.sync="models"   
              :prop-prepend="propPrepend"
              :record="node" 
            />
          </template> 
        </el-row>
       
      </template>
    </el-tab-pane> 
</el-tabs> 
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
      activeName: 0
    }
  },
  created() {
     
  },
  methods: {
    dragEnd(evt, list) {   
      // 拖拽结束,自动选择拖拽的控件项
      const clone = this.cloneDeepAndFormat(list[evt.newIndex],evt)
     
      this.$set(list , evt.newIndex , clone) 
      this.handleSelectItem(list[evt.newIndex])
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
.ng-layout-tabs {
  z-index: 0;
  margin: 0px !important;
  border-radius: 4px;
  border: 1px dashed #ccc;
}

.ng-layout-tabs .el-tabs__content {
  height: 100%;
  min-height: 200px;
}


.ng-layout-tabs .ng-layout-tab-pane {
  min-height: 200px;
  height: 100%;
}

.ng-layout-tabs .ng-layout-tab-pane .draggable-box {
  min-height: 200px;
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