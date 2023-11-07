// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'   

const obj = {}
 
obj.type = 'button'//, // 表单类型 
obj.component = BaseIndex
//obj.properties = BaseProperties

// 序号 实际在json中删除
obj.seq = 7

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
            default: $t('ngform.item.button.name'),// 按钮 
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'), 
            prop: 'labelWidth',
            type: 'number',
            min: -1,
            max: 1000,
            show: false,
            default: 0,
            span: 24,
        },
        {
            label: $t('ngform.item.width'), 
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
            show: false,
            span: 24,
        },
        {
            label: $t('ngform.item.key') , //'数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
        },
        
    ],
    group: [
        {
            label: $t('ngform.item.options') ,//'属性',
            prop: 'options',
            alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [ 
                {
                    label: $t('ngform.item.button.size'),//大小
                    prop: 'size',  
                    default: 'mini' ,
                    type: 'select',
                     clearable: false,
                    dicData: ['medium' , 'small' , 'mini'].map(t=>{
                        return {value: t , label: t}
                    }),
                    span: 24,
                },
                {
                    label: $t('ngform.item.button.type'),// 类型
                    prop: 'type',  
                    default: 'primary' ,
                    clearable: false,
                    type: 'select',
                    dicData: ['primary' , 'success' , 'warning' , 'danger' , 'info' , 'text'].map(t=>{
                        return {value: t , label: t}
                    }),
                    span: 24,
                },
                {
                    label: $t('ngform.item.button.align'),// 布局
                    prop: 'align',  
                    default: 'left' ,
                    type: 'radioButton',
                    dicData: ['left' , 'center' , 'right'].map(t=>{
                        return {value: t , label: t}
                    }),
                    span: 24,
                },
                {
                    label: $t('ngform.item.button.control'),// 布局
                    prop: 'control',   
                    type: 'radio',
                    dicData: [
                        {value: 'reset' , label: $t('ngform.item.button.reset')},
                        {value: 'custom' , label: $t('ngform.item.button.custom')}
                    ],
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.button.script'),// 布局
                    prop: 'script',   
                    show: '$.options.control == "custom"',
                    type: 'textarea', 
                    span: 24,
                }, 
                
                // {
                //     label: $t('ngform.item.button.icon'),// icon
                //     prop: 'icon',   
                //     type: 'icon', 
                //     span: 24,
                // },
                {
                  label: $t('ngform.item.button.plain'),//朴素按钮
                  prop: 'plain',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
                {
                  label: $t('ngform.item.button.round'),//圆角按钮
                  prop: 'round',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: $t('ngform.item.button.circle') ,//圆形按钮
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


