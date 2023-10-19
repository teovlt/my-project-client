import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { axiosPrivate } from '../api/axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requireAuth: true,
      },
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        requireAuth: true,
      },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        requireAuth: false,
      },
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        requireAuth: false,
      },
      component: () => import('../views/SignInView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requireAuth)
  // Vérifiez si l'utilisateur est authentifié
  if (!store.state.user && requiresAuth) {
    try {
      const res = await axiosPrivate.get('/auth/refresh-token')
      store.dispatch('setUser', { token: res.data.accessToken, ...res.data.user })
      next()
    } catch (err) {
      console.log(err.message)
    }
    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    next('/login')
  } else {
    // L'utilisateur est authentifié, continuez normalement
    next()
  }
})

export default router
