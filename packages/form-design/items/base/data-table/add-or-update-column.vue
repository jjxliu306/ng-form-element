<template>
  <el-dialog
    :title="!dataForm.id ? t('ngform.item.add')  : t('ngform.item.edit')"
    :close-on-click-modal="false"
    :modal-append-to-body="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" size="mini" ref="dataForm" label-width="90px">
     
     
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item :label="t('ngform.item.label')" prop="label"  >
            <el-input v-model="dataForm.label" :placeholder="t('ngform.item.placeholder_input')" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="t('ngform.item.model')" prop="column">  
            <el-input v-model="dataForm.column" :placeholder="t('ngform.item.placeholder_input')"  /> 
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item :label="t('ngform.item.dataTable.column_align')" prop="align">
            <el-select v-model="dataForm.align"  :placeholder="t('ngform.properties.select')">
              <el-option v-for="item in ['left','center','right']" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="t('ngform.item.dataTable.width')" prop="width">
            <el-input v-model.trim="dataForm.width" :placeholder="t('ngform.item.placeholder_input') + ': 80px or 50%'" />
          </el-form-item>
        </el-col>
      </el-row>
        
      <el-form-item :label="t('ngform.item.dataTable.column_formatter')" prop="formater">
        <template slot="label">
          <span>{{t('ngform.item.dataTable.column_formatter')}}</span>
          <i class="el-icon-question" @click="drawer = true"></i>
        </template>
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          v-model="dataForm.formater"
          :placeholder="t('ngform.item.placeholder_input') + ',eg: (data , models)=>{ return data }'" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer" v-loading="isOnSubmit">
      <el-button size="mini" @click="visible = false">
          {{t('ngform.close')}}
      </el-button>
      <el-button size="mini" type="primary" @click="dataFormSubmit()" :disabled="isOnSubmit">
        {{t('ngform.confirm')}}
      </el-button>
    </span>
    <el-drawer :title="t('ngform.item.dataTable.column_formatter_tip')" :visible.sync="drawer" append-to-body size="60%" direction="btt">
      <el-input type="textarea" :readonly="true" :rows="15" v-model="formatterTip"></el-input>
    </el-drawer>
  </el-dialog>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import LocalMixin from '../../../../locale/mixin.js'
export default { 
  mixins: [LocalMixin],
  data () {
    return {
      visible: false,
      isOnSubmit: false,
      drawer: false,
      formatterTip: `
            通过函数将字段转换为其他要展示的内容，譬如字典转换、图标等。

            以下为示例:
            1、 返回行数据中具体某个字段
            (row)=>{
                // 显示当前行数据的名称
                return row.name;
            }
            2、 通过当前行数据简单计算
            (row)=> {
                const name = row.firstName + row.lastName
                return name
            }
            3、 个性化显示（根据性别显示不同的颜色）
            (row)=>{
                // 显示特定颜色
                if(row.sex == 1) {
                    return '<span style="color:red;">' + row.name + '</span>'
                } else {
                    return '<span style="color:green;">' + row.name + '</span>'
                }
            }

            4、 根据过滤条件进行格式化
            (row,models)=> {
                // models  为当前过滤表单的数据 由函数内部决定是否使用

                // 如果当前名称属于包含过滤条件中的名称 则红色显示名称
                const name = models.name ? models.name : undefined

                if(name && row.name.indexOf(name) >= 0) {
                     return '<span style="color:red;">' + row.name + '</span>'
                }

                return row.name
            }
            ` ,

      status: -1, // 1-新增 2-更新 
      //{label: '性别' , prop: 'sex' , type: 'dict' , width: '' , formater: ''}
      dataForm: {
        index: '', 
        label: '', 
        column: '', // datapath
        width: '', 
        formater: '',
        align: 'center' 
      }, 
      parent: {},
      dataRule: {
        label: [{ required: true, message: this.t('ngform.item.dataTable.label_empty_error')/*"标签不能为空"*/, trigger: "blur" }],
        //column: [{ required: true, message: "字段不能为空", trigger: "blur" }],
        
      }
    };
  }, 
  methods: {
    init (row, parent) {
      this.visible = true;
      this.isOnSubmit = false;

      this.parent = parent

      this.$nextTick(() => {
        this.$refs["dataForm"].resetFields();
        if (row) {
          this.dataForm = { ...row };
          this.status = 2
        } else {
          delete this.dataForm.index
          this.status = 1
        }
      })
    },
    // 表单提交
    dataFormSubmit () {
      const data = cloneDeep(this.dataForm)
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          if (this.status == 1) {
            this.$emit("add", data, this.parent);
          } else if (this.status == 2) {
            this.$emit("update", data, this.parent);
          }
          this.visible = false
        }
      });
    }
  }
};
</script>
