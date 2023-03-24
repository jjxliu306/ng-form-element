<!--
select radio checkbox cascader的数据配置。
cascader没有数据字典
-->
<template>
<el-form   size="mini" label-width="80px" label-position="right">
	<el-form-item  label="数据来源" >
    <el-select clearable v-model="selectItem.options.dynamic" placeholder="请选择" style="width:100%"> 
	    <el-option label="静态数据"	:value="0"></el-option>
	    <el-option label="API接口"	:value="1"></el-option>
	    <el-option label="数据字典"	:value="2" v-if="hasDict"></el-option>
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
    <template v-if="selectItem.options.dynamic == 0" >
      <KvListChildren v-if="selectItem.type == 'cascader'" v-model="selectItem.options.options" />
      <KvList v-else v-model="selectItem.options.options" /> 
    </template>
    
  </el-form-item>
  <slot name="defaultValue"> </slot>
  <el-divider></el-divider> 
</el-form>
</template>
<script>
import KvList from '../../../../ng-form/kv-list.vue'
import KvListChildren from '../../../../ng-form/kv-list-children.vue'
export default {
  components: {
    KvList , KvListChildren
  },
	props: {
		selectItem: {
			type: Object
		}
	},
	computed: {
		hasDict() { 
			return this.dicts && this.dicts.length > 0 && this.selectItem && this.selectItem.type != 'cascader'
		}
	},
  	inject: {
      	dicts: {
        	from: 'dictsC',
        	default: ()=> []
      	},
  	},
  	methods: {
    	queryDictSearch(queryString, cb) {
      		const dicts = this.dicts && this.dicts.length > 0 ? this.dicts : null
      		if(!dicts || dicts.length == 0) {
        		cb([])
      		}

      		const ls = {}
      		const types = []
      		dicts.forEach(t=> {
        		const type = t.type 
        		if(!ls[type]) {
          			ls[type] = type  
          			types.push(t)
        		} 
      		})

      		// 关键字过滤
      		const fs = types.filter(t=> t.type.indexOf(queryString) >= 0)
      
      		cb(fs)

    	},
  	}
}
</script>
