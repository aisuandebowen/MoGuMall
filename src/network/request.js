import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(
    // 请求成功 
    config => {
      // 将config传回去
      return config
    },
    // 请求失败
    err => {
      console.log(err);
      return err
    }
  )

  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err);
      return err
    }
  )

  // 发送网络请求
  return instance(config)
}
