<!-- 弹性容器 -->
<template>
    <div
        :class="[
            'ng-table-controller',
            record.options.customClass ? record.options.customClass : '',
            record.options && record.options.bordered ? 'controller-bordered' : '',
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
    mixins: [mixin],
    components: {
        Build,
        Design,
    },
    data() {
        return {
            showRightMenu: false,
            selectControlIndex: undefined,
        }
    },
    methods: {
        handleSelectItem(item) {
            this.$emit('handleSelectItem', item)
        },
    },
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

.ng-table-controller .form-table.bordered .grid-item {
    border: 1px solid #e8e8e8 !important;
}

.ng-table-controller .form-table.bright .grid-item:hover {
    background: #fafafa;
}

.ng-table-controller .form-table .el-row .el-form-item {
    margin: 0 !important;
}

.ng-table-controller .form-table .grid-item {
    min-height: 45px;
}

.ng-table-controller .form-table .grid-item .draggable-box {
    min-height: 45px;
}

.ng-table-controller .form-table .grid-item {
    transition: all 0.3s;
    border-collapse: collapse;
}

.ng-table-controller .form-table .grid-item .el-form-item {
    margin-bottom: 0 !important;
}

.ng-table-controller .form-table .grid-item {
    box-sizing: border-box;
    transition: all 0.3s;
    padding: 3px 3px;
    border-collapse: collapse;
    display: table-cell;
    vertical-align: inherit;
}

.ng-table-controller .form-table .grid-item .el-form-item {
    margin-bottom: 0 !important;
}

.ng-table-controller .form-table .grid-item .list-main {
    min-height: 60px;
}

.ng-table-controller .form-table .grid-item .cell {
    padding-right: 2px;
    padding-left: 2px;
}

.ng-table-controller .draggable-box {
    transition: background-color 0.3s;
}
.ng-table-controller .draggable-box:hover {
    background-color: white;
}

.ng-table-controller .drag-move {
    margin-bottom: 10px;
}

.ng-table-controller .grid-build {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
}

.table-bordered {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
}
.grid-layout {
    display: grid;
    padding: 4px;
}
</style>
