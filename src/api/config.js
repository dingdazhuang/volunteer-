import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'https://api.yunzhiyuan100.com/api/2.0' : 'https://api.yunzhiyuan100.com/api/2.0'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = false

export default axios
