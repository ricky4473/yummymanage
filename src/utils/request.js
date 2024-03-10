import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8000/apis',
  timeout: 5000,
})


request.interceptors.response.use(config => config)

export { request }
