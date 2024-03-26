import { t , $t } from '../../../locale/index.js' 
// 扫描下面目录中所有的index.js 然后穷举后返回 
const chartFiles = require.context('./', true, /index\.js$/)

let list = []

chartFiles.keys().filter((key)=>key != './index.js').forEach((key) => {
  
  const config = chartFiles(key).default;
  if(config.type)  
    list = list.concat(config)
})
 
// 按照seq排序
list = list.sort(function(a,b){
  return a.seq - b.seq
})

list.forEach(t=> {
  // 不需要事件和监听
  t.event_ = false
  t.listen_ = false
})

export default {
  type: 'decorate',
  name: $t('ngform.item.decorate'),//'装饰组件',
  icon: 'icon-tradingdata',
  list: list 
}