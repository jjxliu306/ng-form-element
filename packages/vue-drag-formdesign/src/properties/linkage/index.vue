<!--
  多组件联动的时候配置联动信息
-->

<template>
  <div class="option-change-container"> 
    <el-row  :gutter="8">
      <span v-for="(val, index) in value" :key="index">
        <div class="option-change-box"  >
          <el-col :span="18" >
            <template>
              <el-radio v-model="val.vtype" :label="1">本地</el-radio>
              <el-radio v-model="val.vtype" :label="2">远程</el-radio>
            </template>
          </el-col>
          <el-col :span="18" >
            <el-input size="mini" v-model="val.model" placeholder="关联字段"/>
          </el-col>
          <el-col :span="18">
            <el-input size="mini"  v-if="val.vtype == 1" type="textarea" v-model="val.script" placeholder="表达式" />
            <el-input size="mini"  v-else-if="val.vtype == 2" type="textarea" v-model="val.query" placeholder="远程搜索添加查询条件,eg:key=$.sex" />
          </el-col>
          <el-col :span="6" >
            <div @click="handleDelete(index)" class="option-delete-box">
              <i class="el-icon-delete" />
            </div>
          </el-col>
        </div>
      </span>
      <el-col v-if="!disabled" :span="24"><el-button type="primary" size="mini" @click="handleAdd">添加</el-button></el-col>
    </el-row>
     
  </div>
</template>
<script>
 
export default {
  name: "ChangeOption",
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
    
  },
  methods: {
     
    handleAdd() {
      if(!this.value) {
        this.value = []
      }
      let addData = [
        ...this.value,
        {
          vtype: 1,
          //validator: 'validatorFiled',
          model: "",
          script: "",
          query: ""
        }
      ];
      console.log('this.addData' , addData)
      this.$emit("input", addData);
    },
    handleDelete(deleteIndex) {
      // 删除
      this.$emit(
        "input",
        this.value.filter((val, index) => index !== deleteIndex)
      );
    },
      
  }
};
</script> 