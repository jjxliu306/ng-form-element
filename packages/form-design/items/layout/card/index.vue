<template>  

<el-card class="ng-layout-card" :body-style="record.options.style" :shadow="record.options.shadow || 'always'">
  <div slot="header" class="card-header" v-if="record.label && record.label.length > 0">
    <span :style="titleStyle">{{record.label}}</span> 
  </div>
  <el-row v-if="isDragPanel" class="card-row">
      <draggable
          
          tag="div"
          class="draggable-box"
          v-bind="{
            group: 'form-draggable',
            ghostClass: 'moving',
            animation: 180,
            handle: '.drag-move'
          }"
          :force-fallback="true"
          :list="record.list"
          @add="dragEnd($event, record.list)" 
          > 
            <ng-form-node
                v-for="node in record.list"
                :key="node.key"
                class="drag-move"
                :selectItem="selectItem"
                :record="node" 
                @handleSelectItem="handleSelectItem"
                @handleCopy="handleCopy(node,record.list)"
                @handleDetele="handleDetele(node,record.list)"
              />  
        </draggable>
      </el-row>
     
        <el-row v-else :gutter="20" class="card-row dragpanel" 
            :class="{'card-bordered': record.options && record.options.bordered}"> 
          <template  v-for="node in record.list"  >
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
       
</el-card>

 
 
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
      document.documentElement.style.setProperty('--card-back-color', val || 'white');
    }
    
  },
  mounted() {
    if(this.backColor) {
      document.documentElement.style.setProperty('--card-back-color', this.backColor);
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
  --card-back-color: #fff; /* 设置一个默认的背景颜色 */
}
</style>
<style>
.ng-layout-card {
  z-index: 0;
  margin: 0px !important;
  border-radius: 4px;
  border: 1px dashed #ccc;
}

.ng-layout-card .el-card__body {
  height: 100%;
  min-height: 200px;
}

.ng-layout-card  .el-card__header {
   background-color: var(--card-back-color);
   border:  1px solid #EBEEF5;;
}
 
.ng-layout-card .card-row {
  min-height: 200px;
  height: 100%;
}

.ng-layout-card .card-row .draggable-box {
  min-height: 200px;
  border-radius: 4px;
  border: 1px dashed #ccc;
  box-sizing: border-box;
  padding-left: 2px;
  padding-right: 2px;
}

</style>
 