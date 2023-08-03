<template>
<div>  
    <el-collapse-item name="data" :title="t('ngform.item.datasource')">
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
    </el-collapse-item>
    <el-collapse-item name="linkage" title="联动" class="linkage-item">
      <el-form   size="mini" label-width="80px"  class="linkage-form">
        <el-form-item label="联动关联">
            <el-switch
              v-model="selectItem.options.linkage"
              active-text="是"
              inactive-text="否">
            </el-switch> 
          </el-form-item>
          <template v-if="selectItem.options.linkage">
            <!-- 联动关联中如果事本地数据则只有脚本关联,如果是远程数据则包含远程搜索 -->
            <Linkage v-model="selectItem.options.linkData" />
          </template>
      </el-form>
    </el-collapse-item>
</div>   
</template>
<script>
import DatasourceConfig from './datasource-config.vue'
import Linkage from './linkage.vue'
import LocalMixin from '../../../../locale/mixin.js'
export default {
  mixins: [LocalMixin],
  components: {
    DatasourceConfig , Linkage
  },
  data() {
    return {
      
    }
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
 