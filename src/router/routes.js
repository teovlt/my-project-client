import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: '/register',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/login',
      name: 'signIn',
      component: () => import('../views/SignInView.vue'),
    },
  ],
})

export default router
