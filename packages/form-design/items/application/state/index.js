// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue' 
import { t , $t } from '../../../../locale/index.js'  

const obj = {}
 
obj.type = 'state'//, // 表单类型 
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
            label: $t('ngform.item.label'),//'标签', '标签', 
            prop: 'label',
            default: $t('ngform.item.state.name'),//'区划选择',
            span: 24,
        },
        {
            label: $t('ngform.item.label_width') ,//'标签宽度', 
            prop: 'labelWidth',
            type: 'number',
            min: -1,
            max: 1000,
            default: -1,
            span: 24,
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
        {
            type: 'divider',
            label: $t('ngform.item.validate_rule') , //'效验规则'
        },
        { 
            prop: 'rules',
            type: 'rules',
            labelWidth: 0,
            default: [{ 
                required: false, // 必须填写
                message: $t('ngform.item.required'), //"必填项",
                trigger: ['blur','change'] 
            }],
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
                    label: $t('ngform.item.default_value') ,//'默认值',
                    prop: 'defaultValue', 
                    show: false,
                    span: 24,
                },  
                {
                    label: $t('ngform.item.state.max_level') ,//'区划层级', 
                    prop: 'maxLevel',
                    default: 3,
                    span: 24,
                    type: 'select',  
                    dicData: [
                        {value:1 , label: $t('ngform.item.state.province')},
                        {value:2 , label: $t('ngform.item.state.city')},
                        {value:3 , label: $t('ngform.item.state.district')}
                    ]
                }, 
                {
                  label: $t('ngform.item.state.one_by_one'),//'递进式显示',
                  prop: 'oneByOne',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: $t('ngform.item.state.all_path'),//'回显路径',
                  prop: 'showAllPath',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: $t('ngform.item.state.separator'),//'路径分隔符',
                  prop: 'separator',
                  show: '$.options.showAllPath' ,
                  default: '/',
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
                }  

            ]
        }
    ] 
}
 

export default obj


