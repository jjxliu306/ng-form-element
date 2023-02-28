<template>
<el-form   size="mini" label-width="80px" label-position="right" class="cascader-properties-form">
	<el-form-item  label="数据来源" >
    <el-select clearable v-model="selectItem.options.dynamic" placeholder="请选择" style="width:100%"> 
	    <el-option label="静态数据" :value="0"></el-option>
	    <el-option label="API接口"  :value="1"></el-option> 
	 </el-select>
  </el-form-item>
  <el-divider>数据配置</el-divider> 
  <el-form-item label-width="0px" >
    <!-- 远程赋值配置 --> 
    <div v-if="selectItem.options.dynamic == 1">
      <el-input size="mini" v-model="selectItem.options.remoteFunc">
        <template slot="prepend">远端方法</template>
      </el-input>
      <el-input size="mini" v-model="selectItem.options.dataPath"  title="假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data">
        <template slot="prepend">列表数据dataPath</template>
      </el-input>
      <el-input size="mini" v-model="selectItem.options.remoteValue">
        <template slot="prepend">值字段</template>
      </el-input>
      <el-input size="mini" v-model="selectItem.options.remoteLabel">
        <template slot="prepend">标签字段</template>
      </el-input> 
    </div>  
   
    <!-- 本地赋值 -->
    <el-tree
        v-if="options.dynamic == 0"
        :data="selectItem.options.options"
        class="options-value-tree"
        show-checkbox 
        ref="tree"
        node-key="value" 
        default-expand-all
        @check-change="handleCheckChange"
        :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span> 
              <el-row :gutter="4">
                <el-col :span="9">
                  <el-input v-model="data.label" placeholder="名称" />
                </el-col>
                <el-col :span="9">
                  <el-input v-model="data.value" placeholder="值"/>
                </el-col>
                <el-col :span="6">
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => append(data)">
                    <i class="el-icon-circle-plus-outline"></i>
                  </el-button>
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => remove(node, data)">
                    <i class="el-icon-delete"></i>
                  </el-button>
                </el-col>
              </el-row>
            </span>
            
          </span>
        </el-tree>
   
  </el-form-item>
  <el-divider></el-divider> 
</el-form>
</template>
<script>
import KvList from '../../../../ng-form/kv-list.vue'
export default {
  components: {
    KvList
  },
	props: {
		selectItem: {
			type: Object
		}
	},
	computed: {
		options() {
			if(this.selectItem) {
				return this.selectItem.options 
			}
			return {}
		}
	},
  methods: { 
    append(data) {
        const newChild = { value: '', label: '' };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
    },

    remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.value === data.value);
        children.splice(index, 1);
    },
    // 静态数据下选中默认值
    handleCheckChange(data, checked, indeterminate) {
      
      const checks = this.$refs.tree.getCheckedKeys()

      this.$set(this.selectItem.options , 'defaultValue' , checks)
    }
  }
}
</script>
<style lang="scss">
.cascader-properties-form {
  .options-value-tree {

    .el-tree-node__content {
      padding: 3px 0px;
    }

    .el-input__inner {
      padding: 0px;
    }
  }
}
</style>