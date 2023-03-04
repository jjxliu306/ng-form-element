<template>  
<div 
  :class="[
    'ng-base-batch', 
    record.options.customClass ? record.options.customClass : '' 
  ]" 
  :style="record.options.customStyle" 
  >
  <template v-if="isDragPanel">
    <el-row :gutter="20">
      <draggable
        tag="div"
        class="draggable-box"
        v-bind="{
          group: 'form-draggable' ,
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move'
        }"
        :force-fallback="true"
        v-model="record.list"
        @add="dragEnd($event, record.list)" 
        >
          <ng-form-node
            v-for="item in record.list"
            :key="item.key"
            class="drag-move"
            :selectItem="selectItem"
            :record="item" 
            @handleSelectItem="handleSelectItem"
            @handleCopy="handleCopy(item)"
            @handleDetele="handleDetele(item)"
            /> 
      </draggable> 
    </el-row>    
  </template> 
  <template v-else>  
    <TableBuild :record="record" :models="models"  :preview="preview"/>

  </template> 
</div>
</template>
<script> 
import TableBuild from './build/index.vue'
import cloneDeep from 'lodash/cloneDeep'

import mixin from '../../mixin.js'
export default {
	mixins: [mixin] , 
  components: {
    TableBuild
  },
  methods: {
    dragEnd(evt, list) {   
      // 拖拽结束,自动选择拖拽的控件项
      this.handleSelectItem(list[evt.newIndex])
    },
    handleCopy(item){ 
      const nitem = cloneDeep(item)
      const key = item.type + "_" + new Date().getTime() 
      nitem.key = key
      nitem.model = key

      // 找到index 插入
      const oindex = this.record.list.findIndex(t=>t.key == item.key)
     
      if(oindex >= 0) {
        // insert 
        this.record.list.splice(oindex + 1 , 0, nitem)

      }

    },
    handleDetele(item) {
      const oindex = this.record.list.findIndex(t=>t.key == item.key)
      if(oindex >= 0) {
        this.record.list.splice(oindex , 1);
      }
    }
  }
}
</script>
<style lang="scss">
.ng-base-batch {
  z-index: 0;
  border-radius: 4px;
  border: 1px solid #DCDFE6;

  .draggable-box {
    min-height: 200px;
  }
} 
</style>