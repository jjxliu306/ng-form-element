<template>  
  <div
        :class="[
          'ng-layout-controller', 
          record.options.customClass ? record.options.customClass : '' , 
          record.options && record.options.bordered ? 'controller-bordered' : '' 
        ]" 
        :style="record.options.customStyle" 
      >
     
        <!-- <div class="batch-label">弹性容器</div>  -->
        <template v-if="isDragPanel">
          <el-row :gutter="20" class="row"> 
            <draggable 
              tag="div"
              class="draggable-box"
              v-bind="{
                group:  'form-draggable'  ,
                ghostClass: 'moving',
                animation: 180,
                handle: '.drag-move'
              }"

              :force-fallback="true"
              v-model="record.list"
            > 
              
                <ng-form-node
                  v-for="item in record.list"
                  :key="item.key"
                  class="drag-move"
                  :selectItem="selectItem"
                  :record="item"
                  :config="formConfig"
                  @handleSelectItem="handleSelectItem"
                  @handleCopy="handleCopy(item)"
                  @handleDetele="handleDetele(item)"
                />
              
            </draggable>
          </el-row>
        </template> 
        <div v-else>
          <div v-for="(mdata, idx) in models[record.model]"  :key="idx"
            :class="[
              'table-layout','form-table',
              record.options.customClass ? record.options.customClass : '' ,
              record.options.bright ? 'bright' : '' ,
              record.options.small ? 'small' : '' ,
              record.options.bordered ? 'form-table-bordered' : '' 
            ]" 
            :style="record.options.customStyle"
             @contextmenu.prevent="handleShowRightMenu($event , idx) "
           >
            <div  
              v-for="(item, index) in record.list"  
              :key="index"  
              >
             <ng-form-item
                ref="nestedComponents"
                 
                :disabled="disabled"
                :renderPreview="renderPreview"
                :models.sync="mdata"   
                :record="item"
                :formConfig="formConfig" 
                :prop-prepend="record.model + '.' + idx + '.'"
              />
            </div>  
          </div>

        </div> 
  </div>
</template>
<script>
//import Node from '../../../panel-container/node.vue'
//import Item from '../../index.vue'
import cloneDeep from 'lodash/cloneDeep'

import mixin from '../../mixin.js'
export default {
	mixins: [mixin] ,
  components: {
  //  Node , Item
  },
  created() {
    console.log('isDragPanel' , this.isDragPanel)
    if(this.isDragPanel) {
      if(this.record && (this.record.list == null || this.record.list == undefined)) {
        this.$set(this.record, 'list' , [])
      }
    } else {
      if(!this.models ) return 
      if(!this.models[this.record.model]) {
        let firstData = {} 
        this.record.list.forEach(t=> {
          firstData[t.model] = ''
        })
        this.$set(this.models , this.record.model , [firstData])
      }
    }
  },
  methods: {
    handleSelectItem(item) { 

      this.$emit('handleSelectItem' , item)
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
.ng-layout-controller {
  min-height: 300px;


  .draggable-box , .list-main{
    min-height: 300px;
  }
}

.controller-bordered {
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
    
}
</style>