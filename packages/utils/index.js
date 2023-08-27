 
import cloneDeep from 'lodash/cloneDeep'
 
/**
* 动态函数
* @param script 函数脚本
* @param model 整个表单的数据
* @param key 当前整改表单数据的标识key 
* @param row 如果为batch 标识当前行的数据
* @param rowKey 如果为batch 标识当前行数据的key
* @return 验证结果 函数脚本执行结果
*/
export function dynamicFun(script , model , key="$" , row , rowKey) {
  if(!script) return false 
  const func = script.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 

  if(row && rowKey) {
    const Fn = new Function(key , rowKey, func)
    return Fn(model , row)
  } else {
    const Fn = new Function(key, func)
    return Fn(model)
  }
 
} 


 
/**
* 动态函数
* @param script 函数脚本
* @param model 整个表单的数据
* @param key 当前整改表单数据的标识key 
* @param row 如果为batch 标识当前行的数据
* @param rowKey 如果为batch 标识当前行数据的key
* @return 验证结果 函数脚本执行结果
*/
export function dynamicVoidFun(script , model , key="$" , row , rowKey) {
  if(!script) return false 
  const func = script //.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 

  if(row && rowKey) {
    const Fn = new Function(key , rowKey, func)
     Fn(model , row)
  } else {
    const Fn = new Function(key, func)
     Fn(model)
  }
 
} 


export function dateFormater(date , fmt) {  
  const o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "H+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}
    
 

// 定制组件参数的规范和转换   
// 配置数组转 配置项 
// 配置最多两层，不走迭代
export function translateConfig(config = []) {

    const fs = (v) => {
      const formOptions = v.options 

      delete v.options

        if(formOptions.group && formOptions.group.length > 0) {
            formOptions.group.forEach(t=> {
                if(t.label && t.prop && t.default != null && !t.column) {
                    v[t.prop] = t.default
                } else if(t.column){
                    v[t.prop] = {}
                    t.column.filter(tf=>tf.prop).forEach(tc=> {
                        let jdefault = tc['default']
                        if (jdefault == undefined || jdefault == null) {
                            jdefault = ''
                        }

                        v[t.prop][tc.prop] = jdefault
                    }) 
                }

            }) 
        }

        if(formOptions.columns && formOptions.columns.length > 0) {
            formOptions.columns.filter(tf=>tf.prop).forEach(tc=> {
                let jdefault = tc['default']
                if (jdefault == undefined || jdefault == null) {
                    jdefault = ''
                }

                v[tc.prop] = jdefault
            }) 
        }
      
    }

    const cloneConfig = cloneDeep(config)
    cloneConfig.map(t => fs(t))

    return cloneConfig

}



/**
* 数据复制并且格式化
*/
export function cloneDeepAndFormat(data) {
  const clone = cloneDeep(data)
  delete clone.icon 
 

  let idx = 1
  // 2023-08-27 lyf 迭代判断是否包含子组件，全部替换子组件的key和model
  const iterKeyReplace_ = (v)=> {
    if(v instanceof Array){
      v.forEach(c=> {
        iterKeyReplace_(c)
      })
    } else if(v.key) {
      // 重置key和model
      idx++
      const vkey = v.type + "_" + new Date().getTime() + '' + idx
      v['key'] = vkey 
      v['model'] = vkey 
    }

    for(let k in v) {
      const kd = v[k]
      if(kd instanceof Array) {
        iterKeyReplace_(kd)
      }
      
    }
  }

  iterKeyReplace_(clone)

  return clone 
}