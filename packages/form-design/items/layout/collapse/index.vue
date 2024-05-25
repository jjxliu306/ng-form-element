<template>  
<el-collapse 
  v-model="activeName" 
  :accordion="record.options && record.options.accordion" 
  class="ng-layout-collapses" 
  :class="layoutCollapseCustom" >
  <el-collapse-item 
    :title="item.label" 
    :name="index"   
    v-for="(item, index) in record.columns"
    :key="index">
    <template slot="title">
      <div class="collapses-title" :style="titleStyle">{{item.label}}</div>
    </template>
    <el-row v-if="isDragPanel" class="collapse-row">
      <draggable
          
          tag="div"
          class="draggable-box"
          v-bind="{
            group: 'form-draggable',
            ghostClass: 'moving',
            animation: 180,
            handle: '.drag-move'
          }"
          
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
      </el-row>
      <template v-else>
        <el-row :gutter="20" class="controller-row dragpanel" 
            :class="{'controller-bordered': record.options && record.options.bordered}"> 
          <template  v-for="node in item.list"  >
            <ng-form-node 
              :is-drag="false"
              :key="node.key"
              :disabled="disabled"
              :preview="preview"
              :prop-prepend="propPrepend"
              :models.sync="models"   
              :record="node" 
            />
          </template> 
        </el-row>
      </template>
  </el-collapse-item>
</el-collapse>

 
</template>
<script> 
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
  computed: {
    titleStyle() {
      const fontSize = this.record.options.titleFontSize || 14 
      //const backColor = this.record.options.titleBackColor || 'white'
      const fontColor = this.record.options.titleFontColor || '#000000'
      return {
        fontSize: fontSize +'px',
        color: fontColor,
        //background: backColor

      }
    },
    layoutCollapseCustom() {
      return this.backColor ? 'back' : ''
    },
    backColor() {  
      return this.record.options.titleBackColor 
    }
  },
  watch: {
    backColor(val) {
      document.documentElement.style.setProperty('--collapse-back-color', val || 'white');
    }
    
  },
  mounted() {
    if(this.backColor) {
      document.documentElement.style.setProperty('--collapse-back-color', this.backColor);
    }
  },
  methods: {
    dragEnd(evt, list) {   
      // 拖拽结束,自动选择拖拽的控件项
      const clone = this.cloneDeepAndFormat(list[evt.newIndex] , evt)
      // 去掉icon
      delete clone.icon 
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
:root {
  --collapse-back-color: #fff; /* 设置一个默认的背景颜色 */
}
</style>
<style>
.ng-layout-collapses {
  z-index: 0;
  margin: 0px !important;
  border-radius: 4px;
  border: 1px dashed #ccc;
}

.ng-layout-collapses .el-collapse-item__content {
  height: 100%;
  min-height: 200px;
}

.ng-layout-collapses  .el-collapse-item__header {
   background-color: var(--collapse-back-color);
   border:  1px solid #EBEEF5;;
}

 

.ng-layout-collapses .collapses-title {

}

.ng-layout-collapses .collapse-row {
  min-height: 200px;
  height: 100%;
}

.ng-layout-collapses .collapse-row .draggable-box {
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