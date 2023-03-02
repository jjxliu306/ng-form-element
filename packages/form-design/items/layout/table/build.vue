<template>
<div
              class="table-box"  
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
                    
                  >
                     
                        <el-row> 
                          <template   v-for="item in tdItem.list">
                              
                              <ng-form-item
                                ref="nestedComponents"
                                :key="item.key"
                                :disabled="disabled"
                                :renderPreview="renderPreview"
                                :models.sync="models"   
                                :record="item"
                                :formConfig="formConfig"  
                              />
                             
                          </template> 
                        </el-row>
                  </td>
                </tr>
              </table> 
            </div> 
</template>
<script>
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	created() {
		 
	}
}
</script>