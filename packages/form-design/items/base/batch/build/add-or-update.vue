<template>
  <el-dialog
    :title="!dataForm._id ? t('ngform.item.add') : t('ngform.item.edit')"
    :close-on-click-modal="false"
    :append-to-body="true"
    :lock-scroll="false"
    :visible.sync="visible"
    :id="randomId"
  >
    <el-form
      v-if="typeof formTemplate.list !== 'undefined'"
      class="form-build form-design"
      :label-position="config.labelPosition"
      :hide-required-asterisk="config.hideRequiredMark"
      :label-width="config.labelWidth + 'px'"
      ref="dataForm"
      :model="dataForm"
      size="mini"
      :key="dataForm._id"
    >
      <el-row :gutter="20">
        <template v-for="item in formTemplate.list">
          <el-col :span="item.span || 24">
            <ng-form-item
              :key="item.key"
              :disabled="disabled"
              :preview="preview"
              :models.sync="dataForm"
              :record="item"
               
            />
          </el-col>
        </template>
      </el-row>
      <el-form-item :label="t('ngform.item.batch.seq_label')" prop="seq">
        <template v-if="preview">
          {{ dataForm.seq }}
        </template>
        <template v-else>
          <el-input-number
            v-model="dataForm.seq"
            controls-position="right"
            :min="0"
            :placeholder="t('ngform.item.batch.seq_label')"
            :disabled="preview"
          ></el-input-number>
        </template>
      </el-form-item>
    </el-form>

    <div class="mod-footer">
      <el-button size="mini" @click="visible = false">{{ t("ngform.cancel") }}</el-button>
      <el-button size="mini" :disabled="loading" v-if="!preview" type="primary" @click="dataFormSubmit()">{{ t("ngform.confirm") }}</el-button>
    </div>
    <!--  </div> -->
  </el-dialog>
</template>

<script>
import LocalMixin from "../../../../../locale/mixin.js"
import cloneDeep from "lodash/cloneDeep"

import { dynamicFun } from "../../../../../utils/index"
export default {
  name: "table-add-or-update",
  mixins: [LocalMixin],
  data() {
    return {
      randomId: "",
      loading: false,
      visible: false,
      dataForm: {
        _id: "",
        seq: 0
      },
      dataRule: {}
    }
  },
  computed: {
    customList() {
      if (this.customComponents) {
        return this.customComponents.map((item) => item.type)
      } else {
        return []
      }
    },
    config() {
      if(this.configInject && this.configInject != null && this.configInject != undefined) {
        return this.configInject() || {}
      }
      return {} 
    },
     topModels() {
      if(this.topModelsC && this.topModelsC != null && this.topModelsC != undefined) {
        return this.topModelsC() || {}
      }
      return {} 
    },
  },
  props: {
    // 表格内部的配置
    formTemplate: {
      type: Object,
      default: () => ({})
    },
    // 是否预览结果表单
    preview: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    // 表单全局config配置
    configInject: {
      from: "configC" 
    },
    customComponents: {
      from: "customC",
      default: () => []
    },
    topModelsC: {
      from: "topModelsC",
      default: null
    }
  },
  methods: {
    recordRules(record) {
      // 2020-07-29 如果是预览 不需要规则验证
      if (this.preview) {
        return []
      }
      const rules = record.rules
      // 循环判断
      for (var i = 0; i < rules.length; i++) {
        const t = rules[i]
        if (t.vtype == 1 || t.vtype == 2) {
          t.validator = this.validatorFiled
        }

        if (t.required && (record.type == "input" || record.type == "textarea")) {
          t.whitespace = true
        }

        // 判断trigger
        if (!t.trigger) {
          t.trigger = ["change", "blur"]
        }
      }

      return rules
    },
    dynamicVisibleItem(record) {
      if (!record.options || !record.options.dynamicVisible) {
        return true
      }
      if (!record.options.dynamicVisibleValue) {
        return true
      }
      let fstr = record.options.dynamicVisibleValue
      // 打开了开关 这里获取函数内容
      const func = dynamicFun(fstr, this.dataForm,this.topModels)
      return func
    },
    // 2021-03-12 清理没有显示的组件的数据
    clearHiddenValue() {
      // 根据组件ID 是否隐藏为准
      // 根据 formTemplate.config.outputHidden 来判断是否要输出隐藏
      if (!this.config || !this.config.outputHidden) {
        const formdesign = document.getElementById(this.randomId)

        // 循环当前数据 非P 开头的统一不深入第二层
        for (let key in this.dataForm) {
          if (key.indexOf("_label") > 0 || key == "_id" || key == "seq") continue
          //  判断key的id是否还在
          const key_div = formdesign.querySelector("#" + key)
          if (!key_div) {
            // 删除
            delete this.dataForm[key]
            delete this.dataForm[key + "_label"]
          }
        }
      }
    },
    validatorFiled(rule, value, callback) {
      // 判断rule类型
      if (rule.vtype == 1) {
        // 正则
        if (!rule.pattern) {
          callback()
          return
        }
        // 正则匹配
        var patt1 = new RegExp(rule.pattern)
        //document.write(patt1.test("free"));

        if (patt1.test(value)) {
          callback()
        } else {
          callback(new Error(rule.message))
        }

        return
      } else if (rule.vtype == 2) {
        // 表达式
        const script = rule.script

        // 打开了开关 这里获取函数内容
        const fvalue = dynamicFun(script, this.dataForm,this.topModels)

        if (!fvalue) {
          callback(new Error(rule.message))
        } else {
          callback()
        }
      }
    },

    init(data) {
      this.randomId = "ng_table_dialog" + new Date().getTime()
      this.visible = true
      this.dataForm._id = null
      if (data) {
        //this.dataForm = data
        for (var i in data) {
          //this.dataForm[i] = data[i]
          this.$set(this.dataForm, i, data[i])
        }
      } else {
        // 初始化数据

        //const d = {}
        this.dataForm.seq = 0
        this.formTemplate.list.forEach((item) => {
          if (item.options.defaultValue) this.$set(this.dataForm, item.model, item.options.defaultValue)
          //this.dataForm[item.model] = item.options.defaultValue;
          //this.dataForm[item.model] = undefined
          else this.$set(this.dataForm, item.model, undefined)

          // 删除对应的label
          delete this.dataForm[item.model + "label"]
        })
        console.log("this.dataForm", this.dataForm)
        this.$nextTick(() => {
          this.$refs["dataForm"] && this.$refs["dataForm"].resetFields()
        })
      }
    },
    // 表单提交
    dataFormSubmit() {
      this.$refs["dataForm"] &&
        this.$refs["dataForm"].validate((valid) => {
          if (valid) {
            this.loading = true
            this.clearHiddenValue()
            if (!this.dataForm._id) {
              // 回填一个ID
              const id = new Date().getTime() * 10 + parseInt(Math.random() * 100)
              this.dataForm._id = id
              this.$emit("formAdd", cloneDeep(this.dataForm))
            } else {
              this.$emit("formUpdate", cloneDeep(this.dataForm))
            }
            this.loading = false
            this.visible = false
          }
        })
    }
  }
}
</script>
<style>
.mod-footer {
  text-align: center;
}
</style>
