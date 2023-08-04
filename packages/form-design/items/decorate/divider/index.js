// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'  

const obj = {}
 
obj.type = 'divider'//, // 表单类型 
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
            label: $t('ngform.item.label'), //'标签', 
            prop: 'label',
            default:  $t('ngform.item.divider.name'),//分割线', 
            type: 'textarea',
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'),//'标签宽度', '标签宽度', 
            prop: 'labelWidth',
            type: 'number', 
            show: false,
            max: 1000,
            default: 0,
            span: 24,
        },
        {
            label: $t('ngform.item.width'), //'要素宽度', 
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
                    label: $t('ngform.item.divider.direction') ,//'方向', 
                    prop: 'direction',  
                    default: 'horizontal',
                    type: 'radioButton',
                    dicData: [
                        {label: $t('ngform.item.divider.horizontal') , value: 'horizontal'},
                        {label: $t('ngform.item.divider.vertical') , value: 'vertical'}
                    ],
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.divider.orientation'),//'标签位置', 
                    prop: 'orientation',  
                    default: 'center',
                    type: 'radioButton',
                    show: '$.options.direction == "horizontal"',
                    dicData: [
                        {label: $t('ngform.item.divider.left') , value: 'left'},
                        {label: $t('ngform.item.divider.center') , value: 'center'},
                        {label: $t('ngform.item.divider.right') , value: 'right'}
                    ],
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


