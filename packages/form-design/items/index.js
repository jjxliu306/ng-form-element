import Vue from 'vue'
import { translateConfig } from '../../utils/index.js'
import cloneDeep from 'lodash/cloneDeep'
  
// 扫描下面目录中所有的index.js 然后穷举后返回
import baseConfig from './base/index.js' 

const list = [ baseConfig  ]


// 将配置信息放到全局变量中
let itemConfig = {}
list.forEach(t=> {
  	t.list.forEach(n=> {
  		const nclone = cloneDeep(n)
	  	delete nclone.component
	  	delete nclone.properties 
	  	itemConfig[n.type] = nclone 
  	})
  
})

Vue.prototype.$itemConfig = itemConfig

// 将配置项转换为普通json配置
list.forEach(t=> {
	t.list = translateConfig(t.list) 
}) 

export default list
 