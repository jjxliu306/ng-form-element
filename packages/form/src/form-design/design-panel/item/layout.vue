<template>
  <div
    :class="{
      'layout-width': ['control', 'table', 'grid', 'divider', 'html'].includes(
        record.type
      )
    }"
  >
    <!-- 动态表格设计模块 start -->
   <!--  <span>record.list: {{record.list}} </span> -->
    <template v-if="record && record.type === 'batch'">
      <div
        :class="[
          'batch-box',
          record.options.customClass ? record.options.customClass : '' ,
          record.key === selectItem.key ? 'active' : ''
        ]" 
        :style="record.options.customStyle"
        @click="handleSelectItem(record)"
      >
        <div class="batch-label">{{record.label}}</div> 
         <draggable
          tag="div"
          class="draggable-box"
          v-bind="{
            group: insertAllowed ? 'form-draggable' : '',
            ghostClass: 'moving',
            animation: 180,
            handle: '.drag-move'
          }"
          :force-fallback="true"
          v-model="record.list"
          @start="$emit('dragStart', $event, record.list)"
          @add="$emit('handleColAdd', $event, record.list)"
        >

          <transition-group tag="div" name="list" class="list-main">
            <formNode
              v-for="item in record.list"
              :key="item.key"
              class="drag-move"
              :selectItem.sync="selectItem"
              :record="item"
              :hideModel="hideModel"
              :config="config"
              @handleSelectItem="handleSelectItem"
              @handleColAdd="handleColAdd"
              @handleCopy="$emit('handleCopy')"
              @handleShowRightMenu="handleShowRightMenu"
              @handleDetele="$emit('handleDetele')"
            />
          </transition-group>
        </draggable>
      
        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <i class="el-icon-copy-document" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <i class="el-icon-delete" />
        </div>
      </div>
    </template>
    <!-- 动态表格设计模块 end -->
    <!-- 栅格布局 start -->
    <template v-else-if="record &&  record.type === 'grid'">
      <div
        class="grid-box"
        :class="{ active: record.key === selectItem.key }"
        @click.stop="handleSelectItem(record)"
      >
        <el-row class="grid-row" :gutter="record.options.gutter">
          <el-col
            class="grid-col"
            v-for="(colItem, idnex) in record.columns"
            :key="idnex"
            :span="colItem.span || 0"
          >
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
              v-model="colItem.list"
              @start="$emit('dragStart', $event, colItem.list)"
              @add="$emit('handleColAdd', $event, colItem.list)"
            >
              <transition-group tag="div" name="list" class="list-main">
                <layoutItem
                  class="drag-move"
                  v-for="item in colItem.list"
                  :key="item.key"
                  :selectItem.sync="selectItem"
                  :startType="startType"
                  :insertAllowedType="insertAllowedType"
                  :record="item"
                  :hideModel="hideModel"
                  :config="config"
                  @handleSelectItem="handleSelectItem"
                  @handleColAdd="handleColAdd"
                  @handleCopy="$emit('handleCopy')"
                  @handleShowRightMenu="handleShowRightMenu"
                  @handleDetele="$emit('handleDetele')"
                />
              </transition-group>
            </draggable>
          </el-col>
        </el-row>

        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <i class="el-icon-copy-document" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <i class="el-icon-delete" />
        </div>
      </div>
    </template>
    <!-- 栅格布局 end -->
    <!-- 容器 start -->

     <template v-else-if="record && record.type === 'control'">
      <div
        :class="[
          'grid-box','control-form', 
          record.options.customClass ? record.options.customClass : '' ,
          record.key === selectItem.key ? 'active' : '',
          record.options && record.options.bordered ? 'form-table-bordered' : '' 
        ]" 
        :style="record.options.customStyle"
        @click="handleSelectItem(record)"
      >
        <!-- <div class="batch-label">弹性容器</div>  -->
         <draggable
          tag="div"
          class="draggable-box"
          v-bind="{
            group: insertAllowed ? 'form-draggable' : '',
            ghostClass: 'moving',
            animation: 180,
            handle: '.drag-move'
          }"
          :force-fallback="true"
          v-model="record.list"
          @start="$emit('dragStart', $event, record.list)"
          @add="$emit('handleColAdd', $event, record.list)"
        >

          <transition-group tag="div" name="list" class="list-main">
            <formNode
              v-for="item in record.list"
              :key="item.key"
              class="drag-move"
              :selectItem.sync="selectItem"
              :record="item"
              :hideModel="hideModel"
              :config="config"
              @handleSelectItem="handleSelectItem"
              @handleColAdd="handleColAdd"
              @handleCopy="$emit('handleCopy')"
              @handleShowRightMenu="handleShowRightMenu"
              @handleDetele="$emit('handleDetele')"
            />
          </transition-group>
        </draggable>
      
        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <i class="el-icon-copy-document" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <i class="el-icon-delete" />
        </div>
      </div>
    </template>
 
    <!-- 容器 end -->
    
    <!-- 表格布局 start -->
    <template v-else-if="record && record.type === 'table'">
      <div
        class="table-box"
        :class="{ active: record.key === selectItem.key }"
        @click.stop="handleSelectItem(record)"
      > 
        <table 
          :class="[
            'table-layout','form-table',
            record.options.customClass ? record.options.customClass : '' ,
            record.options.bright ? 'bright' : '' ,
            record.options.small ? 'small' : '' ,
            record.options.bordered ? 'bordered' : '' 
          ]" 
          :style="record.options.customStyle"
        >
          <tr v-for="(trItem, trIndex) in record.trs" :key="trIndex" >
            <td
              :class="['table-td', tdItem.class]"
              :style="tdItem.style"
              v-for="(tdItem, tdIndex) in trItem.tds"
              :key="tdIndex"
              :colspan="tdItem.colspan"
              :rowspan="tdItem.rowspan"
              @contextmenu.prevent="
                $emit('handleShowRightMenu', $event, record, trIndex, tdIndex , tdItem.colspan > 1 || tdItem.rowspan > 1)
              "
            > 
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
                v-model="tdItem.list"
                @start="$emit('dragStart', $event, tdItem.list)"
                @add="$emit('handleColAdd', $event, tdItem.list)"
              >
                <transition-group tag="div" name="list" class="list-main">
                  <layoutItem
                    class="drag-move"
                    v-for="item in tdItem.list"
                    :key="item.key"
                    :selectItem.sync="selectItem"
                    :startType="startType"
                    :insertAllowedType="insertAllowedType"
                    :record="item"
                    :hideModel="hideModel"
                    :config="config"
                    @handleSelectItem="handleSelectItem"
                    @handleColAdd="handleColAdd"
                    @handleCopy="$emit('handleCopy')"
                    @handleShowRightMenu="handleShowRightMenu"
                    @handleDetele="$emit('handleDetele')"
                  />
                </transition-group>
              </draggable>
            </td>
          </tr>
        </table>

        <div
          class="copy"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleCopy')"
        >
          <i class="el-icon-copy-document" />
        </div>
        <div
          class="delete"
          :class="record.key === selectItem.key ? 'active' : 'unactivated'"
          @click.stop="$emit('handleDetele')"
        >
          <i class="el-icon-delete" />
        </div>
      </div>
    </template>
    <!-- 表格布局 end -->
    <template v-else-if="record != undefined">
      <formNode
        :key="record.key"
        :selectItem.sync="selectItem"
        :record="record"
        :config="config"
        :hideModel="hideModel"
        @handleSelectItem="handleSelectItem"
        @handleCopy="$emit('handleCopy')"
        @handleDetele="$emit('handleDetele')"
        @handleShowRightMenu="$emit('handleShowRightMenu')"
      />
    </template>
  </div>
</template>
<script>
 
import draggable from "vuedraggable";
import formNode from "./node";
export default {
  name: "layoutItem",
  props: {
    record: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    },
    startType: {
      type: String,
      required: true
    },
    insertAllowedType: {
      type: Array,
      required: true
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    insertAllowed() {
      return this.insertAllowedType.includes(this.startType);
    }
  },
  components: {
    formNode,
    draggable
  },
  methods: {
    handleShowRightMenu(e, record, trIndex, tdIndex , isMergeCol) {
      this.$emit("handleShowRightMenu", e, record, trIndex, tdIndex , isMergeCol);
    },
    handleSelectItem(record) { 
      this.$emit("handleSelectItem", record);
    },
    handleColAdd(e, list) {
      this.$emit("handleColAdd", e, list);
    },

  }
};
</script>
