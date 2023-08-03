<!--
规则配置
-->
<!--
 修改多选、下拉、单选等控件options的组件，添加移除校验规制的组件
-->

<template>
  <div class="ng-form-rules">
  	<template v-if="value && value.length > 0">
  		<el-checkbox v-model="value[0].required" :label="t('ngform.rules.required')" />
    	<el-input v-model="value[0].message"  :placeholder="t('ngform.rules.required_message')" />
  	</template>
    <el-row   :gutter="8">
      <span v-for="(val, index) in value" :key="index">
        <div class="option-change-box" v-if="index !== 0">
          <el-col :span="24" >
            <template>
              <el-radio v-model="val.vtype" :label="1" :title="t('ngform.rules.regular_tip')">
                {{t('ngform.rules.regular')}}
              </el-radio>
              <el-radio v-model="val.vtype" :label="2" :title="t('ngform.rules.script_tip')">
                 {{t('ngform.rules.script')}}
              </el-radio>
            </template>
          </el-col>
          <el-col :span="20" >
            <el-input v-model="val.message" :placeholder="t('ngform.rules.message_tip')"/>
          </el-col>
          <el-col :span="4" >
            <div @click="handleDelete(index)" class="option-delete-box">
              <i class="el-icon-delete" />
            </div>
          </el-col>
          <el-col :span="24">
            <el-input  v-if="val.vtype == 1" v-model="val.pattern" :placeholder="t('ngform.rules.regular_placeholder')" />
            <el-input  v-else-if="val.vtype == 2" type="textarea" v-model="val.script" :placeholder="t('ngform.rules.script_placeholder')" />
          </el-col> 
        </div>
      </span>
      <el-col v-if="!disabled" :span="24">
      	<el-button type="primary" @click="handleAddRules">
         {{t('ngform.rules.add_rule')}} 
        </el-button>
      </el-col>
    </el-row> 
  </div>
</template>
<script>
import { t , currentLang } from '../locale/index.js'
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
    t,
    handleAddRules() {
      /*let addData = [
        ...this.value,
        {
          vtype: 1,
          //validator: 'validatorFiled',
          pattern: "",
          script: "",
          message: ""
        }
      ];*/

      const addData = this.value.concat([
        { 
          vtype: 1,
          //validator: 'validatorFiled',
          pattern: "",
          script: "",
          message: ""
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
}
</script> 
<style>
.ng-form-rules {
  padding-left: 10px;
}

.ng-form-rules .option-change-box {
  height: 38px;
  padding-bottom: 6px;
}

.ng-form-rules .option-change-box .option-delete-box {
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

.ng-form-rules .option-change-box .option-delete-box:hover {
  background: #f22;
  color: #fff;
}

</style>
<!-- 
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
</style> -->