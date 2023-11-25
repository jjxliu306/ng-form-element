// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分

import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t, $t } from '../../../../locale/index.js'

const obj = {}

obj.type = 'alert'//, // 表单类型
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 4

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
      default: $t('ngform.item.alert.name'),//'提示',
      span: 24
    },
    {
      label: $t('ngform.item.label_width'),//'标签宽度',
      prop: 'labelWidth',
      type: 'number',
      min: -1,
      show: false,
      max: 1000,
      default: 0,
      span: 24
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
          label: $t('ngform.item.alert.title'),//'标题',
          prop: 'title',
          type: 'textarea',
          default: $t('ngform.item.alert.default'),//'提示标题',
          span: 24
        },
        {
          label: $t('ngform.item.alert.description'),//'辅助文字',
          prop: 'description',
          type: 'textarea',
          default: $t('ngform.item.alert.description'),//'辅助内容',
          span: 24
        },

        {
          label: $t('ngform.item.alert.type'),//'类型',
          prop: 'type',
          default: 'success',
          type: 'radioButton',
          dicData: [
            { label: $t('ngform.item.alert.success'), value: 'success' },
            { label: $t('ngform.item.alert.warning'), value: 'warning' },
            { label: $t('ngform.item.alert.info'), value: 'info' },
            { label: $t('ngform.item.alert.error'), value: 'error' }
          ],
          span: 24
        },
        {
          label: $t('ngform.item.alert.effect'),//'主题',
          prop: 'effect',
          default: 'light',
          type: 'radioButton',
          dicData: [
            { label: $t('ngform.item.alert.light'), value: 'light' },
            { label: $t('ngform.item.alert.dark'), value: 'dark' }
          ],
          span: 24
        },
        {
          label: $t('ngform.item.alert.closable'),//'可关闭',
          prop: 'closable',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.alert.close_text'),//'关闭文本',
          prop: 'closeText',
          show: '$.options.closable',
          placeholder: $t('ngform.item.alert.close_text_placeholder'),//'不需要则不填',
          span: 24
        },
        {
          label: $t('ngform.item.alert.center'),//'居中',
          prop: 'center',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.alert.show_icon'),//'显示图标',
          prop: 'showIcon',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.if_hidden'),//'是否隐藏',
          prop: 'hidden',
          type: 'switch',
          default: false,
          span: 24
        },
        
      ]
    }
  ]
}

export default obj


