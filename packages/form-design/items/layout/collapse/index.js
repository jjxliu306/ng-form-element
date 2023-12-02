// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'     

const obj = {}
 
obj.type = 'collapse'//, // 表单类型 
obj.component = BaseIndex
obj.properties = BaseProperties
// 序号 实际在json中删除
obj.seq = 6
obj.layout = true

// 补充配置样式
obj.options = {
	config: {
      size: 'mini',
      labelWidth: 80
    },
    columns: [
        {
            label:  $t('ngform.item.label'), //'标签',
            prop: 'label',
            default:  $t('ngform.item.collapse.name') ,//'选项卡', 
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
            label: $t('ngform.item.collapse.item') ,//'标签页', 
            prop: 'columns',  
            show: false,
            default: [
                { 
                    label:  $t('ngform.item.collapse.item_first') ,//'选项卡1',
                    list: []
                }
            ],
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
                    label: $t('ngform.item.collapse.title_font_size'),//标题字体大小
                    prop: 'titleFontSize' ,  
                    default: 14,
                    type: 'number', 
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.collapse.title_background'),//标题背景
                    prop: 'titleBackColor' ,  
                    default: '#FFFFFF',
                    type: 'color', 
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.collapse.title_font_color'),//标题字体颜色
                    prop: 'titleFontColor' ,  
                    default: '#000000',
                    type: 'color', 
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.collapse.accordion'),//'手风琴', 
                    prop: 'accordion' ,  
                    default: true,
                    type: 'switch', 
                    span: 24,
                }, 
                {
                  label: $t('ngform.item.if_hidden') ,//'是否隐藏',
                  prop: 'hidden',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                // {
                //   label: $t('ngform.item.if_disabled') ,//'是否禁用','是否禁用',
                //   prop: 'disabled',
                //   type: 'switch',
                //   default: false,
                //   span: 24,
                // }  

            ]
        }
    ] 
}
 

export default obj


