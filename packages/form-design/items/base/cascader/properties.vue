<template>
<el-collapse-item name="data" :title="t('ngform.item.datasource')">
  <DatasourceConfig :selectItem="selectItem"> 
  </DatasourceConfig>
</el-collapse-item>
</template>
<script>
import DatasourceConfig from '../select/datasource-config.vue'
import LocalMixin from '../../../../locale/mixin.js'
export default {
  mixins: [LocalMixin],
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