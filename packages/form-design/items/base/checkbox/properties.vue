<template>
<div>
  <el-collapse-item name="data" :title="t('ngform.item.datasource')">
    <DatasourceConfig :selectItem="selectItem">
      <template slot="defaultValue" >
        <el-form-item v-if="selectItem && selectItem.options.dynamic == 0" :label="t('ngform.item.default_value')">
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
  <el-collapse-item name="linkage" :title="t('ngform.item.linkage_title')" class="linkage-item">
      <el-form   size="mini" label-width="80px"  class="linkage-form">
        <el-form-item :label="t('ngform.item.linkage')">
            <el-switch
              v-model="selectItem.options.linkage"
              :active-text="t('ngform.item.yes')"
              :inactive-text="t('ngform.item.no')">
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
import DatasourceConfig from '../select/datasource-config.vue'
import Linkage from '../select/linkage.vue'
import LocalMixin from '../../../../locale/mixin.js'
export default {
  mixins: [LocalMixin],
  components: {
    DatasourceConfig,Linkage
  },
  props: {
    selectItem: {
      type: Object
    }
  }
}
</script>