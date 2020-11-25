// 导入颜色选择器组件
import VueDragFormdesign from './vue-drag-formdesign'
 
/**
 * UI组件, 统一使用饿了么桌面端组件库(https://github.com/ElemeFE/element）
 *
 * 使用:
 *  1. 项目中需要的组件进行释放(解开注释)
 *
 * 注意:
 *  1. 打包只会包含释放(解开注释)的组件, 减少打包文件大小
 */
import Vue from 'vue'
import {
  Dialog,
  Autocomplete,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
   Select,
   Option,
   OptionGroup,
  Button,
 ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker, 
  Tooltip, 
  Form,
  FormItem,
  Tabs,
  TabPane, 
  Slider,
  Row,
  Col,
  Upload, 
  Card,
  Rate, 
  Divider,
  Tree ,
   Collapse,
   CollapseItem,
   Cascader, 
   Container,
  Header,
   Aside,
   Main, 
  // Footer,
  Loading,
  MessageBox,
  Message
  // Notification
} from 'element-ui'
 
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Autocomplete)   
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(Rate)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker) 
Vue.use(Tooltip) 
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane) 
Vue.use(Slider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload) 
Vue.use(Card)
Vue.use(Rate)  
Vue.use(Collapse)
Vue.use(CollapseItem) 

Vue.use(Cascader) 
Vue.use(Tree)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main) 

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox 
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

Vue.prototype.$ELEMENT = { size: 'mini' }



// 存储组件列表
const components = [
  VueDragFormdesign
]
 
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
 
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  VueDragFormdesign
}