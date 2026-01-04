import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import './style.css'
import App from './App.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import EventList from './components/EventList.vue'

// Configuration du routeur
const routes = [
  {
    path: '/',
    redirect: '/events'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresGuest: true }
  },
  {
    path: '/events',
    name: 'Events',
    component: EventList,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de navigation
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresGuest && currentUser) {
    next('/events')
  } else {
    next()
  }
})

// Attendre que Firebase initialise l'état d'authentification
let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.mount('#app')
  }
})
