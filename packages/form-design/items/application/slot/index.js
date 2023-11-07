// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
//import BaseProperties from './properties.vue'
import { t , $t } from '../../../../locale/index.js'    

const obj = {}
 
obj.type = 'slot'//, // 表单类型 
obj.component = BaseIndex
// 序号 实际在json中删除
obj.seq = 2

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
            default: $t('ngform.item.slot.name'),//'输入框',
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
        // {
        //     label: $t('ngform.item.model') , //'数据字段', 
        //     prop: 'model',
        //     show: false,
        //     span: 24,
        // },
        {
            label: $t('ngform.item.slot.slot_name') , //'数据字段', 
            prop: 'model', 
            placeholder: $t('ngform.item.slot.name_placeholder'),// '扩展插槽的名称,英文',
            span: 24,
        },
        {
            label: $t('ngform.item.key') , //'数据KEY', 
            prop: 'key',
            show: false,
            span: 24,
        } 
    ] 
}
 

export default obj


