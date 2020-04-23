import axios from 'axios'
import querystring from 'querystring'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import storage from './storage'
const buildEnv = process.env.NODE_ENV
const baseURL = buildEnv === 'development' ? '/api' : 'http://106.52.185.137/:3001'
// axios 配置
axios.defaults.timeout = 30000// 请求超时，适当修改
axios.defaults.baseURL = baseURL
// http request 拦截器
axios.interceptors.request.use(config => {
  config.headers.authorization = storage.get('userInfo').token || ''
  NProgress.start()
  return config
}, error => {
  console.error(error)
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  NProgress.done()
  return response
}, error => {
  NProgress.done()
  return Promise.resolve(error.response)
})

/**
 * 封装axios的通用请求
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数 fn(返回的数据,错误信息)
 * @param  {Function} progress  上传进度函数 fn(返回的数据)
 * @return
 */
function ajax(url, data, fn, progress = function () {}) {
  NProgress.start()
  let head = 'application/x-www-form-urlencoded; charset=UTF-8'
  if (Object.prototype.toString.call(data) === '[object FormData]') {
    head = 'multiple/form-data'// 上传文件
  } else if (data.contentType === 'json') {
    head = 'application/json;charset=utf-8'
    data = data.data
  } else {
    data = querystring.stringify(data)
  }
  axios({
    method: 'post',
    url,
    data: data,
    onUploadProgress: event => {
      progress.call(this, Math.round((event.loaded * 100) / event.total))
    },
    headers: { 'Content-Type': head }
  }).then(
    (res) => {
      res = res || { status: 404, statusText: '服务器出错！' }
      if (res.status === 200 || res.status === 304 || res.status === 400) {
        return res
      } else {
        return {
          status: res.status,
          data: {
            success: false,
            data: {},
            message: res.statusText
          }
        }
      }
    }
  ).then(
    (res) => {
      let err
      if (res.data && !res.data.success) {
        err = res.data.message
        this.$message({
          'message': err,
          'type': 'error'
        })
        if (err.includes('token')) {
          storage.remove('userInfo')
          location.href = '/login'
        }
      }
      if (!err && typeof res.data.data !== 'object') {
        console.error('返回对象不能为空！')
      }
      fn.call(this, err ? null : res.data.data, err)
    }
  ).catch(err => {
    console.log('代码有问题：', err)
  })
}

export default ajax
