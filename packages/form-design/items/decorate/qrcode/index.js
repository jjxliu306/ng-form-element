// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'    

const obj = {}
 
obj.type = 'qrcode'//, // 表单类型 
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 6

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
            default: $t('ngform.item.qrcode.name'),//'输入框',
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
                    label: $t('ngform.item.qrcode.info') ,// 内容
                    prop: 'info',  
                    type: 'textarea', 
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.qrcode.height') ,// 高度
                    prop: 'height',  
                    type: 'number', 
                    default: 200,
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.qrcode.margin') ,// 边距
                    prop: 'margin',  
                    type: 'number', 
                    default: 20,
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.color_dark') ,// 实点颜色
                    prop: 'colorDark',  
                    type: 'color', 
                    default: '#000000',
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.color_light') ,// 空区颜色
                    prop: 'colorLight',  
                    type: 'color', 
                    default: '#FFFFFF',
                    span: 24,
                },
                // {
                //     label: $t('ngform.item.qrcode.bg_src') ,// 背景图
                //     prop: 'bgSrc',  
                //     type: 'image',  
                //     span: 24,
                // },
                {
                    label: $t('ngform.item.qrcode.bg_color') ,// 背景颜色
                    prop: 'bgColor',  
                    type: 'color',  
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.logo_src') ,// logo图
                    prop: 'logoSrc',  
                    type: 'image',  
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.logo_scale') ,// logo缩放比
                    prop: 'logoScale',  
                    type: 'number',  
                    default: 0.2,
                    step: 0.1,
                    precision: 2,
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.logo_margin') ,// logo背景色
                    prop: 'logoMargin',  
                    type: 'number', 
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.logo_bg_color') ,// logo背景色
                    prop: 'logoBgColor',  
                    type: 'color', 
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.logo_radius') ,// logo圆角
                    prop: 'logoRadius',  
                    type: 'number', 
                    span: 24,
                },
                {
                    label: $t('ngform.item.qrcode.white_margin') ,// 白色边框
                    prop: 'whiteMargin',  
                    type: 'switch',
                    default: true, 
                    span: 24,
                },
                // {
                //     label: $t('ngform.item.link.type'),// 类型
                //     prop: 'type' ,  
                //     default: 'default',
                //     type: 'select', 
                //     dicData: [
                //         {value: 'default' , label: 'default'},
                //         {value: 'primary' , label: 'primary'},
                //         {value: 'success' , label: 'success'},
                //         {value: 'warning' , label: 'warning'},
                //         {value: 'danger' , label: 'danger'},
                //         {value: 'info' , label: 'info'}
                //     ],
                //     span: 24,
                // },
               
                // {
                //   label: $t('ngform.item.link.underline') ,//'是否隐藏',
                //   prop: 'underline',
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


