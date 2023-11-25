<template>  
  <div
        :class="[
          'ng-layout-controller drag-box', 
          record.options.customClass ? record.options.customClass : '' 
        ]" 
        :style="record.options.customStyle" 
      >
     
        <!-- <div class="batch-label">弹性容器</div>  -->
        <template v-if="isDragPanel"> 
          <el-row :gutter="20" class="controller-row"  
            :class="{
              'controller-bordered': record.options && record.options.bordered,
              'dragpanel': isDragPanel
            }"> 
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
        <div v-else>
          <div v-for="(mdata, idx) in models[record.model]"  :key="idx"
            :class="[
              'table-layout','form-table',
              record.options.customClass ? record.options.customClass : '' ,
              record.options.bright ? 'bright' : '' ,
              record.options.small ? 'small' : '' ,
              record.options.bordered ? 'controller-bordered' : '' 
            ]" 
            :style="record.options.customStyle"
             @contextmenu.prevent="handleShowRightMenu($event , idx) "
           >
            <el-row :gutter="20" class="controller-row" 
            :class="{'controller-bordered': record.options && record.options.bordered}"> 
             
              <template  v-for="(item, index) in record.list"  >
                <ng-form-node
                  :key="index"  
                  ref="nestedComponents"
                  :is-drag="false"
                  :disabled="disabled"
                  :previewpreview="preview"
                  :models.sync="mdata"   
                  :record="item"  
                  :prop-prepend="propPrepend + record.model + '.' + idx + '.'"
                />
              </template> 
            </el-row>
            
          </div> 
           <!-- 右键里的删除和复制 下方的新增 -->
          <el-button v-if="!preview && record.options.add" type="dashed" size="mini" :disabled="disabled" @click="addControlData">
            <i class="el-icon-circle-plus-outline" />{{t('ngform.item.add')}}
          </el-button>
          <div
            v-show="!preview && showRightMenu"
            :style="{ 'top': menuTop + 'px', 'left': menuLeft + 'px' }"
            class="right-menu"
            id="rightMenu"
          >
            <ul> 
             <li v-if="record.options.copy" @click="handleCopyData"><i class="el-icon-document" />{{t('ngform.item.copy')}}</li>
              <hr v-if="record.options.copy && record.options.remove">
              <li v-if="record.options.remove" @click="handleRemoveData"><i class="el-icon-delete" />{{t('ngform.item.delete')}}</li> 
            </ul>
          </div>
        </div> 
  </div>
</template>
<script>
//import Node from '../../../panel-container/node.vue'
//import Item from '../../index.vue'
import cloneDeep from 'lodash/cloneDeep'
import draggable from "vuedraggable"
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] ,
  components: {
  //  Node , Item
    draggable
  },
  data() {
    return {
      showRightMenu: false,
      selectControlIndex: undefined
    }
  },
  created() {
    if(this.isDragPanel) {
      if(this.record && (this.record.list == null || this.record.list == undefined)) {
        this.$set(this.record, 'list' , [])
      }
    } else {
      this.initFirst()
    }
  },
  mounted(){ 
    
    this.$ngform_bus.$on('reset', () => { 
       this.initFirst()
    });

  },
  methods: {
    initFirst() {
      if(!this.models ) return 
      if(!this.models[this.record.model]) {
        let firstData = {} 
        this.record.list.forEach(t=> {
          firstData[t.model] = ''
        })
        this.$set(this.models , this.record.model , [firstData])
      }
    },
    dragEnd(evt, list) {   
      // 拖拽结束,自动选择拖拽的控件项
      // 复制一遍
      const clone = this.cloneDeepAndFormat(list[evt.newIndex] , evt)
      // 去掉icon
      delete clone.icon 
      this.$set(list , evt.newIndex , clone) 
      this.handleSelectItem(list[evt.newIndex])
    },
    handleCopy(item){ 
      const nitem = this.cloneDeepAndFormat(item)
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
    },
    addControlData() {
        // 将当前数据复制一份 压入
      const data_ = {} 

      // this.record.list.forEach(t=> {
      //   data_[t.model] = ''
      // }) 
      this.models[this.record.model].push(data_) 
    },
    handleShowRightMenu(e, idx) {
      // 显示右键菜单
      e.stopPropagation();

      // 判断是否有复制和删除 如果没有直接返回
      if(!this.record.options.remove && !this.record.options.copy) {
        this.showRightMenu = false
        this.selectControlIndex = undefined
        return false
      }

      if(this.showRightMenu) {
        this.showRightMenu = false
      }
       
      // this.fileItem = item
      // 显示
     
 

      // 计算rightMenu得高度和宽度 和当前屏幕对比 来决定菜单出现得起始位置
      let height = 210;// document.getElementById('rightMenu').clientHeight ;
      let width = 280 ;//document.getElementById('rightMenu').clientWidth ;

      // 获取屏幕高度和宽度 比对
      const bodyHeight = document.body.clientHeight  ;
      const bodyWidth = document.body.clientWidth ;
 
        
      // 定位 
      if(e.clientY + height > bodyHeight) {
        this.menuTop = e.clientY - height;
      } else {
        this.menuTop = e.clientY;
      }

      if(e.clientX + width > bodyWidth) {
        this.menuLeft = e.clientX - width;
      } else {
        this.menuLeft = e.clientX + 20 ;
      }
      
      this.selectControlIndex = idx

      this.$nextTick(()=> {
         this.showRightMenu = true
      })

      return false;
    },
    handleCopyData() {
      if(this.selectControlIndex == undefined || this.selectControlIndex < 0) {
        this.showRightMenu = false
        return 
      }

      if(!this.models[this.record.model] || this.models[this.record.model].length < this.selectControlIndex) {
        this.showRightMenu = false
        return 
      }

      const cloneData = this.cloneDeepAndFormat(this.models[this.record.model][this.selectControlIndex])

      this.models[this.record.model].push(cloneData)
      this.showRightMenu = false
    },
    handleRemoveData() {
      if(this.selectControlIndex == undefined || this.selectControlIndex < 0) {
        return 
      }

      if(!this.models[this.record.model] || this.models[this.record.model].length < this.selectControlIndex) {
        this.showRightMenu = false
        return 
      }

      if(this.models[this.record.model].length == 1) {
        
        this.$message.error(this.record.label + '内仅存的一条数据不能删除')
        this.showRightMenu = false
        return
      }

      this.models[this.record.model].splice(this.selectControlIndex,1)

      this.showRightMenu = false
    }
  }
}
</script>
<style>
.ng-layout-controller {
  z-index: 0;
}

.ng-layout-controller .controller-row {
  margin: 0px !important;
}

.ng-layout-controller .dragpanel {
  min-height: 300px;
  margin: 0px;
}

.ng-layout-controller .draggable-box, .ng-layout-controller .list-main {
  min-height: 300px;
}

.controller-bordered {
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
}

</style>
<!-- 
<style lang="scss">
.ng-layout-controller {
  z-index: 0;

  .controller-row {
    margin: 0px!important;
  }

  .dragpanel {
    min-height: 300px;
    margin: 0px;
  }

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
</style> -->