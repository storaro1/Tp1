import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'

// Auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
    beforeEnter: requireNoAuth
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import('../views/CategoryView.vue'),
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/discussion/:id',
    name: 'Discussion',
    component: () => import('../views/DiscussionView.vue'),
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/create-discussion',
    name: 'CreateDiscussion',
    component: () => import('../views/CreateDiscussion.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/moderation',
    name: 'Moderation',
    component: () => import('../views/Moderation.vue'),
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
