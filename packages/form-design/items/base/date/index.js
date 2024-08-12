// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分

import BaseIndex from "./index.vue"
//import BaseProperties from './properties.vue'
import { t, $t } from "../../../../locale/index.js"

const obj = {}

obj.type = "date" //, // 表单类型
obj.component = BaseIndex
//obj.properties = BaseProperties

// 序号 实际在json中删除
obj.seq = 7

// 补充配置样式
obj.options = {
  config: {
    size: "mini",
    labelWidth: 80
  },
  columns: [
    {
      label: $t("ngform.item.label"),
      prop: "label",
      default: $t("ngform.item.date.name"), //'多选框',
      span: 24
    },
    {
      label: $t("ngform.item.label_width"),
      prop: "labelWidth",
      type: "number",
      min: -1,
      max: 1000,
      default: -1,
      span: 24
    },
    {
      label: $t("ngform.item.width"),
      prop: "width",
      default: "100%",
      span: 24
    },
    {
      label: $t("ngform.item.span"), //'所占栅格',
      type: "spanGroup",
      prop: "span",
      min: 1,
      max: 24,
      default: 24,
      span: 24
    },
    {
      label: $t("ngform.item.model"), //'数据字段',
      prop: "model",
      span: 24
    },
    {
      label: $t("ngform.item.key"), //'数据KEY',
      prop: "key",
      show: false,
      span: 24
    },
    {
      type: "divider",
      label: $t("ngform.item.validate_rule") //'效验规则'
    },
    {
      prop: "rules",
      type: "rules",
      labelWidth: 0,
      default: [
        {
          required: false, // 必须填写
          message: $t("ngform.item.required"), //"必填项",
          trigger: ["blur"]
        }
      ],
      span: 24
    }
  ],
  group: [
    {
      label: $t("ngform.item.options"), //'属性',
      prop: "options",
      alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
      collapse: false, // 是否启用 collapse 必须alone=true
      column: [
        {
          label: $t("ngform.item.date.date_type"), //'日期类型',
          prop: "dateType",
          default: "date",
          type: "select",
          dicData: [
            { label: $t("ngform.item.date.year"), value: "year" },
            { label: $t("ngform.item.date.month"), value: "month" },
            { label: $t("ngform.item.date.date"), value: "date" },
            { label: "多日期", value: "dates" },
            { label: "多月份", value: "months" },
            { label: "多年份", value: "years" },
            { label: "周", value: "week" }
            // { label: "日期区间", value: "daterange" },
            // { label: "月份区间", value: "monthrange" }
          ],
          span: 24
        },
        {
          label: $t("ngform.item.date.date_format"), //'显示的日期格式',
          prop: "format",
          default: "yyyy-MM-dd",
          span: 24
        },
        {
          label: $t("ngform.item.date.value_format"), //'实际值日期格式',
          prop: "valueFormat",
          default: "yyyy-MM-dd",
          placeholder: "默认是Date类型",
          span: 24
        },
        {
          label: $t("ngform.item.default_value"), //'默认值',
          prop: "defaultValue",
          span: 24
        },
        {
          label: $t("ngform.item.placeholder"), //'输入提示',
          prop: "placeholder",
          default: $t("ngform.item.placeholder_input"), // '请输入',
          span: 24
        },
        {
          label: $t("ngform.item.date.align"), //'对齐方式',
          prop: "align",
          default: "left",
          type: "radioButton",
          dicData: ["left", "center", "right"].map((t) => {
            return { value: t, label: t }
          }),
          span: 24
        },

        {
          label: $t("ngform.item.clearable"), //'可清除',
          prop: "clearable",
          type: "switch",
          default: false,
          span: 24
        },
        {
          label: $t("ngform.item.editable"), //'可编辑',
          prop: "editable",
          type: "switch",
          default: true,
          span: 24
        },
        {
          label: $t("ngform.item.if_hidden"), //'是否隐藏',
          prop: "hidden",
          type: "switch",
          default: false,
          span: 24
        },
        {
          label: $t("ngform.item.if_disabled"), //'是否禁用',
          prop: "disabled",
          type: "switch",
          default: false,
          span: 24
        }
      ]
    }
  ]
}

export default obj
