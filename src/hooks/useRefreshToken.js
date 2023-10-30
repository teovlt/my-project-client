import { axiosPrivate } from '../api/axios'
import store from '../store'

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      const res = await axiosPrivate.get('/auth/refresh-token')
      store.dispatch('setUser', { ...store.state.user, token: res.data.accessToken })
      store.commit('setLoggedIn', true)

      return res.data.accessToken
    } catch (error) {}
  }
  return { refresh }
}

export default useRefreshToken
