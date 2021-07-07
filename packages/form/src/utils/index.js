
export const http_get_file_list_url = 'http://localhost:9000/sxfw/file/list';
export const http_upload_file_url = 'http://localhost:9000/sxfw/file/upload'
export const http_down_file_url = 'http://localhost:9000/sxfw/file/fileDown'

 

export function dynamicFun(script , model , key="$") {
  if(!script) return false 
  const func = script.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 
  const Fn = new Function(key, func)
  return Fn(model)
}
 
 
 