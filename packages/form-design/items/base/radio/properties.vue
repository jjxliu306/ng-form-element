<template>
<div>
  <el-collapse-item name="data" title="数据">
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
import DatasourceConfig from '../select/datasource-config.vue'
import Linkage from '../select/linkage.vue'
export default {
  components: {
    DatasourceConfig , Linkage
  },
  props: {
    selectItem: {
      type: Object
    }
  }
}
</script>