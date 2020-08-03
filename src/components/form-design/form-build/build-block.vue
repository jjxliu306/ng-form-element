<template>
  <!-- 栅格布局 -->
  <el-row
    v-if="record.type === 'grid' && dynamicVisibleItem"
    class="grid-row"
    :gutter="record.options.gutter"
  >
    <el-col
      class="grid-col"
      v-for="(colItem, idnex) in record.columns"
      :key="idnex"
      :span="colItem.span || 0"
    >
      <buildBlocks
        ref="nestedComponents"
        @handleReset="$emit('handleReset')"
        @change="handleChange"
        v-for="item in colItem.list"
        :disabled="disabled"
        :renderPreview="renderPreview"
        :models.sync="models"  
        :key="item.key"
        :record="item"
        :formConfig="formConfig"
        :config="config"
      />
    </el-col>
  </el-row> 
  <!-- 表格布局 -->
  <table
    v-else-if="record.type === 'table' && dynamicVisibleItem" 
    :class="[
      'table-layout','form-table',
      record.options.customClass ? record.options.customClass : '' ,
      record.options.bright ? 'bright' : '' ,
      record.options.small ? 'small' : '' ,
      record.options.bordered ? 'bordered' : '' 
    ]" 
    :style="record.options.customStyle"
    >
    <tr v-for="(trItem, trIndex) in record.trs" :key="trIndex">
      <td
        :class="['table-td', tdItem.class]"
        :style="tdItem.style"
        v-for="(tdItem, tdIndex) in trItem.tds"
        :key="tdIndex"
        :colspan="tdItem.colspan"
        :rowspan="tdItem.rowspan"
      >
        <buildBlocks
          ref="nestedComponents"
          @handleReset="$emit('handleReset')"
          @change="handleChange"
          v-for="item in tdItem.list"
          :disabled="disabled"
          :renderPreview="renderPreview"
          :models.sync="models"  
          :key="item.key"
          :record="item"
          :formConfig="formConfig"
          :config="config"
        />
      </td>
    </tr>
  </table>

  <FormItem
    ref="nestedComponents"
    @handleReset="$emit('handleReset')"
    @change="handleChange"
    v-else-if="dynamicVisibleItem"
    :disabled="disabled" 
    :renderPreview="renderPreview"
    :models.sync="models" 
    :key="record.key"
    :record="record"
    :formConfig="formConfig"
    :config="config"
  />
</template>
<script>
 
import  FormItem from "../form-item/index";
export default {
  name: "buildBlocks",
  props: {
    record: {
      type: Object,
      required: true
    },
    models: {
      type: Object , 
      required: true
    },
    formConfig: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      default: () => ({})
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }
  },
  components: {
    FormItem
  },
  computed: { 
    // 是否动态显示当前元素 
    // 返回true 显示 false 不显示
    dynamicVisibleItem(){
      
      if(!this.record.options || !this.record.options.dynamicVisible){
        return true
      }
      if(!this.record.options.dynamicVisibleValue){
        return true
      }
      let fstr = this.record.options.dynamicVisibleValue;
      // 打开了开关 这里获取函数内容
      const func = 'return (' + fstr + ')' 
      const Fn = new Function('$', func)
      return Fn(this.models)
    }
  },
  methods: {
    validationSubform() {
      // 验证动态表格
      if (
        typeof this.$refs.nestedComponents === "undefined" ||
        typeof this.$refs.nestedComponents.validationSubform === "undefined"
      )
        return true;

      return this.$refs.nestedComponents.validationSubform();
    },
    handleChange(value, key) { 
      this.$emit("change", value, key);
    }
  }
};
</script>
