<template>
<div v-if="selectItem && selectItem.key && selectItem.type == 'dataTable'" class="form-tableList-properties"> 
    <!-- 字段配置 -->   
    <el-collapse-item :title="t('ngform.item.dataTable.columns')" name="columns">
        <div :key="datasetKey" class="data-set">
            <el-tree :data="options.columns" class="table-column-tree" default-expand-all :expand-on-click-node="false" :empty-text="t('ngform.item.dataTable.no_column_tip')">
              <span style="width: 100%;" slot-scope="{ node, data }">
                <el-row class="tree-row">
                  <el-col :span="9">
                    <span class="pointer " @click="addOrUpdateColumn(node)">{{data.label}}</span>
                  </el-col>
                  <el-col :span="9">
                    <span class="pointer " @click="addOrUpdateColumn(node)">{{data.column}}</span>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="text" icon=" el-icon-plus" @click="appendColumn(node)"></el-button>
                    <el-button type="text" icon=" el-icon-close" @click="removeColumn( node)"></el-button>
                  </el-col>
                </el-row>
              </span>
            </el-tree>
            <el-button type="text" icon="el-icon-plus" @click="addOrUpdateColumn()"></el-button>
        </div>
    </el-collapse-item> 
	<AddOrUpdateColumn ref="columnset" v-if="columnVisisble"   @add="addDataColumn"  @update="updateDataColumn"/>

	<el-dialog
    :title="t('ngform.item.dataTable.static_data')"
    :close-on-click-modal="false"
    :modal-append-to-body="false"
    :visible.sync="staticVisible">

    <el-input  type="textarea" :rows="10" v-model="staticText" :placeholder="t('ngform.item.dataTable.static_json_data')" ></el-input>

    <span slot="footer" class="dialog-footer" >
      <el-button size="mini" @click="staticVisible = false">
      	{{t('ngform.close')}}
      </el-button>
      <el-button size="mini" type="primary" @click="staticDataSubmit()">
      	{{t('ngform.confirm')}}
      </el-button>
    </span>
  </el-dialog>

</div>    
</template>
<script>
import AddOrUpdateColumn from './add-or-update-column'
//import QeuryList from './query-list.vue'
import LocalMixin from '../../../../locale/mixin.js'
export default {
  mixins: [LocalMixin],
	components: {
		AddOrUpdateColumn //, QeuryList
	},
	data() {
		return {
			columnVisisble: false,
			staticVisible: false,
			staticText: '' ,
			datasetKey: 1
		}
		
	},
	props: {
		selectItem: { // 当前选择的组件
	      type: Object,
	      required: true
	    },
	    disabled: { // 是否禁用
	      type: Boolean,
	      default: false
	    }
	},
	computed: {
		options() {
			return this.selectItem.options
		}
	},
	mounted() {
		this.$ngform_bus.$on('dataTableStaticData', () => { 
		  this.configStaticDataHandle()
		});

		  // 字段配置
		this.$ngform_bus.$on('dataTableColumns', () => { 
		  this.configColumnHandle()
		});
	}, 
	methods: {
		configStaticDataHandle() {
			if(this.options.datasourceStatic) {
				this.staticText = JSON.stringify(this.options.datasourceStatic)
			} else {
				this.staticText = '[]'
			}

			this.staticVisible = true 
		},
		// 字段配置handle
		configColumnHandle() {

		},
		generateId () {
	      return new Date().getTime() + parseInt(Math.random() * 1000000)
	    },
		// 追加字段 
	    appendColumn (node) {
	      this.columnVisisble = true
	      this.$nextTick(() => {
	        this.$refs.columnset.init(null, node.data)
	      })
	    },
	    removeColumn (node) {
	      const parent = node.parent
	      if (!parent) {
	        // 顶层节点 直接从数组中删除
	        let columns = this.options.columns
	        columns = columns.filter((val) => val && val.id != node.data.id)
	        this.$set(this.selectItem, 'columns', columns)
	      } else {
	        const pdata = parent.data
	        // 从parent中删除
	        if (pdata instanceof Array) {
	          let columns = pdata
	          const index = columns.findIndex(d => d.id === node.data.id);
	          columns.splice(index, 1);
	        } else {
	          let columns = pdata.children
	          columns = columns.filter((val) => val && val.id != node.data.id)
	          this.$set(pdata, 'children', columns)
	        }
	      }
	      this.datasetKey++
	    },
	    addDataColumn (data, parent) {
	      // 给一个id 
	      data.id = this.generateId()
	      if (!parent) {
	        // 顶层节点 直接从数组中删除
	        let columns = this.options.columns
	        columns.push(data)
	        this.$set(this.options, 'columns', columns)
	      } else {
	        // 从parent中删除
	        if (parent instanceof Array) {
	          let columns = parent
	          columns.push(data)
	        } else {
	          let columns = parent.children
	          if (columns == undefined || columns == null) {
	            columns = [data]
	          } else {
	            columns.push(data)
	          }
	          this.$set(parent, 'children', columns)
	        }
	      }
	      this.datasetKey++
	    },
	    updateDataColumn (data, parent) {
	      const index = data.index
	      if (!parent) {
	        // 顶层节点 直接从数组中删除  
	        let columns = this.options.columns
	        columns[index] = data
	        this.$set(this.options, 'columns', columns)
	      } else {
	        // 从parent中删除
	        let columns = parent instanceof Array ? parent : parent.children
	        columns[index] = data
	        this.$set(parent, 'children', columns)
	      }
	      this.datasetKey++
	    },
	    addOrUpdateColumn (node) {
	      this.columnVisisble = true
	      let row = null
	      let parentData = null
	      if (node) {
	        row = node.data
	        const parent = node.parent;
	        const children = parent.data.children || parent.data;
	        const index = children.findIndex(d => d.id === node.data.id);
	        row.index = index
	        parentData = parent.data
	      }
	      this.$nextTick(() => {
	        this.$refs.columnset.init(row, parentData)
	      })
	    },
	    staticDataSubmit() {
	    	try {
	        const staticData = JSON.parse(this.staticText)
	        
	        if(staticData && staticData instanceof Array){
	          this.options.datasourceStatic = staticData

	          this.staticVisible = false
	        } else {
	          this.$message.error('数据解析异常，请检查JSON数据内容.')
	          return
	        }
	        
	      } catch (error) {
	        this.$message.error('数据解析异常，请检查JSON数据内容.')
	        return
	      }
	    }

	}
}
</script>
<style>
.form-tableList-properties .data-set{
	padding: 10px;
}

.form-tableList-properties .table-column-tree .el-col{
   
    margin-bottom: 0px;
   
}
.table-column-tree .tree-row {
	display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 26px;
    cursor: pointer;
}

</style>