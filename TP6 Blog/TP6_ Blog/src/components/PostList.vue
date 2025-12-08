<template>
  <div class="post-list">
    <h2>Articles du Blog</h2>
    <div v-if="loading" class="loading">Chargement...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="posts.length === 0" class="no-posts">Aucun article disponible</div>
    <div v-else class="posts-grid">
      <SinglePost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SinglePost from './SinglePost.vue'

interface Post {
  id: string
  title: string
  body: string
  tags: string[]
}

defineProps<{
  posts: Post[]
  loading?: boolean
  error?: string | null
}>()
</script>

<style scoped>
.post-list {
  flex: 1;
}

.post-list h2 {
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2rem;
}

.loading,
.error,
.no-posts {
  padding: 2rem;
  text-align: center;
  color: #666;
  font-size: 1.125rem;
}

.error {
  color: #e74c3c;
}

.posts-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
