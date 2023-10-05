import { localStorageKeys } from '@/shared/constants'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/'
export const authApi = axios.create()

authApi.interceptors.request.use(
  (config) => {
    localStorage.getItem(localStorageKeys.tokens)

    return config
  },
  (error) => {},
)

export default axios
export const authAxios = authApi
