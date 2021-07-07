import axios from 'axios'

const request = axios.create({
  withCredentials: false
})

/**
 * 请求拦截
 */
request.interceptors.request.use(
  config => {
    // 判断是否有自定义的配置
    if(window.httpConfig) {
      let _config = window.httpConfig(config)
      if(_config) {
        config = _config 
      }
    }
    return config
  },
  error => {
    console.log('error', error)
    return Promise.reject(new Error(error).message)
  }
)

request.interceptors.response.use(
  response => { 
    return response.data
  },
  error => {
    console.log('error', error)
    return Promise.reject(new Error(error).message)
  }
)

export default request
