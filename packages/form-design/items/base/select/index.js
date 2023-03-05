// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
  

const obj = {}
 
obj.type = 'select'//, // 表单类型 
obj.component = BaseIndex
obj.properties = BaseProperties

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
            default: '下拉选择器',
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
                    label: '默认值', 
                    prop: 'defaultValue',
                    show: false,
                    span: 24,
                }, 
                {
                    label: '输入提示', 
                    prop: 'placeholder',
                    default: '请输入',
                    span: 24,
                },

                 // dynamic: 0, // 数据获取方式
                 //  remoteFunc: '',//远程获取数据链接
                 //  dataPath: '',
                 //  remoteValue:'' ,
                 //  remoteLabel:'',
                 //  dictType: '' ,// 数据字典类型
                {
                    label: '数据获取', 
                    prop: 'dynamic',
                    default: 0,
                    span: 24,
                    type: 'select', 
                    show: false,
                    dicData: [
                        {label: '静态数据' , value: 0},
                        {label: 'API接口' , value: 1},
                        {label: '数据字典' , value: 2}
                    ]
                }, 
                {
                    label: '静态数据', 
                    prop: 'options',
                    default: [
                        {
                          value: "1",
                          label: "下拉框1"
                        },
                        {
                          value: "2",
                          label: "下拉框2"
                        }
                    ],
                    span: 24,
                    //type: 'kv',
                    show: false
                }, 

                {
                  label: '远程获取数据链接',
                  prop: 'remoteFunc', 
                  show: false
                } ,
                {
                  label: '数据路径',
                  prop: 'dataPath', 
                  show: false
                } ,
                {
                  label: '数据值字段',
                  prop: 'remoteValue', 
                  show: false
                } ,
                {
                  label: '数据标签字段',
                  prop: 'remoteLabel', 
                  show: false
                } ,
                {
                  label: '字典分类',
                  prop: 'dictType', 
                  show: false
                } ,
                
                {
                  label: '多选',
                  prop: 'multiple',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
                {
                  label: '可搜索',
                  prop: 'showSearch',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
                
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
                },
                {
                  label: '选择后回调',
                  prop: 'selectCb',
                  placeholder: '选择后回调方法,eg: $.A004=$select.name, $表示当前表单数据,$select标示当前选择元素实体' ,
                  type: 'textarea'
                },
                {
                  label: '清除后回调',
                  prop: 'clearCb',
                  placeholder: '清除后回调方法,eg: $.A004="", $表示当前表单数据' ,
                  type: 'textarea',
                  show: '$.options.clearable'
                },
                {
                  label: '联动关联',
                  prop: 'linkage',
                  type: 'switch',
                  default: false,
                  show: false,
                  span: 24,
                },
                {
                  label: '联动关联',
                  prop: 'linkData', 
                  default: [],
                  show: false,
                  span: 24,
                },

            ]
        }
        // ,
        // {
        //     label: '属性',
        //     prop: 'options',
        //     alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
        //     collapse: true, // 是否启用 collapse 必须alone=true
        //     column: [ 
        //         {
        //           label: '联动关联',
        //           prop: 'linkData',
        //           type: 'switch',
        //           default: false,
        //           span: 24,
        //         } ,



        //     ]
        // }
    ] 
}
 

export default obj


