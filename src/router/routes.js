import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

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
  // Vérifiez si la route actuelle a la métadonnée requireAuth à true
  const requiresAuth = to.matched.some((record) => record.meta.requireAuth)

  // Vérifiez si l'utilisateur n'est pas authentifié et que la route nécessite une authentification
  if (requiresAuth && store.state.user === null) {
    // Redirigez l'utilisateur vers la page de connexion
    next({ name: 'login' })
  } else {
    // L'utilisateur est authentifié ou la route ne nécessite pas d'authentification, continuez normalement
    next()
  }
})

export default router
