// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分

import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t, $t } from '../../../../locale/index.js'

const obj = {}

obj.type = 'table'//, // 表单类型
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 1
obj.layout = true

// 补充配置样式
obj.options = {
  config: {
    size: 'mini',
    labelWidth: 80
  },
  columns: [
    {
      label: $t('ngform.item.label'), //'标签',
      prop: 'label',
      default: $t('ngform.item.table.name'),//'表格布局',
      span: 24
    },
    {
      label: $t('ngform.item.label_width'),//'标签宽度',
      prop: 'labelWidth',
      type: 'number',
      show: false,
      default: 0
    },
    {
      label: $t('ngform.item.width'), //'要素宽度',
      prop: 'width',
      default: '100%',
      span: 24
    },
    {
      label: $t('ngform.item.span'),//'所占栅格',
      type: 'spanGroup',
      prop: 'span',
      min: 1,
      max: 24,
      default: 24,
      span: 24
    }
  ],
  group: [
    {
      label: $t('ngform.item.options'),//'属性',
      prop: 'options',
      alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
      collapse: false, // 是否启用 collapse 必须alone=true
      column: [

        {
          label: $t('ngform.item.style'),//'样式style',
          prop: 'customStyle',
          type: 'textarea',
          span: 24
        },
        {
          label: $t('ngform.item.class'),//'样式class',
          prop: 'customClass',
          type: 'textarea',
          span: 24
        },
        {
          label: $t('ngform.item.bordered'),//'边框',
          prop: 'bordered',
          type: 'switch',
          default: true,
          span: 24
        },
        {
          label: $t('ngform.item.table.bright'),//'hover点亮',
          prop: 'bright',
          type: 'switch',
          default: true,
          span: 24
        },
        {
          label: $t('ngform.item.table.small'),//'紧凑',
          prop: 'small',
          type: 'switch',
          default: true,
          span: 24
        },

        {
          label: $t('ngform.item.if_hidden'),//'是否隐藏','是否隐藏',
          prop: 'hidden',
          type: 'switch',
          default: false,
          span: 24
        }
      ]
    }
  ]
}

export default obj


