
k-v配置
-->
<!--
 修改多选、下拉、单选等控件options的组件，添加移除校验规制的组件
-->

<template>
  <div class="ng-form-kvlist">
   
    <el-row   :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <el-col :span="9" :title="keyNumber ? t('ngform.item.value') : t('ngform.item.label')">
          <el-input v-if="keyNumber" v-model="val.value"  type="number" :placeholder="t('ngform.item.value')"/>
          <el-input v-else v-model="val.label" type="text" :placeholder="t('ngform.item.name')"/>
        </el-col>
        <el-col :span="9" :title="keyNumber ? t('ngform.item.label') : t('ngform.item.value')"> 
          <el-input v-if="keyNumber" v-model="val.label" :placeholder="t('ngform.item.name')"/>
          <el-input v-else v-model="val.value" :placeholder="t('ngform.item.value')"/>
        </el-col>
        <el-col :span="6">
        	<div @click="handleDelete(index)" class="option-delete-box" :title="t('ngform.item.delete')">
            	<i class="el-icon-delete" />
        	</div>
    	</el-col>
      </div>
      <el-col v-if="!disabled" :span="24">
        <el-button type="primary" @click="handleAdd">
        <!-- 添加 -->
         {{t('ngform.item.add')}}
        </el-button>
      </el-col>
    </el-row>
      
  </div>
</template>
<script>
import { t  } from '../locale/index.js'
export default {
  name: "ng-form-kv",
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
      this.$emit("input", addData);
    },
    handleDelete(deleteIndex) {
      // 删除
      this.$emit(
        "input",
        this.value.filter((val, index) => index !== deleteIndex)
      );
    }

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