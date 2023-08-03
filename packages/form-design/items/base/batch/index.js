// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'

const obj = {}
 
obj.type = 'batch'//, // 表单类型 
obj.component = BaseIndex
obj.properties = BaseProperties
// 序号 实际在json中删除
obj.seq = 20 

// 补充配置样式
obj.options = {
	config: {
      size: 'mini',
      labelWidth: 80
    },
    columns: [
        {
            label: $t('ngform.item.label'),//'标签', 
            prop: 'label',
            default: $t('ngform.item.batch.name') ,//'动态表格', 
            span: 24,
        },
        {
            label: $t('ngform.item.label_width') ,//'标签宽度', 
            prop: 'labelWidth',
            type: 'number', 
            default: -1
        },
        {
            label: $t('ngform.item.width') ,//'要素宽度', 
            prop: 'width',  
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
            span: 24,
        },
        {
            label: $t('ngform.item.key') , //'数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
        },
         // 默认栅格值回填
        {
            label: '栅格默认值', 
            prop: 'list',  
            show: false,
            default: [],
            span: 24,
        }
    ],
    group: [
        {
            label: $t('ngform.item.options') ,//'属性',
            prop: 'options',
            alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [ 
               
                {
                    label: $t('ngform.item.batch.scroll_height') ,//'滚动高度', 
                    prop: 'scrollY',  
                    type: 'number',
                    default: 0,
                    span: 24,
                }, 
        //         showItem:[] ,
        // colWidth:{},
               
                {
                    prop: 'showItem',
                    show: false,
                    default: []
                },
                {
                    prop: 'colWidth',
                    show: false,
                    default: {}
                },
                {
                    label: $t('ngform.item.batch.custom_style') ,// '样式style', 
                    prop: 'customStyle',  
                    type: 'textarea',
                    span: 24,
                },
                {
                    label: $t('ngform.item.batch.no_data_label') ,// '空内容提示', 
                    prop: 'noDataText',  
                    type: 'textarea',
                    default: $t('ngform.item.batch.no_data') ,//'暂无数据',
                    span: 24,
                },
                {
                    label: $t('ngform.item.batch.custom_class') ,//'样式class', 
                    prop: 'customClass',  
                    type: 'textarea',
                    span: 24,
                },
                
                {
                  label: $t('ngform.item.batch.copy_row') ,//'行复制',
                  prop: 'copyRow',
                  type: 'switch',
                  default: true,
                  span: 24,
                }, 
                {
                  label: $t('ngform.item.batch.hide_seq') ,//'隐藏序号',
                  prop: 'hideSequence',
                  type: 'switch',
                  default: true,
                  span: 24,
                }, 
                {
                  label: $t('ngform.item.batch.show_border') ,// '边框',
                  prop: 'showBorder',
                  type: 'switch',
                  default: true,
                  span: 24,
                }, 
                
                {
                  label: $t('ngform.item.if_hidden') ,//'是否隐藏',
                  prop: 'hidden',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: $t('ngform.item.if_disabled') ,//'是否禁用',
                  prop: 'disabled',
                  type: 'switch',
                  default: false,
                  span: 24,
                },  
                {
                    label: $t('ngform.item.batch.add_type') ,// '新增方式', 
                    prop: 'addType',  
                    default: 'line',
                    type: 'radioButton',
                    dicData: [
                        {label: $t('ngform.item.batch.add_type_line') /*'增加行'*/ , value: 'line'},
                        {label: $t('ngform.item.batch.add_type_dialog')/*'弹出框'*/ , value: 'dialog'}
                    ],
                    span: 24
                },
            ]
        }
    ] 
}
 

export default obj


