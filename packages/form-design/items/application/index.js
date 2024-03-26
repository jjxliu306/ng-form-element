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


export default {
  type: 'application',
  name: $t('ngform.item.application'),//'应用组件',
  icon: 'icon-tradingdata',
  list: list 
}