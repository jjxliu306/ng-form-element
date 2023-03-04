<template>
<el-collapse-item name="data" title="数据">
  <DatasourceConfig :selectItem="selectItem">
    <template slot="defaultValue" >
      <el-form-item v-if="selectItem && selectItem.options.dynamic == 0" label="默认值">
        <!-- 判断当前是否多选 -->
        <el-checkbox-group
          :options="selectItem.options.options"
          v-model="selectItem.options.defaultValue"
          >
          <el-checkbox  v-for="(item, index) in  [].concat(selectItem.options.options)" :label="item.value" :key="item.value + index"> 
            {{item.label}}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </template>
  </DatasourceConfig>
</el-collapse-item>
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