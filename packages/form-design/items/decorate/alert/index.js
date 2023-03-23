// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
  

const obj = {}
 
obj.type = 'alert'//, // 表单类型 
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 4

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
            default: '提示', 
            span: 24,
        },
        {
            label: '标签宽度', 
            prop: 'labelWidth',
            type: 'number',
            min: -1,
            show: false,
            max: 1000,
            default: 0,
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
                    label: '标题', 
                    prop: 'title',  
                    type: 'textarea',
                    default: '提示标题',
                    span: 24,
                },
                {
                    label: '辅助文字', 
                    prop: 'description',  
                    type: 'textarea',
                    default: '辅助内容',
                    span: 24,
                },
                
                {
                    label: '类型', 
                    prop: 'type',  
                    default: 'success',
                    type: 'radioButton',
                    dicData: [
                        {label: '成功' , value: 'success'},
                        {label: '告警' , value: 'warning'},
                        {label: '信息' , value: 'info'},
                        {label: '异常' , value: 'error'}
                    ],
                    span: 24,
                }, 
                {
                    label: '主题', 
                    prop: 'effect',  
                    default: 'light',
                    type: 'radioButton', 
                    dicData: [
                        {label: '高亮' , value: 'light'},
                        {label: '暗黑' , value: 'dark'}
                    ],
                    span: 24,
                }, 
                {
                  label: '可关闭',
                  prop: 'closable',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                    label: '关闭文本', 
                    prop: 'closeText',  
                    show: '$.options.closable', 
                    placeholder: '不需要则不填',
                    span: 24,
                },
                {
                  label: '居中',
                  prop: 'center',
                  type: 'switch',
                  default: false,
                  span: 24,
                },
                {
                  label: '显示图标',
                  prop: 'showIcon',
                  type: 'switch',
                  default: false,
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


