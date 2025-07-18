<!--
传入record数据，通过判断record.type，来渲染对应的组件
  -->
<template>
  <ItemNode
    v-if="isLayout"
    :record="record"
    :disabled="disabled"
    :preview="preview"
    :isDragPanel="isDragPanel"
    :prop-prepend="propPrepend"
    :selectItem="selectItem"
    :style="{ display: recordVisible ? '' : 'none' }"
    :models="models"
    @handleSelectItem="handleSelectItem"
  >
    <!-- 递归传递插槽！！！ -->
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <slot :name="slot" :record="record" />
    </template>
  </ItemNode>
  <el-form-item
    v-else
    :label="label"
    :style="{ display: recordVisible ? '' : 'none' }"
    :rules="recordRules"
    :prop="recordProps"
    :key="record.key + recordVisible"
    :required="recordRequired"
    :id="record.model"
    :name="record.model"
    :label-width="labelWidth"
  >
    <ItemNode
      :record="record"
      :disabled="disabled"
      :preview="preview"
      :isDragPanel="isDragPanel"
      :selectItem="selectItem"
      :prop-prepend="propPrepend"
      :models="models"
      @handleSelectItem="handleSelectItem"
    >
      <!-- 递归传递插槽！！！ -->
      <template v-for="slot in Object.keys($slots)" :slot="slot">
        <slot :name="slot" :record="record" />
      </template>
    </ItemNode>
  </el-form-item>
</template>
<script>
import cloneDeep from "lodash/cloneDeep"
import { dynamicFun } from "../../utils/index.js"
import LocalMixin from "../../locale/mixin.js"
import ItemNode from "./node.vue"

export default {
  name: "ng-form-item",
  mixins: [LocalMixin],
  components: {
    ItemNode
  },
  props: {
    // 表单数组
    record: {
      type: Object,
      required: true
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否预览结果表单
    preview: {
      type: Boolean,
      default: false
    },
    // 是否拖拽面板引用
    isDragPanel: {
      type: Boolean,
      default: false
    },
    selectItem: {
      type: Object
    },
    // 是否显示label 最终是否显示还要判断其他条件，只是这个为第一条件
    showLabel: {
      type: Boolean,
      default: true
    },
    propPrepend: {
      type: String
    }
  },
  inject: {
    // 自定义组件
    customComponents: {
      from: "customC",
      default: () => []
    },
    // 表单全局config配置
    configInject: {
      from: "configC" ,
       default: null
    },
    // 顶层 models
    topModelsC: {
      from: "topModelsC" ,
      default: null
    }
  },
  computed: {
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
    // 是否布局组件 但钱不需要验证的哪种
    isLayout() {
      return this.record.layout
    },
    label() {
      if (!this.showLabel) return null

      let labelWidth = this.config ? this.config.labelWidth : null
      if (this.record.options && this.record.options.labelWidth >= 0) {
        labelWidth = this.record.options.labelWidth
      }

      // 没有options的labelWidth 尝试获取外部的labelWidth
      if (this.record.labelWidth >= 0) {
        labelWidth = this.record.labelWidth
      }

      if (labelWidth > 0) {
        // 这里判断以下是否打开了动态标签
        if (this.record.dynamicLabel) {
          return this.getDynamicLabel(this.record.label, this.models , this.topModels)
        } else {
          return this.getLabel(this.record.label)
        }
      }

      return null
    },
    labelWidth() {
      if (!this.showLabel) return "0px"
      let labelWidth = this.config ? this.config.labelWidth : null
      if (this.record.options && this.record.options.labelWidth >= 0) {
        labelWidth = this.record.options.labelWidth
      }
      // 没有options的labelWidth 尝试获取外部的labelWidth
      if (this.record.labelWidth >= 0) {
        labelWidth = this.record.labelWidth
      }

      return labelWidth + "px"
    },
    // 校验的prop值 动态计算
    recordProps() {
      if (this.recordRules && this.recordRules.length > 0) {
        if (this.propPrepend) {
          return this.propPrepend + this.record.model
        } else {
          return this.record.model
        }
      }
      return null
    },
    showRequiredMark() {
      //##############
      const fstr = this.record.options.showRequiredMarkScript
      if (!fstr) {
        return false
      }

      const mark = dynamicFun(fstr, this.models)

      return mark
    },
    // 2024--4-19 lyf 组件通过display：none来隐藏
    recrodHidden() {
      if (this.isDragPanel) {
        return true
      }

      // 判断组件是否自己设置了隐藏
      if (this.record.options && this.record.options.hidden) {
        return true
      }

      return false
    },
    // 动态显示
    // 返回true 显示 false 不显示
    recordVisible() {
      if (this.isDragPanel) {
        return true
      }

      // 判断组件是否自己设置了隐藏
      if (this.record.options && this.record.options.hidden) {
        return false
      }

      // 判断是否编辑时隐藏
      if (!this.preview && this.record.options.editHidden) {
        return false
      }
      // 判断是否查看时隐藏
      if (this.preview && this.record.options.previewHidden) {
        return false
      }

      // 判断是否配置了动态显示 或者表达式为空
      if (!this.record.options || !this.record.options.dynamicVisible || !this.record.options.dynamicVisibleValue) {
        return true
      }

      let fstr = this.record.options.dynamicVisibleValue
      // 打开了开关 这里获取函数内容
      const func = dynamicFun(fstr, this.models)
      return func
    },
    recordRules() {
      // 如果隐藏了直接返回空
      if (!this.recordVisible) {
        return []
      }

      // 2020-07-29 如果是预览 不需要规则验证
      if (/*this.isDragPanel || this.preview || */ !this.record.rules || this.record.rules.length == 0) {
        return []
      }
      let rules = cloneDeep(this.record.rules)

      // 2020-09-12 判断是否必填 ,非必填得没有值得时候不校验

      const isRequire = rules[0].required

      // 循环判断
      for (var i = 0; i < rules.length; i++) {
        const t = rules[i]

        // if(t.required != undefined) {

        // }
        // t.required = isRequire
        // 2021-08-12 lyf 针对必填而且是文本输入的组件增加纯空格校验
        if (isRequire && (this.record.type == "input" || this.record.type == "textarea")) {
          t.whitespace = true
        }

        if (t.vtype == 1 || t.vtype == 2) {
          t.validator = this.validatorFiled
        }

        // 判断trigger
        if (!t.trigger) {
          t.trigger = ["change", "blur"]
        }
      }

      //2020-12-08 lyf 如果是batch类型的话增加一个内部校验的标记
      // 2022-11-08 lyf batch走内部表单组件校验 此处不需要了
      // if(this.record.type == 'batch') {
      //   rules.push({vtype: 3,trigger:['change','blur'] ,validator: this.validatorFiled ,message: '待完善'  })
      // }

      return rules
    },
    // 2022-10-06 lyf 判断组件是否必填 动态
    recordRequired() {
      // 如果隐藏了直接返回false
      if (!this.recordVisible) {
        return false
      }

      if (this.config && (this.config.hideRequiredMark || !this.config.syncLabelRequired)) {
        return false
      }

      let rules = this.record.rules

      if (!rules || rules.length == 0) return false
      // 2020-09-12 判断是否必填 ,非必填得没有值得时候不校验

      const isRequire = rules[0].required
      if (isRequire) {
        return true
      }

      const value = this.models[this.record.model]
      // 循环判断
      for (var i = 0; i < rules.length; i++) {
        const rule = rules[i]

        if (rule.vtype == 1) {
          // 正则
          if (!rule.pattern) {
            continue
          }
          // 正则匹配
          const patt1 = new RegExp(rule.pattern)
          //document.write(patt1.test("free"));

          if (!patt1.test(value)) {
            return true
          }
        } else if (rule.vtype == 2) {
          // 表达式
          const script = rule.script

          // 打开了开关 这里获取函数内容
          const fvalue = dynamicFun(script, this.models)

          if (!fvalue) {
            return true
          }
        }
      }

      return false
    }
  },
  methods: {
    handleSelectItem(item) {
      this.$emit("handleSelectItem", item)
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
        const fvalue = dynamicFun(script, this.models)

        if (!fvalue) {
          callback(new Error(rule.message))
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
  },
  mounted() {}
}
</script>
