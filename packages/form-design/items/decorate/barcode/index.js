// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'    

const obj = {}
 
obj.type = 'barcode'//, // 表单类型 
obj.component = BaseIndex
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
            default: $t('ngform.item.barcode.name'),//'输入框',
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
                    label: $t('ngform.item.barcode.info') ,// 信息
                    prop: 'info',  
                    type: 'textarea', 
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.barcode.format'),// 条形码的类型
                    prop: 'format' ,  
                    default: 'CODE128',
                    type: 'select', 
                    dicData: [
                        {value: 'CODE128' , label: 'CODE128'},
                        {value: 'EAN/UPC' , label: 'EAN/UPC'},
                        {value: 'CODE39' , label: 'CODE39'},
                        {value: 'ITF-14' , label: 'ITF-14'},
                        {value: 'MSI' , label: 'MSI'},
                        {value: 'Pharmacode' , label: 'Pharmacode'},
                        {value: 'Codabar' , label: 'Codabar'}
                    ],
                    span: 24,
                },
                {
                  label: $t('ngform.item.barcode.width') ,// 每个条条的宽度，注意这里不是指整个条形码的宽度
                  prop: 'width',
                  type: 'number',
                  min: 1,
                  max: 20,
                  default: 2,
                  span: 24,
                },
                {
                  label: $t('ngform.item.barcode.height') ,// 整个条形码的高度
                  prop: 'height',
                  type: 'number',
                  min: 10,
                  max: 200,
                  default: 100,
                  span: 24,
                },
                {
                  label: $t('ngform.item.barcode.display_value') ,// 是否显示条形码下面的文字
                  prop: 'displayValue',
                  type: 'switch',
                  default: true,
                  span: 24,
                },
                {
                    label: $t('ngform.item.barcode.font_size'),// 条形码的类型
                    prop: 'fontSize' ,   
                    type: 'number', 
                    default: 20 ,
                    min: 8,
                    max: 30,
                    span: 24,
                    show: '$.options.displayValue'

                },
                {
                    label: $t('ngform.item.barcode.font_options'),// 条形码的类型
                    prop: 'fontOptions' ,   
                    type: 'select', 
                    dicData: [
                        {value: 'bold' , label: 'bold'},
                        {value: 'italic' , label: 'italic'},
                        {value: 'bold italic' , label: 'bold italic'} 
                    ],
                    span: 24,
                     show: '$.options.displayValue'
                },
                {
                    label: $t('ngform.item.barcode.text_align'),// 文本内容对其方式
                    prop: 'textAlign' ,   
                    type: 'radioButton', 
                    default: 'center',
                    dicData: [
                        {value: 'left' , label: 'left'},
                        {value: 'center' , label: 'center'},
                        {value: 'right' , label: 'right'} 
                    ],
                    span: 24,
                     show: '$.options.displayValue'
                },
                 {
                    label: $t('ngform.item.barcode.text_position'),// 文本位置
                    prop: 'textPosition' ,   
                    type: 'radioButton', 
                    default: 'bottom',
                    dicData: [
                        {value: 'bottom' , label: 'bottom'},
                        {value: 'top' , label: 'top'} 
                    ],
                    span: 24,
                     show: '$.options.displayValue'
                },
                {
                    label: $t('ngform.item.barcode.text_margin'),// 文本和条形码间距
                    prop: 'textMargin' ,   
                    type: 'number', 
                    default: 2 ,
                    min: 1,
                    max: 20,
                    span: 24,
                    show: '$.options.displayValue'
                },
                {
                    label: $t('ngform.item.barcode.background'),// 背景色
                    prop: 'background' ,   
                    type: 'color',  
                    default: '#FFFFFF',
                    span: 24, 
                },
                {
                    label: $t('ngform.item.barcode.line_color'),// 条形码颜色
                    prop: 'lineColor' ,   
                    type: 'color',  
                    default: '#000000',
                    span: 24, 
                },
                 {
                    label: $t('ngform.item.barcode.margin'),// 条形码颜色
                    prop: 'margin' ,   
                    type: 'number',  
                    default: 10,
                    span: 24, 
                },
                {
                  label: $t('ngform.item.if_hidden') ,//'是否隐藏',
                  prop: 'hidden',
                  type: 'switch',
                  default: false,
                  span: 24,
                } 

            ]
        }
    ] 
}
 

export default obj


