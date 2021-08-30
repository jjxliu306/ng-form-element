<!--
 修改多选、下拉、单选等控件options的组件，添加移除校验规制的组件
-->

<template>
  <div class="option-change-container">
   
    <el-row  
      v-if="[ 
        'radio',
        'checkbox',
        'select',
        'keyvalue'
        ].includes(type)" :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <el-col :span="9">
          <el-input v-if="keyNumber" v-model="val.value"  type="number" placeholder="值"/>
          <el-input v-else v-model="val.label" type="text" placeholder="名称"/>
        </el-col>
        <el-col :span="9"> 
          <el-input v-if="keyNumber" v-model="val.label" placeholder="名称"/>
          <el-input v-else v-model="val.value" placeholder="值"/>
        </el-col>
        <el-col :span="6"
          ><div @click="handleDelete(index)" class="option-delete-box">
            <i class="el-icon-delete" /></div
        ></el-col>
      </div>
      <el-col v-if="!disabled" :span="24"><el-button type="primary" @click="handleAdd">添加</el-button></el-col>
    </el-row>
    <!-- 级联 树状数据 lyf 2020-07-06 -->
    <el-row v-if="type === 'cascader'" :gutter="8">
      <div  >
        <el-tree
          :data="value ? value : []"
          show-checkbox 
          default-expand-all
          :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span> 
              <el-row :gutter="4">
                <el-col :span="9">
                  <el-input v-model="data.label"  :type="keyNumber ? 'number' : 'text'" placeholder="名称" />
                </el-col>
                <el-col :span="9">
                  <el-input v-model="data.value" placeholder="值"/>
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
      </div>
      <el-col v-if="!disabled" :span="24"><el-button type="primary" @click="handleAdd">添加</el-button></el-col>
    </el-row>

    <el-row v-if="type === 'rules'" :gutter="8">
      <span v-for="(val, index) in value" :key="index">
        <div class="option-change-box" v-if="index !== 0">
          <el-col :span="18" >
            <template>
              <el-radio v-model="val.vtype" :label="1">正则</el-radio>
              <el-radio v-model="val.vtype" :label="2">表达式</el-radio>
            </template>
          </el-col>
          <el-col :span="18" >
            <el-input v-model="val.message" placeholder="提示信息"/>
          </el-col>
          <el-col :span="18">
            <el-input  v-if="val.vtype == 1" v-model="val.pattern" placeholder="正则表达式pattern" />
            <el-input  v-else-if="val.vtype == 2" type="textarea" v-model="val.script" placeholder="条件表达式" />
          </el-col>
          <el-col :span="6" >
            <div @click="handleDelete(index)" class="option-delete-box">
              <i class="el-icon-delete" />
            </div>
          </el-col>
        </div>
      </span>
      <el-col v-if="!disabled" :span="24"><el-button type="primary" @click="handleAddRules">增加校验</el-button></el-col>
    </el-row>
    <el-row v-else-if="type === 'colspan'" :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <el-col :span="18"
          ><el-input-number
            style="width:100%"
            :max="24"
            v-model="val.span"
            placeholder="名称"
        /></el-col>
        <el-col :span="6"
          ><div @click="handleDelete(index)" class="option-delete-box">
             <i class="el-icon-delete" /></div
        ></el-col>
      </div>
      <el-col v-if="!disabled" :span="24"><el-button type="primary" @click="handleAddCol">添加</el-button></el-col>
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
    type: {
      type: String,
      default: "option"
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
    handleAddCol() {
      // 添加栅格Col
      let addData = [
        ...this.value,
        {
          span: 12,
          list: []
        }
      ];
      this.$emit("input", addData);
    },
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