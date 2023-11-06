import axiosPrivate from '../api/axios'
import useRefreshToken from './useRefreshToken'
import store from '../store'

const useAxiosPrivate = () => {
  const { refresh } = useRefreshToken()

  const requestIntercept = axiosPrivate.interceptors.request.use(
    (config) => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${store.state.user?.accessToken}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  const responseIntercept = axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config
      if (error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true
        const newAccessToken = await refresh()
        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
        return axiosPrivate(prevRequest)
      }
      return Promise.reject(error)
    }
  )

  return () => {
    axiosPrivate.interceptors.request.eject(requestIntercept)
    axiosPrivate.interceptors.response.eject(responseIntercept)
  }
}

export default useAxiosPrivate
