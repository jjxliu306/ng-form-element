<template>
    <div class="table-box">
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
                class="grid-item"
                v-for="grid in record.grids.list"
                v-show="grid.show"
                :key="grid.key"
                :style="getGridItemStyle(grid)"
            >
                <div
                    :class="grid.class"
                    :style="grid.style"
                >
                    <ng-form-node
                        v-for="item in grid.list"
                        :key="item.key"
                        class="drag-move"
                        :selectItem="selectItem"
                        :record="item"
                        @handleSelectItem="handleSelectItem"
                        @handleCopy="handleCopy(item, grid)"
                        @handleDetele="handleDetele(item, grid)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mixin from '../../mixin.js'
export default {
    mixins: [mixin],
    created() {
        // 设置高度防止高度塌陷
        this.record.grids.list.forEach((grid) => {
            if (grid.style.indexOf('height') > -1) return
            let heightStyle = 'height:100%'
            if (grid.style[grid.style.length - 1] === ';') {
                heightStyle = 'height:100%;'
            } else {
                heightStyle = ';height:100%;'
            }
            this.$set(grid, 'style', grid.style + heightStyle)
        })
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
    },
    computed: {
        getGridStyle() {
            return {
                'grid-template-columns': `repeat(${this.record.grids.colNum}, 1fr)`,
                'grid-template-rows': `repeat(${this.record.grids.rowNum}, 1fr)`,
            }
        },
    },
}
</script>
<style></style>
