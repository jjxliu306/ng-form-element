// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
 
import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
  

const obj = {}
 
obj.type = 'ngImage'//, // 表单类型 
obj.component = BaseIndex
obj.properties = BaseProperties

// 序号 实际在json中删除
obj.seq = 15

// 补充配置样式
obj.options = {
    imgurl: '',
    style: ''
}
 

export default obj


