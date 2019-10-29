import axios from 'axios'

export function request(config) {  /* 1. 创建axios实例 */
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/v1',
    timeout: 50000
  })

  instance.interceptors.response.use(resdata => {    /* 响应拦截 */
    return resdata.data /* 拦截后要放行 */
  }, err => {
    console.log(err);
    return err
  })

  return instance(config) /* 返回一个Promise */
}
