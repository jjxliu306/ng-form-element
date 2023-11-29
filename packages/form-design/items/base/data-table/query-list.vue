
k-v配置
-->
<!--
 修改多选、下拉、单选等控件options的组件，添加移除校验规制的组件
-->

<template>
  <div class="ng-form-querylist">
   
    <el-row   :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <el-col :span="10" title="参数名称,静态数据时参数名称要匹配到字段上,否则过滤不生效">
          <el-input  v-model="val.name" size="mini"  placeholder="参数名称"/> 
        </el-col>
        <el-col :span="10" title="参数值">  
          <el-input v-model="val.value" size="mini" placeholder="参数值,如果需要使用表单内的数据，以$.model即可."/>
        </el-col>
        <el-col :span="4">
        	<div @click="handleDelete(index)" class="option-delete-box" title="删除">
            	<i class="el-icon-delete" />
        	</div>
    	</el-col>
      </div>
      <el-col v-if="!disabled" :span="24">
        <el-button type="primary" size="mini" @click="handleAdd">
        添加
        </el-button>
      </el-col>
    </el-row>
      
  </div>
</template>
<script> 
export default {
  name: "ng-form-querylist",
  props: {
    value: {
      type: Array,
      default: ()=> [],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    } 
  },
  methods: {
   
    handleAdd() {
      // 添加
      const addData = this.value.concat([
        { 
          value: "",
          name: ""
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
.ng-form-querylist {
  padding-left: 10px;
}

.ng-form-querylist .el-input__inner {
  padding: 0px;
}

.ng-form-querylist .option-change-box {
  height: 38px;
  padding-bottom: 6px;
}

.ng-form-querylist .option-change-box .option-delete-box {
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

.ng-form-querylist .option-change-box .option-delete-box:hover {
  background: #f22;
  color: #fff;
}

</style>
 