// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分

import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t, $t } from '../../../../locale/index.js'

const obj = {}

obj.type = 'input'//, // 表单类型
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 1

// 补充配置样式
obj.options = {
  config: {
    size: 'mini',
    labelWidth: 80
  },
  columns: [
    {
      label: $t('ngform.item.label'),
      prop: 'label',
      default: $t('ngform.item.input.name'),//'输入框',
      span: 24
    },
    {
      label: $t('ngform.item.label_width'),
      prop: 'labelWidth',
      type: 'number',
      min: -1,
      max: 1000,
      default: -1,
      span: 24
    },
    {
      label: $t('ngform.item.width'),
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
    },
    {
      label: $t('ngform.item.model'), //'数据字段',
      prop: 'model',
      span: 24
    },
    {
      label: $t('ngform.item.key'), //'数据KEY',
      prop: 'key',
      show: false,
      span: 24
    },
    {
      type: 'divider',
      label: $t('ngform.item.validate_rule') //'效验规则'
    },
    {
      prop: 'rules',
      type: 'rules',
      labelWidth: 0,
      default: [{
        required: false, // 必须填写
        message: $t('ngform.item.required'), //"必填项",
        trigger: ['blur']
      }],
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
          label: $t('ngform.item.default_value'),//'默认值',
          prop: 'defaultValue',
          span: 24
        },
        {
          label: $t('ngform.item.input.input_type'),//'输入类型',
          prop: 'type',
          span: 24,
          type: 'select',
          default: 'text',
          dicData: ['text', 'date', 'datetime-local', 'email', 'month', 'number', 'password', 'tel', 'time', 'url', 'week'].map(t => {
            return { label: t, value: t }
          })
        },
        {
          label: $t('ngform.item.input.prepend'),//'前缀',
          prop: 'prepend',
          span: 24
        },
        {
          label: $t('ngform.item.input.append'),//'后缀',
          prop: 'append',
          span: 24
        },
        {
          label: $t('ngform.item.placeholder'),//'输入提示',
          prop: 'placeholder',
          default: $t('ngform.item.placeholder_input'),// '请输入',
          span: 24
        },
        {
          label: $t('ngform.item.max_length'),//'最大长度',
          type: 'number',
          min: -1,
          max: 100000,
          prop: 'maxLength',
          span: 24
        },
        {
          label: $t('ngform.item.clearable'),//'可清除',
          prop: 'clearable',
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
        {
          label: $t('ngform.item.if_disabled'),//'是否禁用',
          prop: 'disabled',
          type: 'switch',
          default: false,
          span: 24
        }

      ]
    }
    // {
    //     label: '测试分割',
    //     prop: 'test',
    //     collapse: false, // 是否启用 collapse 必须alone=true
    //     column: [
    //         {
    //             label: '标签宽度',
    //             prop: 'width',
    //             type: 'number',
    //             min: 1,
    //             max: 1000,
    //             default: 80,
    //             span: 24,
    //         }
    //     ]
    // }
  ]
}

export default obj


