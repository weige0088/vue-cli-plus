import { BASE_URL } from '@/config/variables'
import Axios from 'axios'
import qs from 'qs'

/**
 * Set global config for axios
 */
const axios = Axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

/**
 * Intercept request
 * If request's method is post, use qs module
 */
axios.interceptors.request.use(
  config => {
    // use qs for post method
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }

    return config
  },
  error => Promise.reject(error)
)

/**
 * Intercept response
 */
axios.interceptors.response.use(
  response => response,
  error => {
    const errMsg = error instanceof Error
      ? error.message
      : error
    console.log(`error: ${errMsg}`)

    return Promise.reject(error)
  }
)

export default axios
