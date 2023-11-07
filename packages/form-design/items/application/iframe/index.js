// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'    

const obj = {}
 
obj.type = 'iframe'//, // 表单类型 
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 3

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
            default: $t('ngform.item.iframe.name'),//'输入框',
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'), 
            prop: 'labelWidth',
            type: 'number', 
            min: -1,
            max: 1000,
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
            label: $t('ngform.item.iframe.url') , // url
            prop: 'url', 
            placeholder: $t('ngform.item.iframe.url_placeholder'),// 
            default: 'https://netopt.net',
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
            label: $t('ngform.item.options') ,//'属性',
            prop: 'options',
            alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [  
               
                {
                    label: $t('ngform.item.iframe.marginheight') ,//'默认值',
                    prop: 'marginheight', 
                    type: 'number',
                    default: 0,
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.iframe.marginwidth') ,//'默认值',
                    prop: 'marginwidth', 
                    type: 'number',
                    default: 0,
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.iframe.sandbox') ,//'默认值',
                    prop: 'sandbox', 
                    type: 'select',
                    dicData: [
                        {value: 'allow-same-origin' , label: 'allow-same-origin'},
                        {value: 'allow-top-navigation' , label: 'allow-top-navigation'},
                        {value: 'allow-forms' , label: 'allow-forms'},
                        {value: 'allow-scripts' , label: 'allow-scripts'},

                    ],
                    default: '', 
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.bordered') ,//'默认值',
                    prop: 'frameborder', 
                    type: 'switch',
                    default: false,
                    span: 24,
                },  
                {
                    label: $t('ngform.item.iframe.scrolling') ,//'默认值',
                    prop: 'scrolling', 
                    type: 'select',
                    default: 'auto',
                    dicData: [
                        {value: 'auto' , label: 'auto'},
                        {value: 'yes' , label: 'yes'},
                        {value: 'no' , label: 'no'},

                    ],
                    span: 24,
                }, 
                
    
            ]
        }
    ]
}
 

export default obj


