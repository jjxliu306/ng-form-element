<!--
k-v配置
-->
<!--
 修改多选、下拉、单选等控件options的组件，添加移除校验规制的组件
-->

<template>
  <div class="ng-form-kvlist">
   
    <el-row   :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <el-col :span="9" :title="keyNumber ? '值' : '标签'">
          <el-input v-if="keyNumber" v-model="val.value"  type="number" placeholder="值"/>
          <el-input v-else v-model="val.label" type="text" placeholder="名称"/>
        </el-col>
        <el-col :span="9" :title="keyNumber ? '标签' : '值'"> 
          <el-input v-if="keyNumber" v-model="val.label" placeholder="名称"/>
          <el-input v-else v-model="val.value" placeholder="值"/>
        </el-col>
        <el-col :span="6">
        	<div @click="handleDelete(index)" class="option-delete-box" title="删除当前行数据">
            	<i class="el-icon-delete" />
        	</div>
    	</el-col>
      </div>
      <el-col v-if="!disabled" :span="24"><el-button type="primary" @click="handleAdd">添加</el-button></el-col>
    </el-row>
      
  </div>
</template>
<script>
 
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
    handleAdd() {
      // 添加
      let addData = [
        ...this.value,
        {
          value: "",
          label: ""
        }
      ];
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
<style lang="scss">
.ng-form-kvlist {
	padding-left: 10px;
 
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