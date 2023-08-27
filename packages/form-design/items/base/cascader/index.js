// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'  

const obj = {}
 
obj.type = 'cascader'//, // 表单类型 
obj.component = BaseIndex
obj.properties = BaseProperties

// 序号 实际在json中删除
obj.seq = 15

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
            default: $t('ngform.item.cascader.name'),//'级联选择器',
            span: 24,
        },
        {
            label: $t('ngform.item.label_width'), 
            prop: 'labelWidth',
            type: 'number',
            min: -1,
            max: 1000,
            default: -1,
            span: 24,
        },
        {
            label: $t('ngform.item.width'), 
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
        {
            label: $t('ngform.item.model') , //'数据字段', 
            prop: 'model',
            span: 24,
        },
        {
            label: $t('ngform.item.key') , //'数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
        },
        {
            type: 'divider',
            label: $t('ngform.item.validate_rule') , //'效验规则'
        },
        { 
            prop: 'rules',
            type: 'rules',
            labelWidth: 0,
            default: [{ 
                required: false, // 必须填写
                message: $t('ngform.item.required'), //"必填项",
                trigger: ['blur','change'] 
            }],
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
                    label: $t('ngform.item.default_value') ,//'默认值', 
                    prop: 'defaultValue',
                    default: [] ,
                    show: false,
                    span: 24,
                }, 
                {
                    label: $t('ngform.item.placeholder') ,//'输入提示', 
                    prop: 'placeholder',
                    default: $t('ngform.item.placeholder_input') ,// '请输入',
                    span: 24,
                },

                 // dynamic: 0, // 数据获取方式
                 //  remoteFunc: '',//远程获取数据链接
                 //  dataPath: '',
                 //  remoteValue:'' ,
                 //  remoteLabel:'',
                 //  dictType: '' ,// 数据字典类型
                {
                    label: $t('ngform.item.datasource') ,//'数据获取', 
                    prop: 'dynamic',
                    default: 0,
                    span: 24,
                    type: 'select', 
                    show: false,
                    dicData: [
                        {label: $t('ngform.item.datasource_static')/*'静态数据'*/ , value: 0},
                        {label: $t('ngform.item.datasource_api')/*'API接口'*/ , value: 1}
                    ]
                }, 
                {
                    label: $t('ngform.item.datasource_static'),//'静态数据', 
                    prop: 'options',
                    default: [
                        {
                          value: "1",
                          label: "下拉框1",
                          children: [
                            {
                                value: "11",
                                label: "下拉框11",
                            },
                            {
                                value: "12",
                                label: "下拉框12",
                            }
                          ]
                        }
                    ],
                    span: 24,
                    //type: 'kv',
                    show: false
                }, 
                {
                  label: $t('ngform.item.method_type') ,//'方法类型',
                  default: 'get',
                  prop: 'methodType', 
                  show: false
                } ,
                {
                  label: $t('ngform.item.post_data') ,//'post请求携带数据', 
                  prop: 'dynamicPostData', 
                  show: false
                } ,
                {
                  label: $t('ngform.item.api_path') ,//'远程获取数据链接',
                  prop: 'remoteFunc', 
                  show: false
                } ,
                {
                  label: $t('ngform.item.data_path') ,//'数据路径',
                  prop: 'dataPath', 
                  show: false
                } ,
                {
                  label: $t('ngform.item.filed_value') ,//'数据值字段',
                  prop: 'remoteValue', 
                  show: false
                } ,
                {
                  label: $t('ngform.item.filed_label') ,//'数据标签字段',
                  prop: 'remoteLabel', 
                  show: false
                } , 
                {
                  label: $t('ngform.item.filed_children') ,//'下级字段',
                  prop: 'remoteChildren', 
                  show: false
                } , 
                
                {
                  label: $t('ngform.item.multiple'),//'多选',
                  prop: 'multiple',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
                {
                  label: $t('ngform.item.search'),//'可搜索',
                  prop: 'showSearch',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
                
                {
                  label: $t('ngform.item.clearable'),//'可清除',
                  prop: 'clearable',
                  type: 'switch',
                  default: false,
                  span: 24,
                } ,
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


