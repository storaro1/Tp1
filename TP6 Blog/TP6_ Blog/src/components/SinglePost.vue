<template>
  <div class="single-post">
    <h3>{{ post.title }}</h3>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">
        #{{ tag }}
      </span>
    </div>
    <p class="snippet">{{ snippet }}</p>
    <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="read-more">
      Lire la suite →
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Post {
  id: string
  title: string
  body: string
  tags: string[]
}

const props = defineProps<{
  post: Post
}>()

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + '...'
})
</script>

<style scoped>
.single-post {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #f0f0f0;
}

.single-post:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
  border-color: #667eea;
}

.single-post h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #1a202c;
  font-size: 1.5rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
}

.snippet {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.read-more:hover {
  color: #764ba2;
}
</style>
