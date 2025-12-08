import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import TagPostsView from '@/views/TagPostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/posts/create',
      name: 'CreatePost',
      component: CreatePostView
    },
    {
      path: '/posts/:id/edit',
      name: 'EditPost',
      component: CreatePostView
    },
    {
      path: '/posts/:id',
      name: 'PostDetail',
      component: PostDetailView
    },
    {
      path: '/tags/:tag',
      name: 'TagPosts',
      component: TagPostsView
    }
  ],
})

export default router
