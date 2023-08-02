<template>
    <div
        class="table-box"
        @click.stop="handleSelectItem(record)"
    >
        <div
            :class="[
                'form-table',
                'grid-layout',
                record.options.customClass ? record.options.customClass : '',
                record.options.bright ? 'bright' : '',
                record.options.small ? 'small' : '',
                record.options.bordered ? 'bordered' : '',
            ]"
            :style="getGridStyle"
        >
            <div
                v-for="(grid, index) in record.grids.list"
                :key="grid.key"
                :style="getGridItemStyle(grid)"
                v-show="grid.show"
                @contextmenu.prevent="
                    showRightMenuHandle($event, index, grid.colEnd - grid.colStart >= 1 || grid.rowEnd - grid.rowStart >= 1)
                "
            >
                <div
                    :class="grid.class"
                    :style="grid.style"
                >
                    <draggable
                        tag="div"
                        class="draggable-box td-draggable"
                        v-bind="{
                            group: 'form-draggable',
                            ghostClass: 'moving',
                            animation: 180,
                            handle: '.drag-move',
                        }"
                        :force-fallback="true"
                        v-model="grid.list"
                        @add="dragEnd($event, grid)"
                    >
                        <ng-form-node
                            v-for="item in grid.list"
                            :key="item.key"
                            class="drag-move grid-item"
                            :selectItem="selectItem"
                            :record="item"
                            @handleSelectItem="handleSelectItem"
                            @handleCopy="handleCopy(item, grid)"
                            @handleDetele="handleDetele(item, grid)"
                        />
                    </draggable>
                </div>
            </div>
        </div>

        <div
            v-show="showRightMenu"
            :style="{
                top: menuTop + 'px',
                left: menuLeft + 'px',
            }"
            class="right-menu"
            id="table-design-rightmenu"
        >
            <ul>
                <li @click="handleSettingStyle">
                    <i class="el-icon-magic-stick" />
                    样式配置
                </li>
                <hr />
                <template v-if="isMergeCol">
                    <li @click="handleDropMerge()">
                        <i class="el-icon-delete" />
                        解除合并
                    </li>
                    <hr />
                </template>
                <li @click="handleDownMerge">
                    <i class="el-icon-bottom" />
                    向下合并
                </li>
                <li @click="handleRightMerge">
                    <i class="el-icon-right" />
                    向右合并
                </li>
                <li @click="handleAddCol">
                    <i class="el-icon-zoom-in" />
                    增加一列
                </li>
                <li @click="handleAddRow">
                    <i class="el-icon-zoom-in" />
                    增加一行
                </li>
                <hr />
                <li @click="handleRemoveRow">
                    <i class="el-icon-zoom-out" />
                    删除当前行
                </li>
                <li @click="handleRemoveCol">
                    <i class="el-icon-zoom-out" />
                    删除当前列
                </li>
            </ul>
        </div>

        <el-dialog
            title="表内单元格样式配置"
            :visible.sync="styleVisible"
            style="top: 20px"
            :append-to-body="true"
        >
            <el-form
                size="mini"
                :model="tdStyle"
                label-width="80px"
            >
                <el-form-item label="class">
                    <el-input
                        v-model="tdStyle.class"
                        placeholder="请输入class名称"
                    />
                </el-form-item>
                <el-form-item label="style">
                    <el-input
                        type="textarea"
                        :rows="3"
                        v-model="tdStyle.style"
                        placeholder="请输入css样式"
                    />
                </el-form-item>
            </el-form>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="styleVisible = false">取 消</el-button>
                <el-button
                    type="primary"
                    @click="settingStyle"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import mixin from '../../mixin.js'
import draggable from 'vuedraggable'
export default {
    mixins: [mixin],
    components: {
        draggable,
    },
    data() {
        return {
            showRightMenu: false,
            isMergeCol: false,
            menuTop: 0,
            menuLeft: 0,
            index: 0,
            styleVisible: false,
            tdStyle: {
                style: '',
                class: '',
            },
        }
    },
    computed: {
        getGridStyle() {
            return {
                'grid-template-columns': `repeat(${this.record.grids.colNum}, 1fr)`,
                'grid-template-rows': `repeat(${this.record.grids.rowNum}, 1fr)`,
            }
        },
    },
    created() {
        if (this.record && (this.record.grids == null || this.record.grids == undefined)) {
            //根据colNum和rowNum生成表格
            const grids = {
                list: [],
                rowNum: 2,
                colNum: 2,
            }
            let rowNum = grids.rowNum
            let colNum = grids.colNum
            for (let i = 0; i < colNum * rowNum; i++) {
                grids.list.push({
                    key: new Date().getTime(),
                    list: [],
                    colStart: (i % colNum) + 1,
                    colEnd: (i % colNum) + 1,
                    rowStart: Math.floor(i / colNum) + 1,
                    rowEnd: Math.floor(i / colNum) + 1,
                    show: true,
                    style: '',
                    class: '',
                })
            }
            this.$set(this.record, 'grids', grids)
        }
    },
    mounted() {
        // 添加监听取消右键菜单
        document.addEventListener('click', this.handleRemoveRightMenu, true)
        document.addEventListener('contextmenu', this.handleRemoveRightMenu, true)
    },
    destroyed() {
        // 移除监听
        document.removeEventListener('click', this.handleRemoveRightMenu, true)
        document.removeEventListener('contextmenu', this.handleRemoveRightMenu, true)
    },
    methods: {
        getGridItemStyle(item) {
            return {
                'grid-area': `${item.rowStart} / ${item.colStart} / span ${item.rowEnd - item.rowStart + 1} / span ${
                    item.colEnd - item.colStart + 1
                }`,
                'min-height': (item.rowEnd - item.rowStart + 1) * 65 + 'px',
            }
        },
        dragEnd(evt, list) {
            // 拖拽结束,自动选择拖拽的控件项
            this.handleSelectItem(list[evt.newIndex])
        },
        handleCopy(item, parent) {
            const nitem = cloneDeep(item)
            const key = item.type + '_' + new Date().getTime()
            nitem.key = key
            nitem.model = key

            // 找到index 插入
            const oindex = parent.list.findIndex((t) => t.key == item.key)

            if (oindex >= 0) {
                // insert
                parent.list.splice(oindex + 1, 0, nitem)
            }
        },
        handleDetele(item, parent) {
            const oindex = parent.list.findIndex((t) => t.key == item.key)
            if (oindex >= 0) {
                parent.list.splice(oindex, 1)
            }
        },
        // 解除合并
        handleDropMerge() {
            const index = this.index
            const item = this.record.grids.list[index]
            const colNum = this.record.grids.colNum
            const rowNum = this.record.grids.rowNum

            //遍历list，找到所有还原项
            const list = this.record.grids.list
            for (let i = index + 1; i < list.length; i++) {
                const currentRow = Math.floor(i / colNum) + 1 //当前行
                const currentCol = (i % colNum) + 1 //当前列
                const target = list[i]
                if (item.colStart <= currentCol && item.colEnd >= currentCol && item.rowStart <= currentRow && item.rowEnd >= currentRow) {
                    target.colStart = currentCol
                    target.colEnd = currentCol
                    target.rowStart = currentRow
                    target.rowEnd = currentRow
                    target.show = true //显示
                }
            }
            //还原当前项
            item.colEnd = item.colStart
            item.rowEnd = item.rowStart
        },
        handleDownMerge() {
            //向下合并
            const list = this.record.grids.list
            const index = this.index
            const item = list[index]
            const colStart = item.colStart
            const colEnd = item.colEnd
            const rowEnd = item.rowEnd
            //在list中查找是否有可以合并的项
            let mergeItem = null
            for (let i = index + 1; i < list.length; i++) {
                const target = list[i]
                if (rowEnd + 1 == target.rowStart && target.show && target.colStart == colStart && target.colEnd == colEnd) {
                    mergeItem = target
                    break
                }
            }
            if (mergeItem) {
                // 合并
                item.rowEnd = mergeItem.rowEnd
                item.list = item.list.concat(cloneDeep(mergeItem.list))
                // 被合并项数据清空
                mergeItem.rowEnd = mergeItem.rowStart
                mergeItem.colEnd = mergeItem.colStart
                mergeItem.list = []
                mergeItem.show = false
            } else {
                // 不能合并
                this.$message({
                    message: '当前网格不能向下合并',
                    type: 'warning',
                })
            }
        },
        handleRightMerge() {
            //向右合并
            const list = this.record.grids.list
            const index = this.index
            const item = list[index]
            const rowStart = item.rowStart
            const rowEnd = item.rowEnd
            const colEnd = item.colEnd
            //在list中查找是否有可以合并的项
            let mergeItem = null
            for (let i = index + 1; i < list.length; i++) {
                const target = list[i]
                if (target.rowStart == rowStart && target.rowEnd == rowEnd && target.colStart === colEnd + 1 && target.show) {
                    mergeItem = target
                    break
                }
            }
            if (mergeItem) {
                // 合并
                item.colEnd = mergeItem.colEnd
                item.list = item.list.concat(cloneDeep(mergeItem.list))
                // 被合并项数据清空
                mergeItem.rowEnd = mergeItem.rowStart
                mergeItem.colEnd = mergeItem.colStart
                mergeItem.list = []
                mergeItem.show = false
            } else {
                // 不能合并
                this.$message({
                    message: '当前网格不能向右合并',
                    type: 'warning',
                })
            }
        },
        handleAddCol() {
            // 增加列
            this.record.grids.colNum++
            const colNum = this.record.grids.colNum
            const rowNum = this.record.grids.rowNum
            const list = this.record.grids.list
            for (let i = 0; i < rowNum; i++) {
                let item = {
                    list: [],
                    colStart: colNum,
                    colEnd: colNum,
                    rowStart: i + 1,
                    rowEnd: i + 1,
                    show: true,
                    style: '',
                    class: '',
                    key: new Date().getTime(),
                }
                //找到每一行的最后一个位置，插入
                for (let j = list.length - 1; j >= 0; j--) {
                    const target = list[j]
                    if (target.rowStart == item.rowStart) {
                        list.splice(j + 1, 0, item)
                        break
                    }
                }
            }
        },
        handleAddRow() {
            // 增加行
            this.record.grids.rowNum++
            const colNum = this.record.grids.colNum
            const rowNum = this.record.grids.rowNum
            const list = this.record.grids.list
            for (let i = 0; i < colNum; i++) {
                list.push({
                    list: [],
                    colStart: i + 1,
                    colEnd: i + 1,
                    rowStart: rowNum,
                    rowEnd: rowNum,
                    show: true,
                    style: '',
                    class: '',
                    key: new Date().getTime(),
                })
            }
        },
        handleRemoveRow() {
            // 删除一行
            if (this.record.grids.rowNum == 1) {
                this.$message({
                    message: '不能删除最后一行',
                    type: 'warning',
                })
                return
            }
            // 找到当前行的所有项
            const index = this.index
            const list = this.record.grids.list
            const currentRow = Math.floor(index / this.record.grids.colNum) + 1 //当前行
            let isMerge = false
            for (let i = list.length - 1; i >= 0; i--) {
                const item = list[i]
                // 查找当前行的所有项
                if (item.rowStart == currentRow) {
                    // 判断当前项是否被合并
                    if (item.rowStart != item.rowEnd || item.colStart != item.colEnd) {
                        isMerge = true
                        break
                    }
                } else {
                    //判断非当前行的合并项是否包含当前行
                    if (item.rowStart <= currentRow && item.rowEnd >= currentRow) {
                        isMerge = true
                        break
                    }
                }
            }
            if (isMerge) {
                this.$message({
                    message: '当前行有合并项，不能删除',
                    type: 'warning',
                })
                return
            }
            // 删除当前行
            for (let i = list.length - 1; i >= 0; i--) {
                const item = list[i]
                // 删除当前行的所有项
                if (item.rowStart == currentRow) {
                    list.splice(i, 1)
                }
                // 修改当前行下面的所有项的行号
                if (item.rowStart > currentRow && item.show) {
                    item.rowStart--
                    item.rowEnd--
                }
            }
            this.record.grids.rowNum-- //行数减一
        },
        handleRemoveCol() {
            // 删除一列
            if (this.record.grids.colNum == 1) {
                this.$message({
                    message: '不能删除最后一列',
                    type: 'warning',
                })
                return
            }
            // 找到当前列的所有项
            const index = this.index
            const list = this.record.grids.list
            const currentCol = (index % this.record.grids.colNum) + 1 //当前列
            let isMerge = false
            for (let i = list.length - 1; i >= 0; i--) {
                const item = list[i]
                // 查找当前列的所有项
                if (item.colStart == currentCol) {
                    // 判断当前项是否被合并
                    if (item.rowStart != item.rowEnd || item.colStart != item.colEnd) {
                        isMerge = true
                        break
                    }
                } else {
                    //判断非当前列的合并项是否包含当前列
                    if (item.colStart <= currentCol && item.colEnd >= currentCol) {
                        isMerge = true
                        break
                    }
                }
            }
            if (isMerge) {
                this.$message({
                    message: '当前列有合并项，不能删除',
                    type: 'warning',
                })
                return
            }
            // 删除当前列
            for (let i = list.length - 1; i >= 0; i--) {
                const item = list[i]
                // 删除当前列的所有项
                if (item.colStart == currentCol) {
                    list.splice(i, 1)
                }
                // 修改当前列右边的所有项的列号
                if (item.colStart > currentCol && item.show) {
                    item.colStart--
                    item.colEnd--
                }
            }
            this.record.grids.colNum-- //列数减一
        },
        handleSettingStyle() {
            // 样式配置
            const item = this.record.grids.list[this.index]

            const class_ = item.class
            const style_ = item.style

            this.tdStyle.style = style_
            this.tdStyle.class = class_

            this.styleVisible = true
        },
        settingStyle() {
            // 样式生效
            const item = this.record.grids.list[this.index]
            item.style = this.tdStyle.style
            item.class = this.tdStyle.class

            // 重新绘制 修改数据
            this.record.grids.list.splice(this.index, 1, item)

            this.styleVisible = false
        },
        showRightMenuHandle(e, index, isMergeCol) {
            // 显示右键菜单
            e.stopPropagation()
            // this.fileItem = item
            // 显示
            this.showRightMenu = true

            // 计算rightMenu得高度和宽度 和当前屏幕对比 来决定菜单出现得起始位置
            let height = 210
            let width = 280

            // 获取屏幕高度和宽度 比对
            const bodyHeight = document.body.clientHeight
            const bodyWidth = document.body.clientWidth

            // 定位
            if (e.clientY + height > bodyHeight) {
                this.menuTop = e.clientY - height
            } else {
                this.menuTop = e.clientY
            }

            if (e.clientX + width > bodyWidth) {
                this.menuLeft = e.clientX - width
            } else {
                this.menuLeft = e.clientX + 20
            }

            this.isMergeCol = isMergeCol
            this.index = index

            return false
        },
        handleRemoveRightMenu() {
            // 取消右键菜单
            this.showRightMenu = false
        },
    },
}
</script>
<style></style>
