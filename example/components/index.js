import NgImage from './ng-image/index.js'
import city from './city/index.js'

import { utils , addCustomConfig } from '../../packages/index.js'

// 转换address 利用ng-form的json配置还原配置能力
const transCity = utils.translateConfig(city) 

// 将此组件追加到依赖ng-form还原配置中
addCustomConfig(city.type , city)

export default [ NgImage , transCity]