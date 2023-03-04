// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
  

const obj = {}
 
obj.type = 'batch'//, // 表单类型 
obj.component = BaseIndex
obj.properties = BaseProperties
// 序号 实际在json中删除
obj.seq = 20
obj.layout = true

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
            default: '动态表格', 
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
         // 默认栅格值回填
        {
            label: '栅格默认值', 
            prop: 'list',  
            show: false,
            default: [],
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
                    label: '滚动高度', 
                    prop: 'scrollY',  
                    type: 'number',
                    default: 0,
                    span: 24,
                }, 
        //         showItem:[] ,
        // colWidth:{},
               
                {
                    prop: 'showItem',
                    show: false,
                    default: []
                },
                {
                    prop: 'colWidth',
                    show: false,
                    default: {}
                },
                {
                    label: '样式style', 
                    prop: 'customStyle',  
                    type: 'textarea',
                    span: 24,
                },
                {
                    label: '样式class', 
                    prop: 'customClass',  
                    type: 'textarea',
                    span: 24,
                },
                
                {
                  label: '行复制',
                  prop: 'copyRow',
                  type: 'switch',
                  default: true,
                  span: 24,
                }, 
                {
                  label: '隐藏序号',
                  prop: 'hideSequence',
                  type: 'switch',
                  default: true,
                  span: 24,
                }, 
                {
                  label: '边框',
                  prop: 'showBorder',
                  type: 'switch',
                  default: true,
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
                },  
                {
                    label: '新增方式', 
                    prop: 'addType',  
                    default: 'line',
                    type: 'radioButton',
                    dicData: [
                        {label: '增加行' , value: 'line'},
                        {label: '弹出框' , value: 'dialog'}
                    ],
                    span: 24
                },
            ]
        }
    ] 
}
 

export default obj


