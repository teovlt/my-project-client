import { createRouter, createWebHistory } from 'vue-router'
import PersistLogin from '../components/PersistLogin.vue'
import AuthGuard from '../components/AuthGuard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
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
    {
      path: '/',
      component: PersistLogin,
      children: [
        {
          path: '/',
          component: AuthGuard, // Utilisez AuthGuard comme garde de navigation
          children: [
            {
              path: '/',
              name: 'home',
              component: () => import('../views/HomeView.vue'),
            },
            {
              path: '/about',
              name: 'about',
              component: () => import('../views/AboutView.vue'),
            },
          ],
        },
      ],
    },
  ],
})

export default router
