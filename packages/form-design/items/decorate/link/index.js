// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'    

const obj = {}
 
obj.type = 'link'//, // 表单类型 
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 5

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
            type: 'textarea',
            default: $t('ngform.item.link.name'),//'输入框',
            span: 24,
        }, 
        {
            label: $t('ngform.item.width'), //'要素宽度', 
            prop: 'width',  
            default: '100%',
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'),//'标签宽度', 
            prop: 'labelWidth',
            type: 'number',
            min: -1,
            show: false,
            max: 1000,
            default: 0,
            span: 24,
        },
        {
            label: $t('ngform.item.span') ,//'所占栅格', 
            type: 'spanGroup',
            prop: 'span',
            min: 1,
            max: 24,
            default: 24,
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
                    label: $t('ngform.item.link.href') ,// 跳转链接
                    prop: 'href',  
                    type: 'textarea', 
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.link.type'),// 类型
                    prop: 'type' ,  
                    default: 'default',
                    type: 'select', 
                    dicData: [
                        {value: 'default' , label: 'default'},
                        {value: 'primary' , label: 'primary'},
                        {value: 'success' , label: 'success'},
                        {value: 'warning' , label: 'warning'},
                        {value: 'danger' , label: 'danger'},
                        {value: 'info' , label: 'info'}
                    ],
                    span: 24,
                },
                // {
                //   label: $t('ngform.item.link.icon') ,//'是否隐藏',
                //   prop: 'icon',
                //   type: 'switch',
                //   default: true,
                //   span: 24,
                // },
                {
                  label: $t('ngform.item.link.underline') ,//'是否隐藏',
                  prop: 'underline',
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
                }  

            ]
        }
    ] 
}
 

export default obj


