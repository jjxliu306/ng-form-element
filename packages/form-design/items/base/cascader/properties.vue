<template>
  <DatasourceConfig :selectItem="selectItem"> 
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