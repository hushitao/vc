import axios from 'axios'
// import Vue from 'vue';
const service = axios.create({
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: true // 允许携带cookie
})
/**
 * 请求拦截
 */
service.interceptors.request.use(
  config => {
    // 在发送请求做一些事情
    if (config.url) {
      let reqUrl = config.url
      // 如果url不是以http开头的
      if (window.location.href.indexOf('rome-open.laiyifen') != -1) {
        //生产环境
        config.url =
          'http://innerapi-open.laiyifen.com/scm-pos-service' + reqUrl
        config.headers['X-Co-Client'] = '97B09A4FDCAF4A218A3730887CB37DD4'
        console.log('生产1')
      } else if (window.location.href.indexOf('rome.laiyifen.com') != -1) {
        //生产环境
        config.url = 'http://innerapi-zt.laiyifen.com/scm-pos-service' + reqUrl
        config.headers['X-Co-Client'] = '97B09A4FDCAF4A218A3730887CB37DD4'
        console.log('生产2')
      } else if (window.location.href.indexOf('.stg') != -1) {
        //stg环境
        config.url =
          'https://innerapi-zt.stg.laiyifen.com/scm-pos-service' + reqUrl
        config.headers['X-Co-Client'] = 'A21C9B1E57D248D2837F5DC576958333'
      } else if (window.location.href.indexOf('.test') != -1) {
        config.url =
          'https://innerapi-zt.test.laiyifen.com/scm-pos-service' + reqUrl
        config.headers['X-Co-Client'] = '11F2B1577EE8473CA8D5C2C1E7DB9F82'
      } else if (window.location.href.indexOf('.dev.laiyifen.com') != -1) {
        config.url =
          'http://innerapi.ztdev.laiyifen.com/scm-pos-service' + reqUrl
        config.headers['X-Co-Client'] = '9B9A5EB2C14B47268D44C9763BC0DAEC'
      } else if (window.location.href.indexOf('localhost:') != -1) {
        config.url = reqUrl
        // config.headers['X-Co-Client'] = 'A21C9B1E57D248D2837F5DC576958333'
      }
      /* switch (process.env.NODE_ENV) {
        case 'production':
          config.url =
            'https://innerapi-zt.stg.laiyifen.com/scm-pos- ' + reqUrl
          config.headers['X-Co-Client'] = 'A21C9B1E57D248D2837F5DC576958333'
          break
        case 'development':
          config.url = reqUrl;
          break
        case 'develop':
          config.url =
            'http://innerapi.ztdev.laiyifen.com/scm-pos-service' + reqUrl
          config.headers['X-Co-Client'] = '9B9A5EB2C14B47268D44C9763BC0DAEC'
          break
        case 'test':
          config.url =
            'https://innerapi-zt.test.laiyifen.com/scm-pos-service' + reqUrl
          config.headers['X-Co-Client'] = '11F2B1577EE8473CA8D5C2C1E7DB9F82'
          break
      } */
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
export default service
