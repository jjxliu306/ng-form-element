<template>
  <DatasourceConfig :selectItem="selectItem">
    <template slot="defaultValue" >
      <el-form-item v-if="selectItem && selectItem.options.dynamic == 0" label="默认值">
        <!-- 判断当前是否多选 -->
        <el-select :multiple="selectItem.options.multiple" v-model="selectItem.options.defaultValue"  :clearable="true">
          <el-option
                v-for="(item, index) in selectItem.options.options"
                :key="item.value + index"
                :label="item.label"
                :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </template>
  </DatasourceConfig>
</template>
<script>
import DatasourceConfig from './datasource-config.vue'
export default {
  components: {
    DatasourceConfig
  },
	props: {
		selectItem: {
			type: Object
		}
	},
  computed: {
    multiple() {
      if(this.selectItem && this.selectItem.options)
        return this.selectItem.options.multiple
      return undefined
    }
  },
  watch: {
    multiple(val) {
      if(val == undefined) return 
      if(val) {
        this.$set(this.selectItem.options , 'defaultValue' , [])
      } else {
        this.$set(this.selectItem.options , 'defaultValue' , '')
      }
    }
  }
}
</script>