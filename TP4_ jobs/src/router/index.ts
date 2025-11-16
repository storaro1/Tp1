import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../views/EditJob.vue'
import JobDetail from '../views/JobDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add',
      name: 'add-job',
      component: AddJob,
    },
    {
      path: '/jobs/:id',
      name: 'job-detail',
      component: JobDetail,
    },
    {
      path: '/jobs/:id/edit',
      name: 'edit-job',
      component: EditJob,
    },
  ],
})

export default router
