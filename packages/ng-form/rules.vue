<!--
规则配置
-->
<!--
 修改多选、下拉、单选等控件options的组件，添加移除校验规制的组件
-->

<template>
  <div class="ng-form-rules">
  	<template v-if="value && value.length > 0">
  		<el-checkbox v-model="value[0].required" label="必填" />
    	<el-input v-model="value[0].message"  placeholder="必填校验提示信息" />
  	</template>
    <el-row   :gutter="8">
      <span v-for="(val, index) in value" :key="index">
        <div class="option-change-box" v-if="index !== 0">
          <el-col :span="24" >
            <template>
              <el-radio v-model="val.vtype" :label="1" title="正则表达式不要带前后的/">
                正则
              </el-radio>
              <el-radio v-model="val.vtype" :label="2" title="表达式中$表示全局表单数据,$row表示在动态表格内单行的数据">
                 表达式
              </el-radio>
            </template>
          </el-col>
          <el-col :span="20" >
            <el-input v-model="val.message" placeholder="提示信息"/>
          </el-col>
          <el-col :span="4" >
            <div @click="handleDelete(index)" class="option-delete-box">
              <i class="el-icon-delete" />
            </div>
          </el-col>
          <el-col :span="24">
            <el-input  v-if="val.vtype == 1" v-model="val.pattern" placeholder="正则表达式pattern" />
            <el-input  v-else-if="val.vtype == 2" type="textarea" v-model="val.script" placeholder="条件表达式" />
          </el-col> 
        </div>
      </span>
      <el-col v-if="!disabled" :span="24">
      	<el-button type="primary" @click="handleAddRules">增加校验</el-button>
      </el-col>
    </el-row> 
  </div>
</template>
<script>
 
export default {
  name: "ng-form-rules",
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
    handleAddRules() {
      let addData = [
        ...this.value,
        {
          vtype: 1,
          //validator: 'validatorFiled',
          pattern: "",
          script: "",
          message: ""
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
}
</script> 
<style lang="scss">
.ng-form-rules {
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