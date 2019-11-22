import axios from './config'

export default function get (url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, data).then(res => {
      resolve(res)
      console.log(res, 'config')
    }).catch(err => reject(err))
  })
}
