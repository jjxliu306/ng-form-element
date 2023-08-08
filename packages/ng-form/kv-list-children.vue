
k-v配置
-->
<!--
 修改cascader等控件options的组件，添加移除校验规制的组件
-->

<template>
  <div class="ng-form-kvlist">
    
        <el-tree
          :data="value ? value : []"
          show-checkbox 
          default-expand-all
          :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span> 
              <el-row :gutter="4">
                <el-col :span="9">
                  <el-input v-model="data.label"  :type="keyNumber ? 'number' : 'text'" :placeholder="t('ngform.item.name')" />
                </el-col>
                <el-col :span="9">
                  <el-input v-model="data.value"  :placeholder="t('ngform.item.value')"/>
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
      
      <el-col v-if="!disabled" :span="24">
      	<el-button type="primary" @click="handleAdd">
          <!-- 添加 -->
          {{t('ngform.item.add')}}
        </el-button>
      </el-col>
  </div>
</template>
<script>
import { t  } from '../locale/index.js'
export default {
  name: "ng-form-kv-children",
  props: {
    value: {
      type: Array,
      default: ()=> [],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // key必须为数字 2021-02-17 lyf
    keyNumber: {
      type: Boolean ,
      default: false
    },
  },
  methods: {
    t,
  	handleAdd() {
      // 添加
      const addData = this.value.concat([
        { value: "",
          label: ""
        }
      ])

      // let addData = [
      //   ...this.value,
      //   {
      //     value: "",
      //     label: ""
      //   }
      // ];
      this.$emit("input", addData);
    },
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

  }
};
</script> 
<style>
.ng-form-kvlist {
  padding-left: 10px;
}

.ng-form-kvlist .el-input__inner {
  padding: 0px;
}

.ng-form-kvlist .option-change-box {
  height: 38px;
  padding-bottom: 6px;
}

.ng-form-kvlist .option-change-box .option-delete-box {
  margin-top: 3px;
  background: #ffe9e9;
  color: #f22;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s;
}

.ng-form-kvlist .option-change-box .option-delete-box:hover {
  background: #f22;
  color: #fff;
}

</style>
<!-- 
<style lang="scss">
.ng-form-kvlist {
	padding-left: 10px;
  
  .el-input__inner {
    padding: 0px; 
  }
   
	.option-change-box {
    	height: 38px;
    	padding-bottom: 6px; 

    	.option-delete-box {
	      margin-top: 3px;
	      background: #ffe9e9;
	      color: #f22;
	      width: 25px;
	      height: 25px;
	      line-height: 25px;
	      text-align: center;
	      border-radius: 50%;
	      overflow: hidden;
	      transition: all 0.3s;

	      &:hover {
	      	background: #f22;
        	color: #fff;
	      }
 	     
	    }
  	} 
}
</style> 