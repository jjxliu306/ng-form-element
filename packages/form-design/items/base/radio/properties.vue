<template>
  <DatasourceConfig :selectItem="selectItem">
    <template slot="defaultValue" >
      <el-form-item v-if="selectItem && selectItem.options.dynamic == 0" label="默认值">
        <!-- 判断当前是否多选 -->
        <el-radio-group
          :options="selectItem.options.options"
          v-model="selectItem.options.defaultValue"
          >
          <el-radio  v-for="(item, index) in  [].concat(selectItem.options.options)" :label="item.value" :key="item.value + index"> 
            {{item.label}}
          </el-radio>
        </el-radio-group> 
      </el-form-item>
    </template>
  </DatasourceConfig>
</template>
<script>
import DatasourceConfig from '../select/datasource-config.vue'
export default {
  components: {
    DatasourceConfig
  },
  props: {
    selectItem: {
      type: Object
    }
  }
}
</script>