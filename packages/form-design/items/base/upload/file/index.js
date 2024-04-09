// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分

import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t, $t } from '../../../../../locale/index.js'

const obj = {}

obj.type = 'uploadFile'//, // 表单类型
obj.component = BaseIndex
//obj.properties = BaseProperties

// 序号 实际在json中删除
obj.seq = 22

// 不需要事件和监听
obj.event_ = false
obj.listen_ = false

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
      default: $t('ngform.item.upload.file_name'),//'上传文件',
      span: 24
    },
    {
      label: $t('ngform.item.label_width'),//'标签宽度',
      prop: 'labelWidth',
      type: 'number',
      min: -1,
      max: 1000,
      default: -1,
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
          label: $t('ngform.item.upload.upload_url'),//'上传地址',
          prop: 'action',
          type: 'textarea',
          span: 24
        },
        {
          label: $t('ngform.item.upload.file_url_path'),//'epl地址',
          prop: 'responseFileUrl',
          type: 'textarea',
          placeholder:  $t('ngform.item.upload.file_url_path_placeholder'),//'必填,上传成功后解析文件url的epl地址',
          span: 24
        },
        {
          label: $t('ngform.item.upload.file_id_path'),//'epl地址',
          prop: 'responseFileId',
          type: 'textarea',
          placeholder: $t('ngform.item.upload.file_id_path_placeholder'),// '选填,上传成功后解析文件ID的epl地址',
          span: 24
        },
        {
          label: $t('ngform.item.upload.file_type'),//'文件类型',
          prop: 'accept',
          placeholder: $t('ngform.item.upload.file_type'),//"文件类型",
          span: 24
        },
        {
          label: $t('ngform.item.upload.limit_size'),//'文件大小',
          prop: 'limitSize',
          type: 'number',
          default: 10,
          placeholder: $t('ngform.item.upload.limit_size'),//"文件大小(Mb)",
          span: 24
        },
        {
          label: $t('ngform.item.default_value'),//'默认值',
          prop: 'defaultValue',
          show: false,
          default: [],
          span: 24
        },
        {
          label: $t('ngform.item.upload.multiple'),//'多选',
          prop: 'multiple',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.upload.limit'),//'最大上传数量',
          prop: 'limit',
          type: 'number',
          default: 3,
          show: '$.options.multiple',
          placeholder: $t('ngform.item.upload.limit'),//"最大上传文件数量",
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
        },
        {
          label: $t('ngform.item.upload.upload_hidden'),//'上传后隐藏',
          prop: 'uploadHidden',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.upload.header'),//'携带头信息',
          prop: 'headers',
          type: 'kv',
          default: [],
          span: 24
        }

      ]
    }
  ]
}

export default obj


