import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1582528983545460847732","bc":"310100"}' }
})
export default instance
