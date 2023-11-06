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
<style>
.ng-table-controller .dragpanel {
  margin: 0px;
}

.ng-table-controller .form-table {
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
  border-collapse: collapse;
}

.ng-table-controller .form-table.bordered tr td {
  border: 1px solid #e8e8e8 !important;
}

.ng-table-controller .form-table.bright .table-td:hover {
  background: #fafafa;
}

.ng-table-controller .form-table .el-row .el-form-item {
  margin: 0 !important;
}

.ng-table-controller .form-table .table-td {
  min-height: 45px;
}

.ng-table-controller .form-table .table-td .draggable-box {
  min-height: 45px;
}

.ng-table-controller .form-table tr {
  transition: all 0.3s;
  border-collapse: collapse;
}

.ng-table-controller .form-table tr .el-form-item {
  margin-bottom: 0 !important;
}

.ng-table-controller .form-table tr td {
  box-sizing: border-box;
  transition: all 0.3s;
  padding: 3px 3px;
  border-collapse: collapse;
  display: table-cell;
  vertical-align: inherit;
}

.ng-table-controller .form-table tr td .el-form-item {
  margin-bottom: 0 !important;
}

.ng-table-controller .form-table tr td .list-main {
  min-height: 60px;
}

.ng-table-controller .form-table tr td .cell {
  padding-right: 2px;
  padding-left: 2px;
}

.table-bordered {
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
}

</style>
<!--
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
</style> -->
