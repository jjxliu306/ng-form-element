<template>  
	<div 
	 	v-if="!preview"
	 	:style="`width:${record.options.width}`" 
	 	class="form-item-base-number el-input-number-diaplay">

        <el-input-number
          :class="record.options.append ? 'el-input-number__append' : null" 
          v-model="models[record.model]" 
          :style="`width:${record.options.width};float:left;`" 
          :min="
            record.options.min || record.options.min === 0
              ? record.options.min
              : -Infinity
          "
          :max="
            record.options.max || record.options.max === 0
              ? record.options.max
              : Infinity
          "
          :disabled="recordDisabled"
          :step="record.options.step"
          :precision="
            record.options.precision > 50 ||
            (!record.options.precision && record.options.precision !== 0)
              ? null
              : record.options.precision
          "
          controls-position="right"
          :placeholder="record.options.placeholder" 
          @focus="handleFocus"
      		@blur="handleBlur"
        > </el-input-number>
        <div class="el-input-group__append el-input-number-group__append " v-if="record.options.append" v-html="transformAppend(record.options.append)">
         
        </div>
  </div>
  <div v-else>
  	<span  class="base-item-span" v-if="record.options.prepend" v-html="transformAppend(record.options.prepend)"> 
    </span>
    <span class="base-item-span" >{{models[record.model]}} </span>
    <span class="base-item-span" v-if="record.options.append" v-html="transformAppend(record.options.append)"> 
    </span>  
  </div>
</template>
<script>
import { dynamicFun } from '../../../../utils/index.js'
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	created () { 
	  this.updateSimpleDefaultValue()
	}
}
</script>
<style lang="scss">
.form-item-base-number {
  vertical-align: middle;
  display: inline-flex;
  position: relative;
  width: 100%;

  .el-input-number__append {
	  float: left;
	  border-top-right-radius: 0;
	  border-bottom-right-radius: 0;
	  background-color: #F5F7FA;
	  color: #909399;
	  vertical-align: middle;
	  display: table-cell;
	  position: relative;
	  border: 1px solid #DCDFE6;
	  border-radius: 4px;
	  white-space: nowrap;
	  border-left: 0;
	  border-right: 0;

	  .el-input__inner {
		  border-top-right-radius: 0;
		  border-bottom-right-radius: 0;
		}
	}

	.el-input-number-group__append {
	  border-left: 0;
	  text-align: center;
	  display: inline-table;
	}
} 

.base-item-span {
	white-space: pre-wrap;
}
</style>