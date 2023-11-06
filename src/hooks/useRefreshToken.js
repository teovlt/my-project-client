import { axiosPrivate } from '../api/axios'
import store from '../store'

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      const res = await axiosPrivate.get('/auth/refresh-token')
      return res.data.accessToken
    } catch (error) {}
  }
  return { refresh }
}

export default useRefreshToken
