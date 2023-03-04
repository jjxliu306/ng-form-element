<template>
<el-collapse-item name="data" title="数据">
  <DatasourceConfig :selectItem="selectItem"> 
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