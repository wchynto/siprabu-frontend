import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './publicRoutes'
import adminRoutes from './adminRoutes'
import { useAuthStore } from '@/stores/auth'

const routes = [
  ...publicRoutes,
  ...adminRoutes.map(route => ({
    ...route,
    meta: { requiresAuth: true, ...route.meta }
  }))
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  authStore.checkAuth()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'signin' })
  } else {
    next()
  }
})

export default router
