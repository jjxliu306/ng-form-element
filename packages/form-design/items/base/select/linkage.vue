<!--
  多组件联动的时候配置联动信息
-->

<template>
  <div class="ng-properties-linkage"> 
    <el-row  :gutter="8">
      <span v-for="(val, index) in value" :key="index">
        <div class="linkage-box"  >
          <el-col :span="21" >
            <template>
              {{index+1}}、
              <el-radio v-model="val.vtype" :label="1">本地</el-radio>
              <el-radio v-model="val.vtype" :label="2">远程</el-radio>
            </template>
          </el-col>
          <el-col :span="21" >
            <el-input size="mini" v-model="val.model" placeholder="关联字段">
              <template slot="prepend">关联字段</template>
            </el-input>
          </el-col>
          <el-col :span="21">
            <template v-if="val.vtype == 1">
               表达式:
              <el-input size="mini"   type="textarea" v-model="val.script" placeholder="表达式,eg: $item.value>$.age . 其中$item表示当前数据中具体一条数据,$表示当前整个表单数据" />

            </template>
           
            <el-row v-else-if="val.vtype == 2">
              <el-col :span="12">
                <el-input size="mini" v-model="val.queryKey" placeholder="query key" />
              </el-col>
               <el-col :span="12">
                <el-input size="mini" v-model="val.queryValue" placeholder="query value" />
              </el-col>
            </el-row>

          <!--   <el-input size="mini"  v-else-if="val.vtype == 2" type="textarea" v-model="val.query" placeholder="远程搜索添加查询条件,eg:key=$.sex" /> -->
          </el-col>
          <el-col :span="3" >
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
  name: "ng-properties-linkage",
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
     /* let addData = [
        ...this.value,
        {
          vtype: 1,
          //validator: 'validatorFiled',
          model: "",
          script: "",
          queryKey: "",
          queryValue: ""
        }
      ]; */
      const addData = this.value.concat([
        {
          vtype: 1,
          //validator: 'validatorFiled',
          model: "",
          script: "",
          queryKey: "",
          queryValue: ""
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
    },
      
  }
};
</script> 