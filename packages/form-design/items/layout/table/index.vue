<!-- 弹性容器 -->
<template>  
  <div
        :class="[
          'ng-table-controller', 
          record.options.customClass ? record.options.customClass : '' ,
          record.options && record.options.bordered ? 'controller-bordered' : ''
        ]" 
        :style="record.options.customStyle" 
      >
     
        
          <Design  
            v-if="isDragPanel"
            :record="record"
            :disabled="disabled" 
            :preview="preview"
            :isDragPanel="isDragPanel"
            :selectItem="selectItem"
            :formConfig="formConfig"
            @handleSelectItem="handleSelectItem"
            :models="models" 
          /> 
          <Build 
            v-else
            :record="record"
            :disabled="disabled" 
            :preview="preview"
            :isDragPanel="isDragPanel"
            :selectItem="selectItem"
            :formConfig="formConfig"
            :models="models" 
          />
           
        
  </div>
</template>
<script>
 
import Build from './build.vue'
import Design from './design.vue'

import mixin from '../../mixin.js'
export default {
	mixins: [mixin] ,
  components: {
    Build , Design
  },
  data() {
    return {
      showRightMenu: false,
      selectControlIndex: undefined
    }
  }, 
  methods: {
    handleSelectItem(item) { 

      this.$emit('handleSelectItem' , item)
    },
   
  }
}
</script>
<style lang="scss">
.ng-table-controller {
  

  .dragpanel { 
    margin: 0px;
  }
 


.form-table {
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
  border-collapse: collapse;

  &.bordered tr td {
    border: 1px solid #e8e8e8 !important;
  }

  &.bright   {
    .table-td:hover {
       background: #fafafa;
    } 
  }

  .el-row .el-form-item {
    margin: 0 !important;
  }

  .table-td {
    min-height: 45px;

    .draggable-box {
      min-height: 45px;
    }
  }

  tr {
    transition: all 0.3s;
    border-collapse: collapse;

    .el-form-item {
      margin-bottom: 0 !important;
    }



    td {
      box-sizing: border-box;
      transition: all 0.3s;
      padding: 3px 3px;
      border-collapse: collapse;
      display: table-cell;
      vertical-align: inherit;

      .el-form-item {
        margin-bottom: 0 !important;
      }

      .list-main {
        min-height: 60px;
      }

      .cell {
        padding-right: 2px;
        padding-left: 2px;
      }
    }
  }

}
 
 }
 
 

.table-bordered {
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266; 
}
</style>