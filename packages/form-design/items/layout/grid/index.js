// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'     

const obj = {}
 
obj.type = 'grid'//, // 表单类型 
obj.component = BaseIndex
obj.properties = BaseProperties
// 序号 实际在json中删除
obj.seq = 3
obj.layout = true

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
            default: $t('ngform.item.grid.name') ,//'栅格布局', 
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'),//'标签宽度', 
            prop: 'labelWidth',
            type: 'number', 
            show: false,
            default: 0
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
        },
        // 默认栅格值回填
        {
            label: $t('ngform.item.grid.columns'),//'栅格默认值', 
            prop: 'columns',  
            show: false,
            default: [
                {
                    span: 12,
                    list: []
                },
                {
                    span: 12,
                    list: []
                }
            ],
            span: 24,
        }
    ],
    group: [
        {
            label:  $t('ngform.item.options') ,//'属性',
            prop: 'options',
            alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [ 
                
               
                {
                    label: $t('ngform.item.grid.gutter'),//'栅格间隔', 
                    prop: 'gutter' ,
                    type: 'number', 
                    min: 0,
                    default: 20,
                    span: 24,
                },
                {
                    label: $t('ngform.item.grid.style'),//'样式style', 
                    prop: 'customStyle',  
                    type: 'textarea',
                    span: 24,
                },
                {
                    label: $t('ngform.item.grid.class'),//'样式class', 
                    prop: 'customClass',  
                    type: 'textarea',
                    span: 24,
                },
                // {
                //   label: '边框',
                //   prop: 'bordered',
                //   type: 'switch',
                //   default: true,
                //   span: 24,
                // }, 
                
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


