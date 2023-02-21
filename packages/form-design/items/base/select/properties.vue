<template>
<el-form   size="mini" label-width="80px" label-position="right">
		<el-form-item  label="数据来源" >
            <el-select clearable v-model="options.dynamic" placeholder="请选择" style="width:100%"> 
	            <el-option label="静态数据"  :value="0"></el-option>
	            <el-option label="API接口"  :value="1"></el-option>
	            <el-option label="数据字典"  :value="2"></el-option>
	        </el-select>
        </el-form-item>
          <el-form-item label-width="0px" >
              <!-- 远程赋值配置 --> 
            <div v-if="options.dynamic == 1">
                <el-input size="mini" v-model="options.remoteFunc">
                  <template slot="prepend">远端方法</template>
                </el-input>
                <el-input size="mini" v-model="options.dataPath"  title="假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data">
                  <template slot="prepend">列表数据dataPath</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteValue">
                  <template slot="prepend">值字段</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteLabel">
                  <template slot="prepend">标签字段</template>
                </el-input> 
            </div>  
            <div v-else-if="selectItem.options.dynamic == 2">
              <el-autocomplete 
                v-model="selectItem.options.dictType"
                :fetch-suggestions="queryDictSearch"
                value-key="type"
                placeholder="请输入"
                @select="handleDictSelect"
              >
                <template slot="prepend">字典分类</template>
                <template slot-scope="{ item }">
                  <span class="name">{{ item.type }}</span> 
                </template>
              </el-autocomplete>
            </div>
            <!-- 本地赋值 -->
            <Option v-show="options.dynamic == 0" :type="selectItem.type" v-model="options.options" />
          </el-form-item>
</el-form>
</template>
<script>
export default {
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
	}
}
</script>