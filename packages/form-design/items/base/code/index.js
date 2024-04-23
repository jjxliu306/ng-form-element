// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'    

const obj = {}
 
obj.type = 'code'//, // 表单类型 
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 30

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
            default: $t('ngform.item.code.name'),//'输入框',
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'), 
            prop: 'labelWidth',
            type: 'number', 
            min: -1,
            max: 1000,
            default: -1,
            span: 24,
        },
        {
            label: $t('ngform.item.width'), 
            prop: 'width',  
            default: '100%',
            span: 24,
        },
        {
            label: $t('ngform.item.height'), 
            prop: 'height',  
            default: '100%',
            span: 24,
        },
        {
            label: $t('ngform.item.span') ,//'所占栅格', 
            type: 'slider',
            prop: 'span',
            min: 1,
            max: 24,
            default: 24,
            span: 24,
        },
        {
            label: $t('ngform.item.model') , //'数据字段', 
            prop: 'model',
            show: true,
            span: 24,
        },
        {
            label: $t('ngform.item.datasource') , // 来源
            prop: 'sourceType', 
            type: 'radio',
            dicData: [
                { label: $t('ngform.item.datasource_static'), value: 0 },
                { label: $t('ngform.item.datasource_api'), value: 1 }
            ],
            default: 0,
            span: 24,
        },
        {
            label: $t('ngform.item.code.script') , // url
            prop: 'script', 
            type: 'textarea',
            show: '$.sourceType == 0',
            placeholder: $t('ngform.item.code.script_placeholder'),// 
            default: '',
            span: 24,
        },
        {
            label: $t('ngform.item.method_type'),
            default: 'get',
            prop: 'methodType',
            type: 'radio',
            show: '$.sourceType == 1',
            dicData: [
                { label: 'GET', value: 'get' },
                { label: 'POST', value: 'post' }
            ]
        },
        {
            label: $t('ngform.item.code.api_path') , // url
            prop: 'apiPath',  
            show: '$.sourceType == 1',
            placeholder: $t('ngform.item.code.api_path_placeholder'),// 
            default: '',
            span: 24,
        },
        {
            label: $t('ngform.item.code.data_url_path') , // url
            prop: 'dataPath',  
            show: '$.sourceType == 1',
            placeholder: $t('ngform.item.code.data_url_path_placeholder'),// 
            default: '',
            span: 24,
        },
        {
            label: $t('ngform.item.key') , //'数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
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
          label: $t('ngform.item.clearable'),//'可清除',
          prop: 'clearable',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.editable'),//'可编辑',
          prop: 'editable',
          type: 'switch',
          default: true,
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
    ]
}
 

export default obj


