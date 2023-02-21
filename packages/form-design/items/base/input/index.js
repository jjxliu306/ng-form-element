// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
  

const obj = {}
 
obj.type = 'input'//, // 表单类型 
obj.component = BaseIndex


// 补充配置样式
obj.options = {
	config: {
      size: 'mini',
      labelWidth: 90,
      emptyBtn: false,
      submitBtn: false
    },
    columns: [
        {
            label: '标签', 
            prop: 'label',
            default: '文本框',
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
            label: '效验', 
            prop: 'rules',
            type: 'rules',
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
            label: '外观',
            prop: 'options',
            alone: false, // 是否独立与columns之外展示 false则和columns一起，不另外显示
            collapse: false, // 是否启用 collapse 必须alone=true
            column: [ 
                {
                    label: '标签宽度', 
                    prop: 'width',
                    type: 'number',
                    min: -1,
                    max: 1000,
                    default: -1,
                    span: 24,
                },
                {
                    label: '默认值', 
                    prop: 'defaultValue',
                    span: 24,
                },
                {
                    label: '前缀', 
                    prop: 'prepend',
                    span: 24,
                },
                {
                    label: '后缀', 
                    prop: 'append',
                    span: 24,
                },
                {
                    label: '输入提示', 
                    prop: 'placeholder',
                    default: '请输入',
                    span: 24,
                },
                {
                    label: '最大长度',
                    type: 'number',
                    min: -1,
                    max: 1000,
                    prop: 'maxLength', 
                    span: 24,
                }, 
                {
                  label: '可清除',
                  prop: 'clearable',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
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
        },
        // {
        //     label: '测试分割',
        //     prop: 'test', 
        //     collapse: false, // 是否启用 collapse 必须alone=true
        //     column: [ 
        //         {
        //             label: '标签宽度', 
        //             prop: 'width',
        //             type: 'number',
        //             min: 1,
        //             max: 1000,
        //             default: 80,
        //             span: 24,
        //         }
        //     ]
        // }
    ] 
}
 

export default obj


