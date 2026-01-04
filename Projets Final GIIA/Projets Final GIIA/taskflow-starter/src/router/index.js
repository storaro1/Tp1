import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProjectDetailsView from '../views/ProjectDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView,
      meta: { requiresGuest: true }
    },
    {
      path: '/login',
      redirect: '/auth'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/project/:id',
      name: 'ProjectDetails',
      component: ProjectDetailsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    // Protected route without authentication - redirect to auth
    next('/auth')
  } else if (requiresGuest && currentUser) {
    // Guest route (login/register) when already authenticated - redirect to dashboard
    next('/dashboard')
  } else {
    // Allow navigation
    next()
  }
})

export default router