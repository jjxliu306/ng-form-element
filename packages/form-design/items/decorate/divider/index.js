// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
  

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
            label: '标签', 
            prop: 'label',
            default: '分割线', 
            type: 'textarea',
            span: 24,
        },
        {
            label: '所占栅格', 
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
            label: '属性',
            prop: 'options',
            alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [ 
                {
                    label: '标签宽度', 
                    prop: 'labelWidth',
                    type: 'number', 
                    show: false,
                    default: 0
                },
                {
                    label: '要素宽度', 
                    prop: 'width',  
                    default: '100%',
                    span: 24,
                },
                {
                    label: '方向', 
                    prop: 'direction',  
                    default: 'horizontal',
                    type: 'radioButton',
                    dicData: [
                        {label: '横向' , value: 'horizontal'},
                        {label: '竖向' , value: 'vertical'}
                    ],
                    span: 24,
                }, 
                {
                    label: '标签位置', 
                    prop: 'orientation',  
                    default: 'center',
                    type: 'radioButton',
                    show: '$.options.direction == "horizontal"',
                    dicData: [
                        {label: '左' , value: 'left'},
                        {label: '居中' , value: 'center'},
                        {label: '右' , value: 'right'}
                    ],
                    span: 24,
                }, 
                {
                  label: '是否隐藏',
                  prop: 'hidden',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: '是否禁用',
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


