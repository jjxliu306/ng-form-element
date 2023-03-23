// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue' 
  

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
            label: '标签', 
            prop: 'label',
            default: '区划选择',
            span: 24,
        },
        {
            label: '标签宽度', 
            prop: 'labelWidth',
            type: 'number',
            min: -1,
            max: 1000,
            default: -1,
            span: 24,
        },
        {
            label: '要素宽度', 
            prop: 'width',  
            default: '100%',
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
        },
        {
            label: '数据字段', 
            prop: 'model',
            span: 24,
        },
        {
            label: '数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
        },
        {
            type: 'divider',
            label: '效验规则'
        },
        { 
            prop: 'rules',
            type: 'rules',
            labelWidth: 0,
            default: [{ 
                required: false, // 必须填写
                message: "必填项",
                trigger: ['blur'] 
            }],
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
                    label: '默认值', 
                    prop: 'defaultValue', 
                    show: false,
                    span: 24,
                },  
                {
                    label: '区划层级', 
                    prop: 'maxLevel',
                    default: 3,
                    span: 24,
                    type: 'select',  
                    dicData: [
                        {value:1 , label: '省'},
                        {value:2 , label: '地市'},
                        {value:3 , label: '区县'}
                    ]
                }, 
                {
                  label: '递进式显示',
                  prop: 'oneByOne',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: '回显路径',
                  prop: 'showAllPath',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: '路径分隔符',
                  prop: 'separator',
                  show: '$.options.showAllPath' ,
                  default: '/',
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


