<template>
	<div
              class="table-box" 
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
                      class="draggable-box td-draggable"
                      v-bind="{
                        group: 'form-draggable',
                        ghostClass: 'moving',
                        animation: 180,
                        handle: '.drag-move'
                      }"
                      :force-fallback="true"
                      v-model="tdItem.list"
                      @add="dragEnd($event, tdItem.list)" 
                    > 
                      
                        <el-row class="td-row"> 
                          <template   v-for="item in tdItem.list">
                              {{item.key}}
                             <ng-form-node 
                              :key="item.key"
                              class="drag-move"
                              :selectItem="selectItem"
                              :record="item"
                              :config="formConfig"
                              @handleSelectItem="handleSelectItem"
                              @handleCopy="handleCopy(item)"
                              @handleDetele="handleDetele(item)"
                            /> 
                          </template> 
                        </el-row>
                      
                    </draggable>
                  </td>
                </tr>
              </table> 
            </div> 
</template>
<script>
import mixin from '../../mixin.js'
export default {
	mixins: [mixin] ,
	created() {
		if(this.record && (this.record.trs == null || this.record.trs == undefined)) {

	        this.$set(this.record, 'trs' ,  [
	          {
	            tds: [
	              {
	                colspan: 1,
	                rowspan: 1,
	                list: []
	              },
	              {
	                colspan: 1,
	                rowspan: 1,
	                list: []
	              }
	            ]
	          },
	          {
	            tds: [
	              {
	                colspan: 1,
	                rowspan: 1,
	                list: []
	              },
	              {
	                colspan: 1,
	                rowspan: 1,
	                list: []
	              }
	            ]
	          }
	        ])
      	}
	},
	methods: {
		dragEnd(evt, list) {   
      		// 拖拽结束,自动选择拖拽的控件项
      		this.handleSelectItem(list[evt.newIndex])
    	},
		handleSelectItem(item) {
			this.$emit('handleSelectItem' , item)
		}
	}
}
</script>
<style lang="scss">
.table-box {
	.td-draggable , .td-row {
		min-height: 65px;
		min-width: 100px;
	}

	.td-draggable{
		border: 1px solid #e8e8e8 !important;

	}
}

</style>
